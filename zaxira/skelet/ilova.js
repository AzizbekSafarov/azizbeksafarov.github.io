/* =====================================================================
   ILOVA.JS — sahifalarni chizadi va tugmalarni ishlatadi.
   Mazmunni bu yerda emas, malumot.js da o'zgartiring.
   Bo'limlar: 1) yordamchilar 2) menyu va manzil 3) bosh 4) ro'yxat
   5) tafsilot 6) forma 7) arizalarim 8) biz haqimizda 9) ishga tushirish
   ===================================================================== */
(function () {
  'use strict';

  /* ---------- 1. Yordamchilar ---------- */
  var $ = function (s) { return document.querySelector(s); };
  var M = window.Mantiq;
  var SAYT, ELEMENTLAR, FORMA, ombor;
  var holat = { qidiruv: '', turi: 'hammasi', birinchi: true };

  /** Element yaratadi. Matn faqat textContent orqali qo'yiladi (xavfsiz). */
  function el(teg, xossalar, bolalar) {
    var e = document.createElement(teg);
    Object.keys(xossalar || {}).forEach(function (k) {
      var q = xossalar[k];
      if (q == null || q === false) return;
      if (k === 'matn') e.textContent = q;
      else if (k === 'class') e.className = q;
      else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2), q);
      else e.setAttribute(k, q === true ? '' : q);
    });
    [].concat(bolalar || []).forEach(function (b) {
      if (b != null) e.appendChild(typeof b === 'string' ? document.createTextNode(b) : b);
    });
    return e;
  }
  function tozala(e) { while (e.firstChild) e.removeChild(e.firstChild); return e; }
  function yol(obyekt, kalit) {
    return kalit.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, obyekt);
  }
  function xabar(matn) {
    var x = $('#xabar'); x.textContent = matn; x.classList.add('korin');
    clearTimeout(xabar.t); xabar.t = setTimeout(function () { x.classList.remove('korin'); }, 2600);
  }
  function elementTop(id) {
    for (var i = 0; i < ELEMENTLAR.length; i++) if (String(ELEMENTLAR[i].id) === String(id)) return ELEMENTLAR[i];
    return null;
  }
  function yozuvlar() { return SAYT.saqlash ? ombor.oqi() : []; }
  function qolgan(element) { return M.qolganJoy(element, yozuvlar()); }
  function yuklab(nom, matn, tur) {
    var blob = new Blob([matn], { type: tur });
    var a = el('a', { href: URL.createObjectURL(blob), download: nom });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  /* ---------- 2. Menyu va manzil (#bosh, #royxat, #element-ID, #ariza, #ariza-ID ...) ---------- */
  function menyuChiz() {
    var menyu = tozala($('#menyu'));
    Object.keys(SAYT.sahifalar || {}).forEach(function (kalit) {
      menyu.appendChild(el('a', { href: '#' + kalit, 'data-kalit': kalit, matn: SAYT.sahifalar[kalit] }));
    });
    var tugma = $('.menyu-tugma');
    tugma.addEventListener('click', function () {
      var ochiq = menyu.classList.toggle('ochiq');
      tugma.setAttribute('aria-expanded', String(ochiq));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menyu.classList.contains('ochiq')) {
        menyu.classList.remove('ochiq'); tugma.setAttribute('aria-expanded', 'false'); tugma.focus();
      }
    });
    // "Asosiy mazmunga o'tish" sahifani almashtirmaydi, faqat fokusni o'tkazadi.
    $('[data-skip]').addEventListener('click', function (e) { e.preventDefault(); $('#asosiy').focus(); });
  }

  function manzil() {
    var h = decodeURIComponent(location.hash.replace(/^#/, ''));
    if (!h || h === 'asosiy') return { sahifa: 'bosh' };
    var m = /^(element|ariza)-(.+)$/.exec(h);
    if (m) return { sahifa: m[1], id: m[2] };
    return { sahifa: h };
  }

  function yoqilgan(sahifa) {
    var s = SAYT.sahifalar || {};
    if (sahifa === 'element') return 'royxat' in s;
    if (sahifa === 'topilmadi') return true;
    return sahifa in s;
  }

  function ochish() {
    var m = manzil();
    var sahifa = yoqilgan(m.sahifa) ? m.sahifa : 'topilmadi';
    if (sahifa === 'element' && !elementTop(m.id)) sahifa = 'topilmadi';
    document.querySelectorAll('[data-sahifa]').forEach(function (s) { s.hidden = s.getAttribute('data-sahifa') !== sahifa; });
    var faol = sahifa === 'element' ? 'royxat' : sahifa;
    document.querySelectorAll('#menyu a').forEach(function (a) {
      if (a.getAttribute('data-kalit') === faol) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    $('#menyu').classList.remove('ochiq'); $('.menyu-tugma').setAttribute('aria-expanded', 'false');

    if (sahifa === 'bosh') boshChiz();
    if (sahifa === 'royxat') royxatChiz();
    if (sahifa === 'element') tafsilotChiz(elementTop(m.id));
    if (sahifa === 'ariza') arizaOch(m.id);
    if (sahifa === 'saqlangan') saqlanganChiz();

    var h1 = document.querySelector('[data-sahifa="' + sahifa + '"] h1');
    var nomi = (h1 && h1.textContent) || '';
    document.title = (sahifa === 'bosh' ? SAYT.nomi : nomi + ' — ' + SAYT.nomi);
    if (!holat.birinchi && h1) { h1.setAttribute('tabindex', '-1'); h1.focus(); }
    if (!holat.birinchi) window.scrollTo(0, 0);
    holat.birinchi = false;
  }

  /* ---------- 3. Bosh sahifa ---------- */
  function boshChiz() {
    $('#son-jami').textContent = ELEMENTLAR.length;
    $('#son-ariza').textContent = yozuvlar().length;
    $('#son-ariza').parentNode.hidden = !SAYT.saqlash;
    var blok = tozala($('#afzalliklar'));
    ((SAYT.bosh && SAYT.bosh.afzalliklar) || []).forEach(function (a) {
      blok.appendChild(el('article', {}, [el('h2', { matn: a.sarlavha }), el('p', { matn: a.matn })]));
    });
  }

  /* ---------- 4. Ro'yxat: qidiruv, filtr, bo'sh holat ---------- */
  function royxatTayyorla() {
    var select = $('#tur-filtr');
    M.turlar(ELEMENTLAR).forEach(function (t) { select.appendChild(el('option', { value: t, matn: t })); });
    select.closest('label').hidden = M.turlar(ELEMENTLAR).length < 2;
    $('#qidiruv').addEventListener('input', function (e) { holat.qidiruv = e.target.value; royxatChiz(); });
    select.addEventListener('change', function (e) { holat.turi = e.target.value; royxatChiz(); });
    $('#filtr').addEventListener('submit', function (e) { e.preventDefault(); });
    $('#filtr').addEventListener('reset', function () { setTimeout(function () { holat.qidiruv = ''; holat.turi = 'hammasi'; royxatChiz(); }, 0); });
    $('#filtr-tozala').addEventListener('click', function () { $('#filtr').reset(); $('#qidiruv').focus(); });
  }

  function karta(e) {
    var joy = qolgan(e);
    var toldi = joy === 0;
    var rasm = e.rasm ? el('img', { src: e.rasm, alt: e.rasmIzoh || '', loading: 'lazy' }) : String(e.nom || '?').charAt(0).toUpperCase();
    var meta = [e.sana ? M.sanaMatn(e.sana) + (e.vaqt ? ', ' + e.vaqt : '') : null, e.joy, e.narx != null ? M.pul(e.narx) : null]
      .filter(Boolean).join(' · ');
    return el('article', { class: 'karta' }, [
      el('div', { class: 'karta-rasm', 'aria-hidden': e.rasm ? null : 'true' }, [rasm]),
      el('div', { class: 'karta-ichi' }, [
        e.turi ? el('span', { class: 'belgi', matn: e.turi }) : null,
        el('h2', { matn: e.nom }),
        meta ? el('p', { class: 'kichik', matn: meta }) : null,
        isFinite(joy) ? el('span', { class: 'belgi' + (toldi ? ' toldi' : ''), matn: toldi ? 'Joy qolmagan' : 'Qolgan joy: ' + joy }) : null,
        el('div', { class: 'amallar' }, [
          el('a', { class: 'tugma ikkinchi', href: '#element-' + encodeURIComponent(e.id), matn: 'Batafsil', 'aria-label': e.nom + ' — batafsil' }),
          'ariza' in SAYT.sahifalar ? (toldi
            ? el('button', { class: 'tugma', type: 'button', disabled: true, matn: 'Joy qolmagan' })
            : el('a', { class: 'tugma', href: '#ariza-' + encodeURIComponent(e.id), matn: 'Tanlash', 'aria-label': e.nom + ' — tanlash va ariza berish' })) : null
        ])
      ])
    ]);
  }

  function royxatChiz() {
    var natija = M.filtrla(ELEMENTLAR, holat);
    var joy = tozala($('#kartalar'));
    natija.forEach(function (e) { joy.appendChild(karta(e)); });
    $('#royxat-bosh').hidden = natija.length > 0;
    $('#royxat-holat').textContent = natija.length + ' ta natija' + (natija.length !== ELEMENTLAR.length ? ' (jami ' + ELEMENTLAR.length + ')' : '');
  }

  /* ---------- 5. Tafsilot ---------- */
  function tafsilotChiz(e) {
    var joy = qolgan(e);
    var qatorlar = [['Turi', e.turi], ['Sana', e.sana && M.sanaMatn(e.sana)], ['Vaqt', e.vaqt], ['Joy', e.joy],
      ['Narx', e.narx != null ? M.pul(e.narx) : null], ['Qolgan joy', isFinite(joy) ? String(joy) : null]];
    var dl = el('dl');
    qatorlar.forEach(function (q) { if (q[1]) { dl.appendChild(el('dt', { matn: q[0] })); dl.appendChild(el('dd', { matn: q[1] })); } });
    tozala($('#tafsilot')).appendChild(el('div', {}, [
      el('a', { class: 'orqaga', href: '#royxat', matn: '← Ro‘yxatga qaytish' }),
      el('h1', { id: 'element-h', matn: e.nom }),
      e.rasm ? el('img', { src: e.rasm, alt: e.rasmIzoh || '' }) : null,
      e.tavsif ? el('p', { class: 'katta-matn', matn: e.tavsif }) : null,
      dl,
      'ariza' in SAYT.sahifalar ? el('div', { class: 'amallar' }, [joy === 0
        ? el('button', { class: 'tugma', type: 'button', disabled: true, matn: 'Joy qolmagan' })
        : el('a', { class: 'tugma', href: '#ariza-' + encodeURIComponent(e.id), matn: 'Tanlash va ariza berish' })]) : null
    ]));
  }

  /* ---------- 6. Ariza formasi: tekshirish, xatolar, muvaffaqiyat, saqlash ---------- */
  function maydonlar() {
    return FORMA.maydonlar.map(function (m) {
      if (m.tur !== 'tanlash' || m.nom !== 'element') return m;
      return Object.assign({}, m, { variantlar: ELEMENTLAR.map(function (e) { return { qiymat: String(e.id), matn: e.nom }; }) });
    });
  }

  function formaChiz() {
    var forma = tozala($('#ariza-forma'));
    maydonlar().forEach(function (m) {
      var id = 'f-' + m.nom;
      var izohId = m.maslahat ? id + '-izoh' : null;
      var xatoId = id + '-xato';
      var yorliq = [m.yorliq, m.majburiy ? el('span', { class: 'majburiy', 'aria-hidden': 'true', matn: ' *' }) : null];
      var umumiy = { id: id, name: m.nom, required: m.majburiy || null, 'aria-describedby': [izohId, xatoId].filter(Boolean).join(' ') };
      var kirish;
      if (m.tur === 'matnmaydon') kirish = el('textarea', Object.assign({ maxlength: m.max || null }, umumiy));
      else if (m.tur === 'tanlash') {
        kirish = el('select', umumiy, [el('option', { value: '', matn: 'Tanlang…' })]);
        (m.variantlar || []).forEach(function (v) { kirish.appendChild(el('option', { value: v.qiymat, matn: v.matn })); });
      } else if (m.tur === 'belgi') kirish = el('input', Object.assign({ type: 'checkbox' }, umumiy));
      else {
        var turlar = { telefon: 'tel', email: 'email', son: 'number', sana: 'date', matn: 'text' };
        kirish = el('input', Object.assign({ type: turlar[m.tur] || 'text', autocomplete: m.avto || null,
          inputmode: m.tur === 'telefon' ? 'tel' : null, maxlength: m.tur === 'matn' && m.max ? m.max : null,
          min: m.tur === 'sana' && m.otmishEmas ? M.bugun() : (m.tur === 'son' ? m.min : null), max: m.tur === 'son' ? m.max : null }, umumiy));
      }
      kirish.addEventListener(m.tur === 'belgi' || m.tur === 'tanlash' ? 'change' : 'input', function () { if (kirish.getAttribute('aria-invalid')) maydonTekshir(m.nom); });
      var label = m.tur === 'belgi' ? el('label', { for: id }, [kirish, el('span', {}, yorliq)]) : el('label', { for: id }, [el('span', {}, yorliq)]);
      forma.appendChild(el('div', { class: 'maydon' + (m.tur === 'belgi' ? ' belgi-qator' : '') }, [
        label,
        m.tur === 'belgi' ? null : kirish,
        m.maslahat ? el('p', { class: 'izoh', id: izohId, matn: m.maslahat }) : null,
        el('p', { class: 'xato', id: xatoId, hidden: true })
      ]));
    });
    forma.appendChild(el('div', { class: 'amallar' }, [el('button', { class: 'tugma', type: 'submit', matn: FORMA.tugma || 'Yuborish' })]));
    forma.addEventListener('submit', yuborish);
  }

  function qiymatlar() {
    var q = {};
    maydonlar().forEach(function (m) {
      var k = $('#f-' + m.nom);
      q[m.nom] = m.tur === 'belgi' ? k.checked : k.value;
    });
    return q;
  }

  /** Berilgan turdagi birinchi maydon nomi (masalan, telefon maydoni qanday nomlangan bo'lmasin). */
  function birinchi(turlar) {
    for (var i = 0; i < FORMA.maydonlar.length; i++) if (turlar.indexOf(FORMA.maydonlar[i].tur) !== -1 && FORMA.maydonlar[i].nom !== 'element') return FORMA.maydonlar[i].nom;
    return null;
  }

  /** Maydon qoidalari + biznes qoidalar (joy qolmagan, takror ariza). */
  function tekshiruv() {
    var n = M.tekshir(maydonlar(), qiymatlar());
    var tanlangan = elementTop(n.toza.element);
    var aloqa = birinchi(['telefon']) || birinchi(['email']);
    if (tanlangan && !n.xatolar.element && qolgan(tanlangan) === 0) n.xatolar.element = FORMA.toldiXato;
    if (SAYT.saqlash && tanlangan && aloqa && n.toza[aloqa] && !n.xatolar[aloqa] && !n.xatolar.element) {
      var bor = yozuvlar().some(function (y) { return M.normal(y[aloqa]) === M.normal(n.toza[aloqa]) && String(y.element) === String(tanlangan.id); });
      if (bor) n.xatolar.element = FORMA.takrorXato;
    }
    n.ok = Object.keys(n.xatolar).length === 0;
    return n;
  }

  function xatoKorsat(nom, matn) {
    var k = $('#f-' + nom), p = $('#f-' + nom + '-xato');
    if (!k) return;
    if (matn) { k.setAttribute('aria-invalid', 'true'); p.textContent = matn; p.hidden = false; }
    else { k.removeAttribute('aria-invalid'); p.textContent = ''; p.hidden = true; }
  }

  function maydonTekshir(nom) { xatoKorsat(nom, tekshiruv().xatolar[nom]); }

  function yuborish(e) {
    e.preventDefault();
    var n = tekshiruv();
    var xulosa = $('#xato-xulosa');
    maydonlar().forEach(function (m) { xatoKorsat(m.nom, n.xatolar[m.nom]); });
    if (!n.ok) {
      var royxat = el('ul');
      maydonlar().forEach(function (m) {
        if (!n.xatolar[m.nom]) return;
        royxat.appendChild(el('li', {}, [el('a', { href: '#f-' + m.nom, matn: n.xatolar[m.nom], onclick: function (ev) { ev.preventDefault(); $('#f-' + m.nom).focus(); } })]));
      });
      tozala(xulosa).appendChild(el('strong', { matn: 'Formada ' + royxat.children.length + ' ta xato bor:' }));
      xulosa.appendChild(royxat); xulosa.hidden = false; xulosa.focus();
      return;
    }
    xulosa.hidden = true;
    var yozuv = Object.assign({}, n.toza);
    var saqlandi = { ok: false };
    if (SAYT.saqlash) saqlandi = ombor.qosh(yozuv);
    var tanlangan = elementTop(yozuv.element);
    var dl = el('dl', { class: 'aloqa' });
    maydonlar().forEach(function (m) {
      if (m.tur === 'belgi' || yozuv[m.nom] === '') return;
      dl.appendChild(el('dt', { matn: m.yorliq }));
      dl.appendChild(el('dd', { matn: m.nom === 'element' && tanlangan ? tanlangan.nom : m.tur === 'sana' ? M.sanaMatn(yozuv[m.nom]) : String(yozuv[m.nom]) }));
    });
    var panel = tozala($('#muvaffaqiyat'));
    panel.appendChild(el('h2', { matn: FORMA.muvaffaqiyat || 'Qabul qilindi!' }));
    panel.appendChild(dl);
    panel.appendChild(el('p', { class: 'kichik', matn: SAYT.saqlash
      ? (saqlandi.ok ? 'Ariza shu brauzerda saqlandi.' : 'Ariza faqat sahifa ochiq turganda saqlanadi — brauzer xotirasi yopiq.')
      : 'Sinov rejimi: ma’lumot hech qayerga yuborilmadi.' }));
    panel.appendChild(el('div', { class: 'amallar' }, [
      'saqlangan' in SAYT.sahifalar && SAYT.saqlash ? el('a', { class: 'tugma', href: '#saqlangan', matn: 'Arizalarimni ko‘rish' }) : null,
      el('button', { class: 'tugma ikkinchi', type: 'button', matn: 'Yana ariza', onclick: function () { arizaOch(null, true); $('#f-' + FORMA.maydonlar[0].nom).focus(); } })
    ]));
    $('#ariza-forma').hidden = true; panel.hidden = false; panel.focus();
  }

  /** Formani ochadi. Yozilgan matn yo'qolmaydi; faqat yuborilgandan keyin yoki "Yana ariza"da tozalanadi.
      id berilsa o'sha element tanlangan bo'ladi. */
  function arizaOch(id, yangi) {
    var forma = $('#ariza-forma');
    if (yangi || !$('#muvaffaqiyat').hidden) {
      forma.reset();
      $('#muvaffaqiyat').hidden = true; $('#xato-xulosa').hidden = true;
      maydonlar().forEach(function (m) { xatoKorsat(m.nom, ''); });
    }
    forma.hidden = false;
    var select = $('#f-element');
    if (select) {
      Array.prototype.forEach.call(select.options, function (o) {
        var e = elementTop(o.value);
        if (!e) return;
        var toldi = qolgan(e) === 0;
        o.disabled = toldi; o.textContent = e.nom + (toldi ? ' (joy qolmagan)' : '');
      });
      if (id && elementTop(id) && qolgan(elementTop(id)) !== 0) select.value = String(id);
    }
  }

  /* ---------- 7. Arizalarim ---------- */
  function saqlanganChiz() {
    var ogoh = $('#ombor-ogoh');
    if (!SAYT.saqlash) {
      ogoh.textContent = 'Saqlash o‘chirilgan (malumot.js: saqlash: false).'; ogoh.hidden = false;
      $('#saqlangan-amallar').hidden = true; tozala($('#yozuvlar')); $('#saqlangan-bosh').hidden = false; return;
    }
    var hammasi = yozuvlar();
    var h = ombor.holat();
    ogoh.textContent = h.ogohlantirish; ogoh.hidden = !h.ogohlantirish;
    $('#saqlangan-amallar').hidden = hammasi.length === 0;
    $('#saqlangan-bosh').hidden = hammasi.length > 0;
    $('#saqlangan-holat').textContent = hammasi.length ? hammasi.length + ' ta ariza' : '';
    var royxat = tozala($('#yozuvlar'));
    var ismNomi = birinchi(['matn']), aloqaNomi = birinchi(['telefon']) || birinchi(['email']);
    hammasi.slice().reverse().forEach(function (y) {
      var e = elementTop(y.element);
      var vaqt = new Date(y.vaqt);
      royxat.appendChild(el('li', { class: 'yozuv' }, [
        el('div', {}, [
          el('p', {}, [el('strong', { matn: e ? e.nom : 'O‘chirilgan element' })]),
          el('p', { class: 'kichik', matn: [y[ismNomi], y[aloqaNomi], isNaN(vaqt) ? '' : vaqt.toLocaleString('uz-UZ')].filter(Boolean).join(' · ') })
        ]),
        el('button', { class: 'tugma xavfli', type: 'button', matn: 'O‘chirish', 'aria-label': (y[ismNomi] || 'Ariza') + ' arizasini o‘chirish',
          onclick: function () {
            if (!confirm('Bu arizani o‘chirasizmi?')) return;
            ombor.ochir(y.id); saqlanganChiz(); xabar('Ariza o‘chirildi');
            var keyingi = $('#yozuvlar button') || $('#saqlangan-bosh a'); if (keyingi) keyingi.focus();
          } })
      ]));
    });
  }

  function saqlanganTayyorla() {
    $('#csv-yukla').addEventListener('click', function () {
      var ustunlar = [{ nom: 'vaqt', yorliq: 'Vaqt' }].concat(maydonlar().map(function (m) { return { nom: m.nom, yorliq: m.yorliq }; }));
      var qatorlar = yozuvlar().map(function (y) { var e = elementTop(y.element); return Object.assign({}, y, { element: e ? e.nom : y.element }); });
      yuklab('arizalar.csv', M.csv(qatorlar, ustunlar), 'text/csv;charset=utf-8');
    });
    $('#json-yukla').addEventListener('click', function () {
      yuklab('arizalar.json', JSON.stringify({ versiya: 1, yozuvlar: yozuvlar() }, null, 2), 'application/json');
    });
    $('#hammasini-ochir').addEventListener('click', function () {
      if (!confirm('Barcha arizalarni o‘chirasizmi? Buni qaytarib bo‘lmaydi.')) return;
      ombor.tozala(); saqlanganChiz(); xabar('Barcha arizalar o‘chirildi');
    });
  }

  /* ---------- 8. Biz haqimizda ---------- */
  function haqidaChiz() {
    var joy = tozala($('#haqida-matn'));
    ((SAYT.haqida && SAYT.haqida.matnlar) || []).forEach(function (m) { joy.appendChild(el('p', { matn: m })); });
    var dl = tozala($('#aloqa'));
    ((SAYT.haqida && SAYT.haqida.aloqa) || []).forEach(function (a) { dl.appendChild(el('dt', { matn: a.nom })); dl.appendChild(el('dd', { matn: a.qiymat })); });
  }

  /* ---------- 9. Ishga tushirish ---------- */
  /** tahrir.html dagi saqlanmagan qoralama (faqat ?qoralama bilan ochilganda). */
  function qoralama() {
    if (!/[?&]qoralama\b/.test(location.search) || !M) return null;
    try {
      var d = JSON.parse(safeStorage().getItem(M.QORALAMA_KALIT));
      return d && d.SAYT && Array.isArray(d.ELEMENTLAR) && d.FORMA ? d : null;
    } catch (e) { return null; }
  }

  function boshla() {
    var q = qoralama();
    SAYT = q ? q.SAYT : window.SAYT; ELEMENTLAR = q ? q.ELEMENTLAR : window.ELEMENTLAR; FORMA = q ? q.FORMA : window.FORMA;
    if (q) document.body.insertBefore(el('p', { class: 'namuna-belgi', matn: 'QORALAMA KO‘RINISHI — hali faylga saqlanmagan (tahrir.html → “Faylga saqlash”)' }), document.body.firstChild);
    if (SAYT && /^#[0-9a-f]{6}$/i.test(SAYT.rang || '')) {
      document.documentElement.style.setProperty('--rang-asosiy', SAYT.rang);
      document.documentElement.style.setProperty('--rang-asosiy-ustida', M.matnRangi(SAYT.rang));
    }
    if (!M || !SAYT || !Array.isArray(ELEMENTLAR) || !FORMA || !Array.isArray(FORMA.maydonlar)) {
      var main = $('#asosiy');
      tozala(main).appendChild(el('div', { class: 'ichki tor ogoh', role: 'alert' }, [
        el('h1', { matn: 'Sayt ma’lumoti o‘qilmadi' }),
        el('p', { matn: 'malumot.js faylida yozuv xatosi bor (ko‘pincha vergul yoki qo‘shtirnoq tushib qolgan). Brauzerda F12 → Console bo‘limida qizil qatordagi fayl va qator raqamini ko‘ring.' })
      ]));
      return;
    }
    ombor = M.ombor(safeStorage(), SAYT.omborKaliti || 'zaxira-arizalar-v1');
    document.querySelectorAll('[data-sayt]').forEach(function (n) { n.textContent = yol(SAYT, n.getAttribute('data-sayt')) || ''; });
    document.querySelectorAll('[data-matn]').forEach(function (n) {
      var k = n.getAttribute('data-matn');
      n.textContent = (k.indexOf('FORMA.') === 0 ? yol(FORMA, k.slice(6)) : yol(SAYT, k)) || '';
    });
    $('#namuna-belgi').hidden = !SAYT.namuna;
    // malumot.js da o'chirilgan sahifaga olib boradigan tayyor havolalar yashiriladi.
    document.querySelectorAll('a[href^="#"]:not([data-skip])').forEach(function (a) {
      var kalit = a.getAttribute('href').slice(1);
      if (kalit && kalit !== 'asosiy' && !yoqilgan(kalit)) a.hidden = true;
    });
    if (!SAYT.saqlash) $('#son-ariza').parentNode.hidden = true;
    $('#yil').textContent = new Date().getFullYear();
    menyuChiz(); royxatTayyorla(); formaChiz(); saqlanganTayyorla(); haqidaChiz();
    window.addEventListener('hashchange', ochish);
    // Boshqa tabda ariza qo'shilsa/o'chsa ro'yxat yangilanadi.
    window.addEventListener('storage', function (e) { if (e.key === (SAYT.omborKaliti || 'zaxira-arizalar-v1')) ochish(); });
    ochish();
  }
  function safeStorage() { try { return window.localStorage || null; } catch (e) { return null; } }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boshla); else boshla();
})();
