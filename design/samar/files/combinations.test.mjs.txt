import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as model from './model.js';
const bad=[null,undefined,false,true,0,-1,NaN,Infinity,'','unknown',{}, {ids:[]}, ['unknown',null,0,{},['nested']]];

const ids=model.places.map(p=>p.id);
function arrangements(remaining,prefix=[]){return [prefix,...remaining.flatMap((id,i)=>arrangements(remaining.filter((_,j)=>j!==i),[...prefix,id]))];}
for(const stops of arrangements(ids))for(const start of ['00:00','09:00','12:30','22:59','23:59'])test('itinerary '+start+' / '+stops.join(','),()=>{
 const input={start,ids:stops},snapshot=JSON.stringify(input),rows=model.schedule(input),base=Number(start.slice(0,2))*60+Number(start.slice(3));
 assert.deepEqual(rows.map(r=>r.id),stops);assert.equal(JSON.stringify(input),snapshot);
 for(let i=0;i<rows.length;i++){assert.equal(rows[i].end-rows[i].start,model.places.find(p=>p.id===stops[i]).minutes);assert.equal(rows[i].start,i===0?base:rows[i-1].end+20);}
 const text=model.exportPlan(input);assert.ok(!text.includes('undefined'));for(const row of rows)assert.ok(text.includes(row.source));
 if(rows.length&&rows.at(-1).end>=1440)assert.ok(text.includes('(+1 kun)'));
});
for(const start of ['',null,undefined,0,'24:00','12:60','9:00','09:00:00','<script>'])test('invalid time '+String(start),()=>{assert.equal(model.normalize({start,ids:[]}).start,'09:00');});
test('duplicate, unknown and object stops are sanitized without mutation',()=>{const input={start:'23:59',ids:['registan','unknown',{},'registan','guri-amir']};const snapshot=JSON.stringify(input);const clean=model.normalize(input);assert.deepEqual(clean.ids,['registan','guri-amir']);assert.deepEqual(model.normalize(clean),clean);assert.equal(JSON.stringify(input),snapshot);});
