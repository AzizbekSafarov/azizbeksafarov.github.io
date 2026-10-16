import test from 'node:test';
import assert from 'node:assert/strict';
import * as model from './model.js';
const bad=[null,undefined,false,true,0,-1,NaN,Infinity,'','unknown',{}, {ids:[]}, ['unknown',null,0,{},['nested']]];

for(const [i,value] of bad.entries())test('invalid persisted cart '+i,()=>{assert.deepEqual(model.normalize(value),{});});
for(const product of model.products)for(const qty of [0,1,19,20,21,1.5,-1,'2',null,Infinity])test('cart bound '+product.id+' / '+String(qty),()=>{
 const input={[product.id]:qty},snapshot=JSON.stringify(input),cart=model.normalize(input);
 const expected=Number.isInteger(qty)&&qty>0?Math.min(qty,20):0;
 assert.equal(cart[product.id]||0,expected);assert.equal(model.total(cart),expected*product.price);
 assert.deepEqual(model.normalize(cart),cart);assert.equal(JSON.stringify(input),snapshot);
});
test('1000 deterministic cart operations preserve totals, bounds and round trips',()=>{
 let state={},reference={},seed=731;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed;};
 for(let i=0;i<1000;i++){
  const p=model.products[random()%3],delta=[-20,-1,1,5,20][random()%5],before=JSON.stringify(state);
  const next=model.change(state,p.id,delta);assert.equal(JSON.stringify(state),before);
  reference[p.id]=Math.max(0,Math.min(20,(reference[p.id]||0)+delta));
  for(const item of model.products)assert.equal(next[item.id]||0,reference[item.id]||0);
  assert.equal(model.total(next),model.products.reduce((sum,p)=>sum+(reference[p.id]||0)*p.price,0));
  assert.deepEqual(model.normalize(JSON.parse(JSON.stringify(next))),next);state=next;
 }
});
test('invalid actions cannot change valid quantities',()=>{for(const delta of ['1',NaN,Infinity,1.5,null])assert.deepEqual(model.change({terra:2},'terra',delta),{terra:2});assert.deepEqual(model.change({terra:2},'unknown',2),{terra:2});});
test('export follows selected quantities without unknown or undefined items',()=>{const text=model.exportCart({rattan:1,terra:2,fake:20});assert.ok(text.includes(model.products[0].name));assert.ok(text.includes('Terra vaza'));assert.ok(!text.includes('Luma'));assert.ok(!text.includes('undefined'));assert.equal(model.total({rattan:1,terra:2}),1650000);});
