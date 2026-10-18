"""Single authored quality contract shared by architecture HTML and AI text."""
from html import escape

QUALITY_SOURCES = [
 ('Microsoft: Well-Architected pillars', 'https://learn.microsoft.com/en-us/azure/well-architected/pillars'),
 ('IBM Carbon: global header', 'https://www.carbondesignsystem.com/building-blocks/core/patterns/global-header'),
 ('W3C: WCAG 2.2 quick reference', 'https://www.w3.org/WAI/WCAG22/quickref/'),
 ('Google: Web Vitals', 'https://web.dev/articles/vitals'),
 ('OWASP: ASVS', 'https://owasp.org/projects/asvs'),
]

# These are product-specific engineering recommendations, not reproduced standards.
QUALITY_GATES = [
 ('Vazifa va mahsulot yaxlitligi',
  'Bitta aniq foydalanuvchi oqimi; landing, katalog, kabinet va workspace shu maqsadga xizmat qiladi. Navigatsiya, breadcrumbs va qaytish yo‘li foydalanuvchi qayerdaligini bildiradi. Sozlamalar/yordam faqat zarur bo‘lsa qo‘shiladi.',
  'Talab → amal → saqlangan natija xaritasi bilan o‘zingiz bajaring. Ishlamaydigan CTA, soxta KPI yoki tugallanmagan asosiy yo‘l qolmasin.'),
 ('Dizayn tizimi va amallar',
  'Rang, matn/on-color, shrift rollari, spacing va radius tokenlarini bitta manbada yurit. Button, input, dialog, jadval va status uchun umumiy komponent/qoida. Asosiy amal, ikkilamchi amal va passiv panel farqli; hover/focus/pressed/disabled aniq.',
  'Turli ekran va sahifalarda bir xil amal izchil ko‘rinsin. Uzun o‘zbekcha matn, xato, bo‘sh kabinet va saqlash holatini haqiqiy mazmun bilan ko‘ring; chiroyli screenshot bilan cheklanma.'),
 ('Accessibility va harakat',
  'WCAG 2.2 AA’ni tegishli qismlar uchun maqsad sifatida qo‘llang. Semantik element, label, klaviatura, fokus, kontrast va rangdan tashqari belgi. Touch/zoom/reflow, dialog, reduced-motion va uzun animatsiyani to‘xtatish yo‘lini ko‘r.',
  'Asosiy oqimni klaviaturada va telefonda tugating, status/xato tushunarli o‘qilishini tekshiring. Faqat avtomatik scan bilan WCAG muvofiqligi yoki sertifikat da’vo qilinmaydi.'),
 ('Kirish, rol va ruxsat',
  'Auth bilan authorization’ni ajrat. Har server amali va yozuvga vakolat tekshir; RLS/default deny. Rolni foydalanuvchi o‘zgartiradigan flag’dan olma. Cookie ishlatilsa CSRF/session sozlamasi mos; credential serverda, input/output va fayllar tekshiriladi.',
  'A va B foydalanuvchi, anon va zarur admin bilan o‘qish/yozishni tekshir. Begona ID, eskirgan sessiya, logout va noto‘g‘ri webhook rad etilsin. CORS va yashirin UI tugmasini xavfsizlik deb hisoblama.'),
 ('Ma’lumot va tiklash',
  'Jadvallar, owner_id/FK, unique constraint, zarur index va versiyalangan migration. Yozishlarda kerakli transaction/idempotency. Doimiy fayllar Storage’da. Backup mavjudligi va ma’lumotni qaytarish yo‘li amaldagi tarifga mos aniqlansin.',
  'Saqlash → reload → qayta kirish. Migration va restore’ni sintetik test bazasida tekshiring; backup borligini restore qilinadi degan kafolatga aylantirma. Production ma’lumotni test uchun reset qilma.'),
 ('API shartnomasi va integratsiyalar',
  'Kirish/chiqish sxemasi, xavfsiz error code, request ID, cheklangan hajm va pagination. Bir xil request takrorlanishi xavfsiz. Telegram uchun dedupe/outbox zarurati; AI javobi tekshiriladi, tool vakolati serverda. Frontend bilan backend shartnomasi mos.',
  'Yaroqli/yaroqsiz request, qisman xato va takror yuborishni tekshiring. “Bazaga yozildi, xabar yetkazilmadi” holatini ikki xil natija sifatida ko‘rsating; request body va secret’ni logga qo‘ymang.'),
 ('Barqarorlik va xarajat',
  'Har tashqi chaqiruvga timeout, chegaralangan retry/backoff, mos bekor qilish va foydalanuvchiga tushunarli fallback. Parallel ish, AI tokeni/so‘rovi va upload hajmini chekla. Qisqa process restart’i uzoq ishni jim yo‘qotmasin; kerak bo‘lsa doimiy navbat.',
  'Biletga mos timeout/429/dependency xatosini xavfsiz model qilib tekshiring. Sovuq ishga tushish va provayder kvotasini qayd eting. Monitoring resurs yoki bepul tarif cheklovlarini oshiradi deb yozmang.'),
 ('Tezlik va resurslar',
  'Landing va asosiy app route’lari uchun real qurilma/network sharoitini yoz. Rasm o‘lchami/compression, lokal font/subset, kerakli lazy loading, route code splitting va katta ro‘yxatni pagination bilan boshqar. Animatsiya input’ni bloklamasin.',
  'LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 — Google’dagi yaxshi tajriba maqsadlari; field bahosi mobile/desktop’da 75-percentile asosida. Faqat lab sinovi bo‘lsa shunday belgila. Lighthouse 100 yoki sun’iy benchmarkni maqsad qilib funksiyani buzma.'),
 ('Kuzatuv va xizmat holati',
  'Process /health va dependency readiness’ni ajrat. Server logida xavfsiz request ID/error code; muhim amal tarixi kerak bo‘lsa kim/qachon/nima o‘zgargani maxfiy payload’siz yoziladi. Error/latency/failure va xarajat uchun vazifaga mos kuzatuv.',
  'UI’dagi xatodan serverdagi tegishli hodisani topish mumkinligini tekshiring. Alert kimga va qaysi xatoda borishi aniq bo‘lsin. Monitor yashil bo‘lsa ham asosiy foydalanuvchi oqimi alohida tekshiriladi.'),
 ('Xavfsiz release va xizmatni yuritish',
  'UI/domain/data adapterlarini ajrat; server secret va auth nazorati bir joyda. Lockfile, runtime, .env.example, migration va build/start ko‘rsatmasi. Local/test/production env alohida. Source → build → foydali tekshiruv → deploy → smoke → versiya dalili.',
  'Yangi checkout’dan qayta ishga tushiring; production callback/deep link va saqlashni sina. Kod rollback’i database’ni avtomatik qaytarmaydi. Oxirgi ishlaydigan deploy, o‘zgarish qaydi va bajarilmagan testni yozing; tekshiruvni o‘tkazish uchun nazoratni o‘chirmang.'),
]

