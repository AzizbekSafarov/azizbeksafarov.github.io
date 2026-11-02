"""Code-grounded extension maps. Paths are relative to the extracted starter."""
PAGES = {
 'forma': ('index.html', 'app.js', 'renderCart', 'Desktop navigatsiyasi va `.mobile-nav` ichiga yangi `href="#yangi"` havolasi, main ichiga mos `section id="yangi"` qo‘sh. Savat `#cart` va tafsilot `#detail` dialoglari bo‘lib qoladi; renderCart faqat savatni yangilaydi.'),
 'samar': ('index.html', 'app.js', 'render', 'Desktop navigatsiyasi va `.mobile-nav` ichiga `href="#yangi"`, main ichiga `section id="yangi"` qo‘sh. render reja qismini chizadi; yangi ekran uchun alohida render funksiyasi yoz, reja IDlarini buzma.'),
 'si': ('index.html', 'app.js', 'renderPlan', '`#site-menu` dialogidagi menyuga `href="#yangi"`, main ichiga `section id="yangi"` qo‘sh. Mavjud menyu handleri hash havolasini ochib fokusni bo‘limga o‘tkazadi. renderPlan faqat shaxsiy rejani chizadi; motion.js animatsiyasini o‘zgartirma.'),
 'orbita': ('index.html', 'app.js', 'render', '`.orb-header nav` ichiga yangi hash havolasi va main ichiga mos section qo‘sh. render missiya hamda kuzatuvni yangilaydi; yangi ekran uchun alohida funksiya yoz. Yangi missiya qo‘shilsa model.js data, data-mission tugmasi va render ichidagi mode koordinatalari ham mos bo‘lsin.'),
 'nashr': ('index.html', 'app.js', 'render', 'index.html dagi navigatsiyaga yangi bo‘lim havolasi va mos section qo‘sh. data-filter tugmalari render uchun maqola filtridir, mustaqil sahifa routeri emas. Yangi ekran render chizadigan #articles tashqarisida tursin; #reader dialogini saqla.'),
 'meros': ('index.html', 'app.js', 'render', 'index.html navigatsiyasiga yangi hash havolasi, main ichiga section qo‘sh. render #exhibit-list ni qayta chizadi; yangi ekran shu konteyner tashqarisida bo‘lsin. Kolleksiya filtri va #reader dialogi sahifa routeri emas.'),
 'hisob': ('index.html', 'app.js', 'render', '`.data-sidebar` ichiga yangi havola, `.data-main` ichiga mos section qo‘sh. render grafik va jadvalni yangilaydi; mustaqil ekran kerak bo‘lsa ko‘rinish holati va aria-current almashishini alohida qo‘sh. Davr tugmalari yangi sahifa emas.'),
 'ziyo': ('index.html', 'app.js', 'lesson', 'Yangi dars uchun model.js data ga noyob IDli yozuv qo‘sh: render #lesson-tabs tugmalarini avtomatik chizadi, lesson tanlangan darsni ochadi. Bu yangi dars, mustaqil sahifa emas. Alohida ekran uchun index.html ga section va alohida menyu boshqaruvi qo‘sh; mavjud dars IDlarini saqla.'),
 'bloom': ('src/main.jsx', 'src/main.jsx', 'navigate', 'App ichidagi view/setView va navigate(next), sidebar navigatsiyasidagi all/saved/done ro‘yxati hamda sarlavha xaritasini birga kengaytir. Alohida ekran uchun view bo‘yicha yangi komponentni shartli chiqar; visibleProjects filtrlari yangi ekran o‘rnini bosmaydi. src/model.js ni faqat ma’lumot modeli talab etsa o‘zgartir; npm run build bilan dist ni yangila.'),
}

