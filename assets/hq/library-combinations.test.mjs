import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {matching,readLibraryState,writeLibraryState} from './library-model.mjs';

// Test against the actual generated catalog payload, not a substitute fixture.
const html=readFileSync(new URL('../../index.html',import.meta.url),'utf8');
const items=JSON.parse(html.match(/<script[^>]*id="library-data"[^>]*>([\s\S]*?)<\/script>/)[1]);
for(const group of ['all','app','story','shop'])for(const query of ['', 'ziyo', 'Material', "ta'lim", 'no-result'])for(const view of ['list','detail']) {
  test('HQ state round trip '+JSON.stringify({group,query,view}),()=>{
    const params=new URLSearchParams({type:group,q:query,view,design:'ziyo'});
    const state=readLibraryState(items,'?'+params),found=matching(items,query,group);
    assert.deepEqual(state.found.map(p=>p.slug),found.map(p=>p.slug));
    if(state.selected)assert.ok(found.some(p=>p.slug===state.selected.slug));
    const url=writeLibraryState('https://example.test/?keep=1#old',state),restored=readLibraryState(items,url.search);
    assert.equal(url.hash,'');assert.equal(url.searchParams.get('keep'),'1');
    assert.equal(restored.query,state.query);assert.equal(restored.group,state.group);
    assert.equal(restored.selected?.slug,state.selected?.slug);
  });
}
for(const design of items)test('HQ direct link / '+design.slug,()=>{
  const state=readLibraryState(items,'?design='+design.slug);assert.equal(state.selected.slug,design.slug);
  assert.ok(design.demo.startsWith('/design/'));assert.ok(design.context.startsWith('/design/'));assert.ok(design.zip.endsWith('/source.zip'));
});
for(const slug of ['javascript:alert(1)','<img src=x>','../../secret','__proto__','unknown'])test('HQ untrusted selection / '+slug,()=>{
  const state=readLibraryState(items,'?design='+encodeURIComponent(slug));assert.ok(items.includes(state.selected));assert.equal(state.view,'list');
});