INTRO = '''## Yirik platformalar amaliyotidan olingan sifat mezonlari

Bu kelajakdagi mahsulotga qo‘yilgan amaliy talablar. Microsoft arxitektura ustunlari, IBM Carbon navigatsiya qoidalari, W3C accessibility, Google Web Vitals va OWASP tekshiruv yo‘nalishlari tayanch sifatida ko‘rildi; quyidagi qo‘llash tartibi bizning loyiha uchun tavsiya. Ushbu korporatsiyalar bizning saytni yaratgan/tasdiqlagan degan da’vo yo‘q. Bu hujjatning mavjudligi mahsulot ushbu nazoratlarni bajarib bo‘lganini bildirmaydi.

Korporativ sifatga intilish — vazifaga mos ishonchlilik, izchil tajriba va dalilli tekshiruv. Har loyiha uchun microservice, Kubernetes, alohida serverlar, katta grafiklar yoki barcha admin sahifalarini majburan qo‘shish kerak emas. Hozirgi Render + Supabase stack saqlanadi; o‘zgartirish faqat aniqlangan ehtiyoj va foydalanuvchi qarori bilan.

'''

ENDING = '''### Qo‘shimcha imkoniyatlar qachon kerak?

- Settings/account: profil, til/tema, bildirishnoma va sessiya kabi mahsulotga kerakli sozlamalar. Soxta ishlamaydigan sozlama qo‘shma; shaxsiy ma’lumotni minimal yig‘.
- Katta jadval/katalog: meaningful qidiruv, URL’da filter/sort, pagination, mos selection/export va aniq empty/error. Export faqat ruxsatli qatorlarni oladi; bulk/destructive amal xatosi yoki qisman muvaffaqiyati yashirilmaydi.
- Admin yoki jamoaviy workspace: faqat talab bo‘lsa. Tenant/membership va record vakolati serverda tekshiriladi; browser’dagi tenant_id vakolat emas. SSO/MFA/HA kabi imkoniyatlar yoqilmagan bo‘lsa mavjud deb ko‘rsatilmaydi.
- AI mahsuloti: tashqi provayder va foydasi to‘g‘ri tushuntiriladi. Manbali javob talab qilinsa ruxsatli manbalar bilan ishlaydi; uydirma manba/kafolat bo‘lmaydi. User matni tizim vakolati emas; modelning yozish/o‘chirish so‘rovi ham server ruxsatidan o‘tadi. Ortiqcha shaxsiy ma’lumot modelga yuborilmaydi.
- Privacy va xizmat tavsifi: haqiqiy saqlash/yuborish, saqlash muddati va o‘chirish yo‘li mahsulotga mos tushuntiriladi. Ishlamaydigan “100% maxfiy”, “bank darajasi” yoki kafolatlangan uptime belgisi qo‘yilmaydi. SLA/SOC 2 yoki mustaqil audit dalilsiz da’vo qilinmaydi.

### Ishni qabul qilish

CURRENT-TASK.md’da shu vazifa uchun muhim sifat bandlari va ularning sababi tanlanadi. Asosiy foydalanuvchi oqimi, ruxsat, ma’lumot saqlanishi va xatodagi foydalanuvchi natijasi birinchi o‘rinda. Har muhim band uchun holat: tekshirildi / ochiq muammo / hali tekshirilmadi / ushbu vazifaga tatbiq etilmaydi (sababi bilan). Mos kelmagan bandni shunchaki “PASS” deb belgilang deb ko‘rsatma bermang.

HANDOFF.md’da aynan qaysi muhit, versiya, foydalanuvchi oqimi va dalil tekshirilgani yoziladi. Holatni yashirish, son uchun test ko‘paytirish, tekshiruvdan o‘tish uchun talabni pasaytirish yoki uydirma sifat bahosi chiqarish taqiqlanadi. Eng katta korporatsiya darajasiga tenglik umumiy qo‘llanma bilan isbotlanmaydi; ishlayotgan mahsulotning tegishli nazoratlari amalda baholanadi.

### Birlamchi manbalar

'''


