"""Compact AI context for the independently rebuilt plain-JS starters."""
def brief(t,site,raw,date):
 import entry_text
 slug=t['slug'];name=t['name'];folder='samar-site' if t['id']=='02' else 'forma-site'
 specific=t['look']+' model.js ma’lumot va hisobni, app.js saqlash, dialog, fokus va eksportni boshqaradi. Narxlar va vaqtlar namunaviy. Bron/to‘lov amalga oshirilmaydi. Katta marketing hero yoki bir xil kartalar gridiga qaytarma.'
 files=['index.html','style.css','layout.css','app.js','model.js','model.test.mjs','combinations.test.mjs','mark.svg','CREDITS.md','package.json']
 flows='\n'.join('- '+s for s in t['flows'])
 return f'''# {name} — yangi AI bilan davom ettirish

Snapshot: {date}; source fingerprint `{t['fingerprint'][:16]}`.
Entry: {site}/design/{slug}/

## Tanlov

{entry_text.FACTS_UZ}

## Tanlangan dizayn va haqiqiy kod

{specific}

Bu eski arxiv maketi emas: qayta ishlangan mustaqil starter. Bloom/Yuksalni ko‘chirish bilan almashtirma. Har bir rang, shrift roli va tugma holatini saqla; mazmun/model/funksiyalarni biletga moslashtir.

- [Tahrirlanadigan to‘liq source ZIP]({site}/design/{slug}/source.zip)
- [Tanlangan source matni]({raw}/design/{slug}/source.md)
- [Hash va fayl manifesti]({site}/design/{slug}/manifest.json)
- [Jonli namuna]({site}/design/{folder}/)
- [GitHub AI matni — Pages o‘qilmasa]({raw}/design/{slug}/ai.md)

Ish kodi `site/` ichida. Source fayllar:
'''+ '\n'.join(f'- [{n}]({raw}/design/{slug}/files/{n}.txt)' for n in files)+f'''

index.html — mazmun va boshlang‘ich kartalar. style.css — asosiy token va komponentlar. layout.css — yakuniy mustaqil sahifa kompozitsiyasi, responsive va holatlar. Kutubxonada identities_v4.py va identity-styles/ oxirgi qatlam; generator shu modulni chaqiradi. Eski diversity_v3.py yakuniy uslub emas. model.js — ma’lumot/validatsiya/hisob. app.js — dialog, amallar, storage va download. images/, fonts/ — lokal resurslar. CREDITS.md — surat litsenziyasi/provenance; almashtirganda yangila. Karta IDlari index.html va model.js da mos bo‘lsin. Kutubxonadagi build_refined.py HTML/CSSni qayta yozadi; tanlovdagi alohida ZIPda runtime fayllarini to‘g‘ridan-to‘g‘ri tahrirla.

## Local run va tekshiruv

Npm paket o‘rnatish shart emas. ZIP ildizida `node serve.mjs`; http://127.0.0.1:8080/ . Node bo‘lmasa: `python -m http.server 8080 --bind 127.0.0.1 --directory site`. Model test: `node --test site/*.test.mjs`.

{flows}

390, 768 va 1366 px (mezonlardagi kengliklar), qo‘shimcha 320 va 1440 px kenglikda brauzerda ko‘r. Document overflow, font/image yuklanishi, Tab/Enter/Space/Escape, fokus qaytishi va dialogning qisqa oynada scrollini tekshir. Images locally bundled; hero has reserved dimensions. CSS reduced-motionni saqlaydi; interactiondan kelgan zoom/dialog/reorder animatsiyasini bezak uchun ko‘paytirma.

Storage faqat known ID va tekshirilgan qiymatlarni oladi. O‘zgarish oldidan so‘nggi state o‘qiladi, boshqa tab storage event bilan yangilanadi; boshqa ma’lumotni tozalama. Saqlash cheklansa joriy tabdagi ish davom etishi va download ishlashi kerak. Model o‘zgarsa keyni versiyala yoki migratsiya qil.

## Ish tartibi

Talab → foydalanuvchi amali → kod joyi → qabul tekshiruvi jadvalini tuz. Asosiy oqimni oxirigacha ishlat. Xatoni takrorla, sababini top, kichik tuzatish qil va qayta sina. {entry_text.BACKEND_UZ} DESIGN-STANDARD.md ni o‘qi.

HANDOFF.md ga bilet, o‘zgargan fayllar, haqiqiy buyruq/test natijasi, ochiq muammo va keyingi amalni yoz. Yangi chatga CURRENT-TASK.md va HANDOFF.md ni ber. Link o‘z-o‘zidan xotira, internet yoki fayl tahrirlash vositasini bermaydi; o‘qiy olmasa matn/ZIPni chatga bering.
'''
