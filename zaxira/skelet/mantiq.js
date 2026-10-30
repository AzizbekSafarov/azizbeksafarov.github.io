/* =====================================================================
   MANTIQ.JS — sahifaga bog'liq bo'lmagan, test qilinadigan funksiyalar.
   Tekshirish (validatsiya), qidirish/filtr, saqlash, CSV va sana.
   Oddiy <script> sifatida ham, Node testida ham ishlaydi:
   index.html'ni ikki marta bosib (file://) ochganda ham yuklanadi.
   Odatda bu faylni o'zgartirish shart emas — mazmun malumot.js'da.
   ===================================================================== */
(function (root) {
  'use strict';

  var OYLAR = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul',
    'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];

  /** Qidiruv uchun: kichik harf, apostrof turlari bir xil, ortiqcha bo'sh joysiz. */
  function normal(matn) {
    return String(matn == null ? '' : matn)
      .toLowerCase()
      .replace(/[‘’ʻʼ`´']/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  }

  /** "2026-11-05" -> "5-noyabr, 2026". Noto'g'ri sana bo'lsa asl matn qaytadi. */
  function sanaMatn(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
    if (!m) return String(iso || '');
    var oy = Number(m[2]);
    if (oy < 1 || oy > 12) return String(iso);
    return Number(m[3]) + '-' + OYLAR[oy - 1] + ', ' + m[1];
  }

  /** Bugungi sana YYYY-MM-DD ko'rinishida (mahalliy vaqt bo'yicha). */
  function bugun(sana) {
    var d = sana || new Date();
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

  /** Narxni "120 000 so'm" ko'rinishida chiqaradi; 0 bo'lsa "Bepul". */
  function pul(qiymat) {
    var n = Number(qiymat);
    if (!isFinite(n) || n <= 0) return 'Bepul';
    return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' so‘m';
  }

  /** Telefonni +998XXXXXXXXX ko'rinishiga keltiradi yoki null qaytaradi. */
  function telefon(qiymat) {
    var raqam = String(qiymat || '').replace(/[\s\-()]/g, '');
    if (/^\+998\d{9}$/.test(raqam)) return raqam;
    if (/^998\d{9}$/.test(raqam)) return '+' + raqam;
    if (/^\d{9}$/.test(raqam)) return '+998' + raqam;
    return null;
  }

  /**
   * Forma qiymatlarini tekshiradi.
   * maydonlar — malumot.js dagi FORMA.maydonlar; qiymatlar — {nom: qiymat}.
   * Natija: {ok, xatolar: {nom: xabar}, toza: {nom: tozalangan qiymat}}.
   */
  function tekshir(maydonlar, qiymatlar, variantlar) {
    var xatolar = {};
    var toza = {};
    var hozir = (variantlar && variantlar.bugun) || bugun();
    (maydonlar || []).forEach(function (m) {
      var xom = qiymatlar ? qiymatlar[m.nom] : undefined;
      var nomi = m.yorliq || m.nom;
      if (m.tur === 'belgi') {
        var belgilangan = xom === true || xom === 'on' || xom === 'true';
        if (m.majburiy && !belgilangan) xatolar[m.nom] = m.xato || ('“' + nomi + '” ni belgilang.');
        toza[m.nom] = belgilangan;
        return;
      }
      var q = String(xom == null ? '' : xom).trim();
      toza[m.nom] = q;
      if (!q) {
        if (m.majburiy) xatolar[m.nom] = m.xato || (m.tur === 'tanlash' || m.tur === 'sana'
          ? '“' + nomi + '”: birini tanlang.' : nomi + ' kiritilishi shart.');
        return;
      }
      if (m.min && q.length < m.min && m.tur !== 'son') {
        xatolar[m.nom] = nomi + ' kamida ' + m.min + ' ta belgidan iborat bo‘lsin.'; return;
      }
      if (m.max && q.length > m.max && m.tur !== 'son') {
        xatolar[m.nom] = nomi + ' ' + m.max + ' ta belgidan oshmasin.'; return;
      }
      if (m.tur === 'telefon') {
        var t = telefon(q);
        if (!t) { xatolar[m.nom] = 'Telefon raqamini +998 90 123 45 67 ko‘rinishida kiriting.'; return; }
        toza[m.nom] = t;
      } else if (m.tur === 'email') {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(q)) { xatolar[m.nom] = 'Email manzilini to‘g‘ri kiriting, masalan: ism@example.com'; return; }
      } else if (m.tur === 'son') {
        var n = Number(q.replace(',', '.'));
        if (!isFinite(n)) { xatolar[m.nom] = nomi + ' son bo‘lishi kerak.'; return; }
        if (m.min != null && n < m.min) { xatolar[m.nom] = nomi + ' kamida ' + m.min + ' bo‘lsin.'; return; }
        if (m.max != null && n > m.max) { xatolar[m.nom] = nomi + ' ' + m.max + ' dan oshmasin.'; return; }
        toza[m.nom] = n;
      } else if (m.tur === 'sana') {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(q)) { xatolar[m.nom] = 'Sanani tanlang.'; return; }
        if (m.otmishEmas && q < hozir) { xatolar[m.nom] = 'O‘tib ketgan sanani tanlab bo‘lmaydi.'; return; }
      } else if (m.tur === 'tanlash') {
        var ruxsat = (m.variantlar || []).map(function (v) { return String(v.qiymat); });
        if (ruxsat.indexOf(q) === -1) { xatolar[m.nom] = 'Ro‘yxatdan birini tanlang.'; return; }
      }
      if (m.naqsh && !(new RegExp(m.naqsh)).test(q)) {
        xatolar[m.nom] = m.naqshXato || (nomi + ' ko‘rinishi noto‘g‘ri.');
      }
    });
    return { ok: Object.keys(xatolar).length === 0, xatolar: xatolar, toza: toza };
  }

  /** Ro'yxatni qidiruv matni va turi bo'yicha filtrlaydi. */
  function filtrla(elementlar, shart) {
    var s = shart || {};
    var soz = normal(s.qidiruv);
    var tur = s.turi && s.turi !== 'hammasi' ? s.turi : '';
    return (elementlar || []).filter(function (e) {
      if (tur && e.turi !== tur) return false;
      if (!soz) return true;
      var matn = normal([e.nom, e.turi, e.joy, e.tavsif].join(' '));
      return soz.split(' ').every(function (bolak) { return matn.indexOf(bolak) !== -1; });
    });
  }

  /** Ro'yxatdagi turlar (takrorlanmaydi, tartibi saqlanadi). */
  function turlar(elementlar) {
    var natija = [];
    (elementlar || []).forEach(function (e) {
      if (e.turi && natija.indexOf(e.turi) === -1) natija.push(e.turi);
    });
    return natija;
  }

  /** Element uchun qolgan joy. joylar berilmagan bo'lsa cheklov yo'q (Infinity). */
  function qolganJoy(element, yozuvlar, maydon) {
    if (!element || !(element.joylar > 0)) return Infinity;
    var kalit = maydon || 'element';
    var band = (yozuvlar || []).filter(function (y) { return y[kalit] === element.id; }).length;
    return Math.max(0, element.joylar - band);
  }

  function yangiId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  /**
   * Brauzer xotirasi (localStorage) ustidagi xavfsiz ombor.
   * - Buzilgan JSON o'chirilmaydi: "<kalit>:buzilgan" ga nusxalanadi.
   * - Xotira bloklangan yoki to'lgan bo'lsa ma'lumot sahifa ochiq turganda
   *   xotirada qoladi va {ok:false} qaytadi — sayt buzilmaydi.
   */
  function ombor(storage, kalit) {
    var xotira = [];
    var ishlaydi = true;
    var ogohlantirish = '';
    function oqi() {
      if (!ishlaydi || !storage) return xotira.slice();
      var xom;
      try { xom = storage.getItem(kalit); } catch (e) {
        ishlaydi = false; ogohlantirish = 'Brauzer xotirasi yopiq. Yozuvlar sahifa yopilguncha saqlanadi.';
        return xotira.slice();
      }
      if (xom == null) return [];
      try {
        var data = JSON.parse(xom);
        if (data && data.versiya === 1 && Array.isArray(data.yozuvlar)) { xotira = data.yozuvlar; return xotira.slice(); }
        throw new Error('format');
      } catch (e) {
        try { storage.setItem(kalit + ':buzilgan', xom); storage.removeItem(kalit); } catch (e2) { /* nusxa olinmasa ham davom etamiz */ }
        ogohlantirish = 'Eski yozuvlar o‘qilmadi va alohida nusxaga olindi.';
        xotira = [];
        return [];
      }
    }
    function yoz(yozuvlar) {
      xotira = yozuvlar.slice();
      if (!ishlaydi || !storage) return { ok: false };
      try {
        storage.setItem(kalit, JSON.stringify({ versiya: 1, yozuvlar: yozuvlar }));
        return { ok: true };
      } catch (e) {
        ishlaydi = false;
        ogohlantirish = 'Brauzer xotirasiga yozib bo‘lmadi. Yozuvlar sahifa yopilguncha saqlanadi — CSV yuklab oling.';
        return { ok: false };
      }
    }
    return {
      oqi: oqi,
      qosh: function (yozuv) {
        var y = Object.assign({ id: yangiId(), vaqt: new Date().toISOString() }, yozuv);
        var hammasi = oqi(); hammasi.push(y);
        return Object.assign({ yozuv: y }, yoz(hammasi));
      },
      ochir: function (id) { return yoz(oqi().filter(function (y) { return y.id !== id; })); },
      tozala: function () { return yoz([]); },
      holat: function () { return { ishlaydi: ishlaydi, ogohlantirish: ogohlantirish }; }
    };
  }

  /** Yozuvlarni Excel ochadigan CSV ga aylantiradi (UTF-8 BOM bilan). */
  function csv(yozuvlar, ustunlar) {
    function katak(q) {
      var s = q == null ? '' : String(q);
      if (/^[=+\-@]/.test(s)) s = "'" + s; // Excel formulasi sifatida bajarilmasin
      return /[",;\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    }
    var bosh = ustunlar.map(function (u) { return katak(u.yorliq); }).join(',');
    var qatorlar = (yozuvlar || []).map(function (y) {
      return ustunlar.map(function (u) { return katak(y[u.nom]); }).join(',');
    });
    return '﻿' + [bosh].concat(qatorlar).join('\r\n') + '\r\n';
  }

  /** Rang ustida o'qiladigan matn rangi: och rangda qora, to'q rangda oq. */
  function matnRangi(hex) {
    var m = /^#?([0-9a-f]{6})$/i.exec(String(hex || '').trim());
    if (!m) return '#ffffff';
    var n = parseInt(m[1], 16);
    var kanal = function (c) { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    var L = 0.2126 * kanal(n >> 16 & 255) + 0.7152 * kanal(n >> 8 & 255) + 0.0722 * kanal(n & 255);
    return (1.05) / (L + 0.05) >= (L + 0.05) / 0.05 ? '#ffffff' : '#111111';
  }

  /** Matnni forma maydoni nomiga aylantiradi: "Telefon raqami" -> "telefonraqami". */
  function nomYasa(matn, band) {
    var s = normal(matn).replace(/o'/g, 'o').replace(/g'/g, 'g').replace(/[^a-z0-9]/g, '');
    if (!/^[a-z]/.test(s)) s = 'maydon' + s;
    var natija = s, i = 2;
    while ((band || []).indexOf(natija) !== -1) natija = s + i++;
    return natija;
  }

  var USTUNLAR = {
    nom: ['nom', 'nomi', 'name', 'mavzu', 'kurs', 'dars', 'tadbir', 'mahsulot', 'xizmat'],
    turi: ['turi', 'tur', "yo'nalish", 'yonalish', 'kategoriya', 'category', 'type'],
    sana: ['sana', 'date', 'kun'],
    vaqt: ['vaqt', 'soat', 'time'],
    joy: ['joy', 'joyi', 'manzil', 'address', 'xona'],
    narx: ['narx', 'narxi', 'price', 'summa'],
    joylar: ['joylar', "sig'im", 'sigim', 'orinlar', "o'rinlar", 'soni', 'capacity'],
    tavsif: ['tavsif', 'izoh', 'description', 'malumot', "ma'lumot"]
  };

  /** "05.11.2026" yoki "2026-11-05" -> "2026-11-05"; tushunilmasa asl matn. */
  function sanaIso(q) {
    var s = String(q || '').trim(), m;
    if ((m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(s))) return m[1] + '-' + ('0' + m[2]).slice(-2) + '-' + ('0' + m[3]).slice(-2);
    if ((m = /^(\d{1,2})[./](\d{1,2})[./](\d{4})$/.exec(s))) return m[3] + '-' + ('0' + m[2]).slice(-2) + '-' + ('0' + m[1]).slice(-2);
    return s;
  }

  /**
   * Word/Excel/PDF dan nusxalangan jadvalni elementlarga aylantiradi.
   * Birinchi qator — sarlavhalar (Nomi, Sana, Vaqt, Joy, Narx...). Ajratuvchi: Tab, ; yoki |.
   */
  function jadvalOqi(matn) {
    var qatorlar = String(matn || '').split(/\r?\n/).map(function (q) { return q.trim(); })
      .filter(function (q) { return q && !/^[|\s:-]+$/.test(q); });
    if (qatorlar.length < 2) return { elementlar: [], tanilmagan: [], xato: 'Kamida sarlavha qatori va bitta ma’lumot qatori kerak.' };
    var ajr = qatorlar[0].indexOf('\t') !== -1 ? '\t' : qatorlar[0].indexOf('|') !== -1 ? '|' : ';';
    var bolak = function (q) {
      var p = q.split(ajr).map(function (x) { return x.trim(); });
      if (ajr === '|') p = p.filter(function (x, i, a) { return !(x === '' && (i === 0 || i === a.length - 1)); });
      return p;
    };
    var sarlavha = bolak(qatorlar[0]);
    var tanilmagan = [];
    var xarita = sarlavha.map(function (s) {
      var k = normal(s).replace(/[^a-z0-9']/g, '');
      for (var maydon in USTUNLAR) if (USTUNLAR[maydon].indexOf(k) !== -1) return maydon;
      tanilmagan.push(s); return null;
    });
    if (xarita.indexOf('nom') === -1) return { elementlar: [], tanilmagan: tanilmagan, xato: 'Sarlavhada “Nomi” ustuni topilmadi.' };
    var elementlar = qatorlar.slice(1).map(function (q, i) {
      var e = { id: 'e' + (i + 1) };
      bolak(q).forEach(function (qiymat, j) {
        var maydon = xarita[j];
        if (!maydon || qiymat === '') return;
        if (maydon === 'narx' || maydon === 'joylar') { var n = Number(qiymat.replace(/[^\d.,]/g, '').replace(',', '.')); e[maydon] = isFinite(n) ? n : 0; }
        else if (maydon === 'sana') e.sana = sanaIso(qiymat);
        else e[maydon] = qiymat;
      });
      return e;
    }).filter(function (e) { return e.nom; });
    return { elementlar: elementlar, tanilmagan: tanilmagan, xato: '' };
  }

  /** {SAYT, ELEMENTLAR, FORMA} dan har doim to'g'ri yozilgan malumot.js matnini yasaydi. */
  function malumotYoz(d) {
    var j = function (q) { return JSON.stringify(q, null, 2); };
    return '/* MALUMOT.JS — saytning barcha mazmuni.\n' +
      '   Bu fayl tahrir.html (kodsiz tahrirlash paneli) orqali yaratilgan.\n' +
      '   Eng oson yo‘l: tahrir.html ni oching, o‘zgartiring, “Faylga saqlash” ni bosing.\n' +
      '   Qo‘lda tahrirlasangiz: faqat qo‘shtirnoq "..." ichidagi matnni o‘zgartiring. */\n\n' +
      'window.SAYT = ' + j(d.SAYT) + ';\n\n' +
      'window.ELEMENTLAR = ' + j(d.ELEMENTLAR) + ';\n\n' +
      'window.FORMA = ' + j(d.FORMA) + ';\n';
  }

  var Mantiq = {
    normal: normal, sanaMatn: sanaMatn, bugun: bugun, pul: pul, telefon: telefon,
    tekshir: tekshir, filtrla: filtrla, turlar: turlar, qolganJoy: qolganJoy,
    ombor: ombor, csv: csv, yangiId: yangiId,
    matnRangi: matnRangi, nomYasa: nomYasa, jadvalOqi: jadvalOqi, sanaIso: sanaIso, malumotYoz: malumotYoz,
    QORALAMA_KALIT: 'zaxira-tahrir-qoralama'
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = Mantiq;
  else root.Mantiq = Mantiq;
})(typeof window !== 'undefined' ? window : this);
