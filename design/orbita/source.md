# Orbita — editable source snapshot

Source fingerprint: `7dafe9d61c53063bf92ae84fa3c91b48a5999452e181305d529bcecfe5f0406c`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/index.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Qorong‘i texnik observatoriya: Chakra Petch, monospace yozuv, orbital asbob oynasi va vertikal missiya registri."><meta name="theme-color" content="#071215"><title>Orbita — Ilm-fan / kosmik atlas</title><link rel="icon" href="mark.svg?v=3986cb32f9"><script>document.documentElement.classList.add('font-loading')</script><script type="module" src="app.js?v=289c17acb8"></script><link rel="preload" href="fonts/chakrapetch.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="fonts/mono.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="style.css?v=bfca381b39"><link rel="stylesheet" href="layout.css?v=96302888c4"><meta name="identity" content="sector-v4"></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><header class="orb-header wrap"><a class="orb-logo" href="#main">◎ ORBITA</a><nav aria-label="Asosiy navigatsiya"><a href="#missions">Atlas</a><a href="#watchlist">Kuzatuv <span id="saved-count">0</span></a><a href="../">Barcha dizaynlar ↗</a></nav></header><main id="main"><section class="orb-stage wrap"><div class="orb-copy"><p class="eyebrow">KOSMOSNI O‘RGANISH / INTERAKTIV ATLAS</p><h1>ORBITAL<br>ATLAS</h1><p>Missiyani tanlang. Maqsad, masofa va tekshiriladigan manba — bitta kuzatuv oynasida.</p><a class="btn" href="#missions">Missiyalarni ko‘rish <span>↓</span></a><span class="orb-caption">CHIZMA — MASSHTABGA MOS EMAS</span></div><div class="orbit-display"><svg viewBox="0 0 700 620" role="img" aria-labelledby="orbit-title"><title id="orbit-title">Tanlangan missiyaning shartli orbital chizmasi</title><defs><radialGradient id="planet"><stop stop-color="#487ba8"/><stop offset=".7" stop-color="#183a57"/><stop offset="1" stop-color="#090e16"/></radialGradient></defs><g class="orbit-grid" fill="none" stroke="#444b57"><circle cx="350" cy="310" r="250"/><circle cx="350" cy="310" r="180"/><path d="M0 310H700M350 0V620" stroke-dasharray="3 8"/><ellipse cx="350" cy="310" rx="290" ry="105" transform="rotate(-32 350 310)"/></g><circle cx="350" cy="310" r="122" fill="url(#planet)"/><g stroke="#91b4cc" fill="none" opacity=".35"><ellipse cx="350" cy="310" rx="55" ry="122"/><ellipse cx="350" cy="310" rx="95" ry="122"/><ellipse cx="350" cy="310" rx="122" ry="40"/></g><g id="satellite"><circle cx="540" cy="150" r="7" fill="#ff6b35"/><circle cx="540" cy="150" r="18" fill="none" stroke="#ff6b35"/><path d="M557 150H620" stroke="#ff6b35"/><text x="575" y="136" fill="#fff" font-size="13">01 / ISS</text></g><text x="42" y="580" fill="#b2bac6" font-size="12">ORBITAL VIEW / ILLUSTRATION</text></svg><div class="orbit-readout"><span id="mission-code">01 / YER ORBITASI</span><button id="motion-toggle" class="btn" aria-pressed="false">Harakatni to‘xtatish Ⅱ</button></div></div></section><section id="missions" class="missions wrap"><div class="orb-section-title"><p class="eyebrow">MISSIYA REGISTRI</p><p>01—03 / Ma’lumot uchun missiyani tanlang</p></div><div class="mission-layout"><div class="mission-tabs" role="group" aria-label="Missiya tanlash"><button data-mission="iss" aria-pressed="true"><span>01 / YER</span><strong>Xalqaro kosmik stansiya</strong><span>Yaqin orbitadagi laboratoriya ↗</span></button><button data-mission="webb" aria-pressed="false"><span>02 / KOINOT</span><strong>James Webb</strong><span>Infraqizil koinotga qarash ↗</span></button><button data-mission="voyager" aria-pressed="false"><span>03 / YULDUZLARARO</span><strong>Voyager 1</strong><span>Quyosh tizimidan tashqarida ↗</span></button></div><article class="mission-story" aria-live="polite"><p class="eyebrow" id="mission-tag"></p><h2 id="mission-title"></h2><p id="mission-text"></p><dl id="mission-facts"></dl><div class="mission-actions"><button class="btn" id="mission-save" aria-pressed="false">Kuzatuvga qo‘shish +</button><a id="mission-source" href="https://www.nasa.gov/">NASA manbasi ↗</a></div></article></div></section><section id="watchlist" class="watch wrap"><div><p class="eyebrow">SHAXSIY ATLAS</p><h2>Kuzatuv ro‘yxatingiz.</h2><p id="watch-empty">Hali missiya tanlanmagan.</p><ul id="watch-items"></ul></div><button id="export" class="btn" disabled>Ro‘yxatni yuklash ↓</button></section><p id="status" class="live wrap" role="status"></p></main><footer class="demo-footer wrap"><p>Mustaqil ilmiy atlas namunasi. Chizma shartli; jonli telemetriya emas. Missiya tavsiflari NASA manbalariga tayangan.</p><nav aria-label="Qo‘shimcha havolalar"><a href="../">Dizaynlar ↗</a><a href="../orbita/">AI konteksti ↗</a><a href="CREDITS.md">Manbalar ↗</a></nav></footer></body></html>
```

## site/style.css

```css
@font-face{font-family:'Flight Display';src:url('fonts/chakrapetch.ttf') format('truetype');font-weight:400;font-display:swap}
@font-face{font-family:'Flight Mono';src:url('fonts/mono.ttf') format('truetype');font-weight:400;font-display:swap}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:24px}body{margin:0;overflow-x:clip;-webkit-font-smoothing:antialiased}h1,h2,h3,p,figure{margin:0}a{color:inherit;text-decoration:none}button,input,select{font:inherit;color:inherit}button,a{touch-action:manipulation}button{cursor:pointer}button:disabled{opacity:.45;cursor:not-allowed}button:active:not(:disabled){translate:0 1px}button,a,input,summary{scroll-margin:24px}a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--focus,#f26536);outline-offset:4px}[hidden]{display:none!important}img,svg{display:block;max-width:100%}main,section,article,aside{min-width:0}.skip{position:fixed;left:16px;top:-100px;padding:12px 18px;background:#fff;color:#111;z-index:100}.skip:focus{top:12px}.wrap{width:min(1360px,calc(100% - 80px));margin-inline:auto}.live{min-height:24px;font-size:13px;line-height:1.6}.empty{padding:32px 0;font-size:18px}.eyebrow{font-size:11px;letter-spacing:.08em}.demo-footer,.footer{display:flex;flex-wrap:wrap;justify-content:space-between;gap:24px;padding-block:30px;border-top:1px solid var(--line)}.demo-footer p,.footer p{max-width:570px;font-size:12px;line-height:1.7}.demo-footer nav,.footer nav{display:flex;flex-wrap:wrap;gap:20px;font-size:12px}.demo-footer a,.footer nav a{display:inline-flex;align-items:center;min-height:44px;text-decoration:underline;text-underline-offset:4px}dialog{padding:0;width:min(820px,calc(100% - 32px));max-height:calc(100dvh - 32px);overflow:auto;overscroll-behavior:contain;background:var(--modal,#fff);color:var(--ink,#111);border:1px solid var(--line);box-shadow:0 20px 80px #0003}dialog::backdrop{background:#060a1588}dialog[open]{animation:reveal .2s ease-out}.dialog-top,.dialog-head{display:flex;justify-content:space-between;align-items:start;gap:20px;padding:24px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--modal,#fff);z-index:2}.dialog-top h2,.dialog-head h2{font-size:32px;line-height:1.2}.close{width:44px;height:44px;flex:0 0 44px;font:26px/1 Arial;border:1px solid var(--line);background:transparent}.reader,.dialog-content{padding:24px}.reader p,.dialog-content>p{margin-block:16px;line-height:1.75}.reader img{width:100%;max-height:350px;object-fit:cover;margin-bottom:24px}.reader a{text-decoration:underline;text-underline-offset:4px}.reader~.btn{margin:0 24px 24px}.detail-image{width:100%;height:300px;object-fit:cover}body:has(dialog[open]){overflow:hidden}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;clip-path:inset(50%);overflow:hidden;white-space:nowrap}.font-loading h1{visibility:hidden}.font-loading .identity-display{visibility:hidden}@keyframes reveal{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@media(max-width:800px){.wrap{width:calc(100% - 40px)}}@media(max-width:440px){.wrap{width:calc(100% - 32px)}.dialog-top,.dialog-head,.reader,.dialog-content{padding:20px}.dialog-top h2,.dialog-head h2{font-size:28px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}

