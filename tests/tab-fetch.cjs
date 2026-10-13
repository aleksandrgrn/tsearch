const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {transformSync} = require('@babel/core');
const root = path.resolve(__dirname, '..');
function load(file, globals = {}, mocks = {}) {
  const filename = path.join(root, file);
  const code = transformSync(fs.readFileSync(filename, 'utf8'), {
    filename, babelrc: false, configFile: false,
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    plugins: ['@babel/plugin-proposal-class-properties'],
  }).code;
  const module = {exports: {}};
  const req = name => {
    if (Object.hasOwn(mocks, name)) return mocks[name];
    if (name.endsWith('/getLogger')) return () => Object.assign(() => {}, {debug() {}, warn() {}, error() {}});
    if (name.startsWith('.')) return load(path.relative(root, path.resolve(path.dirname(filename), name + '.js')), globals, mocks);
    return require(name);
  };
  vm.runInNewContext(code, {module, exports: module.exports, require: req, console, URL, AbortController, setTimeout, clearTimeout, ...globals}, {filename});
  return module.exports;
}
function content(fetch) {
  const messages = [], window = {stop() {throw new Error('Must not stop the user page');}};
  const document = {body: {parentNode: {textContent: 'user page'}}};
  const chrome = {runtime: {sendMessage: msg => messages.push(msg)}};
  load('src/tabFetch.js', {window, document, chrome, fetch, location: new URL('https://rutracker.org/forum/index.php')}, {
    'whatwg-fetch': {fetch},
    'abortcontroller-polyfill/dist/abortcontroller-polyfill-only': {},
    './tools/arrayBufferToBase64': buffer => Buffer.from(buffer).toString('base64'),
  });
  return {window, document, messages};
}
test('tab fetch preserves the user page and native response metadata', async () => {
  const response = new Response('result', {status: 200, headers: {'content-type': 'text/html; charset=windows-1251'}});
  Object.defineProperty(response, 'url', {value: 'https://rutracker.org/forum/tracker.php'});
  let signal;
  const c = content(async (url, options) => {signal = options.signal; return response;});
  await c.window.tabFetch(1, response.url, {method: 'POST', body: 'nm=ubuntu'}, true);
  assert.equal(c.document.body.parentNode.textContent, 'user page');
  assert.equal(c.messages[0].result.result.response.url, response.url);
  assert.equal(c.messages[0].result.result.response.status, 200);
  assert.equal(Buffer.from(c.messages[0].result.result.base64, 'base64').toString(), 'result');
  await c.window.tabFetchAbort(1);
  assert.equal(signal.aborted, false, 'completed request controller must be released');
});
test('GET/HEAD omit bodies and non-2xx response is reported as an error', async () => {
  const c = content(async (url, options) => {
    assert.equal(options.body, undefined);
    return new Response('denied', {status: 403});
  });
  await c.window.tabFetch(2, 'https://rutracker.org/forum/tracker.php', {method: 'GET', body: 'ignored'}, true);
  await c.window.tabFetch(3, 'https://rutracker.org/forum/tracker.php', {method: 'HEAD', body: 'ignored'}, true);
  assert.equal(c.messages.length, 2);
  for (const m of c.messages) assert.equal(m.result.error.statusCode, 403);
});
test('pending tab fetch is abortable and produces one error response', async () => {
  let started;
  const ready = new Promise(resolve => {started = resolve;});
  const c = content((url, options) => new Promise((resolve, reject) => {
    options.signal.addEventListener('abort', () => reject(new Error('Aborted')));
    started();
  }));
  const pending = c.window.tabFetch(4, 'https://rutracker.org/forum/tracker.php', {method: 'POST'}, true);
  await ready;
  await c.window.tabFetchAbort(4);
  await pending;
  assert.equal(c.messages.length, 1);
  assert.match(c.messages[0].result.error.message, /Aborted/);
});
function event() {
  const listeners = new Set();
  return {addListener: fn => listeners.add(fn), removeListener: fn => listeners.delete(fn), hasListener: fn => listeners.has(fn), listeners};
}
function background(existing = true) {
  const calls = {created: [], removed: [], injected: []};
  const chrome = {
    permissions: {contains() {throw new Error('Do not request tabs permission when host access suffices');}},
    tabs: {
      onRemoved: event(), onUpdated: event(),
      query: async () => existing ? [{id: 23, url: 'https://rutracker.org/forum/index.php'}] : [],
      create: async opts => {calls.created.push(opts); return {id: 24};},
      remove: id => calls.removed.push(id),
    },
    scripting: {executeScript: async opts => {calls.injected.push(opts); return [{result: {result: true}}];}},
  };
  const Class = load('src/background/tabFetchBg.js', {chrome, navigator: {userAgent: 'Chrome'}}).default;
  return {bg: new Class(), calls, chrome};
}
test('background uses an existing tracker tab without closing it or extra permissions', async () => {
  const {bg, calls, chrome} = background();
  const id = await bg.request(10, 'https://rutracker.org', 'https://rutracker.org/forum/tracker.php', {method: 'POST'});
  const pending = bg.initRequest(id);
  await new Promise(resolve => setTimeout(resolve, 10));
  assert.equal(calls.created.length, 0);
  assert.ok(calls.injected.length >= 1);
  assert.equal(calls.injected[0].target.tabId, 23);
  bg.handleResponse(id, {result: {value: 'ok'}}, bg.idRequestMap.get(id).sessionIndex);
  assert.equal((await pending).value, 'ok');
  await new Promise(resolve => setTimeout(resolve, 300));
  assert.equal(calls.removed.length, 0);
  assert.equal(chrome.tabs.onUpdated.listeners.size, 0);
});
test('background creates a normal tab when needed, retains it for login and aborts on close', async () => {
  const {bg, calls, chrome} = background(false);
  const id = await bg.request(10, 'https://rutracker.org', 'https://rutracker.org/forum/tracker.php', {method: 'POST'});
  const pending = bg.initRequest(id);
  const rejected = assert.rejects(pending, /Destroyed/);
  await new Promise(resolve => setTimeout(resolve, 10));
  assert.equal(calls.created.length, 1);
  assert.equal(calls.created[0].url, 'https://rutracker.org');
  for (const listener of [...chrome.tabs.onRemoved.listeners]) listener(24);
  await rejected;
  await new Promise(resolve => setTimeout(resolve, 300));
  assert.equal(bg.idRequestMap.size, 0);
  assert.equal(calls.removed.length, 0);
});

