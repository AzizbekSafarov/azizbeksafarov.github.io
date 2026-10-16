import test from 'node:test';
import assert from 'node:assert/strict';
import {initiatives,parsePlan,validPlan,togglePlan,planText} from './model.js';
for(let mask=0;mask<16;mask++)test('Yuksal plan subset '+mask,()=>{
  const ids=initiatives.filter((_,i)=>mask&(1<<i)).map(p=>p.id),input=[...ids,...ids,'bad',null];
  assert.deepEqual(validPlan(input),ids);assert.deepEqual(parsePlan(JSON.stringify(input)),ids);
  for(const item of initiatives){assert.deepEqual([...togglePlan(togglePlan(ids,item.id),item.id)].sort(),[...ids].sort());}
  const text=planText(ids);assert.ok(!text.includes('undefined'));
  for(const p of initiatives){assert.equal(text.includes(p.title),ids.includes(p.id));if(ids.includes(p.id))for(const step of p.steps)assert.ok(text.includes(step));}
});
