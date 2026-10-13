# Bloom · Material Design 3

An independent project workspace using Google's official Material Web components and Material Color Utilities. Its reference is the Material Design 3 design system. Updated 2026-10-13.

Competition AI entry: [Bloom starter](https://azizbeksafarov.github.io/design/bloom/). It provides a short context brief, readable source, downloadable editable project and continuation files. After publishing-source updates, run `python design/build_handoff.py` and `python design/verify_handoff.py` from repository root so these exports stay current.

## Implementation

- `@material/web`: filled/tonal/outlined/text buttons, FAB, icon buttons, chip set and filter chips, outlined text fields and selects, checkboxes, radios, linear progress, dialogs and ripples.
- `@material/material-color-utilities`: a Tonal Spot scheme generated from four selectable source colors. Material color roles, including surface levels and their foregrounds, are shared by custom surfaces and official components. Light/dark schemes and source color persist.
- Locally hosted official Material Symbols Rounded WOFF2 with a variable `FILL` axis; Google Sans Flex for brand typography and Roboto for plain text. M3 type roles guide the hierarchy.
- Custom 80 px desktop rail, 80 px mobile navigation with safe-area spacing, cards and segmented view controls use shared M3 roles. Cards show a permanent open arrow; the selected view shows a check.
- A neutral hero keeps the primary action distinct. Palette choices have radio controls and explicit selection borders; passive labeled color samples explain the resulting roles.
- Motion for React handles navigation selection and card filtering/reflow. Material Web supplies control state layers, ripples, checkbox/progress transitions and native dialog animation/focus behavior.
- Custom motion follows reduced-motion preferences; Material dialogs use their quick mode when reduced motion is requested.

## Run

```powershell
npm ci
npm run dev
```

After edits, run `npm run build`; `npm run preview` serves the production build. Run `npm run test` for four model checks, including Uzbek apostrophe normalization. All runtime fonts, icons, scripts and CSS are local; there is no runtime CDN dependency. `dist/` supports ordinary static hosting and subdirectories.

Deployment target: [GitHub Pages gallery variant 10](https://azizbeksafarov.github.io/design/material-expressive/dist/). Publish the rebuilt `dist/` and updated source documentation through the homepage repository. See `QA-REPORT.md` for the current verified scope.

## Working flows

Create projects, choose their category, combine search and category filters, switch between cards and rows, save projects, toggle checklist steps, sort, and change the source color or light/dark preference. Repeated clicks keep the active category selected; successful creation clears the next form and field edits clear its validation error. Saving uses the same bookmark symbol throughout, with focus recovery when filtering removes a card.

Projects persist in this browser. Invalid stored data falls back to valid sample projects; storage failures display a warning. Profiles and starter projects are illustrative. There is no backend or account sync.

## References and licenses

- [Material Design 3](https://m3.material.io/): design system reference.
- [Material Web](https://material-web.dev/): official M3 web component implementation. The project currently documents maintenance mode; it is not a claim to include every newer M3 Expressive component.
- [Color theming](https://material-web.dev/theming/color/) and [Typography](https://material-web.dev/theming/typography/): role tokens.
- [Material Color Utilities](https://github.com/material-foundation/material-color-utilities): source color schemes.
- [Material Symbols](https://developers.google.com/fonts/docs/material_symbols): official icon family.
- [Motion layout animations](https://motion.dev/docs/react-layout-animations): custom card reflow.

Font and component licenses are included under `public/` and `src/fonts/`. Bloom is independently branded and is not an official Google product. `template.json` registers it as variant 10 in the parent gallery.
