import {ParticleField} from './motion.js?v=4';
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
let paused=reduce.matches;
const motionButton=$('#motion-toggle');
function motionLabel(){motionButton.setAttribute('aria-pressed',String(paused));motionButton.setAttribute('aria-label',paused?'Animatsiyani davom ettirish':'Animatsiyani to‘xtatish');motionButton.querySelector('path').setAttribute('d',paused?'M8 5l11 7-11 7Z':'M9 5v14M15 5v14');document.body.classList.toggle('motion-paused',paused);}
motionLabel();
if(!reduce.matches)document.documentElement.classList.add('js-motion');
if('IntersectionObserver' in window){
 const reveals=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('is-visible');reveals.unobserve(entry.target);}},{threshold:.12});document.querySelectorAll('.reveal').forEach(element=>reveals.observe(element));
 const sections=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){document.querySelectorAll('.section-nav a').forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}},{rootMargin:'-25% 0px -40% 0px',threshold:0});document.querySelectorAll('main>section').forEach(section=>sections.observe(section));
}else document.documentElement.classList.remove('js-motion');

const field=new ParticleField($('#particles'),{paused,reduced:reduce.matches});
field.init().catch(()=>{$('.hero-art').classList.remove('ready');$('#particles').classList.remove('ready');});
motionButton.addEventListener('click',()=>{paused=!paused;motionLabel();field.setPaused(paused,reduce.matches);});
reduce.addEventListener('change',event=>{paused=event.matches;motionLabel();document.documentElement.classList.toggle('js-motion',!event.matches);field.setPaused(paused,event.matches);});
