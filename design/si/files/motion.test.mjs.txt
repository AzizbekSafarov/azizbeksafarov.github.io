import test from 'node:test';
import assert from 'node:assert/strict';
import {advanceParticle,shapeTarget} from './motion.js';
const away={x:-10000,y:-10000};
test('spring converges after a morph and preserves bounded finite velocity',()=>{
 const p={x:-500,y:900,vx:0,vy:0},target={x:600,y:240};
 for(let i=0;i<600;i++){advanceParticle(p,target,away,[]);assert.ok(Number.isFinite(p.x+p.y+p.vx+p.vy));}
 assert.ok(Math.hypot(p.x-target.x,p.y-target.y)<.001);
});
test('pointer and expanding click wave displace particles away from their origins',()=>{
 const a={x:60,y:0,vx:0,vy:0},b={...a},c={...a};
 advanceParticle(a,{x:60,y:0},away,[]);
 advanceParticle(b,{x:60,y:0},{x:0,y:0},[]);
 advanceParticle(c,{x:60,y:0},away,[{x:0,y:0,radius:60}]);
 assert.equal(a.x,60);assert.ok(b.x>a.x);assert.ok(c.x>b.x);
});
test('long frames are substepped rather than destabilizing the spring',()=>{
 const a={x:0,y:0,vx:3,vy:-2},b={...a},target={x:100,y:200};
 advanceParticle(a,target,away,[],3);for(let i=0;i<3;i++)advanceParticle(b,target,away,[]);
 assert.deepEqual(a,b);
});
test('every procedural shape remains finite and animated on mobile and desktop',()=>{
 for(const count of [1500,1800])for(const kind of ['sphere','ring','helix','towers','broadcast','flag','scatter']){
  const box={x:20,y:60,w:count===1500?280:540,h:380};let moving=0;
  for(let i=0;i<count;i++){
   const a=shapeTarget(kind,i,count,0,box),b=shapeTarget(kind,i,count,3,box);
   assert.ok(Number.isFinite(a.x+a.y+a.size+a.alpha+b.x+b.y));assert.ok(a.size>0&&a.alpha>=0&&a.alpha<=1.3+Number.EPSILON*2);
   if(Math.hypot(a.x-b.x,a.y-b.y)>.01)moving++;
  }assert.ok(moving>count*.2,`${kind} must move, not show a static shape`);
 }
});
