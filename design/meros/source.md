# Meros — editable source snapshot

Source fingerprint: `c9c27359b42cc4726cd4224da960acba4217eb592104748fa540189dffb6cbbd`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/index.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Muzey afishasi, keskin masshtab, katta fotografiya va ochiq ekspozitsiya. Asar tafsiloti va shaxsiy kolleksiya."><meta name="theme-color" content="#e8dedd"><title>Meros — Madaniyat / raqamli muzey</title><link rel="icon" href="mark.svg"><link rel="preload" href="fonts/display.ttf" as="font" type="font/ttf" crossorigin><script>document.documentElement.classList.add('font-loading')</script><link rel="stylesheet" href="style.css?v=7872da1052"><script type="module" src="app.js?v=fb012b5dfc"></script></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><header class="museum-nav wrap"><a href="#main">MEROS / RAQAMLI EKSPOZITSIYA</a><nav aria-label="Asosiy navigatsiya"><a href="#exhibits">Ko‘rgazma ↓</a><button id="saved-toggle" aria-pressed="false">Kolleksiyam (<span id="saved-count">0</span>)</button></nav></header><main id="main"><section class="museum-poster wrap"><div class="museum-kicker"><span>FOTOGRAFIK KUZATUVLAR</span><span>SAMARQAND / 01—03</span></div><h1>SHAHAR<br><span>XOTIRASI</span></h1><aside class="poster-index" aria-label="Ko‘rgazma indeksi"><p>KO‘RGAZMA INDEKSI</p><a href="#work-registan">01 / Maydon va mutanosiblik <span>↙</span></a><a href="#work-shohi">02 / Rangning xotirasi <span>↙</span></a><a href="#work-amir">03 / Gumbaz ostidagi hikoya <span>↙</span></a></aside><div class="poster-bottom"><p>Me’morchilikni ko‘rishning<br>boshqa bir usuli.</p><a class="btn" href="#exhibits">Ekspozitsiyaga kirish ↙</a><span class="poster-seal" aria-hidden="true">M<br>↘</span></div></section><section class="museum-feature"><figure><img src="images/shohi-zinda.jpg" width="1600" height="1029" alt="Shohi Zinda koshinkorligi, me’moriy hovli" fetchpriority="high"><figcaption><span>02 / SHOHI ZINDA</span><span>Bgag · CC0 / Foto ekspozitsiya</span></figcaption></figure></section><section class="exhibitions wrap" id="exhibits"><div class="exhibit-heading"><h2>Uch qarash.<br>Bitta shahar.</h2><div><div class="filter-bar" role="group" aria-label="Bo‘lim tanlash"><button data-filter="all" aria-pressed="true">Barchasi</button><button data-filter="architecture" aria-pressed="false">Me’morchilik</button><button data-filter="detail" aria-pressed="false">Detal</button></div><p id="exhibit-count"></p></div></div><div id="exhibit-list"></div><p class="empty" id="empty" hidden>Bu bo‘limda kolleksiyangizga asar qo‘shilmagan.</p><div class="museum-export"><p>O‘zingizning ko‘rgazmangizni tuzing.<br>Tanlangan lavhalar va manbalarni fayl qilib oling.</p><button class="btn" id="export" disabled>Kolleksiyani yuklash ↓</button></div><p id="status" class="live" role="status"></p></section></main><dialog id="reader" aria-labelledby="reader-title"><div class="dialog-top"><h2 id="reader-title"></h2><button class="close" data-close aria-label="Yopish">×</button></div><div class="reader" id="reader-body"></div><button class="btn" id="reader-save" aria-pressed="false">Saqlash</button></dialog><footer class="demo-footer wrap"><p>Mustaqil fotografik ekspozitsiya. Rasmiy muzey yoki chipta xizmati emas.</p><nav aria-label="Qo‘shimcha havolalar"><a href="../">Dizaynlar ↗</a><a href="../meros/">AI konteksti ↗</a><a href="CREDITS.md">Manbalar ↗</a></nav></footer></body></html>
```

## site/style.css

```css
@font-face{font-family:Display;src:url('fonts/display.ttf') format('truetype');font-weight:400;font-display:swap}
@font-face{font-family:News;src:url('fonts/news.ttf') format('truetype');font-weight:100 900;font-display:swap}
@font-face{font-family:Sans;src:url('fonts/sans.ttf') format('truetype');font-weight:100 900;font-display:swap}
*{box-sizing:border-box}body{margin:0;-webkit-font-smoothing:antialiased}a{color:inherit}button,input,select{font:inherit;color:inherit}button,a{touch-action:manipulation}button{cursor:pointer}button:disabled{opacity:.45;cursor:not-allowed}button:focus-visible,a:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--focus,#cb5228);outline-offset:4px}[hidden]{display:none!important}img,svg{max-width:100%;display:block}h1,h2,h3,p,figure{margin:0}a{text-decoration:none}.skip{position:fixed;left:12px;top:-100px;z-index:99;background:#fff;color:#111;padding:12px}.skip:focus{top:12px}.wrap{width:min(1400px,calc(100% - 80px));margin:auto}.eyebrow{font-size:11px;letter-spacing:.1em;text-transform:uppercase}.muted{color:var(--muted)}.btn{min-height:46px;padding:11px 20px;border:1px solid currentColor;background:transparent;display:inline-flex;gap:24px;align-items:center;justify-content:space-between;line-height:1.4}.btn:hover{background:var(--hover);color:var(--hover-ink,inherit)}.btn:active{transform:translateY(2px)}.btn[aria-pressed=true]{background:var(--active);color:var(--active-ink);border-color:var(--active)}.live{min-height:26px;margin-block:16px;font-size:13px}.demo-footer{display:flex;justify-content:space-between;gap:25px;flex-wrap:wrap;padding-block:30px;border-top:1px solid var(--line);font:12px/1.6 Arial,sans-serif}.demo-footer p{max-width:530px}.demo-footer nav{display:flex;gap:24px;flex-wrap:wrap}.demo-footer a{min-height:40px;display:inline-flex;align-items:center;text-decoration:underline;text-underline-offset:4px}dialog{width:min(780px,calc(100% - 32px));max-height:calc(100dvh - 32px);overflow:auto;padding:32px;border:1px solid var(--line);color:inherit;background:var(--modal,#fff)}dialog::backdrop{background:#0009}dialog[open]{animation:enter .24s ease-out}.dialog-top{display:flex;align-items:start;justify-content:space-between;gap:20px;margin-bottom:24px}.dialog-top h2{font-size:32px;line-height:1.1}.close{width:44px;height:44px;flex:0 0 44px;border:1px solid currentColor;background:transparent;font-size:26px}.reader p{margin-bottom:20px;line-height:1.7}.reader img{width:100%;max-height:330px;object-fit:cover;margin-bottom:24px}.filter-bar{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.filter-bar button{border:1px solid var(--line);min-height:44px;padding:10px 16px;background:transparent}.filter-bar button[aria-pressed=true]{background:var(--active);color:var(--active-ink);border-color:var(--active)}.empty{padding:35px 0;font-size:18px}.font-loading h1{visibility:hidden;animation:font-show 0s 2.5s forwards}@keyframes font-show{to{visibility:visible}}@keyframes enter{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@media(max-width:800px){.wrap{width:calc(100% - 40px)}}@media(max-width:440px){.wrap{width:calc(100% - 32px)}dialog{padding:22px}.dialog-top h2{font-size:28px}.btn{gap:14px;padding-inline:16px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.font-loading h1{visibility:visible}}
:root{--line:#baa5ac;--muted:#67515b;--active:#592443;--active-ink:#fff8f5;--hover:#592443;--hover-ink:#fff8f5;--modal:#f4eae7;color-scheme:light;scroll-behavior:smooth}body{background:#e8dedd;color:#421d34;font:18px/1.5 News,Georgia,serif}.museum-nav{display:flex;justify-content:space-between;gap:25px;align-items:center;font:11px/1.5 Sans,Arial,sans-serif;padding:24px 0;border-bottom:1px solid var(--line)}.museum-nav nav{display:flex;gap:24px;align-items:center}.museum-nav button{background:none;border:0;border-bottom:1px solid currentColor;min-height:40px;font-size:12px}.museum-nav button[aria-pressed=true]{background:#592443;color:#fff;padding-inline:10px}.museum-kicker{display:flex;justify-content:space-between;gap:20px;font:10px Sans,Arial,sans-serif;letter-spacing:.09em;margin:28px 0}.museum-poster h1{font:400 clamp(80px,13vw,190px)/.89 Display,Impact,sans-serif;letter-spacing:-.035em;word-spacing:-.07em}.museum-poster h1 span{color:#e8dedd;-webkit-text-stroke:1.2px #592443}.poster-bottom{display:flex;justify-content:space-between;gap:25px;align-items:end;margin:25px 0 38px}.poster-bottom p{font:24px/1.2 News,Georgia,serif}.poster-bottom .btn{font:12px Sans,Arial,sans-serif}.poster-seal{font:50px/.7 Display,sans-serif;background:#592443;color:#e8dedd;width:90px;height:90px;display:grid;place-items:center;transform:rotate(7deg);padding-top:12px}.museum-feature{background:#592443;padding:0 0 20px}.museum-feature figure{max-width:1600px;margin:auto}.museum-feature img{width:100%;height:480px;object-fit:cover;object-position:center 55%;filter:saturate(.7)}.museum-feature figcaption{display:flex;justify-content:space-between;gap:20px;font:10px Sans,Arial,sans-serif;color:#e8dedd;padding:17px 40px 0}.exhibitions{padding-block:65px}.exhibit-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:35px}.exhibit-heading h2{font:400 68px/.95 Display,Impact,sans-serif;text-transform:uppercase;letter-spacing:-.015em}.filter-bar button{font:12px Sans,Arial,sans-serif}.exhibit-heading p{font:10px Sans,sans-serif;margin-top:12px;color:var(--muted)}.exhibit{display:grid;grid-template-columns:90px 1.5fr 1fr;gap:40px;border-top:1px solid var(--line);padding-block:28px;align-items:start}.exhibit-number{font:400 64px/1 Display,sans-serif;color:#8e6077}.exhibit-image{border:0;padding:0;background:none;overflow:hidden}.exhibit-image img{width:100%;height:320px;object-fit:cover;filter:saturate(.65);transition:filter .4s,transform .6s}.exhibit-image:hover img{filter:saturate(1);transform:scale(1.025)}.exhibit-copy{padding-top:6px}.exhibit-copy .eyebrow{font:10px Sans,Arial,sans-serif}.exhibit-copy h3{font:500 36px/1.05 News,Georgia,serif;letter-spacing:-.035em;margin:20px 0}.exhibit-copy p{font:18px/1.45 News,Georgia,serif;color:var(--muted)}.exhibit-copy .btn{font:12px Sans,Arial,sans-serif;margin-top:22px}.museum-export{display:flex;align-items:center;justify-content:space-between;gap:30px;border-top:1px solid var(--line);padding-top:35px;margin-top:30px}.museum-export p{font-size:24px;line-height:1.2}.museum-export .btn{font:12px Sans,Arial,sans-serif}.reader{font:22px/1.6 News,serif}.reader a{font:13px Sans,sans-serif;text-decoration:underline}.dialog-top h2{font:500 40px News,serif}#reader-save{font:13px Sans,sans-serif}@media(max-width:900px){.exhibit{grid-template-columns:50px 1.2fr 1fr;gap:22px}.exhibit-number{font-size:50px}.exhibit-image img{height:300px}.exhibit-copy h3{font-size:30px}.poster-seal{width:70px;height:70px;font-size:40px}.museum-feature img{height:390px}}@media(max-width:600px){.museum-nav{align-items:start;gap:18px;font-size:10px}.museum-nav>a{max-width:130px}.museum-nav nav{gap:12px;align-items:end;flex-direction:column;font-size:10px}.museum-nav button{font-size:10px;min-height:32px}.museum-kicker{font-size:10px;gap:10px}.museum-poster h1{font-size:20vw;letter-spacing:-.03em}.poster-bottom{flex-wrap:wrap;gap:20px}.poster-bottom p{font-size:22px;max-width:210px}.poster-seal{display:none}.poster-bottom .btn{width:100%}.museum-feature img{height:300px}.museum-feature figcaption{font-size:10px;padding-inline:16px}.exhibit-heading{flex-direction:column;align-items:start}.exhibit-heading h2{font-size:56px}.exhibit{grid-template-columns:40px minmax(0,1fr);gap:15px}.exhibit-image img{height:260px}.exhibit-copy{grid-column:2}.exhibit-copy h3{font-size:34px;margin-top:12px}.exhibit-number{font-size:42px}.exhibitions{padding-block:40px}.museum-export{flex-direction:column;align-items:start}.museum-export p{font-size:22px}}
.museum-poster{position:relative}.poster-index{position:absolute;right:0;top:140px;width:260px;font:11px Sans,Arial,sans-serif}.poster-index>p{font-size:10px;margin-bottom:17px;letter-spacing:.08em}.poster-index a{display:flex;justify-content:space-between;border-top:1px solid var(--line);padding:14px 0;min-height:48px;gap:15px}.poster-index a:hover{text-decoration:underline}.poster-seal{display:none}.museum-feature img{object-position:left 63%;height:430px}.museum-kicker{font-size:11px}.museum-feature figcaption{font-size:11px}@media(max-width:1000px){.poster-index{position:static;margin-top:25px;width:100%;display:flex;flex-wrap:wrap;gap:8px 24px}.poster-index>p{width:100%;margin-bottom:0}.poster-index a{flex:1;font-size:10px;min-width:130px}.poster-bottom{margin-top:28px}}@media(max-width:600px){.museum-kicker{font-size:10px}.museum-feature figcaption{font-size:10px}.museum-feature img{height:300px}}

```

## site/app.js

```javascript
import {data,normalize} from './model.js?v=5ef9ac47c9';
const SLUG='meros';
document.fonts?.ready.finally(()=>document.documentElement.classList.remove('font-loading'));
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const storageKey=SLUG+'-state-v1';let memory=[],persistent=true;
function read(){if(!persistent)return memory;try{return normalize(JSON.parse(localStorage.getItem(storageKey)));}catch{return [];}}
function commit(ids){memory=normalize(ids);try{localStorage.setItem(storageKey,JSON.stringify(memory));}catch{persistent=false;$('#status').textContent='Saqlash cheklangan. Hozirgi tabdagi tanlov saqlanadi; kerak bo‘lsa faylga oling.';}return memory;}
function toggle(id){const ids=read();return commit(ids.includes(id)?ids.filter(x=>x!==id):[...ids,id]);}
function download(name,text,type='text/plain;charset=utf-8'){const url=URL.createObjectURL(new Blob(['\ufeff'+text],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);}
let opener,openedId;function openDialog(button){opener=button;openedId=button.dataset.read;$('#reader').showModal();}$$('[data-close]').forEach(b=>b.addEventListener('click',()=>$('#reader').close()));$('#reader')?.addEventListener('close',()=>{const target=opener?.isConnected?opener:document.querySelector('[data-read="'+openedId+'"]')||$('#saved-toggle');target?.focus();});
window.addEventListener('storage',e=>{if(e.key===storageKey||e.key===null){render();if($('#reader')?.open&&typeof syncSave==='function')syncSave();}});
let category='all',savedOnly=false,selected;function render(){const ids=read(),items=data.filter(p=>(category==='all'||p.category===category)&&(!savedOnly||ids.includes(p.id)));$('#saved-count').textContent=ids.length;$('#saved-toggle').setAttribute('aria-pressed',savedOnly);$('#exhibit-count').textContent=items.length+' lavha / fotografik ekspozitsiya';$('#empty').hidden=!!items.length;$('#export').disabled=!ids.length;$('#exhibit-list').innerHTML=items.map((p,i)=>`<article class="exhibit" id="work-${p.id}"><span class="exhibit-number">0${i+1}</span><button class="exhibit-image" data-read="${p.id}" aria-label="${p.name}: tafsilot"><img src="images/${p.image}" width="1000" height="700" alt="${p.name}"></button><div class="exhibit-copy"><span class="eyebrow">${p.tag}</span><h3>${p.name}</h3><p>${p.text}</p><button class="btn" data-save="${p.id}" aria-pressed="${ids.includes(p.id)}">${ids.includes(p.id)?'✓ Kolleksiyada':'Kolleksiyaga olish +'}</button></div></article>`).join('');}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.filter){category=b.dataset.filter;$$('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',x===b));render();}if(b.dataset.save){const id=b.dataset.save;toggle(id);render();(document.querySelector('[data-save="'+id+'"]')||$('#saved-toggle')).focus();$('#status').textContent='Shaxsiy kolleksiya yangilandi.';}if(b.dataset.read){selected=b.dataset.read;const p=data.find(p=>p.id===selected);$('#reader-title').textContent=p.name;$('#reader-body').innerHTML=`<img src="images/${p.image}" alt="${p.name}"><p>${p.text}</p><p><a href="${p.source}">Uzbekistan Travel — rasmiy ma’lumot ↗</a></p><p><a href="CREDITS.md">Surat muallifi va litsenziyasi ↗</a></p>`;syncSave();openDialog(b);}});function syncSave(){const on=read().includes(selected);$('#reader-save').setAttribute('aria-pressed',on);$('#reader-save').textContent=on?'✓ Kolleksiyada':'Kolleksiyaga olish +';}$('#reader-save').addEventListener('click',()=>{toggle(selected);syncSave();render();});$('#saved-toggle').addEventListener('click',()=>{savedOnly=!savedOnly;render();});$('#export').addEventListener('click',()=>download('meros-kolleksiya.txt','MEROS — mustaqil fotografik ekspozitsiya\n'+read().map(id=>{const p=data.find(p=>p.id===id);return p.name+'\n'+p.source;}).join('\n\n')));render();
$$('.poster-index a').forEach(a=>a.addEventListener('click',()=>{category='all';savedOnly=false;$$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.filter==='all'));render();}));

