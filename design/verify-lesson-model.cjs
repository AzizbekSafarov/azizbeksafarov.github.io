const assert = require('node:assert/strict');
const model = require('./src/lesson-model.js');
const ids = ['web', 'design', 'ai'];
const state = model.restoreSteps({web:[0,0,2,99,-1,'1'],design:null,unknown:[0,1,2]}, ids, new Set(['ai']));
assert.deepEqual([...state.web], [0,2]);
assert.equal(state.design.size, 0);
assert.deepEqual([...state.ai], [0,1,2]);
assert.equal(state.unknown, undefined);
assert.equal(model.canComplete(state.web, 3, false), false);
state.web.add(1);
assert.equal(model.canComplete(state.web, 3, false), true);
assert.equal(model.canComplete(state.web, 3, true), false);
assert.equal(model.canComplete(new Set([0,1,7]), 3, false), false);
state.web.delete(1);
assert.equal(model.canComplete(state.web, 3, false), false);
const roundTrip = JSON.parse(JSON.stringify(Object.fromEntries(Object.entries(state).map(([id, steps]) => [id,[...steps]]))));
assert.deepEqual([...model.restoreSteps(roundTrip, ids, new Set()).web], [0,2]);
for (const malformed of [null, [], 'invalid', 5]) {
  assert.equal(model.restoreSteps(malformed, ids, new Set()).web.size, 0);
}
Object.values(state).forEach(steps => steps.clear());
assert.equal(Object.values(state).every(steps => steps.size === 0), true);
console.log('Lesson-state checks passed: invalid storage, resume, completion gating, duplicate completion, serialization, reset.');
