import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as model from './model.js';
const bad=[null,undefined,false,true,0,-1,NaN,Infinity,'','unknown',{}, {ids:[]}, ['unknown',null,0,{},['nested']]];

for(const [i,value] of bad.entries())test('invalid persisted selection '+i,()=>{
 assert.deepEqual(model.normalize(value),[]);
});
test('selection sanitization is ordered, idempotent, immutable and bounded',()=>{
 const ids=model.data.map(p=>p.id),raw=[...ids.reverse(),...ids,'unknown',null];const snapshot=JSON.stringify(raw);
 const clean=model.normalize(raw);assert.deepEqual(clean,ids);assert.deepEqual(model.normalize(clean),clean);
 assert.equal(JSON.stringify(raw),snapshot);assert.notEqual(clean,raw);assert.ok(clean.length<=model.data.length);
});
test('all content IDs, images and answers are internally consistent',()=>{
 assert.equal(new Set(model.data.map(p=>p.id)).size,model.data.length);
 for(const item of model.data){assert.match(item.id,/^[a-z][a-z0-9-]*$/);assert.ok(item.name.trim());
  if(item.image)assert.ok(readFileSync(new URL('images/'+item.image,import.meta.url)).length>0);
  if(item.source)assert.equal(new URL(item.source).protocol,'https:');
  if(item.answers){assert.ok(item.answers.length>1);assert.ok(Number.isInteger(item.correct));assert.ok(item.correct>=0&&item.correct<item.answers.length);}
 }
});
