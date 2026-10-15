# Azizbek Safarov — ochiq ish maydoni

Public headquarters: https://azizbeksafarov.github.io/

- `/design/`: curated gallery — Yuksal and Bloom.
- `/design/start/`: task/time input and copyable prompt for a new AI; no submission/storage.
- `/ai.md`: central context and continuation instructions.
- `/design/si/`, `/design/bloom/`: short briefs, real code, ZIP and integrity manifests.
- `/design/kit.zip`: two selected starters and complete collected competition text.
- `/design/standart/`: research-backed quality criteria.
- `/design/archive/`: reasons for retiring 01–09; old demo routes show retirement pages.
- `/ustoz/`: separate research repository’s Pages site. These documents are preserved.

## Edit and regenerate

`assets/hq/site.css` and `site.js` implement the shared headquarters. `design/build_hq.py` renders root, gallery, AI start, archive and standards. `design/curation.json` is the source of featured/retired decisions. `design/templates.json` retains historical metadata.

```text
python design/build_handoff.py
python design/verify_handoff.py
node --check assets/hq/site.js
python -m http.server 8770 --bind 127.0.0.1
```

The handoff builder calls the headquarters builder. On an initial migration run `python design/build_hq.py` first to preserve original HTML as `.html.txt` source snapshots in `design/archive/legacy/`. Do not rerun the retired `build_templates.py` generator to edit current pages; legacy HTML belongs in the archive. Source packages read preserved HTML, not retirement pages.

Bloom source is `design/material-expressive/src/`; its AGENTS.md applies. Build/test before regenerating handoffs. Yuksal source is `design/si-site/`; preserve white main background, brand favicon and Uzbekistan content flag.

The curated kit excludes retired source packages. Their separate historical packages are marked and recoverable. No credentials or private account configuration belong in this public repository.

## Publication

GitHub Pages publishes `main` at repository root. `.nojekyll` is intentional. After pushing, verify Pages success and the public UI; a successful push alone is not a deployment check.
