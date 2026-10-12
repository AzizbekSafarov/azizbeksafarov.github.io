# Bloom · Material Design 3

An independent, functioning project workspace using Google's official Material Web components and Material Color Utilities. The requested reference is the Material Design 3 design system, rather than a clone of Google Drive or the material.io website.

## Implementation

- `@material/web`: filled/tonal/outlined/text buttons, FAB, icon buttons, filter chips, outlined text fields, checkboxes, linear progress, dialogs and ripples.
- `@material/material-color-utilities`: a Tonal Spot scheme generated from four selectable source colors. Material color roles, including surface levels and their foregrounds, are shared by custom surfaces and official components. Light/dark schemes and source color persist.
- Locally hosted Material Symbols Rounded; Google Sans Flex for brand typography and Roboto for plain text. Standard M3 display, headline, title, body and label sizes guide the hierarchy.
- Custom navigation rail and cards follow M3 indicator, shape and surface roles; these are not claimed to be official web components.
- Motion for React handles navigation selection and card filtering/reflow. Material Web supplies control state layers, ripples, checkbox/progress transitions and native dialog animation/focus behavior.
- Custom motion follows reduced-motion preferences; Material dialogs use their quick mode when reduced motion is requested.

## Run

```powershell
npm ci
npm run dev
```

The current local preview serves the production `dist/` directory at http://127.0.0.1:8767/ using a Python HTTP server. After edits, run `npm run build`. Run `npm run test` for model checks. All runtime fonts, icons, scripts and CSS are local; there is no runtime CDN dependency. `dist/` supports ordinary static hosting and subdirectories.

## Working flows

Create projects, choose their category, combine search and category filters, switch between cards and rows, save projects, toggle checklist steps, sort, and change the source color or light/dark preference. Projects persist in this browser. Invalid stored data falls back to valid sample projects; storage failures display a warning. Profiles and starter projects are illustrative. There is no backend or account sync.

## References and licenses

- [Material Design 3](https://m3.material.io/): design system reference.
- [Material Web](https://material-web.dev/): official M3 web component implementation. The project currently documents maintenance mode; it is not a claim to include every newer M3 Expressive component.
- [Color theming](https://material-web.dev/theming/color/) and [Typography](https://material-web.dev/theming/typography/): role tokens.
- [Material Color Utilities](https://github.com/material-foundation/material-color-utilities): source color schemes.
- [Material Symbols](https://developers.google.com/fonts/docs/material_symbols): official icon family.
- [Motion layout animations](https://motion.dev/docs/react-layout-animations): custom card reflow.

Font and component licenses are included under `public/` and `src/fonts/`. Bloom is independently branded and is not an official Google product. `template.json` registers it as variant 10 in the parent local gallery.
