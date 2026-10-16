# Yuksal · SI

Independent Uzbek initiative portal inspired by https://www.si.gov/, inspected on 2026-10-15. Original Uzbek content, canvas/CSS artwork and interactions. The page has a pure white main background with dark readable text. The flag and interface accents use Uzbekistan blue/white/green with a crescent and 12 stars; motion mechanics follow the reference while this branding is the user’s chosen adaptation. No political text or videos were copied. No government affiliation is claimed.

## Run and test

No npm install or build is needed. Serve this folder with `python -m http.server 8080 --bind 127.0.0.1` and open http://127.0.0.1:8080/ . Use HTTP for ES modules, rather than double-clicking HTML. The downloadable AI starter also includes `node serve.mjs` at ZIP root.

Run `node --test *.test.mjs` in this folder. Model, motion and combination tests cover plan validation/export/storage parsing and particle spring stability, pointer repulsion, click waves, long frames, animated procedural shapes, and Uzbekistan flag bands/crescent/12-star composition.

## Editable files

- `index.html`: Uzbek content, static cards, sections, labels and dialogs.
- `style.css`: Uzbekistan blue/white/green palette, Instrument Serif/Sans, responsive surfaces and states.
- `app.js`: animation controls, observers, dialogs, category filters, saved plan and text download.
- `motion.js`: persistent particle physics, text masks, pointer/tap interaction and scroll geometry.
- `motion.test.mjs`: particle behavior tests.
- `uzbekistan.svg`: 2:1 national flag and static canvas-failure fallback.
- `MOTION.md`: reference behavior and regression contract.
- `model.js`: known initiative IDs, content, steps, validation and text export. Keep HTML card IDs consistent when adapting.
- `fonts/`: local Instrument Sans + Serif WOFF2 and OFL licenses. `download_fonts.py` refreshes them from official Google Fonts; no runtime CDN.
- `QA-REPORT.md`: verification and limitations.

Canvas is decorative, fixed across the entire viewport and capped at 2× pixel ratio. It uses requestAnimationFrame with frame-time integration and stops in a hidden tab or when paused. It stays active beyond the hero because the same particles morph through the scroll chapters. A serif SI fallback remains if initialization fails. OS reduced motion produces static particles; the explicit pause control stops canvas and circular lettering. Text remains available independently of animation.

Plans use `ustoz.yuksal.plan.v1`. Only unique known initiative IDs are accepted. Storage failures show a warning; downloads remain available. No account, email collection or external form submission exists.

AI entry: https://azizbeksafarov.github.io/design/si/ . After library changes run `python design/build_handoff.py` then `python design/verify_handoff.py` from publishing repository root.

Site identity: `brand-icon.svg`, `favicon-32.png`, `apple-touch-icon.png` and legacy `mark.svg` are Yuksal’s blue/green asterisk, not the national flag. `uzbekistan.svg` belongs only to the decorative flag content. Saved plans synchronize through storage events and each edit re-reads the latest valid plan. Download anchors are connected to the document for browser compatibility.