def page_section(slug):
    markup, logic, symbol, guide = PAGES[slug]
    return f'''\n## Yangi sahifa yoki ekran qo‘shish

Fayllar: `site/{markup}`, `site/{logic}`; mavjud kirish funksiyasi: `{symbol}`.

{guide}

HTML starterlarda haqiqiy alohida URL talab qilinsa yangi HTML fayl yarat, umumiy shrift/CSS resurslarini nisbiy yo‘l bilan ula va barcha menyularga havola qo‘sh. app.js ni ko‘r-ko‘rona yangi sahifaga ulamang: u mavjud DOM IDlarini kutadi; shu sahifaga tegishli kodni ajrating. Bo‘lim, dialog yoki filtrning o‘zi avtomatik ravishda biletdagi “sahifa” talabini bajarmaydi — talab etilgan hajm va mustaqil vazifani tekshiring.

Qabul sinovi: menyudan kirish, to‘g‘ridan-to‘g‘ri URL (agar mavjud), orqaga qaytish, klaviatura/fokus, 390/768/1366 px va eski asosiy oqim. Bu qo‘shish yo‘riqnomasi, yangi sahifa allaqachon qurilgan degani emas.

## O‘qilish va harakat xarakteri

{MOTION[slug]}

Yangi matnni sig‘dirish uchun xizmat yozuvlarini mayda qilib yubormang: uzun o‘zbekcha matn, 320/390 px va katta zoom bilan tekshiring. Harakat holat o‘zgarishini tushuntirsin, amalni kutishga majburlamasin. prefers-reduced-motion, dialogdan fokus qaytishi va ko‘rinadigan natija saqlansin. Nusxadagi HTML starterlarda CSS site/layout.css, Bloom’da site/src/style.css; SI’da site/style.css va site/motion.js. Har starterga o‘zida mavjud faylni qo‘llang.
'''

MOTION = {
 'forma':'Mahsulot katalogi: og‘ir Manrope, aniq narx va savdo tugmasi. Savatga qo‘shishda qisqa tasdiq harakati, savat yon tomondan ochiladi; .just-added va .cart-drawer holatlarini saqla.',
 'samar':'Sayohat atlasi: Lora sarlavha, Source Sans 3 boshqaruv va o‘qiladigan xarita yozuvi. Tanlangan pin joyiga tushadi; yo‘nalish tartibi o‘zgarsa app.js render haqiqiy oldingi/yangi koordinatalar bilan siljitadi.',
 'ziyo':'Dars daftari: Bree Serif sarlavha, Nunito Sans o‘qish, monospace faqat kod. Mobil dars menyusi ketma-ket qatorlar. identity.js ko‘rgazmali misolni almashtiradi; javob izohi qisqa yon siljish bilan ajraladi, progress ma’lumotdan olinadi.',
 'meros':'Ko‘rgazma plakati: Alfa Slab One sarlavha va indeks raqami, Archivo navigatsiya, Literata izoh. Indeks ochiq tipografik satrlar; asar dialogidagi surat markazdan ochiladi. Butun sahifani bir xil kartochkaga aylantirma.',
 'nashr':'Gazeta: Newsreader katta sarlavha, PT Serif keng o‘qish, Archivo xizmat yozuvi. O‘qish dialogi sokin opacity bilan ochiladi; sakrash yoki kartani ko‘tarish yo‘q. Animatsiya o‘qishdan diqqatni tortmasin.',
 'hisob':'Ma’lumotlar ish stoli: Public Sans boshqaruv, Plex raqamlar. Yangilangan jadval qatorlari qisqa opacity bilan ko‘rinadi, ustunlar joyi sakramaydi. Sonlarni o‘ylab topilgan count-up bilan almashtirma.',
 'orbita':'Observatoriya: Chakra Petch sarlavha va izoh, Plex Mono o‘lchov/boshqaruv. ISS orbital harakati pause/visibility holatiga bo‘ysunadi; boshqa missiyalar statik xaritaga ega. Faol asbob tanlovi chiziq va fon bilan ajraladi.',
 'si':'Kinematik SI portali: Instrument Serif/Sans, uzluksiz zarracha identifikatori, pointer/click fizikasi va scroll shakl almashishi. MOTION.md va motion.js asosiy manba; reduced-motion hamda pause saqlansin.',
 'bloom':'Material ish maydoni: Google Sans/Roboto va rasmiy Material komponentlarining ripple, dialog, tanlash holatlari. src/main.jsx dagi Motion layout va reduced-motion yo‘lini saqla; boshqa starter animatsiyasini ustiga qo‘shma.',
}

