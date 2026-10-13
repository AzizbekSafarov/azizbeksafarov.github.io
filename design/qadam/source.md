# Qadam · Material — editable source snapshot

Source fingerprint: `70f11a47cd22b4fbe71d169edf9bee2cd9869bed6b9eb09937bd3b4a6ac56968`. Binary fonts, licenses, lockfile and complete project are in source.zip. Change original source, then rebuild; this export is regenerated from those files.

## site/06-material.html

```html
<!doctype html><html lang="uz"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>06 · Qadam · Material — dizayn namunasi</title><link rel="stylesheet" href="shared.css"><link rel="stylesheet" href="assets/fonts/google-sans-flex.css"><style>
.pressable{position:relative;overflow:hidden;min-height:48px;transition:transform 160ms ease-out,box-shadow 160ms ease-out}.pressable:after{content:"";position:absolute;inset:0;border-radius:inherit;background:currentColor;opacity:0;pointer-events:none}.pressable:hover:after{opacity:.06}.pressable:active:after{opacity:.12}.pressable:active{transform:scale(.97);box-shadow:inset 0 2px 5px #0002}.pressable:disabled{opacity:.55}.pressable:focus-visible{outline:3px solid var(--accent);outline-offset:4px}.pressable:hover{box-shadow:0 3px 10px #0002}.icon{width:22px;height:22px;flex-shrink:0;stroke:currentColor;stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round}.round-button{display:grid;place-items:center;min-width:48px;min-height:48px;border-radius:50%;background:var(--wash);color:var(--ink)}.segmented{display:flex;gap:5px;flex-wrap:wrap}.segmented button{min-height:44px;padding:10px 20px;border-radius:24px;background:var(--wash);color:var(--ink);font-size:13px}.segmented button.active{background:var(--accent);color:var(--on-accent,#fff)}.palette-controls{display:flex;align-items:center;gap:10px}.palette-controls button{width:44px;height:44px;min-height:44px;min-width:44px;padding:0;border-radius:50%;border:3px solid transparent;background:var(--swatch)}.palette-controls button[aria-pressed=true]{outline:2px solid var(--ink);outline-offset:3px}.extra-footer{padding:28px 0;font-size:12px;color:var(--muted)}
@media(prefers-reduced-motion:reduce){.pressable{transition:none}}

    :root{--bg:#f5f7fc;--surface:#fff;--ink:#202124;--muted:#596575;--accent:#0b57d0;--on-accent:#fff;--wash:#e8eefb;--line:#d6dce7;--radius:28px;--rail:#edf1fa;--hero:#dfeaff;--hero-ink:#123567;--blue-card:#d7e7ff;--green-card:#d9efdf;--peach-card:#ffe3d5}
    :root[data-theme=dark]{--bg:#141820;--surface:#202630;--ink:#e5e9f0;--muted:#a9b4c5;--accent:#a8c7fa;--on-accent:#062e6f;--wash:#303b50;--line:#465164;--rail:#1e2532;--hero:#21375b;--hero-ink:#d3e3ff;--blue-card:#253c61;--green-card:#254536;--peach-card:#51372d;color-scheme:dark}
    body{font-family:'Google Sans Flex',system-ui,sans-serif}.material-layout{display:grid;grid-template-columns:96px minmax(0,1fr);min-height:100dvh}.m-rail{background:var(--rail);padding:24px 10px;display:flex;align-items:center;flex-direction:column;gap:23px}.q-mark{display:grid;place-items:center;width:48px;height:48px;background:var(--accent);color:var(--on-accent);border-radius:18px 18px 18px 5px;font-size:29px;font-weight:700}.rail-link{display:flex;flex-direction:column;align-items:center;gap:5px;font-size:10px;width:75px;color:var(--muted)}.rail-icon{padding:7px 20px;border-radius:20px}.rail-link.current .rail-icon{background:#c2d7ff;color:#163563}.m-workspace{padding:24px 42px 30px;max-width:1500px;width:100%;margin:auto}.m-top{display:flex;align-items:center;gap:24px;justify-content:space-between}.m-brand{font-size:22px;font-weight:600;letter-spacing:-.6px}.m-search{display:flex;align-items:center;gap:13px;background:var(--wash);border-radius:32px;padding:0 20px;min-height:54px;max-width:530px;flex:1}.m-search input{border:0;background:none;color:var(--ink);outline:none;width:100%;min-width:0;font-size:14px}.m-search:focus-within{outline:2px solid var(--accent)}.m-top-actions{display:flex;align-items:center;gap:10px}.m-avatar{background:#c4e7cd;color:#234d32;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-size:13px;font-weight:600}.m-heading{margin:40px 0 25px;display:flex;justify-content:space-between;gap:20px;align-items:end}.m-heading h1{font-size:42px;font-weight:500;letter-spacing:-1.4px;margin:0 0 8px}.m-heading p{font-size:14px;color:var(--muted);margin:0}.m-heading .tag{background:var(--wash);color:var(--ink);border-radius:20px;font-weight:500;padding:8px 14px}.m-hero{display:grid;grid-template-columns:1.5fr 1fr;gap:16px}.continue-card{background:var(--hero);color:var(--hero-ink);border-radius:32px;padding:33px;position:relative;overflow:hidden;min-height:295px}.continue-card h2{font-size:34px;font-weight:500;letter-spacing:-1px;margin:17px 0 14px;max-width:365px}.continue-card p{font-size:14px;max-width:315px;color:var(--hero-ink)}.continue-card .btn{border-radius:30px;font-weight:500;position:relative;z-index:1}.m-small-label{font-size:11px;font-weight:600;letter-spacing:.3px}.continue-deco{position:absolute;width:170px;height:170px;right:25px;top:40px;background:var(--accent);opacity:.17;border-radius:45px;transform:rotate(-18deg)}.continue-deco:before{content:"";position:absolute;width:104px;height:104px;left:33px;top:33px;border-radius:50%;background:var(--hero)}.week-card{background:#f4edb6;color:#514817;border-radius:32px;padding:30px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}.week-card h2{font-size:27px;font-weight:500;margin:16px 0;max-width:210px}.week-card p{font-size:13px;max-width:235px}.week-card .spark-shape{width:65px;height:65px;position:absolute;right:26px;top:27px;background:#dbbe46;clip-path:polygon(50% 0,62% 28%,88% 12%,72% 39%,100% 50%,72% 62%,88% 88%,61% 73%,50% 100%,38% 72%,12% 88%,28% 62%,0 50%,28% 38%,12% 12%,39% 28%)}.week-card .progress-track{background:#e1d898;border-radius:20px;height:8px;margin:15px 0 8px;overflow:hidden}.week-card .progress-track span{background:#766824;display:block;width:0%;height:100%;border-radius:20px}.m-courses{padding:36px 0 0}.m-courses h2{font-size:24px;font-weight:500;margin:0}.m-courses .row{margin-bottom:22px}.saved-toggle{background:var(--wash);color:var(--ink);border-radius:24px;display:flex;align-items:center;gap:9px;min-height:44px;padding:9px 16px;font-size:12px}.saved-toggle.selected{background:var(--accent);color:var(--on-accent)}.m-courses .segmented{margin-bottom:22px}.m-course-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.m-course{border-radius:26px;background:var(--surface);overflow:hidden;border:1px solid var(--line)}.m-course-visual{min-height:150px;padding:22px;display:flex;align-items:center;justify-content:center;position:relative;background:var(--blue-card)}.m-course:nth-child(2) .m-course-visual{background:var(--green-card)}.m-course:nth-child(3) .m-course-visual{background:var(--peach-card)}.m-course-art{font-size:53px;font-weight:600;color:#2457a3}.m-course:nth-child(2) .m-course-art{color:#2f6d46}.m-course:nth-child(3) .m-course-art{color:#a55231}.bookmark{position:absolute;right:14px;top:14px;background:var(--surface);color:var(--ink);border-radius:50%;min-width:40px;min-height:40px;display:grid;place-items:center}.bookmark.is-saved{background:var(--accent);color:var(--on-accent)}.bookmark.is-saved svg{fill:currentColor}.m-course-copy{padding:23px}.m-course-copy h3{font-size:22px;font-weight:500;margin:12px 0}.m-course-copy p{font-size:13px;color:var(--muted);min-height:42px}.m-course-copy .tag{border-radius:20px;padding:5px 11px;font-weight:500}.m-course-meta{display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:18px}.m-course .btn{border-radius:24px;width:100%;font-weight:500}.m-empty{padding:30px;border:1px dashed var(--line);border-radius:24px;font-size:14px;color:var(--muted)}.m-bottom{margin-top:28px;background:var(--wash);padding:20px 24px;border-radius:24px;display:flex;align-items:center;gap:16px;font-size:13px}.m-bottom .icon{color:var(--accent)}.m-bottom p{margin:0}.m-footer{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}dialog{font-family:'Google Sans Flex',system-ui,sans-serif;border-radius:28px}.lesson-task{padding:20px;background:var(--wash);border-radius:20px;font-size:14px;margin-top:20px}.lesson-task ol{padding-left:20px;margin-bottom:0}.lesson-task li{margin:8px 0}
    @media(max-width:1100px){.m-workspace{padding:24px}.continue-deco{width:100px;height:100px;right:15px;top:25px}.continue-deco:before{width:60px;height:60px;left:20px;top:20px}.continue-card h2{font-size:29px}.m-course-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.m-hero{grid-template-columns:1.3fr 1fr}.m-search{max-width:350px}.m-brand{display:none}}
    @media(max-width:700px){.material-layout{grid-template-columns:1fr}.m-rail{flex-direction:row;padding:12px 18px;gap:8px;justify-content:space-between}.q-mark{width:40px;height:40px;font-size:25px;border-radius:15px 15px 15px 4px}.rail-link{width:66px;font-size:9px}.rail-icon{padding:5px 15px}.m-workspace{padding:18px}.m-top{gap:12px}.m-search{padding:0 14px;min-height:50px}.m-top-actions{gap:6px}.m-avatar{display:none}.m-heading{margin:28px 0 22px;align-items:start;flex-direction:column;gap:14px}.m-heading h1{font-size:34px}.m-hero{grid-template-columns:1fr}.continue-card{padding:26px;min-height:260px}.week-card{padding:26px;min-height:205px}.week-card h2{max-width:250px}.m-course-grid{grid-template-columns:1fr}.m-courses>.row{align-items:start;gap:15px;flex-direction:column}.segmented button{padding:10px 16px}.m-bottom{align-items:start;padding:20px}.m-footer{font-size:10px}}
    :root[data-theme=dark] .m-course-art{color:#a8c7fa}:root[data-theme=dark] .m-course:nth-child(2) .m-course-art{color:#b0e6c5}:root[data-theme=dark] .m-course:nth-child(3) .m-course-art{color:#ffcdb5}.bookmark{min-width:48px;min-height:48px;width:48px;height:48px}.m-search input::placeholder{color:var(--muted)}.reset-progress{font-size:12px;background:transparent;color:#514817;text-decoration:underline;text-underline-offset:3px;padding:8px 0;min-height:44px}.m-workspace{min-width:0}.m-hero{grid-template-columns:minmax(0,1.5fr) minmax(0,1fr)}.m-course{display:flex;flex-direction:column}.m-course-copy{display:flex;flex-direction:column;flex:1}.m-course-copy .tag{align-self:start}.m-course-copy .btn{margin-top:auto}.m-course-meta{font-size:12px}.rail-link{font-size:12px;min-height:52px}.m-footer{font-size:12px}.continue-deco{pointer-events:none;z-index:0;opacity:.09}.continue-card>*:not(.continue-deco){position:relative;z-index:1}.week-card .spark-shape{width:44px;height:44px;top:22px;right:20px}.m-small-label{padding-right:30px}.m-heading h1{font-size:clamp(30px,4vw,42px)}.completion-tag{font-size:12px;color:var(--accent);margin-top:8px}.m-empty p{margin-bottom:18px}.m-course-copy>p{min-height:0}.m-course-meta{margin-top:auto}.m-search input{font-size:16px}.rail-link.current{color:var(--ink)}@media(max-width:1100px){.m-hero{grid-template-columns:minmax(0,1.3fr) minmax(0,1fr)}}@media(min-width:701px) and (max-width:900px){.m-hero{grid-template-columns:1fr}.m-heading{align-items:start;flex-direction:column}}@media(max-width:700px){.m-hero{grid-template-columns:minmax(0,1fr)}.rail-link{width:66px;font-size:11px}.m-rail{gap:4px}.m-top-actions{flex-shrink:0}.m-small-label{padding-right:0}}/* Qadam: focused Material refinement. Loaded after the base template styles. */
:root{--bg:#f8fafd;--surface:#fff;--rail:#f0f4f9;--wash:#e9eff8;--hero:#d3e3fd;--hero-ink:#133666;--line:#dce3ed;--muted:#526174;--goal:#e3eddb;--goal-ink:#284b30;--goal-track:#c4d5ba;--goal-fill:#396b42}
:root[data-theme=dark]{--bg:#11161e;--surface:#1c2430;--rail:#18212e;--wash:#2a374b;--hero:#203b62;--hero-ink:#d6e6ff;--line:#3d4b61;--muted:#b4c1d3;--goal:#253d2c;--goal-ink:#d2edcc;--goal-track:#405d43;--goal-fill:#a5d49b}
body{font-family:'Google Sans Flex',sans-serif;font-optical-sizing:auto;-webkit-font-smoothing:antialiased}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}
.material-layout{grid-template-columns:96px minmax(0,1fr)}
.m-rail{position:sticky;top:0;height:100dvh;align-self:start;background:var(--rail);gap:18px;padding:28px 10px}
.q-mark{width:52px;height:52px;border-radius:20px;font-size:32px;margin-bottom:22px;transition:border-radius .2s ease}
.q-mark:hover{border-radius:50%}.rail-link{gap:7px;min-height:70px;font-size:12px;font-weight:550;color:var(--muted);justify-content:center;border-radius:18px}
.rail-icon{padding:9px 22px;transition:background .18s ease,border-radius .18s ease}.rail-link:hover .rail-icon{background:var(--wash)}
.rail-link.current .rail-icon{background:var(--hero);color:var(--hero-ink);border-radius:24px}
.m-workspace{max-width:1376px;padding:28px 40px 32px;margin:0 auto;min-width:0}
.m-top{min-height:56px;gap:28px}.m-brand{font-size:25px;font-weight:600;letter-spacing:-.7px}
.m-search{max-width:560px;min-height:56px;border:1px solid transparent;background:var(--wash);gap:12px;padding:0 18px}
.m-search:focus-within{outline:2px solid var(--accent);outline-offset:2px;background:var(--surface)}
.m-search input{height:52px;padding:0;font-size:16px;outline:none!important;box-shadow:none!important;appearance:none}
.m-search input::-webkit-search-cancel-button{display:none}
.search-clear{display:grid;place-items:center;flex-shrink:0;width:44px;height:44px;min-height:44px;border-radius:50%;background:transparent;color:var(--ink);margin-right:-10px}
.search-clear:hover{background:var(--wash)}.search-hint{font:14px 'Google Sans Flex',sans-serif;border:1px solid var(--line);border-radius:6px;padding:0 7px;color:var(--muted)}
.m-heading{margin:48px 0 28px;gap:24px;align-items:center}.m-heading h1{font-size:clamp(32px,3.6vw,46px);letter-spacing:-1.8px;line-height:1.15;margin-bottom:12px;font-weight:500}
.m-heading p{font-size:16px;line-height:1.6}.m-heading .tag{display:flex;align-items:center;gap:7px;white-space:nowrap;font-size:12px;color:var(--hero-ink);background:var(--hero);padding:10px 16px}
.m-heading .tag .icon{width:17px;height:17px}
.m-hero{grid-template-columns:minmax(0,1.65fr) minmax(280px,1fr);gap:20px;align-items:stretch}
.continue-card{min-height:340px;padding:36px;border-radius:32px;display:flex;flex-direction:column;align-items:flex-start;isolation:isolate}
.m-small-label{font-size:11px;letter-spacing:1.25px;font-weight:650;line-height:1.6;padding-right:0}
.continue-card h2{font-size:clamp(32px,3.2vw,44px);line-height:1.12;letter-spacing:-1.5px;max-width:390px;margin:24px 0 16px;font-weight:500}
.continue-card p{font-size:15px;line-height:1.65;max-width:335px;margin-bottom:24px}
.continue-card .btn{margin-top:auto;min-height:52px;padding:14px 24px;font-size:15px;gap:12px}
.continue-card .continue-deco{background:none;opacity:1;inset:auto 18px 24px auto;width:158px;height:180px;border-radius:0;transform:none;z-index:0;pointer-events:none}
.continue-deco:before{width:98px;height:98px;left:38px;top:0;border:20px solid #84adf2;background:none;border-radius:50%;transform:rotate(-20deg)}
.continue-deco:after{content:'';position:absolute;width:142px;height:52px;background:#a8c7fa;border-radius:16px 40px 40px 16px;left:0;bottom:10px;transform:rotate(-22deg)}
.deco-dot{position:absolute;width:43px;height:43px;left:2px;top:49px;border-radius:14px;background:#fff;transform:rotate(16deg)}
:root[data-theme=dark] .continue-deco:before{border-color:#426ea9}:root[data-theme=dark] .continue-deco:after{background:#355b90}:root[data-theme=dark] .deco-dot{background:#89b4f0}
.week-card{background:var(--goal);color:var(--goal-ink);padding:30px 28px;border-radius:32px;gap:12px;justify-content:flex-start}
.week-card h2{font-size:29px;line-height:1.17;font-weight:500;letter-spacing:-.7px;max-width:240px;margin:9px 0 4px}
.week-card p{font-size:14px;max-width:240px;line-height:1.6;margin-bottom:8px}
.week-card .spark-shape{width:40px;height:40px;top:25px;right:23px;background:var(--goal-fill);opacity:.6}
.week-card>div:last-child{margin-top:auto;width:100%}.week-card .row.fine{color:var(--goal-ink)!important;font-size:13px;margin-top:8px;flex-wrap:wrap}
.week-card .progress-track{height:10px;background:var(--goal-track);margin:14px 0 4px}.week-card .progress-track span{background:var(--goal-fill);transition:width .3s ease}
.reset-progress{color:var(--goal-ink);font-size:12px;min-height:44px;text-decoration:underline;text-underline-offset:4px;border-radius:8px}
.m-courses{padding-top:44px}.m-courses>.row{margin-bottom:24px;align-items:center;gap:16px}
.m-courses h2{font-size:28px;letter-spacing:-.8px;font-weight:500}.saved-toggle{font-size:13px;min-height:48px;padding:12px 18px;gap:10px}
.saved-toggle b{font-size:12px;min-width:22px;height:22px;display:grid;place-items:center;background:var(--surface);color:var(--ink);border-radius:50%}
.segmented{gap:8px;margin-bottom:24px!important}.segmented button{min-height:44px;min-width:78px;padding:10px 19px;font-size:14px;border:1px solid var(--line);background:transparent;transition:background .18s,border-radius .18s}
.segmented button.active{border-color:var(--accent)}.segmented button:hover:not(.active){background:var(--wash)}
.m-course-grid{gap:20px;grid-template-columns:repeat(3,minmax(0,1fr))}
.m-course{border-radius:28px;background:var(--surface);border:1px solid var(--line);transition:box-shadow .2s,border-color .2s}
.m-course:hover{border-color:var(--accent);box-shadow:0 5px 18px #142b4c0d}.m-course-visual{min-height:170px;position:relative;isolation:isolate}
.m-course-visual:before{content:'';position:absolute;width:110px;height:110px;border:1px solid currentColor;opacity:.12;border-radius:30px;transform:rotate(20deg);z-index:-1}
.m-course[data-kind=design] .m-course-visual:before{border-radius:50%;transform:translateX(-16px)}
.m-course[data-kind=ai] .m-course-visual:before{border-radius:20px;transform:rotate(45deg);width:90px;height:90px}
.m-course-art{font-size:58px;font-weight:600;letter-spacing:-2px}.bookmark{right:14px;top:14px;box-shadow:0 1px 3px #142b4c0d}
.m-course-copy{padding:24px;gap:0}.m-course-copy .tag{font-size:11px;background:var(--wash);color:var(--ink);padding:5px 10px;letter-spacing:.1px}
.m-course-copy h3{font-size:23px;letter-spacing:-.5px;line-height:1.2;margin:17px 0 12px}.m-course-copy>p{font-size:14px;line-height:1.65;margin-bottom:24px;min-height:0}
.m-course-meta{font-size:12px;align-items:center;gap:12px;margin-top:auto;margin-bottom:20px}.m-course-meta span:last-child{white-space:nowrap}
.m-course .btn.secondary{background:var(--wash);color:var(--ink);border-color:transparent;min-height:48px;font-size:14px;justify-content:space-between;padding:12px 20px}
.m-course .btn.secondary:hover{background:var(--hero);color:var(--hero-ink);filter:none}.completion-tag{font-size:12px;font-weight:550;color:var(--accent);margin-top:10px}
#course-results{margin:16px 4px 0;font-size:13px;min-height:21px}.m-empty{padding:40px 24px;text-align:center;background:var(--surface);border-style:solid}.m-empty p{font-size:16px;max-width:380px;margin:0 auto 20px;line-height:1.6}
.m-bottom{margin-top:32px;border-radius:24px;gap:16px;padding:22px 26px;font-size:14px}.m-bottom .icon{width:26px;height:26px}.m-footer{font-size:12px;padding:28px 0 0;line-height:1.7;gap:18px}.m-footer a{min-height:44px;display:inline-flex;align-items:center}
.pressable{transition:background .18s ease,box-shadow .18s ease,transform .18s ease}.pressable:hover{box-shadow:none}.pressable:active{transform:scale(.97);box-shadow:none}.btn.pressable:hover{box-shadow:0 2px 6px #142b4c1a}.pressable:disabled:after{display:none}
.round-button{background:var(--wash)}button[data-theme] .sun-icon{display:none}:root[data-theme=dark] button[data-theme] .sun-icon{display:block}:root[data-theme=dark] button[data-theme] .moon-icon{display:none}
#lesson{width:min(580px,calc(100% - 32px));padding:32px;border-radius:28px;box-shadow:0 24px 80px #0003}
#lesson h2{font-size:29px;font-weight:500;letter-spacing:-.7px;line-height:1.2;margin-top:5px}#lesson-description{font-size:15px;line-height:1.7;margin:18px 0 0}
.lesson-task{padding:20px;background:var(--wash);border-radius:20px}.lesson-task>b{font-size:14px;font-weight:600}.lesson-task ol{list-style:none;padding:0;margin:14px 0 0}.lesson-task li{margin:8px 0}
.lesson-step{display:flex;align-items:flex-start;gap:12px;padding:12px;border:1px solid transparent;background:var(--surface);border-radius:12px;margin:0;font-size:14px;font-weight:400;line-height:1.6;cursor:pointer}
.lesson-step:has(input:checked){border-color:var(--accent)}.lesson-step input{appearance:auto;accent-color:var(--accent);width:20px;height:20px;min-width:20px;padding:0;margin:2px 0 0;border-radius:4px}
.lesson-status{color:var(--muted);font-size:13px;margin:16px 0 0}#lesson .dialog-actions{margin-top:24px;gap:10px}#lesson .btn{border-radius:26px;min-height:48px;font-weight:550}#lesson .fine{font-size:12px;margin-bottom:0}
@media(min-width:1101px) and (max-width:1280px){.continue-card h2{max-width:310px;font-size:36px}.continue-card p{max-width:270px}.continue-card .continue-deco{right:4px;width:120px;transform:scale(.75);transform-origin:right bottom}}
@media(max-width:1100px){.m-workspace{padding:24px}.m-brand{display:block}.m-search{max-width:480px}.m-hero{grid-template-columns:minmax(0,1.3fr) minmax(260px,1fr)}.continue-card{padding:28px;min-height:335px}.continue-card .continue-deco{display:none}.continue-card h2{font-size:36px}.week-card{padding:28px 24px}.m-course-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.m-course:last-child{grid-column:auto}.m-heading .tag{display:none}}
@media(max-width:900px){.m-hero{grid-template-columns:minmax(0,1fr)}.continue-card{min-height:310px}.continue-card .continue-deco{display:block;right:30px}.continue-card h2{max-width:330px}.continue-card p{max-width:310px}.week-card{display:grid;grid-template-columns:1fr 1fr;column-gap:30px;row-gap:8px}.week-card .m-small-label{grid-column:1/-1}.week-card h2{margin:0;grid-column:1;grid-row:2}.week-card>p{grid-column:1;grid-row:3;margin:0}.week-card>div:last-child{grid-column:2;grid-row:2/4;align-self:center;margin:0}.week-card .spark-shape{display:none}.m-heading{align-items:start;flex-direction:column}.m-brand{display:none}}
@media(max-width:700px){.material-layout{grid-template-columns:minmax(0,1fr)}.m-rail{position:static;height:auto;flex-direction:row;gap:8px;padding:12px 20px;border-bottom:1px solid var(--line);justify-content:space-between}.q-mark{width:44px;height:44px;min-width:44px;font-size:27px;border-radius:16px;margin:0}.rail-link{min-height:56px;width:68px;gap:3px;font-size:11px}.rail-icon{padding:5px 17px}.m-workspace{padding:20px}.m-top{gap:12px}.m-search{max-width:none;min-width:0;min-height:52px;padding:0 14px}.m-search input{height:48px}.m-avatar,.search-hint{display:none}.m-top-actions{flex-shrink:0}.m-heading{margin:32px 0 24px;gap:0}.m-heading h1{font-size:34px;letter-spacing:-1.2px;margin-bottom:10px}.m-heading p{font-size:14px}.m-hero{gap:16px}.continue-card{padding:28px;min-height:300px;border-radius:28px}.continue-card h2{font-size:36px}.continue-card p{font-size:14px}.continue-card .continue-deco{display:none}.week-card{padding:24px;border-radius:28px;min-height:0}.week-card h2{font-size:25px}.week-card p{font-size:13px}.m-courses{padding-top:34px}.m-courses>.row{flex-direction:row;flex-wrap:wrap;align-items:center;margin-bottom:20px}.m-courses h2{font-size:25px}.saved-toggle{font-size:12px;padding:10px 14px;min-height:44px}.m-course-grid{grid-template-columns:minmax(0,1fr);gap:18px}.m-course-visual{min-height:175px}.segmented{gap:7px}.segmented button{padding:10px 15px;font-size:13px;min-width:0}.m-bottom{padding:20px;align-items:flex-start}.m-footer{flex-direction:column;gap:4px}.m-course-copy{padding:24px}#lesson{padding:24px}#lesson h2{font-size:25px}}
@media(max-width:420px){.m-workspace{padding:16px}.m-rail{padding:10px 16px;gap:4px}.rail-link{width:63px}.m-heading h1{font-size:31px}.continue-card{padding:24px;min-height:300px}.continue-card h2{font-size:32px;letter-spacing:-1px}.week-card{display:flex;gap:10px}.week-card h2{max-width:none}.week-card h2 br{display:none}.week-card p{max-width:none}.week-card>div:last-child{margin-top:8px}.m-courses h2{font-size:23px}.m-courses>.row{gap:14px}.m-course-copy{padding:22px}.m-course-copy h3{font-size:23px}#lesson{padding:20px}.lesson-task{padding:14px}.lesson-step{padding:12px 10px}#lesson .dialog-actions{flex-direction:column}#lesson .btn{width:100%}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{transition:none!important;animation:none!important}.pressable:active{transform:none}}
</style></head><body><a class="skip" href="#main">Asosiy mazmunga o‘tish</a><div class="material-layout"><aside class="m-rail" aria-label="Ilova navigatsiyasi"><a class="q-mark" href="#main" aria-label="Qadam bosh sahifasi">q</a><a class="rail-link current" href="#main"><span class="rail-icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-7h6v7"/></svg></span>Asosiy</a><a class="rail-link " href="#kurslar"><span class="rail-icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 7h8M8 11h6M4 17h16"/></svg></span>Kurslar</a><a class="rail-link " href="index.html"><span class="rail-icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg></span>Shablonlar</a></aside><main class="m-workspace" id="main"><header class="m-top"><a class="m-brand" href="#main">Qadam</a><div class="m-search" role="search"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input id="course-search" type="search" placeholder="Kurslarni qidirish" aria-label="Kurslarni qidirish" aria-controls="course-grid" aria-describedby="search-help"><kbd class="search-hint" aria-hidden="true">/</kbd><button class="search-clear pressable" type="button" data-clear-search aria-label="Qidiruvni tozalash" hidden><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button><span class="sr-only" id="search-help">Natijalarga o‘tish uchun Enter tugmasini bosing.</span></div><div class="m-top-actions"><button class="round-button pressable" data-theme aria-label="Qorong‘i rejimga o‘tish" aria-pressed="false"><span class="moon-icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z"/></svg></span><span class="sun-icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg></span></button><span class="m-avatar" aria-label="Demo profil: Azizbek">AS</span></div></header><section class="m-heading"><div><h1>Salom, Azizbek.</h1><p>Bugun o‘zingiz uchun yangi imkoniyat yarating.</p></div><span class="tag"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2q0 10 10 10-10 0-10 10 0-10-10-10 10 0 10-10Z"/></svg> Har kuni bir qadam</span></section><section class="m-hero"><div class="continue-card"><span class="m-small-label">O‘RGANISHNI DAVOM ETTIRING</span><h2>Kichik qadamlar.<br>Katta imkoniyatlar.</h2><p>Birinchi veb-saytingizni yaratish uchun navbatdagi dars tayyor.</p><button class="btn pressable" data-lesson="web" data-lesson-title="Birinchi veb-saytingiz" data-lesson-description="Semantik HTML yordamida o‘z sahifangizning asosiy tuzilmasini yarating."><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 11 7-11 7Z"/></svg> Darsni boshlash</button><div class="continue-deco" aria-hidden="true"><span class="deco-dot"></span></div></div><div class="week-card"><span class="m-small-label">SHAXSIY REJANGIZ</span><h2>Bugun ham<br>bir oz oldinga.</h2><p>O‘rganish odatga aylansa, natija albatta keladi.</p><span class="spark-shape" aria-hidden="true"></span><div><div class="row fine" style="color:#514817"><span>Demo darslar</span><b id="lesson-progress-text">0 / 3 dars</b></div><div class="progress-track" role="progressbar" aria-label="Bajarilgan demo darslar" aria-valuemin="0" aria-valuemax="3" aria-valuenow="0"><span id="lesson-progress"></span></div><button class="reset-progress" data-reset-progress disabled>Progressni qayta boshlash</button></div></div></section><section class="m-courses" id="kurslar"><div class="row"><h2 id="course-heading" tabindex="-1">Siz uchun tanlangan</h2><button class="saved-toggle pressable" data-only-saved aria-pressed="false"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4Z"/></svg> Saqlanganlar <b data-saved-count>0</b></button></div><div class="segmented" role="group" aria-label="Kurs yo‘nalishini tanlash"><button class="active pressable" data-app-filter="all" aria-pressed="true">Barchasi</button><button class="pressable" data-app-filter="web" aria-pressed="false">Dasturlash</button><button class="pressable" data-app-filter="design" aria-pressed="false">Dizayn</button><button class="pressable" data-app-filter="ai" aria-pressed="false">AI</button></div><div class="m-course-grid" id="course-grid"><article class="m-course" data-course="web" data-kind="web"><div class="m-course-visual"><span class="m-course-art" aria-hidden="true">&lt;/&gt;</span><button class="bookmark pressable" data-save-course="web" aria-label="Kursni saqlash" aria-pressed="false"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4Z"/></svg></button></div><div class="m-course-copy"><span class="tag">Boshlang‘ich</span><span class="completion-tag" data-completion hidden>✓ Bajarilgan</span><h3>Veb dasturlash</h3><p>Birinchi saytingizni g‘oyadan ishlaydigan sahifagacha yarating.</p><div class="m-course-meta"><span>1 demo dars</span><span>45 daqiqa</span></div><button class="btn secondary pressable" data-lesson="web" data-lesson-title="Veb dasturlash" data-lesson-description="Birinchi saytingizni g‘oyadan ishlaydigan sahifagacha yarating.">Darsni ochish <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button></div></article><article class="m-course" data-course="design" data-kind="design"><div class="m-course-visual"><span class="m-course-art" aria-hidden="true">Aa</span><button class="bookmark pressable" data-save-course="design" aria-label="Kursni saqlash" aria-pressed="false"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4Z"/></svg></button></div><div class="m-course-copy"><span class="tag">Boshlang‘ich</span><span class="completion-tag" data-completion hidden>✓ Bajarilgan</span><h3>Dizayn asoslari</h3><p>Rang, shrift va kompozitsiya bilan aniq fikr bildiring.</p><div class="m-course-meta"><span>1 demo dars</span><span>30 daqiqa</span></div><button class="btn secondary pressable" data-lesson="design" data-lesson-title="Dizayn asoslari" data-lesson-description="Rang, shrift va kompozitsiya bilan aniq fikr bildiring.">Darsni ochish <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button></div></article><article class="m-course" data-course="ai" data-kind="ai"><div class="m-course-visual"><span class="m-course-art" aria-hidden="true">✦</span><button class="bookmark pressable" data-save-course="ai" aria-label="Kursni saqlash" aria-pressed="false"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4Z"/></svg></button></div><div class="m-course-copy"><span class="tag">Boshlang‘ich</span><span class="completion-tag" data-completion hidden>✓ Bajarilgan</span><h3>AI bilan ishlash</h3><p>Savolni to‘g‘ri qo‘ying va amaliy natijaga erishing.</p><div class="m-course-meta"><span>1 demo dars</span><span>25 daqiqa</span></div><button class="btn secondary pressable" data-lesson="ai" data-lesson-title="AI bilan ishlash" data-lesson-description="Savolni to‘g‘ri qo‘ying va amaliy natijaga erishing.">Darsni ochish <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button></div></article></div><p id="course-results" class="fine" role="status">3 ta kurs</p><div id="course-empty" class="m-empty" hidden><p>Mos kurs topilmadi. Qidiruvni yoki yo‘nalishni o‘zgartiring.</p><button class="btn secondary pressable" data-reset-courses>Filtrlarni tozalash</button></div></section><div class="m-bottom"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2q0 10 10 10-10 0-10 10 0-10-10-10 10 0 10-10Z"/></svg><p>Hammasini birdan o‘rganish shart emas. Bugun bitta foydali qadamning o‘zi yetarli.</p></div><footer class="extra-footer m-footer"><span>Qadam · Material 3 Expressive’dan ilhomlangan mustaqil namuna</span><a href="index.html">← Barcha shablonlar</a></footer></main></div><dialog id="request" aria-labelledby="request-title"><div class="row"><h2 id="request-title">Ariza qoldirish</h2><button class="close" data-close aria-label="Yopish">×</button></div><p class="muted">Demo ariza uchun ma’lumotlarni kiriting.</p><form id="request-form"><label for="request-name">Ismingiz</label><input id="request-name" name="name" autocomplete="given-name" required maxlength="80" placeholder="Ismingizni yozing"><label for="request-phone">Telefon raqamingiz</label><input id="request-phone" name="phone" type="tel" autocomplete="tel" required maxlength="24" inputmode="tel" placeholder="+998 90 123 45 67"><label for="request-message">Xabaringiz yoki savolingiz <span class="fine">(ixtiyoriy)</span></label><textarea id="request-message" name="message" rows="3" maxlength="1000" placeholder="Qisqacha yozing…"></textarea><div class="dialog-actions"><button class="btn" type="submit">Ariza tayyorlash →</button><button class="btn secondary" type="button" data-close>Bekor qilish</button></div><p class="result" id="request-result" role="status"></p></form><p class="fine" style="margin:20px 0 0">Dizayn namunasidagi forma. Ma’lumotlar yuborilmaydi.</p></dialog><dialog id="lesson" aria-labelledby="lesson-title" aria-describedby="lesson-description"><div class="row"><h2 id="lesson-title">Dars</h2><button class="close round-button" data-close aria-label="Dars oynasini yopish">×</button></div><p class="muted" id="lesson-description"></p><div class="lesson-task"><b>Amaliy mashg‘ulot</b><ol><li>O‘rganmoqchi bo‘lgan muammongizni bir jumlada yozing.</li><li>Kichik natija yarating va uning ishlashini tekshiring.</li><li>Natijani saqlang va keyingi qadamni belgilang.</li></ol><p class="lesson-status" id="lesson-step-status" role="status">0 / 3 qadam bajarildi</p></div><div class="dialog-actions"><button class="btn pressable" id="complete-lesson" disabled>Darsni yakunlash ✓</button><button class="btn secondary pressable" data-close>Yopish</button></div><p class="result" id="lesson-feedback" role="status"></p><p class="fine">Qadamlarni bajaring va belgilang. Natija shu brauzerda saqlanadi.</p></dialog><script src="lesson-model.js"></script><script src="extra.js"></script><div class="toast" role="status" hidden></div><script src="shared.js"></script></body></html>
```

