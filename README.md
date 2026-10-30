# Azizbek Safarov — ochiq ish maydoni

https://azizbeksafarov.github.io/ — Ustoz AI “Eng yaxshi veb-sayt” tanloviga tayyorgarlik: 9 ta dizayn starteri, AI uchun to‘liq kontekst va kuchsiz AI uchun zaxira reja. Ochiq paket joriy bilet bermaydi; haqiqiy bilet, vaqt va joydagi qoida ustuvor.

## Bo‘limlar

| Manzil | Nima bor |
|---|---|
| `/`, `/design/` | Dizayn kutubxonasi: Bloom, Yuksal, Orbita, Nashr, Hisob, Ziyo, Meros, Samar, Forma. URLdagi `design`, `q`, `type`, `view` holatni tiklaydi. |
| `/design/<slug>/` | Har dizayn: AI yo‘riqnomasi (`ai.md`), o‘qiladigan kod, `source.zip`, `manifest.json`. `/dezayn/<slug>/` — o‘zbekcha manzil, bir xil mazmun (generator yaratadi). |
| `/design/start/` | Bilet, vaqt va dizayndan AI topshirig‘i (`CURRENT-TASK.md`). Qoralama brauzerda saqlanadi, serverga yuborilmaydi; bilet va vaqt kiritilmaguncha nusxalanmaydi. |
| `/zaxira/` | **Kuchli AI bo‘lmasa:** build’siz sayt skeleti, kichik AI uchun so‘rovlar, himoyadagi jonli o‘zgarish qo‘llanmasi, `zaxira.zip`. |
| `/tayyorgarlik/` | To‘liq o‘qish yo‘riqnomasi: `full-context.md`, `reading-plan.json`. |
| `/ish-tartibi/` | AI bilan ish tartibi, fakt maqomi, ehtimoliy xavflar, `status.json`, CURRENT-TASK/HANDOFF shablonlari. |
| `/arxitektura/`, `/api/` | Render + UptimeRobot + Supabase + Google Auth + AI + Telegram rejasi va sanali API sinovlari (18-oktabr). Reja — hali ishga tushgan infratuzilma emas. |
| `/ai/`, `/ai.md`, `/llms.txt` | Markaziy AI konteksti. |
| `/design/kit.zip` | 9 ta kod paketi + to‘liq tanlov konteksti + ZAXIRA. |
| `/design/standart/` | Sifat mezonlari. |
| `/ustoz/` | Alohida repozitoriy (`internet-kontekst`): tadqiqot, 39 sahifalik nizom matni. |
| `/keys/` | Alohida himoyalangan kalitlar omboriga yo‘naltirish; bu repozitoriyda kalit yo‘q. |

## Har bir `source.zip` ichida

- `START-HERE.md` — kirish; `AGENTS.md` / `CLAUDE.md` / `GEMINI.md` — AI qoidalari (kichik kontekstli AI uchun “SMALL-CONTEXT MODE”).
- `site/` — tahrirlanadigan kod; `node serve.mjs` → http://127.0.0.1:8080/ (npm shart emas).
- `ZAXIRA/` — `ZAXIRA.md`, `PROMPTLAR.md`, `JONLI-OZGARISH.md`, `skelet/`.
- `FULL-COMPETITION-CONTEXT.md`, `REGULATIONS.md` (39 sahifa), `SCORING-WORKPLAN.md`, `TASK-BOUNDARY.json`, `CURRENT-COMPETITION*.md/json`.
- `node verify-package.mjs` — tahrirdan oldin original paketni hajm, SHA-256 va ortiqcha fayl bo‘yicha tekshiradi. Keyingi tahrir hashni tabiiy ravishda o‘zgartiradi.

## Build va tekshiruv

```text
python design/build_handoff.py      # barcha paket, manifest, ZIP, so‘ng HQ sahifalari
python design/build_hq.py           # faqat HQ ko‘rinishi o‘zgarsa
node design/qa/run.mjs              # model, storage, starter va zaxira testlari
python -B design/verify_handoff.py  # paketlar manba bilan mos (ZAXIRA ham)
python -B design/verify_site.py     # HTML, redirect, alias, anchorlar
python -B design/verify_public.py   # maxfiy qiymat naqshlari (ichma-ich ZIP ham)
python -B design/test_package_boundary.py
python -m http.server 8770 --bind 127.0.0.1
```

`?v=` keshlash hashlari Git nashr qiladigan LF baytlardan olinadi, shuning uchun CRLF va LF checkout bir xil build beradi. Generatorlar bevosita tahrirni qayta yozadi — manbani o‘zgartiring:

| Qism | Manba |
|---|---|
| HQ qobig‘i va kutubxona | `design/workspace_hq.py`, `assets/hq/workspace.css`, `geometry.css` (shakl), `aurora.css` (rang), `exhibition.css`, `workspace.js`, `library-model.mjs` |
| Topshiriq formasi | `assets/hq/starter-model.mjs`, `starter.mjs`, `starter.css`, `design/starter_page.py` |
| Zaxira | `zaxira/ZAXIRA.md`, `zaxira/PROMPTLAR.md`, `zaxira/skelet/*` (qo‘lda); `design/build_zaxira.py` jonli o‘zgarish jadvali, `zaxira.zip` va sahifani yaratadi |
| Ish tartibi, arxitektura, API | `design/build_workflow.py`, `design/build_architecture.py`, `design/product_quality.py` |
| Tayyorgarlik | `design/preparation-guide.md`, `design/build_preparation.py` |
| Tanlov konteksti | `../internet-kontekst` (canonical), `design/sync_context.py` |

Bloom: `design/material-expressive/src/` ni tahrirlang, minified `dist`ni emas; o‘z `AGENTS.md` qoidalariga amal qiling. Yuksalning oq foni va brend faviconi saqlanadi. Mahalliy nusxani sinxronlash: `pwsh -File design/sync_local.ps1 -Apply` (`-Apply`siz faqat reja).

## Nashr

GitHub Pages `main`/rootdan nashr qiladi. Pushdan keyin deployment, ochiq HTML va muhim UI amallari tekshiriladi. Eski QA keyingi tahrirlar dalili emas.

## Tarixiy qaydlar

- 2026-10-30: kuchsiz AI uchun zaxira to‘plami (`/zaxira/`, har ZIPda `ZAXIRA/`); topshiriq eksportidagi buzilgan havola tuzatildi; build CRLF/LF’dan mustaqil; mobil filtr tablari bir qatorda.
- 2026-10-29: original ZIP tekshiruvchisi ortiqcha fayllarni rad etadi; source yig‘ishda dependency papkalari chiqariladi, `.env`/log/kalit fayllari nashrni to‘xtatadi; lokal preview yashirin fayllarni xizmat qilmaydi.
- 2026-10-28: nizom va amaliy qoidalar qayta tekshirildi (`design/handoff/current-competition.md`); kontekst havolalari va o‘qish xaritasi auditi (`design/verify_context.py`).
- 2026-10-18: to‘liq audit — [AUDIT-20261018.md](design/AUDIT-20261018.md), [QA-UPGRADE.md](design/QA-UPGRADE.md), [ZIP-CONTEXT-QA.md](design/ZIP-CONTEXT-QA.md). Undagi o‘lchovlar o‘sha versiyaga tegishli.

Demo yozuvlari, QA fixture’lari va nizom loyihasidagi namunaviy bilet joriy topshiriq emas (`design/handoff/task-boundary.json`). Shaxsiy kalit omborining fayllari bu repozitoriyga ko‘chirilmaydi.