def markdown():
    sections = '\n\n'.join(f'### {title}\n\nAmal: {action}\n\nQabul dalili: {evidence}' for title,action,evidence in QUALITY_GATES)
    return INTRO+sections+'\n\n'+ENDING+'\n'.join(f'- [{title}]({url})' for title,url in QUALITY_SOURCES)+'\n\n'


def html():
    entries = ''.join(f'<details class="risk-entry"><summary><span class="risk-number" aria-hidden="true">↳</span><span>{escape(title)}</span></summary><div class="risk-body"><dl><div><dt>Amal</dt><dd>{escape(action)}</dd></div><div><dt>Qabul dalili</dt><dd>{escape(evidence)}</dd></div></dl></div></details>' for title,action,evidence in QUALITY_GATES)
    sources = ' · '.join(f'<a href="{url}">{escape(title)} ↗</a>' for title,url in QUALITY_SOURCES)
    return f'''<section class="product-section" id="sifat" aria-labelledby="quality-heading"><p class="eyebrow">PROFESSIONAL MAHSULOT MEZONLARI</p><h2 id="quality-heading">Har chiroyli ekranning ortida — ishlaydigan qoida.</h2><p class="section-intro">Yirik platformalarning birlamchi qo‘llanmalariga tayangan sifat talablari. Har bandda bajarish yo‘li va qabul dalili bor. Bu nazoratlarning hozirgi mahsulotda bajarilgani haqidagi da’vo emas.</p>{entries}<p class="evidence-note">Biletga mos qo‘llanadi. Keraksiz microservice yoki admin panel sifat o‘rnini bosmaydi. Muhim bandlar: tekshirildi / ochiq muammo / hali tekshirilmadi / tatbiq etilmaydi — sabab va dalil bilan. Sertifikat, SLA yoki “100% xavfsiz” da’vosi dalilsiz bo‘lmaydi.</p><p class="section-intro">{sources}</p><a class="plain-link" href="/arxitektura/ai.md">To‘liq AI ko‘rsatmasi va qo‘shimcha imkoniyatlar ↗</a></section>'''
