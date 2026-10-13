const assert = require('node:assert/strict');
const test = require('node:test');
const {JSDOM} = require('jsdom');
const dom = new JSDOM('');
global.window = dom.window; global.document = dom.window.document;
global.API_getInfo = () => ({profileOptions: {debugDumps: false}});
global.API_getDoc = body => new dom.window.DOMParser().parseFromString(body, 'text/html');
global.API_normalizeUrl = (base, url) => new URL(url, base).href;
process.env.BABEL_DISABLE_CACHE = '1';
require('@babel/register')({cache: false, babelrc: false, configFile: false,
 presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
 plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import']});
const ExKitTracker = require('../src/sandbox/exKitTracker.js').default;
test('full-width empty-result rows are not parsed as torrents; malformed result rows still report errors', async () => {
 const tracker = new ExKitTracker();
 await tracker.init({version: 3, selectors: {row: {selector: '#results>tbody>tr'},
   title: {selector: '.title', pipeline: [{name: 'getText'}]},
   url: {selector: '.title', pipeline: [{name: 'getProp', args: ['href']}]}}});
 const response = body => ({url: 'https://example.test/search', body: '<table id="results"><tbody>'+body+'</tbody></table>'});
 const errors = [], original = console.error;
 console.error = (...args) => errors.push(args[0]);
 try {
  for(const span of [10,11]) {
   const r = response(`<tr><td class="row1" colspan="${span}">Не найдено</td></tr>`);
   assert.equal(tracker.parseResponse({response:r},r).results.length,0);
  }
  assert.deepEqual(errors, []);
  const r = response('<tr><td colspan="10">Не найдено</td></tr><tr><td><a class="title" href="/topic/1">Ubuntu</a></td><td>1</td></tr>');
  const parsed = tracker.parseResponse({response:r},r);
  assert.equal(parsed.results.length,1);
  assert.equal(parsed.results[0].title,'Ubuntu');
  assert.equal(parsed.results[0].url,'https://example.test/topic/1');
  assert.deepEqual(errors, []);
  const broken = response('<tr><td>broken torrent</td><td>1</td></tr>');
  assert.equal(tracker.parseResponse({response:broken},broken).results.length,0);
  assert.deepEqual(errors, ['parseRow error']);
 } finally {console.error=original;dom.window.close();}
});
