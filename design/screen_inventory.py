"""Authored scope of the shipped UI, not a claim of a complete ticket solution."""
SCREENS = {
 'bloom': (['Loyihalar, saqlanganlar, bajarilganlar ro‘yxati','Alohida loyiha ish ekrani: #all/ID, #saved/ID, #done/ID','Nom, izoh va uch qadamni tahrirlash','Yangi loyiha, yordam va palitra dialoglari'], ['Topilmagan loyiha','Bo‘sh qidiruv/filtr','Noto‘g‘ri tahrir','Saqlanmagan tahrirdan chiqish','Saqlash xatosi va ikki-tab ziddiyati'], ['Login/Google Auth','Server sinxronizatsiyasi','Jamoa rollari','JSON import']),
 'forma': (['Mahsulot katalogi va filtr','Mahsulot tafsiloti dialogi','Savat: miqdor, jami, TXT eksport','Yondashuv/yordam bo‘limi'], ['Bo‘sh savat','Miqdor limiti','Xotira xatosi'], ['Checkout/to‘lov','Akkaunt','Buyurtma serveri']),
 'samar': (['Interaktiv shartli xarita','Manzillar va tafsilot dialogi','Kun rejasi: vaqt, tartib, TXT eksport','Safarga tayyorgarlik bo‘limi'], ['Bo‘sh reja','Noto‘g‘ri vaqt normallashtirilishi','Xotira xatosi'], ['Haqiqiy bron','Jonli xarita navigatsiyasi','Akkaunt/server']),
 'ziyo': (['Dars tanlash','Dars mazmuni, interaktiv misol va kod','Savol, javob izohi va keyingi dars','Mahalliy progress'], ['Javob tanlanmagan','Noto‘g‘ri/to‘g‘ri javob','Oxirgi dars','Xotira xatosi'], ['Kurs yaratish muharriri','Akkaunt/server progressi','Sertifikat','Eksport']),
 'meros': (['Ko‘rgazma plakati va indeks','Ekspozitsiya filtri','Asar tafsiloti dialogi','Kolleksiya filtri va TXT eksport'], ['Bo‘sh kolleksiya/filtr','Xotira xatosi'], ['Muzey bileti/bron','Admin muharrir','Akkaunt/server']),
 'nashr': (['Gazeta bosh sahifasi','Bo‘lim va saqlanganlar filtri','Maqola o‘qish dialogi'], ['Bo‘sh saqlanganlar/filtr','Xotira xatosi'], ['Maqola yozish/CMS','Izohlar','Akkaunt/server','Eksport']),
 'hisob': (['Ko‘rsatkich va davr tanlash','Grafik','Jadval: qidiruv/saralash','Filtrlangan CSV eksport'], ['Qidiruv natijasi yo‘q','Bo‘sh eksport bloklangan'], ['Dataset tahriri','Filtrni reload orqali saqlash','Haqiqiy statistika API','Akkaunt/rol']),
 'orbita': (['Orbital kirish va pause','Missiya tanlash/ma’lumot','Kuzatuv ro‘yxati va TXT eksport'], ['Bo‘sh kuzatuv','Statik missiya chizmasi','Reduced-motion/pause','Xotira xatosi'], ['Jonli telemetriya','Missiya muharriri','Akkaunt/server']),
 'si': (['Zarracha animatsiyali kirish','Tashabbuslar filtri','Tashabbus tafsiloti dialogi','Shaxsiy reja va TXT eksport','Navigatsiya dialogi'], ['Bo‘sh reja','Pause/reduced-motion','Xotira xatosi'], ['Haqiqiy ariza yuborish','Akkaunt/dashboard','AI backend']),
}

def inventory(slug):
    screens, states, missing = SCREENS[slug]
    return {'schema_version':1,'slug':slug,'reviewed_on':'2026-11-02',
      'scope':'Shipped frontend screens and states; not the unknown competition ticket.',
      'ready_screens':screens,'handled_states':states,'not_implemented':missing,
      'storage':'local browser only' if slug!='hisob' else 'report UI state is not persisted',
      'entry':'site/dist/index.html' if slug=='bloom' else 'site/index.html',
      'full_source':'All supplied screens share the source.zip package. Hash/file integrity does not prove every future adaptation works.'}

def section(slug):
    screens, states, missing = SCREENS[slug]
    return '\n## Paketdagi ekranlar va chegaralar\n\n'+\
      '**Tayyor:** '+ '; '.join(screens)+'.\n\n'+\
      '**Holatlar:** '+ '; '.join(states)+'.\n\n'+\
      '**Hali yo‘q:** '+ '; '.join(missing)+'.\n\n'+\
      'Bu imkoniyatlar bitta manba paketida. Biletga kerak bo‘ladigan yangi ichki sahifa avtomatik tayyor deb olinmaydi. Mashina o‘qiydigan xarita ZIP ildizidagi `SCREENS.json` da; bu qo‘llanma runtime sinovi o‘rnini bosmaydi.\n'
