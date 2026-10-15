# Rebuilt templates verification

2026-10-15. Scope: Samar/Forma rebuilds, removal of seven old designs, four-starter HQ integration.

## Removed

KasbLab, Orbit, Pulseboard, Qadam, Lola, Spark and Open City: demo HTML, AI/source ZIP folders, aliases, previews, shared retired generators/runtime and archive snapshots removed from current tree. Archive page removed. Samar/Forma old code exports replaced, not bundled alongside rebuilds. Existing Yuksal and Bloom runtime code unchanged.

## Actual checks

- New model tests: 3 Samar + 3 Forma passed (invalid persisted data, ordered schedule/transfer gaps, overnight export, cart totals/removal/cap).
- Four-starter handoff verifier: source hashes, ZIP inventories, runtime asset references, readable briefs, links and complete collected competition text passed.
- Browser: seven affected public pages at 320/390/768/1024/1280: document scrollWidth minus clientWidth =0 in all35 cases. Additional populated320 overnight plan and cart drawer also measured0.
- Samar: three selections, start23:30, reorder, correct235-minute estimate and next-day clocks; remove/empty, disabled download, TXT download, reload persistence and second-tab synchronization passed. Detail Escape returns focus to opener. Mobile hash navigation closes menu.
- Forma: category shows correct product, detail -> add -> focus, 2chairs+1lamp=3,000,000; removeLamp=2,580,000; cap20 disables allAdd/increase paths; empty state, actual TXT download, reload and second-tab synchronization passed. Added item gets visible button feedback.
- Independent judge found and verified corrections for lamp crop, truthful cap feedback, mobile menu and narrow populated-plan controls. Final image capture checked for lazy-loading artifacts.
- Meaningful motion: image hover zoom, native-dialog entrance, side drawer entrance and plan row position continuity; reduced-motion path retained. No production personal data used in tests.

## Limits

No real booking, order, stock, payment or form delivery integration. Sample durations, prices and dimensions are labeled. No field Web Vitals or full accessibility/security certification claimed. Storage-denied fallback exists but was not forced in this browser.
