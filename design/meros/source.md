# Meros — editable source snapshot

Source fingerprint: `397bd3a4c19b8b81e528960db6c8163718c43395111e856d588531b7138e87f5`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/index.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Ko‘rgazma plakati: og‘ir Alfa Slab One, dadil Archivo navigatsiyasi, yirik raqamli indeks va ultramarin/limon bloklari."><meta name="theme-color" content="#1d2ed8"><title>Meros — Madaniyat / raqamli muzey</title><link rel="icon" href="mark.svg?v=c11c9da4cb"><script>document.documentElement.classList.add('font-loading')</script><script type="module" src="app.js?v=4504c4bd83"></script><link rel="preload" href="fonts/alfaslabone.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="fonts/archivo.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="style.css?v=6581d3edaf"><link rel="stylesheet" href="layout.css?v=d8469d9ee9"><meta name="identity" content="sector-v4"></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><header class="museum-nav wrap"><a href="#main">MEROS / RAQAMLI EKSPOZITSIYA</a><nav aria-label="Asosiy navigatsiya"><a href="#exhibits">Ko‘rgazma ↓</a><button id="saved-toggle" aria-pressed="false">Kolleksiyam (<span id="saved-count">0</span>)</button></nav></header><main id="main"><section class="museum-poster wrap"><div class="museum-kicker"><span>FOTOGRAFIK KUZATUVLAR</span><span>SAMARQAND / 01—03</span></div><h1>Shahar<br><span>xotirasi</span></h1><aside class="poster-index" aria-label="Ko‘rgazma indeksi"><p>KO‘RGAZMA INDEKSI</p><a href="#work-registan"><span class="index-number">01</span><span class="index-title">Maydon va mutanosiblik</span><span class="index-arrow" aria-hidden="true">↙</span></a><a href="#work-shohi"><span class="index-number">02</span><span class="index-title">Rangning xotirasi</span><span class="index-arrow" aria-hidden="true">↙</span></a><a href="#work-amir"><span class="index-number">03</span><span class="index-title">Gumbaz ostidagi hikoya</span><span class="index-arrow" aria-hidden="true">↙</span></a></aside><div class="poster-bottom"><p>Me’morchilikni ko‘rishning<br>boshqa bir usuli.</p><a class="btn" href="#exhibits">Ekspozitsiyaga kirish ↙</a><span class="poster-seal" aria-hidden="true">M<br>↘</span></div></section><section class="museum-feature"><figure><img src="images/shohi-zinda.jpg" width="1600" height="1029" alt="Shohi Zinda koshinkorligi, me’moriy hovli" fetchpriority="high"><figcaption><span>02 / SHOHI ZINDA</span><span>Bgag · CC0 / Foto ekspozitsiya</span></figcaption></figure></section><section class="exhibitions wrap" id="exhibits"><div class="exhibit-heading"><h2>Uch qarash.<br>Bitta shahar.</h2><div><div class="filter-bar" role="group" aria-label="Bo‘lim tanlash"><button data-filter="all" aria-pressed="true">Barchasi</button><button data-filter="architecture" aria-pressed="false">Me’morchilik</button><button data-filter="detail" aria-pressed="false">Detal</button></div><p id="exhibit-count"></p></div></div><div id="exhibit-list"></div><p class="empty" id="empty" hidden>Bu bo‘limda kolleksiyangizga asar qo‘shilmagan.</p><div class="museum-export"><p>O‘zingizning ko‘rgazmangizni tuzing.<br>Tanlangan lavhalar va manbalarni fayl qilib oling.</p><button class="btn" id="export" disabled>Kolleksiyani yuklash ↓</button></div><p id="status" class="live" role="status"></p></section></main><dialog id="reader" aria-labelledby="reader-title"><div class="dialog-top"><h2 id="reader-title"></h2><button class="close" data-close aria-label="Yopish">×</button></div><div class="reader" id="reader-body"></div><button class="btn" id="reader-save" aria-pressed="false">Saqlash</button></dialog><footer class="demo-footer wrap"><p>Mustaqil fotografik ekspozitsiya. Rasmiy muzey yoki chipta xizmati emas.</p><nav aria-label="Qo‘shimcha havolalar"><a href="../">Dizaynlar ↗</a><a href="../meros/">AI konteksti ↗</a><a href="CREDITS.md">Manbalar ↗</a></nav></footer></body></html>
```

## site/style.css

```css
@font-face{font-family:'Gallery Display';src:url('fonts/alfaslabone.ttf') format('truetype');font-weight:400;font-display:swap}
@font-face{font-family:'Gallery UI';src:url('fonts/archivo.ttf') format('truetype');font-weight:100 900;font-display:swap}
@font-face{font-family:'Gallery Text';src:url('fonts/literata.ttf') format('truetype');font-weight:200 900;font-display:swap}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:24px}body{margin:0;overflow-x:clip;-webkit-font-smoothing:antialiased}h1,h2,h3,p,figure{margin:0}a{color:inherit;text-decoration:none}button,input,select{font:inherit;color:inherit}button,a{touch-action:manipulation}button{cursor:pointer}button:disabled{opacity:.45;cursor:not-allowed}button:active:not(:disabled){translate:0 1px}button,a,input,summary{scroll-margin:24px}a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--focus,#f26536);outline-offset:4px}[hidden]{display:none!important}img,svg{display:block;max-width:100%}main,section,article,aside{min-width:0}.skip{position:fixed;left:16px;top:-100px;padding:12px 18px;background:#fff;color:#111;z-index:100}.skip:focus{top:12px}.wrap{width:min(1360px,calc(100% - 80px));margin-inline:auto}.live{min-height:24px;font-size:13px;line-height:1.6}.empty{padding:32px 0;font-size:18px}.eyebrow{font-size:11px;letter-spacing:.08em}.demo-footer,.footer{display:flex;flex-wrap:wrap;justify-content:space-between;gap:24px;padding-block:30px;border-top:1px solid var(--line)}.demo-footer p,.footer p{max-width:570px;font-size:12px;line-height:1.7}.demo-footer nav,.footer nav{display:flex;flex-wrap:wrap;gap:20px;font-size:12px}.demo-footer a,.footer nav a{display:inline-flex;align-items:center;min-height:44px;text-decoration:underline;text-underline-offset:4px}dialog{padding:0;width:min(820px,calc(100% - 32px));max-height:calc(100dvh - 32px);overflow:auto;overscroll-behavior:contain;background:var(--modal,#fff);color:var(--ink,#111);border:1px solid var(--line);box-shadow:0 20px 80px #0003}dialog::backdrop{background:#060a1588}dialog[open]{animation:reveal .2s ease-out}.dialog-top,.dialog-head{display:flex;justify-content:space-between;align-items:start;gap:20px;padding:24px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--modal,#fff);z-index:2}.dialog-top h2,.dialog-head h2{font-size:32px;line-height:1.2}.close{width:44px;height:44px;flex:0 0 44px;font:26px/1 Arial;border:1px solid var(--line);background:transparent}.reader,.dialog-content{padding:24px}.reader p,.dialog-content>p{margin-block:16px;line-height:1.75}.reader img{width:100%;max-height:350px;object-fit:cover;margin-bottom:24px}.reader a{text-decoration:underline;text-underline-offset:4px}.reader~.btn{margin:0 24px 24px}.detail-image{width:100%;height:300px;object-fit:cover}body:has(dialog[open]){overflow:hidden}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;clip-path:inset(50%);overflow:hidden;white-space:nowrap}.font-loading h1{visibility:hidden}.font-loading .identity-display{visibility:hidden}@keyframes reveal{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@media(max-width:800px){.wrap{width:calc(100% - 40px)}}@media(max-width:440px){.wrap{width:calc(100% - 32px)}.dialog-top,.dialog-head,.reader,.dialog-content{padding:20px}.dialog-top h2,.dialog-head h2{font-size:28px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}

