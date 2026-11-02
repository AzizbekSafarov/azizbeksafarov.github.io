# Orbita — tanlov uchun yangi AI konteksti

Bu — Orbita dizaynini tanlov biletiga moslashtiradigan AI uchun qo‘llanma. Foydalanuvchi bilan o‘zbekcha, sodda tilda gaplash: u kod yozmaydi.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Ikkala joyda ham bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

ZIP ichida ish qoidalari va o‘qish tartibi `AGENTS.md` da. Kod `site/` papkasida.

Snapshot 2026-11-02; fingerprint d8693195efef5ce5.

## Tanlov

Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi. Manba maqomlari: **[Imzoli qaror]** — qo‘shma qaror; **[Sayt]** — Ustoz AI saytidagi farqli PDF tahriri; **[Loyiha]** — tasdiqqa taqdim etilgan 11 sahifalik mezonlar; **[Video]** — tashkilotchining tarixiy yo‘riqnomasi. Ularni bitta yangi nizom deb birlashtirmang.

1. **Baholash:** funksionallik 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10 — jami 100. [Imzoli qaror, 19-band; Sayt: tartibi farqli, vaznlari mos]. Avval biletdagi majburiy funksiyalar va mazmun.
2. **Teng ball:** avval sifat va funksionallik. Keyingi ustunlik [Imzoli qaror, 20¹-band] bo‘yicha zamonaviy texnologiyalar; [Sayt, 20¹-band] bo‘yicha kreativlik va originallik. Aynan joydagi qo‘llanadigan tahrir aniqlanadi.
3. **Himoya:** 15 daqiqa — 5 taqdimot + 5 namoyish + 5 savol-javob; qo‘shimcha vaqt berilmaydi. [Imzoli qaror, 7–9-bandlar; Sayt]. Ssenariy: `ZAXIRA/HIMOYA.md`.
4. **Hududiy ko‘lam:** kamida 3 sahifa yoki teng hajmli ekran, noto‘g‘ri kiritishni tekshiradigan 2 ta bog‘liq amal va natija, taxminan 2 soat — tavsiya. [Loyiha, 12–13-bandlar]. Bu tasdiqlangan universal vaqt emas. Saqlash usuli brauzer/server ekanini bilet belgilaydi; faqat biletdagi majburiy imkoniyatlar talab qilinadi [Loyiha, 23-band].
5. **Sozlash:** kompyuter tashkilotchidan, Antigravity/Codex va akkaunt ulash uchun 15 daqiqa [Video]. Bu vaqt amaliy ishga kirmasligi va sinov loyihasi tanlov ishida ishlatilmasligi [Loyiha, 12-band] da yozilgan; videoga tegishli bo‘lmagan tafsilotni unga yuklamang.
6. **AI va shablon:** g‘oya/shablon olish [Video], AI/no-code/ochiq materiallar va manbani ko‘rsatish [Loyiha]. Oldindan tayyorlangan to‘liq loyihani topshirish taqiqi [Loyiha, 2-bob, 2-sahifa: “Taqiqlanadi”]. Starter biletga haqiqatan moslashtiriladi; ruxsat etilgan tayyor kod chegarasi joyda aniqlanadi.
7. **Jonli tahrir ziddiyati:** ekspert real vaqtda o‘zgartirishni so‘rashi mumkin, bajara olmagan ishtirokchining ishi baholanmaydi [Imzoli qaror, 7–9-bandlar]. [Sayt] nusxasida bu band yo‘q. [Loyiha, 17-band] topshirilgan loyihani himoyada o‘zgartirishga yo‘l qo‘ymaydi. Joydagi ko‘rsatmani aniqlang; mashq xaritasi `ZAXIRA/JONLI-OZGARISH.md` da.
8. **Topshirish va tekshiruv:** 390/768/1366 px, source va ishga tushirish yo‘riqnomasi, qisqa tavsif/manbalar, 3–5 ekran tasviri va 1–2 daqiqalik video [Loyiha, 12–15-bandlar va baholash jadvali]. 21 batafsil ko‘rsatkich tasdiqlanmagan loyiha; tayyorgarlik vositasi, yangi rasmiy bilet emas.

