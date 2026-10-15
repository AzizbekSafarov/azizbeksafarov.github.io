import test from 'node:test';import assert from 'node:assert/strict';
import {matching,selectedItem,readLibraryState,writeLibraryState} from './library-model.mjs';
const items=[{slug:'bloom',name:'Bloom',group:'app',category:'Material 3',use:'Loyiha ish maydoni',summary:'Loyihalar'},{slug:'ziyo',name:'Ziyo',group:'app',category:'Ta’lim',use:'Kurs',summary:'Dars'},{slug:'nashr',name:'Nashr',group:'story',category:'Gazeta',use:'O‘qish',summary:'Maqola'}];
test('query matches Uzbek apostrophe variants and multiple terms',()=>{assert.deepEqual(matching(items,"ta'lim").map(t=>t.slug),['ziyo']);assert.deepEqual(matching(items,'material loyiha').map(t=>t.slug),['bloom']);assert.deepEqual(matching(items,' OQISH ').map(t=>t.slug),['nashr']);});
test('category and search work together without losing catalog data',()=>{assert.equal(matching(items,'','app').length,2);assert.equal(matching(items,'gazeta','app').length,0);assert.equal(matching(items,'missing').length,0);assert.equal(items.length,3);});
test('shared URL only selects known designs and empty results are explicit',()=>{assert.equal(selectedItem(items,'nashr').slug,'nashr');assert.equal(selectedItem(items,'javascript:alert(1)').slug,'bloom');assert.equal(selectedItem([],'bloom'),null);});
test('search and filter survive URL reload without silently choosing an excluded design',()=>{
 const state=readLibraryState(items,'?design=nashr&type=app&q=material');
 assert.equal(state.selected.slug,'bloom');assert.deepEqual(state.found.map(t=>t.slug),['bloom']);
 const roundTrip=readLibraryState(items,writeLibraryState('https://example.com/',state).search);
 assert.equal(roundTrip.query,'material');assert.equal(roundTrip.group,'app');assert.equal(roundTrip.selected.slug,'bloom');
});
test('empty search and untrusted URL parameters have a safe explicit state',()=>{
 const empty=readLibraryState(items,'?q=absent&design=ziyo');assert.equal(empty.selected,null);assert.deepEqual(empty.found,[]);
 const unknown=readLibraryState(items,'?design=javascript:evil&type=unknown&view=detail');assert.equal(unknown.view,'list');assert.equal(unknown.group,'all');
});
test('mobile list/detail and share links preserve the chosen item without anchor history',()=>{
 const state=readLibraryState(items,'?design=ziyo&view=list');assert.equal(state.view,'list');assert.equal(state.selected.slug,'ziyo');
 state.view='detail';const url=writeLibraryState('https://example.com/?unrelated=keep#design-search',state);
 assert.equal(url.hash,'');assert.equal(url.searchParams.get('unrelated'),'keep');assert.equal(readLibraryState(items,url.search).view,'detail');
});
