# Distinct compositions — 2026-10-16

Follow-up: the user still finds the typography and visual identities too similar. The earlier screenshot review below checked layout usability and is not user acceptance of brand diversity. Read [the subsequent source-based art-direction audit](ART-DIRECTION-RESEARCH.md) before another redesign; it documents repeated runtime fonts, remaining visual similarities and the next review criteria.

The user's request is structural variety, not extra color themes. Three repeated marketing compositions were rebuilt around actual tasks:

| Starter | Main visual / user task | Composition to preserve |
| --- | --- | --- |
| Ziyo | Learn, inspect code, answer | Course rail + reading column + contrasting exercise area; no promotional hero |
| Forma | Compare objects and build a shopping list | Shop spine + asymmetric product inventory; one full object, two compact rows; no promotional hero |
| Samar | Select landmarks and arrange a day | Fold-out schematic atlas, directory and adjacent plan; mobile map → stops → plan |
| Orbita | Explore missions | Dark orbital diagram and mission register |
| Nashr | Read and save stories | Newspaper masthead and editorial columns |
| Hisob | Inspect numbers | Compact analytics shell, chart and table |
| Meros | Browse an exhibition | Museum poster and large photo gallery |
| Bloom | Manage projects | Material 3 workspace and official controls |
| Yuksal | Explore initiatives | Kinetic particle identity and long-form editorial portal |

Do not flatten these into the same centered heading + illustration + three equal cards. Shared accessibility primitives are useful; shared spatial templates defeat the purpose. Adapt the domain's task, not merely its accent color.

## Editing

The last composition layer for Ziyo/Forma/Samar is `layout.css`, linked after `style.css`. Runtime HTML preserves model IDs and validated local-storage keys. `diversity_v3.py` is the canonical final composition generator; `build_collection.py` applies it to Ziyo, `build_refined.py` to Forma/Samar. Rerun deliberately: source generators replace runtime files. Standalone competition ZIPs are edited directly.

## Actual verification this turn

- Eight existing model tests passed for quiz grading, plan validation/timing/export, cart validation/totals/bounds.
- Real browser: Ziyo wrong answer leaves progress unchanged, correct answer increments, next focuses lesson title, reload preserves completion.
- Real browser: Forma category → detail → add → cart quantity yields 360,000 so‘m for two sample Terra vases; Escape restores cart opener; reload keeps quantity.
- Real browser: Samar map pin opens correct detail, Escape restores pin; two stops → 10:00 start → reordered plan yields 10:00–11:00 /11:20–12:35 and155 minutes; reload preserves actual input value/order. Added stops are marked on map.
- 320/390/768/1024/1440 widths for all three: zero horizontal document overflow; no missing visible images. Measurements: `QA-DIVERSITY.json`.
- No warning/error entries returned by browser log inspection for these pages. Existing hidden dialog image placeholders without src are not failed resources.
- Independent screenshot reviewer found structural variety convincing and no clipping/overlap blocker. Its primary concern (Forma purchase controls too low) was corrected with shorter imagery and title.

Limits: Samar is clearly labeled schematic, not geographic navigation. Demo prices and travel times stay labeled; no backend, booking, payment or live telemetry was added. This is evidence of checked paths, not a zero-bug guarantee.
