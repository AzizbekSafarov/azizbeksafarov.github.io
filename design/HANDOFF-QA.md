# Portable AI handoff checks — 2026-10-13

## Packaging and integrity

`python design/verify_handoff.py` passes for all ten templates: unique short routes, compact briefs below 12 KB, local page/resource links, SHA-256 archive and file checks, ZIP integrity, readable source-file equality and required continuation documents. Packaged HTML/CSS font/script references resolve inside their standalone runtime. The all-design kit contains the exact individual archives and the collected competition text snapshot.

The full competition research snapshot is dated 2026-10-09; it is not a current dashboard read. Signed/draft PDF sources are linked with their status; large original scans are not duplicated in the offline kit. The main six criteria are distinguished from the proposed detailed criteria, and no practical time limit is invented.

## Clean-folder verification

- Bloom and Qadam archives were extracted to new folders outside the publishing checkout.
- Bloom's four model tests passed from the extracted source without node_modules.
- Qadam lesson-state checks passed: invalid storage, resume, completion gating, duplicate completion, serialization and reset. Its shared/extra/model JS syntax checks passed.
- `node serve.mjs` in the extracted Bloom folder served the prebuilt site on loopback. The browser rendered it, its Material palette dialog opened, and no console error entries were recorded. npm installation was not used for this preview.

## Handoff page verification

- Ticket text and remaining time update the generated prompt correctly. The copy button reported success in the browser.
- A 320 px viewport had content/scroll widths both 305 px; a 1440 px viewport had both 1425 px. The 15 px difference is the browser scrollbar.
- The full AI brief is static HTML; the read-only prompt has a no-JavaScript copy fallback. It does not depend on the prompt builder to expose context.
- The copied test topic was cleared and the reusable placeholder prompt restored. Page console had no error entries.

## Scope

These checks validate the starter packaging, context delivery, new prompt builder and selected extracted-runtime behavior. They do not prove every future adaptation, every AI tool, or all original template flows bug-free. Original design QA remains baseline evidence. The organizer's actual ticket and current rules take priority.
