# Pulseboard — editable source snapshot

Source fingerprint: `87b40c0d4e072778f4080056e6064a85f045dce45355ca2eeac377a5a034b46e`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/05-pulseboard.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>05 · Pulseboard — dizayn namunasi</title><link rel="stylesheet" href="shared.css"><style> :root{--bg:#f5f7fb;--surface:#fff;--ink:#27334b;--muted:#5e6b80;--accent:#4a61d8;--wash:#edf0ff;--line:#e6eaf2;--radius:12px}.dashboard{display:grid;grid-template-columns:220px 1fr;min-height:100dvh}.sidebar{background:white;border-right:1px solid var(--line);padding:30px 22px;display:flex;flex-direction:column;gap:35px}.side-links{display:grid;gap:8px}.side-links a{padding:12px 14px;font-size:13px;color:#5e6b80;border-radius:8px}.side-links a.active{color:var(--accent);background:var(--wash);font-weight:700}.side-links a:hover{background:var(--wash)}.side-label{font-size:10px;color:var(--muted);letter-spacing:1.3px;font-weight:700;margin:0 0 15px}.workspace{padding:25px 36px 30px;min-width:0}.dash-top{padding-bottom:24px;border-bottom:1px solid var(--line);font-size:12px;color:var(--muted)}.profile{display:flex;align-items:center;gap:10px;color:var(--ink)}.profile-avatar{height:33px;width:33px;background:#dce2ff;display:grid;place-items:center;color:#344ab6;border-radius:50%;font-size:11px;font-weight:700}.dash-heading{padding:32px 0 25px}.dash-heading h1{font-size:28px;letter-spacing:-.8px;margin:0 0 8px}.dash-heading p{font-size:13px;color:var(--muted);margin:0}.metric{padding:22px}.metric .label{font-size:12px;color:var(--muted)}.metric b{display:block;font-size:27px;letter-spacing:-.8px;margin:15px 0 8px;font-variant-numeric:tabular-nums}.metric .trend{font-size:11px;color:#267353}.metric .trend span{color:var(--muted);margin-left:6px}.dash-charts{display:grid;grid-template-columns:1.7fr 1fr;gap:20px;margin:24px 0}.chart-card{padding:24px}.chart-card h2,.order-card h2{font-size:16px;margin:0}.periods{display:flex;gap:5px}.periods button{font-size:11px;padding:6px 9px;color:var(--muted);background:transparent;border-radius:5px}.periods button.active{background:var(--wash);color:var(--accent)}.chart-svg{width:100%;height:190px;margin-top:20px}.chart-labels{display:flex;justify-content:space-between;font-size:10px;color:var(--muted)}.bar-row{margin:24px 0 0;font-size:12px}.bar-track{background:#f0f2f8;height:7px;border-radius:5px;margin-top:10px}.bar-track span{display:block;background:#4a61d8;height:100%;border-radius:5px}.order-card{padding:24px}.order-search{border:1px solid var(--line);border-radius:7px;padding:9px 12px;width:220px;font-size:12px;color:var(--ink);background:var(--bg)}.table-wrap{overflow:auto;margin-top:24px}table{width:100%;border-collapse:collapse;text-align:left;white-space:nowrap;font-size:12px}th{color:var(--muted);font-size:10px;font-weight:650;background:#f8f9fc;padding:13px 14px}td{padding:15px 14px;border-bottom:1px solid var(--line)}.status{display:inline-block;padding:4px 8px;border-radius:5px;font-size:10px;background:#eaf6ef;color:#267353}.status.pending{background:#fff3da;color:#795916}.dash-footer{margin:24px 0 0;display:flex;justify-content:space-between;gap:12px;font-size:11px;color:var(--muted)}.workspace .grid4{gap:15px}.demo-pill{border:1px solid var(--line);padding:4px 10px;border-radius:20px;font-size:10px;color:var(--muted)}@media(max-width:1100px){.dashboard{grid-template-columns:180px 1fr}.sidebar{padding:26px 15px}.workspace{padding:22px}.workspace .grid4{grid-template-columns:repeat(2,1fr)}.dash-charts{grid-template-columns:1fr}}@media(max-width:680px){.dashboard{grid-template-columns:1fr}.sidebar{padding:17px 18px;border-bottom:1px solid var(--line);border-right:0;gap:15px}.side-links{display:flex;overflow:auto;gap:5px}.side-links a{padding:8px 12px;white-space:nowrap;font-size:11px}.side-label,.side-extra{display:none}.workspace{padding:18px}.dash-top .demo-pill{display:none}.dash-heading{align-items:start;flex-direction:column;gap:15px}.metric{padding:17px}.metric b{font-size:22px}.chart-card,.order-card{padding:18px}.order-card>.row{align-items:start;flex-direction:column}.order-search{width:100%}.dash-footer{flex-direction:column}.dash-charts .row{flex-wrap:wrap}}.sidebar,.side-links{min-width:0}.dashboard{grid-template-columns:220px minmax(0,1fr)}.chart-card,.order-card{display:block}.chart-card>.row{flex-wrap:wrap;align-items:start}.periods{flex-shrink:0}.periods button{font-size:12px;min-width:48px}.dash-top{flex-wrap:wrap}.profile{flex-shrink:0}.metric .trend{font-size:12px}.chart-labels,.status,th,.side-label,.demo-pill{font-size:12px}.side-links a{min-height:44px;display:flex;align-items:center}.table-wrap:focus-visible{outline-offset:2px}.chart-svg{height:240px;min-height:160px}.dash-footer{font-size:12px}.dash-charts{grid-template-columns:minmax(0,1.7fr) minmax(0,1fr)}.order-search{min-height:44px;font-size:14px}@media(max-width:1200px){.workspace .grid4{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:1100px){.dashboard{grid-template-columns:180px minmax(0,1fr)}.dash-charts{grid-template-columns:minmax(0,1fr)}}@media(max-width:680px){.dashboard{grid-template-columns:minmax(0,1fr)}.side-links{scrollbar-width:thin}}@media(max-width:420px){.workspace .grid4{grid-template-columns:minmax(0,1fr)}.metric b{font-size:28px}}</style></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><div class="dashboard"><aside class="sidebar"><a href="#" class="logo">pulse<span>board</span>.</a><div><p class="side-label">ISH MAYDONI</p><nav class="side-links" aria-label="Panel menyusi"><a class="active" href="#main">◫ &nbsp; Umumiy ko‘rinish</a><a href="#orders">▤ &nbsp; Buyurtmalar</a><a href="#mahsulotlar">◇ &nbsp; Mahsulotlar</a><a href="#tahlil">↗ &nbsp; Tahlil</a></nav></div><div class="side-extra" style="margin-top:auto"><p class="fine">Kichik biznes uchun<br>aniq va qulay boshqaruv.</p><a class="fine" href="index.html">← Shablonlarga qaytish</a></div></aside><main class="workspace" id="main"><div class="row dash-top"><span>Ish maydoni / Umumiy ko‘rinish</span><span class="demo-pill">Namunaviy ma’lumotlar</span><div class="profile"><span class="profile-avatar">AS</span><b>Azizbek S.</b></div></div><div class="row dash-heading"><div><h1>Biznesingiz bir qarashda.</h1><p>Buyurtmalar, savdo va asosiy ko‘rsatkichlarni kuzating.</p></div><button class="btn small" data-export>↓ Buyurtmalarni yuklash</button></div><div class="grid4"><article class="card metric"><span class="label">Umumiy tushum, so‘m</span><b id="revenue">48 920 000</b><span class="trend">↗ 12.8% <span>o‘tgan davrga nisbatan</span></span></article><article class="card metric"><span class="label">Buyurtmalar</span><b id="orders-number">342</b><span class="trend">↗ 8.2% <span>o‘tgan davrga nisbatan</span></span></article><article class="card metric"><span class="label">Faol mijozlar</span><b id="customers-number">1 284</b><span class="trend">↗ 6.4% <span>o‘tgan davrga nisbatan</span></span></article><article class="card metric"><span class="label">O‘rtacha buyurtma, so‘m</span><b id="average-order">143 041</b><span class="trend">↗ 4.3% <span>o‘tgan davrga nisbatan</span></span></article></div><div class="dash-charts" id="tahlil"><section class="card chart-card"><div class="row"><div><h2>Savdo dinamikasi</h2><span class="fine" id="chart-title">Oxirgi 30 kun</span></div><div class="periods" aria-label="Tushum davri"><button data-period="week" aria-pressed="false">7 kun</button><button class="active" data-period="month" aria-pressed="true">30 kun</button></div></div><svg class="chart-svg" viewBox="0 0 380 190" role="img" aria-label="Namunaviy savdo dinamikasi grafigi"><g stroke="#e8edf5" stroke-dasharray="4 4"><path d="M10 30H370M10 75H370M10 120H370M10 165H370"/></g><path d="M10 160L70 130L130 146L190 84L250 104L310 49L370 32V178H10Z" fill="#edf0ff"/><path id="chart-line" d="M0 150 L60 120 L120 136 L180 74 L240 94 L300 39 L360 22" transform="translate(10 10)" fill="none" stroke="#4a61d8" stroke-width="3" stroke-linejoin="round"/><circle cx="370" cy="32" r="5" fill="#4a61d8"/></svg><div class="chart-labels"><span>Davr boshi</span><span>O‘rtasi</span><span>Davr oxiri</span></div></section><section class="card chart-card" id="mahsulotlar"><h2>Ommabop mahsulotlar</h2><p class="fine" style="margin:5px 0 0">Buyurtmalar soni bo‘yicha</p><div class="bar-row"><div class="row"><span>Forma kreslo</span><b>124</b></div><div class="bar-track"><span style="width:85%"></span></div></div><div class="bar-row"><div class="row"><span>Luma chiroq</span><b>86</b></div><div class="bar-track"><span style="width:62%;background:#8193e8"></span></div></div><div class="bar-row"><div class="row"><span>Terra vaza</span><b>72</b></div><div class="bar-track"><span style="width:48%;background:#b0baed"></span></div></div></section></div><section class="card order-card"><div class="row"><div><h2>So‘nggi buyurtmalar</h2><span class="fine" data-order-count role="status">Demo yozuvlar · 4 ta</span></div><input class="order-search" id="order-search" type="search" aria-label="Buyurtmalarni qidirish" placeholder="Mijoz yoki mahsulotni qidirish…"></div><div class="table-wrap" tabindex="0" role="region" aria-label="Buyurtmalar jadvali, yon tomonga aylantirish mumkin"><table id="orders"><thead><tr><th scope="col">BUYURTMA</th><th scope="col">MIJOZ</th><th scope="col">MAHSULOT</th><th scope="col">SUMMA</th><th scope="col">HOLAT</th></tr></thead><tbody><tr><td>#1042</td><td>Aziza Karimova</td><td>Forma kreslo</td><td>1 290 000 so‘m</td><td><span class="status">Yetkazilgan</span></td></tr><tr><td>#1041</td><td>Jasur Rahimov</td><td>Luma chiroq</td><td>420 000 so‘m</td><td><span class="status pending">Jarayonda</span></td></tr><tr><td>#1040</td><td>Madina Aliyeva</td><td>Terra vaza</td><td>180 000 so‘m</td><td><span class="status">Yetkazilgan</span></td></tr><tr><td>#1039</td><td>Sardor Ismoilov</td><td>Linea stol</td><td>690 000 so‘m</td><td><span class="status pending">Jarayonda</span></td></tr></tbody></table></div><p class="fine" role="status" id="no-orders" style="margin:20px 0 0" hidden>Qidiruvga mos buyurtma topilmadi. Boshqa so‘z yozing.</p></section><div class="dash-footer"><span>Pulseboard · Dizayn namunasidir. Barcha raqamlar demo.</span><a href="index.html">← Barcha shablonlar</a></div></main></div><dialog id="request" aria-labelledby="request-title"><div class="row"><h2 id="request-title">Ariza qoldirish</h2><button class="close" data-close aria-label="Yopish">×</button></div><p class="muted">Demo ariza uchun ma’lumotlarni kiriting.</p><form id="request-form"><label for="request-name">Ismingiz</label><input id="request-name" name="name" autocomplete="given-name" required maxlength="80" placeholder="Ismingizni yozing"><label for="request-phone">Telefon raqamingiz</label><input id="request-phone" name="phone" type="tel" autocomplete="tel" required maxlength="24" inputmode="tel" placeholder="+998 90 123 45 67"><label for="request-message">Xabaringiz yoki savolingiz <span class="fine">(ixtiyoriy)</span></label><textarea id="request-message" name="message" rows="3" maxlength="1000" placeholder="Qisqacha yozing…"></textarea><div class="dialog-actions"><button class="btn" type="submit">Ariza tayyorlash →</button><button class="btn secondary" type="button" data-close>Bekor qilish</button></div><p class="result" id="request-result" role="status"></p></form><p class="fine" style="margin:20px 0 0">Dizayn namunasidagi forma. Ma’lumotlar yuborilmaydi.</p></dialog><div class="toast" role="status" hidden></div><script src="shared.js"></script></body></html>
```

## site/shared.css

```css

*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font:16px/1.6 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--ink);background:var(--bg)}button,input,select,textarea{font:inherit}textarea{resize:vertical;min-height:88px}button,a{-webkit-tap-highlight-color:transparent}button{cursor:pointer}a{color:inherit;text-decoration:none}button:disabled{cursor:default}h1,h2,h3,p{margin-top:0}h1,h2,h3{line-height:1.12;text-wrap:balance}p{text-wrap:pretty}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid var(--accent);outline-offset:4px}button{border:0}svg{display:block;max-width:100%}.shell{width:min(1180px,calc(100% - 64px));margin:auto}.nav{display:flex;align-items:center;justify-content:space-between;gap:28px;min-height:96px}.logo{font-size:23px;font-weight:800;letter-spacing:-1px;white-space:nowrap}.logo span{color:var(--accent)}.navlinks{display:flex;gap:28px;align-items:center;font-size:14px}.navlinks a:hover{color:var(--accent)}.btn{display:inline-flex;justify-content:center;align-items:center;gap:14px;padding:13px 23px;background:var(--accent);color:var(--on-accent,#fff);font-size:14px;font-weight:700;border-radius:var(--radius,10px);line-height:1.5}.btn:hover{filter:brightness(.94)}.btn.secondary{background:transparent;color:var(--ink);border:1px solid var(--line)}.btn.small{padding:9px 17px}.eyebrow{font-size:12px;font-weight:750;text-transform:uppercase;letter-spacing:2px;color:var(--accent)}.muted{color:var(--muted)}.section{padding:72px 0}.section-head{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:30px}.section-head h2{font-size:34px;margin:0}.section-head p{margin:0;color:var(--muted);max-width:390px}.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.card{padding:27px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius,14px)}.card h3{font-size:21px;margin:18px 0 12px}.card p{color:var(--muted);font-size:14px}.tag{font-size:11px;font-weight:750;padding:5px 9px;display:inline-block;border-radius:5px;background:var(--wash);color:var(--accent)}.row{display:flex;align-items:center;justify-content:space-between;gap:18px}.fine{font-size:12px;color:var(--muted)}.foot{border-top:1px solid var(--line);padding:28px 0;font-size:13px;color:var(--muted)}.menu-button{display:none;padding:9px 14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:8px}.toast{position:fixed;bottom:25px;left:50%;transform:translateX(-50%);padding:13px 24px;background:var(--ink);color:var(--bg);border-radius:10px;box-shadow:0 8px 32px #0002;z-index:20;max-width:calc(100% - 32px);font-size:14px}.toast[hidden]{display:none}dialog{border:1px solid var(--line);border-radius:18px;background:var(--surface);color:var(--ink);padding:30px;width:min(480px,calc(100% - 32px));max-height:85vh}dialog::backdrop{background:#0b152780}dialog h2{font-size:25px;margin:0 0 8px}dialog label{display:block;margin:20px 0 6px;font-size:13px;font-weight:700}dialog input,dialog select,dialog textarea{width:100%;padding:12px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink)}.close{background:transparent;color:var(--muted);padding:4px 10px;font-size:23px}.dialog-actions{display:flex;gap:12px;margin-top:24px;flex-wrap:wrap}.result{margin:18px 0 0;font-size:14px;color:var(--accent)}.filters{display:flex;gap:9px;flex-wrap:wrap;margin-bottom:28px}.filter{padding:8px 17px;border:1px solid var(--line);border-radius:30px;background:transparent;color:var(--muted);font-size:13px}.filter.active{background:var(--accent);color:var(--on-accent,#fff);border-color:var(--accent)}[hidden]{display:none!important}.sample-note{font-size:11px}.skip{position:absolute;top:-60px;left:16px;padding:12px;background:var(--accent);color:var(--on-accent,#fff);z-index:30}.skip:focus{top:10px}
@media(max-width:800px){.shell{width:calc(100% - 36px)}.nav{min-height:78px;flex-wrap:wrap;gap:12px;padding:16px 0}.menu-button{display:block}.navlinks{display:none;width:100%;padding:15px 0;flex-wrap:wrap;gap:20px}.navlinks.open{display:flex}.grid3,.grid4{grid-template-columns:repeat(2,1fr)}.section{padding:48px 0}.section-head{align-items:start;flex-direction:column}.section-head h2{font-size:29px}.foot .row{align-items:start;flex-direction:column}}
@media(max-width:520px){.grid3,.grid4{grid-template-columns:1fr}.btn{padding:12px 18px}.card{padding:22px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}

/* Shared layout, keyboard and touch refinements. */
html{scroll-padding-top:24px}body{overflow-wrap:break-word}
main,section,article,.row>*{min-width:0}
.grid3,.grid4{grid-template-columns:repeat(3,minmax(0,1fr))}.grid4{grid-template-columns:repeat(4,minmax(0,1fr))}
button,.btn,.filter,.menu-button{min-height:44px;touch-action:manipulation}
button,.btn{transition:background-color .16s ease,box-shadow .16s ease,transform .16s ease}
button:active:not(:disabled),.btn:active{transform:translateY(1px)}button:disabled{opacity:.55;cursor:not-allowed}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,[tabindex]:focus-visible{outline:3px solid var(--ink);outline-offset:4px;box-shadow:0 0 0 2px var(--bg)}
.navlinks a{display:inline-flex;align-items:center;min-height:44px}.btn{max-width:100%;text-align:center}.btn svg{flex-shrink:0}
.close{min-width:44px;min-height:44px;flex-shrink:0;border-radius:50%}.close:hover{background:var(--wash);color:var(--ink)}
dialog{max-height:calc(100dvh - 32px);overflow:auto;overscroll-behavior:contain}dialog .row{align-items:flex-start}dialog h2{overflow-wrap:anywhere}dialog input,dialog textarea{font-size:16px}
body:has(dialog[open]){overflow:hidden}.result{overflow-wrap:anywhere}.tag,.fine,.sample-note{line-height:1.6}
.lesson-link{min-height:44px;display:inline-flex;align-items:center;text-decoration:underline;text-underline-offset:4px;color:#fff;font-size:12px}
.card{display:flex;flex-direction:column}.card .course-link{align-self:flex-start}.card .course-meta{margin-top:auto}
.course-link{min-height:44px;align-items:center}.cart-description{display:grid;gap:4px}.cart-quantity{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.cart-quantity button{min-width:44px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--ink)}.cart-quantity .remove{padding:0 10px;color:#934343}.cart-item{flex-wrap:wrap}.cart-total{flex-wrap:wrap}.cart-total b:last-child{font-variant-numeric:tabular-nums}
@media(max-width:800px){.grid3,.grid4{grid-template-columns:repeat(2,minmax(0,1fr))}.navlinks{padding:12px;border:1px solid var(--line);border-radius:12px;background:var(--surface)}.navlinks.open{display:grid;gap:4px}.navlinks a{padding:8px 10px}.navlinks .btn{justify-self:start;margin-top:6px}}
@media(max-width:520px){.grid3,.grid4{grid-template-columns:minmax(0,1fr)}dialog{padding:22px}.row{gap:12px}.section-head h2{font-size:28px}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}button:active:not(:disabled),.btn:active{transform:none}}

```

## site/shared.js

```javascript
/* Shared interactions. Forms are local demonstrations. */
const toast = document.querySelector('.toast');
let toastTimer;
function notify(message) {
  if (!toast) return;
  toast.textContent = message; toast.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.hidden = true, 4000);
}
const normalizeSearch = value => value.trim().toLocaleLowerCase('uz').replace(/[‘’ʻʼ`]/g, "'").replace(/\s+/g, ' ');
const formatMoney = value => Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const menu = document.querySelector('.menu-button'), navLinks = document.querySelector('.navlinks');
function closeMenu(restoreFocus = false) {
  navLinks?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false');
  if (restoreFocus) menu?.focus();
}
menu?.addEventListener('click', () => menu.setAttribute('aria-expanded', String(navLinks.classList.toggle('open'))));
navLinks?.querySelectorAll('a,button').forEach(control => control.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') closeMenu(true); });
document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });
matchMedia('(min-width:801px)').addEventListener('change', () => closeMenu());

// Native dialogs provide inert backgrounds, Escape and focus containment.
document.querySelectorAll('dialog').forEach(dialog => {
  const heading = dialog.querySelector('h2');
  if (heading) { heading.id ||= dialog.id + '-title'; dialog.setAttribute('aria-labelledby', heading.id); }
  dialog.addEventListener('close', () => {
    if (!dialog.demoOpener) return;
    if (menu && dialog.demoOpener.closest('.navlinks') && getComputedStyle(navLinks).display === 'none') menu.focus();
    else dialog.demoOpener.focus();
  });
});
const modal = document.querySelector('#request');
const requestName = document.querySelector('#request-name'), requestPhone = document.querySelector('#request-phone');
document.querySelectorAll('[data-request]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#request-title').textContent = button.dataset.request;
  document.querySelector('#request-result').textContent = ''; document.querySelector('#request-form').reset();
  modal.demoOpener = button; modal.showModal(); requestName.focus();
}));
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
requestName?.addEventListener('input', () => requestName.setCustomValidity(requestName.value.trim() ? '' : 'Ismingizni kiriting.'));
requestPhone?.addEventListener('input', () => {
  const digits = requestPhone.value.replace(/\D/g, '').length;
  requestPhone.setCustomValidity(/^[+\d ()-]+$/.test(requestPhone.value) && digits >= 7 && digits <= 15 ? '' : '7–15 ta raqamdan iborat telefon raqamini kiriting.');
});
document.querySelector('#request-form')?.addEventListener('reset', () => { requestName.setCustomValidity(''); requestPhone.setCustomValidity(''); });
document.querySelector('#request-form')?.addEventListener('submit', event => {
  event.preventDefault(); document.querySelector('#request-result').textContent = 'Demo ariza tayyor, ' + requestName.value.trim() + '. Ma’lumotlar serverga yuborilmadi.';
});
document.querySelectorAll('.filters').forEach(group => {
  const scope = group.closest('section') || document, cards = [...scope.querySelectorAll('[data-category]')];
  group.setAttribute('role', 'group'); group.setAttribute('aria-label', group.getAttribute('aria-label') || 'Kategoriyani tanlash');
  group.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    group.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    cards.forEach(card => card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter);
    const count = scope.querySelector('[data-product-count]'); if (count) count.textContent = cards.filter(card => !card.hidden).length + ' ta mahsulot';
  }));
});

const catalog = new Map([...document.querySelectorAll('[data-add]')].map(button => [button.dataset.add, Number(button.dataset.price)]));
const cartKey = 'ustoz.forma.cart.v1';
let cart = [];
try {
  const saved = JSON.parse(localStorage.getItem(cartKey) || '[]');
  if (Array.isArray(saved)) cart = saved.filter(item => catalog.has(item.name) && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99).map(item => ({name: item.name, price: catalog.get(item.name), quantity: item.quantity}));
} catch { /* The basket still works when storage is unavailable. */ }
const cartDialog = document.querySelector('#cart');
function persistCart() { try { localStorage.setItem(cartKey, JSON.stringify(cart)); } catch { notify('Savat shu sahifada ishlaydi; brauzerda saqlash imkoni yo‘q.'); } }
function updateCart(focusName, focusAction) {
  document.querySelectorAll('[data-cart-count]').forEach(item => item.textContent = cart.reduce((sum, item) => sum + item.quantity, 0));
  const list = document.querySelector('#cart-items'); if (!list) return;
  list.replaceChildren();
  cart.forEach(item => {
    const row = document.createElement('div'); row.className = 'cart-item';
    const details = document.createElement('div'); details.className = 'cart-description';
    const title = document.createElement('b'); title.textContent = item.name;
    const price = document.createElement('span'); price.className = 'fine'; price.textContent = formatMoney(item.price) + ' so‘m / dona'; details.append(title, price);
    const controls = document.createElement('div'); controls.className = 'cart-quantity';
    const quantity = document.createElement('span'); quantity.textContent = item.quantity; quantity.setAttribute('aria-label', item.quantity + ' dona');
    const action = (label, text, handler) => {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = text;
      button.setAttribute('aria-label', item.name + ': ' + label); button.dataset.action = label; button.dataset.item = item.name;
      button.addEventListener('click', handler); return button;
    };
    const change = amount => {
      item.quantity += amount; if (item.quantity <= 0) cart = cart.filter(entry => entry !== item);
      persistCart(); updateCart(item.name, amount > 0 ? 'ko‘paytirish' : 'kamaytirish');
    };
    const minus = action('kamaytirish', '−', () => change(-1)), plus = action('ko‘paytirish', '+', () => change(1)); plus.disabled = item.quantity >= 99;
    const remove = action('o‘chirish', 'O‘chirish', () => { cart = cart.filter(entry => entry !== item); persistCart(); updateCart(item.name, 'o‘chirish'); }); remove.className = 'remove';
    controls.append(minus, quantity, plus, remove); row.append(details, controls); list.append(row);
  });
  document.querySelector('#cart-empty').hidden = cart.length > 0;
  document.querySelector('#cart-total').textContent = formatMoney(cart.reduce((sum, item) => sum + item.price * item.quantity, 0)) + ' so‘m';
  if (focusName) {
    const target = [...list.querySelectorAll('button')].find(button => button.dataset.item === focusName && button.dataset.action === focusAction && !button.disabled);
    (target || list.querySelector('button') || cartDialog.querySelector('[data-close]')).focus();
  }
}
document.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => {
  const found = cart.find(item => item.name === button.dataset.add);
  if (found?.quantity >= 99) { notify('Bitta mahsulotdan eng ko‘pi 99 dona.'); return; }
  if (found) found.quantity++; else cart.push({name: button.dataset.add, price: Number(button.dataset.price), quantity: 1});
  persistCart(); updateCart(); notify(button.dataset.add + ' savatga qo‘shildi');
}));
document.querySelector('[data-open-cart]')?.addEventListener('click', event => { updateCart(); cartDialog.demoOpener = event.currentTarget; cartDialog.showModal(); }); updateCart();

document.querySelector('#order-search')?.addEventListener('input', event => {
  const query = normalizeSearch(event.target.value); let count = 0;
  document.querySelectorAll('#orders tbody tr').forEach(row => { row.hidden = !normalizeSearch(row.textContent).includes(query); if (!row.hidden) count++; });
  document.querySelector('#no-orders').hidden = count > 0;
  document.querySelector('[data-order-count]').textContent = 'Demo yozuvlar · ' + count + ' ta'; document.querySelector('[data-export]').disabled = count === 0;
});
document.querySelectorAll('[data-period]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-period]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  const weekly = button.dataset.period === 'week', revenue = weekly ? 12480000 : 48920000, orders = weekly ? 86 : 342;
  document.querySelector('#revenue').textContent = formatMoney(revenue); document.querySelector('#orders-number').textContent = orders;
  document.querySelector('#customers-number').textContent = weekly ? '316' : '1 284'; document.querySelector('#average-order').textContent = formatMoney(revenue / orders);
  const trends = weekly ? ['9.6', '7.5', '5.1', '2.0'] : ['12.8', '8.2', '6.4', '4.3'];
  document.querySelectorAll('.metric .trend').forEach((el, i) => el.firstChild.textContent = '↗ ' + trends[i] + '% ');
  const products = weekly ? [31, 22, 18] : [124, 86, 72];
  document.querySelectorAll('.bar-row').forEach((row, i) => { row.querySelector('b').textContent = products[i]; row.querySelector('.bar-track span').style.width = products[i] / orders * 100 + '%'; });
  document.querySelector('#chart-title').textContent = weekly ? 'Oxirgi 7 kun' : 'Oxirgi 30 kun';
  document.querySelector('.chart-svg').setAttribute('aria-label', (weekly ? '7 kunlik' : '30 kunlik') + ' namunaviy savdo dinamikasi. Jami tushum: ' + formatMoney(revenue) + ' so‘m.');
  document.querySelector('#chart-line').setAttribute('d', weekly ? 'M0 125 L60 135 L120 88 L180 100 L240 58 L300 68 L360 22' : 'M0 150 L60 120 L120 136 L180 74 L240 94 L300 39 L360 22');
  document.querySelector('.chart-svg path[fill="#edf0ff"]').setAttribute('d', weekly ? 'M10 135L70 145L130 98L190 110L250 68L310 78L370 32V178H10Z' : 'M10 160L70 130L130 146L190 84L250 104L310 49L370 32V178H10Z');
}));
document.querySelector('[data-period].active')?.click();
document.querySelector('[data-export]')?.addEventListener('click', () => {
  const rows = [...document.querySelectorAll('#orders tbody tr')].filter(row => !row.hidden);
  const lines = [['Buyurtma', 'Mijoz', 'Mahsulot', 'Summa', 'Holat'], ...rows.map(row => [...row.cells].map(cell => cell.textContent.trim()))];
  const csv = '\uFEFF' + lines.map(row => row.map(cell => '"' + cell.replaceAll('"', '""') + '"').join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob([csv], {type: 'text/csv;charset=utf-8'})), link = document.createElement('a');
  link.href = url; link.download = 'buyurtmalar-demo.csv'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); notify(rows.length + ' ta buyurtma CSV faylga saqlandi');
});
function updateNavigation() {
  const current = location.hash || '#main';
  document.querySelectorAll('.side-links a,.rail-link[href^="#"]').forEach(link => {
    const active = link.getAttribute('href') === current; link.classList.toggle(link.classList.contains('rail-link') ? 'current' : 'active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
}
addEventListener('hashchange', updateNavigation); updateNavigation();

```