def verify_pages(slug, files, brief):
    import re
    markup, logic, symbol, _ = PAGES[slug]
    assert 'site/'+markup in files, (slug, markup)
    code = files['site/'+logic].decode('utf-8')
    assert re.search(r'function\s+'+re.escape(symbol)+r'\s*\(', code), (slug, symbol)
    assert page_section(slug).strip() in brief, (slug, 'page guide missing')

# These are existing flows, not claims that the ticket has already been met.
FLOWS = {
 'forma': ('Buyum → savatga qo‘shish → miqdor → jami → eksport.', [('app.js','mutate'),('app.js','renderCart'),('model.js','total')], 'model.js change noma’lum ID va butun bo‘lmagan deltani rad etadi; normalize miqdorni 1–20 chegarada saqlaydi. Alohida ariza formasi yo‘q.', [('model.js','change'),('model.js','normalize')], 'app.js read/write, forma-cart-v2. Buyurtma yoki to‘lov serverga yuborilmaydi.', [('app.js','read'),('app.js','write')]),
 'samar': ('Manzil qo‘shish → boshlanish vaqti/tartib → jadval → eksport.', [('app.js','update'),('app.js','render'),('model.js','schedule')], 'normalize noto‘g‘ri vaqtni 09:00 ga qaytaradi va noma’lum IDlarni olib tashlaydi; bu foydalanuvchiga forma xatosi chiqarish emas.', [('model.js','normalize')], 'app.js read/save, samar-plan-v2; reload va boshqa tab hodisasi mavjud. Bron amalga oshirilmaydi.', [('app.js','read'),('app.js','save')]),
 'si': ('Tashabbus tafsiloti → rejaga qo‘shish/olish → TXT eksport.', [('app.js','renderPlan'),('model.js','togglePlan'),('model.js','planText')], 'validPlan/parsePlan shikastlangan ma’lumot va noma’lum IDlarni filtrlaydi. Bilet ariza talab qilsa maydon validatsiyasi alohida quriladi.', [('model.js','validPlan'),('model.js','parsePlan')], 'app.js readCurrentPlan/persist, ustoz.yuksal.plan.v1. Saqlash cheklansa xabar bor.', [('app.js','readCurrentPlan'),('app.js','persist')]),
 'orbita': ('Missiya tanlash → kuzatuvga qo‘shish → TXT eksport.', [('app.js','render'),('app.js','toggle'),('app.js','download')], 'model.js normalize saqlangan IDlarni tozalaydi. Matnli ariza/forma tekshiruvi yo‘q; bilet talab qilsa qo‘shiladi.', [('model.js','normalize')], 'app.js read/commit; saqlash xatosida joriy tab xotirasi va eksport bor.', [('app.js','read'),('app.js','commit')]),
 'nashr': ('Maqolani ochish → saqlash → saqlanganlar filtri → qayta ochish.', [('app.js','openDialog'),('app.js','toggle'),('app.js','render')], 'normalize faqat mavjud maqola IDlarini oladi. Mualliflik/ariza formasi va uning validatsiyasi yo‘q.', [('model.js','normalize')], 'app.js read/commit; saqlangan maqola IDlari localStorage da. O‘qish/yozish xatosida yangi tanlov faqat tabda; eksport tugmasi yo‘q.', [('app.js','read'),('app.js','commit')]),
 'meros': ('Asar tafsiloti → kolleksiyaga olish → saqlanganlarni ko‘rish → TXT eksport.', [('app.js','openDialog'),('app.js','toggle'),('app.js','download')], 'normalize mavjud asar IDlarini tekshiradi. Foydalanuvchi arizasi uchun maydon validatsiyasi tayyor emas.', [('model.js','normalize')], 'app.js read/commit; kolleksiya localStorage da, xatoda tab xotirasida.', [('app.js','read'),('app.js','commit')]),
 'hisob': ('Davr → qidiruv/saralash → ko‘rinayotgan qatorlarni CSV eksport.', [('app.js','render'),('model.js','report'),('model.js','csv')], 'normalizeSearch qidiruvni bir xil yozuvga keltiradi; topilmasa bo‘sh holat. Bu ariza validatsiyasi emas.', [('model.js','normalizeSearch')], 'Hozir davr, qidiruv va saralash reload orqali saqlanmaydi. app.js read/commit yordamchilari bor, lekin hisobot oqimi ularni chaqirmaydi. Saqlash talab qilinsa alohida ulash va reload sinovi zarur.', []),
 'ziyo': ('Modul tanlash → javob → xato/to‘g‘ri izoh → progress → keyingi dars.', [('app.js','lesson'),('app.js','render'),('model.js','grade')], 'app.js #quiz submit javobsiz yuborishni, grade noto‘g‘ri javobni tekshiradi; noto‘g‘ri javob progress qo‘shmaydi.', [('model.js','grade')], 'app.js read/commit; tugallangan modul IDlari localStorage da. O‘qish/yozish xatosida yangi progress faqat tabda; eksport tugmasi yo‘q.', [('app.js','read'),('app.js','commit')]),
 'bloom': ('Loyiha yaratish → tafsilot → vazifani bajarish → progress/filtr.', [('src/main.jsx','submitProject'),('src/main.jsx','changeTask'),('src/model.js','progress')], 'createProject nom/uzunlik/kategoriyani tekshiradi; submitProject xatoni ko‘rsatadi. validateProjects saqlangan to‘plamni tekshiradi.', [('src/model.js','createProject'),('src/model.js','validateProjects')], 'src/persistence.js loadProjectState/persistProjectState; App useEffect orqali yozadi. Boshqa tab yozgan holat bilan ziddiyatda yozish to‘xtaydi; foydalanuvchi JSON eksport olib keyin yangilaydi. Jonli avtomatik merge yo‘q. Recovery nusxalari oldingisini almashtirmaydi.', [('src/persistence.js','loadProjectState'),('src/persistence.js','persistProjectState')]),
}

