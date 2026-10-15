# Nashr — editable source snapshot

Source fingerprint: `469ee9c6b90c9bcd8dfe3b18b11eed3d8425b2745036102ef39d6642865914b0`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/index.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Gazeta mastheadi, Newsreader, ingichka chiziqlar va ustunli tahririyat. Maqola o‘qish, bo‘lim va saqlanganlar."><meta name="theme-color" content="#f5f3eb"><title>Nashr — Tahririyat / raqamli gazeta</title><link rel="icon" href="mark.svg"><link rel="preload" href="fonts/news.ttf" as="font" type="font/ttf" crossorigin><script>document.documentElement.classList.add('font-loading')</script><link rel="stylesheet" href="style.css?v=d0d2656a67"><script type="module" src="app.js?v=ea3351205c"></script></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><header class="paper-head wrap"><div class="paper-meta"><a href="../">Ochiq dizaynlar ↗</a><span>MUSTAQIL TAHRIRIY NAMUNA / № 01</span><button class="text-button" id="saved-toggle" aria-pressed="false">Saqlanganlar (<span id="saved-count">0</span>)</button></div><a href="#main" class="masthead"><h1>Nashr</h1><span>fikr uchun joy.</span></a><div class="paper-nav"><div class="filter-bar" role="group" aria-label="Bo‘lim tanlash"><button data-filter="all" aria-pressed="true">Barcha yozuvlar</button><button data-filter="madaniyat" aria-pressed="false">Madaniyat</button><button data-filter="talim" aria-pressed="false">Ta’lim</button><button data-filter="texnologiya" aria-pressed="false">Texnologiya</button></div><span class="edition">ORIGINAL MATNLAR / NAMUNA NASHRI</span></div></header><main id="main" class="wrap"><div class="paper-intro"><p>Ko‘rish. Anglash. Savol berish.</p><span>Shahar, bilim va kundalik hayot haqida.</span></div><section class="newspaper" id="articles" aria-label="Maqolalar"></section><p class="empty" id="empty" hidden>Bu bo‘limda saqlangan maqola yo‘q.</p><p class="live" id="status" role="status"></p><section class="editor-note"><span class="eyebrow">MUHARRIR QAYDI</span><p>Ko‘proq shovqin emas.<br>Yaxshiroq savollar kerak.</p><div>Bu mustaqil tahririyat dizayni. Barcha maqolalar namuna uchun yozilgan; ularni tekshirilgan yangilik sifatida tarqatmang.</div></section></main><dialog id="reader" aria-labelledby="reader-title"><div class="dialog-top"><h2 id="reader-title"></h2><button class="close" data-close aria-label="Yopish">×</button></div><div class="reader" id="reader-body"></div><button class="btn" id="reader-save" aria-pressed="false">Saqlash</button></dialog><footer class="demo-footer wrap"><p>Original namuna maqolalari bilan mustaqil tahririyat konsepti. Haqiqiy yangilik xizmati emas.</p><nav aria-label="Qo‘shimcha havolalar"><a href="../">Dizaynlar ↗</a><a href="../nashr/">AI konteksti ↗</a><a href="CREDITS.md">Manbalar ↗</a></nav></footer></body></html>
```

## site/style.css

```css
@font-face{font-family:News;src:url('fonts/news.ttf') format('truetype');font-weight:100 900;font-display:swap}
@font-face{font-family:Sans;src:url('fonts/sans.ttf') format('truetype');font-weight:100 900;font-display:swap}
*{box-sizing:border-box}body{margin:0;-webkit-font-smoothing:antialiased}a{color:inherit}button,input,select{font:inherit;color:inherit}button,a{touch-action:manipulation}button{cursor:pointer}button:disabled{opacity:.45;cursor:not-allowed}button:focus-visible,a:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--focus,#cb5228);outline-offset:4px}[hidden]{display:none!important}img,svg{max-width:100%;display:block}h1,h2,h3,p,figure{margin:0}a{text-decoration:none}.skip{position:fixed;left:12px;top:-100px;z-index:99;background:#fff;color:#111;padding:12px}.skip:focus{top:12px}.wrap{width:min(1400px,calc(100% - 80px));margin:auto}.eyebrow{font-size:11px;letter-spacing:.1em;text-transform:uppercase}.muted{color:var(--muted)}.btn{min-height:46px;padding:11px 20px;border:1px solid currentColor;background:transparent;display:inline-flex;gap:24px;align-items:center;justify-content:space-between;line-height:1.4}.btn:hover{background:var(--hover);color:var(--hover-ink,inherit)}.btn:active{transform:translateY(2px)}.btn[aria-pressed=true]{background:var(--active);color:var(--active-ink);border-color:var(--active)}.live{min-height:26px;margin-block:16px;font-size:13px}.demo-footer{display:flex;justify-content:space-between;gap:25px;flex-wrap:wrap;padding-block:30px;border-top:1px solid var(--line);font:12px/1.6 Arial,sans-serif}.demo-footer p{max-width:530px}.demo-footer nav{display:flex;gap:24px;flex-wrap:wrap}.demo-footer a{min-height:40px;display:inline-flex;align-items:center;text-decoration:underline;text-underline-offset:4px}dialog{width:min(780px,calc(100% - 32px));max-height:calc(100dvh - 32px);overflow:auto;padding:32px;border:1px solid var(--line);color:inherit;background:var(--modal,#fff)}dialog::backdrop{background:#0009}dialog[open]{animation:enter .24s ease-out}.dialog-top{display:flex;align-items:start;justify-content:space-between;gap:20px;margin-bottom:24px}.dialog-top h2{font-size:32px;line-height:1.1}.close{width:44px;height:44px;flex:0 0 44px;border:1px solid currentColor;background:transparent;font-size:26px}.reader p{margin-bottom:20px;line-height:1.7}.reader img{width:100%;max-height:330px;object-fit:cover;margin-bottom:24px}.filter-bar{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.filter-bar button{border:1px solid var(--line);min-height:44px;padding:10px 16px;background:transparent}.filter-bar button[aria-pressed=true]{background:var(--active);color:var(--active-ink);border-color:var(--active)}.empty{padding:35px 0;font-size:18px}.font-loading h1{visibility:hidden;animation:font-show 0s 2.5s forwards}@keyframes font-show{to{visibility:visible}}@keyframes enter{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@media(max-width:800px){.wrap{width:calc(100% - 40px)}}@media(max-width:440px){.wrap{width:calc(100% - 32px)}dialog{padding:22px}.dialog-top h2{font-size:28px}.btn{gap:14px;padding-inline:16px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.font-loading h1{visibility:visible}}
:root{--line:#bdbab1;--muted:#625e57;--active:#1c1c1a;--active-ink:#faf8f1;--hover:#ece7da;--modal:#faf8f1;color-scheme:light}body{background:#f5f3eb;color:#20201e;font:16px/1.55 Sans,Arial,sans-serif}.paper-meta{display:flex;justify-content:space-between;gap:20px;align-items:center;border-bottom:1px solid #222;padding:15px 0;font-size:11px}.text-button{background:none;border:0;padding:10px 0;min-height:44px;text-decoration:underline;text-underline-offset:4px}.masthead{display:flex;justify-content:center;align-items:baseline;gap:28px;font:600 clamp(100px,13vw,180px)/1.05 News,Georgia,serif;letter-spacing:-.075em;padding:10px 0}.masthead span{font:italic 21px News,serif;letter-spacing:0;color:#b12b20}.paper-nav{display:flex;align-items:center;justify-content:space-between;gap:25px;border-block:3px double #20201e;padding:9px 0}.paper-nav button{border:0;font-size:13px;padding-inline:14px}.paper-nav button[aria-pressed=true]{background:transparent;color:#b12b20;text-decoration:underline;text-underline-offset:7px}.edition{font-size:10px;letter-spacing:.06em}.paper-intro{display:flex;justify-content:space-between;gap:20px;font-size:12px;padding:20px 0 26px}.paper-intro p{font-weight:600}.paper-intro span{color:var(--muted)}.newspaper{display:grid;grid-template-columns:2fr 1fr 1fr;gap:30px}.story{border-top:1px solid #20201e;padding-top:15px;min-width:0}.story:first-child{grid-row:span 2}.story:nth-child(2){grid-column:2/4;display:grid;grid-template-columns:1fr 1fr;gap:24px}.story:nth-child(2) .story-image{grid-column:2;grid-row:1/5;aspect-ratio:.92}.story-image{width:100%;aspect-ratio:1.55;object-fit:cover;filter:saturate(.55);margin-bottom:16px}.story h2{font:500 34px/1.03 News,Georgia,serif;letter-spacing:-.03em;margin:12px 0}.story:first-child h2{font-size:49px}.story .eyebrow{color:#b12b20;font-size:10px}.story p{font:18px/1.4 News,Georgia,serif;color:var(--muted)}.story-read{display:block;text-align:left;background:none;border:0;padding:0;color:inherit}.story-read:hover h2{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px}.story-actions{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:20px;border-top:1px solid var(--line);padding-top:8px;font-size:11px}.story-actions button{border:0;border-bottom:1px solid currentColor;background:none;min-height:40px;font-size:12px}.story-actions button[aria-pressed=true]{color:#b12b20}.editor-note{border-block:3px double #222;margin:55px 0 40px;padding:30px 0;display:grid;grid-template-columns:1fr 2fr 1.2fr;gap:30px}.editor-note>p{font:500 43px/1.08 News,Georgia,serif;letter-spacing:-.025em}.editor-note>div{font-size:13px;color:var(--muted);align-self:end}.reader{font:22px/1.65 News,Georgia,serif;max-width:620px}.reader p:first-of-type{font-weight:500}.dialog-top h2{font:500 43px/1.06 News,serif}.reader img{filter:saturate(.6)}@media(max-width:900px){.edition{display:none}.newspaper{grid-template-columns:1.4fr 1fr}.story:nth-child(2){grid-column:auto;display:block}.story:nth-child(2) .story-image{aspect-ratio:1.5}.story:first-child h2{font-size:42px}.editor-note{grid-template-columns:1fr 2fr}.editor-note>div{grid-column:2}}@media(max-width:600px){.paper-meta>span{display:none}.masthead{font-size:100px;gap:12px;padding-block:18px}.masthead span{font-size:15px}.paper-nav button{font-size:12px;padding:8px}.paper-nav .filter-bar{gap:0}.paper-intro{flex-direction:column;gap:5px}.newspaper{grid-template-columns:1fr;gap:30px}.story:first-child{grid-row:auto}.story:first-child h2{font-size:42px}.story:nth-child(2) .story-image{aspect-ratio:1.7}.editor-note{grid-template-columns:1fr;gap:20px}.editor-note>div{grid-column:auto}.editor-note>p{font-size:36px}.dialog-top h2{font-size:32px}.reader{font-size:20px}}.masthead{font-size:clamp(90px,10vw,145px);padding-block:8px}.paper-intro{padding-block:15px 22px}.story:first-child{display:flex;flex-direction:column}.story:first-child .eyebrow{order:-3}.story:first-child .story-read{order:-2}.story:first-child .story-image{order:-1;margin-top:18px}.story-image[src*="craft"]{object-position:center 68%}@media(max-width:600px){.masthead{font-size:90px}.story:first-child h2{font-size:37px}}
.masthead h1{font:inherit;margin:0}.story-image{height:auto}.story:nth-child(2){align-items:start;grid-template-rows:auto auto 1fr auto}.story:nth-child(2) .story-image{height:100%;min-height:260px;max-height:370px}.story-read{width:100%}.story:first-child .story-image{aspect-ratio:1.6;object-position:center 60%}@media(max-width:900px){.story:nth-child(2) .story-image{height:auto;min-height:0;max-height:none}}
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
function render(){const ids=read(),items=data.filter(p=>(category==='all'||category===p.category)&&(!savedOnly||ids.includes(p.id)));$('#saved-count').textContent=ids.length;$('#saved-toggle').setAttribute('aria-pressed',savedOnly);$('#empty').hidden=!!items.length;$('#articles').innerHTML=items.map((p,i)=>`<article class="story">${p.image?`<img class="story-image" src="images/${p.image}" width="800" height="600" alt="${p.alt}">`:''}<span class="eyebrow">${p.tag}</span><button class="story-read" data-read="${p.id}"><h2>${p.name}</h2></button><p>${p.intro}</p><div class="story-actions"><span>TAHRIRIY MASHQ / ${i+1}</span><button data-save="${p.id}" aria-pressed="${ids.includes(p.id)}">${ids.includes(p.id)?'✓ Saqlangan':'Saqlash +'}</button></div></article>`).join('');}
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

## site/CREDITS.md

```javascript
# Nashr — credits

Original implementation and sample copy created for this library. Not affiliated with reference organizations.

Visual contract: Newsreader reading serif + DM Sans yordamchi yozuv. Qog‘oz fon, qora siyoh, qizil tahririy belgi. Masthead va zich asimmetrik gazeta ustunlari. Landing-page hero emas.

Fonts from https://github.com/google/fonts under bundled SIL OFL licenses. No remote runtime assets.

Joseph Sintum — reading.jpg: https://unsplash.com/photos/a-man-sitting-at-a-table-reading-a-newspaper-ou-MszyjNew
Sebastian Monroy — craft.jpg: https://unsplash.com/photos/artisans-hands-molding-clay-with-pottery-tools-7fKqygI1yBk
Both free under https://unsplash.com/license . Downloaded as resized JPEGs; CSS crops are illustrative, not endorsements.

```

## site/package.json

```json
{"private":true,"type":"module","scripts":{"test":"node --test model.test.mjs"}}

```

