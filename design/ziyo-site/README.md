# Ziyo — independent sector identity

Ta’lim ustaxonasi. Bree Serif sarlavha + Nunito Sans matn + IBM Plex Mono kod. Shaftoli qog‘oz, oq doska, olcha mashq maydoni. Dastur yuqorida, dars va interaktiv misol chapda, test o‘ngda. Yumshoq asimmetrik burchaklar; texnik terminal yoki gazeta bilan bir xil qobiq qilma.

Standalone HTML/CSS/JavaScript; no npm install. Preview: `python -m http.server 8080 --bind 127.0.0.1` here. Test: `node --test model.test.mjs`.

index.html: markup and IDs. style.css: local fonts and accessible mechanics. layout.css: this sector’s full art direction and responsive rules. app.js: existing flows, storage and focus. model.js: data/validation. identity.js: interactive lesson illustration. Read CREDITS.md and bundled font licenses. Preserve model IDs and validated storage keys when changing layout.

Original library: identity-styles/*.css and identities_v4.py apply last after build_collection.py / build_refined.py. In the isolated competition ZIP, edit runtime files directly. After gallery changes regenerate previews, metadata and build_handoff.py.
