const assert = require('node:assert/strict');
const test = require('node:test');
const {JSDOM} = require('jsdom');
const dom = new JSDOM('');
global.window = dom.window; global.document = dom.window.document;
process.env.BABEL_DISABLE_CACHE = '1';
require('@babel/register')({cache: false, babelrc: false, configFile: false,
 presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
 plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import']});
const {StatusCodeError} = require('../src/tools/errors.js');
const ExKitTracker = require('../src/sandbox/exKitTracker.js').default;

const response = (status, headers) => ({status, headers: new Headers(headers)});

test('403 with a Cloudflare challenge is marked; plain 403 is not', () => {
 assert.equal(new StatusCodeError(403, null, null, response(403, {'cf-mitigated': 'challenge'})).code, 'CHALLENGE_REQUIRED');
 assert.equal(new StatusCodeError(403, null, null, response(403, {})).code, undefined);
 assert.equal(new StatusCodeError(500, null, null, null).code, undefined);
});

test('tracker turns a challenge into a link to pass it; other errors pass through', async () => {
 const challenge = Object.assign(new Error('403'), {code: 'CHALLENGE_REQUIRED', statusCode: 403});
 const plain = Object.assign(new Error('403'), {statusCode: 403});
 const make = (auth) => { const t = new ExKitTracker(); t.code = {hooks: {}, auth}; return t; };
 const options = {url: 'https://tracker.test/forum/tracker.php'};

 global.API_request = () => Promise.reject(challenge);
 await assert.rejects(make({url: 'https://tracker.test/forum/login.php'}).request({}, options),
  err => err.code === 'CHALLENGE_REQUIRED' && err.url === 'https://tracker.test/forum/login.php');
 for (const auth of [undefined, {}, {loginForm: {selector: '#login'}}]) {
  await assert.rejects(make(auth).request({}, options),
   err => err.code === 'CHALLENGE_REQUIRED' && err.url === options.url);
 }

 global.API_request = () => Promise.reject(plain);
 await assert.rejects(make(undefined).request({}, options), err => err === plain);
});
