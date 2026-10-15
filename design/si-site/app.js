import {initiatives,validPlan,togglePlan,planText} from './model.js';

const $=selector=>document.querySelector(selector);
const key='ustoz.yuksal.plan.v1';
let plan=[];let currentId=null;let opener=null;let toastTimer;
try{plan=validPlan(JSON.parse(localStorage.getItem(key)));}catch{}
function notify(message){clearTimeout(toastTimer);$('#feedback').textContent=message;$('#feedback').hidden=false;toastTimer=setTimeout(()=>{$('#feedback').hidden=true;},3200);}
function persist(){try{localStorage.setItem(key,JSON.stringify(plan));$('#storage-warning').hidden=true;}catch{$('#storage-warning').hidden=false;}}
function syncSave(){const chosen=plan.includes(currentId);$('#save-initiative').replaceChildren(document.createTextNode(chosen?'Rejadan olish ':'Rejaga qo‘shish '));const icon=document.createElement('span');icon.setAttribute('aria-hidden','true');icon.textContent=chosen?'−':'+';$('#save-initiative').append(icon);$('#save-initiative').setAttribute('aria-pressed',String(chosen));}
function renderPlan(){
 const container=$('#plan-items');container.replaceChildren();
 $('#plan-count').textContent=`${plan.length} / ${initiatives.length}`;$('#download-plan').disabled=plan.length===0;
 if(!plan.length){const p=document.createElement('p');p.className='plan-empty';p.append(document.createTextNode('Hozircha rejangiz bo‘sh.'),document.createElement('br'),document.createTextNode('Bir tashabbusni oching va rejangizga qo‘shing.'));container.append(p);}
 for(const id of plan){const item=initiatives.find(entry=>entry.id===id);const row=document.createElement('article');row.className='plan-item';const h=document.createElement('h3');h.textContent=item.title;const p=document.createElement('p');p.textContent=item.category+' · 3 ta amaliy qadam';const remove=document.createElement('button');remove.type='button';remove.textContent='×';remove.setAttribute('aria-label',item.title+': rejadan olish');remove.addEventListener('click',()=>{plan=togglePlan(plan,id);persist();renderPlan();$('#download-plan').focus({preventScroll:true});if(!plan.length)$('#reja .text-link').focus({preventScroll:true});notify('Yo‘nalish rejadan olindi.');});row.append(h,p,remove);container.append(row);}
 if(currentId)syncSave();
}
renderPlan();
const detail=$('#initiative-dialog'),menu=$('#site-menu');
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>{
 const item=initiatives.find(entry=>entry.id===button.dataset.open);if(!item)return;
 currentId=item.id;opener=button;$('#detail-title').textContent=item.title;$('#detail-category').textContent=item.category+' / MUSTAQIL MASHQ';$('#detail-description').textContent=item.description;$('#detail-steps').replaceChildren(...item.steps.map(step=>{const li=document.createElement('li');li.textContent=step;return li;}));syncSave();detail.showModal();
}));
$('#save-initiative').addEventListener('click',()=>{const adding=!plan.includes(currentId);plan=togglePlan(plan,currentId);persist();renderPlan();notify(adding?'Yo‘nalish shaxsiy rejangizga qo‘shildi.':'Yo‘nalish rejadan olindi.');});
$('#menu-open').addEventListener('click',()=>menu.showModal());
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
for(const dialog of [detail,menu]){
 dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();});
 dialog.addEventListener('close',()=>{const target=dialog===detail?opener:$('#menu-open');target?.focus({preventScroll:true});});
}
menu.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{menu.close();const target=document.querySelector(link.getAttribute('href'));if(target){target.setAttribute('tabindex','-1');requestAnimationFrame(()=>{target.focus({preventScroll:true});target.scrollIntoView({behavior:reduce.matches?'instant':'smooth'});});}}));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 let count=0;document.querySelectorAll('.initiative-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});$('#results').textContent=`${count} ta tashabbus`;
}));
$('#download-plan').addEventListener('click',()=>{if(!plan.length)return;const blob=new Blob(['\ufeff'+planText(plan)],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='yuksal-rejam.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Reja matn fayli sifatida tayyorlandi.');});

