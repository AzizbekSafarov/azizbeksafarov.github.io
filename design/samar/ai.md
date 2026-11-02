# Samar — yangi AI bilan davom ettirish

Bu — Samar dizaynini tanlov biletiga moslashtiradigan AI uchun qo‘llanma. Foydalanuvchi bilan o‘zbekcha, sodda tilda gaplash: u kod yozmaydi.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Ikkala joyda ham bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

ZIP ichida ish qoidalari va o‘qish tartibi `AGENTS.md` da. Kod `site/` papkasida.

Snapshot: 2026-11-02; source fingerprint `601229aab195e4a8`.
Entry: https://azizbeksafarov.github.io/design/samar/

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

## Tanlangan dizayn va haqiqiy kod

Sayohat atlasi. Lora 700 faqat katta sarlavha/atlas ovozi; Source Sans 3 500–700 manzil nomi, xizmat va boshqaruv. Moviy, qum, osmon. Yumaloq oq manzil kartalari, to‘liq moviy pill shaklidagi reja tugmalari, yumshoq soyalar. Mayda rangsiz outline/ghost tugma yoki moda showroomi emas. Buklama xarita markazda, chapda manzillar, o‘ngda reja; mobil xarita → manzillar → reja. Chizma shartli; haqiqiy navigatsiya/bron emas. model.js ma’lumot va hisobni, app.js saqlash, dialog, fokus va eksportni boshqaradi. Narxlar va vaqtlar namunaviy. Bron/to‘lov amalga oshirilmaydi. Katta marketing hero yoki bir xil kartalar gridiga qaytarma.

Bu eski arxiv maketi emas: qayta ishlangan mustaqil starter. Bloom/Yuksalni ko‘chirish bilan almashtirma. Har bir rang, shrift roli va tugma holatini saqla; mazmun/model/funksiyalarni biletga moslashtir.

