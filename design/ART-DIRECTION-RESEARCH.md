# Dizaynlarni haqiqatan farqlash — tadqiqot va audit

2026-10-16. Azizbekning so‘rovi: shriftlar va vizual o‘xshashlik saqlanib qolgan; yirik vebdizayn manbalarini o‘rganish. Bu hujjat — keyingi dizayn qarorlari uchun asos. Quyidagi yo‘nalishlar hali saytga joriy etilgan deb hisoblanmaydi.

## Tekshirilgan manbalar

Galereyalar qidirish va misollarni yonma-yon solishtirish uchun ishlatildi. Dizaynerning niyatini tushuntirish uchun studiyaning o‘z loyiha tavsiflari o‘qildi. Galereyaga kirgan har bir ish avtomatik ravishda bizning vazifamizga mos deb olinmadi.

| Manba | O‘rganilgan qism | Biz uchun foydasi |
| --- | --- | --- |
| [Awwwards — Typography](https://www.awwwards.com/websites/typography/) | Tipografik ishlar galereyasi brauzerda ko‘rildi | Shrift xarakteri, o‘lcham, matnning rasmdagi roli va kompozitsiyani solishtirish |
| [Siteinspire — Unusual Layout](https://www.siteinspire.com/websites/category/unusual-layout) | Noodatiy kompozitsiyalar brauzerda ko‘rildi | Faqat ustun sonini emas, kontent qanday joylashishi va navigatsiya qanday ishlashini farqlash |
| [Siteinspire — Typographic](https://www.siteinspire.com/websites/category/typographic) | Shriftga tayangan saytlar katalogi | Bitta aniq tipografik g‘oya atrofidagi namunalarni izlash |
| [Landbook](https://land-book.com/) | Industry, style, typography va motion bo‘limlari | Bir sohadagi turli yechimlarni ajratish; serif/sans/displayni alohida tekshirish |
| [Lapa Ninja](https://www.lapa.ninja/) | Soha, typography, motion va to‘liq sahifa namunalari | Ochilish ekranidan keyingi bo‘limlar ham o‘ziga xosmi, tekshirish |

Muhim metodik manba: [Awwwards, Hot Right Now 2023, 112–113-betlar](https://assets.awwwards.com/awards/gallery/2023/07/HOT-RIGHT-NOW-BOOK-2023.pdf#page=112). PDF matni o‘qildi. Unda takroriy shrift juftliklari, grid va animatsiya effektlari muammosi tanqid qilinadi. Tavsiya — avval brend, auditoriya va konseptni aniqlash; har bir vizual qarorni uning vazifasi bilan asoslash. Bu 2023-yilgi metodik matn, 2026-yil trendlarining reytingi emas.

Godly manzili boshqa domenga yo‘naltirdi; u mazmunan o‘rganilgan manba sifatida hisoblanmadi. Awwwards galereyasi matn qidirish vositasida timeout berdi, ammo brauzerda ochilib ko‘rildi.

## Professional studiyalardan aniq darslar

### Locomotive — Editorial New

[Studiyaning loyiha tavsifi](https://locomotive.ca/en/work/editorial-new): o‘zgaruvchan serifning eski va zamonaviy xususiyatlari butun tajribaning asosiga aylantirilgan; foydalanuvchi tipografika bilan o‘zaro ishlaydi. Bizning xulosamiz: shrift tayyor maketga oxirida qo‘shiladigan bezak bo‘lmasligi kerak. Uning proporsiyasi va xarakteri sarlavha, o‘qish ustuni va interaksiyaga ta’sir qilishi mumkin.

### Pentagram — The New Republic

[Loyiha tavsifi](https://www.pentagram.com/work/the-new-republic): turli mazmun va ovozlar uchun bir nechta shriftga aniq vazifa berilgan. Tanlov jiddiy/yengil hamda o‘tmish/kelajak o‘qlariga bog‘langan matritsa bilan boshqariladi. Bizning xulosamiz: «professional dizaynda faqat ikki shrift bo‘ladi» universal qoida emas. Ko‘p shrift ham tartibli ishlashi mumkin; har biri kontentga mos rol olishi zarur.

### Pentagram — Manuvo

[Loyiha tavsifi](https://www.pentagram.com/work/manuvo): ta’limdagi qurilish qismlari g‘oyasi harakatlanuvchi shakllar, rang, tipografika va grafika tizimiga aylantirilgan. Degular shriftidan foydalanilgan. Sahifaning grafik namunalari ham ko‘rildi; tashqi videolarning ayrimlari cookie roziligiga bog‘liq bo‘lgani uchun ularning animatsiyasi to‘liq tomosha qilingan deb da’vo qilinmaydi. Bizning xulosamiz: ta’limni ifodalash uchun umumiy dashboard ko‘rinishi yetarli emas; tushuncha va o‘rganish jarayonini ifodalaydigan o‘z grafik tili kerak.

### Pentagram — Isomorphic Labs

[Loyiha tavsifi](https://www.pentagram.com/work/isomorphic-labs): biologiya va raqamli axborot o‘rtasidagi moslik kubiklar harakati, axborot gridi, belgilar va Söhne tipografiyasiga bog‘langan. Bizning xulosamiz: enterprise sifatini ko‘rsatish uchun hamma saytga bitta minimal maket qo‘llash shart emas. Harakat sohaning g‘oyasini tushuntirganda uning vazifasi aniq bo‘ladi.

### Hoefler&Co. — matnning vazifasiga mos shrift

[Digital Type Capsule](https://typography.com/fonts/digital-type-capsule/how-to-use) va [webfont amaliyoti](https://dashboard.typography.com/user-guide/best-practices) shriftlarning proporsiyasi, xarakteri va o‘qiladigan o‘lchamini alohida ko‘rib chiqadi. Kod uchun I/l/1 kabi belgilarni ajratish, kichik matnda ekran uchun mos shakl va raqamlar muhim. Bizning xulosamiz: katta sarlavhaga mos shriftni barcha label va jadvallarga ham qo‘llamaymiz.

## Bizning kutubxonadagi dalillar

Audit `design/catalog.json`, haqiqiy CSS va font fayllarining name/cmap jadvallaridan qilindi.

| Takrorlanish | Qayerda |
| --- | --- |
| DM Sans katalogda 5 dizaynga yozilgan | Nashr, Hisob, Ziyo, Samar, Forma |
| Runtime matnida DM Sans qo‘shimcha ishlatiladi | Orbita body ham `Sans` aliasidan foydalanadi; demak asosiy yoki o‘qish matnida kamida 6 dizayn bir oilani takrorlaydi |
| Space Grotesk | Orbita va Ziyo sarlavhalari |
| Barlow Condensed | Samar va Meros display yozuvi |
| Newsreader | Nashr va Meros |

Shriftlarning yomonligi haqida xulosa chiqarilmaydi. Muammo — ko‘p mustaqil brendlar bir xil tipografik ohangda gapirishi va yonma-yon ko‘rilganda farqning kamayishi.

Oldingi uchta qayta ishlashda tartib farqlandi, ammo Ziyo, Forma va Samar bir vaqtda och, xira yashil/qog‘oz palitrasiga yaqinlashdi. Takroriy mayda bosh harfli label, ingichka ajratuvchi chiziq, to‘g‘ri burchakli outline tugma va zich sarlavha oraliqlari ham oilaviy o‘xshashlik beradi. Bu — kod va screenshotlarni solishtirishdan olingan bizning dizayn bahomiz, universal taqiq emas.

Font fayllari auditida bundled DM Sans’da U+02BB va U+02BC, Newsreader’da U+02BB yo‘qligi ham topildi. U+2018/U+2019 esa bor. Bu hozirgi barcha yozuvlar buzilganini anglatmaydi: turli apostrof bilan kiritilgan o‘zbekcha matnda aralash fallback yuz berishi mumkin. Yangi shrift tanlashda haqiqiy o‘zbekcha satrlar bilan tekshirish zarur.

Oldingi responsive/model testlar funksional dalil bo‘lib qoladi. Ular brendlar bir-biridan yetarlicha farqlanishi yoki foydalanuvchi vizual natijani ma’qullaganining dalili emas.

## Keyingi ishlash uchun mustaqil yo‘nalishlar

Quyidagilar manbalardan chiqarilgan o‘z art-direction takliflarimiz. Nomlari keltirilgan studiyalar bizning starterlarimizni yaratgan yoki tasdiqlagan emas. Tijoriy shriftlarni ularning saytidan ko‘chirib olish taklif qilinmaydi; aniq font tanlovi litsenziya va o‘zbekcha testdan keyin qilinadi.

| Starter | Tipografik ovoz | Kompozitsiya va tasvir | Harakat vazifasi |
| --- | --- | --- | --- |
| Ziyo | Ochiq harf ichlari, yumshoq va insoniy sans; tabiiy oraliq; kodga aniq mono | Ko‘rgazmali tushuncha va mashq birga ishlaydigan ta’lim ustaxonasi; ko‘proq grafik izoh | Javobning nima uchun to‘g‘riligini yoki mavzu bosqichini ochish |
| Forma | Nafis, keskin kontrastli serif display; sokin va aniq mahsulot matni | Material teksturasi, yaxshi crop, mustaqil badiiy fotosuratlar; showroom ritmi | Buyum detaliga yaqinlashish, katalogdan detailga izchil o‘tish |
| Samar | Kitob va sayohat qaydlariga mos o‘qish serifi; xarita va vaqtlarga xizmat yozuvi | Joyga xos geografik va fotografik material, xarita hamda yo‘l daftari | Tanlangan manzil va tartibdagi o‘zgarishni ko‘rsatish |
| Meros | Kuchli slab yoki alohida ekspressiv ko‘rgazma harfi; katalogga alohida o‘qish roli | Kuratorlik afishasi, kutilmagan masshtab, katta asar va izoh orasidagi ritm | Asar/izoh yoki ekspozitsiya qatlamini ochish |
| Hisob | Tor joyda o‘qiladigan xizmat shrifti; tabular raqamlar | Ish zichligi, skanerlash va taqqoslash ustuvor | Davr almashganda grafik va sonning bog‘liqligini saqlash |

Bloomning Material tizimi va Yuksalning foydalanuvchi ma’qullagan SI harakati alohida identifikatsiya bo‘lib qoladi. Bu ikki tizim qolgan hamma starter uchun universal qobiq bo‘lib ketmasin.

## Qabul qilish mezoni

1. Har starter uchun auditoriya, asosiy vazifa va bitta vizual g‘oya yoziladi. «Zamonaviy», «premium», «enterprise» yolg‘iz o‘zi konsept hisoblanmaydi.
2. Har xil sohalardan tayyor maketni aralashtirish o‘rniga 2–3 tegishli referens tanlanadi. Har referensdan nimani o‘rganishimiz va nimani olmasligimiz qayd etiladi.
3. Shrift nomi bilan cheklanmaymiz: kenglik, x-height, chiziq kontrasti, vazn, qator oralig‘i, tracking, sarlavha uzunligi va matn zichligi birgalikda ko‘riladi.
4. Haqiqiy o‘zbekcha test: «O‘zingizga mos yo‘lni tanlang», «G‘oya va natija», «Ta’lim», uzun sarlavha, narx va 09:00–12:35 vaqt; apostrof variantlari ham tekshiriladi.
5. Birinchi ekranlar yonma-yon, nomlari yashirilgan holda ko‘riladi. Ko‘ruvchi har birining xarakteri va vazifasini farqlay olishi kerak. Bu foydali evristika, ilmiy kafolat emas.
6. Oq-qora solishtirishda ham masshtab, tasvir, zichlik va tipografik ovoz farqlanishi tekshiriladi. Rang va harakat ham brendning haqiqiy vositalari, lekin farqning yagona tayanchi bo‘lib qolmasin.
7. Keyin real funksiyalar, fokus, o‘qiluvchanlik, 320–1440 px, matn kattalashtirish, font yuklanishi va reduced-motion tekshiriladi. Texnik test dizayn bahosini almashtirmaydi.
8. Shrift almashtirilsa katalog, font litsenziyalari, generator, AI brief, preview va source ZIP birga yangilanadi. Faqat CSSdagi family nomini almashtirib ish tugadi deyilmaydi.

Bu tadqiqot mavjud dizaynlar allaqachon shu darajaga yetgan degani emas. Keyingi qayta ishlash natijasi yangi screenshot va haqiqiy amallar orqali alohida baholanadi.
