# Nashr — independent sector identity

Bosma tahririyat: Newsreader masthead va sarlavha; PT Serif o‘qish; Archivo ixcham navigatsiya. Sarg‘aygan gazeta qog‘ozi, qora siyoh, kichik qizil tahririy belgi, double-rule, oq-qora fotografiya va zich ustunlar. Chetdan chetga marketing hero yoki ilova dashboardi emas. Original maqolalar namuna.

Standalone HTML/CSS/JavaScript; no npm install. Preview: `python -m http.server 8080 --bind 127.0.0.1` here. Test: `node --test *.test.mjs`.

index.html: markup and IDs. style.css: local fonts and accessible mechanics. layout.css: this sector’s full art direction and responsive rules. app.js: existing flows, storage and focus. model.js: data/validation. Read CREDITS.md and bundled font licenses. Preserve model IDs and validated storage keys when changing layout.

Original library: identity-styles/*.css and identities_v4.py apply last after build_collection.py / build_refined.py. In the isolated competition ZIP, edit runtime files directly. After gallery changes regenerate previews, metadata and build_handoff.py.
