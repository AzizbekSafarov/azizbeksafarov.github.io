# QA — independent design collection

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


## HQ workspace rebuild — 2026-10-15

Replaced the public root/gallery composition with a master/detail library and persistent shared navigation. No changes to the nine demonstration implementations.

- Reproduced perceived failed navigation: raw /ai.md did not visibly navigate in the browser. Human navigation now uses /ai/ HTML; raw Markdown stays available with an explicit download label.
- All nine selections update demo, context and ZIP targets. App/story/shop counts: 3/5/1. Apostrophe-normalized search and explicit empty/reset state verified.
- Known URL reload, Back/Forward and unknown slug fallback verified. Phone selection moves focus to the selected heading, visible 62px below viewport top; return-search link provided.
- Actual demo and context navigation verified with Ziyo. AI context and generated Ziyo prompt copied to clipboard. Exact ticket and remaining time preserved; source brief link opens HTML.
- Browser-downloaded Ziyo source.zip SHA-256 equals packaged source.zip.
- 30 current browser cases: root, gallery, starter, quality, readable AI, 404 × 1400/1024/768/390/320. Document overflow 0 and populated image failures 0 in every case. See QA-HQ-WORKSPACE.json.
- Current console error/warning snapshot: empty. Three library-model tests pass.
- Independent visual critique applied: readable control typography; description before actions; clear AI and ZIP labels; phone return-search; short preview title. Subsequent critique found no blocking readability/spacing issues. Screenshots can require an additional capture after async image decoding; DOM image completion was separately checked.

These checks do not claim exhaustive accessibility certification, production backend functionality or zero future bugs.