```

## site/model.js

```javascript
export const data=[
  {
    "id": "registan",
    "name": "Maydon va mutanosiblik",
    "tag": "01 / ME’MORCHILIK",
    "category": "architecture",
    "image": "registan.jpg",
    "text": "Registonning uch madrasasi katta shahar maydoni atrofida yagona me’moriy ansambl yaratadi. Fotografik ekspozitsiyada umumiy kompozitsiya va fasadlarning o‘zaro munosabati kuzatiladi.",
    "source": "https://uzbekistan.travel/en/o/registan/"
  },
  {
    "id": "shohi",
    "name": "Rangning xotirasi",
    "tag": "02 / KOSHINKORLIK",
    "category": "detail",
    "image": "shohi-zinda.jpg",
    "text": "Shohi Zinda ansamblidagi bezak sirtlari yorug‘lik va masofaga qarab turlicha ko‘rinadi. Ushbu fotografik lavha koshinlarning rangi hamda takroriy naqshiga e’tibor qaratadi.",
    "source": "https://uzbekistan.travel/ru/o/memorialnyj-ansambl-shahi-zinda/"
  },
  {
    "id": "amir",
    "name": "Gumbaz ostidagi hikoya",
    "tag": "03 / ME’MORCHILIK",
    "category": "architecture",
    "image": "guri-amir.jpg",
    "text": "Go‘ri Amir Temuriylar davri me’moriy merosining muhim yodgorliklaridan. Bu raqamli ko‘rgazma muzeyning rasmiy kolleksiyasi emas: ochiq litsenziyali fotosuratlar asosidagi mustaqil kuratorlik namunasi.",
    "source": "https://uzbekistan.travel/en/o/gur-emir/"
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

## site/CREDITS.md

```javascript
# Meros — credits

Original implementation and sample copy created for this library. Not affiliated with reference organizations.

Visual contract: Barlow Condensed afisha + Newsreader sharh. To‘q olxo‘ri, chang-pushti, oq. Ulkan to‘liq enli masthead va chetdan chetga fotosuratli ekspozitsiya. Oddiy sayohat kartalari emas.

Fonts from https://github.com/google/fonts under bundled SIL OFL licenses. No remote runtime assets.

# Samar — suratlar va manbalar

Photos are stored locally for reliable previews and portable source packages. All photos were resized and JPEG-compressed; the layout may crop them. No photographer endorsement is implied.

- `images/registan.jpg`: Euyasik, Registan Samarkand (2010). Source: https://commons.wikimedia.org/wiki/File:Registan_Samarkand.jpg . License: CC BY-SA 3.0, https://creativecommons.org/licenses/by-sa/3.0/ . This resized derivative is available under the same license.
- `images/shohi-zinda.jpg`: Bgag, Shah-i-Zinda 02 (2023). Source: https://commons.wikimedia.org/wiki/File:Shah-i-Zinda_02.jpg . CC0: https://creativecommons.org/publicdomain/zero/1.0/ .
- `images/guri-amir.jpg`: შალვა მინდაძე 11, Gur-e Amir (2025). Source: https://commons.wikimedia.org/wiki/File:Gur-e_Amir.jpg . License: CC BY-SA 4.0, https://creativecommons.org/licenses/by-sa/4.0/ . Resized, orientation normalized; derivative available under the same license.

Destination facts checked on 2026-10-15 against Uzbekistan Travel:

- https://uzbekistan.travel/en/o/registan/
- https://uzbekistan.travel/ru/o/memorialnyj-ansambl-shahi-zinda/
- https://uzbekistan.travel/en/o/gur-emir/
- https://uzbekistan.travel/en/i/samarkand/

Visit durations and 20-minute transfer gaps are planning suggestions, not official schedules. No current opening hours or ticket prices are asserted. This is an independent demo, not an official tourism service.

Instrument Sans / Instrument Serif are locally bundled under SIL OFL; license files are in fonts/.

```

## site/package.json

```json
{"private":true,"type":"module","scripts":{"test":"node --test model.test.mjs"}}

```

