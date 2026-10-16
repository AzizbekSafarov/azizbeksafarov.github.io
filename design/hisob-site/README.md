# Hisob — independent sector identity

Tahlil ish stoli: Public Sans UI + IBM Plex Sans Condensed tabular raqamlar. Sovuq kulrang, oq ish sirtlari, grafit navigatsiya va amber analitika. Ko‘rsatkichlar bitta ajratilgan bandda; chart va table aniq xizmat iyerarxiyasida. Display-hero yo‘q. CSV aynan filtrlangan qatorlarni oladi, barcha sonlar namuna.

Standalone HTML/CSS/JavaScript; no npm install. Preview: `python -m http.server 8080 --bind 127.0.0.1` here. Test: `node --test *.test.mjs`.

index.html: markup and IDs. style.css: local fonts and accessible mechanics. layout.css: this sector’s full art direction and responsive rules. app.js: existing flows, storage and focus. model.js: data/validation. Read CREDITS.md and bundled font licenses. Preserve model IDs and validated storage keys when changing layout.

Original library: identity-styles/*.css and identities_v4.py apply last after build_collection.py / build_refined.py. In the isolated competition ZIP, edit runtime files directly. After gallery changes regenerate previews, metadata and build_handoff.py.
