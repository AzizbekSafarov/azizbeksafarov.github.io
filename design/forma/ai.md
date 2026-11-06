# Forma — yangi AI bilan davom ettirish

Bu — Forma dizaynini tanlov biletiga moslashtiradigan AI uchun qo‘llanma. Foydalanuvchi bilan o‘zbekcha, sodda tilda gaplash: u kod yozmaydi.

Bilet foydalanuvchidan keladi: chatda yoki loyihadagi `CURRENT-TASK.md` da. Bu ochiq paketda bilet yo‘q. Tanlov mahsulotini qurish so‘ralib, ikkala joyda ham bilet bo‘lmasa, bilet matni va qolgan vaqtni bir marta so‘ra. Tayyorgarlik, audit yoki kutubxonani saqlash so‘rovida biletni to‘siq qilma; foydalanuvchining aniq ish doirasini bajar. Dizayn namunasi, test ma’lumoti va nizomdagi namunaviy bilet vazifa hisoblanmaydi.

ZIP ichida ish qoidalari va o‘qish tartibi `AGENTS.md` da. Kod `site/` papkasida. Saytni `ochish.cmd` yoki `node serve.mjs` bilan oching: `index.html` ikki marta bosilsa brauzer skript va shriftlarni bloklaydi.

Snapshot: 2026-11-03; source fingerprint `60660630dcdbe490`.
Entry: https://azizbeksafarov.github.io/design/forma/

## Tanlov

Ustoz AI “Zamonaviy kasblar — Eng yaxshi veb-sayt” tanlovi. Manba maqomlari: **[Imzoli qaror]** — qo‘shma qaror; **[Sayt]** — Ustoz AI saytidagi farqli PDF tahriri; **[Loyiha]** — tasdiqqa taqdim etilgan 11 sahifalik mezonlar; **[Video]** — tashkilotchining tarixiy yo‘riqnomasi. Ularni bitta yangi nizom deb birlashtirmang.

1. **Baholash:** funksionallik 30, mazmun 20, dizayn/UX 10, taqdimot 10, texnologiya 20, kreativlik 10 — jami 100. [Imzoli qaror, 19-band; Sayt: tartibi farqli, vaznlari mos]. Majburiy funksiyalar va mazmun to‘liq bajariladi; ularning bajarilishi sifatning yakuniy chegarasi emas. Past ball ulushi dizayn/UX, kreativlik yoki taqdimotni e’tiborsiz qoldirishga sabab bo‘lmaydi.
2. **Teng ball:** avval sifat va funksionallik. Keyingi ustunlik [Imzoli qaror, 20¹-band] bo‘yicha zamonaviy texnologiyalar; [Sayt, 20¹-band] bo‘yicha kreativlik va originallik. Aynan joydagi qo‘llanadigan tahrir aniqlanadi.
3. **Himoya:** 15 daqiqa — 5 taqdimot + 5 namoyish + 5 savol-javob; qo‘shimcha vaqt berilmaydi. [Imzoli qaror, 7–9-bandlar; Sayt]. Ssenariy: `ZAXIRA/HIMOYA.md`.
4. **Hududiy ko‘lam:** kamida 3 sahifa yoki teng hajmli ekran, noto‘g‘ri kiritishni tekshiradigan 2 ta bog‘liq amal va natija, taxminan 2 soat — tavsiya. [Loyiha, 12–13-bandlar]. Bu tasdiqlangan universal vaqt emas. Saqlash usuli brauzer/server ekanini bilet belgilaydi; faqat biletdagi majburiy imkoniyatlar talab qilinadi [Loyiha, 23-band].
5. **Sozlash:** kompyuter tashkilotchidan, Antigravity/Codex va akkaunt ulash uchun 15 daqiqa [Video]. Bu vaqt amaliy ishga kirmasligi va sinov loyihasi tanlov ishida ishlatilmasligi [Loyiha, 12-band] da yozilgan; videoga tegishli bo‘lmagan tafsilotni unga yuklamang.
6. **AI va shablon:** g‘oya/shablon olish [Video], AI/no-code/ochiq materiallar va manbani ko‘rsatish [Loyiha]. Oldindan tayyorlangan to‘liq loyihani topshirish taqiqi [Loyiha, 2-bob, 2-sahifa: “Taqiqlanadi”]. Starter biletga haqiqatan moslashtiriladi; ruxsat etilgan tayyor kod chegarasi joyda aniqlanadi.
7. **Jonli tahrir ziddiyati:** ekspert real vaqtda o‘zgartirishni so‘rashi mumkin, bajara olmagan ishtirokchining ishi baholanmaydi [Imzoli qaror, 7–9-bandlar]. [Sayt] nusxasida bu band yo‘q. [Loyiha, 17-band] topshirilgan loyihani himoyada o‘zgartirishga yo‘l qo‘ymaydi. Joydagi ko‘rsatmani aniqlang; mashq xaritasi `ZAXIRA/JONLI-OZGARISH.md` da.
8. **Topshirish va tekshiruv:** 390/768/1366 px; ishlaydigan sayt (tekshiriladigan havola yoki kelishilgan mahalliy ishga tushirish), kod va ishga tushirish yo‘riqnomasi; ishtirokchi kodi, bilet, funksiyalar, testlar, cheklovlar, vositalar, asosiy so‘rovlar va tashqi manbalar yozilgan qisqa tavsif; 3–5 ekran tasviri va asosiy amalning 1–2 daqiqalik yozuvi. Papka nomi `bosqich_ishtirokchi-kodi_bilet-raqami`, masalan `hududiy_017_003` [Loyiha, 12–15-bandlar va baholash jadvali]. 21 batafsil ko‘rsatkich tasdiqlanmagan loyiha; tayyorgarlik vositasi, yangi rasmiy bilet emas.

