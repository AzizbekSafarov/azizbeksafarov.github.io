/* =====================================================================
   TEKSHIR.JS — o'z-o'zini tekshirish (AI kerak emas).
   Ishlatish: manzil oxiriga ?tekshir qo'shing, masalan
     index.html?tekshir   yoki   http://127.0.0.1:8080/?tekshir
   O'ng pastda "Tekshirish" tugmasi chiqadi. Har sahifada bosing.
   Natijani nusxalab README dagi "Sinovlar" bo'limiga qo'ying.
   Bu avtomatik yordamchi; qo'lda sinov (forma, mobil) baribir kerak.
   ===================================================================== */
(function () {
  'use strict';
  var xatolar = [];
  window.addEventListener('error', function (e) {
    xatolar.push((e.message || 'Resurs yuklanmadi') + (e.filename ? ' — ' + e.filename.split('/').pop() + ':' + e.lineno : (e.target && (e.target.src || e.target.href) ? ' — ' + (e.target.src || e.target.href) : '')));
  }, true);
  window.addEventListener('unhandledrejection', function (e) { xatolar.push('Promise xatosi: ' + (e.reason && e.reason.message || e.reason)); });
  var asl = console.error;
  console.error = function () { xatolar.push(Array.prototype.join.call(arguments, ' ')); return asl.apply(console, arguments); };

  if (!/[?&]tekshir\b/.test(location.search)) return;

  function korinadi(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length); }
  function nomi(e) {
    return (e.getAttribute('aria-label') || e.textContent || e.getAttribute('title') || (e.querySelector('img[alt]') || {}).alt || '').trim();
  }

  function sahifaniTekshir(doc, win) {
    var n = [];
    var en = doc.documentElement.scrollWidth, oyna = win.innerWidth;
    var keng = [];
    if (en > oyna + 1) {
      doc.querySelectorAll('body *').forEach(function (e) {
        var r = e.getBoundingClientRect();
        if (r.right > oyna + 1 && korinadi(e) && keng.length < 3) keng.push('<' + e.tagName.toLowerCase() + (e.className ? '.' + String(e.className).split(' ')[0] : '') + '>');
      });
    }
    n.push(en > oyna + 1 ? ['xato', 'Gorizontal surish bor (' + en + ' > ' + oyna + ' px): ' + keng.join(', ')] : ['ok', 'Gorizontal surish yo‘q (' + oyna + ' px)']);
    var h1 = Array.prototype.filter.call(doc.querySelectorAll('h1'), korinadi).length;
    n.push(h1 === 1 ? ['ok', 'Sahifada bitta asosiy sarlavha (h1)'] : ['ogoh', 'Ko‘rinadigan h1 soni: ' + h1 + ' (1 ta bo‘lishi kerak)']);
    var rasmlar = Array.prototype.filter.call(doc.images, function (i) { return i.complete && i.naturalWidth === 0 && i.getAttribute('src'); });
    n.push(rasmlar.length ? ['xato', 'Yuklanmagan rasm: ' + rasmlar.map(function (i) { return i.getAttribute('src'); }).join(', ')] : ['ok', 'Rasmlar yuklangan']);
    var altsiz = Array.prototype.filter.call(doc.images, function (i) { return !i.hasAttribute('alt'); });
    if (altsiz.length) n.push(['ogoh', altsiz.length + ' ta rasmda alt yo‘q']);
    var nomsizMaydon = Array.prototype.filter.call(doc.querySelectorAll('input:not([type=hidden]),select,textarea'), function (e) {
      return korinadi(e) && !(e.labels && e.labels.length) && !e.getAttribute('aria-label') && !e.getAttribute('aria-labelledby');
    });
    n.push(nomsizMaydon.length ? ['xato', nomsizMaydon.length + ' ta maydonning nomi (label) yo‘q'] : ['ok', 'Barcha ko‘rinadigan maydonlar nomlangan']);
    var nomsizTugma = Array.prototype.filter.call(doc.querySelectorAll('button,a[href]'), function (e) { return korinadi(e) && !nomi(e); });
    n.push(nomsizTugma.length ? ['xato', nomsizTugma.length + ' ta tugma/havolada matn yo‘q'] : ['ok', 'Tugma va havolalar nomlangan']);
    var boshHavola = Array.prototype.filter.call(doc.querySelectorAll('a'), function (a) { var h = a.getAttribute('href'); return korinadi(a) && (h === null || h === '' || h === '#'); });
    if (boshHavola.length) n.push(['ogoh', boshHavola.length + ' ta havola hech qayerga olib bormaydi (href="#")']);
    var kichik = Array.prototype.filter.call(doc.querySelectorAll('button,a.tugma,input,select'), function (e) {
      var r = e.getBoundingClientRect(); return korinadi(e) && e.type !== 'checkbox' && e.type !== 'radio' && r.height > 0 && r.height < 36;
    });
    if (kichik.length) n.push(['ogoh', kichik.length + ' ta bosiladigan element 36 px dan past (telefonda bosish qiyin)']);
    var matn = doc.body.innerText || '';
    var vaqtinchalik = matn.match(/lorem|ipsum|\bTODO\b|placeholder|namuna|xxx|\?\?\?/gi);
    n.push(vaqtinchalik ? ['ogoh', 'Vaqtinchalik/namuna matn qolgan: ' + Array.from(new Set(vaqtinchalik.map(function (s) { return s.toLowerCase(); }))).join(', ')] : ['ok', 'Vaqtinchalik matn topilmadi']);
    n.push(doc.documentElement.lang ? ['ok', 'Til belgilangan: ' + doc.documentElement.lang] : ['ogoh', '<html lang> yo‘q']);
    var ombor = true; try { var k = '__tekshir'; win.localStorage.setItem(k, '1'); win.localStorage.removeItem(k); } catch (e) { ombor = false; }
    n.push(ombor ? ['ok', 'Brauzer xotirasi ishlaydi'] : ['ogoh', 'Brauzer xotirasi yopiq: saqlash ishlamaydi']);
    return n;
  }

  function kengliklar(tayyor) {
    var toza = location.href.replace(/([?&])tekshir\b[^&#]*&?/, '$1').replace(/[?&](#|$)/, '$1');
    var natija = [], qoldi = 3;
    [390, 768, 1366].forEach(function (w) {
      var f = document.createElement('iframe');
      f.style.cssText = 'position:fixed;left:-9999px;top:0;width:' + w + 'px;height:800px;border:0;visibility:hidden';
      f.setAttribute('aria-hidden', 'true'); f.tabIndex = -1;
      f.onload = function () {
        setTimeout(function () {
          try {
            var d = f.contentDocument, sw = d.documentElement.scrollWidth;
            natija.push(sw > w + 1 ? ['xato', w + ' px: gorizontal surish bor (' + sw + ' px)'] : ['ok', w + ' px: kontent sig‘adi']);
          } catch (e) {
            natija.push(['ogoh', w + ' px: avtomatik tekshirib bo‘lmadi (fayl rejimi). F12 → Ctrl+Shift+M bilan qo‘lda tekshiring']);
          }
          f.remove(); if (--qoldi === 0) tayyor(natija.sort(function (a, b) { return parseInt(a[1], 10) - parseInt(b[1], 10); }));
        }, 600);
      };
      f.src = toza; document.body.appendChild(f);
    });
  }

  function panel() {
    var p = document.createElement('section');
    p.setAttribute('aria-label', 'Sayt tekshiruvi');
    p.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:9999;width:min(420px,calc(100vw - 24px));max-height:70vh;overflow:auto;background:#fff;color:#111;border:2px solid #111;border-radius:12px;font:14px/1.45 system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.25)';
    p.innerHTML = '<div style="display:flex;gap:8px;align-items:center;padding:10px 12px;border-bottom:1px solid #ddd"><strong style="margin-right:auto">Tekshiruv</strong>' +
      '<button type="button" data-t="run" style="padding:8px 12px">Tekshirish</button><button type="button" data-t="copy" style="padding:8px 12px">Nusxalash</button><button type="button" data-t="close" aria-label="Yopish" style="padding:8px 10px">✕</button></div>' +
      '<ul data-t="list" style="list-style:none;margin:0;padding:10px 12px;display:grid;gap:6px"><li>Har sahifani ochib “Tekshirish”ni bosing.</li></ul>';
    document.body.appendChild(p);
    var list = p.querySelector('[data-t=list]'), oxirgi = '';
    var belgi = { ok: '✔', ogoh: '⚠', xato: '✖' }, rang = { ok: '#146c34', ogoh: '#8a5300', xato: '#b3261e' };
    function chiz(qatorlar) {
      list.innerHTML = '';
      qatorlar.forEach(function (q) {
        var li = document.createElement('li'); li.style.color = rang[q[0]] || '#111';
        li.textContent = (belgi[q[0]] || '•') + ' ' + q[1]; list.appendChild(li);
      });
      oxirgi = 'Tekshiruv: ' + location.hash + ' — ' + new Date().toLocaleString() + '\n' + qatorlar.map(function (q) { return (belgi[q[0]] || '•') + ' ' + q[1]; }).join('\n');
    }
    p.querySelector('[data-t=run]').onclick = function () {
      p.style.display = 'none'; // panelning o'z tugmalari natijaga aralashmasin
      var q = sahifaniTekshir(document, window);
      p.style.display = '';
      q.push(xatolar.length ? ['xato', 'Konsol xatolari: ' + xatolar.slice(-5).join(' | ')] : ['ok', 'Konsol xatolari yo‘q']);
      chiz(q.concat([['ogoh', 'Kengliklar tekshirilmoqda…']]));
      kengliklar(function (k) { chiz(q.concat(k)); });
    };
    p.querySelector('[data-t=copy]').onclick = function () {
      var t = oxirgi || list.innerText;
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { list.insertAdjacentHTML('beforeend', '<li>Nusxalandi.</li>'); }, function () { prompt('Nusxalang:', t); });
      else prompt('Nusxalang:', t);
    };
    p.querySelector('[data-t=close]').onclick = function () { p.remove(); };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', panel); else panel();
  window.TEKSHIR = { sahifa: function () { return sahifaniTekshir(document, window); }, xatolar: xatolar };
})();
