# Bloom M3 verification — 2026-10-13

Production build and all four model tests pass. Tests cover persisted data validation, combined filters and completion, project creation, and Uzbek keyboard/typographic apostrophe equivalence. The main script is 194.53 kB gzip; Vite reports a large-bundle advisory, with successful compilation. The final browser check returned no console error entries.

## Functional and interaction checks

- Registered Material Web controls provide buttons, dialogs, checkboxes, chip set, outlined selects and palette radios. Local official Material Symbols WOFF2 supports variable `FILL` for selected icons.
- Clicking an already selected category keeps it selected. Search and category filters combine; sorting and project category use official selects.
- Invalid creation shows a field error; editing clears the error. Successful creation saves the project and clears the next form.
- Cards and details use a consistent bookmark icon. When a filtered card disappears, focus falls back to the project heading; dialog dismissal restores the opener where available.
- Palette label clicks, ArrowRight and Space select a single color and update the theme. Choices have explicit radio and border states, and passive labeled samples show color roles.
- Neutral hero surfaces distinguish the primary button from its panel. Cards have a permanent open arrow; segmented view controls show the active choice with a check.

## Responsive and theme checks

Browser checks at 320, 768, 1024 and 1440 px found no horizontal overflow. At 320 px, every palette control is reachable. Desktop navigation uses an 80 px rail; mobile navigation uses an 80 px bar plus safe-area spacing.

The latest dark terracotta palette was visually verified at 320 px: all four choices, explanatory samples and the completion button are visible, labels align left, and text and controls remain distinguishable. The earlier 2026-10-11 verification also covered a 390 px dark workspace.

## Scope and deployment

Custom navigation, cards, hero and segmented controls use shared M3 roles; the controls listed in README use official Material Web components. This is an independent M3 implementation with browser-local storage. It does not claim complete M3 Expressive coverage. Reduced-motion behavior remains implemented for custom motion and Material dialogs.

Deployment target: `https://azizbeksafarov.github.io/design/material-expressive/dist/`, registered as gallery variant 10. This report records local verification before publishing the current revision; it does not confirm a completed deployment.
