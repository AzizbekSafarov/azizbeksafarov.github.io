# Azizbek Safarov — ochiq ish maydoni

https://azizbeksafarov.github.io/

Faol dizaynlar: Yuksal, Bloom, Samar va Forma. Samar/Forma to‘liq qayta ishlangan; qolgan yetti eski namuna, paket va aliaslar joriy loyihadan o‘chirilgan. Arxiv sahifasi yo‘q.

- /design/ — faol galereya
- /design/start/ — bilet, vaqt, dizayn va tayyor AI prompt
- /ai.md — markaziy kontekst
- /design/kit.zip — to‘rtta starter + to‘liq yig‘ilgan tanlov matnlari
- /design/standart/ — sifat mezonlari
- /ustoz/ — mustaqil research repozitoriysi, o‘zgartirilmaydi

HQ: assets/hq/site.css, site.js, design/build_hq.py. Samar/Forma: design/samar-site/, design/forma-site/, ularning HTML/CSS generatori design/build_refined.py. Har bir starter mustaqil preview va manba kreditlariga ega.

```text
python design/build_refined.py
python design/build_handoff.py
python design/verify_handoff.py
python -m http.server 8770 --bind 127.0.0.1
```

Bloom uchun o‘z AGENTS.md fayli amal qiladi; minified distni patch qilmang. Yuksalning oq foni, brand faviconi va O‘zbekiston kontent bayrog‘i saqlanadi. Source/build yangilangach handoff paketlarini qayta yarating.

GitHub Pages main rootdan nashr qiladi. Pushdan so‘ng deployment va ochiq UI tekshirilsin. Account, parol va maxfiy konfiguratsiya ommaviy repozitoriyga kiritilmaydi.