Saqlangan nizom matnlari bilan muvofiqlik tahriri: 2026-11-02. Tashqi qoidalar oxirgi tekshirilgan sana: 2026-10-28; bugun yangi hujjat yuklangani anglatilmaydi. Haqiqiy bilet, amaldagi reglament va joydagi ko‘rsatma ustuvor. Manbalar: [qisqa kontekst](https://azizbeksafarov.github.io/design/handoff/competition.md), [qoidalar holati](https://azizbeksafarov.github.io/design/handoff/current-competition.md), [mezon → ish → dalil](https://azizbeksafarov.github.io/design/handoff/score-workplan.md), [to‘liq nizomlar, 39 sahifa](https://azizbeksafarov.github.io/ustoz/nizom.md).

## Tanlangan dizayn va haqiqiy kod

Zamonaviy obyekt studiyasi. Manrope 500 asosiy matn, 650 xizmat, 750–800 sarlavha/narx. Oqartirilgan maydon, grafit, material fotosuratlari. Qattiq to‘rtburchak qora savdo tugmalari; aniq rangli savat holati. Ingichka serif, mikro matn, ghost savdo tugmalari va yumaloq sayohat kartalari yo‘q. Asimmetrik fotografik shelf saqlansin; mobil uch buyum ham o‘qiladigan kenglikda. Narx/materiallar namuna, savat lokal. model.js ma’lumot va hisobni, app.js saqlash, dialog, fokus va eksportni boshqaradi. Narxlar va vaqtlar namunaviy. Bron/to‘lov amalga oshirilmaydi. Katta marketing hero yoki bir xil kartalar gridiga qaytarma.

Bu eski arxiv maketi emas: qayta ishlangan mustaqil starter. Bloom/Yuksalni ko‘chirish bilan almashtirma. Har bir rang, shrift roli va tugma holatini saqla; mazmun/model/funksiyalarni biletga moslashtir.

- [Tahrirlanadigan to‘liq source ZIP](https://azizbeksafarov.github.io/design/forma/source.zip)
- [Tanlangan source matni](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/source.md)
- [Hash va fayl manifesti](https://azizbeksafarov.github.io/design/forma/manifest.json)
- [Jonli namuna](https://azizbeksafarov.github.io/design/forma-site/)
- [GitHub AI matni — Pages o‘qilmasa](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/ai.md)

Ish kodi `site/` ichida. Source fayllar:
- [index.html](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/index.html.txt)
- [style.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/style.css.txt)
- [layout.css](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/layout.css.txt)
- [app.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/app.js.txt)
- [model.js](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/model.js.txt)
- [model.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/model.test.mjs.txt)
- [combinations.test.mjs](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/combinations.test.mjs.txt)
- [mark.svg](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/mark.svg.txt)
- [CREDITS.md](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/CREDITS.md.txt)
- [package.json](https://raw.githubusercontent.com/AzizbekSafarov/azizbeksafarov.github.io/main/design/forma/files/package.json.txt)

index.html — mazmun va boshlang‘ich kartalar. style.css — asosiy token va komponentlar. layout.css — yakuniy mustaqil sahifa kompozitsiyasi, responsive va holatlar. model.js — ma’lumot/validatsiya/hisob. app.js — dialog, amallar, storage va download. images/, fonts/ — lokal resurslar. CREDITS.md — surat litsenziyasi/provenance; almashtirganda yangila. Karta IDlari index.html va model.js da mos bo‘lsin. Tanlov nusxasida shu fayllar to‘g‘ridan-to‘g‘ri tahrirlanadi; build kerak emas.

## Local run va tekshiruv

Npm paket o‘rnatish shart emas. ZIP ildizida `node serve.mjs`; http://127.0.0.1:8080/ . Node bo‘lmasa: `python -m http.server 8080 --bind 127.0.0.1 --directory site`. Model test: `node --test site/*.test.mjs`.

- Kategoriya → mos buyumlar; detail dialog → savatga qo‘shish → fokus qaytishi.
- Savat → miqdor +/- → aniq jami → olish → bo‘sh holat. 20 ta chegara; buzilgan storage.
- Reload / ikkinchi tab → bir xil savat; tanlovni TXT yuklash; demo maqomi.

390, 768 va 1366 px (mezonlardagi kengliklar), qo‘shimcha 320 va 1440 px kenglikda brauzerda ko‘r. Document overflow, font/image yuklanishi, Tab/Enter/Space/Escape, fokus qaytishi va dialogning qisqa oynada scrollini tekshir. Images locally bundled; hero has reserved dimensions. CSS reduced-motionni saqlaydi; interactiondan kelgan zoom/dialog/reorder animatsiyasini bezak uchun ko‘paytirma.

Storage faqat known ID va tekshirilgan qiymatlarni oladi. O‘zgarish oldidan so‘nggi state o‘qiladi, boshqa tab storage event bilan yangilanadi; boshqa ma’lumotni tozalama. Saqlash cheklansa joriy tabdagi ish davom etishi va download ishlashi kerak. Model o‘zgarsa keyni versiyala yoki migratsiya qil.

## Ish tartibi

Talab → foydalanuvchi amali → kod joyi → qabul tekshiruvi jadvalini tuz. Asosiy oqimni oxirigacha ishlat. Xatoni takrorla, sababini top, kichik tuzatish qil va qayta sina. Starter brauzerda ishlaydi va server talab qilmaydi. Bilet server, login yoki baza talab qilsa va joyda tashqi xizmatlarga ruxsat bo‘lsa, Talab texnologiya nomini sanamasa ham zarur yechimni asosla; foydalanuvchining alohida integratsiya/tayyorgarlik so‘rovi ham joriy ish doirasidir. `ARCHITECTURE.md` dagi Render + Supabase rejasidan foydalan (bu reja, hali yaratilgan xizmat emas). Demo natijani haqiqiy yuborish yoki to‘lov deb ko‘rsatma. DESIGN-STANDARD.md ni o‘qi.

HANDOFF.md ga bilet, o‘zgargan fayllar, haqiqiy buyruq/test natijasi, ochiq muammo va keyingi amalni yoz. Yangi chatga CURRENT-TASK.md va HANDOFF.md ni ber. Link o‘z-o‘zidan xotira, internet yoki fayl tahrirlash vositasini bermaydi; o‘qiy olmasa matn/ZIPni chatga bering.

## Paketdagi ekranlar va chegaralar

**Tayyor:** Mahsulot katalogi va filtr; Mahsulot tafsiloti dialogi; Savat: miqdor, jami, TXT eksport; Yondashuv/yordam bo‘limi.

**Holatlar:** Bo‘sh savat; Miqdor limiti; Xotira xatosi.

**Hali yo‘q:** Checkout/to‘lov; Akkaunt; Buyurtma serveri.

Bu imkoniyatlar bitta manba paketida. Biletga kerak bo‘ladigan yangi ichki sahifa avtomatik tayyor deb olinmaydi. Mashina o‘qiydigan xarita ZIP ildizidagi `SCREENS.json` da; bu qo‘llanma runtime sinovi o‘rnini bosmaydi.

## Yangi sahifa yoki ekran qo‘shish

Fayllar: `site/index.html`, `site/app.js`; mavjud kirish funksiyasi: `renderCart`.

Desktop navigatsiyasi va `.mobile-nav` ichiga yangi `href="#yangi"` havolasi, main ichiga mos `section id="yangi"` qo‘sh. Savat `#cart` va tafsilot `#detail` dialoglari bo‘lib qoladi; renderCart faqat savatni yangilaydi.

HTML starterlarda haqiqiy alohida URL talab qilinsa yangi HTML fayl yarat, umumiy shrift/CSS resurslarini nisbiy yo‘l bilan ula va barcha menyularga havola qo‘sh. app.js ni ko‘r-ko‘rona yangi sahifaga ulamang: u mavjud DOM IDlarini kutadi; shu sahifaga tegishli kodni ajrating. Bo‘lim, dialog yoki filtrning o‘zi avtomatik ravishda biletdagi “sahifa” talabini bajarmaydi — talab etilgan hajm va mustaqil vazifani tekshiring.

Qabul sinovi: menyudan kirish, to‘g‘ridan-to‘g‘ri URL (agar mavjud), orqaga qaytish, klaviatura/fokus, 390/768/1366 px va eski asosiy oqim. Bu qo‘shish yo‘riqnomasi, yangi sahifa allaqachon qurilgan degani emas.

## O‘qilish va harakat xarakteri

Mahsulot katalogi: og‘ir Manrope, aniq narx va savdo tugmasi. Savatga qo‘shishda qisqa tasdiq harakati, savat yon tomondan ochiladi; .just-added va .cart-drawer holatlarini saqla.

Yangi matnni sig‘dirish uchun xizmat yozuvlarini mayda qilib yubormang: uzun o‘zbekcha matn, 320/390 px va katta zoom bilan tekshiring. Harakat holat o‘zgarishini tushuntirsin, amalni kutishga majburlamasin. prefers-reduced-motion, dialogdan fokus qaytishi va ko‘rinadigan natija saqlansin. Nusxadagi HTML starterlarda CSS site/layout.css, Bloom’da site/src/style.css; SI’da site/style.css va site/motion.js. Har starterga o‘zida mavjud faylni qo‘llang.

## Tayyor amallar, validatsiya va saqlash xaritasi

| Qism | Hozirgi namuna | Kod joyi |
|---|---|---|
| Bog‘liq amallar | Buyum → savatga qo‘shish → miqdor → jami → eksport. | `site/app.js` → `mutate`, `site/app.js` → `renderCart`, `site/model.js` → `total` |
| Noto‘g‘ri kiritish | model.js change noma’lum ID va butun bo‘lmagan deltani rad etadi; normalize miqdorni 1–20 chegarada saqlaydi. Alohida ariza formasi yo‘q. | `site/model.js` → `change`, `site/model.js` → `normalize` |
| Saqlash | app.js read/write, forma-cart-v2. Buyurtma yoki to‘lov serverga yuborilmaydi. | `site/app.js` → `read`, `site/app.js` → `write` |

Bu mavjud kod xaritasi, biletga muvofiqlik sertifikati emas. Storage ma’lumotini tozalash foydalanuvchi formasidagi xato xabari o‘rnini bosmaydi. Biletda berilgan amallar soni, maydon validatsiyasi va saqlash talabi uchun yetishmayotgan qismlarni qurib, muvaffaqiyat/xato/reload yo‘llarini amalda tekshir.

## Shrift va rasmlar

Dizaynning bir qismi binary fayllarda: shriftlar, suratlar, ikonkalar. Ular `source.zip` ichidagi `site/` da bor, lekin matn eksportida (`source.md`, `files/*.txt`) yo‘q. To‘liq dizayn uchun ZIP ichidagi `site/` bilan ishla. ZIP’ni ocha olmasang, har faylni quyidagi havoladan aynan shu yo‘lga yukla; shriftni CDN yoki boshqa shrift bilan almashtirma.

| Fayl (`site/` ichida) | Hajm | Havola |
|---|---|---|
| `fonts/manrope.ttf` | 160 KB | [yuklash](https://azizbeksafarov.github.io/design/forma-site/fonts/manrope.ttf) |
| `images/chair.jpg` | 81 KB | [yuklash](https://azizbeksafarov.github.io/design/forma-site/images/chair.jpg) |
| `images/lamp.jpg` | 144 KB | [yuklash](https://azizbeksafarov.github.io/design/forma-site/images/lamp.jpg) |
| `images/vase.jpg` | 147 KB | [yuklash](https://azizbeksafarov.github.io/design/forma-site/images/vase.jpg) |
