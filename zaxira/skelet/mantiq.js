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
      if (ichkiNom(m.nom)) { xatolar[m.nom] = 'Maydonning ichki nomi band: ' + m.nom + '. Tahrir panelida nomini o‘zgartiring.'; return; }
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
        if (m.soni && (n < 1 || Math.floor(n) !== n)) { xatolar[m.nom] = nomi + ' musbat butun son bo‘lsin.'; return; }
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
      var q = e.qoshimcha && typeof e.qoshimcha === 'object' ? e.qoshimcha : {};
      var matn = normal([e.nom, e.turi, e.joy, e.tavsif].concat(Object.keys(q).map(function (k) { return q[k]; })).join(' '));
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

  /** Yozuvning "soni" (masalan 3 kishi / 2 dona). Berilmagan yoki noto'g'ri bo'lsa 1. */
  function yozuvSoni(yozuv, sonMaydon) {
    if (!sonMaydon) return 1;
    var n = Number(yozuv && yozuv[sonMaydon]);
    return isFinite(n) && n >= 1 && Math.floor(n) === n ? n : 1;
  }

  /** Element uchun qolgan joy. joylar berilmagan bo'lsa cheklov yo'q (Infinity).
      sonMaydon berilsa har yozuv o'sha maydondagi son qadar joy egallaydi. */
  function qolganJoy(element, yozuvlar, maydon, sonMaydon) {
    if (!element || !(element.joylar > 0)) return Infinity;
    var kalit = maydon || 'element';
    var band = (yozuvlar || []).reduce(function (s, y) {
      return String(y[kalit]) === String(element.id) ? s + yozuvSoni(y, sonMaydon) : s;
    }, 0);
    return Math.max(0, element.joylar - band);
  }

  /** Ro'yxatni tartiblaydi: tavsiya (asl tartib), nom, sana, narx-osish, narx-kamayish. */
  function saralash(elementlar, tartib) {
    var r = (elementlar || []).map(function (e, i) { return { e: e, i: i }; });
    var narx = function (e) { var n = Number(e.narx); return isFinite(n) ? n : Infinity; };
    var cmp = {
      nom: function (a, b) { return String(a.e.nom || '').localeCompare(String(b.e.nom || ''), 'uz'); },
      sana: function (a, b) { return String(a.e.sana || '9999') < String(b.e.sana || '9999') ? -1 : String(a.e.sana || '9999') > String(b.e.sana || '9999') ? 1 : 0; },
      'narx-osish': function (a, b) { return narx(a.e) - narx(b.e); },
      'narx-kamayish': function (a, b) { return (narx(b.e) === Infinity ? -Infinity : narx(b.e)) - (narx(a.e) === Infinity ? -Infinity : narx(a.e)); }
    }[tartib];
    if (cmp) r.sort(function (a, b) { return cmp(a, b) || a.i - b.i; });
    return r.map(function (x) { return x.e; });
  }

  /** Jami narx = elementning narxi × soni. Narx yo'q bo'lsa null. */
  function jamiNarx(element, soni) {
    var n = Number(element && element.narx);
    if (!element || element.narx == null || element.narx === '' || !isFinite(n)) return null;
    var s = Number(soni);
    return n * (isFinite(s) && s >= 1 && Math.floor(s) === s ? s : 1);
  }

  /** Statistika: har element bo'yicha yozuvlar (soni bilan), to'lganlik foizi va jami. */
  function statistika(elementlar, yozuvlar, sonMaydon) {
    var qatorlar = (elementlar || []).map(function (e) {
      var band = (yozuvlar || []).reduce(function (s, y) { return String(y.element) === String(e.id) ? s + yozuvSoni(y, sonMaydon) : s; }, 0);
      var arizalar = (yozuvlar || []).filter(function (y) { return String(y.element) === String(e.id); }).length;
      return { id: e.id, nom: e.nom, arizalar: arizalar, band: band, joylar: e.joylar > 0 ? e.joylar : null,
        foiz: e.joylar > 0 ? Math.min(100, Math.round(band * 100 / e.joylar)) : null };
    });
    return { qatorlar: qatorlar, jamiArizalar: (yozuvlar || []).length,
      jamiBand: qatorlar.reduce(function (s, q) { return s + q.band; }, 0) };
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
      if (xom == null) { xotira = []; return []; }
      try {
        var data = JSON.parse(xom);
        var idlar = Object.create(null);
        if (data && data.versiya === 1 && Array.isArray(data.yozuvlar) && data.yozuvlar.every(function (y) {
          if (!y || typeof y !== 'object' || Array.isArray(y) || typeof y.id !== 'string' || !y.id || idlar[y.id] || typeof y.vaqt !== 'string' || !isFinite(Date.parse(y.vaqt))) return false;
          idlar[y.id] = true;
          return Object.keys(y).every(function (k) { return y[k] === null || ['string', 'number', 'boolean'].indexOf(typeof y[k]) !== -1; });
        })) { xotira = data.yozuvlar; return xotira.slice(); }
        throw new Error('format');
      } catch (e) {
        try {
          var backup = kalit + ':buzilgan', i = 1;
          while (storage.getItem(backup) !== null && storage.getItem(backup) !== xom) backup = kalit + ':buzilgan:' + i++;
          storage.setItem(backup, xom);
          if (storage.getItem(backup) !== xom) throw new Error('Backup verification failed');
          storage.removeItem(kalit);
          ogohlantirish = 'Eski yozuvlar o‘qilmadi va alohida nusxaga olindi.';
        } catch (e2) {
          ishlaydi = false;
          ogohlantirish = 'Eski yozuvlar o‘qilmadi. Zaxira nusxa yozilmadi; asl ma’lumot saqlandi. Yangi yozuvlar faqat sahifa xotirasida — CSV yuklab oling.';
        }
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
        var y = Object.assign({}, yozuv, { id: yangiId(), vaqt: new Date().toISOString() });
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
    var oq = 1.05 / (L + 0.05), qora = (L + 0.05) / (kanal(17) + 0.05);
    if (oq < 4.5 && qora < 4.5) return '#000000';
    return oq >= qora ? '#ffffff' : '#111111';
  }

  function ichkiNom(nom) { return ['id', 'vaqt', 'jami'].indexOf(nom) !== -1; }

  /** Bind a draft to the original file snapshot and its containing URL path. */
  function qoralamaKaliti(manzil, data) {
    var joy = String(manzil || '').split(/[?#]/)[0].replace(/[^/]*$/, '');
    function hash(source) {
      var a = 2166136261, b = 5381;
      for (var i = 0; i < source.length; i++) { a = Math.imul(a ^ source.charCodeAt(i), 16777619); b = Math.imul(b, 33) ^ source.charCodeAt(i); }
      return (a >>> 0).toString(36) + '-' + (b >>> 0).toString(36);
    }
    var prefix = 'zaxira-tahrir-qoralama:' + hash(joy) + ':';
    return data === undefined ? prefix : prefix + hash(JSON.stringify(data));
  }

  /** Matnni forma maydoni nomiga aylantiradi: "Telefon raqami" -> "telefonraqami". */
  function nomYasa(matn, band) {
    var s = normal(matn).replace(/o'/g, 'o').replace(/g'/g, 'g').replace(/[^a-z0-9]/g, '').slice(0, 24);
    if (!/^[a-z]/.test(s)) s = 'maydon' + s;
    if (ichkiNom(s)) s = 'maydon' + s;
    var natija = s, i = 2;
    while ((band || []).indexOf(natija) !== -1) natija = s + i++;
    return natija;
  }

  var USTUNLAR = {
    nom: ['nom', 'nomi', 'name', 'mavzu', 'kurs', 'dars', 'tadbir', 'mahsulot', 'xizmat'],
    turi: ['turi', 'tur', "yo'nalish", 'yonalish', 'kategoriya', 'category', 'type', 'janr', 'janri', 'turkum', "bo'lim", 'bolim'],
    sana: ['sana', 'date', 'kun'],
    vaqt: ['vaqt', 'soat', 'time'],
    joy: ['joy', 'joyi', 'manzil', 'address', 'xona'],
    narx: ['narx', 'narxi', 'price', 'summa'],
    joylar: ['joylar', "sig'im", 'sigim', 'orinlar', "o'rinlar", 'soni', 'capacity', 'nusxa', 'nusxalar', 'nusxasi', 'miqdor', 'miqdori', 'qoldiq'],
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
    var qatorlar = String(matn || '').split(/\r?\n/)
      .filter(function (q) { return q.trim() && !/^[|\s:-]+$/.test(q); });
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
    var xatolar = [];
    var elementlar = qatorlar.slice(1).map(function (q, i) {
      var e = { id: 'e' + (i + 1) };
      if (bolak(q).length !== sarlavha.length) xatolar.push((i + 2) + '-qator: ustunlar soni mos emas.');
      bolak(q).forEach(function (qiymat, j) {
        var maydon = xarita[j];
        if (qiymat === '' || j >= sarlavha.length) return;
        // Tanilmagan ustun (Muallif, O'qituvchi...) yo'qolmaydi: qo'shimcha maydon bo'ladi.
        if (!maydon) { e.qoshimcha = e.qoshimcha || {}; e.qoshimcha[sarlavha[j]] = qiymat; return; }
        if (maydon === 'narx' || maydon === 'joylar') {
          // "Bepul" -> 0; "—", "cheksiz" -> cheklanmagan (maydon yozilmaydi).
          var son = sonOqi(qiymat, maydon === 'joylar');
          if (!son.ok) xatolar.push((i + 2) + '-qator: ' + sarlavha[j] + ' noto‘g‘ri son.');
          else if (son.qiymat !== null) e[maydon] = son.qiymat;
        }
        else if (maydon === 'sana') e.sana = sanaIso(qiymat);
        else e[maydon] = qiymat;
      });
      if (!e.nom) xatolar.push((i + 2) + '-qator: nomi bo‘sh.');
      return e;
    }).filter(function (e) { return e.nom; });
    return { elementlar: xatolar.length ? [] : elementlar, tanilmagan: tanilmagan, xato: xatolar.join(' ') };
  }

  /**
   * Biletdagi son matnini o'qiydi: "120 000 so'm" -> 120000, "Bepul" -> 0.
   * Natija: { ok, qiymat } ; qiymat null — cheklanmagan ("—", "cheksiz").
   */
  function sonOqi(qiymat, butun) {
    var s = normal(qiymat).replace(/\s/g, '');
    if (s === '' || /^(-|—|–|cheksiz|cheklanmagan|∞|yo'q)$/.test(s)) return { ok: true, qiymat: null };
    if (/^(bepul|tekin|free)$/.test(s)) return { ok: true, qiymat: 0 };
    s = s.replace(/(so'm|som|sum|uzs)$/, '').replace(',', '.');
    if (!/^\d+(\.\d+)?$/.test(s)) return { ok: false, qiymat: null };
    var n = Number(s);
    if (!isFinite(n) || (butun && Math.floor(n) !== n)) return { ok: false, qiymat: null };
    return { ok: true, qiymat: n };
  }

  var MAVZU_NOMLARI = ['toza', 'forma', 'samar', 'orbita', 'nashr', 'hisob', 'ziyo', 'meros', 'yuksal'];
  var TUR_MOS = { matn: 'matn', text: 'matn', string: 'matn', input: 'matn', name: 'matn',
    matnmaydon: 'matnmaydon', textarea: 'matnmaydon', longtext: 'matnmaydon', izoh: 'matnmaydon',
    telefon: 'telefon', tel: 'telefon', phone: 'telefon',
    email: 'email', 'e-mail': 'email', pochta: 'email',
    son: 'son', number: 'son', int: 'son', integer: 'son', raqam: 'son',
    sana: 'sana', date: 'sana',
    tanlash: 'tanlash', select: 'tanlash', dropdown: 'tanlash', choice: 'tanlash', radio: 'tanlash',
    belgi: 'belgi', checkbox: 'belgi', boolean: 'belgi', bool: 'belgi', consent: 'belgi', rozilik: 'belgi' };
  var ELEMENT_KALIT = { name: 'nom', nomi: 'nom', title: 'nom', category: 'turi', type: 'turi', tur: 'turi', janr: 'turi',
    date: 'sana', time: 'vaqt', place: 'joy', location: 'joy', manzil: 'joy', address: 'joy', price: 'narx', narxi: 'narx',
    capacity: 'joylar', seats: 'joylar', orinlar: 'joylar', description: 'tavsif', izoh: 'tavsif', image: 'rasm', img: 'rasm', photo: 'rasm' };
  var MAYDON_KALIT = { name: 'nom', label: 'yorliq', title: 'yorliq', type: 'tur', required: 'majburiy', options: 'variantlar', hint: 'maslahat', placeholder: 'maslahat' };
  function rost(q) { return q === true || q === 'true' || q === 'ha' || q === 1; }

  /**
   * malumot.js ni AI yoki qo'lda yozilgandagi kichik xatolardan tozalaydi.
   * Asl obyekt o'zgarmaydi. Natija: { SAYT, ELEMENTLAR, FORMA, tuzatishlar: [matn] }.
   * Sayt ham, tahrir paneli ham yuklashda shu funksiyadan o'tkazadi.
   */
  function moslash(d) {
    var t = [];
    var S = d && d.SAYT && typeof d.SAYT === 'object' ? JSON.parse(JSON.stringify(d.SAYT)) : d && d.SAYT;
    var E = d ? d.ELEMENTLAR : undefined;
    var F = d && d.FORMA && typeof d.FORMA === 'object' ? JSON.parse(JSON.stringify(d.FORMA)) : d && d.FORMA;
    if (E && !Array.isArray(E) && typeof E === 'object') { E = Object.keys(E).map(function (k) { return E[k]; }); t.push('ELEMENTLAR obyektdan ro‘yxatga o‘tkazildi.'); }
    E = Array.isArray(E) ? JSON.parse(JSON.stringify(E)) : E;

    if (S && typeof S === 'object') {
      var mv = normal(S.mavzu || 'toza');
      if (MAVZU_NOMLARI.indexOf(mv) === -1) { if (S.mavzu) t.push('Noma’lum mavzu “' + S.mavzu + '” → toza.'); mv = 'toza'; }
      else if (S.mavzu !== mv) t.push('Mavzu nomi kichik harfga o‘tkazildi: ' + mv + '.');
      S.mavzu = mv;
      var r = String(S.rang == null ? '' : S.rang).trim();
      if (/^#[0-9a-f]{3}$/i.test(r)) r = '#' + r.slice(1).split('').map(function (c) { return c + c; }).join('');
      if (r && !/^#[0-9a-f]{6}$/i.test(r)) { t.push('Rang “' + S.rang + '” #RRGGBB emas — mavzu rangi ishlatiladi.'); r = ''; }
      S.rang = r;
      if (Array.isArray(S.sahifalar)) {
        var nomlar = { bosh: 'Bosh sahifa', royxat: 'Ro‘yxat', ariza: 'Ariza', saqlangan: 'Arizalarim', statistika: 'Statistika', haqida: 'Biz haqimizda' };
        var ob = {}; S.sahifalar.forEach(function (k) { k = normal(k); if (nomlar[k]) ob[k] = nomlar[k]; });
        S.sahifalar = ob; t.push('sahifalar ro‘yxatdan obyektga o‘tkazildi.');
      }
      ['namuna', 'saqlash'].forEach(function (k) { if (typeof S[k] === 'string') S[k] = rost(S[k]); });
    }

    if (Array.isArray(E)) {
      var idlar = {};
      E = E.filter(function (e) { return e && typeof e === 'object' && !Array.isArray(e); }).map(function (e, i) {
        var x = {};
        Object.keys(e).forEach(function (k) {
          var kk = ELEMENT_KALIT[normal(k)] && !(ELEMENT_KALIT[normal(k)] in e) ? ELEMENT_KALIT[normal(k)] : k;
          if (kk !== k) t.push('Element kaliti “' + k + '” → ' + kk + '.');
          x[kk] = e[k];
        });
        var id = String(x.id == null ? '' : x.id).trim().replace(/[^\w-]+/g, '-').replace(/^-+|-+$/g, '');
        if (!id) id = 'e' + (i + 1);
        var asl = id, n = 2;
        while (idlar[id]) id = asl + '-' + n++;
        if (String(x.id) !== id) t.push('Element id “' + (x.id == null ? '' : x.id) + '” → ' + id + '.');
        idlar[id] = true; x.id = id;
        if (x.nom != null) x.nom = String(x.nom);
        if (x.sana) { var iso = sanaIso(x.sana); if (iso !== x.sana) { x.sana = iso; } }
        ['narx', 'joylar'].forEach(function (k) {
          if (x[k] === undefined || typeof x[k] === 'number') return;
          var s = sonOqi(x[k], k === 'joylar');
          if (!s.ok) { t.push((x.nom || id) + ': ' + k + ' “' + x[k] + '” son emas — olib tashlandi.'); delete x[k]; }
          else if (s.qiymat === null) delete x[k];
          else x[k] = s.qiymat;
        });
        return x;
      });
    }

    if (F && typeof F === 'object' && Array.isArray(F.maydonlar)) {
      var band = [];
      F.maydonlar = F.maydonlar.filter(function (m) { return m && typeof m === 'object'; }).map(function (m0) {
        var m = {};
        Object.keys(m0).forEach(function (k) { var kk = MAYDON_KALIT[k] && !(MAYDON_KALIT[k] in m0) ? MAYDON_KALIT[k] : k; m[kk] = m0[k]; });
        var tur = TUR_MOS[normal(m.tur || 'matn')];
        if (normal(m.tur) === 'time' || normal(m.tur) === 'vaqt') {
          tur = 'matn'; m.naqsh = m.naqsh || '^([01]\\d|2[0-3]):[0-5]\\d$'; m.naqshXato = m.naqshXato || 'Vaqtni SS:DD ko‘rinishida kiriting, masalan 14:30';
          if (!m.maslahat) m.maslahat = 'Masalan: 14:30';
        }
        if (!tur) { t.push('Maydon turi “' + m.tur + '” noma’lum → matn.'); tur = 'matn'; }
        else if (m.tur != null && tur !== m.tur) t.push('Maydon turi “' + m.tur + '” → ' + tur + '.');
        m.tur = tur;
        if (typeof m.majburiy === 'string') m.majburiy = rost(m.majburiy);
        if (typeof m.soni === 'string') m.soni = rost(m.soni);
        if (Array.isArray(m.variantlar)) m.variantlar = m.variantlar.map(function (v) {
          return v && typeof v === 'object' ? { qiymat: String(v.qiymat != null ? v.qiymat : v.matn), matn: String(v.matn != null ? v.matn : v.qiymat) } : { qiymat: String(v), matn: String(v) };
        });
        ['min', 'max'].forEach(function (k) { if (typeof m[k] === 'string' && m[k] !== '' && isFinite(Number(m[k]))) m[k] = Number(m[k]); });
        if (m.yorliq == null) m.yorliq = m.nom || 'Maydon';
        var nom = m.nom === 'element' ? 'element' : String(m.nom || '').toLowerCase().replace(/[^a-z0-9_]/g, '');
        if (!/^[a-z]/.test(nom) || ichkiNom(nom)) {
          var yangi = nomYasa(nom && !ichkiNom(nom) ? nom : (ichkiNom(nom) ? nom + 'maydoni' : m.yorliq), band);
          if (m.nom) t.push('Maydon nomi “' + m.nom + '” → ' + yangi + (ichkiNom(nom) ? ' (ichki nom band edi).' : '.'));
          nom = yangi;
        }
        var asl = nom, n = 2;
        while (band.indexOf(nom) !== -1) nom = asl + n++;
        if (nom !== asl) t.push('Takror maydon nomi “' + asl + '” → ' + nom + '.');
        band.push(nom); m.nom = nom;
        return m;
      });
    }
    return { SAYT: S, ELEMENTLAR: E, FORMA: F, tuzatishlar: t };
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
    tekshir: tekshir, filtrla: filtrla, turlar: turlar, qolganJoy: qolganJoy, yozuvSoni: yozuvSoni,
    saralash: saralash, jamiNarx: jamiNarx, statistika: statistika,
    ombor: ombor, csv: csv, yangiId: yangiId,
    matnRangi: matnRangi, nomYasa: nomYasa, ichkiNom: ichkiNom, sonOqi: sonOqi, moslash: moslash, qoralamaKaliti: qoralamaKaliti, jadvalOqi: jadvalOqi, sanaIso: sanaIso, malumotYoz: malumotYoz,
    QORALAMA_KALIT: 'zaxira-tahrir-qoralama'
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = Mantiq;
  else root.Mantiq = Mantiq;
})(typeof window !== 'undefined' ? window : this);
