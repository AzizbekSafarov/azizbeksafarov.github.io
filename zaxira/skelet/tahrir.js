/* =====================================================================
   TAHRIR.JS — kodsiz tahrirlash paneli (tahrir.html).
   malumot.js dagi mazmunni formalar orqali o'zgartiradi, natijani
   iframe'da ko'rsatadi va malumot.js ni har doim to'g'ri yozilgan
   holda saqlaydi. Sayt kodi (ilova.js) bu faylga bog'liq emas.
   ===================================================================== */
(function () {
  'use strict';
  var M = window.Mantiq;
  var $ = function (s) { return document.querySelector(s); };
  var d, draftKalit, fayl = null, kechikish = null, ochirilganNomlar = {};

  var SAHIFALAR = [['bosh', 'Bosh sahifa'], ['royxat', 'Ro‘yxat'], ['ariza', 'Ariza'], ['saqlangan', 'Arizalarim'], ['statistika', 'Statistika'], ['haqida', 'Biz haqimizda']];
  var MAVZULAR = [['toza', 'Toza — oddiy, universal'], ['forma', 'Forma — do‘kon, mahsulot, qora-oq'], ['samar', 'Samar — sayohat, madaniyat, iliq'],
    ['orbita', 'Orbita — texnika, IT, qorong‘i'], ['nashr', 'Nashr — yangilik, gazeta'], ['hisob', 'Hisob — xizmat, hisobot, raqamlar'],
    ['ziyo', 'Ziyo — ta’lim, bolalar, iliq'], ['meros', 'Meros — muzey, tadbir, yorqin plakat'], ['yuksal', 'Yuksal — rasmiy tashkilot, to‘q ko‘k']];
  var TURLAR = [['matn', 'Qisqa matn'], ['matnmaydon', 'Uzun matn'], ['telefon', 'Telefon'], ['email', 'Email'], ['son', 'Son'],
    ['sana', 'Sana'], ['element', 'Ro‘yxatdan tanlash'], ['tanlash', 'O‘z variantlari'], ['belgi', 'Belgilash (rozilik)']];

  function nusxa(q) { return JSON.parse(JSON.stringify(q)); }
  function fayldagi() { return nusxa({ SAYT: window.SAYT, ELEMENTLAR: window.ELEMENTLAR, FORMA: window.FORMA }); }

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
    [].concat(bolalar || []).forEach(function (b) { if (b != null) e.appendChild(typeof b === 'string' ? document.createTextNode(b) : b); });
    return e;
  }
  function holat(matn) { $('#t-holat').textContent = matn; }

  /* ---------- Saqlash va oldindan ko'rish ---------- */
  function ozgardi() {
    try { localStorage.setItem(draftKalit, JSON.stringify(d)); } catch (e) { /* ko'rish yangilanmasa ham ish davom etadi */ }
    holat('Saqlanmagan o‘zgarishlar bor — “Faylga saqlash” ni bosing.');
    clearTimeout(kechikish); kechikish = setTimeout(korish, 500);
  }

  function korish() {
    var f = $('#t-iframe'), hash = '';
    try { hash = f.contentWindow.location.hash; } catch (e) { /* fayl rejimida o'qib bo'lmaydi */ }
    f.src = 'index.html?qoralama&qoralamaKey=' + encodeURIComponent(draftKalit) + '&t=' + Date.now() + (hash || '');
  }

  function xatolar() {
    var x = [];
    var S = d.SAYT, F = d.FORMA;
    if (!String(S.nomi || '').trim()) x.push('Sayt nomi bo‘sh.');
    if (S.rang && !/^#[0-9a-f]{6}$/i.test(S.rang)) x.push('O‘z rangingiz #RRGGBB ko‘rinishida bo‘lsin yoki bo‘sh qolsin.');
    if (!Object.keys(S.sahifalar || {}).length) x.push('Kamida bitta sahifa yoqilgan bo‘lsin.');
    var idlar = {};
    d.ELEMENTLAR.forEach(function (e, i) {
      if (!String(e.nom || '').trim()) x.push('Ro‘yxat ' + (i + 1) + '-element: nomi bo‘sh.');
      if (idlar[e.id]) x.push('Ro‘yxat: takroriy id ' + e.id); idlar[e.id] = true;
      if (e.sana && !/^\d{4}-\d{2}-\d{2}$/.test(e.sana)) x.push((e.nom || (i + 1) + '-element') + ': sana noto‘g‘ri.');
    });
    var nomlar = {};
    if (!F.maydonlar.length) x.push('Formada kamida bitta maydon bo‘lsin.');
    F.maydonlar.forEach(function (m, i) {
      if (!String(m.yorliq || '').trim()) x.push('Forma ' + (i + 1) + '-maydon: nomi bo‘sh.');
      if (nomlar[m.nom]) x.push('Forma: ikki maydonning ichki nomi bir xil (' + m.nom + ').'); nomlar[m.nom] = true;
      if (M.ichkiNom(m.nom)) x.push('Forma: “' + m.yorliq + '” ichki nomi band (' + m.nom + '). Maydon nomini panelda qayta yozing.');
      if (m.tur === 'tanlash' && m.nom !== 'element' && !(m.variantlar || []).length) x.push((m.yorliq || 'Tanlash') + ': variantlar yozilmagan.');
      if (m.nom === 'element' && !d.ELEMENTLAR.length) x.push('“Ro‘yxatdan tanlash” maydoni bor, lekin ro‘yxat bo‘sh.');
    });
    return x;
  }

  function xatoKorsat() {
    var x = xatolar(), joy = $('#t-xatolar');
    while (joy.firstChild) joy.removeChild(joy.firstChild);
    joy.hidden = !x.length;
    if (x.length) { joy.appendChild(el('strong', { matn: 'Saqlashdan oldin tuzating:' })); joy.appendChild(el('ul', {}, x.map(function (t) { return el('li', { matn: t }); }))); }
    return x;
  }

  function saqla() {
    if (xatoKorsat().length) { holat('Saqlanmadi: xatolarni tuzating.'); $('#t-xatolar').scrollIntoView({ block: 'center' }); return; }
    var matn = M.malumotYoz(d);
    var yuklab = function () {
      var a = el('a', { href: URL.createObjectURL(new Blob([matn], { type: 'text/javascript' })), download: 'malumot.js' });
      document.body.appendChild(a); a.click(); a.remove();
      holat('“Yuklanmalar” papkasiga malumot.js tushdi. Uni shu sayt papkasiga ko‘chirib, eskisini almashtiring.');
    };
    var yoz = function (h) {
      return h.createWritable().then(function (w) { return w.write(matn).then(function () { return w.close(); }); })
        .then(function () { fayl = h; holat('Saqlandi: ' + h.name + ' — saytni Ctrl+Shift+R bilan yangilang.'); });
    };
    if (fayl) { yoz(fayl).catch(function () { fayl = null; saqla(); }); return; }
    if (!window.showSaveFilePicker) { yuklab(); return; }
    window.showSaveFilePicker({ suggestedName: 'malumot.js', types: [{ description: 'JavaScript', accept: { 'text/javascript': ['.js'] } }] })
      .then(yoz).catch(function (e) { if (e && e.name === 'AbortError') holat('Saqlash bekor qilindi.'); else yuklab(); });
  }

  /* ---------- Forma qismlari ---------- */
  function kirish(yorliq, olish, qoyish, o) {
    o = o || {};
    var id = 't' + Math.random().toString(36).slice(2, 9), e;
    if (o.tur === 'textarea') e = el('textarea', { id: id, rows: o.qator || 3 });
    else if (o.tur === 'select') { e = el('select', { id: id }); o.variantlar.forEach(function (v) { e.appendChild(el('option', { value: v[0], matn: v[1] })); }); }
    else e = el('input', { id: id, type: o.tur || 'text', min: o.min, step: o.qadam });
    if (o.tur === 'checkbox') e.checked = !!olish(); else e.value = olish() == null ? '' : olish();
    e.addEventListener(o.tur === 'checkbox' || o.tur === 'select' ? 'change' : 'input', function () {
      var q = o.tur === 'checkbox' ? e.checked : e.value;
      if (o.tur === 'number') q = e.value === '' ? null : Number(e.value);
      qoyish(q); ozgardi(); if (o.keyin) o.keyin(q);
    });
    if (o.tur === 'checkbox') return el('label', { for: id, class: 't-belgi' }, [e, yorliq]);
    return el('label', { for: id }, [yorliq, o.maslahat ? el('span', { class: 'kichik', matn: o.maslahat }) : null, e]);
  }
  function maydon(obyekt, kalit, yorliq, o) {
    return kirish(yorliq, function () { return obyekt[kalit]; }, function (q) { if (q === null) delete obyekt[kalit]; else obyekt[kalit] = q; }, o);
  }
  function blok(sarlavha, izoh, bolalar) {
    return el('section', { class: 't-blok' }, [el('h2', { matn: sarlavha }), izoh ? el('p', { matn: izoh }) : null].concat(bolalar));
  }

  /** Ro'yxat tahriri: har element kartochkada, ↑ ↓ va o'chirish bilan. */
  function royxat(massiv, nomi, yangi, chiz, qayta) {
    var joy = el('div');
    massiv.forEach(function (q, i) {
      var tugma = function (matn, belgi, amal, faol) {
        return el('button', { type: 'button', class: 'tugma ikkinchi t-kichik', 'aria-label': matn, disabled: !faol, matn: belgi, onclick: function () { amal(); ozgardi(); qayta(); } });
      };
      joy.appendChild(el('div', { class: 't-kartochka' }, [
        el('div', { class: 't-kartochka-bosh' }, [el('strong', { matn: nomi(q, i) }),
          tugma('Yuqoriga', '↑', function () { massiv.splice(i - 1, 0, massiv.splice(i, 1)[0]); }, i > 0),
          tugma('Pastga', '↓', function () { massiv.splice(i + 1, 0, massiv.splice(i, 1)[0]); }, i < massiv.length - 1),
          tugma('O‘chirish', 'O‘chirish', function () { massiv.splice(i, 1); }, true)])
      ].concat(chiz(q, i))));
    });
    joy.appendChild(el('button', { type: 'button', class: 'tugma ikkinchi', matn: '+ Qo‘shish', onclick: function () { massiv.push(yangi()); ozgardi(); qayta(); } }));
    return joy;
  }

  /** Qo'shimcha ustunlar (Muallif, O'qituvchi...): ro'yxat sozlamasi + elementlarda uchraganlari. */
  function ustunlar() {
    var r = d.SAYT.royxat, natija = (r.ustunlar || []).slice();
    d.ELEMENTLAR.forEach(function (e) { Object.keys(e.qoshimcha || {}).forEach(function (k) { if (natija.indexOf(k) === -1) natija.push(k); }); });
    return natija;
  }
  /** Ustunlar ro'yxati o'zgarganda: o'chganini olib tashlaydi, o'rni bo'yicha nomi o'zgarganini ko'chiradi. */
  function ustunlarniOzgartir(yangi) {
    var eski = ustunlar();
    d.ELEMENTLAR.forEach(function (e) {
      var q = e.qoshimcha || {}, t = {};
      yangi.forEach(function (nom, i) {
        if (nom in q) t[nom] = q[nom];
        else if (eski.length === yangi.length && eski[i] in q && yangi.indexOf(eski[i]) === -1) t[nom] = q[eski[i]];
      });
      if (Object.keys(t).length) e.qoshimcha = t; else delete e.qoshimcha;
    });
    d.SAYT.royxat.ustunlar = yangi;
  }

  function yangiId() {
    var n = d.ELEMENTLAR.length + 1, band = d.ELEMENTLAR.map(function (e) { return String(e.id); });
    while (band.indexOf('e' + n) !== -1) n++;
    return 'e' + n;
  }

  /* ---------- Bo'limlar ---------- */
  function chiz() {
    var S = d.SAYT, F = d.FORMA, joy = $('#t-maydonlar');
    var ochiq = Array.prototype.map.call(joy.querySelectorAll('details'), function (x) { return x.open; });
    while (joy.firstChild) joy.removeChild(joy.firstChild);
    S.bosh = S.bosh || { afzalliklar: [] }; S.royxat = S.royxat || {}; S.haqida = S.haqida || { matnlar: [], aloqa: [] };

    var rangMatn = maydon(S, 'rang', 'O‘z rangingiz', { maslahat: '#RRGGBB; bo‘sh = mavzu rangi', keyin: function (q) { if (/^#[0-9a-f]{6}$/i.test(q)) rang.value = q; } });
    var rang = el('input', { type: 'color', value: /^#[0-9a-f]{6}$/i.test(S.rang || '') ? S.rang : '#1d4ed8', 'aria-label': 'Asosiy rangni tanlash',
      oninput: function () { S.rang = rang.value; rangMatn.querySelector('input').value = rang.value; ozgardi(); } });
    var rangTozala = el('button', { type: 'button', class: 'tugma ikkinchi t-kichik', matn: 'Mavzu rangiga qaytish',
      onclick: function () { S.rang = ''; rangMatn.querySelector('input').value = ''; ozgardi(); } });
    joy.appendChild(blok('1. Asosiy', 'Sayt nomi, shior va ko‘rinish (mavzu).', [
      // Har sayt o'z xotira kalitini oladi: bir kompyuterdagi mashq saytlarining yozuvlari aralashmaydi.
      maydon(S, 'nomi', 'Sayt nomi', { keyin: function (q) { if (!S.omborKaliti || /^(zaxira|sayt)-/.test(S.omborKaliti)) S.omborKaliti = 'sayt-' + M.nomYasa(q); } }),
      maydon(S, 'shior', 'Shior (bir jumla)'), maydon(S, 'tavsif', 'Tavsif', { tur: 'textarea' }),
      maydon(S, 'mavzu', 'Mavzu (ko‘rinish)', { tur: 'select', variantlar: MAVZULAR }),
      el('div', { class: 't-rang' }, [rang, rangMatn, rangTozala]),
      maydon(S, 'namuna', '“Namuna ma’lumot” ogohlantirishi ko‘rinsin (tayyor bo‘lganda o‘chiring)', { tur: 'checkbox' }),
      maydon(S, 'saqlash', 'Arizalar brauzerda saqlansin (“Arizalarim” sahifasi ishlaydi)', { tur: 'checkbox' }),
      maydon(S, 'pastki', 'Sahifa pastidagi matn', { tur: 'textarea', qator: 2 })
    ]));

    joy.appendChild(blok('2. Sahifalar va menyu', 'Biletga keraksiz sahifani o‘chiring. Menyudagi nomini o‘zgartirish mumkin.', SAHIFALAR.map(function (p) {
      var yoq = p[0] in S.sahifalar;
      return el('div', { class: 't-qator' }, [
        kirish(p[1] + ' yoqilgan', function () { return yoq; }, function (q) {
          if (q) { S.sahifalar[p[0]] = ochirilganNomlar[p[0]] || p[1]; }
          else { ochirilganNomlar[p[0]] = S.sahifalar[p[0]]; delete S.sahifalar[p[0]]; }
          var tartib = {}; SAHIFALAR.forEach(function (x) { if (x[0] in S.sahifalar) tartib[x[0]] = S.sahifalar[x[0]]; }); S.sahifalar = tartib;
        }, { tur: 'checkbox', keyin: chiz }),
        yoq ? maydon(S.sahifalar, p[0], 'Menyudagi nomi') : null
      ]);
    })));

    S.bosh.afzalliklar = S.bosh.afzalliklar || [];
    joy.appendChild(blok('3. Bosh sahifa', null, [
      maydon(S.bosh, 'sarlavha', 'Katta sarlavha'), maydon(S.bosh, 'matn', 'Sarlavha ostidagi matn', { tur: 'textarea' }),
      el('div', { class: 't-qator' }, [maydon(S.bosh, 'rasm', 'Bosh ekran rasmi (ixtiyoriy)', { maslahat: 'masalan: rasmlar/bosh.jpg' }),
        maydon(S.bosh, 'rasmIzoh', 'Rasmda nima bor')]),
      el('div', { class: 't-qator' }, [maydon(S.bosh, 'asosiyTugma', 'Birinchi tugma'), maydon(S.bosh, 'ikkinchiTugma', 'Ikkinchi tugma')]),
      el('h3', { matn: 'Afzalliklar (kartochkalar)' }),
      royxat(S.bosh.afzalliklar, function (a, i) { return (i + 1) + '. ' + (a.sarlavha || ''); }, function () { return { sarlavha: 'Yangi afzallik', matn: '' }; },
        function (a) { return [maydon(a, 'sarlavha', 'Sarlavha'), maydon(a, 'matn', 'Matn', { tur: 'textarea', qator: 2 })]; }, chiz)
    ]));

    var jadval = el('textarea', { rows: 5, id: 't-jadval', placeholder: 'Nomi\tSana\tVaqt\tJoy\nBirinchi\t05.12.2026\t10:00\t1-xona' });
    var jadvalHolat = el('p', { class: 'kichik', role: 'status' });
    var jadvalQosh = function (almashtir) {
      var n = M.jadvalOqi(jadval.value);
      if (n.xato) { jadvalHolat.textContent = n.xato; return; }
      if (almashtir && !confirm('Ro‘yxatdagi ' + d.ELEMENTLAR.length + ' ta element o‘chirilib, jadvaldagi ' + n.elementlar.length + ' ta bilan almashtirilsinmi?')) return;
      if (almashtir) d.ELEMENTLAR.length = 0;
      n.elementlar.forEach(function (e) { e.id = yangiId(); d.ELEMENTLAR.push(e); });
      jadval.value = ''; ozgardi(); chiz();
      holat(n.elementlar.length + ' ta element qo‘shildi.' + (n.tanilmagan.length ? ' Qo‘shimcha ustun sifatida qo‘shildi: ' + n.tanilmagan.join(', ') + '.' : ''));
    };
    S.royxat.yorliqlar = S.royxat.yorliqlar || {};
    var Y = S.royxat.yorliqlar, ust = ustunlar();
    var ustunMaydoni = kirish('Qo‘shimcha ustunlar (har qatorda bittasi: Muallif, O‘qituvchi, Davomiyligi…)',
      function () { return ust.join('\n'); },
      function (q) { ustunlarniOzgartir(q.split('\n').map(function (s) { return s.trim(); }).filter(Boolean)); },
      { tur: 'textarea', qator: 2 });
    ustunMaydoni.querySelector('textarea').addEventListener('change', chiz);
    joy.appendChild(blok('4. Ro‘yxat', 'Biletdagi jadval (kurslar, tadbirlar, mahsulotlar, xizmatlar…). Nom, sana va narxni biletdagidek aynan yozing.', [
      maydon(S.royxat, 'sarlavha', 'Sahifa sarlavhasi'), maydon(S.royxat, 'matn', 'Sarlavha ostidagi matn'),
      maydon(S.royxat, 'bosh', 'Hech narsa topilmaganda chiqadigan matn'),
      maydon(S.royxat, 'qidiruvMaslahat', 'Qidiruv maydonidagi maslahat', { maslahat: 'masalan: Mahsulot nomi yoki kalit so‘z' }),
      maydon(S.royxat, 'saralash', 'Saralash tanlovini ko‘rsatish (nom, sana, narx)', { tur: 'checkbox' }),
      el('details', {}, [el('summary', { matn: 'Ustun nomlari va tugma matnlari (mavzuga moslash)' }),
        el('p', { class: 'kichik', matn: 'Masalan mahsulotlar uchun: Turi → Kategoriya, Qolgan joy → Omborda, Joy qolmagan → Tugagan, Tanlash → Buyurtma berish.' }),
        el('div', { class: 't-qator' }, [maydon(Y, 'turi', 'Turi', { maslahat: 'standart: Turi' }), maydon(Y, 'joy', 'Joy', { maslahat: 'standart: Joy' })]),
        el('div', { class: 't-qator' }, [maydon(Y, 'sana', 'Sana', { maslahat: 'standart: Sana' }), maydon(Y, 'vaqt', 'Vaqt', { maslahat: 'standart: Vaqt' })]),
        el('div', { class: 't-qator' }, [maydon(Y, 'narx', 'Narx', { maslahat: 'standart: Narx' }), maydon(Y, 'joylar', 'Qolgan joy', { maslahat: 'standart: Qolgan joy' })]),
        el('div', { class: 't-qator' }, [maydon(Y, 'toldi', 'Joy qolmagan', { maslahat: 'standart: Joy qolmagan' }), maydon(Y, 'tanlash', 'Tanlash tugmasi', { maslahat: 'standart: Tanlash' })])]),
      ustunMaydoni,
      el('details', {}, [el('summary', { matn: 'Jadvaldan qo‘shish (Word/Excel’dan nusxalab qo‘ying)' }),
        el('p', { class: 'kichik', matn: 'Birinchi qatorda ustun nomlari bo‘lsin: Nomi, Turi, Sana, Vaqt, Joy, Narx, Joylar, Tavsif. Ajratuvchi: Tab, ; yoki |.' }),
        el('label', { for: 't-jadval' }, ['Jadval matni', jadval]),
        el('div', { class: 'amallar' }, [
          el('button', { type: 'button', class: 'tugma ikkinchi', matn: 'Ro‘yxat oxiriga qo‘shish', onclick: function () { jadvalQosh(false); } }),
          el('button', { type: 'button', class: 'tugma xavfli', matn: 'Ro‘yxatni almashtirish', onclick: function () { jadvalQosh(true); } })]),
        jadvalHolat]),
      royxat(d.ELEMENTLAR, function (e, i) { return (i + 1) + '. ' + (e.nom || '(nomsiz)'); },
        function () { return { id: yangiId(), nom: 'Yangi element', turi: '', sana: '', vaqt: '', joy: '', joylar: 0, tavsif: '' }; },
        function (e) {
          var qosh = ust.length ? el('div', { class: 't-qator' }, ust.map(function (k) {
            return kirish(k, function () { return (e.qoshimcha || {})[k]; }, function (q) {
              e.qoshimcha = e.qoshimcha || {}; if (q === '') delete e.qoshimcha[k]; else e.qoshimcha[k] = q;
              var tartib = {}; ust.forEach(function (u) { if (u in e.qoshimcha) tartib[u] = e.qoshimcha[u]; });
              if (Object.keys(tartib).length) e.qoshimcha = tartib; else delete e.qoshimcha;
            });
          })) : null;
          return [maydon(e, 'nom', 'Nomi'), qosh,
            el('div', { class: 't-qator' }, [maydon(e, 'turi', (Y.turi || 'Turi') + ' (filtr uchun)'), maydon(e, 'joy', Y.joy || 'Joy / manzil')]),
            el('div', { class: 't-qator' }, [maydon(e, 'sana', Y.sana || 'Sana', { tur: 'date' }), maydon(e, 'vaqt', Y.vaqt || 'Vaqt', { tur: 'time' })]),
            el('div', { class: 't-qator' }, [maydon(e, 'narx', (Y.narx || 'Narx') + ', so‘m (bo‘sh = ko‘rsatilmaydi, 0 = Bepul)', { tur: 'number', min: 0 }),
              maydon(e, 'joylar', 'Sig‘im / soni (0 = cheklanmagan)', { tur: 'number', min: 0 })]),
            maydon(e, 'tavsif', 'Tavsif', { tur: 'textarea', qator: 2 }),
            maydon(e, 'rasm', 'Rasm fayli (ixtiyoriy)', { maslahat: 'masalan: rasmlar/1.jpg — rasmni sayt papkasidagi “rasmlar” ichiga qo‘ying' }),
            e.rasm ? maydon(e, 'rasmIzoh', 'Rasmda nima bor (ko‘rmaydiganlar uchun)') : null];
        }, chiz)
    ]));

    joy.appendChild(blok('5. Ariza formasi', 'Biletdagi majburiy maydonlarni “Majburiy” deb belgilang. Bo‘sh yoki noto‘g‘ri yuborilsa sayt o‘zi xato ko‘rsatadi.', [
      maydon(F, 'sarlavha', 'Forma sarlavhasi'), maydon(F, 'matn', 'Forma ostidagi matn'),
      el('div', { class: 't-qator' }, [maydon(F, 'tugma', 'Yuborish tugmasi'), maydon(F, 'muvaffaqiyat', 'Muvaffaqiyat xabari')]),
      el('div', { class: 't-qator' }, [maydon(F, 'takrorXato', 'Takror yuborilganda xabar'), maydon(F, 'toldiXato', 'Joy/nusxa qolmaganda xabar')]),
      el('div', { class: 't-qator' }, [maydon(F, 'jamiKorsat', 'Jami narxni hisoblash (narx × soni)', { tur: 'checkbox' }), maydon(F, 'jamiYorliq', 'Jami yozuvi', { maslahat: 'masalan: Jami / To‘lov' })]),
      el('details', {}, [el('summary', { matn: 'Saqlanganlar sahifasi matnlari' }),
        el('div', { class: 't-qator' }, [maydon(S.saqlangan = S.saqlangan || {}, 'sarlavha', 'Sarlavha', { maslahat: 'bo‘sh bo‘lsa menyudagi nom' }),
          maydon(S.saqlangan, 'ochirish', 'O‘chirish tugmasi', { maslahat: 'masalan: Bekor qilish' })]),
        maydon(S.saqlangan, 'bosh', 'Hali yozuv bo‘lmaganda matn')]),
      royxat(F.maydonlar, function (m, i) { return (i + 1) + '. ' + (m.yorliq || '(nomsiz)') + (m.majburiy ? ' *' : ''); },
        function () { var band = F.maydonlar.map(function (x) { return x.nom; }); return { nom: M.nomYasa('Yangi maydon', band), yorliq: 'Yangi maydon', tur: 'matn', majburiy: false }; },
        function (m) {
          var tur = m.nom === 'element' ? 'element' : m.tur;
          var turTanla = kirish('Turi', function () { return tur; }, function (q) {
            var band = F.maydonlar.filter(function (x) { return x !== m; }).map(function (x) { return x.nom; });
            if (q === 'element') { m.tur = 'tanlash'; m.nom = band.indexOf('element') === -1 ? 'element' : M.nomYasa(m.yorliq, band); delete m.variantlar; }
            else { m.tur = q; if (m.nom === 'element') m.nom = M.nomYasa(m.yorliq, band); }
            if (q === 'tanlash' && !m.variantlar) m.variantlar = [];
            if (q !== 'tanlash') delete m.variantlar;
          }, { tur: 'select', variantlar: TURLAR, keyin: chiz });
          var qism = [kirish('Nomi (ekranda)', function () { return m.yorliq; }, function (q) {
            m.yorliq = q;
            if (m.nom !== 'element') m.nom = M.nomYasa(q, F.maydonlar.filter(function (x) { return x !== m; }).map(function (x) { return x.nom; }));
          }), el('div', { class: 't-qator' }, [turTanla, maydon(m, 'majburiy', 'Majburiy', { tur: 'checkbox' })])];
          if (tur === 'matn' || tur === 'matnmaydon') qism.push(el('div', { class: 't-qator' }, [maydon(m, 'min', 'Kamida belgi', { tur: 'number', min: 0 }), maydon(m, 'max', 'Ko‘pi bilan belgi', { tur: 'number', min: 0 })]));
          if (tur === 'son') qism.push(el('div', { class: 't-qator' }, [maydon(m, 'min', 'Eng kichik son', { tur: 'number' }), maydon(m, 'max', 'Eng katta son', { tur: 'number' })]),
            maydon(m, 'soni', 'Bu “soni” (kishi/dona): joy va jami narxni hisoblaydi', { tur: 'checkbox' }));
          if (tur === 'sana') qism.push(maydon(m, 'otmishEmas', 'O‘tib ketgan sanani tanlab bo‘lmasin', { tur: 'checkbox' }));
          if (tur === 'tanlash') qism.push(kirish('Variantlar (har qatorda bittasi)', function () { return (m.variantlar || []).map(function (v) { return v.matn; }).join('\n'); },
            function (q) { m.variantlar = q.split('\n').map(function (s) { return s.trim(); }).filter(Boolean).map(function (s) { return { qiymat: s, matn: s }; }); }, { tur: 'textarea' }));
          if (tur === 'element') qism.push(el('p', { class: 'kichik', matn: 'Variantlar avtomatik: 4-bo‘limdagi ro‘yxat. Joy qolmagan element tanlab bo‘lmaydi.' }));
          qism.push(maydon(m, 'maslahat', 'Maslahat (maydon ostida, ixtiyoriy)'));
          return qism;
        }, chiz)
    ]));

    S.savollar = Array.isArray(S.savollar) ? S.savollar : [];
    joy.appendChild(blok('6. Savol-javob', 'Bosh sahifa pastida. Bo‘sh bo‘lsa ko‘rinmaydi.', [
      maydon(S, 'savollarSarlavha', 'Bo‘lim sarlavhasi', { maslahat: 'standart: Ko‘p beriladigan savollar' }),
      royxat(S.savollar, function (q, i) { return (i + 1) + '. ' + (q.savol || ''); }, function () { return { savol: 'Yangi savol?', javob: '' }; },
        function (q) { return [maydon(q, 'savol', 'Savol'), maydon(q, 'javob', 'Javob', { tur: 'textarea', qator: 2 })]; }, chiz)
    ]));

    S.haqida.matnlar = S.haqida.matnlar || []; S.haqida.aloqa = S.haqida.aloqa || [];
    joy.appendChild(blok('7. Biz haqimizda', null, [
      maydon(S.haqida, 'sarlavha', 'Sarlavha'),
      kirish('Matn (xatboshilar orasida bo‘sh qator)', function () { return S.haqida.matnlar.join('\n\n'); },
        function (q) { S.haqida.matnlar = q.split(/\n\s*\n/).map(function (s) { return s.trim(); }).filter(Boolean); }, { tur: 'textarea', qator: 5 }),
      el('h3', { matn: 'Aloqa ma’lumotlari' }),
      royxat(S.haqida.aloqa, function (a, i) { return (i + 1) + '. ' + (a.nom || ''); }, function () { return { nom: 'Yangi qator', qiymat: '' }; },
        function (a) { return [el('div', { class: 't-qator' }, [maydon(a, 'nom', 'Nomi'), maydon(a, 'qiymat', 'Qiymati')])]; }, chiz)
    ]));

    Array.prototype.forEach.call(joy.querySelectorAll('details'), function (x, i) { if (ochiq[i]) x.open = true; });
    xatoKorsat();
  }

  /* ---------- Ishga tushirish ---------- */
  function boshla() {
    if (!M || !window.SAYT || !window.FORMA || !Array.isArray(window.ELEMENTLAR)) {
      holat('malumot.js o‘qilmadi: faylda yozuv xatosi bor. Toza nusxadagi malumot.js ni qo‘ying yoki F12 → Console ni ko‘ring.');
      return;
    }
    d = fayldagi();
    draftKalit = M.qoralamaKaliti(location.href, d);
    try {
      var q = JSON.parse(localStorage.getItem(draftKalit));
      if (q && q.SAYT && Array.isArray(q.ELEMENTLAR) && q.FORMA && JSON.stringify(q) !== JSON.stringify(d)) {
        if (confirm('“' + (q.SAYT.nomi || 'Nomsiz') + '” qoralamasi topildi. Hozirgi loyiha: “' + (d.SAYT.nomi || 'Nomsiz') + '”. Qoralamani tiklaysizmi? Bekor qilish fayldagi holatni ochadi; qoralama saqlanadi.')) {
          d = q; holat('Avvalgi saqlanmagan ish tiklandi.');
        } else {
          // Keep the declined draft intact. This editor starts a separate draft.
          draftKalit += ':yangi:' + M.yangiId();
        }
      }
    } catch (e) { /* qoralama yo'q */ }
    if (typeof d.SAYT.rang !== 'string') d.SAYT.rang = '';
    if (!d.SAYT.mavzu) d.SAYT.mavzu = 'toza';
    d.SAYT.sahifalar = d.SAYT.sahifalar || {};
    chiz(); korish();
    try { localStorage.setItem(draftKalit, JSON.stringify(d)); } catch (e) { /* xotira yopiq */ }

    $('#t-saqla').addEventListener('click', saqla);
    $('#t-och').addEventListener('click', function () { window.open('index.html', '_blank'); });
    $('#t-yangila').addEventListener('click', korish);
    $('#t-qaytar').addEventListener('click', function () {
      if (!confirm('Saqlanmagan o‘zgarishlar o‘chib, malumot.js dagi holat qaytariladi. Davom etasizmi?')) return;
      d = fayldagi(); try { localStorage.removeItem(draftKalit); } catch (e) { /* */ }
      chiz(); korish(); holat('Fayldagi holat qaytarildi.');
    });
    document.querySelectorAll('[data-kenglik]').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('[data-kenglik]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        var w = b.getAttribute('data-kenglik'); var f = $('#t-iframe');
        f.style.width = w ? w + 'px' : '100%'; f.style.maxWidth = w ? 'none' : '100%';
        f.parentNode.style.overflowX = w ? 'auto' : '';
      });
    });
    document.addEventListener('keydown', function (e) { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); saqla(); } });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boshla); else boshla();
})();
