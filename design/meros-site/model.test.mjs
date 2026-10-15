import {data,normalize} from './model.js';
import test from 'node:test';import assert from 'node:assert/strict';
test('storage accepts only known unique IDs',()=>{assert.deepEqual(normalize([data[0].id,'<script>',data[0].id,null]),[data[0].id]);assert.deepEqual(normalize({}),[]);});
test('curated content IDs and sources are complete',()=>{assert.equal(new Set(data.map(p=>p.id)).size,data.length);for(const p of data){assert.ok(p.name.length>3);assert.ok(p.source.startsWith('https://'));}});
