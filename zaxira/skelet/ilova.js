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
  /** "Soni" maydoni (FORMA.maydonlar da soni: true) — joy va jami narxga ta'sir qiladi. */
  function soniNomi() {
    for (var i = 0; i < FORMA.maydonlar.length; i++) if (FORMA.maydonlar[i].soni && FORMA.maydonlar[i].tur === 'son') return FORMA.maydonlar[i].nom;
    return null;
  }
  function qolgan(element) { return M.qolganJoy(element, yozuvlar(), 'element', soniNomi()); }
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
    if (sahifa === 'statistika') statistikaChiz();

    var h1 = document.querySelector('[data-sahifa="' + sahifa + '"] h1');
    var nomi = (h1 && h1.textContent) || '';
    document.title = (sahifa === 'bosh' ? SAYT.nomi : nomi + ' — ' + SAYT.nomi);
    if (!holat.birinchi && h1) { h1.setAttribute('tabindex', '-1'); h1.focus(); }
    if (!holat.birinchi) window.scrollTo(0, 0);
    holat.birinchi = false;
  }

  /* ---------- 3. Bosh sahifa ---------- */
  function savollarChiz() {
    var r = Array.isArray(SAYT.savollar) ? SAYT.savollar.filter(function (q) { return q && q.savol; }) : [];
    $('#savollar').hidden = !r.length;
    var joy = tozala($('#savollar-royxat'));
    r.forEach(function (q) { joy.appendChild(el('details', {}, [el('summary', { matn: q.savol }), el('p', { matn: q.javob || '' })])); });
  }

  /** Statistika: arizalar va band joylar har element bo'yicha (admin ko'rinishi). */
  function statistikaChiz() {
    var s = M.statistika(ELEMENTLAR, yozuvlar(), soniNomi());
    var dl = tozala($('#stat-raqamlar'));
    [['Jami arizalar', s.jamiArizalar], [soniNomi() ? 'Band joylar' : null, s.jamiBand], ['Elementlar', ELEMENTLAR.length]].forEach(function (q) {
      if (q[0]) dl.appendChild(el('div', {}, [el('dt', { matn: q[0] }), el('dd', { matn: String(q[1]) })]));
    });
    var t = tozala($('#stat-jadval'));
    t.appendChild(el('thead', {}, [el('tr', {}, [el('th', { scope: 'col', matn: 'Nomi' }), el('th', { scope: 'col', matn: 'Arizalar' }),
      el('th', { scope: 'col', matn: 'Band / sig‘im' }), el('th', { scope: 'col', matn: 'To‘lganlik' })])]));
    var tb = el('tbody');
    s.qatorlar.slice().sort(function (a, b) { return b.band - a.band; }).forEach(function (q) {
      tb.appendChild(el('tr', {}, [el('td', { matn: q.nom }), el('td', { class: 'son', matn: String(q.arizalar) }),
        el('td', { class: 'son', matn: q.band + (q.joylar ? ' / ' + q.joylar : '') }),
        el('td', {}, [q.foiz === null ? el('span', { class: 'kichik', matn: 'cheklanmagan' })
          : el('div', { class: 'stat-chiziq', role: 'img', 'aria-label': q.foiz + '%' }, [el('span', { style: 'width:' + q.foiz + '%' })])])]));
    });
    t.appendChild(tb);
    $('#stat-bosh').hidden = s.jamiArizalar > 0;
  }

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
    select.closest('label').firstChild.textContent = yorliq('turi') + ' ';
    $('#qidiruv').placeholder = (SAYT.royxat && SAYT.royxat.qidiruvMaslahat) || 'Nomi yoki kalit so‘z';
    $('#qidiruv').addEventListener('input', function (e) { holat.qidiruv = e.target.value; royxatChiz(); });
    // Saralash (malumot.js: royxat.saralash = true). Ma'lumotda yo'q mezonlar yashiriladi.
    var sar = $('#saralash');
    $('#saralash-yorliq').hidden = !(SAYT.royxat && SAYT.royxat.saralash);
    var bor = function (k) { return ELEMENTLAR.some(function (e) { return e[k] !== undefined && e[k] !== '' && e[k] !== null; }); };
    Array.prototype.forEach.call(sar.options, function (o) {
      if (/^narx/.test(o.value) && !bor('narx')) o.remove();
      else if (o.value === 'sana' && !bor('sana')) o.remove();
    });
    sar.addEventListener('change', function () { holat.saralash = sar.value; royxatChiz(); });
    select.addEventListener('change', function (e) { holat.turi = e.target.value; royxatChiz(); });
    $('#filtr').addEventListener('submit', function (e) { e.preventDefault(); });
    $('#filtr').addEventListener('reset', function () { setTimeout(function () { holat.qidiruv = ''; holat.turi = 'hammasi'; holat.saralash = 'tavsiya'; royxatChiz(); }, 0); });
    $('#filtr-tozala').addEventListener('click', function () { $('#filtr').reset(); $('#qidiruv').focus(); });
  }

  /** Ro'yxatdagi so'zlar (malumot.js → royxat.yorliqlar); berilmagani standart. */
  var YORLIQ = { turi: 'Turi', sana: 'Sana', vaqt: 'Vaqt', joy: 'Joy', narx: 'Narx', joylar: 'Qolgan joy', toldi: 'Joy qolmagan', tanlash: 'Tanlash' };
  function yorliq(k) { var y = SAYT.royxat && SAYT.royxat.yorliqlar; return (y && y[k]) || YORLIQ[k]; }
  function borNarx(e) { return e.narx !== undefined && e.narx !== null && e.narx !== ''; }
  /** Qo'shimcha maydonlar: { "Muallif": "...", "Davomiyligi": "..." } */
  function qoshimcha(e) {
    var q = e.qoshimcha && typeof e.qoshimcha === 'object' ? e.qoshimcha : {};
    return Object.keys(q).filter(function (k) { return q[k] !== '' && q[k] != null; }).map(function (k) { return [k, String(q[k])]; });
  }

  function karta(e) {
    var joy = qolgan(e);
    var toldi = joy === 0;
    var rasm = e.rasm ? el('img', { src: e.rasm, alt: e.rasmIzoh || '', loading: 'lazy' }) : String(e.nom || '?').charAt(0).toUpperCase();
    var meta = qoshimcha(e).slice(0, 2).map(function (q) { return q[1]; })
      .concat([e.sana ? M.sanaMatn(e.sana) + (e.vaqt ? ', ' + e.vaqt : '') : null, e.joy, borNarx(e) ? M.pul(e.narx) : null])
      .filter(Boolean).join(' · ');
    return el('article', { class: 'karta' }, [
      el('div', { class: 'karta-rasm', 'aria-hidden': e.rasm ? null : 'true' }, [rasm]),
      el('div', { class: 'karta-ichi' }, [
        e.turi ? el('span', { class: 'belgi', matn: e.turi }) : null,
        el('h2', { matn: e.nom }),
        meta ? el('p', { class: 'kichik', matn: meta }) : null,
        isFinite(joy) ? el('span', { class: 'belgi' + (toldi ? ' toldi' : ''), matn: toldi ? yorliq('toldi') : yorliq('joylar') + ': ' + joy }) : null,
        el('div', { class: 'amallar' }, [
          el('a', { class: 'tugma ikkinchi', href: '#element-' + encodeURIComponent(e.id), matn: 'Batafsil', 'aria-label': e.nom + ' — batafsil' }),
          'ariza' in SAYT.sahifalar ? (toldi
            ? el('button', { class: 'tugma', type: 'button', disabled: true, matn: yorliq('toldi') })
            : el('a', { class: 'tugma', href: '#ariza-' + encodeURIComponent(e.id), matn: yorliq('tanlash'), 'aria-label': e.nom + ' — ' + yorliq('tanlash') })) : null
        ])
      ])
    ]);
  }

  function royxatChiz() {
    var natija = M.saralash(M.filtrla(ELEMENTLAR, holat), holat.saralash);
    var joy = tozala($('#kartalar'));
    natija.forEach(function (e) { joy.appendChild(karta(e)); });
    $('#royxat-bosh').hidden = natija.length > 0;
    $('#royxat-holat').textContent = natija.length + ' ta natija' + (natija.length !== ELEMENTLAR.length ? ' (jami ' + ELEMENTLAR.length + ')' : '');
  }

  /* ---------- 5. Tafsilot ---------- */
  function tafsilotChiz(e) {
    var joy = qolgan(e);
    var qatorlar = qoshimcha(e).concat([[yorliq('turi'), e.turi], [yorliq('sana'), e.sana && M.sanaMatn(e.sana)], [yorliq('vaqt'), e.vaqt], [yorliq('joy'), e.joy],
      [yorliq('narx'), borNarx(e) ? M.pul(e.narx) : null], [yorliq('joylar'), isFinite(joy) ? String(joy) : null]]);
    var dl = el('dl');
    qatorlar.forEach(function (q) { if (q[1]) { dl.appendChild(el('dt', { matn: q[0] })); dl.appendChild(el('dd', { matn: q[1] })); } });
    tozala($('#tafsilot')).appendChild(el('div', {}, [
      el('a', { class: 'orqaga', href: '#royxat', matn: '← Ro‘yxatga qaytish' }),
      el('h1', { id: 'element-h', matn: e.nom }),
      e.rasm ? el('img', { src: e.rasm, alt: e.rasmIzoh || '' }) : null,
      e.tavsif ? el('p', { class: 'katta-matn', matn: e.tavsif }) : null,
      dl,
      'ariza' in SAYT.sahifalar ? el('div', { class: 'amallar' }, [joy === 0
        ? el('button', { class: 'tugma', type: 'button', disabled: true, matn: yorliq('toldi') })
        : el('a', { class: 'tugma', href: '#ariza-' + encodeURIComponent(e.id), matn: yorliq('tanlash') })]) : null
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
          min: m.tur === 'sana' && m.otmishEmas ? M.bugun() : (m.tur === 'son' ? (m.soni ? Math.max(1, m.min || 1) : m.min) : null), step: m.tur === 'son' && m.soni ? 1 : null, max: m.tur === 'son' ? m.max : null }, umumiy));
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
    if (FORMA.jamiKorsat) {
      forma.appendChild(el('p', { class: 'jami', id: 'jami', 'aria-live': 'polite' }));
      forma.addEventListener('input', jamiYangila); forma.addEventListener('change', jamiYangila);
    }
    forma.appendChild(el('div', { class: 'amallar' }, [el('button', { class: 'tugma', type: 'submit', matn: FORMA.tugma || 'Yuborish' })]));
    forma.addEventListener('submit', yuborish);
  }

  /** Tanlangan element narxi × soni. */
  function jamiHisobla() {
    var e = elementTop(($('#f-element') || {}).value);
    var sn = soniNomi();
    return M.jamiNarx(e, sn && $('#f-' + sn) ? $('#f-' + sn).value : 1);
  }
  function jamiYangila() {
    var p = $('#jami'); if (!p) return;
    var j = jamiHisobla();
    p.textContent = j === null ? '' : (FORMA.jamiYorliq || 'Jami') + ': ' + M.pul(j);
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
    var kerak = M.yozuvSoni(n.toza, soniNomi());
    var qoldi = tanlangan ? qolgan(tanlangan) : Infinity;
    if (tanlangan && !n.xatolar.element && qoldi === 0) n.xatolar.element = FORMA.toldiXato;
    else if (tanlangan && !n.xatolar.element && qoldi < kerak) n.xatolar[soniNomi()] = 'Faqat ' + qoldi + ' ta joy qolgan.';
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
    if (FORMA.jamiKorsat) { var jm = jamiHisobla(); if (jm !== null) yozuv.jami = jm; }
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
    if (yozuv.jami != null) { dl.appendChild(el('dt', { matn: FORMA.jamiYorliq || 'Jami' })); dl.appendChild(el('dd', { matn: M.pul(yozuv.jami) })); }
    panel.appendChild(dl);
    panel.appendChild(el('p', { class: 'kichik', matn: SAYT.saqlash
      ? (saqlandi.ok ? 'Shu brauzerda saqlandi.' : 'Faqat sahifa ochiq turganda saqlanadi — brauzer xotirasi yopiq.')
      : 'Sinov rejimi: ma’lumot hech qayerga yuborilmadi.' }));
    panel.appendChild(el('div', { class: 'amallar' }, [
      'saqlangan' in SAYT.sahifalar && SAYT.saqlash ? el('a', { class: 'tugma', href: '#saqlangan', matn: SAYT.saqlangan.sarlavha + ' →' }) : null,
      el('button', { class: 'tugma ikkinchi', type: 'button', matn: 'Yana yuborish', onclick: function () { arizaOch(null, true); $('#f-' + FORMA.maydonlar[0].nom).focus(); } })
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
        o.disabled = toldi; o.textContent = e.nom + (toldi ? ' (' + yorliq('toldi').toLowerCase() + ')' : '');
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
    $('#saqlangan-holat').textContent = hammasi.length ? hammasi.length + ' ta yozuv' : '';
    var royxat = tozala($('#yozuvlar'));
    var ismNomi = birinchi(['matn']);
    hammasi.slice().reverse().forEach(function (y) {
      var e = elementTop(y.element);
      var vaqt = new Date(y.vaqt);
      royxat.appendChild(el('li', { class: 'yozuv' }, [
        el('div', {}, [
          el('p', {}, [el('strong', { matn: e ? e.nom : 'O‘chirilgan element' })]),
          el('p', { matn: maydonlar().filter(function (m) { return m.nom !== 'element' && m.tur !== 'belgi' && y[m.nom] !== '' && y[m.nom] != null; })
            .map(function (m) { return m.tur === 'sana' ? m.yorliq + ': ' + M.sanaMatn(y[m.nom]) : String(y[m.nom]); }).join(' · ') }),
          el('p', { class: 'kichik', matn: isNaN(vaqt) ? '' : 'Yuborilgan: ' + vaqt.toLocaleString('uz-UZ') })
        ]),
        el('button', { class: 'tugma xavfli', type: 'button', matn: SAYT.saqlangan.ochirish, 'aria-label': (y[ismNomi] || (e ? e.nom : 'Yozuv')) + ' — ' + SAYT.saqlangan.ochirish,
          onclick: function () {
            if (!confirm('Bu yozuvni o‘chirasizmi?')) return;
            ombor.ochir(y.id); saqlanganChiz(); xabar('O‘chirildi');
            var keyingi = $('#yozuvlar button') || $('#saqlangan-bosh a'); if (keyingi) keyingi.focus();
          } })
      ]));
    });
  }

  function saqlanganTayyorla() {
    $('#csv-yukla').addEventListener('click', function () {
      var ustunlar = [{ nom: 'vaqt', yorliq: 'Vaqt' }].concat(maydonlar().map(function (m) { return { nom: m.nom, yorliq: m.yorliq }; }))
        .concat(FORMA.jamiKorsat ? [{ nom: 'jami', yorliq: FORMA.jamiYorliq || 'Jami' }] : []);
      var qatorlar = yozuvlar().map(function (y) { var e = elementTop(y.element); return Object.assign({}, y, { element: e ? e.nom : y.element }); });
      yuklab('arizalar.csv', M.csv(qatorlar, ustunlar), 'text/csv;charset=utf-8');
    });
    $('#json-yukla').addEventListener('click', function () {
      yuklab('arizalar.json', JSON.stringify({ versiya: 1, yozuvlar: yozuvlar() }, null, 2), 'application/json');
    });
    $('#hammasini-ochir').addEventListener('click', function () {
      if (!confirm('Barcha yozuvlarni o‘chirasizmi? Buni qaytarib bo‘lmaydi.')) return;
      ombor.tozala(); saqlanganChiz(); xabar('Hammasi o‘chirildi');
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
      var key = M.qoralamaKaliti(location.href, { SAYT: window.SAYT, ELEMENTLAR: window.ELEMENTLAR, FORMA: window.FORMA });
      var previewKey = new URLSearchParams(location.search).get('qoralamaKey');
      if (previewKey && previewKey.indexOf(key + ':yangi:') === 0) key = previewKey;
      var d = JSON.parse(safeStorage().getItem(key));
      return d && d.SAYT && Array.isArray(d.ELEMENTLAR) && d.FORMA ? d : null;
    } catch (e) { return null; }
  }

  function boshla() {
    var q = qoralama();
    SAYT = q ? q.SAYT : window.SAYT; ELEMENTLAR = q ? q.ELEMENTLAR : window.ELEMENTLAR; FORMA = q ? q.FORMA : window.FORMA;
    if (q) document.body.insertBefore(el('p', { class: 'namuna-belgi', matn: 'QORALAMA KO‘RINISHI — hali faylga saqlanmagan (tahrir.html → “Faylga saqlash”)' }), document.body.firstChild);
    mavzuQolla(SAYT);
    if (!M || !SAYT || !Array.isArray(ELEMENTLAR) || !FORMA || !Array.isArray(FORMA.maydonlar)) {
      var main = $('#asosiy');
      tozala(main).appendChild(el('div', { class: 'ichki tor ogoh', role: 'alert' }, [
        el('h1', { matn: 'Sayt ma’lumoti o‘qilmadi' }),
        el('p', { matn: 'malumot.js faylida yozuv xatosi bor (ko‘pincha vergul yoki qo‘shtirnoq tushib qolgan). Brauzerda F12 → Console bo‘limida qizil qatordagi fayl va qator raqamini ko‘ring.' })
      ]));
      return;
    }
    ombor = M.ombor(safeStorage(), SAYT.omborKaliti || 'zaxira-arizalar-v1');
    if (!SAYT.savollarSarlavha) SAYT.savollarSarlavha = 'Ko‘p beriladigan savollar';
    var saq = { sarlavha: (SAYT.sahifalar || {}).saqlangan || 'Saqlanganlar', bosh: 'Hali hech narsa yo‘q.', ochirish: 'O‘chirish' };
    Object.keys(saq).forEach(function (k) { if (SAYT.saqlangan && SAYT.saqlangan[k]) saq[k] = SAYT.saqlangan[k]; });
    SAYT.saqlangan = saq;
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
    boshRasm(); savollarChiz(); menyuChiz(); royxatTayyorla(); formaChiz(); saqlanganTayyorla(); haqidaChiz();
    window.addEventListener('hashchange', ochish);
    // Boshqa tabda ariza qo'shilsa/o'chsa ro'yxat yangilanadi.
    window.addEventListener('storage', function (e) { if (e.key === (SAYT.omborKaliti || 'zaxira-arizalar-v1')) ochish(); });
    ochish();
  }
  function safeStorage() { try { return window.localStorage || null; } catch (e) { return null; } }

  /** Mavzu (SAYT.mavzu) va ixtiyoriy asosiy rang (SAYT.rang). Rang bo'sh bo'lsa mavzu rangi qoladi. */
  function mavzuQolla(sayt) {
    var html = document.documentElement;
    var mavzu = sayt && /^[a-z]+$/.test(sayt.mavzu || '') ? sayt.mavzu : 'toza';
    html.setAttribute('data-mavzu', mavzu);
    if (M && sayt && /^#[0-9a-f]{6}$/i.test(sayt.rang || '')) {
      html.style.setProperty('--rang-asosiy', sayt.rang);
      html.style.setProperty('--rang-asosiy-ustida', M.matnRangi(sayt.rang));
      html.style.setProperty('--rang-asosiy-och', 'color-mix(in srgb, ' + sayt.rang + ' 16%, var(--rang-fon))');
    }
    // Shriftlar yuklanishini kutib, sahifani ko'rsatamiz (ko'pi bilan 1,5 soniya).
    var korsat = function () { html.classList.remove('kutish'); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(korsat, korsat); else korsat();
    setTimeout(korsat, 600);
  }

  /** Bosh sahifa rasmi (SAYT.bosh.rasm): matn rasm ustida, kartasiz. */
  function boshRasm() {
    var rasm = SAYT.bosh && SAYT.bosh.rasm;
    var q = $('.qahramon');
    var eski = q.querySelector('img.qahramon-rasm');
    if (eski) eski.remove();
    q.classList.toggle('rasmli', !!rasm);
    if (rasm) q.insertBefore(el('img', { class: 'qahramon-rasm', src: rasm, alt: SAYT.bosh.rasmIzoh || '' }), q.firstChild);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boshla); else boshla();
})();
