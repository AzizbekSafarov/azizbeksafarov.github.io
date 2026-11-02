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
'''

def verify_pages(slug, files, brief):
    import re
    markup, logic, symbol, _ = PAGES[slug]
    assert 'site/'+markup in files, (slug, markup)
    code = files['site/'+logic].decode('utf-8')
    assert re.search(r'function\s+'+re.escape(symbol)+r'\s*\(', code), (slug, symbol)
    assert page_section(slug).strip() in brief, (slug, 'page guide missing')
