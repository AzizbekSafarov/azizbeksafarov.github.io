# Hisob — editable source snapshot

Source fingerprint: `6223696f6f3c5e2031df94c8f26f1e262ae820e7896744f45b872a49ba4786d3`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/index.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Ixcham sidebar, aniq sonlar, davrga bog‘langan grafik va saralanadigan jadval. CSV eksporti."><meta name="theme-color" content="#edf1f6"><title>Hisob — Ma’lumot / tahlil paneli</title><link rel="icon" href="mark.svg"><link rel="preload" href="fonts/sans.ttf" as="font" type="font/ttf" crossorigin><script>document.documentElement.classList.add('font-loading')</script><link rel="stylesheet" href="style.css?v=35db7a0b05"><script type="module" src="app.js?v=d820254e05"></script></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><div class="data-shell"><aside class="data-sidebar"><a class="data-logo" href="#main">▥ hisob</a><p class="eyebrow">ISH MAYDONI</p><a class="side-active" href="#main" aria-current="page">▤ Umumiy ko‘rinish</a><a href="#table">≡ Hududlar jadvali</a><a href="../hisob/">↗ AI yo‘riqnomasi</a><div class="side-bottom"><span class="sample-dot"></span> NAMUNAVIY DATASET<br><a href="../">← Dizaynlar</a></div></aside><main id="main" class="data-main"><header class="data-top"><span>Tahlil / Umumiy ko‘rinish</span><span class="eyebrow">LOKAL TAHLIL · v1.0</span></header><div class="data-heading"><div><h1>Natijalar bir qarashda.</h1><p>Hududlar bo‘yicha o‘quv mashg‘ulotlari. Barcha sonlar namuna.</p></div><button class="btn primary" id="export">CSV eksport ↓</button></div><div class="data-toolbar"><div class="filter-bar" aria-label="Hisobot davri" role="group"><button data-period="7" aria-pressed="true">7 kun</button><button data-period="30" aria-pressed="false">30 kun</button></div><span id="period-label">Oxirgi 7 kun · namuna</span></div><section class="metrics" aria-label="Asosiy ko‘rsatkichlar"><article><p>Ishtiroklar</p><strong id="metric-total">0</strong><span>Davr davomida</span></article><article><p>Oldingi davrga nisbatan</p><strong id="metric-change">0%</strong><span>Bir xil namuna modeli</span></article><article><p>Faol hududlar</p><strong>04</strong><span>Birlashtirilgan dataset</span></article></section><section class="chart-panel"><div class="panel-heading"><h2>Ishtirok dinamikasi</h2><span>● Ishtiroklar</span></div><div class="chart"><svg id="chart" viewBox="0 0 900 245" role="img" aria-labelledby="chart-title"><title id="chart-title">Davr bo‘yicha ishtiroklar</title><g stroke="#dfe5ed"><path d="M45 25H875M45 85H875M45 145H875M45 205H875"/></g><path id="chart-area" fill="#e3ebff"/><path id="chart-line" fill="none" stroke="#174cea" stroke-width="3"/><g id="chart-dots" fill="#174cea"></g><g id="chart-labels" fill="#5c677b" font-size="11"></g></svg></div><p id="chart-summary" class="chart-summary"></p></section><section id="table" class="table-panel"><div class="panel-heading"><h2>Hududlar kesimida</h2><label class="search-label">Hudud qidirish<input id="search" type="search" placeholder="Masalan, Samarqand"></label></div><div class="table-scroll"><table><thead><tr><th scope="col"><button data-sort="name">Hudud ↕</button></th><th scope="col"><button data-sort="total">Ishtiroklar ↕</button></th><th scope="col">Ulush</th><th scope="col">Oldingi davr</th></tr></thead><tbody id="rows"></tbody></table></div><p class="table-note" id="result-count"></p></section><p class="live" id="status" role="status"></p><p class="data-note">Bu o‘quv uchun yaratilgan tahlil namunasi. Haqiqiy odamlar, tadbirlar yoki rasmiy statistika bilan bog‘liq emas.</p></main></div><footer class="demo-footer wrap"><p>Namuna ma’lumotlar bilan mustaqil tahlil paneli. Rasmiy statistika emas.</p><nav aria-label="Qo‘shimcha havolalar"><a href="../">Dizaynlar ↗</a><a href="../hisob/">AI konteksti ↗</a><a href="CREDITS.md">Manbalar ↗</a></nav></footer></body></html>
```

## site/style.css

```css
@font-face{font-family:Sans;src:url('fonts/sans.ttf') format('truetype');font-weight:100 900;font-display:swap}
@font-face{font-family:Space;src:url('fonts/space.ttf') format('truetype');font-weight:100 900;font-display:swap}
@font-face{font-family:Mono;src:url('fonts/mono.ttf') format('truetype');font-weight:400;font-display:swap}
*{box-sizing:border-box}body{margin:0;-webkit-font-smoothing:antialiased}a{color:inherit}button,input,select{font:inherit;color:inherit}button,a{touch-action:manipulation}button{cursor:pointer}button:disabled{opacity:.45;cursor:not-allowed}button:focus-visible,a:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--focus,#cb5228);outline-offset:4px}[hidden]{display:none!important}img,svg{max-width:100%;display:block}h1,h2,h3,p,figure{margin:0}a{text-decoration:none}.skip{position:fixed;left:12px;top:-100px;z-index:99;background:#fff;color:#111;padding:12px}.skip:focus{top:12px}.wrap{width:min(1400px,calc(100% - 80px));margin:auto}.eyebrow{font-size:11px;letter-spacing:.1em;text-transform:uppercase}.muted{color:var(--muted)}.btn{min-height:46px;padding:11px 20px;border:1px solid currentColor;background:transparent;display:inline-flex;gap:24px;align-items:center;justify-content:space-between;line-height:1.4}.btn:hover{background:var(--hover);color:var(--hover-ink,inherit)}.btn:active{transform:translateY(2px)}.btn[aria-pressed=true]{background:var(--active);color:var(--active-ink);border-color:var(--active)}.live{min-height:26px;margin-block:16px;font-size:13px}.demo-footer{display:flex;justify-content:space-between;gap:25px;flex-wrap:wrap;padding-block:30px;border-top:1px solid var(--line);font:12px/1.6 Arial,sans-serif}.demo-footer p{max-width:530px}.demo-footer nav{display:flex;gap:24px;flex-wrap:wrap}.demo-footer a{min-height:40px;display:inline-flex;align-items:center;text-decoration:underline;text-underline-offset:4px}dialog{width:min(780px,calc(100% - 32px));max-height:calc(100dvh - 32px);overflow:auto;padding:32px;border:1px solid var(--line);color:inherit;background:var(--modal,#fff)}dialog::backdrop{background:#0009}dialog[open]{animation:enter .24s ease-out}.dialog-top{display:flex;align-items:start;justify-content:space-between;gap:20px;margin-bottom:24px}.dialog-top h2{font-size:32px;line-height:1.1}.close{width:44px;height:44px;flex:0 0 44px;border:1px solid currentColor;background:transparent;font-size:26px}.reader p{margin-bottom:20px;line-height:1.7}.reader img{width:100%;max-height:330px;object-fit:cover;margin-bottom:24px}.filter-bar{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.filter-bar button{border:1px solid var(--line);min-height:44px;padding:10px 16px;background:transparent}.filter-bar button[aria-pressed=true]{background:var(--active);color:var(--active-ink);border-color:var(--active)}.empty{padding:35px 0;font-size:18px}.font-loading h1{visibility:hidden;animation:font-show 0s 2.5s forwards}@keyframes font-show{to{visibility:visible}}@keyframes enter{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@media(max-width:800px){.wrap{width:calc(100% - 40px)}}@media(max-width:440px){.wrap{width:calc(100% - 32px)}dialog{padding:22px}.dialog-top h2{font-size:28px}.btn{gap:14px;padding-inline:16px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.font-loading h1{visibility:visible}}
:root{--line:#dce2ec;--muted:#5b667a;--active:#174cea;--active-ink:white;--hover:#e3ebff;--focus:#174cea;color-scheme:light}body{font:14px/1.5 Sans,Arial,sans-serif;background:#edf1f6;color:#18243a}.data-shell{display:grid;grid-template-columns:224px minmax(0,1fr);min-height:100vh}.data-sidebar{padding:30px 18px;background:#101d35;color:#bdc8dc;position:sticky;top:0;height:100dvh;display:flex;flex-direction:column;gap:9px}.data-logo{font:600 32px Space,sans-serif;color:#fff;margin:0 14px 50px}.data-sidebar>.eyebrow{font-size:10px;margin:0 14px 10px;color:#92a4c2}.data-sidebar>a:not(.data-logo){padding:13px 14px;font-size:12px;border-radius:5px}.side-active{background:#24395d;color:#fff}.data-sidebar>a:hover{background:#24395d}.side-bottom{margin-top:auto;font:10px/2 Mono,monospace;padding:14px}.sample-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#80c6af;margin-right:5px}.side-bottom a{display:block;margin-top:14px;font:12px Sans,Arial,sans-serif}.data-main{padding:0 40px 35px;min-width:0;max-width:1500px}.data-top{display:flex;justify-content:space-between;gap:20px;border-bottom:1px solid var(--line);padding:24px 0;color:var(--muted);font-size:12px}.data-top .eyebrow{font-size:10px}.data-heading{display:flex;align-items:center;justify-content:space-between;gap:30px;padding:34px 0 26px}.data-heading h1{font-size:30px;font-weight:600;letter-spacing:-.04em}.data-heading p{color:var(--muted);margin-top:7px;font-size:13px}.primary{background:#174cea;color:white;border-color:#174cea;font-size:12px;border-radius:5px}.primary:hover{background:#123bb5;color:#fff}.data-toolbar{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:22px}.data-toolbar .filter-bar{gap:0;border:1px solid var(--line);padding:4px;background:#fff;border-radius:6px}.data-toolbar button{border:0;font-size:12px;min-height:34px;border-radius:3px}.data-toolbar>span{font:11px Mono,monospace;color:var(--muted)}.metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.metrics article{background:#fff;border:1px solid var(--line);padding:22px;border-radius:6px}.metrics p{font-size:12px;color:var(--muted)}.metrics strong{display:block;font:34px/1.5 Mono,monospace;letter-spacing:-.06em}.metrics span{font-size:10px;color:var(--muted)}.chart-panel,.table-panel{background:#fff;border:1px solid var(--line);border-radius:6px;margin-top:22px;padding:23px}.panel-heading{display:flex;align-items:center;justify-content:space-between;gap:20px}.panel-heading h2{font-weight:600;font-size:15px}.panel-heading>span{font-size:11px;color:#174cea}.chart{margin-top:20px}.chart svg{width:100%;height:auto;min-height:180px}#chart-line{stroke-dasharray:1800;stroke-dashoffset:0;animation:draw 1s ease-out}.chart-summary{font:11px/1.7 Mono,monospace;color:var(--muted);padding-top:12px}.search-label{font-size:10px;color:var(--muted);display:flex;align-items:center;gap:12px}.search-label input{width:190px;min-height:38px;padding:8px 12px;border:1px solid var(--line);border-radius:4px;background:white;font-size:12px}.table-scroll{overflow-x:auto;margin-top:20px}table{width:100%;border-collapse:collapse;text-align:left;font-size:12px;min-width:420px}th{font-weight:500;color:var(--muted);background:#f6f8fb}th,td{padding:13px 14px;border-bottom:1px solid var(--line)}td:not(:first-child){font-family:Mono,monospace}th button{background:none;border:0;font-size:11px;padding:5px 0;min-height:32px}.table-note{font-size:10px;color:var(--muted);margin-top:14px}.data-note{font-size:11px;color:var(--muted);max-width:650px}.demo-footer{margin-top:20px}@keyframes draw{from{stroke-dashoffset:1800}}@media(max-width:1100px){.data-shell{grid-template-columns:185px minmax(0,1fr)}.data-main{padding-inline:24px}.data-heading h1{font-size:26px}.metrics article{padding:16px}.metrics strong{font-size:28px}}@media(max-width:800px){.data-shell{grid-template-columns:1fr}.data-sidebar{position:static;height:auto;display:flex;flex-direction:row;flex-wrap:wrap;gap:8px;align-items:center;padding:15px 20px}.data-logo{font-size:25px;margin:0 auto 0 0}.data-sidebar>.eyebrow,.side-bottom{display:none}.data-sidebar>a:not(.data-logo){padding:8px;font-size:10px}.data-main{padding-inline:20px}.data-heading{align-items:start}.data-top .eyebrow{display:none}}@media(max-width:550px){.data-main{padding-inline:16px}.data-heading{flex-direction:column;gap:18px}.data-heading h1{font-size:28px}.metrics{grid-template-columns:1fr;gap:10px}.metrics article{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5px}.metrics strong{grid-column:2;grid-row:1/3;text-align:right;font-size:28px}.metrics span{grid-column:1}.chart-panel,.table-panel{padding:16px}.table-panel .panel-heading{align-items:start;flex-direction:column}.search-label{width:100%;justify-content:space-between}.search-label input{width:55%}.data-toolbar{flex-wrap:wrap;gap:12px}.data-sidebar>a:not(.data-logo){font-size:10px}.data-logo{width:100%;margin-bottom:5px}.chart svg{min-height:130px}}
.chart-summary{font-size:12px}.data-note,.table-note{font-size:12px}.data-toolbar>span{font-size:12px}.chart-panel svg text{font-family:Mono,monospace}
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
function render(){const r=report(period,query,sort,direction),maximum=Math.ceil(Math.max(...r.series)/30)*30;$('#metric-total').textContent=r.total.toLocaleString('uz-UZ');$('#metric-change').textContent=((r.total-r.previous)/r.previous*100).toFixed(1)+'%';$('#period-label').textContent=period+' kun · namunaviy davr';const points=r.series.map((v,i)=>[45+i*830/6,205-v/maximum*180]);$('#chart-line').setAttribute('d','M'+points.map(p=>p.join(',')).join(' L'));$('#chart-area').setAttribute('d','M45,205 L'+points.map(p=>p.join(',')).join(' L')+' L875,205Z');$('#chart-dots').innerHTML=points.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4"/>`).join('');$('#chart-labels').innerHTML=[0,1,2,3].map(i=>`<text x="35" y="${209-i*60}" text-anchor="end">${Math.round(maximum*i/3)}</text>`).join('')+points.map(([x,y],i)=>`<text x="${x}" y="235" text-anchor="middle">${period===7?i+1:Math.round((i+1)*30/7)}-kun</text>`).join('');$('#chart-title').textContent=period+' kunlik namuna: '+r.series.join(', ');$('#chart-summary').textContent='7 ta davr bo‘lagi: '+r.series.join(' / ')+' · jami '+r.total;$('#rows').innerHTML=r.rows.length?r.rows.map(p=>`<tr><th scope="row">${p.name}</th><td>${p.total}</td><td>${(p.total/r.total*100).toFixed(1)}%</td><td>${p.previous}</td></tr>`).join(''):'<tr><td colspan="4">Hudud topilmadi. Qidiruvni o‘zgartiring.</td></tr>';$('#result-count').textContent=r.rows.length+' / '+data.length+' hudud · ko‘rinayotgan qatorlar eksport qilinadi';$('#export').disabled=!r.rows.length;$$('[data-sort]').forEach(b=>{const active=b.dataset.sort===sort;b.closest('th').setAttribute('aria-sort',active?(direction===1?'ascending':'descending'):'none');b.textContent=(b.dataset.sort==='name'?'Hudud':'Ishtiroklar')+' '+(active?(direction===1?'↑':'↓'):'↕');});}
$$('[data-period]').forEach(b=>b.addEventListener('click',()=>{period=Number(b.dataset.period);$$('[data-period]').forEach(x=>x.setAttribute('aria-pressed',x===b));render();}));$('#search').addEventListener('input',e=>{query=e.target.value;render();});$$('[data-sort]').forEach(b=>b.addEventListener('click',()=>{direction=sort===b.dataset.sort?-direction:1;sort=b.dataset.sort;render();}));$('#export').addEventListener('click',()=>download('hisob-'+period+'-kun.csv',csv(report(period,query,sort,direction).rows),'text/csv;charset=utf-8'));render();

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

Visual contract: DM Sans UI + IBM Plex Mono qiymatlar. Sovuq kulrang ish stoli, ko‘k aktiv holat, oq zich ma’lumot panellari. Hero va dekorativ gradientlar yo‘q.

Fonts from https://github.com/google/fonts under bundled SIL OFL licenses. No remote runtime assets.

```

## site/package.json

```json
{"private":true,"type":"module","scripts":{"test":"node --test model.test.mjs"}}

```

