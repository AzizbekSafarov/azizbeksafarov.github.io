# Ziyo — editable source snapshot

Source fingerprint: `7224c9f2f43bf7246c2db688d18f8ff52e00dd84e65e3f619139b7cd1bd53299`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/index.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Uch qismli o‘quv studiyasi: kurs dasturi, kodli dars va alohida amaliy tekshiruv. Marketing muqovasi yo‘q."><meta name="theme-color" content="#f2f5f2"><title>Ziyo — Ta’lim / interaktiv dars</title><link rel="icon" href="mark.svg"><link rel="preload" href="fonts/space.ttf" as="font" type="font/ttf" crossorigin><script>document.documentElement.classList.add('font-loading')</script><link rel="stylesheet" href="style.css?v=a4af3a6ef8"><script type="module" src="app.js?v=7dcdb6a8be"></script><meta name="composition" content="task-specific-v3"><link rel="stylesheet" href="layout.css?v=c882b7604d"></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><header class="studio-header"><a class="learn-logo" href="#main">ziyo<span>✳</span></a><p>O‘quv studiyasi <span>/ Veb asoslari</span></p><a href="../ziyo/">AI yo‘riqnomasi ↗</a></header><main id="main" class="studio-main"><aside class="lesson-nav"><p class="eyebrow">KURS DASTURI</p><h2>Veb asoslari</h2><p class="course-note">Bir tushuncha. Bir misol.<br>Bir amaliy tekshiruv.</p><div class="progress-track"><span id="progress-fill"></span></div><p id="progress-label">0 / 3 modul tugallangan</p><div id="lesson-tabs" role="group" aria-label="Modul tanlash"></div><div class="course-end"><span>✳</span><p>Shoshilmang.<br>Tushunib davom eting.</p></div><p class="progress-note">Natija shu brauzerda saqlanadi. Bu qisqa mashq, sertifikat berilmaydi.</p></aside><article class="lesson-content"><div class="lesson-breadcrumb">USTAXONA <span>→</span> BIRINCHI VEBSAHIFA</div><p class="eyebrow" id="lesson-tag"></p><h1 id="lesson-title"></h1><p id="lesson-text"></p><div class="code-heading"><span>KO‘RIB CHIQING</span><span>Namuna kodi</span></div><pre><code id="lesson-code"></code></pre><div class="lesson-tip"><span aria-hidden="true">↳</span><p>Kodni yodlashdan boshlamang. Har bir qator sahifada nima vazifa bajarishini tushuntirib ko‘ring.</p></div><a class="exercise-link" href="#practice">Tushunganingizni tekshiring →</a></article><aside class="practice" id="practice" aria-label="Dars mashqi"><div class="practice-heading"><span class="practice-dot"></span> BILIMNI SINASH</div><p class="practice-intro">Navbat sizga.</p><form id="quiz"><fieldset><legend id="question"></legend><div id="answers"></div></fieldset><button class="btn" type="submit">Javobni tekshirish <span>→</span></button><p id="feedback" role="status"></p></form><button class="next-lesson" id="next" hidden>Keyingi modul →</button><p class="practice-note">To‘g‘ri javobdan keyin modul tugallangan deb belgilanadi.</p></aside><p id="status" class="live" role="status"></p></main><footer class="demo-footer wrap"><p>Original o‘quv mashqlari bilan mustaqil ta’lim namunasi. Progress faqat shu brauzerda.</p><nav aria-label="Qo‘shimcha havolalar"><a href="../">Dizaynlar ↗</a><a href="../ziyo/">AI konteksti ↗</a><a href="CREDITS.md">Manbalar ↗</a></nav></footer></body></html>
```

## site/style.css

```css
@font-face{font-family:Space;src:url('fonts/space.ttf') format('truetype');font-weight:100 900;font-display:swap}
@font-face{font-family:Sans;src:url('fonts/sans.ttf') format('truetype');font-weight:100 900;font-display:swap}
@font-face{font-family:Mono;src:url('fonts/mono.ttf') format('truetype');font-weight:400;font-display:swap}
*{box-sizing:border-box}body{margin:0;-webkit-font-smoothing:antialiased}a{color:inherit}button,input,select{font:inherit;color:inherit}button,a{touch-action:manipulation}button{cursor:pointer}button:disabled{opacity:.45;cursor:not-allowed}button:focus-visible,a:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--focus,#cb5228);outline-offset:4px}[hidden]{display:none!important}img,svg{max-width:100%;display:block}h1,h2,h3,p,figure{margin:0}a{text-decoration:none}.skip{position:fixed;left:12px;top:-100px;z-index:99;background:#fff;color:#111;padding:12px}.skip:focus{top:12px}.wrap{width:min(1400px,calc(100% - 80px));margin:auto}.eyebrow{font-size:11px;letter-spacing:.1em;text-transform:uppercase}.muted{color:var(--muted)}.btn{min-height:46px;padding:11px 20px;border:1px solid currentColor;background:transparent;display:inline-flex;gap:24px;align-items:center;justify-content:space-between;line-height:1.4}.btn:hover{background:var(--hover);color:var(--hover-ink,inherit)}.btn:active{transform:translateY(2px)}.btn[aria-pressed=true]{background:var(--active);color:var(--active-ink);border-color:var(--active)}.live{min-height:26px;margin-block:16px;font-size:13px}.demo-footer{display:flex;justify-content:space-between;gap:25px;flex-wrap:wrap;padding-block:30px;border-top:1px solid var(--line);font:12px/1.6 Arial,sans-serif}.demo-footer p{max-width:530px}.demo-footer nav{display:flex;gap:24px;flex-wrap:wrap}.demo-footer a{min-height:40px;display:inline-flex;align-items:center;text-decoration:underline;text-underline-offset:4px}dialog{width:min(780px,calc(100% - 32px));max-height:calc(100dvh - 32px);overflow:auto;padding:32px;border:1px solid var(--line);color:inherit;background:var(--modal,#fff)}dialog::backdrop{background:#0009}dialog[open]{animation:enter .24s ease-out}.dialog-top{display:flex;align-items:start;justify-content:space-between;gap:20px;margin-bottom:24px}.dialog-top h2{font-size:32px;line-height:1.1}.close{width:44px;height:44px;flex:0 0 44px;border:1px solid currentColor;background:transparent;font-size:26px}.reader p{margin-bottom:20px;line-height:1.7}.reader img{width:100%;max-height:330px;object-fit:cover;margin-bottom:24px}.filter-bar{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.filter-bar button{border:1px solid var(--line);min-height:44px;padding:10px 16px;background:transparent}.filter-bar button[aria-pressed=true]{background:var(--active);color:var(--active-ink);border-color:var(--active)}.empty{padding:35px 0;font-size:18px}.font-loading h1{visibility:hidden;animation:font-show 0s 2.5s forwards}@keyframes font-show{to{visibility:visible}}@keyframes enter{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@media(max-width:800px){.wrap{width:calc(100% - 40px)}}@media(max-width:440px){.wrap{width:calc(100% - 32px)}dialog{padding:22px}.dialog-top h2{font-size:28px}.btn{gap:14px;padding-inline:16px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.font-loading h1{visibility:visible}}
:root{--line:#d4d7e0;--muted:#526075;--active:#263ab3;--active-ink:#fff;--hover:#263ab3;--hover-ink:#fff;--focus:#a63118;color-scheme:light;scroll-behavior:smooth}body{background:#fafbf9;color:#182147;font:16px/1.6 Sans,Arial,sans-serif}.learn-nav{display:flex;justify-content:space-between;align-items:center;gap:30px;padding-block:22px}.learn-logo{font:700 40px/1 Space,sans-serif;letter-spacing:-.08em}.learn-logo span{color:#263ab3;display:inline-block;margin-left:5px;font-size:34px}.learn-nav nav{display:flex;gap:30px;font-size:13px}.learn-nav nav a{padding-block:10px}.course-cover{background:#f4d663;border-block:1px solid #c6ac47}.cover-inner{display:grid;grid-template-columns:1.5fr 1fr;gap:65px;padding-block:65px}.cover-title h1{font:500 clamp(58px,6.2vw,94px)/1.02 Space,sans-serif;letter-spacing:-.065em;margin:25px 0 35px}.course-description{max-width:470px}.course-description p{max-width:430px;color:#3f442f}.course-description .btn{margin-top:25px;background:#263ab3;color:#fff;border-color:#263ab3;border-radius:30px}.learning-diagram{position:relative;min-height:370px;background:#263ab3;color:#fff;border-radius:180px 180px 12px 12px;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:55px 30px 40px}.diagram-top,.diagram-bottom{font-size:10px;letter-spacing:.1em}.diagram-top{margin-bottom:26px}.diagram-bottom{margin-top:26px}.diagram-block{width:92%;padding:16px 22px;border:1px solid #fff6;display:flex;justify-content:space-between;font:26px Space,sans-serif;transition:transform .3s}.diagram-block span{font:15px Sans,sans-serif}.diagram-block.one{transform:rotate(-5deg);background:#c1d6fa;color:#182147}.diagram-block.two{background:#fff;color:#263ab3;z-index:1;transform:rotate(3deg)}.diagram-block.three{background:#f4d663;color:#182147;transform:rotate(-2deg)}.learning-diagram:hover .diagram-block{transform:rotate(0)}.classroom{display:grid;grid-template-columns:290px minmax(0,1fr);gap:75px;padding-block:65px}.lesson-nav h2{font:500 30px Space,sans-serif;margin:10px 0 24px}.progress-track{height:5px;background:#e1e5ef;border-radius:4px;overflow:hidden}.progress-track span{display:block;background:#263ab3;height:100%;width:0;transition:width .4s ease-out}#progress-label{font-size:12px;color:var(--muted);margin-top:10px}#lesson-tabs{margin-top:28px}#lesson-tabs button{width:100%;display:flex;gap:13px;align-items:center;text-align:left;background:transparent;border:0;border-bottom:1px solid var(--line);padding:17px 10px;font-size:13px;min-height:60px}#lesson-tabs button span{border:1px solid var(--line);border-radius:50%;width:32px;height:32px;flex:0 0 32px;display:grid;place-items:center}#lesson-tabs button[aria-pressed=true]{background:#edf0fc;color:#263ab3;font-weight:600}#lesson-tabs button[aria-pressed=true] span{background:#263ab3;color:#fff}.progress-note{font-size:11px;color:var(--muted);margin-top:22px}.lesson-content{max-width:780px;min-width:0}.lesson-content>.eyebrow{color:#263ab3}.lesson-content h2{font:500 43px/1.12 Space,sans-serif;letter-spacing:-.04em;margin:17px 0}.lesson-content>p:not(.eyebrow){font-size:17px;color:var(--muted);max-width:650px}.lesson-content pre{background:#182147;color:#f4d663;padding:25px;margin:28px 0;overflow-x:auto;font:13px/1.9 Mono,monospace;border-radius:7px}fieldset{border:0;margin:0;padding:0}legend{font:500 23px/1.3 Space,sans-serif;margin-bottom:17px}#answers label{display:flex;align-items:center;gap:12px;min-height:50px;margin:9px 0;padding:12px 16px;border:1px solid var(--line);border-radius:5px;cursor:pointer;font-size:14px}#answers label:has(input:checked){border-color:#263ab3;background:#edf0fc}#answers input{accent-color:#263ab3;width:18px;height:18px;flex:0 0 18px}#quiz>.btn{background:#263ab3;color:white;margin-top:15px;border-radius:25px}#feedback{margin-top:20px;font-size:14px;min-height:28px}#feedback[data-result=wrong]{color:#a63118}#feedback[data-result=correct]{color:#126048}.next-lesson{border:0;border-bottom:1px solid currentColor;background:none;margin-top:16px;min-height:44px;color:#263ab3}@media(max-width:950px){.cover-inner{gap:35px;grid-template-columns:1.3fr 1fr}.cover-title h1{font-size:68px}.classroom{gap:40px;grid-template-columns:240px minmax(0,1fr)}}@media(max-width:700px){.learn-nav{gap:15px}.learn-nav nav{gap:12px;font-size:11px}.learn-logo{font-size:32px}.learn-logo span{font-size:25px}.cover-inner{grid-template-columns:1fr;padding-block:35px}.cover-title h1{font-size:60px}.learning-diagram{width:100%;max-width:370px;min-height:330px;margin:auto}.classroom{grid-template-columns:1fr;gap:40px;padding-block:40px}.lesson-content h2{font-size:36px}.lesson-nav{border-bottom:1px solid var(--line);padding-bottom:30px}.lesson-nav h2{font-size:26px}#lesson-tabs{margin-top:18px}.course-description p{font-size:15px}}.cover-title h1{letter-spacing:-.045em}
```

## site/layout.css

```css
/* Ziyo: a working lesson, not a course landing page. */
body{background:#fff;color:#202d37;overflow-x:clip;font:16px/1.65 Sans,Arial,sans-serif}body>*{min-width:0}.wrap{width:calc(100% - 64px)}
.studio-header{min-height:88px;padding:18px 32px;border-bottom:1px solid #dce2e4;display:flex;align-items:center;gap:30px;flex-wrap:wrap}.studio-header .learn-logo{font-size:35px;letter-spacing:-2px}.studio-header .learn-logo span{color:#197261}.studio-header>p{font-size:13px;color:#273c43}.studio-header>p>span{color:#67757b}.studio-header>a:last-child{margin-left:auto;font-size:12px;min-height:44px;display:flex;align-items:center;text-decoration:underline;text-underline-offset:4px}
.studio-main{display:grid;grid-template-columns:230px minmax(0,1fr) 340px;min-height:calc(100vh - 88px)}.studio-main>*{min-width:0}.lesson-nav{padding:38px 24px;background:#f2f5f2;border-right:1px solid #dce2e4}.lesson-nav h2{font:600 24px/1.2 Space,sans-serif;margin:12px 0 16px}.course-note{font-size:13px;color:#566960;margin-bottom:32px}.eyebrow{font-size:10px;letter-spacing:.12em}.progress-track{height:4px;background:#dce5df}.progress-track span{background:#197261}#progress-label{font-size:11px;color:#53635d;margin-top:10px}#lesson-tabs{margin-top:24px}#lesson-tabs button{padding:14px 0;gap:10px;font-size:12px;border-color:#d3ddd5;min-height:64px}#lesson-tabs button span{border-color:#bccbc1;border-radius:0;width:27px;height:27px;flex-basis:27px}#lesson-tabs button[aria-pressed=true]{background:transparent;color:#105c4d}#lesson-tabs button[aria-pressed=true] span{background:#197261}.course-end{display:flex;gap:13px;align-items:center;margin-top:64px}.course-end>span{font-size:38px;color:#197261}.course-end>p{font-size:12px;line-height:1.5}.progress-note{font-size:10px;line-height:1.7;margin-top:25px;color:#58655d}
.lesson-content{padding:35px clamp(24px,3.3vw,58px) 55px;max-width:none;animation:lesson-enter .35s ease-out}.lesson-breadcrumb{font-size:9px;letter-spacing:.09em;color:#536871;border-bottom:1px solid #e2e7e9;padding-bottom:28px;margin-bottom:42px;display:flex;gap:14px;flex-wrap:wrap}.lesson-content>.eyebrow{color:#197261}.lesson-content h1{font:500 clamp(32px,3.3vw,50px)/1.12 Space,sans-serif;letter-spacing:-.045em;margin:17px 0 23px;max-width:650px}.lesson-content>p:not(.eyebrow){font-size:16px;line-height:1.85;color:#51626a;max-width:650px}.code-heading{margin-top:34px;display:flex;justify-content:space-between;gap:16px;font-size:9px;letter-spacing:.06em;color:#61747c;border:1px solid #dce4e7;border-bottom:0;padding:12px 16px;background:#f5f7f7}.lesson-content pre{border:1px solid #dce4e7;border-top:0;margin:0;background:#f5f7f7;color:#175e52;border-radius:0;padding:15px 16px 28px;font:12px/1.9 Mono,monospace;white-space:pre-wrap;overflow-wrap:anywhere;overflow:visible}.lesson-tip{display:flex;align-items:start;gap:15px;margin-top:28px;color:#536970}.lesson-tip>span{font-size:25px;color:#197261}.lesson-tip>p{font-size:12px;max-width:450px}.exercise-link{display:inline-flex;min-height:44px;align-items:center;font-size:12px;color:#105c4d;margin-top:32px;text-decoration:underline;text-underline-offset:5px}
.practice{padding:38px 28px;background:#fbf5e8;border-left:1px solid #e6dfd0;scroll-margin-top:20px}.practice-heading{font-size:10px;letter-spacing:.09em;display:flex;align-items:center;gap:9px}.practice-dot{width:7px;height:7px;background:#aa5b27;border-radius:50%}.practice-intro{font:500 27px Space,sans-serif;letter-spacing:-1px;margin:28px 0 26px}legend{font:500 16px/1.55 Sans,sans-serif;margin-bottom:14px}#answers label{font-size:13px;border:1px solid #d9d0bd;background:#fffaf1;border-radius:0;padding:12px;gap:10px;transition:background .18s,border-color .18s;min-height:52px}#answers label:hover{border-color:#8c7755}#answers label:has(input:checked){border-color:#197261;background:#eef5ec}#answers input{accent-color:#197261;width:16px;height:16px;flex-basis:16px}#quiz>.btn{width:100%;background:#197261;color:white;border-color:#197261;border-radius:0;font-size:12px;margin-top:17px;min-height:46px}#quiz>.btn:hover{background:#105c4d}#feedback{font-size:12px;line-height:1.7;min-height:30px;margin-top:20px}#feedback[data-result=wrong]{color:#9a371b}#feedback[data-result=correct]{color:#105c4d}.next-lesson{font-size:13px;color:#105c4d}.practice-note{font-size:10px;line-height:1.7;color:#726348;border-top:1px solid #e1d7c3;padding-top:18px;margin-top:25px}.studio-main>#status{grid-column:1/-1;margin:0;padding-inline:24px}.demo-footer{font-size:10px;padding-block:18px}.demo-footer nav{gap:18px}.font-loading h1{animation:none}
@keyframes lesson-enter{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}
@media(min-width:1500px){.studio-main{grid-template-columns:250px minmax(0,1fr) 380px}.lesson-content{padding-inline:65px}}
@media(max-width:1100px){.studio-main{grid-template-columns:205px minmax(0,1fr)}.practice{grid-column:2;border-left:0;border-top:1px solid #e6dfd0;padding:30px;}.lesson-nav{grid-row:1/3}.practice-intro{margin:16px 0}#answers{display:grid;grid-template-columns:1fr;gap:5px}#quiz>.btn{width:auto}.course-end{margin-top:40px}}
@media(max-width:650px){.studio-header{padding:12px 20px;gap:12px;min-height:74px}.studio-header>p{display:none}.studio-header>a:last-child{font-size:11px}.studio-main{display:block}.lesson-nav{padding:24px 20px;border-right:0;border-bottom:1px solid #dce2e4}.lesson-nav h2{margin:7px 0 16px;font-size:23px}.course-note,.course-end,.progress-note{display:none}#lesson-tabs{display:flex;gap:6px;margin-top:18px;flex-wrap:wrap}#lesson-tabs button{flex:1 1 95px;display:flex;flex-direction:column;align-items:start;gap:8px;border:1px solid #d3ddd5;padding:10px;font-size:10px;min-height:77px}#lesson-tabs button[aria-pressed=true]{border-color:#197261;background:#e7efe9}#lesson-tabs button span{width:22px;height:22px;flex-basis:22px}.lesson-content{padding:28px 20px 35px}.lesson-breadcrumb{padding-bottom:18px;margin-bottom:26px;font-size:8px}.lesson-content h1{font-size:36px}.lesson-content>p:not(.eyebrow){font-size:15px}.practice{padding:28px 20px}.practice-intro{font-size:26px}.wrap{width:calc(100% - 40px)}.demo-footer{gap:8px}.code-heading{font-size:8px}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}

```

## site/app.js

```javascript
import {data,normalize,grade} from './model.js?v=3419133037';
const SLUG='ziyo';
document.fonts?.ready.finally(()=>document.documentElement.classList.remove('font-loading'));
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const storageKey=SLUG+'-state-v1';let memory=[],persistent=true;
function read(){if(!persistent)return memory;try{return normalize(JSON.parse(localStorage.getItem(storageKey)));}catch{return [];}}
function commit(ids){memory=normalize(ids);try{localStorage.setItem(storageKey,JSON.stringify(memory));}catch{persistent=false;$('#status').textContent='Saqlash cheklangan. Hozirgi tabdagi tanlov saqlanadi; kerak bo‘lsa faylga oling.';}return memory;}
function toggle(id){const ids=read();return commit(ids.includes(id)?ids.filter(x=>x!==id):[...ids,id]);}
function download(name,text,type='text/plain;charset=utf-8'){const url=URL.createObjectURL(new Blob(['\ufeff'+text],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);}
let opener,openedId;function openDialog(button){opener=button;openedId=button.dataset.read;$('#reader').showModal();}$$('[data-close]').forEach(b=>b.addEventListener('click',()=>$('#reader').close()));$('#reader')?.addEventListener('close',()=>{const target=opener?.isConnected?opener:document.querySelector('[data-read="'+openedId+'"]')||$('#saved-toggle');target?.focus();});
window.addEventListener('storage',e=>{if(e.key===storageKey||e.key===null){render();if($('#reader')?.open&&typeof syncSave==='function')syncSave();}});
let selected='structure';function render(){const ids=read();$('#progress-label').textContent=ids.length+' / '+data.length+' modul tugallangan';$('#progress-fill').style.width=(ids.length/data.length*100)+'%';$('#lesson-tabs').innerHTML=data.map((p,i)=>`<button data-lesson="${p.id}" aria-pressed="${p.id===selected}"><span>${ids.includes(p.id)?'✓':i+1}</span>${p.name}</button>`).join('');}
function lesson(){const p=data.find(p=>p.id===selected);$('#lesson-tag').textContent=p.tag+' · '+p.minutes;$('#lesson-title').textContent=p.title;$('#lesson-text').textContent=p.text;$('#lesson-code').textContent=p.example;$('#question').textContent=p.question;$('#answers').innerHTML=p.answers.map((a,i)=>`<label><input type="radio" name="answer" value="${i}" required><span></span></label>`).join('');$$('#answers label span').forEach((s,i)=>s.textContent=p.answers[i]);$('#feedback').textContent='';$('#feedback').removeAttribute('data-result');$('#next').hidden=true;render();}
document.addEventListener('click',e=>{const b=e.target.closest('[data-lesson]');if(b){selected=b.dataset.lesson;lesson();document.querySelector('[data-lesson="'+selected+'"]').focus();}});$('#quiz').addEventListener('submit',e=>{e.preventDefault();const choice=new FormData(e.currentTarget).get('answer');if(choice===null){$('#feedback').textContent='Avval javobni tanlang.';return;}const p=data.find(p=>p.id===selected),correct=grade(selected,Number(choice));$('#feedback').dataset.result=correct?'correct':'wrong';$('#feedback').textContent=(correct?'To‘g‘ri. ':'Yana urinib ko‘ring. ')+p.explanation;if(correct){commit([...read(),selected]);render();$('#next').hidden=data.at(-1).id===selected;}});$('#next').addEventListener('click',()=>{selected=data[data.findIndex(p=>p.id===selected)+1].id;lesson();$('#lesson-title').setAttribute('tabindex','-1');$('#lesson-title').focus();});lesson();

```

## site/model.js

```javascript
export const data=[
  {
    "id": "structure",
    "name": "Mazmun va tuzilma",
    "tag": "01 / HTML",
    "minutes": "8 daqiqa",
    "title": "Har bir elementning vazifasi bor.",
    "text": "HTML sahifa mazmunining tuzilishini bildiradi. Sarlavha, navigatsiya, asosiy mazmun va tugma alohida semantik vazifalarga ega.",
    "example": "<main>\n  <h1>Mening loyiham</h1>\n  <button>Rejaga qo‘shish</button>\n</main>",
    "question": "Amal bajaradigan element uchun qaysi teg mos?",
    "answers": [
      "<div>",
      "<button>",
      "<p>"
    ],
    "correct": 1,
    "explanation": "button klaviatura, fokus va tugma semantikasini tabiiy qo‘llaydi. div bu xatti-harakatlarni o‘z-o‘zidan bermaydi."
  },
  {
    "id": "style",
    "name": "Vizual iyerarxiya",
    "tag": "02 / CSS",
    "minutes": "10 daqiqa",
    "title": "Muhim narsani ko‘z birinchi topsin.",
    "text": "Masshtab, oraliq va kontrast birga ishlaydi. Uchta yozuv roli tanlang: sarlavha, o‘qish matni va yordamchi belgi. Har bir elementni bir xil darajada ta’kidlamang.",
    "example": "h1 { font-size: 3rem; }\np { line-height: 1.6; }\n.note { color: #566; }",
    "question": "Asosiy tugma qanday ajralishi kerak?",
    "answers": [
      "Barcha panellar bilan bir xil",
      "Aniq kontrast va amal yozuvi bilan",
      "Faqat kattaroq soya bilan"
    ],
    "correct": 1,
    "explanation": "Kontrast va tushunarli amal yozuvi foydalanuvchiga nimani bosish mumkinligini ko‘rsatadi."
  },
  {
    "id": "interaction",
    "name": "Amal va natija",
    "tag": "03 / JAVASCRIPT",
    "minutes": "12 daqiqa",
    "title": "Bosishdan keyin nima sodir bo‘ladi?",
    "text": "Interfeys amal natijasini ko‘rsatishi kerak. Tekshirish, xato, muvaffaqiyat va bo‘sh holatlar bir oqimning qismlari. Faqat chiroyli bosiladigan tugma yetarli emas.",
    "example": "button.addEventListener(\"click\", () => {\n  status.textContent = \"Rejaga qo‘shildi\";\n});",
    "question": "Foydalanuvchi noto‘g‘ri javob bersa nima kerak?",
    "answers": [
      "Hech narsa ko‘rsatmaslik",
      "Sahifani yopish",
      "Sabab va qayta urinish imkoniyati"
    ],
    "correct": 2,
    "explanation": "Aniq izoh xatoni tushunishga yordam beradi. Foydalanuvchi qayta urinib natijani tekshira olishi kerak."
  }
];
export function normalize(value){return Array.isArray(value)?[...new Set(value.filter(id=>data.some(p=>p.id===id)))]:[];}
export function grade(id,answer){const p=data.find(p=>p.id===id);return !!p&&Number.isInteger(answer)&&answer===p.correct;}

```

## site/model.test.mjs

```javascript
import {data,normalize,grade} from './model.js';
import test from 'node:test';import assert from 'node:assert/strict';
test('storage accepts only known unique IDs',()=>{assert.deepEqual(normalize([data[0].id,'<script>',data[0].id,null]),[data[0].id]);assert.deepEqual(normalize({}),[]);});
test('each quiz rejects wrong answers and accepts only exact correct answer',()=>{for(const p of data){assert.equal(grade(p.id,p.correct),true);assert.equal(grade(p.id,(p.correct+1)%3),false);assert.equal(grade(p.id,null),false);}assert.equal(grade('unknown',1),false);});

```

## site/CREDITS.md

```javascript
# Ziyo — credits

Original implementation and sample copy created for this library. Not affiliated with reference organizations.

Visual contract: Space Grotesk sarlavha + DM Sans o‘qish. Issiq sariq, kobalt, oq. Kitob muqovasidek qat’iy kompozitsiya, keyin ikki ustunli dars muhiti; dashboardga aylantirma.

Fonts from https://github.com/google/fonts under bundled SIL OFL licenses. No remote runtime assets.

```

## site/package.json

```json
{"private":true,"type":"module","scripts":{"test":"node --test model.test.mjs"}}

```

