# Component-level design research and correction — 2026-10-16

## Problem identified by the user

The previous templates changed hero typography and color, yet their inner components repeated small, delicate text, fine separators and weak outlined actions. Meros exhibition-index rows, Samar destinations and Forma prices/cart controls were the concrete examples. A working layout and absence of overflow did not prove the visual distinction requested by the user. The previous review missed this.

## Sources actually read

- [NN/g: Similarity Principle in Visual Design](https://www.nngroup.com/articles/gestalt-similarity/) — shared visual traits, including shape, scale and font treatment, make components appear related. Application here is our inference: inspect inner components side by side without their heroes.
- [NN/g: Flat UI Elements Attract Less Attention and Cause Uncertainty](https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/) — an eye-tracking study isolating clickability cues found weak cues required more user effort. This does not establish that every flat button is bad. Primary actions here receive clear surfaces and distinct states.
- [USWDS: Typography](https://designsystem.digital.gov/components/typography/) — microtypography and macrotypography both influence reading. Most running text should have at least an effective 16px size; smaller roles should be sparing. Our old 9–12px text was overused. Reading passages are enlarged; short metadata remains secondary.
- [Pentagram: Typefaces](https://www.pentagram.com/typography) — type choices communicate tone, including bold/delicate and understated/exuberant. The implementation should have a domain voice throughout, not merely a different display font at the top.
- [NN/g: Good Visual Design, Explained](https://www.nngroup.com/articles/good-visual-design/) — typography, grid alignment, purposeful color and useful imagery form a coherent system. Bold everywhere is not a substitute for hierarchy.

## Three deliberately different component systems

| Component | Before | Current contract |
| --- | --- | --- |
| Meros exhibition index | Fine serif rows and hairline separators | Archivo 750 at 17–18px; large numerical column; full clickable sharp block; lime edge and circular arrow; slab type stays in exhibition headings; Literata reserved for long commentary |
| Samar destination | Small Lora title, thin separators, pale outlined add button | Source Sans 3 750 destination titles, readable description, rounded white cards, photo corners, solid blue pill action, green selected state; Lora 700 reserved for atlas headings |
| Forma shop | Thin Italiana headings, tiny prices, outlined cart actions | One coherent Manrope system: 500 reading / 650–750 service / 800 display and price; solid rectangular black commerce controls; 22px price; clear green success; mobile inventory uses full-width products |

Maintain separate shape, text, action and state vocabulary across these systems. Keep the whole collection varied; do not spread this exact treatment to all templates. Preserve native links, keyboard focus, hover/pressed/disabled distinctions, reduced motion and existing validated domain models.

## Editing and handoff

Canonical CSS remains identity-styles/{meros,samar,forma}.css. identities_v4.py owns local font roles, catalog/AI descriptions and semantic Meros index spans. No new package or runtime CDN. App and model code for all seven sectors is unchanged. Regeneration is tested for idempotence before packaging.

Current browser measurements are recorded in QA-COMPONENTS.json, including computed action font sizes and weights. Raw old measurements in QA-SECTORS.json describe the previous snapshot only. Screenshots inspect the supplied inner regions as well as desktop composition. This documents checked behavior; user acceptance remains the user's decision.


## Final verification

- 15 current browser measurements at 1440, 1024, 768, 390, 320 px: zero document horizontal overflow, populated visible images loaded. QA-COMPONENTS.json replaces the initial failing sweep after the mobile atlas correction.
- Forma mobile: wordmark/cart share the first row, navigation occupies an intentional second row, four filters stay on one grid row. Actual cart action updates status; 22px/800 price and 14px/750 primary action are distinct. 320px detail dialog has equal scroll/client width (265px).
- Samar: map selected markers render the correct check glyph; detail opens and Escape closes. Source encoding normalized in canonical CSS before regeneration.
- Meros: numbered index link reaches the correct work; final target sits at the 24px scroll offset.
- Eight existing domain model tests passed; application/model source contents remain unchanged across all seven sectors.
- All 42 generated runtime files reproduce identically on a second generator application. Sixteen font roles cover the tested Uzbek phrase.
- Nine portable packages pass link, SHA-256 manifest, runtime asset and competition-context verification.

This is checked-path evidence, not a claim that future adaptations cannot contain defects.
