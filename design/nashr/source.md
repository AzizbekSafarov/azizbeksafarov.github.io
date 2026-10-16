# Nashr — editable source snapshot

Source fingerprint: `d441f3cf67e7b9aa8c9eb04c7809eece3fd4dbef88ef38a2d605c7303b6896b9`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/index.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Bosma gazeta: Newsreader masthead, PT Serif maqola, Archivo xizmat yozuvi, oq-qora suratlar va zich tahririy ustunlar."><meta name="theme-color" content="#eeebde"><title>Nashr — Tahririyat / raqamli gazeta</title><link rel="icon" href="mark.svg?v=41463dc5a6"><script>document.documentElement.classList.add('font-loading')</script><script type="module" src="app.js?v=1f386ca4e9"></script><link rel="preload" href="fonts/news.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="fonts/ptserif.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="style.css?v=b2c5b46fa3"><link rel="stylesheet" href="layout.css?v=9552f49a66"><meta name="identity" content="sector-v4"></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><header class="paper-head wrap"><div class="paper-meta"><a href="../">Ochiq dizaynlar ↗</a><span>MUSTAQIL TAHRIRIY NAMUNA / № 01</span><button class="text-button" id="saved-toggle" aria-pressed="false">Saqlanganlar (<span id="saved-count">0</span>)</button></div><a href="#main" class="masthead"><h1>Nashr</h1><span>fikr uchun joy.</span></a><div class="paper-nav"><div class="filter-bar" role="group" aria-label="Bo‘lim tanlash"><button data-filter="all" aria-pressed="true">Barcha yozuvlar</button><button data-filter="madaniyat" aria-pressed="false">Madaniyat</button><button data-filter="talim" aria-pressed="false">Ta’lim</button><button data-filter="texnologiya" aria-pressed="false">Texnologiya</button></div><span class="edition">ORIGINAL MATNLAR / NAMUNA NASHRI</span></div></header><main id="main" class="wrap"><div class="paper-intro"><p>Ko‘rish. Anglash. Savol berish.</p><span>Shahar, bilim va kundalik hayot haqida.</span></div><section class="newspaper" id="articles" aria-label="Maqolalar"></section><p class="empty" id="empty" hidden>Bu bo‘limda saqlangan maqola yo‘q.</p><p class="live" id="status" role="status"></p><section class="editor-note"><span class="eyebrow">MUHARRIR QAYDI</span><p>Ko‘proq shovqin emas.<br>Yaxshiroq savollar kerak.</p><div>Bu mustaqil tahririyat dizayni. Barcha maqolalar namuna uchun yozilgan; ularni tekshirilgan yangilik sifatida tarqatmang.</div></section></main><dialog id="reader" aria-labelledby="reader-title"><div class="dialog-top"><h2 id="reader-title"></h2><button class="close" data-close aria-label="Yopish">×</button></div><div class="reader" id="reader-body"></div><button class="btn" id="reader-save" aria-pressed="false">Saqlash</button></dialog><footer class="demo-footer wrap"><p>Original namuna maqolalari bilan mustaqil tahririyat konsepti. Haqiqiy yangilik xizmati emas.</p><nav aria-label="Qo‘shimcha havolalar"><a href="../">Dizaynlar ↗</a><a href="../nashr/">AI konteksti ↗</a><a href="CREDITS.md">Manbalar ↗</a></nav></footer></body></html>
```

## site/style.css

```css
@font-face{font-family:'Paper Display';src:url('fonts/news.ttf') format('truetype');font-weight:100 900;font-display:swap}
@font-face{font-family:'Paper Text';src:url('fonts/ptserif.ttf') format('truetype');font-weight:400;font-display:swap}
@font-face{font-family:'Paper UI';src:url('fonts/archivo.ttf') format('truetype');font-weight:100 900;font-display:swap}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:24px}body{margin:0;overflow-x:clip;-webkit-font-smoothing:antialiased}h1,h2,h3,p,figure{margin:0}a{color:inherit;text-decoration:none}button,input,select{font:inherit;color:inherit}button,a{touch-action:manipulation}button{cursor:pointer}button:disabled{opacity:.45;cursor:not-allowed}button:active:not(:disabled){translate:0 1px}button,a,input,summary{scroll-margin:24px}a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--focus,#f26536);outline-offset:4px}[hidden]{display:none!important}img,svg{display:block;max-width:100%}main,section,article,aside{min-width:0}.skip{position:fixed;left:16px;top:-100px;padding:12px 18px;background:#fff;color:#111;z-index:100}.skip:focus{top:12px}.wrap{width:min(1360px,calc(100% - 80px));margin-inline:auto}.live{min-height:24px;font-size:13px;line-height:1.6}.empty{padding:32px 0;font-size:18px}.eyebrow{font-size:11px;letter-spacing:.08em}.demo-footer,.footer{display:flex;flex-wrap:wrap;justify-content:space-between;gap:24px;padding-block:30px;border-top:1px solid var(--line)}.demo-footer p,.footer p{max-width:570px;font-size:12px;line-height:1.7}.demo-footer nav,.footer nav{display:flex;flex-wrap:wrap;gap:20px;font-size:12px}.demo-footer a,.footer nav a{display:inline-flex;align-items:center;min-height:44px;text-decoration:underline;text-underline-offset:4px}dialog{padding:0;width:min(820px,calc(100% - 32px));max-height:calc(100dvh - 32px);overflow:auto;overscroll-behavior:contain;background:var(--modal,#fff);color:var(--ink,#111);border:1px solid var(--line);box-shadow:0 20px 80px #0003}dialog::backdrop{background:#060a1588}dialog[open]{animation:reveal .2s ease-out}.dialog-top,.dialog-head{display:flex;justify-content:space-between;align-items:start;gap:20px;padding:24px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--modal,#fff);z-index:2}.dialog-top h2,.dialog-head h2{font-size:32px;line-height:1.2}.close{width:44px;height:44px;flex:0 0 44px;font:26px/1 Arial;border:1px solid var(--line);background:transparent}.reader,.dialog-content{padding:24px}.reader p,.dialog-content>p{margin-block:16px;line-height:1.75}.reader img{width:100%;max-height:350px;object-fit:cover;margin-bottom:24px}.reader a{text-decoration:underline;text-underline-offset:4px}.reader~.btn{margin:0 24px 24px}.detail-image{width:100%;height:300px;object-fit:cover}body:has(dialog[open]){overflow:hidden}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;clip-path:inset(50%);overflow:hidden;white-space:nowrap}.font-loading h1{visibility:hidden}.font-loading .identity-display{visibility:hidden}@keyframes reveal{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@media(max-width:800px){.wrap{width:calc(100% - 40px)}}@media(max-width:440px){.wrap{width:calc(100% - 32px)}.dialog-top,.dialog-head,.reader,.dialog-content{padding:20px}.dialog-top h2,.dialog-head h2{font-size:28px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}

