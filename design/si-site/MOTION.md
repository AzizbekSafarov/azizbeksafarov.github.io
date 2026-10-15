# SI.gov motion contract — inspected 2026-10-15

The previous red jittering SI was insufficient. Preserve the reference's actual interaction structure rather than replacing it with a decorative bobbing logo. This is an independent implementation; reference observed at https://www.si.gov/ . Content, layout and initiative functions remain this project's own.

## Persistent field

One fixed viewport canvas, 1800 particles on desktop / 1500 below 700 px, DPR capped at 2. Particles retain identity, position and velocity while targets change. The palette is Uzbekistan blue #0099b5, white #ffffff and green #1eb53a on deep teal #062c35. Moving particles turn blue and grow; flag particles retain their assigned national colors even while moving. Light surfaces use dark teal instead of the white particle role for contrast. Red #ce1126 is reserved for the flag’s two narrow separators.

Spring attraction .045, velocity damping .84 at 60 Hz; long frames are substepped. Pointer repels within 120 px. Pointer-down on decorative space sends a circular shockwave out at 16 px per 60 Hz frame; interactive controls keep their normal behavior. Pointer position also rotates the sphere. Hidden document and explicit pause cancel the animation frame; returning starts one loop.

## Hero

- On arrival particles fly from scattered positions into a grid-sampled Instrument Serif SI mask.
- Enter the SI bounds: on desktop the same particles progressively write `Super` / `Intelligence`, along vertical serpentine columns over approximately 2.4 seconds.
- Leave the enlarged bounds: they return to SI. Hysteresis prevents flickering between targets.
- Below 900 px, a tap instead assembles `SUPER INTELLIGENCE` around a rotating circle. Another tap returns to SI. The transparent hero control supports keyboard Enter/Space and exposes its pressed state.
- Pointer force, target movement and click wave are physical effects, not CSS text transforms.

## Scroll chapters

The section at viewport midpoint controls the target; nested step chapters take priority over the parent.

| Chapter | Target |
| --- | --- |
| Hero | SI / serpentine words / mobile text circle |
| Qarash | Rotating 3D point sphere with a blue elliptical orbit |
| Anglang | Rising double helix with connecting rungs |
| Sinab ko‘ring | 36 animated columns |
| Ulashtiring | Orbital sphere |
| G‘oyalar signali | Nine expanding elliptical signal rings |
| Tashabbuslar | Low-opacity drifting scatter |
| Shaxsiy reja | Uzbekistan flag: blue/white/green bands, two red separators, white crescent, 12 five-pointed stars in 3/4/5 rows |

Footer fades the field. Do not stop the field when the hero leaves view. Keep particles behind content, pointer-events none, and the existing filter/plan/dialog functions usable. Do not introduce forced scroll snapping.

## Accessibility and verification

Pause freezes the current physics state and the circular menu lettering. Reduced motion snaps to a static target, ignores repulsion and click waves, and preserves ordinary navigation. Initialization failure leaves serif SI visible. Text content remains HTML.

Run `node --test model.test.mjs motion.test.mjs`. Browser checks must also verify visible movement, hero hover/keyboard/tap, every scroll target, pause/resume, narrow screens, dialog focus and no missing motion module. A passing physics test does not prove pixel identity to the reference or replace a visual check.

## Uzbekistan identity — user requirement

Do not restore the US 13-stripe field or red/white/blue branding when adjusting reference motion. `FLAG_STARS`, `uzbekFlagPoints` and `uzbekistan.svg` share the 12-star composition. The flag keeps a 2:1 cloth aspect ratio before its wave deformation. The SVG is the static failure fallback; the live canvas renders the cloth, separators, crescent and all stars as particles. Identity reference: https://gov.uz/oz/narpay/news/view/103093 .