.dialog-top h2,.dialog-head h2{min-width:0;overflow-wrap:anywhere}

```

## site/layout.css

```css
:root{--ink:#e6eef0;--line:#294046;--modal:#102024;--focus:#b1f56a;color-scheme:dark}body{background:#071215;color:#e6eef0;font:14px/1.75 'Flight Mono',monospace}.orb-header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:25px;padding-block:23px;border-bottom:1px solid #294046}.orb-logo{font:400 27px 'Flight Display',sans-serif;letter-spacing:.13em;color:#b1f56a}.orb-header nav{display:flex;flex-wrap:wrap;gap:30px;font-size:12px}.orb-header nav a{min-height:44px;display:flex;align-items:center;gap:10px}.orb-header nav span{color:#b1f56a}.orb-stage{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.3fr);gap:60px;align-items:center;min-height:660px;position:relative}.orb-copy .eyebrow{font-size:10px;letter-spacing:.09em;color:#76a7ac;max-width:300px}.orb-copy h1{font:400 clamp(52px,5.8vw,88px)/.96 'Flight Display',sans-serif;letter-spacing:-.02em;color:#e7f4f2;margin:28px 0}.orb-copy>p:not(.eyebrow){max-width:390px;font-size:13px;color:#9cb4b9;line-height:1.9}.btn{display:inline-flex;align-items:center;justify-content:space-between;gap:20px;background:transparent;border:1px solid #48686d;border-radius:0;color:#cae3e1;padding:12px 18px;min-height:46px;font-size:11px}.btn:hover{background:#183237;border-color:#92bdbf;color:#fff}.btn[aria-pressed=true]{background:#b1f56a;color:#092219;border-color:#b1f56a}.orb-copy>.btn{border:0;border-left:3px solid #b1f56a;background:#10262b;color:#d7edb5;margin-top:28px;min-height:49px;padding-right:30px}.orb-caption{display:block;font-size:9px;color:#6e969d;margin-top:33px;letter-spacing:.05em}.orbit-display{position:relative;background:radial-gradient(ellipse at center,#16343a55,transparent 65%);min-width:0}.orbit-display::before,.orbit-display::after{content:'';position:absolute;width:30px;height:30px;border-color:#62888b;border-style:solid;pointer-events:none}.orbit-display::before{left:0;top:25px;border-width:1px 0 0 1px}.orbit-display::after{right:0;bottom:62px;border-width:0 1px 1px 0}.orbit-display>svg{width:100%;height:auto;max-height:565px}.orbit-display svg text{font-family:'Flight Mono',monospace}.orbit-grid{stroke:#31565c}.orbit-display #satellite circle{stroke:#b1f56a}.orbit-display #satellite circle:first-child{fill:#b1f56a}.orbit-display #satellite path{stroke:#b1f56a}#satellite{transform-origin:350px 310px;animation:orbit 36s linear infinite}.paused #satellite{animation-play-state:paused}.orbit-display[data-mission=webb] #satellite,.orbit-display[data-mission=voyager] #satellite{animation:none}.orbit-display>svg>circle{transition:r .5s ease}.orbit-readout{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:20px;padding:14px 0;border-top:1px solid #294046;font-size:10px;color:#85b4b8}.orbit-readout .btn{font-size:10px;min-height:38px;padding:8px 12px}.orb-section-title{display:flex;flex-wrap:wrap;justify-content:space-between;gap:20px;padding:25px 0;border-top:1px solid #426166;color:#6ea1a8;font-size:10px}.orb-section-title .eyebrow{font-size:10px;color:#b1f56a}.mission-layout{display:grid;grid-template-columns:.8fr 1.3fr;gap:60px}.mission-tabs{display:flex;flex-direction:column}.mission-tabs button{display:flex;flex-direction:column;align-items:start;text-align:left;gap:10px;padding:23px 20px;border:0;border-left:2px solid #294046;border-bottom:1px solid #294046;background:transparent;color:#abc3c7;min-height:135px;transition:background .2s}.mission-tabs button>span{font-size:10px;color:#6e969d}.mission-tabs button strong{font:400 26px/1.15 'Flight Display',sans-serif}.mission-tabs button[aria-pressed=true]{border-left-color:#b1f56a;background:#10282c}.mission-tabs button[aria-pressed=true] strong{color:#b1f56a}.mission-story{padding:27px 0 40px}.mission-story>.eyebrow{font-size:10px;color:#7fabaf}.mission-story h2{font:400 39px/1.1 'Flight Display',sans-serif;margin:20px 0;color:#e6f4f1}.mission-story>p:not(.eyebrow){color:#a5bdc1;font-size:13px;line-height:1.9}.mission-story dl{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px;margin:30px 0}.mission-story dl>div{border-top:1px solid #294046;padding-top:15px}.mission-story dt{font-size:9px;color:#6e969d}.mission-story dd{font:400 22px/1.3 'Flight Display',sans-serif;margin:10px 0 0}.mission-actions{display:flex;flex-wrap:wrap;gap:25px;align-items:center}.mission-actions>a{font-size:11px;text-decoration:underline;text-underline-offset:5px}.watch{border-top:1px solid #426166;padding-block:40px;display:grid;grid-template-columns:1fr 1.4fr;gap:40px}.watch h2{font:400 32px 'Flight Display',sans-serif;margin:15px 0 25px}.watch p{color:#87a9af;font-size:12px}.watch ul{padding:0;list-style:none}.watch li{display:flex;gap:20px;justify-content:space-between;padding:16px 0;border-bottom:1px solid #294046}.watch li a{text-decoration:underline;font-size:12px}.watch>.live{grid-column:1/-1}.demo-footer{color:#74949c;font-size:10px}.demo-footer p,.demo-footer nav{font-size:10px}@keyframes orbit{to{transform:rotate(360deg)}}
@media(max-width:900px){.orb-stage{gap:25px;min-height:560px}.orb-copy h1{font-size:64px}.mission-layout{gap:35px}.mission-story dl{grid-template-columns:1fr 1fr}.orb-header nav{gap:20px}}
@media(max-width:650px){.orb-header{gap:10px;padding-block:16px}.orb-logo{font-size:24px}.orb-header nav{gap:15px;font-size:11px}.orb-header nav a{min-height:36px}.orb-stage{display:flex;flex-direction:column;align-items:stretch;gap:5px;padding-top:35px}.orb-copy h1{font-size:64px;margin:22px 0}.orb-copy>p:not(.eyebrow){font-size:12px}.orb-copy>.btn{margin-top:22px}.orb-caption{margin-top:22px;font-size:8px}.orbit-display>svg{max-height:380px}.orbit-readout{gap:10px;font-size:9px}.orbit-readout .btn{font-size:9px}.orb-section-title{font-size:9px;margin-top:22px;gap:10px}.mission-layout{grid-template-columns:1fr;gap:20px}.mission-tabs{flex-direction:row;gap:8px;flex-wrap:wrap}.mission-tabs button{flex:1;min-width:90px;min-height:145px;padding:14px 10px;border:1px solid #294046;border-top:2px solid #294046;border-left-width:1px}.mission-tabs button[aria-pressed=true]{border-left-color:#294046;border-top-color:#b1f56a}.mission-tabs button strong{font-size:19px}.mission-tabs button>span{font-size:10px}.mission-tabs button>span:last-child{display:none}.mission-story{padding-top:15px}.mission-story h2{font-size:34px}.mission-story>p:not(.eyebrow){font-size:12px}.mission-story dl{grid-template-columns:1fr 1fr}.watch{grid-template-columns:1fr;gap:22px}.watch h2{font-size:29px}.watch li{gap:15px;flex-wrap:wrap}.orb-copy .eyebrow{font-size:9px}.demo-footer{gap:10px}}

```

## site/app.js

```javascript
import {data,normalize} from './model.js?v=e2364eb354';
const SLUG='orbita';
document.fonts?.ready.finally(()=>document.documentElement.classList.remove('font-loading'));
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const storageKey=SLUG+'-state-v1';let memory=[],persistent=true;
function read(){if(!persistent)return memory;try{return normalize(JSON.parse(localStorage.getItem(storageKey)));}catch{return [];}}
function commit(ids){memory=normalize(ids);try{localStorage.setItem(storageKey,JSON.stringify(memory));}catch{persistent=false;$('#status').textContent='Saqlash cheklangan. Hozirgi tabdagi tanlov saqlanadi; kerak bo‘lsa faylga oling.';}return memory;}
function toggle(id){const ids=read();return commit(ids.includes(id)?ids.filter(x=>x!==id):[...ids,id]);}
function download(name,text,type='text/plain;charset=utf-8'){const url=URL.createObjectURL(new Blob(['\ufeff'+text],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);}
let opener,openedId;function openDialog(button){opener=button;openedId=button.dataset.read;$('#reader').showModal();}$$('[data-close]').forEach(b=>b.addEventListener('click',()=>$('#reader').close()));$('#reader')?.addEventListener('close',()=>{const target=opener?.isConnected?opener:document.querySelector('[data-read="'+openedId+'"]')||$('#saved-toggle');target?.focus();});
window.addEventListener('storage',e=>{if(e.key===storageKey||e.key===null){render();if($('#reader')?.open&&typeof syncSave==='function')syncSave();}});
let selected='iss';
function render(){const p=data.find(p=>p.id===selected),ids=read();$$('[data-mission]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mission===selected)));$('#mission-title').textContent=p.name;$('#mission-tag').textContent=p.tag;$('#mission-text').textContent=p.text;$('#mission-facts').innerHTML=p.facts.map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join('');$('#mission-source').href=p.source;$('#mission-code').textContent=p.tag;const on=ids.includes(selected);$('#mission-save').setAttribute('aria-pressed',on);$('#mission-save').textContent=on?'✓ Kuzatuvda':'Kuzatuvga qo‘shish +';$('#saved-count').textContent=ids.length;$('#watch-empty').hidden=!!ids.length;$('#watch-items').innerHTML=ids.map(id=>`<li>${data.find(p=>p.id===id).name}</li>`).join('');$('#export').disabled=!ids.length;$('#satellite text').textContent=p.id.toUpperCase();const mode={iss:{x:540,y:150,r:122},webb:{x:580,y:310,r:75},voyager:{x:600,y:85,r:40}}[p.id];$('#orbit-title').textContent=p.name+' — shartli chizma, masshtabga mos emas';$('.orbit-display').dataset.mission=p.id;$('#motion-toggle').disabled=p.id!=='iss';$('#motion-toggle').textContent=p.id!=='iss'?'Bu chizma statik':document.body.classList.contains('paused')?'Harakatni davom ettirish ▶':'Harakatni to‘xtatish Ⅱ';$$('#satellite circle').forEach(c=>{c.setAttribute('cx',mode.x);c.setAttribute('cy',mode.y);});$('#satellite path').setAttribute('d',`M${mode.x+18} ${mode.y}h50`);$('#satellite text').setAttribute('x',mode.x+20);$('#satellite text').setAttribute('y',mode.y-18);$('.orbit-display>svg>circle').setAttribute('r',mode.r);}
$$('[data-mission]').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.mission;render();}));$('#mission-save').addEventListener('click',()=>{toggle(selected);render();});$('#export').addEventListener('click',()=>download('orbita-atlas.txt','ORBITA — kuzatuv ro‘yxati\n'+read().map(id=>{const p=data.find(p=>p.id===id);return p.name+'\n'+p.source;}).join('\n\n')));$('#motion-toggle').addEventListener('click',e=>{const paused=document.body.classList.toggle('paused');syncMotion();e.currentTarget.setAttribute('aria-pressed',paused);e.currentTarget.textContent=paused?'Harakatni davom ettirish ▶':'Harakatni to‘xtatish Ⅱ';});function syncMotion(){document.querySelector('#satellite').style.animationPlayState=document.hidden||document.body.classList.contains('paused')?'paused':'';}document.addEventListener('visibilitychange',syncMotion);render();

```

## site/model.js

```javascript
export const data=[
  {
    "id": "iss",
    "name": "Xalqaro kosmik stansiya",
    "tag": "YER ORBITASI",
    "text": "Yer atrofida aylanadigan xalqaro laboratoriya. Mikrogravitatsiya sharoitidagi tadqiqotlar insonning kosmosda yashashi va ishlashini o‘rganadi.",
    "facts": [
      [
        "MUHIT",
        "Mikrogravitatsiya"
      ],
      [
        "YO‘NALISH",
        "Inson va ilm-fan"
      ]
    ],
    "source": "https://www.nasa.gov/international-space-station/"
  },
  {
    "id": "webb",
    "name": "James Webb",
    "tag": "INFRAQIZIL ASTRONOMIYA",
    "text": "Webb infraqizil nurlanishni kuzatadi. Dastlabki galaktikalar, yulduzlar paydo bo‘lishi va ekzosayyoralar atmosferasi uning tadqiqot yo‘nalishlari orasida.",
    "facts": [
      [
        "KUZATUV",
        "Infraqizil"
      ],
      [
        "NUQTA",
        "Quyosh–Yer L2 atrofi"
      ]
    ],
    "source": "https://science.nasa.gov/mission/webb/"
  },
  {
    "id": "voyager",
    "name": "Voyager 1",
    "tag": "YULDUZLARARO FAZO",
    "text": "1977-yilda uchirilgan apparat tashqi sayyoralarni o‘rgandi va keyinchalik yulduzlararo fazoga yetib bordi. Bu atlas jonli telemetriya bermaydi.",
    "facts": [
      [
        "UCHIRILGAN",
        "1977"
      ],
      [
        "TADQIQOT",
        "Yulduzlararo muhit"
      ]
    ],
    "source": "https://science.nasa.gov/mission/voyager/"
  }
];
export function normalize(value){return Array.isArray(value)?[...new Set(value.filter(id=>data.some(p=>p.id===id)))]:[];}

```

## site/model.test.mjs

```javascript
import {data,normalize} from './model.js';
import test from 'node:test';import assert from 'node:assert/strict';
test('storage accepts only known unique IDs',()=>{assert.deepEqual(normalize([data[0].id,'<script>',data[0].id,null]),[data[0].id]);assert.deepEqual(normalize({}),[]);});
test('curated content IDs and sources are complete',()=>{assert.equal(new Set(data.map(p=>p.id)).size,data.length);for(const p of data){assert.ok(p.name.length>3);assert.ok(p.source.startsWith('https://'));}});

```

## site/combinations.test.mjs

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as model from './model.js';
const bad=[null,undefined,false,true,0,-1,NaN,Infinity,'','unknown',{}, {ids:[]}, ['unknown',null,0,{},['nested']]];

for(const [i,value] of bad.entries())test('invalid persisted selection '+i,()=>{
 assert.deepEqual(model.normalize(value),[]);
});
test('selection sanitization is ordered, idempotent, immutable and bounded',()=>{
 const ids=model.data.map(p=>p.id),raw=[...ids.reverse(),...ids,'unknown',null];const snapshot=JSON.stringify(raw);
 const clean=model.normalize(raw);assert.deepEqual(clean,ids);assert.deepEqual(model.normalize(clean),clean);
 assert.equal(JSON.stringify(raw),snapshot);assert.notEqual(clean,raw);assert.ok(clean.length<=model.data.length);
});
test('all content IDs, images and answers are internally consistent',()=>{
 assert.equal(new Set(model.data.map(p=>p.id)).size,model.data.length);
 for(const item of model.data){assert.match(item.id,/^[a-z][a-z0-9-]*$/);assert.ok(item.name.trim());
  if(item.image)assert.ok(readFileSync(new URL('images/'+item.image,import.meta.url)).length>0);
  if(item.source)assert.equal(new URL(item.source).protocol,'https:');
  if(item.answers){assert.ok(item.answers.length>1);assert.ok(Number.isInteger(item.correct));assert.ok(item.correct>=0&&item.correct<item.answers.length);}
 }
});

```

## site/CREDITS.md

```javascript
# Orbita — credits

Original implementation and sample copy created for this library. Not affiliated with reference organizations.

Visual contract: Kosmik observatoriya: Chakra Petch texnik display, IBM Plex Mono barcha xizmat/o‘qish matni. Siyoh-qora teal, fosfor-yashil signal, asbob oynasi burchaklari, katta orbital SVG va vertikal missiya registri. Chizma shartli, jonli telemetriya emas. Bezaksiz texnik ovoz; oq marketing hero yoki kartali dashboardga aylantirma.

Fonts from https://github.com/google/fonts under bundled SIL OFL licenses. No remote runtime assets.

Factual summaries paraphrased from NASA:
- https://www.nasa.gov/international-space-station/
- https://science.nasa.gov/mission/webb/
- https://science.nasa.gov/mission/voyager/
Orbital illustration is original, schematic and not to scale. No NASA imagery or logos used.

## Sector identity fonts

chakra-petch, ibm-plex-mono. Acquired from the official google/fonts repository under the individual bundled fonts/*-OFL.txt licenses. Layout is our independent implementation, not work by or endorsed by the referenced studios.

```

## site/package.json

```json
{"private": true, "type": "module", "scripts": {"test": "node --test *.test.mjs"}}

```

