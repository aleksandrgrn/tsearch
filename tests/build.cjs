const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {JSDOM} = require('jsdom');
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
let checked = 0;
for (const name of ['index.html', 'popup.html', 'sandbox.html', 'offscreen.html']) {
  const dom = new JSDOM(fs.readFileSync(path.join(dist, name), 'utf8'));
  const scripts = [...dom.window.document.querySelectorAll('script[src]')].map(s => s.getAttribute('src'));
  assert.ok(scripts.length, name + ' has no scripts');
  assert.equal(new Set(scripts).size, scripts.length, name + ' loads a script twice');
  for (const file of scripts) {
    assert.ok(!/^https?:/.test(file), 'Unexpected remote script: ' + file);
    assert.ok(fs.statSync(path.join(dist, file)).size > 0, name + ': missing ' + file);
    checked++;
  }
  if (name === 'offscreen.html') assert.deepEqual(scripts, ['offscreen.js']);
  dom.window.close();
}
const manifest = JSON.parse(fs.readFileSync(path.join(dist, 'manifest.json'), 'utf8'));
assert.ok(fs.statSync(path.join(dist, manifest.background.service_worker)).size > 0);
console.log('Build resources verified:', checked, 'script references and service worker');
