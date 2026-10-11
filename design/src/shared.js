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
