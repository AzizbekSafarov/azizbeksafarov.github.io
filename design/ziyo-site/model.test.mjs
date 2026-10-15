import {data,normalize,grade} from './model.js';
import test from 'node:test';import assert from 'node:assert/strict';
test('storage accepts only known unique IDs',()=>{assert.deepEqual(normalize([data[0].id,'<script>',data[0].id,null]),[data[0].id]);assert.deepEqual(normalize({}),[]);});
test('each quiz rejects wrong answers and accepts only exact correct answer',()=>{for(const p of data){assert.equal(grade(p.id,p.correct),true);assert.equal(grade(p.id,(p.correct+1)%3),false);assert.equal(grade(p.id,null),false);}assert.equal(grade('unknown',1),false);});