## site/shared.css

```css

*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font:16px/1.6 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--ink);background:var(--bg)}button,input,select,textarea{font:inherit}textarea{resize:vertical;min-height:88px}button,a{-webkit-tap-highlight-color:transparent}button{cursor:pointer}a{color:inherit;text-decoration:none}button:disabled{cursor:default}h1,h2,h3,p{margin-top:0}h1,h2,h3{line-height:1.12;text-wrap:balance}p{text-wrap:pretty}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid var(--accent);outline-offset:4px}button{border:0}svg{display:block;max-width:100%}.shell{width:min(1180px,calc(100% - 64px));margin:auto}.nav{display:flex;align-items:center;justify-content:space-between;gap:28px;min-height:96px}.logo{font-size:23px;font-weight:800;letter-spacing:-1px;white-space:nowrap}.logo span{color:var(--accent)}.navlinks{display:flex;gap:28px;align-items:center;font-size:14px}.navlinks a:hover{color:var(--accent)}.btn{display:inline-flex;justify-content:center;align-items:center;gap:14px;padding:13px 23px;background:var(--accent);color:var(--on-accent,#fff);font-size:14px;font-weight:700;border-radius:var(--radius,10px);line-height:1.5}.btn:hover{filter:brightness(.94)}.btn.secondary{background:transparent;color:var(--ink);border:1px solid var(--line)}.btn.small{padding:9px 17px}.eyebrow{font-size:12px;font-weight:750;text-transform:uppercase;letter-spacing:2px;color:var(--accent)}.muted{color:var(--muted)}.section{padding:72px 0}.section-head{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:30px}.section-head h2{font-size:34px;margin:0}.section-head p{margin:0;color:var(--muted);max-width:390px}.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.card{padding:27px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius,14px)}.card h3{font-size:21px;margin:18px 0 12px}.card p{color:var(--muted);font-size:14px}.tag{font-size:11px;font-weight:750;padding:5px 9px;display:inline-block;border-radius:5px;background:var(--wash);color:var(--accent)}.row{display:flex;align-items:center;justify-content:space-between;gap:18px}.fine{font-size:12px;color:var(--muted)}.foot{border-top:1px solid var(--line);padding:28px 0;font-size:13px;color:var(--muted)}.menu-button{display:none;padding:9px 14px;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:8px}.toast{position:fixed;bottom:25px;left:50%;transform:translateX(-50%);padding:13px 24px;background:var(--ink);color:var(--bg);border-radius:10px;box-shadow:0 8px 32px #0002;z-index:20;max-width:calc(100% - 32px);font-size:14px}.toast[hidden]{display:none}dialog{border:1px solid var(--line);border-radius:18px;background:var(--surface);color:var(--ink);padding:30px;width:min(480px,calc(100% - 32px));max-height:85vh}dialog::backdrop{background:#0b152780}dialog h2{font-size:25px;margin:0 0 8px}dialog label{display:block;margin:20px 0 6px;font-size:13px;font-weight:700}dialog input,dialog select,dialog textarea{width:100%;padding:12px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink)}.close{background:transparent;color:var(--muted);padding:4px 10px;font-size:23px}.dialog-actions{display:flex;gap:12px;margin-top:24px;flex-wrap:wrap}.result{margin:18px 0 0;font-size:14px;color:var(--accent)}.filters{display:flex;gap:9px;flex-wrap:wrap;margin-bottom:28px}.filter{padding:8px 17px;border:1px solid var(--line);border-radius:30px;background:transparent;color:var(--muted);font-size:13px}.filter.active{background:var(--accent);color:var(--on-accent,#fff);border-color:var(--accent)}[hidden]{display:none!important}.sample-note{font-size:11px}.skip{position:absolute;top:-60px;left:16px;padding:12px;background:var(--accent);color:var(--on-accent,#fff);z-index:30}.skip:focus{top:10px}
@media(max-width:800px){.shell{width:calc(100% - 36px)}.nav{min-height:78px;flex-wrap:wrap;gap:12px;padding:16px 0}.menu-button{display:block}.navlinks{display:none;width:100%;padding:15px 0;flex-wrap:wrap;gap:20px}.navlinks.open{display:flex}.grid3,.grid4{grid-template-columns:repeat(2,1fr)}.section{padding:48px 0}.section-head{align-items:start;flex-direction:column}.section-head h2{font-size:29px}.foot .row{align-items:start;flex-direction:column}}
@media(max-width:520px){.grid3,.grid4{grid-template-columns:1fr}.btn{padding:12px 18px}.card{padding:22px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}

/* Shared layout, keyboard and touch refinements. */
html{scroll-padding-top:24px}body{overflow-wrap:break-word}
main,section,article,.row>*{min-width:0}
.grid3,.grid4{grid-template-columns:repeat(3,minmax(0,1fr))}.grid4{grid-template-columns:repeat(4,minmax(0,1fr))}
button,.btn,.filter,.menu-button{min-height:44px;touch-action:manipulation}
button,.btn{transition:background-color .16s ease,box-shadow .16s ease,transform .16s ease}
button:active:not(:disabled),.btn:active{transform:translateY(1px)}button:disabled{opacity:.55;cursor:not-allowed}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,[tabindex]:focus-visible{outline:3px solid var(--ink);outline-offset:4px;box-shadow:0 0 0 2px var(--bg)}
.navlinks a{display:inline-flex;align-items:center;min-height:44px}.btn{max-width:100%;text-align:center}.btn svg{flex-shrink:0}
.close{min-width:44px;min-height:44px;flex-shrink:0;border-radius:50%}.close:hover{background:var(--wash);color:var(--ink)}
dialog{max-height:calc(100dvh - 32px);overflow:auto;overscroll-behavior:contain}dialog .row{align-items:flex-start}dialog h2{overflow-wrap:anywhere}dialog input,dialog textarea{font-size:16px}
body:has(dialog[open]){overflow:hidden}.result{overflow-wrap:anywhere}.tag,.fine,.sample-note{line-height:1.6}
.lesson-link{min-height:44px;display:inline-flex;align-items:center;text-decoration:underline;text-underline-offset:4px;color:#fff;font-size:12px}
.card{display:flex;flex-direction:column}.card .course-link{align-self:flex-start}.card .course-meta{margin-top:auto}
.course-link{min-height:44px;align-items:center}.cart-description{display:grid;gap:4px}.cart-quantity{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.cart-quantity button{min-width:44px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--ink)}.cart-quantity .remove{padding:0 10px;color:#934343}.cart-item{flex-wrap:wrap}.cart-total{flex-wrap:wrap}.cart-total b:last-child{font-variant-numeric:tabular-nums}
@media(max-width:800px){.grid3,.grid4{grid-template-columns:repeat(2,minmax(0,1fr))}.navlinks{padding:12px;border:1px solid var(--line);border-radius:12px;background:var(--surface)}.navlinks.open{display:grid;gap:4px}.navlinks a{padding:8px 10px}.navlinks .btn{justify-self:start;margin-top:6px}}
@media(max-width:520px){.grid3,.grid4{grid-template-columns:minmax(0,1fr)}dialog{padding:22px}.row{gap:12px}.section-head h2{font-size:28px}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}button:active:not(:disabled),.btn:active{transform:none}}

```

