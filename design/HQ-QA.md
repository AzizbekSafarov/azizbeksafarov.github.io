# Headquarters and curation verification

Date: 2026-10-15. Scope: headquarters, curated gallery, AI entry, retirement pages and downloadable handoffs. This is not a certification that the demos satisfy an unknown competition ticket.

## Changes

- Independently reviewed all 11 existing previews and interaction sources. Featured Yuksal and Bloom; retired 01–09 with specific reasons in curation.json.
- Root headquarters connects curated demos, primary research, score plan, prompt builder and offline kit.
- Retired demo URLs show retirement explanations. Original HTML is preserved as text snapshots in archive/legacy, plus historical source archives; it is not displayed as an active demo.
- New AI start page generates a prompt from design, exact ticket and remaining time. Nothing is submitted or persisted.
- Shared colors/type, native mobile disclosure navigation, visible action styles, keyboard focus, reduced-motion CSS, local fonts and content-hashed stylesheet/script/previews.
- Every starter includes DESIGN-STANDARD.md. Kit contains only two featured starters plus collected competition text. Research remains in its separate repository.

## Actual checks

- Python handoff verifier: all 11 focused briefs, internal links, manifest hashes, ZIP contents, portable runtime assets and complete collected text passed. Two featured entries; nine retired entries excluded from kit.
- JavaScript syntax: assets/hq/site.js passed.
- Existing Yuksal tests: 9 passed. Existing Bloom model tests: 4 passed. Neither demo runtime was changed in this task.
- Browser: root, gallery, start, archive, standard, Yuksal handoff and Bloom handoff tested at 320, 390, 768, 1024 and 1280 px. Document scrollWidth minus clientWidth was 0 in all 35 cases. Code/table content scrolls inside its existing document panels.
- Rendered and inspected desktop, tablet and phone screenshots. Independent judge found mobile navigation, oversized copy text, ZIP affordance, orphan headline word and stale preview issues; all addressed and re-rendered.
- Mobile menu opens; Escape closes it and focuses summary. All three primary destinations remain available on inner pages.
- Prompt: switching to Bloom updates route, raw fallback, ZIP and brief. A multi-part Uzbek ticket including literal angle brackets and “75 daqiqa” was preserved in clipboard text. Empty defaults also render correctly.
- Root quick-copy retains newline after the central AI URL. UI shows success after clipboard write.
- Kit link downloaded kit.zip through the actual browser. Preview image DOM confirmed new hash URLs and full natural dimensions; clipped-logo stale assets were replaced.

## Limits

This is task-specific verification, not a full WCAG conformance or enterprise security audit. No field Core Web Vitals, real backend, external form delivery or unknown competition requirement is claimed. Clipboard-denied fallback is implemented but was not forced in this browser. Source research dates and uncertain competition rules remain labeled.
