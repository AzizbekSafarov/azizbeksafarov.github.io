# Orbita — independent sector identity

Kosmik observatoriya: Chakra Petch texnik display, IBM Plex Mono barcha xizmat/o‘qish matni. Siyoh-qora teal, fosfor-yashil signal, asbob oynasi burchaklari, katta orbital SVG va vertikal missiya registri. Chizma shartli, jonli telemetriya emas. Bezaksiz texnik ovoz; oq marketing hero yoki kartali dashboardga aylantirma.

Standalone HTML/CSS/JavaScript; no npm install. Preview: `python -m http.server 8080 --bind 127.0.0.1` here. Test: `node --test model.test.mjs`.

index.html: markup and IDs. style.css: local fonts and accessible mechanics. layout.css: this sector’s full art direction and responsive rules. app.js: existing flows, storage and focus. model.js: data/validation. Read CREDITS.md and bundled font licenses. Preserve model IDs and validated storage keys when changing layout.

Original library: identity-styles/*.css and identities_v4.py apply last after build_collection.py / build_refined.py. In the isolated competition ZIP, edit runtime files directly. After gallery changes regenerate previews, metadata and build_handoff.py.
