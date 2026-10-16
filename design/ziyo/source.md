# Ziyo — editable source snapshot

Source fingerprint: `06d1f233f2c5fd05847f4af59b7d05ae4798f8f53356ddc2f204a912412b4418`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/index.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Rangli ta’lim ustaxonasi: yumshoq Bree Serif, bosqichli dars yo‘li, ishlaydigan ko‘rgazmali misol va olcha rangli mashq daftari."><meta name="theme-color" content="#ffedd6"><title>Ziyo — Ta’lim / interaktiv dars</title><link rel="icon" href="mark.svg?v=4dfc3aa135"><script>document.documentElement.classList.add('font-loading')</script><script type="module" src="app.js?v=b44cd003ea"></script><meta name="composition" content="task-specific-v3"><link rel="preload" href="fonts/breeserif.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="fonts/nunitosans.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="style.css?v=7c4549c852"><link rel="stylesheet" href="layout.css?v=c7b0a22c8e"><meta name="identity" content="sector-v4"></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><header class="studio-header"><a class="learn-logo" href="#main">ziyo<span>✳</span></a><p>O‘quv studiyasi <span>/ Veb asoslari</span></p><a href="../ziyo/">AI yo‘riqnomasi ↗</a></header><main id="main" class="studio-main"><aside class="lesson-nav"><p class="eyebrow">KURS DASTURI</p><h2>Veb asoslari</h2><p class="course-note">Bir tushuncha. Bir misol.<br>Bir amaliy tekshiruv.</p><div class="progress-track"><span id="progress-fill"></span></div><p id="progress-label">0 / 3 modul tugallangan</p><div id="lesson-tabs" role="group" aria-label="Modul tanlash"></div><div class="course-end"><span>✳</span><p>Shoshilmang.<br>Tushunib davom eting.</p></div><p class="progress-note">Natija shu brauzerda saqlanadi. Bu qisqa mashq, sertifikat berilmaydi.</p></aside><article class="lesson-content"><div class="lesson-breadcrumb">USTAXONA <span>→</span> BIRINCHI VEBSAHIFA</div><p class="eyebrow" id="lesson-tag"></p><h1 id="lesson-title"></h1><p id="lesson-text"></p><div class="visual-caption">G‘oyani sahifada sinab ko‘ring</div><div class="learning-visual" id="learning-visual"><div class="demo-webpage" id="demo-webpage"><span id="demo-label">HTML · SAHIFA TUZILISHI</span><h3 id="demo-title">Mening birinchi loyiham</h3><button type="button" id="demo-action">Sinab ko‘rish</button><output id="demo-result" aria-live="polite">Tugma amalni boshlab beradi.</output></div></div><div class="code-heading"><span>KO‘RIB CHIQING</span><span>Namuna kodi</span></div><pre><code id="lesson-code"></code></pre><div class="lesson-tip"><span aria-hidden="true">↳</span><p>Kodni yodlashdan boshlamang. Har bir qator sahifada nima vazifa bajarishini tushuntirib ko‘ring.</p></div><a class="exercise-link" href="#practice">Tushunganingizni tekshiring →</a></article><aside class="practice" id="practice" aria-label="Dars mashqi"><div class="practice-heading"><span class="practice-dot"></span> BILIMNI SINASH</div><p class="practice-intro">Navbat sizga.</p><form id="quiz"><fieldset><legend id="question"></legend><div id="answers"></div></fieldset><button class="btn" type="submit">Javobni tekshirish <span>→</span></button><p id="feedback" role="status"></p></form><button class="next-lesson" id="next" hidden>Keyingi modul →</button><p class="practice-note">To‘g‘ri javobdan keyin modul tugallangan deb belgilanadi.</p></aside><p id="status" class="live" role="status"></p></main><footer class="demo-footer wrap"><p>Original o‘quv mashqlari bilan mustaqil ta’lim namunasi. Progress faqat shu brauzerda.</p><nav aria-label="Qo‘shimcha havolalar"><a href="../">Dizaynlar ↗</a><a href="../ziyo/">AI konteksti ↗</a><a href="CREDITS.md">Manbalar ↗</a></nav></footer></body></html>
```

## site/style.css

```css
@font-face{font-family:'Study Display';src:url('fonts/breeserif.ttf') format('truetype');font-weight:400;font-display:swap}
@font-face{font-family:'Study Sans';src:url('fonts/nunitosans.ttf') format('truetype');font-weight:200 900;font-display:swap}
@font-face{font-family:'Study Mono';src:url('fonts/mono.ttf') format('truetype');font-weight:400;font-display:swap}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:24px}body{margin:0;overflow-x:clip;-webkit-font-smoothing:antialiased}h1,h2,h3,p,figure{margin:0}a{color:inherit;text-decoration:none}button,input,select{font:inherit;color:inherit}button,a{touch-action:manipulation}button{cursor:pointer}button:disabled{opacity:.45;cursor:not-allowed}button:active:not(:disabled){translate:0 1px}button,a,input,summary{scroll-margin:24px}a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid var(--focus,#f26536);outline-offset:4px}[hidden]{display:none!important}img,svg{display:block;max-width:100%}main,section,article,aside{min-width:0}.skip{position:fixed;left:16px;top:-100px;padding:12px 18px;background:#fff;color:#111;z-index:100}.skip:focus{top:12px}.wrap{width:min(1360px,calc(100% - 80px));margin-inline:auto}.live{min-height:24px;font-size:13px;line-height:1.6}.empty{padding:32px 0;font-size:18px}.eyebrow{font-size:11px;letter-spacing:.08em}.demo-footer,.footer{display:flex;flex-wrap:wrap;justify-content:space-between;gap:24px;padding-block:30px;border-top:1px solid var(--line)}.demo-footer p,.footer p{max-width:570px;font-size:12px;line-height:1.7}.demo-footer nav,.footer nav{display:flex;flex-wrap:wrap;gap:20px;font-size:12px}.demo-footer a,.footer nav a{display:inline-flex;align-items:center;min-height:44px;text-decoration:underline;text-underline-offset:4px}dialog{padding:0;width:min(820px,calc(100% - 32px));max-height:calc(100dvh - 32px);overflow:auto;overscroll-behavior:contain;background:var(--modal,#fff);color:var(--ink,#111);border:1px solid var(--line);box-shadow:0 20px 80px #0003}dialog::backdrop{background:#060a1588}dialog[open]{animation:reveal .2s ease-out}.dialog-top,.dialog-head{display:flex;justify-content:space-between;align-items:start;gap:20px;padding:24px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--modal,#fff);z-index:2}.dialog-top h2,.dialog-head h2{font-size:32px;line-height:1.2}.close{width:44px;height:44px;flex:0 0 44px;font:26px/1 Arial;border:1px solid var(--line);background:transparent}.reader,.dialog-content{padding:24px}.reader p,.dialog-content>p{margin-block:16px;line-height:1.75}.reader img{width:100%;max-height:350px;object-fit:cover;margin-bottom:24px}.reader a{text-decoration:underline;text-underline-offset:4px}.reader~.btn{margin:0 24px 24px}.detail-image{width:100%;height:300px;object-fit:cover}body:has(dialog[open]){overflow:hidden}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;clip-path:inset(50%);overflow:hidden;white-space:nowrap}.font-loading h1{visibility:hidden}.font-loading .identity-display{visibility:hidden}@keyframes reveal{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@media(max-width:800px){.wrap{width:calc(100% - 40px)}}@media(max-width:440px){.wrap{width:calc(100% - 32px)}.dialog-top,.dialog-head,.reader,.dialog-content{padding:20px}.dialog-top h2,.dialog-head h2{font-size:28px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}

.dialog-top h2,.dialog-head h2{min-width:0;overflow-wrap:anywhere}

```

## site/layout.css

```css
:root{--ink:#402d26;--line:#d8c9bb;--focus:#2451ad;--modal:#fffdf7;color-scheme:light}body{font:16px/1.7 'Study Sans',sans-serif;background:#ffedd6;color:var(--ink)}.studio-header{display:flex;flex-wrap:wrap;align-items:center;gap:28px;padding:20px max(24px,calc((100% - 1320px)/2));background:#fffaf2;border-bottom:1px solid #ddcbb7}.learn-logo{font:400 42px/1 'Study Display',serif;letter-spacing:-1px}.learn-logo span{display:inline-block;color:#bd4731;margin-left:7px;font:32px 'Study Sans'}.studio-header>p{font-size:13px}.studio-header>p span{color:#866e5e}.studio-header>a:last-child{margin-left:auto;font-size:12px;min-height:44px;display:flex;align-items:center;text-decoration:underline;text-underline-offset:5px}.studio-main{max-width:1320px;margin:28px auto 50px;padding:0 24px;display:grid;grid-template-columns:minmax(0,1.35fr) minmax(310px,.8fr);gap:28px 38px}.lesson-nav{grid-column:1/-1;display:grid;grid-template-columns:220px minmax(0,1fr);gap:14px 35px;align-items:center;margin-bottom:10px}.lesson-nav>.eyebrow{font-size:10px;color:#88614c}.lesson-nav h2{font:400 27px/1.1 'Study Display',serif;grid-column:1;grid-row:2;margin-top:-10px}.progress-track{width:100%;height:7px;background:#ead6be;border-radius:20px;overflow:hidden;grid-column:1;grid-row:3}.progress-track span{height:100%;display:block;background:#bd4731;transition:width .4s ease-out;border-radius:20px}#progress-label{font-size:11px;grid-column:1;grid-row:4;margin-top:-8px}#lesson-tabs{grid-column:2;grid-row:1/5;display:flex;gap:10px;flex-wrap:wrap}#lesson-tabs button{flex:1;min-width:140px;background:#fff9ee;border:1px solid #c7ad92;border-radius:14px;padding:16px 14px;display:flex;gap:12px;align-items:center;text-align:left;font-size:13px;line-height:1.4;min-height:72px;transition:background .2s,rotate .2s}#lesson-tabs button span{width:30px;height:30px;flex:0 0 30px;border-radius:50%;display:grid;place-items:center;background:#ead5b9;color:#60452c;font-weight:700}#lesson-tabs button:hover{background:#fff;rotate:-1deg}#lesson-tabs button[aria-pressed=true]{background:#402d26;border-color:#402d26;color:#fffaf2}#lesson-tabs button[aria-pressed=true] span{background:#fbc888;color:#402d26}.course-note,.course-end,.progress-note{display:none}.lesson-content{background:#fffdf8;border-radius:25px 25px 8px 25px;padding:35px;box-shadow:0 5px 0 #d8ba9433;align-self:start}.lesson-breadcrumb{display:flex;gap:12px;flex-wrap:wrap;font-size:10px;color:#806c5e;margin-bottom:30px}.lesson-content>.eyebrow{color:#a83c2a;font-weight:800}.lesson-content h1{font:400 clamp(34px,3.5vw,49px)/1.15 'Study Display',serif;letter-spacing:0;margin:15px 0 22px}.lesson-content>p:not(.eyebrow){font-size:17px;line-height:1.8;color:#6a5547;max-width:660px}.visual-caption{font-size:11px;margin:28px 0 10px;color:#86604d;display:flex;align-items:center;gap:10px}.visual-caption::before{content:'↳';font-size:24px}.learning-visual{background:#ffdfb1;border-radius:18px;padding:22px;min-height:220px;position:relative}.demo-webpage{background:#fffdf8;border:1.5px solid #624b3b;border-radius:9px;box-shadow:5px 5px 0 #bf8a5433;padding:23px;position:relative}.demo-webpage>span{font-size:9px;letter-spacing:.1em;color:#90653e}.demo-webpage h3{font:400 27px/1.15 'Study Display',serif;margin:12px 0 18px}.demo-webpage button{background:#bd4731;color:white;border:0;border-radius:9px;min-height:42px;padding:10px 18px;font-size:12px;font-weight:800;box-shadow:0 3px 0 #7e2d20}.demo-webpage output{display:block;min-height:20px;margin-top:15px;font-size:11px;color:#725b48}.demo-webpage[data-mode=style] h3{font-size:36px;color:#2451ad}.demo-webpage[data-mode=interaction] button{background:#2451ad;box-shadow:0 3px 0 #153275}.code-heading{display:flex;justify-content:space-between;gap:15px;font-size:10px;letter-spacing:.04em;margin-top:25px;padding:11px 15px;background:#f3f0e8;border-radius:8px 8px 0 0;color:#786858}.lesson-content pre{margin:0;padding:8px 15px 20px;background:#f3f0e8;border-radius:0 0 8px 8px;white-space:pre-wrap;overflow-wrap:anywhere;font:12px/1.8 'Study Mono',monospace;color:#62422d}.lesson-tip{display:flex;gap:12px;margin-top:25px;color:#816d5c;font-size:12px}.lesson-tip>span{font-size:24px;color:#bd4731}.exercise-link{display:inline-flex;align-items:center;min-height:44px;font-size:12px;color:#9b3927;text-decoration:underline;text-underline-offset:5px;margin-top:18px}.practice{background:#772c3c;color:#fff6e9;border-radius:24px 5px 24px 24px;padding:30px;align-self:start;position:sticky;top:24px}.practice-heading{display:flex;gap:10px;align-items:center;font-size:11px;font-weight:800}.practice-dot{width:9px;height:9px;border-radius:50%;background:#ffcb7e}.practice-intro{font:400 37px/1.1 'Study Display',serif;margin:30px 0}.practice fieldset{margin:0;border:0;padding:0}.practice legend{font-size:18px;font-weight:700;line-height:1.5;margin-bottom:17px}.practice #answers label{display:flex;gap:13px;align-items:center;padding:15px;margin:10px 0;background:#fff8ed;color:#53372e;border:2px solid transparent;border-radius:12px;cursor:pointer;font-size:14px;min-height:57px}.practice #answers label:hover{background:#fff}.practice #answers label:has(input:checked){border-color:#ffc86f;background:#fff1d7}.practice input{accent-color:#772c3c;width:18px;height:18px;flex:0 0 18px}.practice .btn{display:flex;justify-content:space-between;align-items:center;gap:15px;width:100%;border:0;border-radius:12px;background:#ffca7c;color:#48252a;padding:15px 18px;margin-top:20px;font-size:14px;font-weight:900;min-height:50px;box-shadow:0 4px 0 #4c1927}.practice .btn:hover{background:#ffdb9f}#feedback{min-height:30px;margin-top:23px;font-size:14px;line-height:1.65}#feedback[data-result=wrong]{color:#ffd7c5}#feedback[data-result=correct]{color:#c9f3bd}.next-lesson{background:#fff6e9;color:#642638;border:0;border-radius:12px;padding:13px 18px;min-height:48px;font-weight:800;font-size:13px;margin-top:12px}.practice-note{border-top:1px solid #ffffff33;padding-top:20px;margin-top:24px;font-size:11px;color:#ecc5c2}.studio-main>.live{grid-column:1/-1}.demo-footer{font-size:11px}.demo-footer p{color:#7b6452}.demo-footer nav{font-size:11px}
@media(max-width:1050px){.studio-main{grid-template-columns:minmax(0,1fr) 330px;gap:25px}.lesson-nav{grid-template-columns:180px minmax(0,1fr);gap:12px 20px}#lesson-tabs button{min-width:100px;flex-direction:column;align-items:start;font-size:11px;padding:12px}.lesson-content{padding:27px}.practice{padding:25px}.lesson-content h1{font-size:38px}.lesson-content>p:not(.eyebrow){font-size:16px}}
@media(max-width:760px){.studio-main{display:block;padding:0 18px;margin-top:23px}.lesson-nav{display:grid;grid-template-columns:1fr 1fr;gap:8px 25px;margin-bottom:26px}.lesson-nav h2{grid-row:2;grid-column:1;font-size:25px;margin:0}.lesson-nav>.eyebrow{grid-row:1;grid-column:1}.progress-track{grid-column:2;grid-row:2;width:100%}#progress-label{grid-row:1;grid-column:2;text-align:right;margin:0;font-size:10px}#lesson-tabs{grid-row:3;grid-column:1/-1;margin-top:12px;gap:7px}#lesson-tabs button{min-width:90px;flex:1;padding:12px;font-size:11px;gap:9px;min-height:95px}.lesson-content{padding:27px 22px;border-radius:20px}.lesson-content h1{font-size:37px}.learning-visual{padding:15px;min-height:210px}.demo-webpage{padding:18px}.demo-webpage h3{font-size:26px}.lesson-breadcrumb{font-size:9px;gap:8px;margin-bottom:25px}.practice{margin-top:24px;position:static;border-radius:22px;padding:27px 22px}.practice-intro{margin:22px 0}.studio-header{padding:14px 20px;gap:15px}.studio-header>p{display:none}.studio-header .learn-logo{font-size:36px}.studio-header>a:last-child{font-size:11px}.lesson-content>p:not(.eyebrow){font-size:16px}.code-heading{font-size:9px}.demo-footer{margin-top:30px}}

```

## site/app.js

```javascript
import {showLesson} from './identity.js?v=a0ccb35df4';
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
function lesson(){const p=data.find(p=>p.id===selected);$('#lesson-tag').textContent=p.tag+' · '+p.minutes;$('#lesson-title').textContent=p.title;$('#lesson-text').textContent=p.text;$('#lesson-code').textContent=p.example;showLesson(p);$('#question').textContent=p.question;$('#answers').innerHTML=p.answers.map((a,i)=>`<label><input type="radio" name="answer" value="${i}" required><span></span></label>`).join('');$$('#answers label span').forEach((s,i)=>s.textContent=p.answers[i]);$('#feedback').textContent='';$('#feedback').removeAttribute('data-result');$('#next').hidden=true;render();}
document.addEventListener('click',e=>{const b=e.target.closest('[data-lesson]');if(b){selected=b.dataset.lesson;lesson();document.querySelector('[data-lesson="'+selected+'"]').focus();}});$('#quiz').addEventListener('submit',e=>{e.preventDefault();const choice=new FormData(e.currentTarget).get('answer');if(choice===null){$('#feedback').textContent='Avval javobni tanlang.';return;}const p=data.find(p=>p.id===selected),correct=grade(selected,Number(choice));$('#feedback').dataset.result=correct?'correct':'wrong';$('#feedback').textContent=(correct?'To‘g‘ri. ':'Yana urinib ko‘ring. ')+p.explanation;if(correct){commit([...read(),selected]);render();$('#next').hidden=data.at(-1).id===selected;}});$('#next').addEventListener('click',()=>{selected=data[data.findIndex(p=>p.id===selected)+1].id;lesson();$('#lesson-title').setAttribute('tabindex','-1');$('#lesson-title').focus();});lesson();

```

## site/identity.js

```javascript
const $=s=>document.querySelector(s);
let mode='structure',clicks=0,painted=false;
const states={structure:['HTML · SAHIFA TUZILISHI','Mening birinchi loyiham','Teglar mazmunga vazifa beradi.'],style:['CSS · VIZUAL IYERARXIYA','Muhim fikr ko‘zga tashlanadi.','O‘lcham va rang diqqatni boshqaradi.'],interaction:['JAVASCRIPT · AMAL VA NATIJA','Bosishdan keyin nima bo‘ladi?','Tugmani bosing va natijani kuzating.']};
export function showLesson(p){mode=p.id;clicks=0;const s=states[mode];$('#demo-webpage').dataset.mode=mode;$('#demo-label').textContent=s[0];$('#demo-title').textContent=s[1];$('#demo-result').textContent=s[2];$('#demo-action').textContent=mode==='interaction'?'Hisobni oshirish +':'Sinab ko‘rish';if(painted&&!matchMedia('(prefers-reduced-motion: reduce)').matches)$('#demo-webpage').animate([{opacity:0,transform:'translateY(8px) rotate(-1deg)'},{opacity:1,transform:'none'}],{duration:350,easing:'ease-out'});painted=true;}
$('#demo-action').addEventListener('click',()=>{clicks++;$('#demo-result').textContent=mode==='interaction'?'Natija: '+clicks+' marta bosildi.':mode==='style'?'Tugmaning kontrasti va o‘lchami amalni ajratib turibdi.':'HTML button elementi sichqoncha va klaviaturada ishlaydi.';if(!matchMedia('(prefers-reduced-motion: reduce)').matches)$('#demo-result').animate([{opacity:0,transform:'translateY(4px)'},{opacity:1,transform:'none'}],{duration:220});});

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

Visual contract: Ta’lim ustaxonasi. Bree Serif sarlavha + Nunito Sans matn + IBM Plex Mono kod. Shaftoli qog‘oz, oq doska, olcha mashq maydoni. Dastur yuqorida, dars va interaktiv misol chapda, test o‘ngda. Yumshoq asimmetrik burchaklar; texnik terminal yoki gazeta bilan bir xil qobiq qilma.

Fonts from https://github.com/google/fonts under bundled SIL OFL licenses. No remote runtime assets.

## Sector identity fonts

bree-serif, nunito-sans, ibm-plex-mono. Acquired from the official google/fonts repository under the individual bundled fonts/*-OFL.txt licenses. Layout is our independent implementation, not work by or endorsed by the referenced studios.

```

## site/package.json

```json
{"private":true,"type":"module","scripts":{"test":"node --test model.test.mjs"}}

```

