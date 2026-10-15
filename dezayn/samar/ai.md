# Samar — tanlovda yangi AI uchun boshlash

Snapshot: 2026-10-15; source fingerprint: `87b40c0d4e072778`. Readable page: https://azizbeksafarov.github.io/design/samar/

## O‘qish vositasi uchun zaxira

GitHub Pages brauzerda ishlashi, lekin ayrim AI veb-o‘qish vositalarida ochilmasligi mumkin. [Ushbu AI matnining GitHub nusxasi](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/ai.md), [o‘qiladigan source](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/source.md) va [kod ZIP](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/source.zip) bir xil paketdir. `.io` havolalari o‘qilmasa, ushbu raw nusxalar va quyidagi alohida fayllardan foydalan. [Qisqa tanlov konteksti raw](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/handoff/competition.md); [to‘liq tanlov tadqiqoti raw](https://raw.githubusercontent.com/AzizbekSafarov/ustoz/main/ai.md). Matn yoki ZIP chatga berilgan bo‘lsa, yana internetdan hammasini yuklash shart emas.

## 1. Vazifa va ustuvorlik

Azizbek Safarov bilan Ustoz AI “Eng yaxshi veb-sayt” tanlovi uchun ishlaysan. O‘zbekcha muloqot qil. Hozirgi bilet, qolgan vaqt va joydagi reglament bu tayyorgarlik nusxasidan ustuvor. Bilet mavjud bo‘lsa, ishni davom ettir; yo‘q bo‘lsa, aynan bilet va haqiqiy vaqtni bitta qisqa savolda so‘ra. Mavzuni yoki rasmiy muddatni uydirma. Foydalanuvchi ushbu dizaynni tanlagan: uslubini saqla, sample mazmun va amallarni vazifaga mazmunli moslashtir.

## 2. Tanlov haqida yetarli kontekst

Ishtirokchi bergan ma’lumot: Urgut → Samarqand viloyat bosqichi, 2026-yil 13-oktabr. Yig‘ilgan mahalliy qarordagi mezonlar: funksiya 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10. Avval majburiy oqim, mazmun va texnologiyaning ishlash dalili; keyin bezak. Batafsil mezonlar PDFi tasdiqqa taqdim etilgan loyiha: uni yakuniy reglament deb olma. Amaliy vaqt tasdiqlanmagan; 120 daqiqa faqat mashq bo‘lgan. Video transkriptida tashkilotchi kompyuteri, Antigravity/Codex, ulash uchun 15 daqiqa, shablonlardan foydalanish va 15 daqiqa himoya aytilgan. Joydagi qoidalar ustuvor.

- [Manbalar maqomi va qisqa tanlov konteksti](https://azizbeksafarov.github.io/design/handoff/competition.md)
- [Barcha yig‘ilgan local + web ma’lumotlari](https://azizbeksafarov.github.io/ustoz/ai.md)
- [Mezonlar bo‘yicha ish rejasi](https://azizbeksafarov.github.io/ustoz/06-SCORE-WORKPLAN.md)

## 3. Tanlangan dizayn

Krem fon, yashil aksent, Georgia serif sarlavhalari va me’moriy kompozitsiya; iliq tahririy uslub.

Asosiy amallar: Sayohat kartalari · bron arizasi · mobil menyu. Mos sohalar: Turizm, shahar, tarix, madaniyat va mahalliy loyihalar. Statistika, narx, foydalanuvchi profili va fikrlar namunaviy. Formalar demo; backend yoki haqiqiy yuborish yo‘q. Bloom/Qadam progressi, saqlash va temalar; Forma savati; Spark palitrasi shu brauzerda saqlanadi. Bilet so‘ragan haqiqiy funksiyalarni qur; demo natijani haqiqiy xizmat deb ko‘rsatma.

## 4. Haqiqiy kodni olish

- [Tahrirlanadigan kod + tayyor build + local shriftlar + yo‘riqnomalar](https://azizbeksafarov.github.io/design/samar/source.zip)
- [AI o‘qiydigan tanlangan kod](https://azizbeksafarov.github.io/design/samar/source.md)
- [Kodning HTML ko‘rinishi](https://azizbeksafarov.github.io/design/samar/source.html)
- [Paket, fayllar va SHA-256 manifesti](https://azizbeksafarov.github.io/design/samar/manifest.json)
- [Jonli namuna](https://azizbeksafarov.github.io/design/02-samar.html)
- [GitHub source papkasi](https://github.com/AzizbekSafarov/azizbeksafarov.github.io/tree/main/design)

Source archive va matn bir snapshotdan yaratilgan. ZIPni ochgach `AGENTS.md`, `AI-BRIEF.md`, `CURRENT-TASK.md`, `HANDOFF.md` ni o‘qi. Ish papkasi `site/`. Internet faylni o‘qish imkoniyati bo‘lmasa, foydalanuvchi AI matnini nusxalaydi yoki ZIPni beradi; havola o‘z-o‘zidan xotira, kodni tahrirlash yoki brauzer imkoniyatini yaratmaydi.

## 5. Fayl xaritasi va ishga tushirish

- `02-samar.html`: selected page; its custom styles are inline.
- `shared.css`, `shared.js`: shared layout, dialogs/forms, filters, cart/dashboard interactions.
- `extra.js`, `lesson-model.js`: Qadam/Spark and additional interactions, where referenced.
- `assets/fonts/`: local fonts and licenses.
- `src/shared.js`, `src/extra.js`, `src/lesson-model.js`, `src/material.css`: library source.
- `build_templates.py`, `extra_templates.py`: original generators; rerunning them overwrites generated edits.

Faqat kerakli faylni o‘qish uchun (to‘g‘ridan-to‘g‘ri GitHub matni):
- [02-samar.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/02-samar.html.txt)
- [shared.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/shared.css.txt)
- [shared.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/shared.js.txt)

Plain HTML/CSS/JavaScript; npm installation is not needed. Preserve the files referenced by the selected HTML, including fonts and model scripts. For the timed competition, edit the isolated HTML/runtime files directly. To maintain the original gallery instead, change generator/source files and regenerate deliberately, then run `python design/build_handoff.py` in the publishing repository.

Oldindan yig‘ilgan nusxa uchun npm yoki internet shart emas: ZIP ildizida `node serve.mjs`, so‘ng http://127.0.0.1:8080/ . Node bo‘lmasa README’dagi Python usulini ishlat. Bloom source tahriri uchun npm paketlari o‘rnatilgan/cache’da bo‘lishi yoki internet kerak.

```text
node serve.mjs
# Syntax checks, from site/ if Node is available:
node --check shared.js
node --check extra.js
node --check lesson-model.js
node verify-lesson-model.cjs
```

## 6. Moslashtirish va xatoni o‘zi tuzatish tartibi

- Biletni “talab → foydalanuvchi amali → kod joyi → qabul sinovi” jadvaliga aylantir. Vazifaga mos navigatsiya, nomlar, ma’lumot va asosiy natijani yoz.
- Haqiqiy source fayllarini o‘qi; mavjud ishga tushirishni tekshir. Kichik xato uchun butun saytni boshqa framework/dizaynga qayta qurma. Oddiy tanlov va qaytariladigan tuzatishlarni mustaqil bajar.
- Dizayn rang/shrift/masofa iyerarxiyasini saqla. Bo‘limlarni va modelni vazifaga moslashtir; backend faqat vazifa talab qilsa quriladi. Ma’lumot modeli o‘zgarsa storage keyni versiyala/migratsiya qil; boshqa brauzer ma’lumotini tozalama.
- Xatoda: aniq holatni takrorla → konsol/resurs va tegishli kodni tekshir → sababni tuzat → shu oqimni qayta sina. Xatoni yashirish yoki tugmani olib tashlash yechim emas.
- Bitta asosiy yozuvchi ishlasin. Limitni asra: avval shu qisqa kontekst va tegishli fayllar, katta minified vendor JS yoki barcha tarixni birga yuklama.

## 7. Saqlanishi kerak bo‘lgan tuzatishlar

Keep visible button states, labels, dialog Escape/focus and responsive navigation. A shared-script change can affect other pages: check the selected page's flows and the directly related shared behavior. Keep Qadam lesson progress idempotent and persisted, Forma totals derived from quantity, and Pulseboard CSV consistent with its active query.

## 8. Qabul sinovlari

Quyidagi baseline amallarni yangi bilet oqimiga moslab tekshir. Eski QA bugungi o‘zgarishlarning isboti emas.

- Mobil menyu va sahifa bo‘limlari.
- Sayohat tanlash → shu sayohat nomi bilan bron arizasi → validatsiya → demo natija.
- 320/390, 768, 1024, 1440 px: asosiy CTA va yozuvlar kesilmaydi; sahifa bo‘ylab keraksiz horizontal scroll yo‘q. Jadvalning belgilangan ichki scrolli mumkin.
- Bo‘sh/noto‘g‘ri ma’lumot, topilmagan natija, uzun matn, klaviatura Tab/Enter/Escape, ko‘rinadigan fokus va qo‘llangan light/dark rang juftlari.
- Tegishli saqlanishni reload bilan tekshir; shrift/JS/CSS 404lari va ishlashga ta’sir qiladigan konsol xatolari qolmasin.

## 9. Davom ettirish va topshirish

`CURRENT-TASK.md` ga bilet, vaqt va cheklovni yoz. `HANDOFF.md` ga fayllar, bajarilgan/qolgan ish, haqiqiy tekshiruv, ochiq xato va keyingi bitta amalni yozib bor. Shu faylni yangi AIga berish davom ettirishni osonlashtiradi. Oxirida ishlaydigan link/local run, editable source, talablarga mos test qaydi va himoya uchun muammo → yechim → to‘liq oqim → texnologiya → cheklov izohini tayyorla. “Xatosiz”, “to‘liq testlangan” yoki ball kafolatini dalilsiz aytma.
