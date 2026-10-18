# Amaldagi manbalar va qayta yaratish tartibi

Bu kutubxonani saqlash uchun yo‘riqnoma. Tanlov uchun ochilgan alohida ZIPda `site/` ichidagi runtime fayllarini tahrirlang; kutubxona generatorlarini u yerda ishga tushirmang.

## Dizayn manbalari

- Samar / Forma: `build_refined.py` → ichki tuzilma bosqichlari → `identities_v4.py` va `identity-styles/` yakuniy uslubi.
- Orbita / Nashr / Hisob / Ziyo / Meros: `build_collection.py` → kerakli ichki kompozitsiya bosqichi → `identities_v4.py` va `identity-styles/` yakuniy uslubi.
- Bloom: `material-expressive/src/`; Vite buildi `dist/`ga chiqadi. Minified `dist/assets/`ni qo‘lda tahrirlamang.
- Yuksal · SI: `si-site/` ichidagi HTML/CSS/JS va harakat modeli.

`refined_v2.py` va `diversity_v3.py` nomidagi sonlar yakuniy dizayn versiyasini belgilamaydi: ular amaldagi generator chaqiradigan ichki bosqichlardir. Ularni alohida yakuniy shablon deb ochmang. `diversity_v3.py`ni bevosita bajarish eski oraliq uslubni qaytarishi mumkin bo‘lgani uchun bunday ishga tushirish to‘xtatiladi. To‘liq generator oxirida yakuniy identity qatlamini qo‘llaydi.

## Kontekstning yagona manbasi

Tanlov matnlarining asl tahrirlanadigan nusxasi `ustoz` repozitoriysida. `sync_context.py` uning manifesti va SHA-256 qiymatlarini tekshirib, `handoff/` nusxalarini yangilaydi. `context-origin.json` har nusxaning manbasi va hashini qayd etadi. Boshqa kompyuterda tadqiqot repozitoriysi yo‘q bo‘lsa, mavjud nusxalar hash bilan tekshiriladi.

`competition-full.md`, `competition.md`, `regulations.md`, `context-status.md`ni alohida qo‘lda yangi versiyaga aylantirmang. Avval kanonik tadqiqot faylini va uning buildini yangilang. `build_handoff.py` sinxronlashni o‘zi chaqiradi.

## Nashr qilishdan oldin

O‘zgargan dizaynning tegishli test/buildini bajaring. Keyin `python -B design/build_handoff.py`, `python -B design/verify_handoff.py` va `python -B design/verify_site.py`ni repozitoriy ildizidan bajaring. Vizual o‘zgarish bo‘lsa yangi ko‘rinishni brauzerda tekshiring va previewni yangilang.

`verify_clean.py` eski starterlar, ortiqcha build resurslari, kontekst nusxalarining ajralib ketishi va qisqa manzil nusxalari eskirishini aniqlaydi. Oldingi QA hisoboti joriy tahrir tekshirilganining kafolati emas.