## site/shared.js

```javascript
/* Shared interactions. Forms are local demonstrations. */
const toast = document.querySelector('.toast');
let toastTimer;
function notify(message) {
  if (!toast) return;
  toast.textContent = message; toast.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.hidden = true, 4000);
}
const normalizeSearch = value => value.trim().toLocaleLowerCase('uz').replace(/[‘’ʻʼ`]/g, "'").replace(/\s+/g, ' ');
const formatMoney = value => Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const menu = document.querySelector('.menu-button'), navLinks = document.querySelector('.navlinks');
function closeMenu(restoreFocus = false) {
  navLinks?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false');
  if (restoreFocus) menu?.focus();
}
menu?.addEventListener('click', () => menu.setAttribute('aria-expanded', String(navLinks.classList.toggle('open'))));
navLinks?.querySelectorAll('a,button').forEach(control => control.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') closeMenu(true); });
document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });
matchMedia('(min-width:801px)').addEventListener('change', () => closeMenu());

// Native dialogs provide inert backgrounds, Escape and focus containment.
document.querySelectorAll('dialog').forEach(dialog => {
  const heading = dialog.querySelector('h2');
  if (heading) { heading.id ||= dialog.id + '-title'; dialog.setAttribute('aria-labelledby', heading.id); }
  dialog.addEventListener('close', () => {
    if (!dialog.demoOpener) return;
    if (menu && dialog.demoOpener.closest('.navlinks') && getComputedStyle(navLinks).display === 'none') menu.focus();
    else dialog.demoOpener.focus();
  });
});
const modal = document.querySelector('#request');
const requestName = document.querySelector('#request-name'), requestPhone = document.querySelector('#request-phone');
document.querySelectorAll('[data-request]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#request-title').textContent = button.dataset.request;
  document.querySelector('#request-result').textContent = ''; document.querySelector('#request-form').reset();
  modal.demoOpener = button; modal.showModal(); requestName.focus();
}));
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
requestName?.addEventListener('input', () => requestName.setCustomValidity(requestName.value.trim() ? '' : 'Ismingizni kiriting.'));
requestPhone?.addEventListener('input', () => {
  const digits = requestPhone.value.replace(/\D/g, '').length;
  requestPhone.setCustomValidity(/^[+\d ()-]+$/.test(requestPhone.value) && digits >= 7 && digits <= 15 ? '' : '7–15 ta raqamdan iborat telefon raqamini kiriting.');
});
document.querySelector('#request-form')?.addEventListener('reset', () => { requestName.setCustomValidity(''); requestPhone.setCustomValidity(''); });
document.querySelector('#request-form')?.addEventListener('submit', event => {
  event.preventDefault(); document.querySelector('#request-result').textContent = 'Demo ariza tayyor, ' + requestName.value.trim() + '. Ma’lumotlar serverga yuborilmadi.';
});
document.querySelectorAll('.filters').forEach(group => {
  const scope = group.closest('section') || document, cards = [...scope.querySelectorAll('[data-category]')];
  group.setAttribute('role', 'group'); group.setAttribute('aria-label', group.getAttribute('aria-label') || 'Kategoriyani tanlash');
  group.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    group.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    cards.forEach(card => card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter);
    const count = scope.querySelector('[data-product-count]'); if (count) count.textContent = cards.filter(card => !card.hidden).length + ' ta mahsulot';
  }));
});