def flow_section(slug):
    flow, refs, validation, checks, storage, stores = FLOWS[slug]
    def locations(items):
        return ', '.join(f'`site/{path}` → `{symbol}`' for path,symbol in items) or 'Ulangan saqlash amali yo‘q.'
    return f'''\n## Tayyor amallar, validatsiya va saqlash xaritasi

| Qism | Hozirgi namuna | Kod joyi |
|---|---|---|
| Bog‘liq amallar | {flow} | {locations(refs)} |
| Noto‘g‘ri kiritish | {validation} | {locations(checks)} |
| Saqlash | {storage} | {locations(stores)} |

Bu mavjud kod xaritasi, biletga muvofiqlik sertifikati emas. Storage ma’lumotini tozalash foydalanuvchi formasidagi xato xabari o‘rnini bosmaydi. Biletda berilgan amallar soni, maydon validatsiyasi va saqlash talabi uchun yetishmayotgan qismlarni qurib, muvaffaqiyat/xato/reload yo‘llarini amalda tekshir.
'''

def verify_flows(slug, files, brief):
    import re
    flow = FLOWS[slug]
    for path, symbol in flow[1]+flow[3]+flow[5]:
        code = files['site/'+path].decode('utf-8')
        assert re.search(r'function\s+'+re.escape(symbol)+r'\s*\(', code), (slug, path, symbol)
    assert flow_section(slug).strip() in brief, (slug, 'flow map missing')
