# Samar — independent sector identity

Sayohat atlasi: Lora kitob serifi + Source Sans 3 xizmat matni. Siyoh-ko‘k, och osmon, qum xarita, bronza belgi. Buklama xarita markazda, chapda manzillar, o‘ngda reja; mobil xarita → manzillar → reja. Yumaloq raqamli xarita pinlari va teshilgan chipta singari reja chiziqlari. Chizma shartli; haqiqiy navigatsiya yoki bron emas.

Standalone HTML/CSS/JavaScript; no npm install. Preview: `python -m http.server 8080 --bind 127.0.0.1` here. Test: `node --test model.test.mjs`.

index.html: markup and IDs. style.css: local fonts and accessible mechanics. layout.css: this sector’s full art direction and responsive rules. app.js: existing flows, storage and focus. model.js: data/validation. Read CREDITS.md and bundled font licenses. Preserve model IDs and validated storage keys when changing layout.

Original library: identity-styles/*.css and identities_v4.py apply last after build_collection.py / build_refined.py. In the isolated competition ZIP, edit runtime files directly. After gallery changes regenerate previews, metadata and build_handoff.py.