const catalog = new Map([...document.querySelectorAll('[data-add]')].map(button => [button.dataset.add, Number(button.dataset.price)]));
const cartKey = 'ustoz.forma.cart.v1';
let cart = [];
try {
  const saved = JSON.parse(localStorage.getItem(cartKey) || '[]');
  if (Array.isArray(saved)) cart = saved.filter(item => catalog.has(item.name) && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99).map(item => ({name: item.name, price: catalog.get(item.name), quantity: item.quantity}));
} catch { /* The basket still works when storage is unavailable. */ }
const cartDialog = document.querySelector('#cart');
function persistCart() { try { localStorage.setItem(cartKey, JSON.stringify(cart)); } catch { notify('Savat shu sahifada ishlaydi; brauzerda saqlash imkoni yo‘q.'); } }
function updateCart(focusName, focusAction) {
  document.querySelectorAll('[data-cart-count]').forEach(item => item.textContent = cart.reduce((sum, item) => sum + item.quantity, 0));
  const list = document.querySelector('#cart-items'); if (!list) return;
  list.replaceChildren();
  cart.forEach(item => {
    const row = document.createElement('div'); row.className = 'cart-item';
    const details = document.createElement('div'); details.className = 'cart-description';
    const title = document.createElement('b'); title.textContent = item.name;
    const price = document.createElement('span'); price.className = 'fine'; price.textContent = formatMoney(item.price) + ' so‘m / dona'; details.append(title, price);
    const controls = document.createElement('div'); controls.className = 'cart-quantity';
    const quantity = document.createElement('span'); quantity.textContent = item.quantity; quantity.setAttribute('aria-label', item.quantity + ' dona');
    const action = (label, text, handler) => {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = text;
      button.setAttribute('aria-label', item.name + ': ' + label); button.dataset.action = label; button.dataset.item = item.name;
      button.addEventListener('click', handler); return button;
    };
    const change = amount => {
      item.quantity += amount; if (item.quantity <= 0) cart = cart.filter(entry => entry !== item);
      persistCart(); updateCart(item.name, amount > 0 ? 'ko‘paytirish' : 'kamaytirish');
    };
    const minus = action('kamaytirish', '−', () => change(-1)), plus = action('ko‘paytirish', '+', () => change(1)); plus.disabled = item.quantity >= 99;
    const remove = action('o‘chirish', 'O‘chirish', () => { cart = cart.filter(entry => entry !== item); persistCart(); updateCart(item.name, 'o‘chirish'); }); remove.className = 'remove';
    controls.append(minus, quantity, plus, remove); row.append(details, controls); list.append(row);
  });
  document.querySelector('#cart-empty').hidden = cart.length > 0;
  document.querySelector('#cart-total').textContent = formatMoney(cart.reduce((sum, item) => sum + item.price * item.quantity, 0)) + ' so‘m';
  if (focusName) {
    const target = [...list.querySelectorAll('button')].find(button => button.dataset.item === focusName && button.dataset.action === focusAction && !button.disabled);
    (target || list.querySelector('button') || cartDialog.querySelector('[data-close]')).focus();
  }
}
document.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => {
  const found = cart.find(item => item.name === button.dataset.add);
  if (found?.quantity >= 99) { notify('Bitta mahsulotdan eng ko‘pi 99 dona.'); return; }
  if (found) found.quantity++; else cart.push({name: button.dataset.add, price: Number(button.dataset.price), quantity: 1});
  persistCart(); updateCart(); notify(button.dataset.add + ' savatga qo‘shildi');
}));
document.querySelector('[data-open-cart]')?.addEventListener('click', event => { updateCart(); cartDialog.demoOpener = event.currentTarget; cartDialog.showModal(); }); updateCart();