- [Tahrirlanadigan to‘liq source ZIP](https://azizbeksafarov.github.io/design/samar/source.zip)
- [Tanlangan source matni](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/source.md)
- [Hash va fayl manifesti](https://azizbeksafarov.github.io/design/samar/manifest.json)
- [Jonli namuna](https://azizbeksafarov.github.io/design/samar-site/)
- [GitHub AI matni — Pages o‘qilmasa](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/ai.md)

Ish kodi `site/` ichida. Source fayllar:
- [index.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/index.html.txt)
- [style.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/style.css.txt)
- [layout.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/layout.css.txt)
- [app.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/app.js.txt)
- [model.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/model.js.txt)
- [model.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/model.test.mjs.txt)
- [combinations.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/combinations.test.mjs.txt)
- [mark.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/mark.svg.txt)
- [CREDITS.md](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/CREDITS.md.txt)
- [package.json](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/samar/files/package.json.txt)

index.html — mazmun va boshlang‘ich kartalar. style.css — asosiy token va komponentlar. layout.css — yakuniy mustaqil sahifa kompozitsiyasi, responsive va holatlar. model.js — ma’lumot/validatsiya/hisob. app.js — dialog, amallar, storage va download. images/, fonts/ — lokal resurslar. CREDITS.md — surat litsenziyasi/provenance; almashtirganda yangila. Karta IDlari index.html va model.js da mos bo‘lsin. Tanlov nusxasida shu fayllar to‘g‘ridan-to‘g‘ri tahrirlanadi; build kerak emas.

## Local run va tekshiruv

Npm paket o‘rnatish shart emas. ZIP ildizida `node serve.mjs`; http://127.0.0.1:8080/ . Node bo‘lmasa: `python -m http.server 8080 --bind 127.0.0.1 --directory site`. Model test: `node --test site/*.test.mjs`.

- Manzil tafsiloti → rasmiy manba / xarita → Escape va fokus.
- Manzil qo‘shish/olish → boshlash vaqtini o‘zgartirish → tartiblash → to‘g‘ri vaqt → reload / boshqa tab.
- Bo‘sh reja → o‘chiq download; tanlangan reja → manbali TXT; tun yarmidan o‘tish.

390, 768 va 1366 px (mezonlardagi kengliklar), qo‘shimcha 320 va 1440 px kenglikda brauzerda ko‘r. Document overflow, font/image yuklanishi, Tab/Enter/Space/Escape, fokus qaytishi va dialogning qisqa oynada scrollini tekshir. Images locally bundled; hero has reserved dimensions. CSS reduced-motionni saqlaydi; interactiondan kelgan zoom/dialog/reorder animatsiyasini bezak uchun ko‘paytirma.

Storage faqat known ID va tekshirilgan qiymatlarni oladi. O‘zgarish oldidan so‘nggi state o‘qiladi, boshqa tab storage event bilan yangilanadi; boshqa ma’lumotni tozalama. Saqlash cheklansa joriy tabdagi ish davom etishi va download ishlashi kerak. Model o‘zgarsa keyni versiyala yoki migratsiya qil.

## Ish tartibi

Talab → foydalanuvchi amali → kod joyi → qabul tekshiruvi jadvalini tuz. Asosiy oqimni oxirigacha ishlat. Xatoni takrorla, sababini top, kichik tuzatish qil va qayta sina. Starter brauzerda ishlaydi va server talab qilmaydi. Bilet server, login yoki baza talab qilsa va joyda tashqi xizmatlarga ruxsat bo‘lsa, `ARCHITECTURE.md` dagi Render + Supabase rejasidan foydalan (bu reja, hali yaratilgan xizmat emas). Demo natijani haqiqiy yuborish yoki to‘lov deb ko‘rsatma. DESIGN-STANDARD.md ni o‘qi.

HANDOFF.md ga bilet, o‘zgargan fayllar, haqiqiy buyruq/test natijasi, ochiq muammo va keyingi amalni yoz. Yangi chatga CURRENT-TASK.md va HANDOFF.md ni ber. Link o‘z-o‘zidan xotira, internet yoki fayl tahrirlash vositasini bermaydi; o‘qiy olmasa matn/ZIPni chatga bering.

## Yangi sahifa yoki ekran qo‘shish

Fayllar: `site/index.html`, `site/app.js`; mavjud kirish funksiyasi: `render`.

Desktop navigatsiyasi va `.mobile-nav` ichiga `href="#yangi"`, main ichiga `section id="yangi"` qo‘sh. render reja qismini chizadi; yangi ekran uchun alohida render funksiyasi yoz, reja IDlarini buzma.

HTML starterlarda haqiqiy alohida URL talab qilinsa yangi HTML fayl yarat, umumiy shrift/CSS resurslarini nisbiy yo‘l bilan ula va barcha menyularga havola qo‘sh. app.js ni ko‘r-ko‘rona yangi sahifaga ulamang: u mavjud DOM IDlarini kutadi; shu sahifaga tegishli kodni ajrating. Bo‘lim, dialog yoki filtrning o‘zi avtomatik ravishda biletdagi “sahifa” talabini bajarmaydi — talab etilgan hajm va mustaqil vazifani tekshiring.

Qabul sinovi: menyudan kirish, to‘g‘ridan-to‘g‘ri URL (agar mavjud), orqaga qaytish, klaviatura/fokus, 390/768/1366 px va eski asosiy oqim. Bu qo‘shish yo‘riqnomasi, yangi sahifa allaqachon qurilgan degani emas.

## O‘qilish va harakat xarakteri

Sayohat atlasi: Lora sarlavha, Source Sans 3 boshqaruv va o‘qiladigan xarita yozuvi. Tanlangan pin joyiga tushadi; yo‘nalish tartibi o‘zgarsa app.js render haqiqiy oldingi/yangi koordinatalar bilan siljitadi.

Yangi matnni sig‘dirish uchun xizmat yozuvlarini mayda qilib yubormang: uzun o‘zbekcha matn, 320/390 px va katta zoom bilan tekshiring. Harakat holat o‘zgarishini tushuntirsin, amalni kutishga majburlamasin. prefers-reduced-motion, dialogdan fokus qaytishi va ko‘rinadigan natija saqlansin. Nusxadagi HTML starterlarda CSS site/layout.css, Bloom’da site/src/style.css; SI’da site/style.css va site/motion.js. Har starterga o‘zida mavjud faylni qo‘llang.

## Tayyor amallar, validatsiya va saqlash xaritasi

| Qism | Hozirgi namuna | Kod joyi |
|---|---|---|
| Bog‘liq amallar | Manzil qo‘shish → boshlanish vaqti/tartib → jadval → eksport. | `site/app.js` → `update`, `site/app.js` → `render`, `site/model.js` → `schedule` |
| Noto‘g‘ri kiritish | normalize noto‘g‘ri vaqtni 09:00 ga qaytaradi va noma’lum IDlarni olib tashlaydi; bu foydalanuvchiga forma xatosi chiqarish emas. | `site/model.js` → `normalize` |
| Saqlash | app.js read/save, samar-plan-v2; reload va boshqa tab hodisasi mavjud. Bron amalga oshirilmaydi. | `site/app.js` → `read`, `site/app.js` → `save` |

Bu mavjud kod xaritasi, biletga muvofiqlik sertifikati emas. Storage ma’lumotini tozalash foydalanuvchi formasidagi xato xabari o‘rnini bosmaydi. Biletda berilgan amallar soni, maydon validatsiyasi va saqlash talabi uchun yetishmayotgan qismlarni qurib, muvaffaqiyat/xato/reload yo‘llarini amalda tekshir.

## Shrift va rasmlar

Dizaynning bir qismi binary fayllarda: shriftlar, suratlar, ikonkalar. Ular `source.zip` ichidagi `site/` da bor, lekin matn eksportida (`source.md`, `files/*.txt`) yo‘q. To‘liq dizayn uchun ZIP ichidagi `site/` bilan ishla. ZIP’ni ocha olmasang, har faylni quyidagi havoladan aynan shu yo‘lga yukla; shriftni CDN yoki boshqa shrift bilan almashtirma.

| Fayl (`site/` ichida) | Hajm | Havola |
|---|---|---|
| `fonts/lora.ttf` | 207 KB | [yuklash](https://azizbeksafarov.github.io/design/samar-site/fonts/lora.ttf) |
| `fonts/sourcesans3.ttf` | 631 KB | [yuklash](https://azizbeksafarov.github.io/design/samar-site/fonts/sourcesans3.ttf) |
| `images/guri-amir.jpg` | 474 KB | [yuklash](https://azizbeksafarov.github.io/design/samar-site/images/guri-amir.jpg) |
| `images/registan.jpg` | 382 KB | [yuklash](https://azizbeksafarov.github.io/design/samar-site/images/registan.jpg) |
| `images/shohi-zinda.jpg` | 385 KB | [yuklash](https://azizbeksafarov.github.io/design/samar-site/images/shohi-zinda.jpg) |
