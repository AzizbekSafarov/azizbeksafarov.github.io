import {readFile} from 'node:fs/promises';
import {test} from 'node:test';
import assert from 'node:assert/strict';
// The browser module is portable without package.json or an npm install.
const source=await readFile(new URL('./model.js',import.meta.url),'utf8');
const {validPlan,parsePlan,togglePlan,planText}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
test('persisted plans reject invalid input, unknown IDs and duplicates',()=>{assert.deepEqual(validPlan(null),[]);assert.deepEqual(validPlan(['savod','bad',{},'savod','ilm']),['savod','ilm']);});
test('storage reads tolerate broken JSON and sanitize external updates',()=>{for(const raw of [null,'','{','null','{}','42','"savod"'])assert.deepEqual(parsePlan(raw),[]);assert.deepEqual(parsePlan('["savod","bad","savod","ilm"]'),['savod','ilm']);});
test('toggling is reversible and never introduces unknown choices',()=>{assert.deepEqual(togglePlan(['savod'],'lab'),['savod','lab']);assert.deepEqual(togglePlan(['savod','lab'],'savod'),['lab']);assert.deepEqual(togglePlan(['savod'],'bad'),['savod']);});
test('download content follows selected order and contains actual exercise steps',()=>{const text=planText(['lab','ilm']);assert.ok(text.indexOf('G‘oyalar laboratoriyasi')<text.indexOf('Ilmga ochiq eshik'));assert.ok(text.includes('Bitta foydalanuvchida sinang'));assert.ok(!text.includes('SI savodxonligi'));assert.ok(!text.includes('undefined'));});
