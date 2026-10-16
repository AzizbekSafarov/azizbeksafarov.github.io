# Seven independent sector identities — 2026-10-16

The user requested distinct typography, shapes, compositions, imagery and domain interactions. The earlier art-direction research is applied in this snapshot.

| Design | Visual language | Primary typography |
| --- | --- | --- |
| Ziyo | Peach teaching workshop, white board, burgundy exercise book, working lesson example | Bree Serif / Nunito Sans |
| Orbita | Technical observatory, phosphor instruments, orbital diagram and mission register | Chakra Petch / IBM Plex Mono |
| Forma | Object showroom, thin editorial titles, staggered photographic shelf | Italiana / Manrope |
| Samar | Travel atlas, folded schematic map, directory and perforated itinerary | Lora / Source Sans 3 |
| Meros | Ultramarine exhibition poster, heavy slab lettering, lime ink, alternating artworks | Alfa Slab One / Literata |
| Nashr | Printed newspaper, double rules, dense columns, monochrome imagery | Newsreader / PT Serif / Archivo |
| Hisob | Operational ledger, unified KPI band, responsive chart and compact table | Public Sans / IBM Plex Sans Condensed |

Bloom and Yuksal retain their approved independent implementations. Preserve each domain task and visual contract when adapting a competition ticket.

## Canonical source

identity-styles/base.css shares accessible mechanics. Seven individual CSS files contain complete visual systems. identities_v4.py applies these after the original HTML generators. Runtime style.css contains local font faces and mechanics; layout.css contains each sector's responsive styling. Ziyo identity.js implements the teaching example. Existing model IDs, storage keys and core flows remain compatible.

Run python design/build_collection.py, python design/build_refined.py, then python design/build_handoff.py and python design/verify_handoff.py from the repository root when regenerating. Standalone source ZIPs can be edited directly. Fonts are bundled with OFL licenses; no runtime font CDN.

## Actual verification

- 22 model tests passed across seven sector templates and the headquarters library.
- 35 actual browser cases: seven templates at 1440, 1024, 768, 390 and 320 px. Every document had zero horizontal overflow and loaded populated visible images. Raw measurements: QA-SECTORS.json.
- Sixteen bundled font roles cover the tested Uzbek phrase. See QA-SECTOR-FONTS.json. Representative secondary text contrast checked; this is not full accessibility certification.
- Ziyo: example interaction, wrong/correct grading, all three completed lessons, final next-control state, reload persistence and next-title focus.
- Orbita: animation pause, static mission, disabled motion control where appropriate, watchlist and reload.
- Forma: category, product detail, cart quantity and total, Escape focus and reload.
- Samar: map detail, two destinations, 10:00 start, reorder, 155-minute plan, selected pins and reload.
- Meros: category, detail, save, saved-only filtering and Escape focus after list replacement.
- Nashr: category, reader, save, saved-only filtering and restored opener focus. Heading/button nesting corrected.
- Hisob: 30-day search yields only Samarqand 880; downloaded CSV matches the filtered row. No-match disables export. Chart coordinates resize with available width while retaining filters.
- Independent desktop/mobile screenshot review found distinct identities and no clipping/overlap blocker. Save-button, faint-label and mobile-header findings were corrected.
- Full original regeneration reproduced tested application/model code hashes.

These are demonstrated paths, not a zero-bug guarantee for future adaptations. Statistics, prices and travel durations remain labeled samples. Maps and orbital diagrams are schematic. No real payment, booking or telemetry service is implied.
