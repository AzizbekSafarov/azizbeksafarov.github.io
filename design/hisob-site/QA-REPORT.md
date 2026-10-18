# QA — independent design collection

MAQOM: sanali baseline dalili. Joriy qayta tekshiruv yoki yangi vazifa bajarilganining dalili emas. Eng yangi to‘liq audit: https://azizbeksafarov.github.io/design/AUDIT-20261018.md .

2026-10-15. Verification applies to this snapshot, not future ticket adaptations.

- Actual browser inspection: HQ, gallery, starter and seven rebuilt/new sites. Desktop 1400; 1024, 768, 390, 320 responsive sweep (50 page/viewport combinations). No document horizontal overflow; Hisob table has intentional internal scrolling. No broken populated image sources.
- Orbita: Webb selection updates content and schematic, watchlist add, reload persistence, downloaded TXT. ISS motion supports pause; static mission diagrams identified. No live telemetry.
- Nashr: article dialog, save, saved-only view; after DOM refresh close restores opener focus. Original sample copy and separate licensed reading/craft photos.
- Hisob: 7/30-period model, totals/series consistency, vertical scale, Samarqand search, CSV download with filtered row; no-result state disables export.
- Ziyo: wrong answer retains 0/3; correct answer yields 1/3 and survives reload; all three correct yields 3/3; final next control hidden.
- Meros: detail category, article dialog, save/close/Escape focus, index resets filters and reaches intended work, TXT download.
- Samar/Forma: existing six model tests preserved; new hero/detail triggers verified. Existing storage keys preserved; Forma object name corrected to match photograph.
- HQ: nine options, search match/empty, selected Ziyo prompt includes exact ticket/time and matching source URL, clipboard success.
- Console error/warn snapshot after these interactions: none.
- Independent screenshot critique performed, fixes applied: photo differentiation, lead headline hierarchy, exhibition index, product labeling, graph scale and caption readability.

Models are tested with node --test. Handoff verifier checks manifest hashes, source ZIP integrity, internal runtime assets and competition context. Fonts/photos bundled locally with licenses. No account, real booking/payment, official statistics or full accessibility/performance certification claimed.

Final verification: 16 model tests PASS; handoff manifests and 9 source ZIP packages PASS. Nashr two-tab storage sync: both visible counts 2. Graph preview captured after entrance stroke-dashoffset reached 0px. Final 50-case sweep recorded in design/QA-BREAKPOINTS.json.

## 2026-10-16 — independent sector identity

See ../SECTOR-IDENTITIES.md and ../QA-SECTORS.json for the current visual contract, interaction checks and 35 responsive measurements. Earlier QA applies to earlier snapshots.


## Expanded regression verification — 2026-10-16

The complete library now has 544 automated tests (544 pass, zero fail), including per-template combination tests. Run all local `*.test.mjs` files for HTML starters; Bloom uses `npm run test`. The central app event fixture is only included in the complete repository.

All ten pages were rechecked at seven widths (320–1440 px): no document overflow, duplicate IDs or unloaded visible images. See the [expanded report](https://azizbeksafarov.github.io/design/QA-EXPANDED.md) for reproduced fixes, actual browser scenarios, rerun commands and limitations. This is baseline evidence for this revision, not a guarantee for later edits.
