# Yuksal · SI verification — 2026-10-15

MAQOM: sanali baseline dalili. Joriy qayta tekshiruv yoki yangi vazifa bajarilganining dalili emas. Eng yangi to‘liq audit: https://azizbeksafarov.github.io/design/AUDIT-20261018.md .

Nine tests pass: persisted-plan sanitization, reversible known-ID toggling, exported content/order, spring convergence, pointer/click repulsion, long-frame integration, finite animated geometry for all seven procedural shapes at 1500/1800 particles, Uzbekistan flag identity, and safe parsing of malformed/external storage values. The flag test checks the three bands, two red separators, crescent, 12 stars in 3/4/5 rows, and matching SVG fallback. Application and motion modules pass syntax validation.

Browser checks completed on the local site:

- Canvas initializes with bundled fonts. The same persistent field changes from SI to desktop serpentine Super Intelligence on hover, and to rotating circular lettering at a 390 px viewport via the accessible hero control. Keyboard Enter toggles it back.
- Scroll targets were observed in the browser: orbital sphere, helix, towers, sphere, expanding broadcast rings, drifting scatter and waving banner. Pale-background contrast was corrected for nested step chapters.
- Pause/resume changes its accessible label and pressed state. Two screenshots taken separately while paused were byte-identical, verifying visible motion actually freezes.
- Circular menu opens, navigation closes it, and Escape restores keyboard focus.
- Learning filter returns two initiatives; creation filter returns one.
- Initiative detail shows its real steps. Adding/removing selections updates the plan and empty state. Reload preserves saved selections.
- Downloaded UTF-8 plan was read back and contains the selected initiatives and their steps in order. An empty plan disables download.
- Current motion revision: no horizontal overflow at 320, 390, 768 and 1024 px, plus the default desktop viewport. The prior 1440 px baseline and narrow-dialog checks are historical, not rerun for this motion revision. Filter → detail → save → Escape was rerun: two learning cards, plan count one, focus restored to the opening card.
- No browser console errors were recorded during the main flows.

Reduced-motion support, hidden-tab suspension and canvas fallback are implemented. Hero-offscreen suspension was deliberately removed: scroll chapters reuse the same field. The operating-system reduced-motion preference and physical touchscreen input were not emulated during this check; mobile geometry and keyboard control were tested.

The gallery, handoff manifests and portable archives are checked separately by `design/verify_handoff.py`; deployment status is verified after publication rather than assumed here.

Uzbekistan palette revision: blue #0099b5, white #ffffff, green #1eb53a, deep teal surfaces #062c35; red #ce1126 is reserved for flag separators. The former US 13-stripe target has been replaced. Flag colors are preserved during particle motion. A 390 px browser view shows the waving flag with its crescent and 12 stars; no console errors were recorded. The mobile menu still navigates to the plan. The revised palette has no horizontal overflow at 320/390/1440 px; the hero morph still activates. Primary cyan buttons use the deeper foreground role after checking small-label contrast.

Independent demo inspired by SI.gov's motion mechanics, Instrument Serif/Sans contrast and circular menu, with Uzbekistan branding requested by the user. No personal information is submitted. The plan is browser-local.

Latest user revision: the main background is now pure white (#ffffff), with deep teal text and blue/green accents. Hero, vision, signal, plan, menu and footer share the white surface. Canvas brightness roles follow computed CSS; white flag particles have a fine neutral outline on pale surfaces. Hero particle bounds are capped above the copy block to avoid crossing the description. Desktop computed styles confirm white body/hero and dark text. The 390 px plan view shows the outlined flag on white; 320 and 390 px have no horizontal overflow and no console errors were recorded.


Favicon and interaction audit:

- Replaced flag favicon with a Yuksal asterisk at a new SVG URL, with 32 px PNG and 180 px Apple touch fallbacks. Legacy mark.svg now carries the same brand, while uzbekistan.svg remains page content.
- Reproduced stale cross-tab state before the fix: primary plan 1/4, second tab 0/4. After the fix, adding produced 2/4 in both and removing produced 1/4 in both. Edits read the latest stored plan; removal remains idempotent. Broken JSON safely becomes a valid empty plan.
- Downloaded the remaining laboratory plan through the real browser download flow and read the file back: correct title, description and three steps. The temporary anchor is now connected to the document and its Blob URL has a longer release window.
- At actual 320×568 viewport, scrolling the menu kept the close button visible (top 22 px). Filter → two learning results → detail → save → Escape restored the card opener; count became 2/4 and console errors were empty.
- Initialize visibility from document.hidden and wait for active fonts before measuring particle masks. Touch pointer type is retained from pointerdown for click-event compatibility. Explicit Continue now enables motion when the OS originally requested static display; physical touch and OS preference switching were not device-tested.


## Expanded regression verification — 2026-10-16

The complete library now has 544 automated tests (544 pass, zero fail), including per-template combination tests. Run all local `*.test.mjs` files for HTML starters; Bloom uses `npm run test`. The central app event fixture is only included in the complete repository.

All ten pages were rechecked at seven widths (320–1440 px): no document overflow, duplicate IDs or unloaded visible images. See the [expanded report](https://azizbeksafarov.github.io/design/QA-EXPANDED.md) for reproduced fixes, actual browser scenarios, rerun commands and limitations. This is baseline evidence for this revision, not a guarantee for later edits.
