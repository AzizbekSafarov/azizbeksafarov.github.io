# Dizayn shablonlari — mahalliy tanlash galereyasi

Barcha 9 variant GitHub Pages’da: https://azizbeksafarov.github.io/design/

Google uslubidagi Qadam: https://azizbeksafarov.github.io/design/06-material.html

## Variantlar

1. KasbLab — ta’lim va xizmat platformasi
2. Samar — turizm va madaniyat
3. Orbit — texnologiya va agentlik
4. Forma — internet-do‘kon
5. Pulseboard — boshqaruv paneli
6. Qadam · Material — Google Material 3 Expressive uslubidan ilhomlangan ilova
7. Lola — Fraunces serif + DM Sans, ijodiy studiya
8. Spark — Space Grotesk + DM Sans, kreativ portfolio
9. Open City — JetBrains Mono + DM Sans, xizmat katalogi

`index.html` galereyani ochadi. Barcha sahifalar oddiy HTML/CSS/JavaScript, tashqi kutubxona yoki CDN ishlatmaydi. Qo‘shimcha shriftlar `assets/fonts` ichida mahalliy WOFF2 fayllar sifatida litsenziyalari bilan saqlangan. Illyustratsiyalar SVG yoki CSS ko‘rinishida fayllarga kiritilgan.

Formalar demo: ma’lumot serverga yuborilmaydi. Savat, Qadam kurslari/progressi/temasi va Spark rang tanlovi shu brauzerda saqlanadi; to‘lov yo‘q. Forma ma’lumotlari saqlanmaydi. Dashboard raqamlari va CSV yozuvlari demo. Barcha statistikalar, narxlar va fikrlar namunaviy.

`build_templates.py` manba generatori. O‘zgarishlarni generatorlarda va `src/shared.js`, `src/extra.js` fayllarida kiriting, keyin generatorni ishga tushiring. HTML, CSS, JS va katalog yozuvlari qayta yaratiladi.

`extra_templates.py` 06–09 variantlar manbasi. `src/extra.js` qo‘shimcha interaksiyalar manbasi; `extra.js` uning yaratilgan nusxasi. `QA-REPORT.md` audit natijalarini saqlaydi. `download_fonts.ps1` qo‘shimcha shriftlarni Google Fonts rasmiy xizmatidan olib, mahalliy nusxa va OFL litsenziyasini saqlaydi.

Material varianti mustaqil dizayn namunasi, Google mahsuloti emas. Ilhom manbalari: https://m3.material.io/ va https://design.google/library/expressive-material-design-google-research

Tanlovda oldindan tayyorlangan shablon yoki koddan foydalanish uchun joydagi amaldagi reglament tekshiriladi.
