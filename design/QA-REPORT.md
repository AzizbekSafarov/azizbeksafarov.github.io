# Design audit — 2026-10-10

Scope: nine local templates and their selection gallery. Verified in the Codex Chromium browser. Templates remain local for selection.

## Corrections

| Area | Changes |
| --- | --- |
| All templates | Larger button targets, visible keyboard focus, reduced-motion support, responsive grids, properly named dialogs, message field, name/phone validation, mobile menu closes after navigation and Escape, focus returns to a visible opener. |
| KasbLab | Narrow-screen learning card spacing, consistent sample progress, working lesson link, card action alignment. |
| Samar | Readable secondary text and illustration caption. |
| Orbit | Headline fits small phones; project metadata wraps; decorative labels no longer imply clickable links. |
| Forma | Readable text, 44px add buttons, category count, quantities and unit prices, consistent currency format, persistent basket, focus after item removal. |
| Pulseboard | Readable metrics/table/status labels, responsive cards, keyboard-scrollable table, consistent period metrics and product counts, average calculated from revenue/orders, search count and empty state, correctly labelled filtered CSV export. |
| Qadam | Readable rail text, aligned course actions, 48px bookmarks with unique labels, combined filters and reset, persistent bookmarks/theme, three achievable demo lessons, task-specific instructions, no duplicate completion, progress reset, next lesson selection. |
| Lola | Contrast, card actions, narrow-screen type, badge stays inside the illustration. |
| Spark | 44px palette controls, matching secondary colors, persistent palette, readable logo/focus, responsive statistics. |
| Open City | Readable secondary text and tonal buttons, wrapping map caption and headings, consistent card actions. |
| Gallery | Improved contrast, keyboard skip link, flexible header, aligned card links, reliable hidden image fallback, refreshed screenshots. |

## Verification

- 45 layout checks: all nine templates at viewport widths 320, 390, 768, 1024, and 1440px. No horizontal page overflow or clipped heading/button bounds found. The dashboard table intentionally scrolls within its own labelled region.
- All 41 request-button and category-filter checks passed; each request opens its matching title and each filter shows the matching cards.
- Invalid whitespace-only names and invalid phone characters are rejected; a valid local form displays confirmation. Escape closes the dialog; a mobile navigation opener returns focus to the menu button.
- Cart: adding two chairs and one lamp produces 3,000,000 so‘m; reducing to one chair produces 1,710,000 so‘m; two items survive reload; removing both yields an empty basket and zero total.
- Qadam: saved-course filtering, empty state/reset, all three lesson completions, prevention of duplicate completion, progress reset, and persistence across reload. Light and dark modes checked.
- Pulseboard: weekly values 12,480,000 / 86 / 316 / 145,116; product counts 31 / 22 / 18. Search ignores surrounding spaces and case. CSV downloaded and inspected: header plus the single matching Aziza order. Zero matches disable export.
- Spark: blue palette and secondary colors survive reload; restored to lime after checking.
- Computed text-contrast checks passed on opaque backgrounds for all nine templates and gallery, plus Qadam dark mode. Visual review covers illustrations; this is not a formal accessibility certification.
- No JavaScript console errors observed on the nine final pages. JavaScript syntax checked with Node.
- All local links, anchors, script/style/image assets and font files checked for existence and duplicate HTML IDs checked.

## Source and limitations

Edit `build_templates.py`, `extra_templates.py`, `src/shared.js`, or `src/extra.js`; run `python build_templates.py` to regenerate the pages. Do not edit generated HTML/JS alone because regeneration replaces it.

Forms, prices, statistics, lessons and orders are demonstrations. Forms do not submit to a backend. Basket and preferences use this browser's local storage; no form/contact data is stored. If storage is unavailable, interactions still run in memory. Payment, authentication, cross-device sync, and live data are not implemented.

Validation covered Chromium, desktop/tablet/mobile viewport sizes, and keyboard interactions. Safari/Firefox and physical touch devices were not available for this audit.