Saqlangan nizom matnlari bilan muvofiqlik tahriri: 2026-11-02. Tashqi qoidalar oxirgi tekshirilgan sana: 2026-10-28; bugun yangi hujjat yuklangani anglatilmaydi. Haqiqiy bilet, amaldagi reglament va joydagi ko‘rsatma ustuvor. Manbalar: [qisqa kontekst](https://azizbeksafarov.github.io/design/handoff/competition.md), [qoidalar holati](https://azizbeksafarov.github.io/design/handoff/current-competition.md), [mezon → ish → dalil](https://azizbeksafarov.github.io/design/handoff/score-workplan.md), [to‘liq nizomlar, 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md).

## Vizual kontrakt
Kosmik observatoriya: Chakra Petch sarlavha va o‘qiladigan izohlar, IBM Plex Mono texnik o‘lchov va boshqaruv yozuvlari. Siyoh-qora teal, fosfor-yashil signal, asbob oynasi burchaklari, katta orbital SVG va vertikal missiya registri. Chizma shartli, jonli telemetriya emas. Bezaksiz texnik ovoz; oq marketing hero yoki kartali dashboardga aylantirma.

Bu mustaqil original implementatsiya; NASA, Muuto yoki professional studiya tomonidan yaratilgan/tasdiqlangan deb aytma. Boshqa starterga o‘xshatib tekislashtirma. Faqat rangni almashtirish dizayn emas. Mazmun markazi, masshtab, grid va o‘zaro ta’sir shaklini saqla.

## Kod va ishga tushirish
- [Jonli demo](https://azizbeksafarov.github.io/design/orbita-site/)
- [To‘liq source ZIP](https://azizbeksafarov.github.io/design/orbita/source.zip)
- [Manifest va hash](https://azizbeksafarov.github.io/design/orbita/manifest.json)
- [Tanlangan source matni](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/source.md)
- [Pages ishlamasa raw brief](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/ai.md)

Rootda `node serve.mjs`; http://127.0.0.1:8080/ . Python fallback: `python -m http.server 8080 --bind 127.0.0.1 --directory site`. Npm kerak emas. Test: `node --test site/*.test.mjs`.

index.html — mazmun va tuzilma. style.css — lokal fontlar va accessibility mexanikasi. layout.css — tanlangan sohaning to‘liq kompozitsiyasi, tipografika va responsive. app.js — event, dialog/fokus, filtr, saqlash, download. model.js — data va hisob/validatsiya. model.test.mjs — meaningful model checks. Paketdagi font va rasmlar lokal. CREDITS.md litsenziyalar. Tanlov nusxasida shu fayllar to‘g‘ridan-to‘g‘ri tahrirlanadi; build kerak emas.

Source faylni alohida o‘qish:
- [index.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/index.html.txt)
- [style.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/style.css.txt)
- [layout.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/layout.css.txt)
- [app.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/app.js.txt)
- [model.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/model.js.txt)
- [model.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/model.test.mjs.txt)
- [mark.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/mark.svg.txt)
- [CREDITS.md](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/CREDITS.md.txt)
- [package.json](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/orbita/files/package.json.txt)

## Asosiy oqim va tekshiruv
Missiya tanlash → chizma va ma’lumot yangilanishi → kuzatuvga qo‘shish → saqlanish → TXT eksport

Manba IDlari markup/modelda mos qolsin. Foydalanuvchi matnini innerHTMLga qo‘shma. Saqlash known unique IDlarni oladi, buzilgan JSON fallback bor; storage cheklansa joriy tab davom etadi. Boshqa tab storage event orqali yangilanadi. SVG chizmasi shartli, jonli telemetriya emas. Harakat Pause, hidden tab va OS reduced-motion sozlamasiga mos qolsin.

Talab → amal → kod → qabul tekshiruvi. Asosiy oqim, bo‘sh/xato/natija, reload, 390, 768 va 1366 px (mezonlardagi kengliklar), qo‘shimcha 320 va 1440 px, fokus, Escape, shrift/rasm, console va overflow. Animatsiya kontekstni tushuntirsin, foydalanuvchi amalini yashirmasin; reduced-motion saqlansin.

HANDOFF.md ga bilet, o‘zgargan fayl, haqiqiy test natijasi, ochiq muammo va keyingi amalni yoz. Oldingi QA bugungi tahrirga kafolat emas. Starter brauzerda ishlaydi va server talab qilmaydi. Bilet server, login yoki baza talab qilsa va joyda tashqi xizmatlarga ruxsat bo‘lsa, `ARCHITECTURE.md` dagi Render + Supabase rejasidan foydalan (bu reja, hali yaratilgan xizmat emas). Demo natijani haqiqiy yuborish yoki to‘lov deb ko‘rsatma. Link avtomatik xotira yoki vosita bermaydi; AI o‘qiy olmasa ZIP/matnni chatga bering.

## Yangi sahifa yoki ekran qo‘shish

Fayllar: `site/index.html`, `site/app.js`; mavjud kirish funksiyasi: `render`.

`.orb-header nav` ichiga yangi hash havolasi va main ichiga mos section qo‘sh. render missiya hamda kuzatuvni yangilaydi; yangi ekran uchun alohida funksiya yoz. Yangi missiya qo‘shilsa model.js data, data-mission tugmasi va render ichidagi mode koordinatalari ham mos bo‘lsin.

HTML starterlarda haqiqiy alohida URL talab qilinsa yangi HTML fayl yarat, umumiy shrift/CSS resurslarini nisbiy yo‘l bilan ula va barcha menyularga havola qo‘sh. app.js ni ko‘r-ko‘rona yangi sahifaga ulamang: u mavjud DOM IDlarini kutadi; shu sahifaga tegishli kodni ajrating. Bo‘lim, dialog yoki filtrning o‘zi avtomatik ravishda biletdagi “sahifa” talabini bajarmaydi — talab etilgan hajm va mustaqil vazifani tekshiring.

Qabul sinovi: menyudan kirish, to‘g‘ridan-to‘g‘ri URL (agar mavjud), orqaga qaytish, klaviatura/fokus, 390/768/1366 px va eski asosiy oqim. Bu qo‘shish yo‘riqnomasi, yangi sahifa allaqachon qurilgan degani emas.

## O‘qilish va harakat xarakteri

Observatoriya: Chakra Petch sarlavha va izoh, Plex Mono o‘lchov/boshqaruv. ISS orbital harakati pause/visibility holatiga bo‘ysunadi; boshqa missiyalar statik xaritaga ega. Faol asbob tanlovi chiziq va fon bilan ajraladi.

Yangi matnni sig‘dirish uchun xizmat yozuvlarini mayda qilib yubormang: uzun o‘zbekcha matn, 320/390 px va katta zoom bilan tekshiring. Harakat holat o‘zgarishini tushuntirsin, amalni kutishga majburlamasin. prefers-reduced-motion, dialogdan fokus qaytishi va ko‘rinadigan natija saqlansin. Nusxadagi HTML starterlarda CSS site/layout.css, Bloom’da site/src/style.css; SI’da site/style.css va site/motion.js. Har starterga o‘zida mavjud faylni qo‘llang.

## Tayyor amallar, validatsiya va saqlash xaritasi

| Qism | Hozirgi namuna | Kod joyi |
|---|---|---|
| Bog‘liq amallar | Missiya tanlash → kuzatuvga qo‘shish → TXT eksport. | `site/app.js` → `render`, `site/app.js` → `toggle`, `site/app.js` → `download` |
| Noto‘g‘ri kiritish | model.js normalize saqlangan IDlarni tozalaydi. Matnli ariza/forma tekshiruvi yo‘q; bilet talab qilsa qo‘shiladi. | `site/model.js` → `normalize` |
| Saqlash | app.js read/commit; saqlash xatosida joriy tab xotirasi va eksport bor. | `site/app.js` → `read`, `site/app.js` → `commit` |

Bu mavjud kod xaritasi, biletga muvofiqlik sertifikati emas. Storage ma’lumotini tozalash foydalanuvchi formasidagi xato xabari o‘rnini bosmaydi. Biletdagi ikki bog‘liq amal, maydon validatsiyasi va saqlash talabi uchun yetishmayotgan qismlarni qurib, muvaffaqiyat/xato/reload yo‘llarini amalda tekshir.

## Shrift va rasmlar

Dizaynning bir qismi binary fayllarda: shriftlar, suratlar, ikonkalar. Ular `source.zip` ichidagi `site/` da bor, lekin matn eksportida (`source.md`, `files/*.txt`) yo‘q. To‘liq dizayn uchun ZIP ichidagi `site/` bilan ishla. ZIP’ni ocha olmasang, har faylni quyidagi havoladan aynan shu yo‘lga yukla; shriftni CDN yoki boshqa shrift bilan almashtirma.

| Fayl (`site/` ichida) | Hajm | Havola |
|---|---|---|
| `fonts/chakrapetch.ttf` | 76 KB | [yuklash](https://azizbeksafarov.github.io/design/orbita-site/fonts/chakrapetch.ttf) |
| `fonts/mono.ttf` | 132 KB | [yuklash](https://azizbeksafarov.github.io/design/orbita-site/fonts/mono.ttf) |
