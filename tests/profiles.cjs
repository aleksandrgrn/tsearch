const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {transformSync} = require('@babel/core');
const {types, isStateTreeNode, destroy, getSnapshot} = require('mobx-state-tree');
const {isObservable} = require('mobx');
const root = path.resolve(__dirname, '..');
function load(file, chrome) {
  const filename = path.join(root, file);
  const code = transformSync(fs.readFileSync(filename, 'utf8'), {filename, babelrc: false, configFile: false,
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    plugins: ['@babel/plugin-proposal-class-properties']}).code;
  const module = {exports: {}};
  const req = name => {
    if (name === './TrackerStore') return {__esModule: true, default: types.model('TrackerFixture', {})};
    if (name.endsWith('/getLogger')) return () => ({debug() {}, warn() {}, error() {}});
    if (name.startsWith('.')) return load(path.relative(root, path.resolve(path.dirname(filename), name + '.js')), chrome);
    return require(name);
  };
  vm.runInThisContext('(function(module, exports, require, chrome) {' + code + '\n})', {filename})(module, module.exports, req, chrome);
  return module.exports;
}
function assertPlain(value) {
  if (!value || typeof value !== 'object') return;
  assert.equal(isStateTreeNode(value), false, 'storage must not receive a live model');
  assert.equal(isObservable(value), false, 'storage must not receive observable containers');
  Object.values(value).forEach(assertPlain);
}
test('saving profiles produces plain data and survives storage round-trip', async () => {
  let saved;
  const chrome = {storage: {onChanged: {addListener() {}, removeListener() {}},
    sync: {set(value, done) {assertPlain(value); saved = structuredClone(value); done();}, get(defaults, done) {done(saved || defaults);}},
    local: {get(defaults, done) {done(defaults);}}}};
  const Store = load('src/stores/ProfilesStore.js', chrome).default;
  const first = Store.create({profiles: [{id: 'custom', name: 'Custom', trackers: [{id: 'rutracker', options: {enableProxy: true}}, {id: 'tapochek'}]}]});
  await first.saveProfiles();
  const second = Store.create();
  await second.fetchProfiles();
  assert.equal(second.profiles[0].id, 'custom');
  assert.deepEqual(getSnapshot(second.profiles), getSnapshot(first.profiles));
  assert.ok(Array.isArray(saved.profiles[0].trackers));
  destroy(first); destroy(second);
});