.dialog-top h2,.dialog-head h2{min-width:0;overflow-wrap:anywhere}

```

## site/layout.css

```css
:root{--ink:#20201c;--line:#a3a094;--modal:#f4f1e6;--focus:#a3271e;color-scheme:light}body{background:#eeebde;color:#20201c;font:17px/1.6 'Paper Text',serif}.paper-head{padding-top:15px}.paper-meta{display:flex;flex-wrap:wrap;justify-content:space-between;gap:20px;align-items:center;padding-bottom:13px;border-bottom:1px solid #444438;font:10px/1.5 'Paper UI',sans-serif}.paper-meta>span{letter-spacing:.1em}.text-button{border:0;background:transparent;text-decoration:underline;text-underline-offset:4px;min-height:38px;font:11px 'Paper UI',sans-serif}.text-button[aria-pressed=true]{color:#a3271e;font-weight:700}.masthead{display:flex;align-items:end;justify-content:center;gap:28px;padding:14px 0 22px;border-bottom:4px double #36362d}.masthead h1{font:500 clamp(100px,11vw,155px)/.8 'Paper Display',serif;letter-spacing:-.065em}.masthead>span{font:italic 20px/1 'Paper Display',serif;color:#a3271e;padding-bottom:7px}.paper-nav{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:15px;padding:10px 0;border-bottom:1px solid #444438}.filter-bar{display:flex;flex-wrap:wrap;gap:25px}.filter-bar button{border:0;border-bottom:2px solid transparent;padding:6px 0;background:none;font:12px 'Paper UI',sans-serif;min-height:38px}.filter-bar button[aria-pressed=true]{color:#a3271e;border-bottom-color:#a3271e}.edition{font:9px 'Paper UI',sans-serif;letter-spacing:.07em}.paper-intro{display:flex;flex-wrap:wrap;justify-content:space-between;gap:20px;padding:15px 0;border-bottom:1px solid #444438}.paper-intro>p{font:12px 'Paper UI',sans-serif}.paper-intro>span{font:italic 14px 'Paper Text',serif;color:#77715f}.newspaper{display:grid;grid-template-columns:1.6fr 1fr .85fr;gap:0;padding:26px 0 35px;align-items:start}.story{min-width:0;padding:0 25px;border-left:1px solid #aaa695}.story:first-child{padding-left:0;border:0;display:flex;flex-direction:column}.story:last-child{padding-right:0}.story .eyebrow{font:10px 'Paper UI',sans-serif;color:#9e3024;letter-spacing:.07em}.story-read{display:block;border:0;padding:0;text-align:left;background:none;margin:15px 0 20px}.story-read:hover h2{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:5px}.story h2{font:500 38px/1.06 'Paper Display',serif;letter-spacing:-.025em}.story:first-child h2{font-size:50px}.story>p{font:16px/1.65 'Paper Text',serif;color:#5c584b;margin-top:15px}.story-image{width:100%;height:210px;object-fit:cover;filter:grayscale(1);margin-bottom:16px}.story:first-child .story-image{height:300px}.story:first-child .eyebrow{order:-3}.story:first-child .story-read{order:-2}.story:first-child .story-image{order:-1}.story-image[src*=craft]{object-position:center 68%}.story .story-meta{font:10px 'Paper UI',sans-serif;color:#726c5a;display:flex;flex-wrap:wrap;gap:12px;margin:18px 0}.btn{display:inline-flex;align-items:center;gap:18px;padding:9px 0;min-height:40px;border:0;border-bottom:1px solid #4b493f;background:none;color:#423e34;font:11px 'Paper UI',sans-serif}.btn[aria-pressed=true]{color:#a3271e;border-color:#a3271e}.editor-note{display:grid;grid-template-columns:.7fr 1.5fr 1fr;gap:40px;border-top:4px double #444438;padding:25px 0 45px}.editor-note>.eyebrow{font:10px 'Paper UI',sans-serif;color:#9e3024}.editor-note>p{font:italic 35px/1.15 'Paper Display',serif}.editor-note>div{font:12px/1.8 'Paper UI',sans-serif;color:#6c6656}.reader{font:19px/1.8 'Paper Text',serif;max-width:760px}.reader img{filter:grayscale(1)}.reader a{font:12px 'Paper UI',sans-serif}.dialog-top h2{font:500 39px/1.1 'Paper Display',serif}.dialog-top{border-bottom:4px double #444438}.close{background:#eeebde}.demo-footer{font-family:'Paper UI',sans-serif}.demo-footer p,.demo-footer nav{font-size:10px}
@media(max-width:1000px){.newspaper{grid-template-columns:1.3fr 1fr}.story{padding-right:0}.story:last-child{grid-column:1/-1;display:grid;grid-template-columns:.7fr 1fr;gap:12px 35px;border-left:0;border-top:1px solid #aaa695;padding:25px 0 0;margin-top:25px}.story:last-child .story-image{grid-column:1;grid-row:1/6;margin:0}.story:last-child>*:not(img){grid-column:2}.story:first-child h2{font-size:43px}.story h2{font-size:35px}.edition{display:none}.editor-note{grid-template-columns:1fr 1fr;gap:20px 35px}.editor-note>.eyebrow{grid-column:1/-1}}
@media(max-width:600px){.paper-meta{gap:10px;font-size:9px}.paper-meta>span{display:none}.masthead{justify-content:space-between;gap:15px;padding-block:20px}.masthead h1{font-size:100px}.masthead>span{font-size:15px;max-width:65px;line-height:1.1}.filter-bar{gap:18px}.filter-bar button{font-size:10px;min-height:38px}.paper-intro{gap:10px}.paper-intro>p{font-size:11px}.paper-intro>span{font-size:13px}.newspaper{display:block;padding-top:25px}.story,.story:last-child{display:block;border:0;border-top:1px solid #aaa695;padding:25px 0 0;margin-top:25px}.story:first-child{border:0;padding-top:0;margin-top:0}.story:first-child h2{font-size:42px}.story h2{font-size:38px}.story:first-child .story-image,.story-image{height:250px}.story:last-child .story-image{margin-bottom:20px}.story>p{font-size:17px}.editor-note{display:block;padding-bottom:35px}.editor-note>p{margin:20px 0;font-size:34px}.editor-note>div{font-size:12px}.reader{font-size:18px}.demo-footer{gap:12px}.dialog-top h2{font-size:32px}}

.story-actions{display:flex;flex-wrap:wrap;gap:10px 20px;align-items:center;justify-content:space-between;margin-top:20px;border-top:1px solid #c0baa7;padding-top:10px;font:9px/1.6 "Paper UI",sans-serif;color:#756c58}.story-actions button{display:inline-flex;align-items:center;min-height:38px;border:0;border-bottom:1px solid #83745e;background:transparent;font:11px "Paper UI",sans-serif;padding:5px 0;color:#594d3b}.story-actions button[aria-pressed=true]{color:#a3271e;border-color:#a3271e}

.story h2{margin:15px 0 20px}.story h2 .story-read{font:inherit;margin:0}.story-read:hover{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:5px}@media(max-width:360px){.masthead{gap:10px}.masthead h1{font-size:85px}.masthead>span{font-size:13px;max-width:48px}.paper-meta{font-size:8px}}

.story:first-child>h2{order:-2}

```

## site/app.js

```javascript
import {data,normalize} from './model.js?v=3d46a94337';
const SLUG='nashr';
document.fonts?.ready.finally(()=>document.documentElement.classList.remove('font-loading'));
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const storageKey=SLUG+'-state-v1';let memory=[],persistent=true;
function read(){if(!persistent)return memory;try{return normalize(JSON.parse(localStorage.getItem(storageKey)));}catch{return [];}}
function commit(ids){memory=normalize(ids);try{localStorage.setItem(storageKey,JSON.stringify(memory));}catch{persistent=false;$('#status').textContent='Saqlash cheklangan. Hozirgi tabdagi tanlov saqlanadi; kerak bo‘lsa faylga oling.';}return memory;}
function toggle(id){const ids=read();return commit(ids.includes(id)?ids.filter(x=>x!==id):[...ids,id]);}
function download(name,text,type='text/plain;charset=utf-8'){const url=URL.createObjectURL(new Blob(['\ufeff'+text],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);}
let opener,openedId;function openDialog(button){opener=button;openedId=button.dataset.read;$('#reader').showModal();}$$('[data-close]').forEach(b=>b.addEventListener('click',()=>$('#reader').close()));$('#reader')?.addEventListener('close',()=>{const target=opener?.isConnected?opener:document.querySelector('[data-read="'+openedId+'"]')||$('#saved-toggle');target?.focus();});
window.addEventListener('storage',e=>{if(e.key===storageKey||e.key===null){render();if($('#reader')?.open&&typeof syncSave==='function')syncSave();}});
let category='all',savedOnly=false,selected;
function render(){const ids=read(),items=data.filter(p=>(category==='all'||category===p.category)&&(!savedOnly||ids.includes(p.id)));$('#saved-count').textContent=ids.length;$('#saved-toggle').setAttribute('aria-pressed',savedOnly);$('#empty').hidden=!!items.length;$('#articles').innerHTML=items.map((p,i)=>`<article class="story">${p.image?`<img class="story-image" src="images/${p.image}" width="800" height="600" alt="${p.alt}">`:''}<span class="eyebrow">${p.tag}</span><h2><button class="story-read" data-read="${p.id}">${p.name}</button></h2><p>${p.intro}</p><div class="story-actions"><span>TAHRIRIY MASHQ / ${i+1}</span><button data-save="${p.id}" aria-pressed="${ids.includes(p.id)}">${ids.includes(p.id)?'✓ Saqlangan':'Saqlash +'}</button></div></article>`).join('');}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.filter){category=b.dataset.filter;$$('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',x===b));render();}if(b.dataset.save){const id=b.dataset.save;toggle(id);render();(document.querySelector('[data-save="'+id+'"]')||$('#saved-toggle')).focus();$('#status').textContent='Saqlangan maqolalar yangilandi.';}if(b.dataset.read){selected=b.dataset.read;const p=data.find(p=>p.id===selected);$('#reader-title').textContent=p.name;$('#reader-body').innerHTML=(p.image?`<img src="images/${p.image}" alt="${p.alt}">`:'')+'<p>'+p.intro+'</p>'+p.text.map(t=>'<p>'+t+'</p>').join('');syncSave();openDialog(b);}});function syncSave(){const on=read().includes(selected);$('#reader-save').setAttribute('aria-pressed',on);$('#reader-save').textContent=on?'✓ Saqlangan':'Maqolani saqlash +';}$('#reader-save').addEventListener('click',()=>{toggle(selected);syncSave();render();});$('#saved-toggle').addEventListener('click',()=>{savedOnly=!savedOnly;render();});render();

```

## site/model.js

```javascript
export const data=[
  {
    "id": "city",
    "name": "O‘qish uchun kundan bir parcha",
    "category": "madaniyat",
    "tag": "MADANIYAT",
    "image": "reading.jpg",
    "intro": "Telefonni bir chetga qo‘yib, bir matn bilan qolish. Diqqat uchun kichik, lekin ongli tanlov.",
    "text": [
      "Har kuni ko‘plab sarlavhalarni ko‘ramiz. Bitta matnni boshidan oxirigacha o‘qish esa boshqa tajriba: fikrning qanday qurilganini kuzatish imkonidir.",
      "Qisqa mashq: bir maqolani tanlang. O‘qib bo‘lgach, uning asosiy fikrini bir jumlada yozing va muallifga beradigan bitta savolingizni belgilang.",
      "Bu original namuna matni. Surat Joseph Sintum tomonidan olingan; undagi odamning shaxsiy fikri yoki odatlari haqida da’vo qilinmaydi."
    ],
    "alt": "Deraza yonida gazeta o‘qiyotgan kishi"
  },
  {
    "id": "craft",
    "name": "Hunar — qo‘l bilan o‘ylash",
    "category": "madaniyat",
    "tag": "HUNAR",
    "image": "craft.jpg",
    "intro": "Material, bosim va sabr. Buyum shakllanishini kuzatish mehnatning ko‘rinmaydigan qismini ochadi.",
    "text": [
      "Tayyor buyum ortida ko‘plab kichik qarorlar bor: qayerini yupqatish, qayerini tekislash, qachon kutish kerak. Material bilan ishlash shu qarorlarni ko‘rinadigan qiladi.",
      "Vizual kuzatish mashqi: bir buyumni tanlang. Uning shakli, sirt teksturasi va vazifasi orasidagi bog‘liqlikni yozing. Bu original tahririy namuna; muayyan ustaning texnikasi haqida da’vo emas."
    ],
    "alt": "Loy ustida ishlayotgan hunarmandning qo‘llari"
  },
  {
    "id": "learn",
    "name": "Bir savol, yaxshiroq o‘rganish",
    "category": "talim",
    "tag": "TA’LIM",
    "intro": "Tayyor javobdan oldin yaxshi savol yozib ko‘ring. Bilim amalda tekshirilganda mustahkamlanadi.",
    "text": [
      "Bir mavzuni o‘rganishdan oldin uchta savol yozing. Nima ma’lum? Nima tushunarsiz? Natijani qanday tekshirish mumkin?",
      "O‘rganganingizni boshqa kishiga oddiy misol bilan tushuntiring. Tushuntirish qiyin bo‘lgan qism keyingi mashq uchun yo‘nalish beradi."
    ]
  },
  {
    "id": "tools",
    "name": "Vosita tanlashdan oldin vazifani aniqlang",
    "category": "texnologiya",
    "tag": "TEXNOLOGIYA",
    "intro": "Yangi texnologiya har bir muammoning javobi emas. Avval foydalanuvchi bajaradigan amalni yozing.",
    "text": [
      "Sayt uchun birinchi savol texnologiya nomi bo‘lmasligi kerak. Foydalanuvchi nimaga erishishi, qanday ma’lumot kerakligi va qaysi natija tekshirilishi aniqlansin.",
      "Eng kichik ishlaydigan oqimni tuzing. Keyin ma’lumotni saqlash, xato holati va foydalanish qulayligini shu oqimning bir qismi sifatida tekshiring."
    ]
  }
];
export function normalize(value){return Array.isArray(value)?[...new Set(value.filter(id=>data.some(p=>p.id===id)))]:[];}

```

## site/model.test.mjs

```javascript
import {data,normalize} from './model.js';
import test from 'node:test';import assert from 'node:assert/strict';
test('storage accepts only known unique IDs',()=>{assert.deepEqual(normalize([data[0].id,'<script>',data[0].id,null]),[data[0].id]);assert.deepEqual(normalize({}),[]);});
test('curated content IDs and sources are complete',()=>{assert.equal(new Set(data.map(p=>p.id)).size,data.length);for(const p of data){assert.ok(p.name.length>3);assert.ok(p.text.length>=2);}});

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
# Nashr — credits

Original implementation and sample copy created for this library. Not affiliated with reference organizations.

Visual contract: Bosma tahririyat: Newsreader masthead va sarlavha; PT Serif o‘qish; Archivo ixcham navigatsiya. Sarg‘aygan gazeta qog‘ozi, qora siyoh, kichik qizil tahririy belgi, double-rule, oq-qora fotografiya va zich ustunlar. Chetdan chetga marketing hero yoki ilova dashboardi emas. Original maqolalar namuna.

Fonts from https://github.com/google/fonts under bundled SIL OFL licenses. No remote runtime assets.

Joseph Sintum — reading.jpg: https://unsplash.com/photos/a-man-sitting-at-a-table-reading-a-newspaper-ou-MszyjNew
Sebastian Monroy — craft.jpg: https://unsplash.com/photos/artisans-hands-molding-clay-with-pottery-tools-7fKqygI1yBk
Both free under https://unsplash.com/license . Downloaded as resized JPEGs; CSS crops are illustrative, not endorsements.

## Sector identity fonts

newsreader, pt-serif, archivo. Acquired from the official google/fonts repository under the individual bundled fonts/*-OFL.txt licenses. Layout is our independent implementation, not work by or endorsed by the referenced studios.

```

## site/package.json

```json
{"private": true, "type": "module", "scripts": {"test": "node --test *.test.mjs"}}

```