test('abort while choosing a tab prevents late creation, injection and listeners', async () => {
  const {bg, calls, chrome} = background(false);
  let choose;
  chrome.tabs.query = () => new Promise(resolve => {choose = resolve;});
  const id = await bg.request(10, 'https://rutracker.org', 'https://rutracker.org/forum/tracker.php', {});
  const pending = bg.initRequest(id);
  const rejected = assert.rejects(pending, /Aborted/);
  bg.abortRequest(id);
  await rejected;
  await new Promise(resolve => setTimeout(resolve, 300));
  choose([]);
  await new Promise(resolve => setTimeout(resolve, 10));
  assert.equal(calls.created.length, 0);
  assert.equal(calls.injected.length, 0);
  assert.equal(chrome.tabs.onUpdated.listeners.size, 0);
});

test('a replaced content request cannot remove the current controller or send stale results', async () => {
  const calls = [];
  const c = content((url, options) => new Promise((resolve, reject) => {
    calls.push({options, resolve});
    options.signal.addEventListener('abort', () => reject(new Error('Aborted')));
  }));
  const first = c.window.tabFetch(5, 'https://rutracker.org/forum/tracker.php', {}, true, 1);
  await new Promise(resolve => setTimeout(resolve, 0));
  const second = c.window.tabFetch(5, 'https://rutracker.org/forum/tracker.php', {}, true, 2);
  await new Promise(resolve => setTimeout(resolve, 0));
  calls[0].resolve(new Response('old'));
  await first;
  assert.equal(c.messages.length, 0);
  await c.window.tabFetchAbort(5, 1);
  assert.equal(calls[1].options.signal.aborted, false, 'late cancellation belongs to the previous document');
  await c.window.tabFetchAbort(5, 2);
  assert.equal(calls[1].options.signal.aborted, true);
  await second;
  assert.equal(c.messages.length, 1);
  assert.equal(c.messages[0].sessionId, 2);
});

