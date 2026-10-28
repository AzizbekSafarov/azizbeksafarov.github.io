# Azizbek — tanlov dizaynlarini yangi AI bilan ishlatish

2026-10-28. Faol dizaynlar: 9. Faqat tanlangan dizaynning sahifasi yoki ai.md faylini o‘qi. Unda tanlov konteksti, visual contract, run, haqiqiy source, oldingi tuzatishlar va xatoni tekshirish/tuzatish tartibi bor.

- [Orbita](https://azizbeksafarov.github.io/design/orbita/) — /design/orbita/; Qorong‘i texnik observatoriya: Chakra Petch, monospace yozuv, orbital asbob oynasi va vertikal missiya registri.
- [Nashr](https://azizbeksafarov.github.io/design/nashr/) — /design/nashr/; Bosma gazeta: Newsreader masthead, PT Serif maqola, Archivo xizmat yozuvi, oq-qora suratlar va zich tahririy ustunlar.
- [Hisob](https://azizbeksafarov.github.io/design/hisob/) — /design/hisob/; Ma’lumotlar ish stoli: Public Sans xizmat interfeysi, ixcham Plex raqamlari, birlashgan ko‘rsatkich bandi va aniq jadval.
- [Ziyo](https://azizbeksafarov.github.io/design/ziyo/) — /design/ziyo/; Rangli ta’lim ustaxonasi: yumshoq Bree Serif, bosqichli dars yo‘li, ishlaydigan ko‘rgazmali misol va olcha rangli mashq daftari.
- [Meros](https://azizbeksafarov.github.io/design/meros/) — /design/meros/; Ko‘rgazma plakati: og‘ir Alfa Slab One, dadil Archivo navigatsiyasi, yirik raqamli indeks va ultramarin/limon bloklari.
- [Samar](https://azizbeksafarov.github.io/design/samar/) — /design/samar/; Sayohat atlasi: dadil Lora sarlavhasi, yumaloq manzil kartalari, to‘liq rangli reja tugmalari va buklama xarita.
- [Forma](https://azizbeksafarov.github.io/design/forma/) — /design/forma/; Zamonaviy obyekt studiyasi: kuchli Manrope, qora savdo tugmalari, yirik narxlar va balandligi turlicha fotografik shelf.
- [Bloom · Material Design 3](https://azizbeksafarov.github.io/design/bloom/) — /design/bloom/; Rasmiy Material Web komponentlari, Material Symbols va dinamik rang tizimi. Ishlaydigan loyiha maydoni.
- [Yuksal · SI](https://azizbeksafarov.github.io/design/si/) — /design/si/; Oq asosiy fon, O‘zbekistonning moviy va yashil aksentlari; yarim oy va 12 yulduzli zarrachali bayroq. SI.gov harakat mexanikasi, serif va jonli shakl almashishi.

- [Markaziy kontekst](https://azizbeksafarov.github.io/ai.md)
- [Qisqa tanlov konteksti](https://azizbeksafarov.github.io/design/handoff/competition.md)
- [Barcha yig‘ilgan tanlov ma’lumoti](https://azizbeksafarov.github.io/ustoz/ai.md)
- [Tanlangan 9 source ZIP va tanlov matnlari](https://azizbeksafarov.github.io/design/kit.zip)
- [Machine-readable faol katalog](https://azizbeksafarov.github.io/design/catalog.json)
- [Sifat standarti](https://azizbeksafarov.github.io/design/DESIGN-STANDARD.md)
- [Kengaytirilgan testlar](https://azizbeksafarov.github.io/design/QA-EXPANDED.md)

Foydalanuvchi bilet, vaqt va joydagi talabni beradi. AI tanlangan uslubni saqlab mavzuga moslashtiradi, amallarni tekshiradi, xatoni tuzatib qayta sinaydi va HANDOFF.md ga holatni yozadi. Link doimiy xotira yoki avtomatik bajarishni kafolatlamaydi.

Bu ochiq paket haqiqiy bilet bermaydi. TASK-BOUNDARY.json ni o‘qi; demo mazmun, tarixiy reja va nizom loyihasidagi namuna joriy vazifa emas. Biletni foydalanuvchi bermaguncha mavzu o‘ylab topma.

## Joriy ish tartibi va server rejasi

WORKFLOW.md va PROJECT-STATUS.json dan boshlang. ARCHITECTURE.md — Render + Supabase, API-GUIDE.md va API-EVIDENCE.json — sanali sinovlar. Bular tayyorgarlik snapshot’i; joriy bilet, foydalanuvchi qarori va loyiha holati ustuvor. Tanlangan source.zip ichida ham shu hujjatlar mavjud.

To‘liq o‘qish uchun PREPARATION.md ga amal qiling. START-HERE mundarija; to‘liq manba o‘rnini bosmaydi. Online yig‘ma: https://azizbeksafarov.github.io/tayyorgarlik/full-context.md .

Original umumiy paketni node verify-package.mjs bilan tekshiring. Tanlangan source.zip ichida START-HERE.md birinchi o‘qish tartibini beradi; to‘liq tadqiqot, mezon/dalil rejasi va barcha nizom matni ham o‘sha paketning o‘zida.
