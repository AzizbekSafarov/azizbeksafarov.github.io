# Bloom M3 verification — 2026-10-11

Production build and all three model tests pass. The latest implementation uses registered Material Web custom elements with their shadow roots; local browser verification confirmed this, rather than relying on visual approximation.

## Functional verification

- Filled buttons open the official Material dialog. Its title field receives autofocus.
- Blank submission shows the outlined field error state. Valid title, description and category create a project. Created projects survive a rebuild/reload.
- Material checkboxes update the checklist count and completed feedback. The AI sample's last test checkbox was restored to unchecked. Existing user changes to the preparation project were preserved.
- Escape closes the native Material dialog. Navigation and subsequent controls work after dismissal.
- Material filter chips combine with search: technology + AI returns one project. A no-match query shows the empty state and its reset action works.
- List/card controls change layouts.
- Switching the source color from purple to blue changes primary from #65558f to #435e91 and surface to #f9f9ff. Purple was restored. Theme preferences persist.
- A 320 px form and 390 px dark workspace were visually inspected. The narrow form scrolls its content and wraps actions.
- Official state animations/ripples and Motion card/navigation transitions remain enabled; reduced-motion custom behavior is implemented without changing the operating-system preference.

## Responsive verification

| Requested width | Content width | Horizontal scroll width | Grid columns |
|---|---:|---:|---:|
| 320 | 305 | 305 | 1 |
| 390 | 375 | 375 | 1 |
| 768 | 753 | 753 | 2 |
| 1024 | 1009 | 1009 | 3 |
| 1440 | 1425 | 1425 | 3 |

The browser reserves 15 px for the scrollbar. Screenshots are local JPEG captures. Material Web host dialogs have display: contents; their visible native dialog is inside the shadow root, so a zero host box is not a layout failure.

## Scope

The reference is the M3 design system. Navigation rail, cards and hero surfaces are custom layouts using shared M3 roles; controls listed in README are official Material Web components. No claim is made to reproduce Google Drive, the material.io website, or all recent M3 Expressive additions. Storage is browser-local. Build reports a large-bundle advisory, but compilation succeeds; the main script is about 178 kB gzip. This revision remains local.

Final browser checks: no console error entries; all seven project cover heights are 156 px on desktop; 320 px and 1440 px content widths match their horizontal scroll widths after the final typography and header changes.
