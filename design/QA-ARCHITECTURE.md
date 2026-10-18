# Architecture publication QA — 2026-10-18

Scope: new /arxitektura/ and /api/ documentation, shared navigation, root AI entry points. No Render/Supabase/OAuth/UptimeRobot account or service was provisioned by this release.

- Static verification: 35 generated pages, 584 local references, 50 scripts/styles, zero errors. Separate /ustoz/ repository and external source URLs are not asserted by this checker.
- Existing HQ model/combination suite: 60 tests passed.
- Browser: all 4 component buttons update detail, exactly one stays selected; all 4 scenario buttons render 4 steps and update ?oqim=; scenario survives reload.
- Mobile: architecture at 390 and 320 CSS pixels without document horizontal overflow; menu open and Escape close; mobile home navigation to architecture works.
- API table: 6 evidence rows. At 320px only the intentional table region scrolls horizontally; document does not. Also checked at 768px.
- Copy: public AI handoff text copied successfully. No AI, Telegram or private endpoint is called by the explanatory diagram script.
- Console checks after interactions: zero captured error/warn entries on both new pages.
- Content scan: 21 changed/new files checked for recognizable provider credentials, bot tokens and 16-digit card-number patterns; no matches. Public JSON schema includes only dated probe metadata. This scan is not an independent security certification.
- API timings are single connectivity samples on 2026-10-18, not a benchmark or current uptime feed. Billing tier is explicitly unverified. The Render keep-alive design is labeled as inference from official mechanisms, not our own tested deployment.

Sources/generator: design/build_architecture.py; shared frame in design/workspace_hq.py; styles/script in assets/hq/architecture.*. Rebuild with python design/build_hq.py.
