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

## Validation and limitation

`node --check` passed for the updated scripts. `node verify-lesson-model.cjs` passed malformed-storage, partial-progress, completion gating, duplicate-completion, serialization, and reset checks. Local assets, anchors, ARIA references, unique IDs, CSS brace balance, and script order were checked.

Browser inspection was blocked by the browser tool's URL security policy in this turn. The block was not bypassed. This revision has **not** received a new rendered desktop/mobile check; the 2026-10-10 screenshots and layout audit describe the earlier revision. Open `06-material.html` from the running local gallery to review the current design.

Sources: `src/material.css`, `src/extra.js`, `src/lesson-model.js`, `extra_templates.py`. Regenerate with `python build_templates.py`.

Forms and lessons remain local demonstrations; no publication or backend deployment was performed.
