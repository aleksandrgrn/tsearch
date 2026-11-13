const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

// Tracker code is updated only with extension releases: the UI must not ask the
// background to download tracker modules from the upstream repository on its own.
test('UI does not trigger automatic tracker/module updates', () => {
 const src = path.resolve(__dirname, '..', 'src');
 const offenders = [];
 const walk = dir => {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
   const file = path.join(dir, entry.name);
   if (entry.isDirectory()) {
    if (!['background', 'trackers', 'explorerModules'].includes(entry.name)) walk(file);
   } else if (/\.jsx?$/.test(entry.name)) {
    const code = fs.readFileSync(file, 'utf8');
    if (/action:\s*'update'/.test(code) || /checkForUpdate/.test(code)) offenders.push(path.relative(src, file));
   }
  }
 };
 walk(src);
 assert.deepEqual(offenders, []);
});
