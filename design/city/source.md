# Open City — editable source snapshot

Source fingerprint: `87b40c0d4e072778f4080056e6064a85f045dce45355ca2eeac377a5a034b46e`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/09-open-city.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>09 · Open City — dizayn namunasi</title><link rel="stylesheet" href="shared.css"><link rel="stylesheet" href="assets/fonts/jetbrains-mono.css"><link rel="stylesheet" href="assets/fonts/dm-sans.css"><style>
.pressable{position:relative;overflow:hidden;min-height:48px;transition:transform 160ms ease-out,box-shadow 160ms ease-out}.pressable:after{content:"";position:absolute;inset:0;border-radius:inherit;background:currentColor;opacity:0;pointer-events:none}.pressable:hover:after{opacity:.06}.pressable:active:after{opacity:.12}.pressable:active{transform:scale(.97);box-shadow:inset 0 2px 5px #0002}.pressable:disabled{opacity:.55}.pressable:focus-visible{outline:3px solid var(--accent);outline-offset:4px}.pressable:hover{box-shadow:0 3px 10px #0002}.icon{width:22px;height:22px;flex-shrink:0;stroke:currentColor;stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round}.round-button{display:grid;place-items:center;min-width:48px;min-height:48px;border-radius:50%;background:var(--wash);color:var(--ink)}.segmented{display:flex;gap:5px;flex-wrap:wrap}.segmented button{min-height:44px;padding:10px 20px;border-radius:24px;background:var(--wash);color:var(--ink);font-size:13px}.segmented button.active{background:var(--accent);color:var(--on-accent,#fff)}.palette-controls{display:flex;align-items:center;gap:10px}.palette-controls button{width:44px;height:44px;min-height:44px;min-width:44px;padding:0;border-radius:50%;border:3px solid transparent;background:var(--swatch)}.palette-controls button[aria-pressed=true]{outline:2px solid var(--ink);outline-offset:3px}.extra-footer{padding:28px 0;font-size:12px;color:var(--muted)}
@media(prefers-reduced-motion:reduce){.pressable{transition:none}}

    :root{--bg:#f9faf7;--surface:#fff;--ink:#18363b;--muted:#536c70;--accent:#c84c20;--wash:#ffe5d9;--line:#ccdad7;--radius:12px}body{font-family:'DM Sans',system-ui,sans-serif}h1,h2,h3,.logo,.eyebrow,.mono-code{font-family:'JetBrains Mono',monospace}.logo{font-size:22px;letter-spacing:-1.2px}.mono-hero{padding:50px 0 55px;display:grid;grid-template-columns:1.2fr 1fr;gap:45px;align-items:center}.mono-hero h1{font-size:clamp(36px,4.9vw,63px);letter-spacing:-3px;font-weight:500;margin:20px 0 25px}.mono-hero h1 span{color:var(--accent)}.mono-hero p{font-size:16px;max-width:420px;color:var(--muted)}.mono-hero .btn{margin-top:15px;border-radius:12px;box-shadow:0 4px 0 #833117}.city-map{height:365px;background:#dcebe7;border-radius:20px;position:relative;overflow:hidden;background-image:linear-gradient(#b9d2ca80 1px,transparent 1px),linear-gradient(90deg,#b9d2ca80 1px,transparent 1px);background-size:38px 38px}.map-road{position:absolute;background:#f9faf7;width:140%;height:35px;left:-20%;top:40%;transform:rotate(-35deg);border-top:1px solid #bdd2ca;border-bottom:1px solid #bdd2ca}.map-road.second{transform:rotate(40deg);top:55%}.map-pin{position:absolute;left:52%;top:40%;width:58px;height:58px;background:var(--accent);border-radius:50% 50% 50% 4px;transform:rotate(-45deg);border:6px solid white;box-shadow:0 6px 10px #274c3920}.map-pin:after{content:"";position:absolute;background:white;width:15px;height:15px;border-radius:50%;left:15px;top:15px}.map-label{position:absolute;bottom:22px;left:22px;background:white;padding:13px 18px;border-radius:10px;font:12px 'JetBrains Mono',monospace}.mono-bar{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:22px 0;gap:20px;font:12px 'JetBrains Mono',monospace}.mono-bar b{display:block;font-size:24px;margin-bottom:5px;font-weight:500}.mono-service{padding:27px;background:var(--surface);border:1px solid var(--line);border-radius:16px}.mono-code{font-size:11px;color:var(--accent)}.mono-service h3{font-size:20px;font-weight:500;margin:18px 0 14px;letter-spacing:-.8px}.mono-service p{font-size:14px;color:var(--muted);min-height:65px}.mono-service .btn{background:var(--wash);color:var(--accent);width:100%;font-size:12px;border-radius:12px}.mono-message{padding:35px;background:#17383b;border-radius:20px;color:#eff7f2;display:flex;justify-content:space-between;gap:25px;align-items:center}.mono-message h2{font-size:27px;font-weight:500;margin:0}.mono-message .btn{background:#f9bc86;color:#352517}@media(max-width:800px){.mono-hero{grid-template-columns:1fr;padding-top:30px;gap:30px}.mono-hero h1{letter-spacing:-2px}.city-map{height:300px}.mono-bar{font-size:10px}.mono-message{padding:25px;align-items:start;flex-direction:column}.mono-message h2{font-size:23px}}
    .mono-service{display:flex;flex-direction:column}.mono-service .btn{margin-top:auto;color:#a13b18}.mono-service p{min-height:0}.map-label{max-width:calc(100% - 44px);line-height:1.6}.mono-code{font-size:12px}@media(max-width:420px){.mono-hero h1{font-size:32px;letter-spacing:-1.7px}.mono-bar{font-size:11px;gap:12px}.mono-bar b{font-size:22px}.mono-message h2{font-size:22px}.section-head h2{overflow-wrap:anywhere}}</style></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><header class="shell"><nav class="nav" aria-label="Asosiy menyu"><a class="logo" href="#">open<span>city</span>_</a><button class="menu-button" aria-expanded="false" aria-controls="navlinks">Menyu ☰</button><div class="navlinks" id="navlinks"><a href="#xizmatlar">Xizmatlar</a><a href="#taklif">Takliflar</a><button class="btn small pressable" data-request="Shahar uchun yangi taklif">+ Taklif berish</button></div></nav></header><main id="main"><section class="shell mono-hero"><div><p class="eyebrow">Shahar sizdan boshlanadi.</p><h1>Yaxshi shahar.<br><span>Ochiq imkoniyat.</span></h1><p>Mahallangizdagi xizmatlar, foydali tashabbuslar va yangi imkoniyatlarni bir joydan toping.</p><a class="btn pressable" href="#xizmatlar">Xizmatlarni topish →</a><p class="fine" style="margin-top:25px">Qidirish oson. Murojaat qilish qulay.</p></div><div class="city-map" role="img" aria-label="Shahar xaritasi uslubidagi dekorativ chizma"><span class="map-road"></span><span class="map-road second"></span><span class="map-pin"></span><span class="map-label">SAMARQAND / SIZNING MAHALLANGIZ</span></div></section><div class="shell mono-bar"><div><b>24/7</b>ma’lumot olish</div><div><b>12</b>xizmat yo‘nalishi</div><div><b>01</b>yagona manzil</div></div><section class="shell section" id="xizmatlar"><div class="section-head"><div><p class="eyebrow">Xizmatlar katalogi</p><h2 style="font-size:29px;font-weight:500">Keraklisini tanlang_</h2></div><p>Bir necha bosishda kerakli yo‘nalishni toping va demo murojaat tayyorlang.</p></div><div class="filters"><button class="filter active pressable" data-filter="all" aria-pressed="true">Barchasi</button><button class="filter pressable" data-filter="education" aria-pressed="false">Ta’lim</button><button class="filter pressable" data-filter="city" aria-pressed="false">Shahar</button></div><div class="grid3"><article class="mono-service" data-category="education"><span class="mono-code">01 / LEARN</span><h3>Kasbga birinchi qadam</h3><p>Yaqin atrofdagi kurslar, mentorlar va yangi ko‘nikmalar uchun yo‘nalishlar.</p><button class="btn pressable" data-request="Kasbga birinchi qadam bo‘yicha murojaat">Murojaat tayyorlash →</button></article><article class="mono-service" data-category="city"><span class="mono-code">02 / CARE</span><h3>Mahallaga e’tibor</h3><p>Obodonlashtirish va mahalla uchun foydali takliflarni bir joyda jamlang.</p><button class="btn pressable" data-request="Mahallaga e’tibor bo‘yicha murojaat">Murojaat tayyorlash →</button></article><article class="mono-service" data-category="city"><span class="mono-code">03 / CREATE</span><h3>Yoshlar tashabbusi</h3><p>G‘oyangizni yozing va yangi loyiha boshlash uchun birinchi qadamni belgilang.</p><button class="btn pressable" data-request="Yoshlar tashabbusi bo‘yicha murojaat">Murojaat tayyorlash →</button></article></div></section><section class="shell section" style="padding-top:0" id="taklif"><div class="mono-message"><h2>Shahringiz uchun<br>yaxshi g‘oyangiz bormi?</h2><button class="btn pressable" data-request="Mahalla uchun yangi g‘oya">+ G‘oyani yozish</button></div></section></main><footer class="foot"><div class="shell row"><span>© 2026 Open City · Dizayn namunasidir</span><a href="index.html">← Barcha shablonlar</a></div></footer><dialog id="request" aria-labelledby="request-title"><div class="row"><h2 id="request-title">Ariza qoldirish</h2><button class="close" data-close aria-label="Yopish">×</button></div><p class="muted">Demo ariza uchun ma’lumotlarni kiriting.</p><form id="request-form"><label for="request-name">Ismingiz</label><input id="request-name" name="name" autocomplete="given-name" required maxlength="80" placeholder="Ismingizni yozing"><label for="request-phone">Telefon raqamingiz</label><input id="request-phone" name="phone" type="tel" autocomplete="tel" required maxlength="24" inputmode="tel" placeholder="+998 90 123 45 67"><label for="request-message">Xabaringiz yoki savolingiz <span class="fine">(ixtiyoriy)</span></label><textarea id="request-message" name="message" rows="3" maxlength="1000" placeholder="Qisqacha yozing…"></textarea><div class="dialog-actions"><button class="btn" type="submit">Ariza tayyorlash →</button><button class="btn secondary" type="button" data-close>Bekor qilish</button></div><p class="result" id="request-result" role="status"></p></form><p class="fine" style="margin:20px 0 0">Dizayn namunasidagi forma. Ma’lumotlar yuborilmaydi.</p></dialog><script src="extra.js"></script><div class="toast" role="status" hidden></div><script src="shared.js"></script></body></html>
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

## site/extra.js

```javascript
/* Local preferences only; no account, form or contact information is stored. */
const demoStore = {
  read(key, fallback) { try { return JSON.parse(localStorage.getItem('ustoz.' + key)) ?? fallback; } catch { return fallback; } },
  write(key, value) { try { localStorage.setItem('ustoz.' + key, JSON.stringify(value)); return true; } catch { return false; } }
};
const palettes = {'#d9ef3f':'#f2f6cd', '#b6d6ff':'#e6f0ff', '#f5afd1':'#fce4ef'};
function setPalette(color) {
  if (!palettes[color]) return;
  document.documentElement.style.setProperty('--accent', color); document.documentElement.style.setProperty('--wash', palettes[color]);
  document.querySelectorAll('[data-color]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.color === color)));
}
if (document.querySelector('[data-color]')) setPalette(demoStore.read('spark.palette', '#d9ef3f'));
document.querySelectorAll('[data-color]').forEach(button => button.addEventListener('click', () => { setPalette(button.dataset.color); demoStore.write('spark.palette', button.dataset.color); }));
const themeButton = document.querySelector('button[data-theme]');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'; themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? 'Yorug‘ rejimga o‘tish' : 'Qorong‘i rejimga o‘tish');
}
if (themeButton) {
  setTheme(demoStore.read('qadam.theme', 'light') === 'dark');
  themeButton.addEventListener('click', () => { const dark = document.documentElement.dataset.theme !== 'dark'; setTheme(dark); demoStore.write('qadam.theme', dark ? 'dark' : 'light'); });
}
const courseCards = [...document.querySelectorAll('[data-course]')], validCourseIds = courseCards.map(card => card.dataset.course);
const readIds = key => { const stored = demoStore.read(key, []); return new Set(Array.isArray(stored) ? stored.filter(id => validCourseIds.includes(id)) : []); };
let currentCourseFilter = 'all', onlySaved = false;
const savedCourses = readIds('qadam.saved.v1'), completedLessons = readIds('qadam.completed.v1');
const searchText = value => value.trim().toLocaleLowerCase('uz').replace(/[‘’ʻʼ`]/g, "'").replace(/\s+/g, ' ');
function updateCourses() {
  const query = searchText(document.querySelector('#course-search')?.value || ''); let count = 0;
  const clearSearch = document.querySelector('[data-clear-search]');
  if (clearSearch) {
    clearSearch.hidden = !document.querySelector('#course-search').value;
    document.querySelector('.search-hint').hidden = !clearSearch.hidden;
  }
  courseCards.forEach(card => {
    const searchable = card.querySelector('h3').textContent + ' ' + card.querySelector('.m-course-copy>p').textContent;
    card.hidden = !(currentCourseFilter === 'all' || card.dataset.kind === currentCourseFilter) || !searchText(searchable).includes(query) || (onlySaved && !savedCourses.has(card.dataset.course));
    if (!card.hidden) count++;
    const button = card.querySelector('[data-save-course]'), saved = savedCourses.has(card.dataset.course);
    button.setAttribute('aria-pressed', String(saved)); button.classList.toggle('is-saved', saved);
    button.setAttribute('aria-label', card.querySelector('h3').textContent + (saved ? ': saqlanganlardan olib tashlash' : ': saqlash'));
  });
  const empty = document.querySelector('#course-empty'); if (empty) empty.hidden = count > 0;
  const status = document.querySelector('#course-results'); if (status) status.textContent = count + ' ta kurs' + (onlySaved ? ' · Saqlanganlar' : '');
  document.querySelectorAll('[data-saved-count]').forEach(item => item.textContent = savedCourses.size);
}
document.querySelector('#course-search')?.addEventListener('input', updateCourses);
document.querySelector('[data-clear-search]')?.addEventListener('click', () => {
  document.querySelector('#course-search').value = ''; updateCourses(); document.querySelector('#course-search').focus();
});
document.querySelector('#course-search')?.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault(); document.querySelector('#course-heading').focus();
    document.querySelector('#kurslar').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth', block:'start'});
  }
  if (event.key === 'Escape' && event.currentTarget.value) { event.preventDefault(); event.currentTarget.value = ''; updateCourses(); }
});
document.addEventListener('keydown', event => {
  if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input,textarea,[contenteditable],dialog')) {
    const input = document.querySelector('#course-search'); if (input) { event.preventDefault(); input.focus(); }
  }
});
document.querySelectorAll('[data-app-filter]').forEach(button => button.addEventListener('click', () => {
  currentCourseFilter = button.dataset.appFilter;
  document.querySelectorAll('[data-app-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); }); updateCourses();
}));
document.querySelectorAll('[data-save-course]').forEach(button => button.addEventListener('click', () => {
  const id = button.dataset.saveCourse; if (savedCourses.has(id)) savedCourses.delete(id); else savedCourses.add(id);
  demoStore.write('qadam.saved.v1', [...savedCourses]); updateCourses();
  if (button.closest('[data-course]').hidden) document.querySelector('[data-only-saved]').focus();
}));
document.querySelector('[data-only-saved]')?.addEventListener('click', event => {
  onlySaved = !onlySaved; event.currentTarget.setAttribute('aria-pressed', String(onlySaved)); event.currentTarget.classList.toggle('selected', onlySaved); updateCourses();
});
document.querySelector('[data-reset-courses]')?.addEventListener('click', () => {
  onlySaved = false; const button = document.querySelector('[data-only-saved]'); button.classList.remove('selected'); button.setAttribute('aria-pressed', 'false');
  document.querySelector('#course-search').value = ''; document.querySelector('[data-app-filter="all"]').click(); document.querySelector('#course-search').focus();
});
const tasks = {
  web: ['HTML sahifada header, main va footer qismlarini yarating.', 'Sarlavha, qisqa matn va ishlaydigan tugma qo‘shing.', 'Sahifani telefon kengligida ochib, matn va tugmalarni tekshiring.'],
  design: ['Bitta asosiy rang, matn rangi va och fon tanlang.', 'Sarlavha hamda asosiy matn uchun ikki shrift o‘lchamini belgilang.', 'Matn o‘qilishini va klaviatura bilan tugmaga o‘tishni tekshiring.'],
  ai: ['Maqsad, auditoriya va kerakli natijani aniq yozing.', 'AI javobidan foydalanib bitta kichik namuna yarating.', 'Natijadagi faktlarni tekshiring va bitta kamchilikni tuzating.']
};
const lessonDialog = document.querySelector('#lesson'); let selectedLesson;
const storedSteps = demoStore.read('qadam.steps.v1', {});
const lessonSteps = courseCards.length ? QadamLessonModel.restoreSteps(storedSteps, validCourseIds, completedLessons) : {};
function saveSteps() {
  return demoStore.write('qadam.steps.v1', Object.fromEntries(Object.entries(lessonSteps).map(([id, steps]) => [id, [...steps]])));
}
function updateLessonAction() {
  const done = completedLessons.has(selectedLesson), count = lessonSteps[selectedLesson].size;
  const complete = document.querySelector('#complete-lesson');
  complete.disabled = !QadamLessonModel.canComplete(lessonSteps[selectedLesson], tasks[selectedLesson].length, done);
  complete.textContent = done ? 'Dars bajarilgan ✓' : 'Darsni yakunlash ✓';
  document.querySelector('#lesson-step-status').textContent = count + ' / ' + tasks[selectedLesson].length + ' qadam bajarildi' + (!done && count < 3 ? ' · Davom eting' : '');
}
function updateProgress() {
  if (!lessonDialog) return;
  const count = completedLessons.size, total = validCourseIds.length;
  document.querySelector('#lesson-progress-text').textContent = count + ' / ' + total + ' dars';
  const bar = document.querySelector('#lesson-progress'); bar.style.width = count / total * 100 + '%';
  bar.parentElement.setAttribute('aria-valuenow', count); bar.parentElement.setAttribute('aria-valuemax', total);
  courseCards.forEach(card => { card.querySelector('[data-completion]').hidden = !completedLessons.has(card.dataset.course); });
  document.querySelector('[data-reset-progress]').disabled = count === 0 && Object.values(lessonSteps).every(steps => steps.size === 0);
  const next = courseCards.find(card => !completedLessons.has(card.dataset.course)) || courseCards[0];
  const source = next.querySelector('[data-lesson]'), hero = document.querySelector('.continue-card [data-lesson]');
  Object.assign(hero.dataset, {lesson: source.dataset.lesson, lessonTitle: source.dataset.lessonTitle, lessonDescription: source.dataset.lessonDescription});
  hero.lastChild.textContent = count === total ? ' Darsni takrorlash' : ' Darsni boshlash';
  document.querySelector('.continue-card p').textContent = count === total ? 'Barcha demo darslar bajarildi. Istalgan darsni qayta ko‘rib chiqing.' : source.dataset.lessonTitle + ' bo‘yicha navbatdagi amaliy qadamingiz tayyor.';
}
document.querySelector('[data-reset-progress]')?.addEventListener('click', () => {
  completedLessons.clear(); Object.values(lessonSteps).forEach(steps => steps.clear()); saveSteps(); demoStore.write('qadam.completed.v1', []); updateProgress();
  document.querySelector('.continue-card [data-lesson]').focus();
});
document.querySelectorAll('[data-lesson]').forEach(button => button.addEventListener('click', () => {
  selectedLesson = button.dataset.lesson; document.querySelector('#lesson-title').textContent = button.dataset.lessonTitle;
  document.querySelector('#lesson-description').textContent = button.dataset.lessonDescription;
  const list = lessonDialog.querySelector('ol'); list.replaceChildren();
  tasks[selectedLesson].forEach((text, index) => {
    const item = document.createElement('li'), label = document.createElement('label'), input = document.createElement('input'), description = document.createElement('span');
    label.className = 'lesson-step'; input.type = 'checkbox'; input.checked = lessonSteps[selectedLesson].has(index); input.disabled = completedLessons.has(selectedLesson); description.textContent = text;
    input.addEventListener('change', () => {
      if (input.checked) lessonSteps[selectedLesson].add(index); else lessonSteps[selectedLesson].delete(index);
      const persisted = saveSteps(); updateLessonAction(); updateProgress();
      if (!persisted) document.querySelector('#lesson-feedback').textContent = 'Brauzer saqlashga ruxsat bermadi. Qadamlar ochiq sahifada saqlanadi.';
    });
    label.append(input, description); item.append(label); list.append(item);
  });
  updateLessonAction(); document.querySelector('#lesson-feedback').textContent = ''; lessonDialog.demoOpener = button; lessonDialog.showModal();
}));
document.querySelector('#complete-lesson')?.addEventListener('click', event => {
  if (!selectedLesson || !QadamLessonModel.canComplete(lessonSteps[selectedLesson], tasks[selectedLesson].length, completedLessons.has(selectedLesson))) return;
  completedLessons.add(selectedLesson); const persisted = demoStore.write('qadam.completed.v1', [...completedLessons]);
  event.currentTarget.disabled = true; event.currentTarget.textContent = 'Dars bajarilgan ✓'; updateProgress();
  lessonDialog.querySelectorAll('.lesson-step input').forEach(input => input.disabled = true);
  document.querySelector('#lesson-feedback').textContent = persisted ? 'Bajarildi. Natija shu brauzerda saqlandi.' : 'Bajarildi. Natija faqat ochiq sahifada saqlanadi.';
  lessonDialog.querySelector('.dialog-actions [data-close]').focus();
});
updateCourses(); updateProgress();

```

