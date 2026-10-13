const assert = require('node:assert/strict');
const {test, after} = require('node:test');
const path = require('node:path');
const qs = require('node:querystring');
const {JSDOM} = require('jsdom');

const dom = new JSDOM('<div id="root"></div>', {
  url: 'http://localhost/index.html#/',
  pretendToBeVisual: true,
});
global.window = dom.window;
global.document = dom.window.document;
global.location = dom.window.location;
Object.defineProperty(global, 'navigator', {value: dom.window.navigator, configurable: true});
global.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window);
global.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window);
global.chrome = {i18n: {getMessage: key => key}};

process.env.BABEL_DISABLE_CACHE = '1';
require('@babel/register')({
  cache: false,
  extensions: ['.js', '.jsx'],
  presets: ['@babel/preset-react', ['@babel/preset-env', {targets: {node: 'current'}}]],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ],
});
require.extensions['.less'] = () => {};

// Keep the real routes, Header, SearchForm and SearchSession lifecycle. Only
// unrelated page content and tracker I/O are replaced by local test fixtures.
for (const name of ['Profiles', 'Filters', 'ScrollTop', 'SearchPage', 'ComponentLoader']) {
  const filename = path.resolve(__dirname, `../src/components/${name}.jsx`);
  require.cache[filename] = {exports: {__esModule: true, default: () => null}};
}

// Initialize React's scheduler using jsdom's browser capabilities, rather than
// Node's persistent worker MessagePorts, then restore Node's test-runner API.
const NodeMessageChannel = global.MessageChannel;
global.MessageChannel = dom.window.MessageChannel;
const React = require('react');
const ReactDOM = require('react-dom');
const {Simulate} = require('react-dom/test-utils');
global.MessageChannel = NodeMessageChannel;
const {Router, Route, Switch} = require('react-router-dom');
const {Provider} = require('mobx-react');
const {createHashHistory} = require('history');
const routes = require('../src/routes.jsx').default;
const container = document.getElementById('root');
const nextTick = () => new Promise(resolve => setTimeout(resolve, 0));
after(() => dom.window.close());

async function mount(t, initialPath) {
  window.history.replaceState(null, '', `/index.html#${initialPath}`);
  let clock = 1000;
  const originalNow = Date.now;
  Date.now = () => clock;
  const searches = new Map();
  const started = [];
  const addedQueries = [];
  let sequence = 0;
  const rootStore = {
    options: {state: 'done', options: {requestQueryDescription: false}},
    history: {state: 'done', addQuery: query => addedQueries.push(query)},
    profiles: {state: 'done', profile: {}},
    trackers: {state: 'done'},
    searchForm: {
      query: '',
      setQuery(query) { this.query = query; },
      getSuggestions: () => [],
      fetchSuggestions() {},
      clearSuggestions() {},
    },
    createSearch(query) {
      const id = ++sequence;
      searches.set(id, {query, pages: [], search: () => started.push({id, query})});
      return id;
    },
    getSearch: id => searches.get(id),
    destroySearch: id => searches.delete(id),
  };
  const history = createHashHistory();
  ReactDOM.render(
    React.createElement(Router, {history},
      React.createElement(Provider, {rootStore},
        React.createElement(Switch, null,
          routes.map(route => React.createElement(Route, {key: route.path || 'fallback', ...route}))))),
    container,
  );
  t.after(async () => {
    ReactDOM.unmountComponentAtNode(container);
    Date.now = originalNow;
    await nextTick();
  });
  await nextTick();
  return {
    history, searches, started, addedQueries,
    advanceClock() { clock++; },
    submit(query = rootStore.searchForm.query) {
      rootStore.searchForm.setQuery(query);
      const form = container.querySelector('.search-from form');
      assert.ok(form, 'the search form must be visible');
      Simulate.submit(form);
    },
  };
}

function travel(history, method, expectedPath) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      unlisten();
      reject(new Error(`${method} did not reach ${expectedPath}`));
    }, 2000);
    const unlisten = history.listen((location, action) => {
      if (location.pathname + location.search !== expectedPath) return;
      clearTimeout(timer);
      unlisten();
      assert.equal(action, 'POP');
      resolve();
    });
    history[method]();
  });
}

test('resubmitting the same query starts a fresh search without a history entry', async t => {
  const app = await mount(t, '/search?query=avatar');
  const length = window.history.length;
  assert.deepEqual(app.started.map(search => search.query), ['avatar']);
  app.advanceClock();
  app.submit();
  assert.deepEqual(app.started.map(search => search.query), ['avatar', 'avatar']);
  assert.equal(app.searches.size, 1, 'the previous session must be destroyed');
  assert.equal(window.history.length, length);
  assert.equal(app.history.location.search, '?query=avatar');
});

test('rapid repeated submissions start separate sessions within the same millisecond', async t => {
  const app = await mount(t, '/search?query=avatar');
  const length = window.history.length;
  app.submit();
  app.submit();
  assert.deepEqual(app.started.map(search => search.query), ['avatar', 'avatar', 'avatar']);
  assert.equal(new Set(app.started.map(search => search.id)).size, 3);
  assert.equal(app.searches.size, 1);
  assert.equal(window.history.length, length);
});

test('new queries preserve encoding, Back and Forward after a repeated search', async t => {
  const app = await mount(t, '/search?query=avatar');
  const query = 'аватар & + / ? # % =';
  const target = '/search?' + qs.stringify({query});
  const length = window.history.length;
  app.advanceClock();
  app.submit(query);
  assert.equal(app.history.location.pathname + app.history.location.search, target);
  assert.equal(app.started.at(-1).query, query);
  assert.equal(window.history.length, length + 1);
  app.advanceClock();
  app.submit(query);
  assert.equal(app.started.length, 3);
  assert.equal(window.history.length, length + 1);
  app.advanceClock();
  await travel(app.history, 'goBack', '/search?query=avatar');
  assert.equal(app.started.at(-1).query, 'avatar');
  app.advanceClock();
  await travel(app.history, 'goForward', target);
  assert.equal(app.started.at(-1).query, query);
  assert.deepEqual(app.started.map(search => search.query), ['avatar', query, query, 'avatar', query]);
  assert.equal(app.searches.size, 1);
});

for (const initialPath of ['/', '/search', '/search?query=', '/search?query=%20%09%20']) {
  test(`${initialPath} shows one form, skips blank queries and permits searching`, async t => {
    const app = await mount(t, initialPath);
    assert.equal(container.querySelectorAll('.search-from form').length, 1);
    assert.equal(app.history.location.pathname, '/search');
    assert.deepEqual(app.started, []);
    assert.deepEqual(app.addedQueries, []);
    app.advanceClock();
    app.submit(' \t ');
    app.advanceClock();
    app.submit('');
    assert.deepEqual(app.started, []);
    assert.deepEqual(app.addedQueries, []);
    assert.equal(app.searches.size, 0);
    app.advanceClock();
    app.submit('аватар');
    assert.deepEqual(app.started.map(search => search.query), ['аватар']);
    app.advanceClock();
    app.submit('');
    assert.deepEqual(app.started.map(search => search.query), ['аватар']);
    assert.deepEqual(app.addedQueries, ['аватар']);
    assert.equal(app.searches.size, 0);
  });
}
