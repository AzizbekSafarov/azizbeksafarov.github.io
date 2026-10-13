# Dizayn shablonlari — mahalliy tanlash galereyasi

Barcha 10 variant GitHub Pages’da: https://azizbeksafarov.github.io/design/

Tanlovda yangi AI bilan boshlash: https://azizbeksafarov.github.io/design/start/ . Bloom uchun qisqa manzil: https://azizbeksafarov.github.io/design/bloom/ . Kod, AI konteksti, tekshiruv va sessiyani davom ettirish paketi haqida `HANDOFF-README.md` ni o‘qing. Source o‘zgargach `build_handoff.py` va `verify_handoff.py` ham bajariladi.

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

10. Bloom · Material Design 3 — `material-expressive/dist/index.html` mavjud bo‘lsa galereyaga qo‘shiladi.

`index.html` galereyani ochadi. 01–09 sahifalar oddiy HTML/CSS/JavaScript; Bloom React, Motion va rasmiy Material Web komponentlari bilan yig‘ilgan mustaqil static build. Runtime CDN ishlatilmaydi. Qo‘shimcha shriftlar mahalliy fayllar sifatida litsenziyalari bilan saqlangan. Illyustratsiyalar SVG yoki CSS ko‘rinishida yaratilgan.

Formalar demo: ma’lumot serverga yuborilmaydi. Savat, Qadam kurslari/progressi/temasi va Spark rang tanlovi shu brauzerda saqlanadi; to‘lov yo‘q. Forma ma’lumotlari saqlanmaydi. Dashboard raqamlari va CSV yozuvlari demo. Barcha statistikalar, narxlar va fikrlar namunaviy.

`build_templates.py` manba generatori. O‘zgarishlarni generatorlarda va `src/shared.js`, `src/extra.js` fayllarida kiriting, keyin generatorni ishga tushiring. HTML, CSS, JS va katalog yozuvlari qayta yaratiladi.

`extra_templates.py` 06–09 variantlar manbasi. `src/extra.js` qo‘shimcha interaksiyalar manbasi; `extra.js` uning yaratilgan nusxasi. `QA-REPORT.md` audit natijalarini saqlaydi. `download_fonts.ps1` qo‘shimcha shriftlarni Google Fonts rasmiy xizmatidan olib, mahalliy nusxa va OFL litsenziyasini saqlaydi.

Material varianti mustaqil dizayn namunasi, Google mahsuloti emas. Ilhom manbalari: https://m3.material.io/ va https://design.google/library/expressive-material-design-google-research

Tanlovda oldindan tayyorlangan shablon yoki koddan foydalanish uchun joydagi amaldagi reglament tekshiriladi.
