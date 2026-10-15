# Azizbek Safarov — bosh sahifa

Asosiy manzil: https://azizbeksafarov.github.io/

Bu GitHub Pages bosh sahifasi loyihalar uchun katalog vazifasini bajaradi.

Hozirgi loyihalar:

- [Ustoz AI](https://azizbeksafarov.github.io/ustoz/)
- [Ustoz AI — AI uchun to‘liq kontekst](https://azizbeksafarov.github.io/ustoz/ai.md)

## Yangi loyiha qo‘shish

1. Yangi loyiha repozitoriysida GitHub Pages'ni yoqing. Masalan, `yangi-loyiha` repozitoriysi `/yangi-loyiha/` manzilida ochiladi.
2. `index.html` ichidagi `project` kartasidan nusxa olib, nom, tavsif va havolalarni yangilang.
3. `count` dagi loyiha sonini yangilang va o‘zgarishlarni `main` tarmog‘iga yuboring.

Bu repozitoriy `ustoz` repozitoriysidan mustaqil. Bosh sahifa o‘zgarishi `/ustoz/` materiallarini o‘zgartirmaydi.

- [Dizaynlar galereyasi — 11 variant](https://azizbeksafarov.github.io/design/)
- [Yuksal · SI — SI.gov uslubidagi jonli namuna](https://azizbeksafarov.github.io/design/si-site/)
- [Yuksal · SI — AI konteksti va kod](https://azizbeksafarov.github.io/design/si/)
- [Bloom / Material Design 3](https://azizbeksafarov.github.io/design/material-expressive/dist/)
- [Bloom — yangi AI uchun tanlov paketi](https://azizbeksafarov.github.io/design/bloom/)
- [Barcha dizaynlar — AI boshlash markazi](https://azizbeksafarov.github.io/design/start/)
- [11 starter va to‘liq tanlov matnlari ZIP](https://azizbeksafarov.github.io/design/kit.zip)
- [Qadam / Google Material uslubi](https://azizbeksafarov.github.io/design/06-material.html)

Dizaynlarning generatorlari va JS/CSS manbalari `design/` ichida. `design/build_templates.py` generatorini ishga tushirib, natijalarni `main` tarmog‘iga yuboring.

Source/build o‘zgarishidan keyin `python design/build_handoff.py` va `python design/verify_handoff.py` bilan AI paketlarini yangilang. Tafsilotlar: `design/HANDOFF-README.md`. `/design/<nom>/` context+code entry; `/dezayn/<nom>/` shu manzilga yo‘naltiradi.
