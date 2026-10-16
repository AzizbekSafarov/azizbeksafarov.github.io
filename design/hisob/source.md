# Hisob — editable source snapshot

Source fingerprint: `65dfcbe128a4fa2ef64aa5da898dd50d8ccca9574bb0b68350df356b5ef33be1`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/index.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Ma’lumotlar ish stoli: Public Sans xizmat interfeysi, ixcham Plex raqamlari, birlashgan ko‘rsatkich bandi va aniq jadval."><meta name="theme-color" content="#edf0f2"><title>Hisob — Ma’lumot / tahlil paneli</title><link rel="icon" href="mark.svg?v=9320b39c9a"><script>document.documentElement.classList.add('font-loading')</script><script type="module" src="app.js?v=de9b28baef"></script><link rel="preload" href="fonts/publicsans.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="fonts/ibmplexsanscondensed.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="style.css?v=bdd2f0202c"><link rel="stylesheet" href="layout.css?v=00cbaedd9d"><meta name="identity" content="sector-v4"></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><div class="data-shell"><aside class="data-sidebar"><a class="data-logo" href="#main">▥ hisob</a><p class="eyebrow">ISH MAYDONI</p><a class="side-active" href="#main" aria-current="page">▤ Umumiy ko‘rinish</a><a href="#table">≡ Hududlar jadvali</a><a href="../hisob/">↗ AI yo‘riqnomasi</a><div class="side-bottom"><span class="sample-dot"></span> NAMUNAVIY DATASET<br><a href="../">← Dizaynlar</a></div></aside><main id="main" class="data-main"><header class="data-top"><span>Tahlil / Umumiy ko‘rinish</span><span class="eyebrow">LOKAL TAHLIL · v1.0</span></header><div class="data-heading"><div><h1>Hududlar hisoboti</h1><p>Hududlar bo‘yicha o‘quv mashg‘ulotlari. Barcha sonlar namuna.</p></div><button class="btn primary" id="export">CSV eksport ↓</button></div><div class="data-toolbar"><div class="filter-bar" aria-label="Hisobot davri" role="group"><button data-period="7" aria-pressed="true">7 kun</button><button data-period="30" aria-pressed="false">30 kun</button></div><span id="period-label">Oxirgi 7 kun · namuna</span></div><section class="metrics" aria-label="Asosiy ko‘rsatkichlar"><article><p>Ishtiroklar</p><strong id="metric-total">0</strong><span>Davr davomida</span></article><article><p>Oldingi davrga nisbatan</p><strong id="metric-change">0%</strong><span>Bir xil namuna modeli</span></article><article><p>Faol hududlar</p><strong>04</strong><span>Birlashtirilgan dataset</span></article></section><section class="chart-panel"><div class="panel-heading"><h2>Ishtirok dinamikasi</h2><span>● Ishtiroklar</span></div><div class="chart"><svg id="chart" viewBox="0 0 900 245" role="img" aria-labelledby="chart-title"><title id="chart-title">Davr bo‘yicha ishtiroklar</title><g stroke="#dfe5ed"><path d="M45 25H875M45 85H875M45 145H875M45 205H875"/></g><path id="chart-area" fill="#e3ebff"/><path id="chart-line" fill="none" stroke="#174cea" stroke-width="3"/><g id="chart-dots" fill="#174cea"></g><g id="chart-labels" fill="#5c677b" font-size="11"></g></svg></div><p id="chart-summary" class="chart-summary"></p></section><section id="table" class="table-panel"><div class="panel-heading"><h2>Hududlar kesimida</h2><label class="search-label">Hudud qidirish<input id="search" type="search" placeholder="Masalan, Samarqand"></label></div><div class="table-scroll"><table><thead><tr><th scope="col"><button data-sort="name">Hudud ↕</button></th><th scope="col"><button data-sort="total">Ishtiroklar ↕</button></th><th scope="col">Ulush</th><th scope="col">Oldingi davr</th></tr></thead><tbody id="rows"></tbody></table></div><p class="table-note" id="result-count"></p></section><p class="live" id="status" role="status"></p><p class="data-note">Bu o‘quv uchun yaratilgan tahlil namunasi. Haqiqiy odamlar, tadbirlar yoki rasmiy statistika bilan bog‘liq emas.</p></main></div><footer class="demo-footer wrap"><p>Namuna ma’lumotlar bilan mustaqil tahlil paneli. Rasmiy statistika emas.</p><nav aria-label="Qo‘shimcha havolalar"><a href="../">Dizaynlar ↗</a><a href="../hisob/">AI konteksti ↗</a><a href="CREDITS.md">Manbalar ↗</a></nav></footer></body></html>
```

## site/style.css

```css
@font-face{font-family:'Ledger UI';src:url('fonts/publicsans.ttf') format('truetype');font-weight:100 900;font-display:swap}
@font-face{font-family:'Ledger Figures';src:url('fonts/ibmplexsanscondensed.ttf') format('truetype');font-weight:400;font-display:swap}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:24px}body{margin:0;overflow-x:clip;-webkit-font-smoothing:antialiased}h1,h2,h3,p,figure{margin:0}a{color:inherit;text-decoration:none}button,input,select{font:inherit;color:inherit}button,a{touch-action:manipulation}button{cursor:pointer}button:disabled{opacity:.45;cursor:not-allowed}button:active:not(:disabled){translate:0 1px}button,a,input,summary{scroll-margin:24px}a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--focus,#f26536);outline-offset:4px}[hidden]{display:none!important}img,svg{display:block;max-width:100%}main,section,article,aside{min-width:0}.skip{position:fixed;left:16px;top:-100px;padding:12px 18px;background:#fff;color:#111;z-index:100}.skip:focus{top:12px}.wrap{width:min(1360px,calc(100% - 80px));margin-inline:auto}.live{min-height:24px;font-size:13px;line-height:1.6}.empty{padding:32px 0;font-size:18px}.eyebrow{font-size:11px;letter-spacing:.08em}.demo-footer,.footer{display:flex;flex-wrap:wrap;justify-content:space-between;gap:24px;padding-block:30px;border-top:1px solid var(--line)}.demo-footer p,.footer p{max-width:570px;font-size:12px;line-height:1.7}.demo-footer nav,.footer nav{display:flex;flex-wrap:wrap;gap:20px;font-size:12px}.demo-footer a,.footer nav a{display:inline-flex;align-items:center;min-height:44px;text-decoration:underline;text-underline-offset:4px}dialog{padding:0;width:min(820px,calc(100% - 32px));max-height:calc(100dvh - 32px);overflow:auto;overscroll-behavior:contain;background:var(--modal,#fff);color:var(--ink,#111);border:1px solid var(--line);box-shadow:0 20px 80px #0003}dialog::backdrop{background:#060a1588}dialog[open]{animation:reveal .2s ease-out}.dialog-top,.dialog-head{display:flex;justify-content:space-between;align-items:start;gap:20px;padding:24px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--modal,#fff);z-index:2}.dialog-top h2,.dialog-head h2{font-size:32px;line-height:1.2}.close{width:44px;height:44px;flex:0 0 44px;font:26px/1 Arial;border:1px solid var(--line);background:transparent}.reader,.dialog-content{padding:24px}.reader p,.dialog-content>p{margin-block:16px;line-height:1.75}.reader img{width:100%;max-height:350px;object-fit:cover;margin-bottom:24px}.reader a{text-decoration:underline;text-underline-offset:4px}.reader~.btn{margin:0 24px 24px}.detail-image{width:100%;height:300px;object-fit:cover}body:has(dialog[open]){overflow:hidden}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;clip-path:inset(50%);overflow:hidden;white-space:nowrap}.font-loading h1{visibility:hidden}.font-loading .identity-display{visibility:hidden}@keyframes reveal{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@media(max-width:800px){.wrap{width:calc(100% - 40px)}}@media(max-width:440px){.wrap{width:calc(100% - 32px)}.dialog-top,.dialog-head,.reader,.dialog-content{padding:20px}.dialog-top h2,.dialog-head h2{font-size:28px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}