const reduce=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduce.matches,visible=true,frame=0,lastFrame=0;
const motionButton=$('#motion-toggle');
function motionLabel(){motionButton.setAttribute('aria-pressed',String(paused));motionButton.setAttribute('aria-label',paused?'Animatsiyani davom ettirish':'Animatsiyani to‘xtatish');motionButton.querySelector('path').setAttribute('d',paused?'M8 5l11 7-11 7Z':'M9 5v14M15 5v14');document.body.classList.toggle('motion-paused',paused);}
motionLabel();
if(!reduce.matches)document.documentElement.classList.add('js-motion');
if('IntersectionObserver' in window){
 const reveals=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('is-visible');reveals.unobserve(entry.target);}},{threshold:.12});document.querySelectorAll('.reveal').forEach(element=>reveals.observe(element));
 const sections=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){document.querySelectorAll('.section-nav a').forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}},{rootMargin:'-25% 0px -40% 0px',threshold:0});document.querySelectorAll('main>section').forEach(section=>sections.observe(section));
}else document.documentElement.classList.remove('js-motion');

const canvas=$('#particles'),ctx=canvas.getContext('2d');
let points=[],width=0,height=0,pointer={x:0,y:0},heroVisible=true;
const random=(value)=>{const n=Math.sin(value*127.1+311.7)*43758.5453;return n-Math.floor(n);};
async function buildParticles(){
 if(!ctx)return;
 await document.fonts.load('400 200px "Instrument Serif"');
 const box=canvas.getBoundingClientRect();width=box.width;height=box.height;if(!width||!height)return;
 const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
 const mask=document.createElement('canvas');mask.width=620;mask.height=420;const brush=mask.getContext('2d',{willReadFrequently:true});brush.fillStyle='#fff';brush.textAlign='center';brush.textBaseline='middle';brush.font='400 440px "Instrument Serif"';brush.fillText('SI',310,237);const pixels=brush.getImageData(0,0,620,420).data;points=[];
 for(let y=15;y<410;y+=4)for(let x=20;x<600;x+=4)if(pixels[(y*620+x)*4+3]>128){const index=points.length;points.push({x:(x-310)/620,y:(y-210)/420,z:(random(index)-.5)*65,phase:random(index+17)*Math.PI*2,size:2+random(index+31)*1.8});}
 canvas.parentElement.classList.add('ready');draw(performance.now());schedule();
}
function draw(time){
 if(!ctx||!width)return;ctx.clearRect(0,0,width,height);
 const scale=Math.min(width/620,height/430)*.94;const t=paused?0:time*.0002;const sway=paused?0:Math.sin(t)*.08;const cos=Math.cos(sway),sin=Math.sin(sway);
 for(const point of points){const px=point.x*620*scale,py=point.y*420*scale;const drift=paused?0:Math.sin(t*2+point.phase)*3;const x=width/2+px*cos+point.z*sin+drift+pointer.x*(point.z/55);const y=height/2+py+Math.cos(t+point.phase)*(paused?0:2)+pointer.y*(point.z/70);const size=point.size*scale;ctx.fillStyle=point.z>0?'#ff425d':'#ed294d';ctx.globalAlpha=.8+(point.z+33)/350;ctx.fillRect(x,y,size,size);}
 ctx.globalAlpha=1;
}
function tick(time){frame=0;if(paused||!visible||!heroVisible)return;if(time-lastFrame>32){draw(time);lastFrame=time;}schedule();}
function schedule(){if(!frame&&!paused&&visible&&heroVisible)frame=requestAnimationFrame(tick);}
function stop(){if(frame)cancelAnimationFrame(frame);frame=0;}
motionButton.addEventListener('click',()=>{paused=!paused;motionLabel();if(paused){stop();draw(0);}else schedule();});
reduce.addEventListener('change',event=>{paused=event.matches;motionLabel();document.documentElement.classList.toggle('js-motion',!event.matches);if(paused){stop();draw(0);}else schedule();});
document.addEventListener('visibilitychange',()=>{visible=!document.hidden;if(visible)schedule();else stop();});
if('IntersectionObserver' in window)new IntersectionObserver(([entry])=>{heroVisible=entry.isIntersecting;if(heroVisible)schedule();else stop();}).observe(canvas);
canvas.parentElement.addEventListener('pointermove',event=>{if(reduce.matches||paused||event.pointerType==='touch')return;const box=canvas.getBoundingClientRect();pointer={x:(event.clientX-box.left-box.width/2)*.035,y:(event.clientY-box.top-box.height/2)*.035};});
canvas.parentElement.addEventListener('pointerleave',()=>{pointer={x:0,y:0};});
let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>buildParticles().catch(()=>{}),150);});
buildParticles().catch(()=>{canvas.parentElement.classList.remove('ready');});
