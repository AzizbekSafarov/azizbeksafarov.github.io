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

## HQ flow corrections — 2026-10-15

Reproduced three failures before changing the implementation: phone design choices started 1218px below the viewport top; choosing Bloom then opening the starter silently selected Orbita; empty ticket/time fields still produced a successful clipboard message.

- Phone layout now starts with the list (366px at 390×844), then opens the selected detail with an explicit return control. Compact navigation supports Escape and focus return. Desktop retains both panes.
- Design choice is passed to the starter; exact ticket and time were verified in the copied prompt. Blank and whitespace-only input instead exposes associated inline errors and focuses the first missing field.
- Search, category, selection and phone view are encoded in the URL. Reload, browser Back, empty/reset and unknown parameters were exercised.
- Current browser sweep: 40 page/viewport cases, widths 1400/1024/768/390/320, including detail and no-result states. Every case had document overflow 0 and broken populated images 0. See QA-HQ-FLOWS.json.
- Six library model tests pass; all nine handoff packages and hashes pass verification. Console warning/error snapshot was empty.
- Independent screenshot review found no blocking collisions or readability issues. Applied its spacing and shorter action-label refinements. Final phone buttons both measure 48px high, action padding 12px, overflow 0.

Layout reference: https://m3.material.io/foundations/layout/canonical-examples/overview
Form labels and feedback reference: https://www.w3.org/WAI/tutorials/forms/labels/

## Root shape language — 2026-10-15

User clarified that the repeated geometry concerned the .io root, not the demonstration sites. Retained the palette, font family and task layout. Replaced boxed search, filled filter chips, rounded row cards, equal button containers and mock browser chrome with distinct shapes for each role. The asymmetric preview backplate is separate from its unmasked screenshot. Its caption now identifies a site view rather than implying an embedded live page.

- Current 15-case responsive check: list, detail and empty result at 1400/1024/768/390/320. Overflow and broken populated images were 0 throughout; see QA-HQ-SHAPES.json.
- Phone actions measure 52px high. Savdo filter → Forma → starter preserves Forma. Existing six library model tests pass.
- Independent desktop/mobile screenshot critique confirmed visible geometry changes, differentiated actions and no blocking collisions/readability problems.
- Role distinction follows Carbon's continuity/contrast guidance: https://www.carbondesignsystem.com/building-blocks/foundations/2x-grid/guidelines

## User colour reference — 2026-10-15

Applied the supplied graphite AI control image as a colour reference to the root/gallery: graphite surfaces, off-white text, warm/cool spectral edge and localized glow on the primary action. Geometry and demonstration screenshots unchanged. Colour overrides are scoped to library pages.

- 15 list/detail/empty cases at 1400/1024/768/390/320 had document overflow 0; recorded in QA-HQ-COLOUR.json.
- A rendered text-colour pass caught two inherited light-theme defects: mobile return label and keyboard skip link. Both now have explicit high-contrast colours. This pass is not a full accessibility certification.
- Desktop/mobile screenshots independently reviewed: reference colour mood recognizable; no blocking readability issue or excessive glow identified.
