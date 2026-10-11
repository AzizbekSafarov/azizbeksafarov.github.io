# Qadam / Material refinement — 2026-10-11

Selected direction: Qadam, the independent Google Material-inspired template.

## Design changes

- Google Sans Flex hierarchy with 46px desktop greeting, expressive hero title, 16px search and 14–15px body text.
- Blue learning panel with geometric illustration; green progress panel with coordinated dark-mode colors.
- Sticky desktop navigation rail, balanced content width, consistent card radii, 44–52px controls, tonal course actions, matching focus/hover/pressed states.
- Tablet progress panel uses two columns; narrow mobile view stacks it. Search and course grid adapt to available width.
- Dark mode now changes the sun/moon icon as well as colors. Reduced-motion preferences suppress transitions.

## Interaction changes

- Search has a clear button, `/` shortcut, Escape to clear, Enter to reach results, and searches course titles/descriptions rather than button text.
- Lesson dialog now has three task checkboxes. Completion is available only after all three tasks are checked.
- Partial task progress is saved locally and restored when the lesson opens again. Completed lessons cannot be counted twice.
- Reset clears both lesson completion and partial steps. The hero continues to the next unfinished lesson.
- Dialog focus returns to its opener.

## Validation

`node --check` passed for the updated scripts. `node verify-lesson-model.cjs` passed malformed-storage, partial-progress, completion gating, duplicate-completion, serialization, and reset checks. Local assets, anchors, ARIA references, unique IDs, CSS brace balance, and script order were checked.

The initial local browser inspection was blocked by the browser tool's URL security policy. After the user authorized publication, the live GitHub Pages revision received a rendered check on 2026-10-11 at 1440px desktop and 390px mobile widths. Search, saved-course filtering, dark mode, partial-step persistence after reload, completion gating, progress updates, and reset were verified through the interface. The mobile page had no horizontal document overflow and the browser reported no console errors. `previews/06.png` now shows the refined published design.

Sources: `src/material.css`, `src/extra.js`, `src/lesson-model.js`, `extra_templates.py`. Regenerate with `python build_templates.py`.

All nine templates are published at https://azizbeksafarov.github.io/design/. Forms and lessons remain browser-local demonstrations without a backend.
