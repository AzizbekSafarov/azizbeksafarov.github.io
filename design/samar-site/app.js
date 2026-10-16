document.fonts?.ready.finally(()=>document.documentElement.classList.remove('font-loading'));
import {places,normalize,schedule,clock,exportPlan} from './model.js?v=bcb8054ec2';
const key='samar-plan-v2';const $=s=>document.querySelector(s);let state=normalize(null),opener;
let storageUsable=true;
function read(){if(!storageUsable)return normalize(state);try{return normalize(JSON.parse(localStorage.getItem(key)));}catch{return normalize(null);}}
function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch{storageUsable=false;$('#storage-note').textContent='Brauzer saqlashga ruxsat bermadi. Rejangizni matn qilib yuklab oling.';}}
function update(fn){state=fn(read());save();render();}
function render(){
 const oldPositions=new Map([...document.querySelectorAll('[data-plan-id]')].map(e=>[e.dataset.planId,e.getBoundingClientRect().top]));
 $('#start-time').value=state.start;const rows=schedule(state);$('#plan-count').textContent=rows.length;document.querySelectorAll('.nav-count').forEach(n=>n.textContent=rows.length);
 document.querySelectorAll('[data-toggle]').forEach(b=>{const on=state.ids.includes(b.dataset.toggle);b.setAttribute('aria-pressed',String(on));b.setAttribute('aria-label',places.find(p=>p.id===b.dataset.toggle).name+(on?': rejadan olish':': rejaga qo‘shish'));b.textContent=on?'✓ Rejada':'Rejaga qo‘shish +';});
 document.querySelectorAll('.map-pin').forEach(b=>b.classList.toggle('is-planned',state.ids.includes(b.dataset.detail)));
 $('#download').disabled=!rows.length;$('#plan-empty').hidden=!!rows.length;
 $('#plan-list').innerHTML=rows.map((p,i)=>`<li class="plan-item" data-plan-id="${p.id}"><span class="time">${clock(p.start)}<small>${clock(p.end)}</small></span><div><h3>${p.name}</h3><p>${p.minutes} daqiqa · tavsiya</p><div class="plan-actions"><button type="button" data-move="${p.id}" data-direction="-1" ${i===0?'disabled':''} aria-label="${p.name}: yuqoriga">↑</button><button type="button" data-move="${p.id}" data-direction="1" ${i===rows.length-1?'disabled':''} aria-label="${p.name}: pastga">↓</button><button type="button" data-remove="${p.id}" aria-label="${p.name}: rejadan olish">Olib tashlash</button></div></div></li>`).join('');
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.querySelectorAll('[data-plan-id]').forEach(row=>{const old=oldPositions.get(row.dataset.planId),dy=old===undefined?10:old-row.getBoundingClientRect().top;if(old===undefined||Math.abs(dy)>1)row.animate([{transform:`translateY(${dy}px)`,opacity:old===undefined?0:1},{transform:'none',opacity:1}],{duration:220,easing:'cubic-bezier(.22,1,.36,1)'});});
 $('#plan-duration').textContent=rows.length?`${rows.reduce((n,p)=>n+p.minutes,0)+20*(rows.length-1)} daqiqa · yo‘l taxmini bilan`:'Manzillarni tanlang';
}
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.toggle){const id=b.dataset.toggle;update(p=>({...p,ids:p.ids.includes(id)?p.ids.filter(x=>x!==id):[...p.ids,id]}));$('#live-status').textContent=state.ids.includes(id)?'Manzil rejaga qo‘shildi.':'Manzil rejadan olindi.';}
 if(b.dataset.remove){update(p=>({...p,ids:p.ids.filter(id=>id!==b.dataset.remove)}));$('#plan-heading').focus();}
 if(b.dataset.move){const id=b.dataset.move,d=Number(b.dataset.direction);update(p=>{const ids=[...p.ids],i=ids.indexOf(id);if(i>=0&&i+d>=0&&i+d<ids.length)[ids[i],ids[i+d]]=[ids[i+d],ids[i]];return {...p,ids};});const next=document.querySelector(`[data-move="${id}"][data-direction="${d}"]:not(:disabled)`);(next||$('#plan-heading')).focus();}
 if(b.dataset.detail){const p=places.find(p=>p.id===b.dataset.detail);opener=b;$('#detail-title').textContent=p.name;$('#detail-image').src='images/'+p.image;$('#detail-image').alt=p.alt;$('#detail-text').textContent=p.text;$('#detail-note').textContent=p.note;$('#detail-source').href=p.source;$('#detail-map').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.map);$('#detail').showModal();}
 if(b.hasAttribute('data-close'))$('#detail').close();
});
$('#detail').addEventListener('close',()=>opener?.isConnected&&opener.focus());
$('#start-time').addEventListener('change',e=>{const start=e.target.value;update(p=>normalize({...p,start}));});
$('#download').addEventListener('click',()=>{state=read();render();if(!state.ids.length)return;const blob=new Blob(['\ufeff'+exportPlan(state)],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='samar-kun-rejasi.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);});
window.addEventListener('storage',e=>{if(e.key===key||e.key===null){state=read();render();}});state=read();render();

document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{a.closest('details').open=false;}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const menu=document.querySelector('.mobile-nav[open]');if(menu){menu.open=false;menu.querySelector('summary').focus();}}});
