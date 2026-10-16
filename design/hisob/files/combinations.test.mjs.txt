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

const names=['Toshkent','Samarqand','Buxoro','Fargona'];
for(const period of [7,30])for(const query of ['',...names,'  SAMARQAND  ','missing'])for(const sort of ['total','name'])for(const direction of [-1,1])test('report '+JSON.stringify({period,query,sort,direction}),()=>{
 const result=model.report(period,query,sort,direction),factor=period===30?4:1;
 assert.equal(result.total,1000*factor);assert.equal(result.previous,980*factor);
 assert.equal(result.series.reduce((a,b)=>a+b,0),result.total);
 assert.equal(result.rows.length,query==='missing'?0:query.trim()?1:4);
 for(let i=1;i<result.rows.length;i++)assert.ok(direction*(sort==='name'?result.rows[i-1].name.localeCompare(result.rows[i].name):result.rows[i-1].total-result.rows[i].total)<=0);
 const text=model.csv(result.rows);assert.equal(text.trimEnd().split('\n').length,result.rows.length+1);
 if(query==='missing')assert.equal(text,'"Hudud","Ishtiroklar","Oldingi davr"\n');
 for(const row of result.rows)assert.ok(text.includes(row.name));
});
test('CSV round trip preserves quoted names and embedded newlines',()=>{
 const rows=[{name:'A, "B"\nC',total:2,previous:1}],text=model.csv(rows);
 assert.equal(text,'"Hudud","Ishtiroklar","Oldingi davr"\n"A, ""B""\nC","2","1"');
});
test('report operations do not mutate the baseline dataset',()=>{const saved=JSON.stringify(model.data);model.report(30,'samar','name',1);assert.equal(JSON.stringify(model.data),saved);});