test('reload starts a new session and ignores a late response from the old document', async () => {
  const {bg, calls, chrome} = background();
  const id = await bg.request(10, 'https://rutracker.org', 'https://rutracker.org/forum/tracker.php', {});
  const pending = bg.initRequest(id);
  await new Promise(resolve => setTimeout(resolve, 10));
  const request = bg.idRequestMap.get(id), oldSession = request.sessionIndex;
  for (const listener of [...chrome.tabs.onUpdated.listeners]) listener(23, {status: 'loading'});
  bg.handleResponse(id, {result: {value: 'old'}}, oldSession);
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(bg.idRequestMap.has(id), true);
  for (const listener of [...chrome.tabs.onUpdated.listeners]) listener(23, {status: 'complete'});
  await new Promise(resolve => setTimeout(resolve, 10));
  assert.ok(request.sessionIndex > oldSession);
  assert.equal(calls.injected.filter(c=>c.files).length, 2);
  bg.handleResponse(id, {result: {value: 'current'}}, request.sessionIndex);
  assert.equal((await pending).value, 'current');
  assert.doesNotThrow(()=>bg.handleResponse(id, {result: {}}, oldSession));
  await new Promise(resolve => setTimeout(resolve, 300));
});

test('navigation to another host fails without reinjecting the request', async () => {
  const {bg, calls, chrome} = background();
  const id = await bg.request(10, 'https://rutracker.org', 'https://rutracker.org/forum/tracker.php', {});
  const pending = bg.initRequest(id), rejected = assert.rejects(pending, /navigated/i);
  await new Promise(resolve => setTimeout(resolve, 10));
  for (const listener of [...chrome.tabs.onUpdated.listeners]) listener(23, {url: 'https://nnmclub.to/', status: 'loading'});
  await rejected;
  assert.equal(calls.injected.filter(c=>c.files).length, 1);
  await new Promise(resolve => setTimeout(resolve, 300));
});

test('an older response arriving after the latest completed is discarded', async () => {
  const resolves = [];
  const c = content(() => new Promise(resolve => resolves.push(resolve)));
  const first = c.window.tabFetch(8, 'https://rutracker.org/forum/tracker.php', {}, true, 1);
  await new Promise(resolve => setTimeout(resolve, 0));
  const second = c.window.tabFetch(8, 'https://rutracker.org/forum/tracker.php', {}, true, 2);
  await new Promise(resolve => setTimeout(resolve, 0));
  resolves[1](new Response('current'));
  await second;
  resolves[0](new Response('stale'));
  await first;
  assert.deepEqual(c.messages.map(m=>m.sessionId), [2]);
});

test('immediate retry after cancellation selects a fresh usable tab', async () => {
  const {bg, calls, chrome} = background(false);
  let choose, queries = 0;
  chrome.tabs.query = () => ++queries === 1 ? new Promise(resolve => {choose = resolve;}) : Promise.resolve([]);
  const id = await bg.request(10, 'https://rutracker.org', 'https://rutracker.org/forum/tracker.php', {});
  const first = bg.initRequest(id), rejected = assert.rejects(first, /Aborted/);
  bg.abortRequest(id);
  await rejected;
  choose([]);
  await new Promise(resolve => setTimeout(resolve, 0));
  const retryId = await bg.request(10, 'https://rutracker.org', 'https://rutracker.org/forum/tracker.php', {});
  const retry = bg.initRequest(retryId);
  await new Promise(resolve => setTimeout(resolve, 10));
  assert.equal(queries, 2);
  assert.equal(calls.created.length, 1);
  assert.equal(calls.injected.find(c=>c.files).target.tabId, 24);
  bg.handleResponse(retryId, {result: {value: 'ok'}}, bg.idRequestMap.get(retryId).sessionIndex);
  assert.equal((await retry).value, 'ok');
});