.dialog-top h2,.dialog-head h2{min-width:0;overflow-wrap:anywhere}

```

## site/layout.css

```css
:root{--ink:#26313a;--line:#d4d9de;--modal:#fff;--focus:#ae5100;color-scheme:light}body{font:14px/1.5 'Ledger UI',sans-serif;color:#26313a;background:#edf0f2}.data-shell{display:grid;grid-template-columns:210px minmax(0,1fr);min-height:100vh}.data-sidebar{background:#252d35;color:#c7d0d7;padding:30px 20px;position:sticky;top:0;height:100dvh}.data-logo{font:700 28px 'Ledger UI',sans-serif;letter-spacing:-1px;color:#f2f4f5;display:block;margin-bottom:55px}.data-sidebar .eyebrow{font-size:9px;color:#8b9da9;margin:25px 0 15px;letter-spacing:.1em}.data-sidebar>a:not(.data-logo){display:block;padding:13px 12px;font-size:11px;min-height:44px;margin-inline:-4px}.data-sidebar .side-active{background:#39434d;color:white;border-left:3px solid #ffbd59}.side-bottom{position:absolute;bottom:30px;left:20px;right:20px;border-top:1px solid #485560;padding-top:20px;font-size:8px;line-height:2;color:#8b9da9}.side-bottom a{font-size:11px;display:inline-block;min-height:44px;padding-top:14px}.sample-dot{width:6px;height:6px;background:#ffbd59;display:inline-block;border-radius:50%;margin-right:5px}.data-main{padding:0 34px 35px;max-width:1600px;width:100%;margin:auto;align-self:start}.data-top{display:flex;flex-wrap:wrap;gap:15px;justify-content:space-between;padding:20px 0;border-bottom:1px solid #c7d0d6;font-size:10px;color:#5e6d78}.data-top .eyebrow{font-size:9px}.data-heading{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:25px;padding:28px 0 23px}.data-heading h1{font:650 25px/1.25 'Ledger UI',sans-serif;letter-spacing:-.6px}.data-heading p{font-size:11px;color:#5c6972;margin-top:9px}.btn{display:inline-flex;gap:18px;align-items:center;justify-content:space-between;border:1px solid #b7c2c8;border-radius:4px;padding:10px 14px;background:#fff;color:#39454f;min-height:42px;font-size:11px}.btn.primary{background:#293943;color:#fff;border-color:#293943}.btn.primary:hover{background:#455f6f}.data-toolbar{display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between;margin-bottom:20px}.filter-bar{display:flex;border:1px solid #b9c4cb;border-radius:4px;overflow:hidden;background:#fff}.filter-bar button{border:0;border-right:1px solid #c7d0d6;border-radius:0;background:transparent;font-size:11px;padding:9px 15px;min-height:38px}.filter-bar button:last-child{border:0}.filter-bar button[aria-pressed=true]{background:#e8d2aa;color:#624313;font-weight:700}#period-label{font-size:10px;color:#5c6972}.metrics{display:flex;flex-wrap:wrap;border:1px solid #c7d0d6;background:#fff;margin-bottom:24px}.metrics article{flex:1;min-width:180px;padding:20px 24px;border-left:1px solid #c7d0d6}.metrics article:first-child{border-left:0}.metrics p{font-size:11px;color:#5c6972}.metrics strong{font:400 47px/1.1 'Ledger Figures',sans-serif;display:block;margin:10px 0 8px;font-variant-numeric:tabular-nums;color:#293c48}.metrics article:first-child strong{color:#9c5700}.metrics span{font-size:9px;color:#65727c}.chart-panel{background:#fff;border:1px solid #c7d0d6;padding:22px;margin-bottom:24px}.panel-heading{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:20px;margin-bottom:20px}.panel-heading h2{font:600 14px 'Ledger UI',sans-serif}.panel-heading>span{font-size:9px;color:#9c5700}.chart{width:100%;overflow:hidden}.chart svg{width:100%;height:auto}.chart svg text{font-family:'Ledger Figures',sans-serif;fill:#5c6972}#chart-line{stroke:#a66c21}#chart-area{fill:#f7e6c9}#chart-dots{fill:#a66c21}.chart-summary{font:10px 'Ledger Figures',sans-serif;color:#5c6972;margin-top:15px}.table-panel{background:#fff;border:1px solid #c7d0d6;padding:22px}.search-label{font-size:9px;color:#5c6972;display:flex;align-items:center;gap:12px;flex-wrap:wrap}.search-label input{font-size:11px;background:#fff;border:1px solid #b9c4cb;padding:10px 12px;min-height:40px;width:190px;max-width:100%;border-radius:3px}.table-scroll{overflow:auto}table{width:100%;border-collapse:collapse;font-size:12px;white-space:nowrap}thead{background:#f0f3f5;color:#65747e;font-size:10px}th,td{padding:15px;text-align:right;border-bottom:1px solid #e2e6e9}th:first-child{text-align:left}th{font-weight:500}th button{border:0;background:none;padding:0;min-height:35px;font-size:10px}tbody td{font-family:'Ledger Figures',sans-serif;font-size:16px;font-variant-numeric:tabular-nums}tbody tr:hover{background:#fffcf4}.table-note{font-size:10px;color:#5c6972;margin-top:17px}.data-note{font-size:10px;color:#5c6972;margin-top:18px;max-width:660px}.data-main .live{margin-top:15px}.demo-footer{font-size:10px}.demo-footer p,.demo-footer nav{font-size:10px}
@media(max-width:1100px){.data-shell{grid-template-columns:175px minmax(0,1fr)}.data-sidebar{padding-inline:15px}.data-main{padding-inline:25px}.data-sidebar>a:not(.data-logo){font-size:10px}.metrics article{min-width:150px;padding:18px}.metrics strong{font-size:41px}.data-heading h1{font-size:23px}.side-bottom{left:15px;right:15px}}
@media(max-width:760px){.data-shell{display:block}.data-sidebar{position:static;height:auto;padding:16px 20px;display:flex;align-items:center;flex-wrap:wrap;gap:8px 24px}.data-logo{font-size:24px;margin:0}.data-sidebar>.eyebrow,.side-bottom{display:none}.data-sidebar>a:not(.data-logo){font-size:9px;padding:8px 9px;min-height:34px}.data-main{padding-inline:18px}.data-top{font-size:9px;padding-block:16px}.data-top .eyebrow{font-size:8px}.data-heading{gap:20px;padding-block:23px}.data-heading h1{font-size:24px}.data-heading p{font-size:11px}.metrics{display:grid;grid-template-columns:1fr 1fr}.metrics article{min-width:0;padding:17px}.metrics article:last-child{grid-column:1/-1;border-left:0;border-top:1px solid #c7d0d6;display:flex;align-items:center;gap:20px;justify-content:space-between}.metrics article:last-child strong{font-size:28px;margin:0}.metrics article:last-child span{display:none}.metrics strong{font-size:42px}.metrics p{font-size:10px}.chart-panel,.table-panel{padding:18px}.panel-heading{gap:16px}.search-label{width:100%;justify-content:space-between}.search-label input{width:190px}.chart-summary{font-size:9px;line-height:1.7}.chart-panel svg{min-width:0}.chart{overflow:visible}th,td{padding:12px}.data-toolbar{gap:15px}.data-main>.data-note{font-size:10px}}

@media(max-width:760px){.data-sidebar{gap:6px 8px}.data-sidebar .data-logo{width:100%;margin-bottom:10px}.data-sidebar>a:not(.data-logo){flex:1;min-width:0;text-align:center;font-size:9px;padding:8px 4px;min-height:44px;margin:0}}

```

## site/app.js

```javascript
import {data,normalize,report,csv} from './model.js?v=b11ffd97f5';
const SLUG='hisob';
document.fonts?.ready.finally(()=>document.documentElement.classList.remove('font-loading'));
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const storageKey=SLUG+'-state-v1';let memory=[],persistent=true;
function read(){if(!persistent)return memory;try{return normalize(JSON.parse(localStorage.getItem(storageKey)));}catch{return [];}}
function commit(ids){memory=normalize(ids);try{localStorage.setItem(storageKey,JSON.stringify(memory));}catch{persistent=false;$('#status').textContent='Saqlash cheklangan. Hozirgi tabdagi tanlov saqlanadi; kerak bo‘lsa faylga oling.';}return memory;}
function toggle(id){const ids=read();return commit(ids.includes(id)?ids.filter(x=>x!==id):[...ids,id]);}
function download(name,text,type='text/plain;charset=utf-8'){const url=URL.createObjectURL(new Blob(['\ufeff'+text],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);}
let opener,openedId;function openDialog(button){opener=button;openedId=button.dataset.read;$('#reader').showModal();}$$('[data-close]').forEach(b=>b.addEventListener('click',()=>$('#reader').close()));$('#reader')?.addEventListener('close',()=>{const target=opener?.isConnected?opener:document.querySelector('[data-read="'+openedId+'"]')||$('#saved-toggle');target?.focus();});
window.addEventListener('storage',e=>{if(e.key===storageKey||e.key===null){render();if($('#reader')?.open&&typeof syncSave==='function')syncSave();}});
let period=7,query='',sort='total',direction=-1;
function render(){const r=report(period,query,sort,direction),maximum=Math.ceil(Math.max(...r.series)/30)*30;$('#metric-total').textContent=r.total.toLocaleString('uz-UZ');$('#metric-change').textContent=((r.total-r.previous)/r.previous*100).toFixed(1)+'%';$('#period-label').textContent=period+' kun · namunaviy davr';const responsivePlotWidth=Math.max(260,Math.round($('#chart').clientWidth));$('#chart').setAttribute('viewBox',`0 0 ${responsivePlotWidth} 245`);$('#chart').querySelector('g[stroke] path').setAttribute('d',[25,85,145,205].map(y=>`M45 ${y}H${responsivePlotWidth-10}`).join(''));const points=r.series.map((v,i)=>[45+i*(responsivePlotWidth-55)/6,205-v/maximum*180]);$('#chart-line').setAttribute('d','M'+points.map(p=>p.join(',')).join(' L'));$('#chart-area').setAttribute('d','M45,205 L'+points.map(p=>p.join(',')).join(' L')+` L${responsivePlotWidth-10},205Z`);$('#chart-dots').innerHTML=points.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4"/>`).join('');$('#chart-labels').innerHTML=[0,1,2,3].map(i=>`<text x="35" y="${209-i*60}" text-anchor="end">${Math.round(maximum*i/3)}</text>`).join('')+points.map(([x,y],i)=>`<text x="${x}" y="235" text-anchor="middle">${period===7?i+1:Math.round((i+1)*30/7)}-kun</text>`).join('');$('#chart-title').textContent=period+' kunlik namuna: '+r.series.join(', ');$('#chart-summary').textContent='7 ta davr bo‘lagi: '+r.series.join(' / ')+' · jami '+r.total;$('#rows').innerHTML=r.rows.length?r.rows.map(p=>`<tr><th scope="row">${p.name}</th><td>${p.total}</td><td>${(p.total/r.total*100).toFixed(1)}%</td><td>${p.previous}</td></tr>`).join(''):'<tr><td colspan="4">Hudud topilmadi. Qidiruvni o‘zgartiring.</td></tr>';$('#result-count').textContent=r.rows.length+' / '+data.length+' hudud · ko‘rinayotgan qatorlar eksport qilinadi';$('#export').disabled=!r.rows.length;$$('[data-sort]').forEach(b=>{const active=b.dataset.sort===sort;b.closest('th').setAttribute('aria-sort',active?(direction===1?'ascending':'descending'):'none');b.textContent=(b.dataset.sort==='name'?'Hudud':'Ishtiroklar')+' '+(active?(direction===1?'↑':'↓'):'↕');});}
$$('[data-period]').forEach(b=>b.addEventListener('click',()=>{period=Number(b.dataset.period);$$('[data-period]').forEach(x=>x.setAttribute('aria-pressed',x===b));render();}));$('#search').addEventListener('input',e=>{query=e.target.value;render();});$$('[data-sort]').forEach(b=>b.addEventListener('click',()=>{direction=sort===b.dataset.sort?-direction:1;sort=b.dataset.sort;render();}));$('#export').addEventListener('click',()=>download('hisob-'+period+'-kun.csv',csv(report(period,query,sort,direction).rows),'text/csv;charset=utf-8'));render();

let chartObservedWidth=0;new ResizeObserver(entries=>{const width=Math.round(entries[0].contentRect.width);if(width!==chartObservedWidth){chartObservedWidth=width;render();}}).observe(document.querySelector('.chart'));

```

## site/model.js

```javascript
export const data=[
  {
    "id": "toshkent",
    "name": "Toshkent",
    "values": [
      42,
      48,
      39,
      56,
      61,
      57,
      68
    ],
    "previous": 380
  },
  {
    "id": "samarqand",
    "name": "Samarqand",
    "values": [
      23,
      27,
      31,
      24,
      34,
      39,
      42
    ],
    "previous": 220
  },
  {
    "id": "buxoro",
    "name": "Buxoro",
    "values": [
      16,
      19,
      17,
      22,
      28,
      26,
      31
    ],
    "previous": 150
  },
  {
    "id": "fargona",
    "name": "Farg‘ona",
    "values": [
      28,
      32,
      27,
      35,
      39,
      42,
      47
    ],
    "previous": 230
  }
];
export function normalize(value){return Array.isArray(value)?[...new Set(value.filter(id=>data.some(p=>p.id===id)))]:[];}
export function report(period=7,query='',sort='total',direction=-1){const factor=period===30?4:1,rows=data.map(p=>({...p,total:p.values.reduce((a,b)=>a+b,0)*factor,previous:p.previous*factor}));const total=rows.reduce((n,p)=>n+p.total,0),previous=rows.reduce((n,p)=>n+p.previous,0);return {total,previous,series:data[0].values.map((_,i)=>data.reduce((n,p)=>n+p.values[i]*factor,0)),rows:rows.filter(p=>p.name.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())).sort((a,b)=>direction*(sort==='name'?a.name.localeCompare(b.name):a.total-b.total))};}
export function csv(rows){return '\"Hudud\",\"Ishtiroklar\",\"Oldingi davr\"\n'+rows.map(r=>[r.name,r.total,r.previous].map(v=>'\"'+String(v).replaceAll('\"','\"\"')+'\"').join(',')).join('\n');}

```

## site/model.test.mjs

```javascript
import {data,normalize,report,csv} from './model.js';
import test from 'node:test';import assert from 'node:assert/strict';
test('storage accepts only known unique IDs',()=>{assert.deepEqual(normalize([data[0].id,'<script>',data[0].id,null]),[data[0].id]);assert.deepEqual(normalize({}),[]);});
test('period totals match chart and rows; CSV uses filtered rows',()=>{const r=report(7);assert.equal(r.total,r.series.reduce((a,b)=>a+b,0));assert.equal(r.total,r.rows.reduce((n,p)=>n+p.total,0));assert.equal(report(30).total,4*r.total);const q=report(7,'Samarqand');assert.equal(q.rows.length,1);assert.ok(csv(q.rows).includes('Samarqand'));assert.ok(!csv(q.rows).includes('Toshkent'));assert.equal(report(7,'xyz').rows.length,0);});

```

## site/CREDITS.md

```javascript
# Hisob — credits

Original implementation and sample copy created for this library. Not affiliated with reference organizations.

Visual contract: Tahlil ish stoli: Public Sans UI + IBM Plex Sans Condensed tabular raqamlar. Sovuq kulrang, oq ish sirtlari, grafit navigatsiya va amber analitika. Ko‘rsatkichlar bitta ajratilgan bandda; chart va table aniq xizmat iyerarxiyasida. Display-hero yo‘q. CSV aynan filtrlangan qatorlarni oladi, barcha sonlar namuna.

Fonts from https://github.com/google/fonts under bundled SIL OFL licenses. No remote runtime assets.

## Sector identity fonts

public-sans, ibm-plex-sans-condensed. Acquired from the official google/fonts repository under the individual bundled fonts/*-OFL.txt licenses. Layout is our independent implementation, not work by or endorsed by the referenced studios.

```

## site/package.json

```json
{"private":true,"type":"module","scripts":{"test":"node --test model.test.mjs"}}

```