document.querySelector('#order-search')?.addEventListener('input', event => {
  const query = normalizeSearch(event.target.value); let count = 0;
  document.querySelectorAll('#orders tbody tr').forEach(row => { row.hidden = !normalizeSearch(row.textContent).includes(query); if (!row.hidden) count++; });
  document.querySelector('#no-orders').hidden = count > 0;
  document.querySelector('[data-order-count]').textContent = 'Demo yozuvlar · ' + count + ' ta'; document.querySelector('[data-export]').disabled = count === 0;
});
document.querySelectorAll('[data-period]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-period]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  const weekly = button.dataset.period === 'week', revenue = weekly ? 12480000 : 48920000, orders = weekly ? 86 : 342;
  document.querySelector('#revenue').textContent = formatMoney(revenue); document.querySelector('#orders-number').textContent = orders;
  document.querySelector('#customers-number').textContent = weekly ? '316' : '1 284'; document.querySelector('#average-order').textContent = formatMoney(revenue / orders);
  const trends = weekly ? ['9.6', '7.5', '5.1', '2.0'] : ['12.8', '8.2', '6.4', '4.3'];
  document.querySelectorAll('.metric .trend').forEach((el, i) => el.firstChild.textContent = '↗ ' + trends[i] + '% ');
  const products = weekly ? [31, 22, 18] : [124, 86, 72];
  document.querySelectorAll('.bar-row').forEach((row, i) => { row.querySelector('b').textContent = products[i]; row.querySelector('.bar-track span').style.width = products[i] / orders * 100 + '%'; });
  document.querySelector('#chart-title').textContent = weekly ? 'Oxirgi 7 kun' : 'Oxirgi 30 kun';
  document.querySelector('.chart-svg').setAttribute('aria-label', (weekly ? '7 kunlik' : '30 kunlik') + ' namunaviy savdo dinamikasi. Jami tushum: ' + formatMoney(revenue) + ' so‘m.');
  document.querySelector('#chart-line').setAttribute('d', weekly ? 'M0 125 L60 135 L120 88 L180 100 L240 58 L300 68 L360 22' : 'M0 150 L60 120 L120 136 L180 74 L240 94 L300 39 L360 22');
  document.querySelector('.chart-svg path[fill="#edf0ff"]').setAttribute('d', weekly ? 'M10 135L70 145L130 98L190 110L250 68L310 78L370 32V178H10Z' : 'M10 160L70 130L130 146L190 84L250 104L310 49L370 32V178H10Z');
}));
document.querySelector('[data-period].active')?.click();
document.querySelector('[data-export]')?.addEventListener('click', () => {
  const rows = [...document.querySelectorAll('#orders tbody tr')].filter(row => !row.hidden);
  const lines = [['Buyurtma', 'Mijoz', 'Mahsulot', 'Summa', 'Holat'], ...rows.map(row => [...row.cells].map(cell => cell.textContent.trim()))];
  const csv = '\uFEFF' + lines.map(row => row.map(cell => '"' + cell.replaceAll('"', '""') + '"').join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob([csv], {type: 'text/csv;charset=utf-8'})), link = document.createElement('a');
  link.href = url; link.download = 'buyurtmalar-demo.csv'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); notify(rows.length + ' ta buyurtma CSV faylga saqlandi');
});
function updateNavigation() {
  const current = location.hash || '#main';
  document.querySelectorAll('.side-links a,.rail-link[href^="#"]').forEach(link => {
    const active = link.getAttribute('href') === current; link.classList.toggle(link.classList.contains('rail-link') ? 'current' : 'active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
}
addEventListener('hashchange', updateNavigation); updateNavigation();

```

## site/extra.js

```javascript
/* Local preferences only; no account, form or contact information is stored. */
const demoStore = {
  read(key, fallback) { try { return JSON.parse(localStorage.getItem('ustoz.' + key)) ?? fallback; } catch { return fallback; } },
  write(key, value) { try { localStorage.setItem('ustoz.' + key, JSON.stringify(value)); return true; } catch { return false; } }
};
const palettes = {'#d9ef3f':'#f2f6cd', '#b6d6ff':'#e6f0ff', '#f5afd1':'#fce4ef'};
function setPalette(color) {
  if (!palettes[color]) return;
  document.documentElement.style.setProperty('--accent', color); document.documentElement.style.setProperty('--wash', palettes[color]);
  document.querySelectorAll('[data-color]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.color === color)));
}
if (document.querySelector('[data-color]')) setPalette(demoStore.read('spark.palette', '#d9ef3f'));
document.querySelectorAll('[data-color]').forEach(button => button.addEventListener('click', () => { setPalette(button.dataset.color); demoStore.write('spark.palette', button.dataset.color); }));
const themeButton = document.querySelector('button[data-theme]');
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'; themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? 'Yorug‘ rejimga o‘tish' : 'Qorong‘i rejimga o‘tish');
}
if (themeButton) {
  setTheme(demoStore.read('qadam.theme', 'light') === 'dark');
  themeButton.addEventListener('click', () => { const dark = document.documentElement.dataset.theme !== 'dark'; setTheme(dark); demoStore.write('qadam.theme', dark ? 'dark' : 'light'); });
}
const courseCards = [...document.querySelectorAll('[data-course]')], validCourseIds = courseCards.map(card => card.dataset.course);
const readIds = key => { const stored = demoStore.read(key, []); return new Set(Array.isArray(stored) ? stored.filter(id => validCourseIds.includes(id)) : []); };
let currentCourseFilter = 'all', onlySaved = false;
const savedCourses = readIds('qadam.saved.v1'), completedLessons = readIds('qadam.completed.v1');
const searchText = value => value.trim().toLocaleLowerCase('uz').replace(/[‘’ʻʼ`]/g, "'").replace(/\s+/g, ' ');
function updateCourses() {
  const query = searchText(document.querySelector('#course-search')?.value || ''); let count = 0;
  const clearSearch = document.querySelector('[data-clear-search]');
  if (clearSearch) {
    clearSearch.hidden = !document.querySelector('#course-search').value;
    document.querySelector('.search-hint').hidden = !clearSearch.hidden;
  }
  courseCards.forEach(card => {
    const searchable = card.querySelector('h3').textContent + ' ' + card.querySelector('.m-course-copy>p').textContent;
    card.hidden = !(currentCourseFilter === 'all' || card.dataset.kind === currentCourseFilter) || !searchText(searchable).includes(query) || (onlySaved && !savedCourses.has(card.dataset.course));
    if (!card.hidden) count++;
    const button = card.querySelector('[data-save-course]'), saved = savedCourses.has(card.dataset.course);
    button.setAttribute('aria-pressed', String(saved)); button.classList.toggle('is-saved', saved);
    button.setAttribute('aria-label', card.querySelector('h3').textContent + (saved ? ': saqlanganlardan olib tashlash' : ': saqlash'));
  });
  const empty = document.querySelector('#course-empty'); if (empty) empty.hidden = count > 0;
  const status = document.querySelector('#course-results'); if (status) status.textContent = count + ' ta kurs' + (onlySaved ? ' · Saqlanganlar' : '');
  document.querySelectorAll('[data-saved-count]').forEach(item => item.textContent = savedCourses.size);
}
document.querySelector('#course-search')?.addEventListener('input', updateCourses);
document.querySelector('[data-clear-search]')?.addEventListener('click', () => {
  document.querySelector('#course-search').value = ''; updateCourses(); document.querySelector('#course-search').focus();
});
document.querySelector('#course-search')?.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault(); document.querySelector('#course-heading').focus();
    document.querySelector('#kurslar').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth', block:'start'});
  }
  if (event.key === 'Escape' && event.currentTarget.value) { event.preventDefault(); event.currentTarget.value = ''; updateCourses(); }
});
document.addEventListener('keydown', event => {
  if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input,textarea,[contenteditable],dialog')) {
    const input = document.querySelector('#course-search'); if (input) { event.preventDefault(); input.focus(); }
  }
});
document.querySelectorAll('[data-app-filter]').forEach(button => button.addEventListener('click', () => {
  currentCourseFilter = button.dataset.appFilter;
  document.querySelectorAll('[data-app-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); }); updateCourses();
}));
document.querySelectorAll('[data-save-course]').forEach(button => button.addEventListener('click', () => {
  const id = button.dataset.saveCourse; if (savedCourses.has(id)) savedCourses.delete(id); else savedCourses.add(id);
  demoStore.write('qadam.saved.v1', [...savedCourses]); updateCourses();
  if (button.closest('[data-course]').hidden) document.querySelector('[data-only-saved]').focus();
}));
document.querySelector('[data-only-saved]')?.addEventListener('click', event => {
  onlySaved = !onlySaved; event.currentTarget.setAttribute('aria-pressed', String(onlySaved)); event.currentTarget.classList.toggle('selected', onlySaved); updateCourses();
});
document.querySelector('[data-reset-courses]')?.addEventListener('click', () => {
  onlySaved = false; const button = document.querySelector('[data-only-saved]'); button.classList.remove('selected'); button.setAttribute('aria-pressed', 'false');
  document.querySelector('#course-search').value = ''; document.querySelector('[data-app-filter="all"]').click(); document.querySelector('#course-search').focus();
});
const tasks = {
  web: ['HTML sahifada header, main va footer qismlarini yarating.', 'Sarlavha, qisqa matn va ishlaydigan tugma qo‘shing.', 'Sahifani telefon kengligida ochib, matn va tugmalarni tekshiring.'],
  design: ['Bitta asosiy rang, matn rangi va och fon tanlang.', 'Sarlavha hamda asosiy matn uchun ikki shrift o‘lchamini belgilang.', 'Matn o‘qilishini va klaviatura bilan tugmaga o‘tishni tekshiring.'],
  ai: ['Maqsad, auditoriya va kerakli natijani aniq yozing.', 'AI javobidan foydalanib bitta kichik namuna yarating.', 'Natijadagi faktlarni tekshiring va bitta kamchilikni tuzating.']
};
const lessonDialog = document.querySelector('#lesson'); let selectedLesson;
const storedSteps = demoStore.read('qadam.steps.v1', {});
const lessonSteps = courseCards.length ? QadamLessonModel.restoreSteps(storedSteps, validCourseIds, completedLessons) : {};
function saveSteps() {
  return demoStore.write('qadam.steps.v1', Object.fromEntries(Object.entries(lessonSteps).map(([id, steps]) => [id, [...steps]])));
}
function updateLessonAction() {
  const done = completedLessons.has(selectedLesson), count = lessonSteps[selectedLesson].size;
  const complete = document.querySelector('#complete-lesson');
  complete.disabled = !QadamLessonModel.canComplete(lessonSteps[selectedLesson], tasks[selectedLesson].length, done);
  complete.textContent = done ? 'Dars bajarilgan ✓' : 'Darsni yakunlash ✓';
  document.querySelector('#lesson-step-status').textContent = count + ' / ' + tasks[selectedLesson].length + ' qadam bajarildi' + (!done && count < 3 ? ' · Davom eting' : '');
}
function updateProgress() {
  if (!lessonDialog) return;
  const count = completedLessons.size, total = validCourseIds.length;
  document.querySelector('#lesson-progress-text').textContent = count + ' / ' + total + ' dars';
  const bar = document.querySelector('#lesson-progress'); bar.style.width = count / total * 100 + '%';
  bar.parentElement.setAttribute('aria-valuenow', count); bar.parentElement.setAttribute('aria-valuemax', total);
  courseCards.forEach(card => { card.querySelector('[data-completion]').hidden = !completedLessons.has(card.dataset.course); });
  document.querySelector('[data-reset-progress]').disabled = count === 0 && Object.values(lessonSteps).every(steps => steps.size === 0);
  const next = courseCards.find(card => !completedLessons.has(card.dataset.course)) || courseCards[0];
  const source = next.querySelector('[data-lesson]'), hero = document.querySelector('.continue-card [data-lesson]');
  Object.assign(hero.dataset, {lesson: source.dataset.lesson, lessonTitle: source.dataset.lessonTitle, lessonDescription: source.dataset.lessonDescription});
  hero.lastChild.textContent = count === total ? ' Darsni takrorlash' : ' Darsni boshlash';
  document.querySelector('.continue-card p').textContent = count === total ? 'Barcha demo darslar bajarildi. Istalgan darsni qayta ko‘rib chiqing.' : source.dataset.lessonTitle + ' bo‘yicha navbatdagi amaliy qadamingiz tayyor.';
}
document.querySelector('[data-reset-progress]')?.addEventListener('click', () => {
  completedLessons.clear(); Object.values(lessonSteps).forEach(steps => steps.clear()); saveSteps(); demoStore.write('qadam.completed.v1', []); updateProgress();
  document.querySelector('.continue-card [data-lesson]').focus();
});
document.querySelectorAll('[data-lesson]').forEach(button => button.addEventListener('click', () => {
  selectedLesson = button.dataset.lesson; document.querySelector('#lesson-title').textContent = button.dataset.lessonTitle;
  document.querySelector('#lesson-description').textContent = button.dataset.lessonDescription;
  const list = lessonDialog.querySelector('ol'); list.replaceChildren();
  tasks[selectedLesson].forEach((text, index) => {
    const item = document.createElement('li'), label = document.createElement('label'), input = document.createElement('input'), description = document.createElement('span');
    label.className = 'lesson-step'; input.type = 'checkbox'; input.checked = lessonSteps[selectedLesson].has(index); input.disabled = completedLessons.has(selectedLesson); description.textContent = text;
    input.addEventListener('change', () => {
      if (input.checked) lessonSteps[selectedLesson].add(index); else lessonSteps[selectedLesson].delete(index);
      const persisted = saveSteps(); updateLessonAction(); updateProgress();
      if (!persisted) document.querySelector('#lesson-feedback').textContent = 'Brauzer saqlashga ruxsat bermadi. Qadamlar ochiq sahifada saqlanadi.';
    });
    label.append(input, description); item.append(label); list.append(item);
  });
  updateLessonAction(); document.querySelector('#lesson-feedback').textContent = ''; lessonDialog.demoOpener = button; lessonDialog.showModal();
}));
document.querySelector('#complete-lesson')?.addEventListener('click', event => {
  if (!selectedLesson || !QadamLessonModel.canComplete(lessonSteps[selectedLesson], tasks[selectedLesson].length, completedLessons.has(selectedLesson))) return;
  completedLessons.add(selectedLesson); const persisted = demoStore.write('qadam.completed.v1', [...completedLessons]);
  event.currentTarget.disabled = true; event.currentTarget.textContent = 'Dars bajarilgan ✓'; updateProgress();
  lessonDialog.querySelectorAll('.lesson-step input').forEach(input => input.disabled = true);
  document.querySelector('#lesson-feedback').textContent = persisted ? 'Bajarildi. Natija shu brauzerda saqlandi.' : 'Bajarildi. Natija faqat ochiq sahifada saqlanadi.';
  lessonDialog.querySelector('.dialog-actions [data-close]').focus();
});
updateCourses(); updateProgress();

```

## site/lesson-model.js

```javascript
/* Pure lesson-state rules, shared by the browser and Node verification. */
(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.QadamLessonModel = model;
})(typeof globalThis === 'object' ? globalThis : this, function () {
  return {
    restoreSteps(saved, ids, completed) {
      return Object.fromEntries(ids.map(id => [id, new Set(completed.has(id) ? [0, 1, 2] :
        (Array.isArray(saved?.[id]) ? saved[id].filter(value => Number.isInteger(value) && value >= 0 && value < 3) : []))]));
    },
    canComplete(steps, total, completed) {
      return !completed && steps instanceof Set && steps.size === total && Array.from({length: total}, (_, index) => index).every(index => steps.has(index));
    }
  };
});

```

