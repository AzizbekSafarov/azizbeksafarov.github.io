# Yuksal · SI

Independent Uzbek initiative portal inspired by https://www.si.gov/, inspected on 2026-10-15. Original Uzbek content, canvas/CSS artwork and interactions. No official seals, political text, videos or reference-site implementation were copied. No government affiliation is claimed.

## Run and test

No npm install or build is needed. Serve this folder with `python -m http.server 8080 --bind 127.0.0.1` and open http://127.0.0.1:8080/ . Use HTTP for ES modules, rather than double-clicking HTML. The downloadable AI starter also includes `node serve.mjs` at ZIP root.

Run `node model.test.mjs` in this folder. Three tests cover plan sanitization, reversible toggling and exported content/order.

## Editable files

- `index.html`: Uzbek content, static cards, sections, labels and dialogs.
- `style.css`: navy/cream/red palette, Instrument Serif/Sans, responsive surfaces and states.
- `app.js`: canvas, animation/reduced motion, observers, dialogs, category filters, saved plan and text download.
- `model.js`: known initiative IDs, content, steps, validation and text export. Keep HTML card IDs consistent when adapting.
- `fonts/`: local Instrument Sans + Serif WOFF2 and OFL licenses. `download_fonts.py` refreshes them from official Google Fonts; no runtime CDN.
- `QA-REPORT.md`: verification and limitations.

Canvas is decorative, capped at 2× pixel ratio and roughly 30 FPS, and stops offscreen or in a hidden tab. A serif SI fallback remains if initialization fails. OS reduced motion produces static particles; the explicit pause control stops canvas and circular lettering. Text remains available independently of animation.

Plans use `ustoz.yuksal.plan.v1`. Only unique known initiative IDs are accepted. Storage failures show a warning; downloads remain available. No account, email collection or external form submission exists.

AI entry: https://azizbeksafarov.github.io/design/si/ . After library changes run `python design/build_handoff.py` then `python design/verify_handoff.py` from publishing repository root.
