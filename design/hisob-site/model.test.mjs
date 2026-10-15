import {data,normalize,report,csv} from './model.js';
import test from 'node:test';import assert from 'node:assert/strict';
test('storage accepts only known unique IDs',()=>{assert.deepEqual(normalize([data[0].id,'<script>',data[0].id,null]),[data[0].id]);assert.deepEqual(normalize({}),[]);});
test('period totals match chart and rows; CSV uses filtered rows',()=>{const r=report(7);assert.equal(r.total,r.series.reduce((a,b)=>a+b,0));assert.equal(r.total,r.rows.reduce((n,p)=>n+p.total,0));assert.equal(report(30).total,4*r.total);const q=report(7,'Samarqand');assert.equal(q.rows.length,1);assert.ok(csv(q.rows).includes('Samarqand'));assert.ok(!csv(q.rows).includes('Toshkent'));assert.equal(report(7,'xyz').rows.length,0);});