.dialog-top h2,.dialog-head h2{min-width:0;overflow-wrap:anywhere}

```

## site/layout.css

```css
:root{--ink:#e5f344;--line:#6573e9;--modal:#f2f1df;--focus:#fff;color-scheme:dark}
body{background:#1d2ed8;color:#e5f344;font:500 18px/1.65 'Gallery UI',sans-serif}
.museum-nav{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:20px;padding-block:22px;border-bottom:3px solid #e5f344;font:750 14px/1.4 'Gallery UI',sans-serif}
.museum-nav>a{letter-spacing:.04em}
.museum-nav nav{display:flex;flex-wrap:wrap;gap:18px;align-items:center}
.museum-nav nav>a{min-height:44px;display:flex;align-items:center}
.museum-nav button{border:2px solid #e5f344;background:#e5f344;color:#1d2ed8;padding:12px 16px;min-height:48px;font:750 14px/1.4 'Gallery UI',sans-serif}
.museum-nav button[aria-pressed=true]{background:#e5f344;color:#1d2ed8;border-color:#e5f344}
.museum-poster{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(230px,.65fr);gap:30px 65px;padding-block:25px 35px}
.museum-kicker{display:flex;flex-wrap:wrap;justify-content:space-between;gap:20px;grid-column:1/-1;font:650 12px/1.5 'Gallery UI',sans-serif;letter-spacing:.04em;color:#c5ceff}
.museum-poster h1{font:400 clamp(55px,6.7vw,102px)/1.08 'Gallery Display',serif;letter-spacing:-.035em;text-transform:none;margin:16px 0 0}
.museum-poster h1 span{color:#e5f344;-webkit-text-stroke:0}
.poster-index{align-self:end;font:750 17px/1.25 'Gallery UI',sans-serif;padding:0;display:grid;gap:10px}
.poster-index>p{font:750 12px/1.5 'Gallery UI',sans-serif;letter-spacing:.08em;margin:0 0 8px;color:#fff}
.poster-index a{display:grid;grid-template-columns:44px minmax(0,1fr) 28px;align-items:center;gap:12px;min-height:88px;padding:14px;background:#1524b3;border:0;box-shadow:inset 4px 0 #e5f344;color:#fff;transition:background .18s,translate .18s}
.poster-index a:hover{background:#e5f344;color:#1d2ed8;translate:4px 0}
.poster-bottom{grid-column:1/-1;display:flex;justify-content:space-between;align-items:end;gap:30px;margin-top:5px}
.poster-bottom>p{font:italic 23px/1.4 'Gallery Text',serif;max-width:450px;color:#c1caff}
.btn{display:inline-flex;justify-content:space-between;align-items:center;gap:22px;min-height:52px;padding:14px 20px;background:#e5f344;color:#1d2ed8;border:0;font:800 16px/1.35 'Gallery UI',sans-serif;box-shadow:5px 5px 0 #13209c;transition:background .18s,box-shadow .18s}
.btn:hover{background:#fff;color:#1d2ed8;border-color:#fff}
.btn[aria-pressed=true]{background:#fff;color:#1d2ed8;border-color:#fff}
.poster-seal{display:none}
.museum-feature{padding:0 0 25px}
.museum-feature figure{display:grid;grid-template-columns:1fr 2fr;max-width:1500px;width:calc(100% - 80px);margin:auto;gap:25px}
.museum-feature img{grid-column:2;width:100%;height:370px;object-fit:cover;object-position:center 65%;filter:saturate(.95)}
.museum-feature figcaption{grid-column:1;grid-row:1;align-self:end;display:flex;flex-direction:column;gap:15px;font:650 13px/1.5 'Gallery UI',sans-serif;letter-spacing:.02em;color:#c5ceff;padding-bottom:8px;max-width:210px}
.museum-feature figcaption::before{content:'02';font:400 135px/.9 'Gallery Display',serif;color:#e5f344;margin-bottom:25px;letter-spacing:-.07em}
.exhibitions{padding-block:35px 70px}
.exhibit-heading{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:end;gap:35px;border-top:1px solid #6a78ea;padding:28px 0 35px}
.exhibit-heading h2{font:400 clamp(35px,4vw,56px)/1.12 'Gallery Display',serif;letter-spacing:-.035em}
.filter-bar{display:flex;flex-wrap:wrap;gap:7px}
.filter-bar button{background:#1524b3;color:#fff;border:0;padding:12px 16px;min-height:48px;font:750 14px/1.3 'Gallery UI',sans-serif}
.filter-bar button[aria-pressed=true]{background:#e5f344;color:#1d2ed8;border-color:#e5f344}
.exhibit-heading>div>p{font-size:14px;color:#c5ceff;margin-top:12px}
.exhibit{display:grid;grid-template-columns:60px minmax(0,1.5fr) minmax(0,1fr);gap:32px;border-top:1px solid #6a78ea;padding:35px 0 50px;align-items:start}
.exhibit-number{font:400 42px/1 'Gallery Display',serif;letter-spacing:-.05em;color:#8997f2}
.exhibit-image{padding:0;border:0;overflow:hidden;width:100%;background:transparent}
.exhibit-image img{width:100%;height:380px;object-fit:cover;transition:transform .6s,filter .6s;filter:saturate(.85)}
.exhibit-image:hover img{transform:scale(1.025);filter:saturate(1)}
.exhibit-copy>.eyebrow{font:750 13px/1.5 'Gallery UI',sans-serif;color:#c5ceff;letter-spacing:.04em}
.exhibit-copy h3{font:400 34px/1.18 'Gallery Display',serif;letter-spacing:-.035em;margin:20px 0}
.exhibit-copy>p{font:500 18px/1.7 'Gallery Text',serif;color:#dce1ff;max-width:500px}
.exhibit-copy>.btn{font-size:16px;margin-top:25px}
.exhibit:nth-child(even){grid-template-columns:minmax(0,1fr) minmax(0,1.5fr) 60px}
.exhibit:nth-child(even) .exhibit-image{grid-column:2;grid-row:1}
.exhibit:nth-child(even) .exhibit-copy{grid-column:1;grid-row:1;padding-right:15px}
.exhibit:nth-child(even) .exhibit-number{grid-column:3;grid-row:1;text-align:right}
.museum-export{background:#e5f344;color:#1d2ed8;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:30px;padding:30px 35px;margin-top:20px}
.museum-export>p{font:750 21px/1.5 'Gallery UI',sans-serif;max-width:650px}
.museum-export>.btn{background:#1d2ed8;color:#e5f344;border-color:#1d2ed8}
.live{color:#dce1ff;font-size:16px;font-weight:650;margin-top:20px}
.demo-footer{border-color:#6a78ea;color:#aab7fc}
.demo-footer p,.demo-footer nav{font-size:13px;font-weight:550}
dialog{color:#1d2ed8;--ink:#1d2ed8;--line:#b6b7d0;--focus:#1d2ed8;color-scheme:light}
.dialog-top h2{font:400 32px/1.2 'Gallery Display',serif;letter-spacing:-.035em}
.reader{font:18px/1.8 'Gallery Text',serif}
.reader a{font-size:13px}
.close{background:#e5f344;color:#1d2ed8}
.reader~.btn{background:#1d2ed8;color:#e5f344;border-color:#1d2ed8}

@media(max-width:1050px){.museum-poster{gap:25px 35px;grid-template-columns:1.5fr 1fr}
.museum-poster h1{font-size:70px}
.exhibit{grid-template-columns:45px minmax(0,1.2fr) minmax(0,1fr);gap:25px}
.exhibit:nth-child(even){grid-template-columns:minmax(0,1fr) minmax(0,1.2fr) 45px}
.exhibit-copy h3{font-size:29px}
.exhibit-copy>p{font:500 18px/1.7 'Gallery Text',serif;color:#dce1ff;max-width:500px}
.exhibit-image img{height:340px}
.museum-feature figcaption::before{font-size:110px}
}

@media(max-width:700px){.museum-nav{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:20px;padding-block:22px;border-bottom:3px solid #e5f344;font:750 14px/1.4 'Gallery UI',sans-serif}
.museum-nav>a{max-width:150px}
.museum-nav nav{display:flex;flex-wrap:wrap;gap:18px;align-items:center}
.museum-nav button{border:2px solid #e5f344;background:#e5f344;color:#1d2ed8;padding:12px 16px;min-height:48px;font:750 14px/1.4 'Gallery UI',sans-serif}
.museum-nav nav>a{min-height:30px}
.museum-poster{display:block;padding-block:24px 30px}
.museum-kicker{display:flex;flex-wrap:wrap;justify-content:space-between;gap:20px;grid-column:1/-1;font:650 12px/1.5 'Gallery UI',sans-serif;letter-spacing:.04em;color:#c5ceff}
.museum-poster h1{font-size:clamp(48px,12.5vw,82px);line-height:1.12;margin:27px 0}
.poster-index{align-self:end;font:750 17px/1.25 'Gallery UI',sans-serif;padding:0;display:grid;gap:10px}
.poster-index>p{font:750 12px/1.5 'Gallery UI',sans-serif;letter-spacing:.08em;margin:0 0 8px;color:#fff}
.poster-index a{display:grid;grid-template-columns:44px minmax(0,1fr) 28px;align-items:center;gap:12px;min-height:88px;padding:14px;background:#1524b3;border:0;box-shadow:inset 4px 0 #e5f344;color:#fff;transition:background .18s,translate .18s}
.poster-bottom{flex-direction:column;align-items:start;gap:25px;margin-top:25px}
.poster-bottom>p{font-size:20px}
.poster-bottom .btn{width:100%}
.museum-feature figure{width:calc(100% - 32px);display:block}
.museum-feature img{height:300px}
.museum-feature figcaption{grid-column:1;grid-row:1;align-self:end;display:flex;flex-direction:column;gap:15px;font:650 13px/1.5 'Gallery UI',sans-serif;letter-spacing:.02em;color:#c5ceff;padding-bottom:8px;max-width:210px}
.museum-feature figcaption::before{display:none}
.exhibit-heading{gap:25px;padding-top:25px}
.exhibit-heading h2{font-size:40px}
.filter-bar button{background:#1524b3;color:#fff;border:0;padding:12px 16px;min-height:48px;font:750 14px/1.3 'Gallery UI',sans-serif}
.exhibit,.exhibit:nth-child(even){display:grid;grid-template-columns:35px minmax(0,1fr);gap:17px;padding-block:28px 35px}
.exhibit-number,.exhibit:nth-child(even) .exhibit-number{grid-column:1;grid-row:1;font-size:28px;text-align:left}
.exhibit-image,.exhibit:nth-child(even) .exhibit-image{grid-column:2;grid-row:1}
.exhibit-copy,.exhibit:nth-child(even) .exhibit-copy{grid-column:2;grid-row:2;padding:0}
.exhibit-image img{height:265px}
.exhibit-copy h3{font-size:30px;margin-block:14px 20px}
.exhibit-copy>p{font:500 18px/1.7 'Gallery Text',serif;color:#dce1ff;max-width:500px}
.exhibit-copy>.btn{font-size:16px;margin-top:25px}
.museum-export{padding:25px;gap:25px}
.museum-export>p{font:750 21px/1.5 'Gallery UI',sans-serif;max-width:650px}
.museum-export>.btn{width:100%}
.dialog-top h2{font-size:25px}
.reader{font-size:17px}
.demo-footer{gap:12px}
}

.index-number{font:800 30px/1 'Gallery UI',sans-serif;color:#e5f344}
.index-title{min-width:0;overflow-wrap:anywhere}
.index-arrow{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#e5f344;color:#1d2ed8;font-size:20px}
.poster-index a:hover .index-number{color:#1d2ed8}
.poster-index a:hover .index-arrow{background:#1d2ed8;color:#e5f344}
@media(max-width:700px){.poster-index{display:grid;grid-template-columns:1fr;gap:10px}
.poster-index a{flex:none;font-size:18px}
.museum-feature figcaption{max-width:none;flex-direction:row;margin-top:16px}
.museum-nav nav{gap:8px;align-items:end}
.museum-nav nav>a{font-size:14px}
.museum-nav>a{max-width:180px}
.museum-nav button{font-size:13px}
}

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
let category='all',savedOnly=false,selected;function render(){const ids=read(),items=data.filter(p=>(category==='all'||p.category===category)&&(!savedOnly||ids.includes(p.id)));$('#saved-count').textContent=ids.length;$('#saved-toggle').setAttribute('aria-pressed',savedOnly);$('#exhibit-count').textContent=items.length+' lavha / fotografik ekspozitsiya';$('#empty').hidden=!!items.length;$('#export').disabled=!ids.length;$('#exhibit-list').innerHTML=items.map((p,i)=>`<article class="exhibit" id="work-${p.id}"><span class="exhibit-number">${String(data.indexOf(p)+1).padStart(2,'0')}</span><button class="exhibit-image" data-read="${p.id}" aria-label="${p.name}: tafsilot"><img src="images/${p.image}" width="1000" height="700" alt="${p.name}"></button><div class="exhibit-copy"><span class="eyebrow">${p.tag}</span><h3>${p.name}</h3><p>${p.text}</p><button class="btn" data-save="${p.id}" aria-pressed="${ids.includes(p.id)}">${ids.includes(p.id)?'✓ Kolleksiyada':'Kolleksiyaga olish +'}</button></div></article>`).join('');}
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
# Meros — credits

Original implementation and sample copy created for this library. Not affiliated with reference organizations.

Visual contract: Kuratorlik ko‘rgazmasi. Alfa Slab One katta afisha; Archivo 650–800 barcha xizmat, indeks va tugma; Literata faqat uzun asar sharhi. Ultramarin, limon, oq. Indeks — yirik raqam + to‘liq bosiladigan qalin blok; nozik serif satr va mayda chiziqli havola emas. O‘tkir burchakli plakat tili, asimmetrik foto va navbat almashadigan asar/sharh. Sayohat pill kartalari yoki showroom savdo tizimini ko‘chirma.

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


Typography update: local DM Sans and Barlow Condensed from https://github.com/google/fonts . SIL OFL licenses in fonts/.

## Sector identity fonts

alfa-slab-one, archivo, literata. Acquired from the official google/fonts repository under the individual bundled fonts/*-OFL.txt licenses. Layout is our independent implementation, not work by or endorsed by the referenced studios.

```

## site/package.json

```json
{"private": true, "type": "module", "scripts": {"test": "node --test *.test.mjs"}}

```

