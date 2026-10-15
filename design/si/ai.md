# Yuksal · SI — tanlovda yangi AI uchun boshlash

Snapshot: 2026-10-15; source fingerprint: `4c2f7bdcb31e33fd`. Readable page: https://azizbeksafarov.github.io/design/si/

## O‘qish vositasi uchun zaxira

GitHub Pages brauzerda ishlashi, lekin ayrim AI veb-o‘qish vositalarida ochilmasligi mumkin. [Ushbu AI matnining GitHub nusxasi](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/ai.md), [o‘qiladigan source](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/source.md) va [kod ZIP](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/source.zip) bir xil paketdir. `.io` havolalari o‘qilmasa, ushbu raw nusxalar va quyidagi alohida fayllardan foydalan. [Qisqa tanlov konteksti raw](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/handoff/competition.md); [to‘liq tanlov tadqiqoti raw](https://raw.githubusercontent.com/AzizbekSafarov/ustoz/main/ai.md). Matn yoki ZIP chatga berilgan bo‘lsa, yana internetdan hammasini yuklash shart emas.

## 1. Vazifa va ustuvorlik

Azizbek Safarov bilan Ustoz AI “Eng yaxshi veb-sayt” tanlovi uchun ishlaysan. O‘zbekcha muloqot qil. Hozirgi bilet, qolgan vaqt va joydagi reglament bu tayyorgarlik nusxasidan ustuvor. Bilet mavjud bo‘lsa, ishni davom ettir; yo‘q bo‘lsa, aynan bilet va haqiqiy vaqtni bitta qisqa savolda so‘ra. Mavzuni yoki rasmiy muddatni uydirma. Foydalanuvchi ushbu dizaynni tanlagan: uslubini saqla, sample mazmun va amallarni vazifaga mazmunli moslashtir.

## 2. Tanlov haqida yetarli kontekst

Ishtirokchi bergan ma’lumot: Urgut → Samarqand viloyat bosqichi, 2026-yil 13-oktabr. Yig‘ilgan mahalliy qarordagi mezonlar: funksiya 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10. Avval majburiy oqim, mazmun va texnologiyaning ishlash dalili; keyin bezak. Batafsil mezonlar PDFi tasdiqqa taqdim etilgan loyiha: uni yakuniy reglament deb olma. Amaliy vaqt tasdiqlanmagan; 120 daqiqa faqat mashq bo‘lgan. Video transkriptida tashkilotchi kompyuteri, Antigravity/Codex, ulash uchun 15 daqiqa, shablonlardan foydalanish va 15 daqiqa himoya aytilgan. Joydagi qoidalar ustuvor.

- [Manbalar maqomi va qisqa tanlov konteksti](https://azizbeksafarov.github.io/design/handoff/competition.md)
- [Barcha yig‘ilgan local + web ma’lumotlari](https://azizbeksafarov.github.io/ustoz/ai.md)
- [Mezonlar bo‘yicha ish rejasi](https://azizbeksafarov.github.io/ustoz/06-SCORE-WORKPLAN.md)

## 3. Tanlangan dizayn

SI.gov vizual uslubidagi mustaqil Yuksal · SI: O‘zbekiston palitrasi: moviy #0099b5, oq #ffffff, yashil #1eb53a; oq #ffffff asosiy fon; to‘q teal #062c35 matn, moviy kursiv. #ce1126 faqat bayroqning ikki ingichka hoshiyasida; mahalliy Instrument Serif/Sans; canvas SI zarrachalari, katta tahririy sarlavhalar, dumaloq menyu, yon nuqta navigatsiyasi va och kartalar. Rasmiy davlat xizmati emas.

Asosiy amallar: O‘zbekiston palitrasi · 12 yulduzli bayroq · SI ↔ Super Intelligence · kursor / click fizikasi · scroll morph · shaxsiy reja. Mos sohalar: AI, ilm-fan, ta’lim, tashabbuslar, innovatsiya va taqdimot saytlari. Statistika, narx, foydalanuvchi profili va fikrlar namunaviy. Formalar demo; backend yoki haqiqiy yuborish yo‘q. Bloom progressi/tema, Yuksal va Samar rejasi, Forma savati shu brauzerda saqlanadi. Bilet so‘ragan haqiqiy funksiyalarni qur; demo natijani haqiqiy xizmat deb ko‘rsatma.

## 4. Haqiqiy kodni olish

- [Tahrirlanadigan kod + tayyor build + local shriftlar + yo‘riqnomalar](https://azizbeksafarov.github.io/design/si/source.zip)
- [AI o‘qiydigan tanlangan kod](https://azizbeksafarov.github.io/design/si/source.md)
- [Kodning HTML ko‘rinishi](https://azizbeksafarov.github.io/design/si/source.html)
- [Paket, fayllar va SHA-256 manifesti](https://azizbeksafarov.github.io/design/si/manifest.json)
- [Jonli namuna](https://azizbeksafarov.github.io/design/si-site/index.html)
- [GitHub source papkasi](https://github.com/AzizbekSafarov/azizbeksafarov.github.io/tree/main/design/si-site)

Source archive va matn bir snapshotdan yaratilgan. ZIPni ochgach `AGENTS.md`, `AI-BRIEF.md`, `CURRENT-TASK.md`, `HANDOFF.md` ni o‘qi. Ish papkasi `site/`. Internet faylni o‘qish imkoniyati bo‘lmasa, foydalanuvchi AI matnini nusxalaydi yoki ZIPni beradi; havola o‘z-o‘zidan xotira, kodni tahrirlash yoki brauzer imkoniyatini yaratmaydi.

## 5. Fayl xaritasi va ishga tushirish

- `index.html`: bo‘lim, kartalar, o‘zbekcha matn va dialoglar.
- `style.css`: O‘zbekiston moviy/oq/yashil palitrasi, oq asosiy fon, to‘q teal matn va responsive holatlar.
- `app.js`: menyu, filtr, reja, yuklash va harakat sozlamalari.
- `motion.js`: yagona persistent spring particle field; hover/tap morph, kursor, click to‘lqini va scroll shakllari.
- `motion.test.mjs`: fizik barqarorlik, kursor, to‘lqin va harakatlanuvchi shakllar.
- `MOTION.md`: originaldan tekshirilgan animatsiya kontrakti.
- `model.js`: ID, mazmun, uch qadam va reja validatsiyasi.
- `model.test.mjs`: saqlanish, toggle va eksport testlari.
- `fonts/`: mahalliy Instrument shriftlar va OFL.
- `QA-REPORT.md`: haqiqiy tekshiruv.

Faqat kerakli faylni o‘qish uchun (to‘g‘ridan-to‘g‘ri GitHub matni):
- [index.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/index.html.txt)
- [style.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/style.css.txt)
- [app.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/app.js.txt)
- [motion.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/motion.js.txt)
- [motion.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/motion.test.mjs.txt)
- [model.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/model.js.txt)
- [model.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/model.test.mjs.txt)
- [uzbekistan.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/uzbekistan.svg.txt)
- [brand-icon.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/si/files/brand-icon.svg.txt)

Plain HTML/CSS/JavaScript ES modules, canvas va native dialog. Npm kerak emas; HTTP serverda ishlaydi. HTML karta IDlari model.js bilan mos qolsin. Canvas butun sahifaga fixed; 1800 desktop / 1500 mobile nuqta, DPR 2, requestAnimationFrame va delta-time spring. SI → Super Intelligence: desktop serpentine text, mobile rotating lettering circle. Pointer repulsion radius 120 px; click expanding wave; spring .045 va damping .84. Scroll shakllarni almashtiradi, zarracha identity/velocity saqlanadi. Hidden tab/pause’da to‘xtaydi; faqat hero offscreen bo‘lgani uchun to‘xtatma. `MOTION.md` ni o‘qi. OS reduced-motion va statik SI fallback saqlansin.

Oldindan yig‘ilgan nusxa uchun npm yoki internet shart emas: ZIP ildizida `node serve.mjs`, so‘ng http://127.0.0.1:8080/ . Node bo‘lmasa README’dagi Python usulini ishlat. Bloom source tahriri uchun npm paketlari o‘rnatilgan/cache’da bo‘lishi yoki internet kerak.

```text
node serve.mjs
# ZIPdagi site/ ichida alohida terminal:
cd site
node --test model.test.mjs motion.test.mjs
```

## 6. Moslashtirish va xatoni o‘zi tuzatish tartibi

- Biletni “talab → foydalanuvchi amali → kod joyi → qabul sinovi” jadvaliga aylantir. Vazifaga mos navigatsiya, nomlar, ma’lumot va asosiy natijani yoz.
- Haqiqiy source fayllarini o‘qi; mavjud ishga tushirishni tekshir. Kichik xato uchun butun saytni boshqa framework/dizaynga qayta qurma. Oddiy tanlov va qaytariladigan tuzatishlarni mustaqil bajar.
- Dizayn rang/shrift/masofa iyerarxiyasini saqla. Bo‘limlarni va modelni vazifaga moslashtir; backend faqat vazifa talab qilsa quriladi. Ma’lumot modeli o‘zgarsa storage keyni versiyala/migratsiya qil; boshqa brauzer ma’lumotini tozalama.
- Xatoda: aniq holatni takrorla → konsol/resurs va tegishli kodni tekshir → sababni tuzat → shu oqimni qayta sina. Xatoni yashirish yoki tugmani olib tashlash yechim emas.
- Bitta asosiy yozuvchi ishlasin. Limitni asra: avval shu qisqa kontekst va tegishli fayllar, katta minified vendor JS yoki barcha tarixni birga yuklama.

## 7. Saqlanishi kerak bo‘lgan tuzatishlar

Oq asosiy fon (foydalanuvchi talabi), O‘zbekiston palitrasi, moviy CTA, oq/yashil sirtlar, serif-kursiv/sans farqi va outline holatlar saqlansin. USA bayrog‘iga qaytarma: 3 tasma, 2 ingichka qizil hoshiya, oq yarim oy va 3/4/5 qatorda jami 12 yulduz. Bayroq harakatida ranglari tezlik sabab o‘zgarmasin. Animatsiya matn/tugmani to‘smasin; mobilga majburiy scroll-snap qo‘shilmasin. Pause canvas hamda orbni to‘xtatsin. Favicon brand-icon.svg/PNG Yuksal belgisi; bayroqni favicon qilma. Plan faqat known unique IDlarni oladi; storage event orqali tablar sinxronlashadi, har o‘zgartirish oldidan eng yangi reja o‘qiladi; boshqa storage tozalanmaydi. Detail action footer va Escape/fokus qaytishi saqlansin. Hisob/eksport tanlangan yo‘nalishlarga mos bo‘lsin.

## 8. Qabul sinovlari

Quyidagi baseline amallarni yangi bilet oqimiga moslab tekshir. Eski QA bugungi o‘zgarishlarning isboti emas.

- SI → Super Intelligence hover / mobil tap, kursor itarishi va click to‘lqini. Scroll: ring → helix → towers → ring → broadcast → scatter → flag. Pause/reduced-motion va statik SI fallback.
- Dumaloq menyu → bo‘lim; Escape → ochgan tugmaga fokus qaytishi.
- Kategoriya → 4/2/1/1 kartalar; aniq tanlangan holat.
- Detail → reja qo‘shish/olish → hisob → reload → ikkinchi tab sinxronlashuvi → matn yuklash; bo‘sh rejada yuklash o‘chiq.
- 320 px dialog, uzun sarlavha va yopish/saqlash amallari; lokal shrift va resurslar.
- 320/390, 768, 1024, 1440 px: asosiy CTA va yozuvlar kesilmaydi; sahifa bo‘ylab keraksiz horizontal scroll yo‘q. Jadvalning belgilangan ichki scrolli mumkin.
- Bo‘sh/noto‘g‘ri ma’lumot, topilmagan natija, uzun matn, klaviatura Tab/Enter/Escape, ko‘rinadigan fokus va qo‘llangan light/dark rang juftlari.
- Tegishli saqlanishni reload bilan tekshir; shrift/JS/CSS 404lari va ishlashga ta’sir qiladigan konsol xatolari qolmasin.

## 9. Davom ettirish va topshirish

`CURRENT-TASK.md` ga bilet, vaqt va cheklovni yoz. `HANDOFF.md` ga fayllar, bajarilgan/qolgan ish, haqiqiy tekshiruv, ochiq xato va keyingi bitta amalni yozib bor. Shu faylni yangi AIga berish davom ettirishni osonlashtiradi. Oxirida ishlaydigan link/local run, editable source, talablarga mos test qaydi va himoya uchun muammo → yechim → to‘liq oqim → texnologiya → cheklov izohini tayyorla. “Xatosiz”, “to‘liq testlangan” yoki ball kafolatini dalilsiz aytma.
