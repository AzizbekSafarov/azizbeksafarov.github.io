# AI workflow publication QA — 2026-10-18

MAQOM: sanali baseline dalili. Joriy qayta tekshiruv yoki yangi vazifa bajarilganining dalili emas. Eng yangi to‘liq audit: https://azizbeksafarov.github.io/design/AUDIT-20261018.md .

Scope: public guidance and handoff templates, not deployment of the competition application.

- One generator supplies the risk scenarios (currently 19; no fixed target count) to HTML and Markdown. Each is explicitly hypothetical, with symptom, investigation, possible fix and verification.
- Current decisions, dated evidence, plans, unknowns and historical alternatives are distinguished. The status JSON is a snapshot, not live monitoring.
- Browser: all 19 disclosures opened and closed; Enter opened a disclosure; the copy button reported success.
- Responsive checks: default desktop, 320px and 390px. No document horizontal overflow at either mobile width. Mobile menu opened and Escape closed it. Visible keyboard focus confirmed.
- Captured page console: no warning/error entries after interactions.
- Static link/resource validation covers the new guide and downloadable templates; separate /ustoz/ project and external source URLs are outside that checker.
- No competition infrastructure, provider API or private vault operation was performed for this documentation release. Application integration tests remain NOT RUN.

Source: design/build_workflow.py. Rebuild: python design/build_hq.py. Validate: python design/verify_site.py.

- User clarification incorporated: confirmed issues, potential risks, procedures and conditional recommendations have separate definitions. Eight practical guidance entries are tagged by kind. No unverified historical incident is imported as a current product defect.
