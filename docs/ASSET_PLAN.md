# Asset Plan

Do **not** generate final marketing assets in foundation tasks unless explicitly asked.

Goal: know what slots exist, how to crop, and where files live.

## Folder map

```
assets/
├── images/
│   ├── hero/                 # Homepage hero visual
│   ├── projects/
│   │   ├── checkstation/
│   │   ├── quickcal/
│   │   └── game-of-night/
│   ├── about/
│   └── misc/                 # OG image, shared graphics
├── icons/                    # Favicon and small icons
└── documents/
    └── resume/               # Resume PDF when available
```

Optional local originals (not required in git): `assets/_originals/` (ignored).

---

## Hero

Planned / current:

- Full-width cinematic background: `hero-cinematic.webp` (from `hero-cinematic-source.png`)
- Optional legacy portrait crop assets: `hero-portrait-source.png` / `hero-portrait.webp` (not used on homepage after cinematic hero)

Recommended slots:

- Homepage hero backdrop ≈ **16:9** cinematic cover
- CSS `background-position` tuned per breakpoint so the portrait stays visible on the right

Rules:

- No random stock photography
- Do not bake site text/buttons into the artwork
- Keep source PNG untouched; ship optimized WebP

---

## CheckStation

Planned:

- Desktop screenshots
- Mobile screenshots (if applicable)
- Product UI close-ups
- Logos only if needed for clarity

Recommended slots:

- Homepage showcase / project hero ≈ **16:10** wide
- Gallery mix: 16:10 desktop + 9:16 mobile if product has both

---

## QuickCal

Planned:

- iPhone screenshots
- Android screenshots
- App icon if appropriate

Recommended slots:

- Phone frames ≈ **9:19.5** or standard store screenshot ratios
- Homepage showcase may use a composed device presentation later (Phase 9)

---

## Game of Night

Planned:

- Gameplay captures
- Menus
- Backgrounds
- Character / key art

Recommended slots:

- Wide cinematic stills ≈ **16:9** or **16:10**
- Additional vertical art only if it strengthens the gallery

Keep Game of Night color inside media; do not restyle the entire site into a game theme.

---

## About / misc / icons

- About: optional personal/work context image
- Misc: Open Graph share image (≈ 1200×630)
- Icons: favicon SVG/PNG set; apple-touch later if desired
- Resume: PDF in `assets/documents/resume/`

---

## Cropping principles

- Crop for **readable UI**, not decorative margins
- Prefer product clarity over heavy device bezels unless bezels are intentional
- Keep faces/UI focal points away from aggressive edge crops
- Avoid inconsistent shadow styles across projects
- Do not overlay fake UI chrome that misrepresents the product

## Retina / sizing

- Export 1x and 2x when practical, or a single high-res asset scaled down in CSS
- Do not ship multi‑MB PNGs for simple UI shots when compressed WebP/AVIF/JPEG is enough

## Formats

- Foundation may use SVG (icons) and later JPG/PNG/WebP/AVIF
- Prefer modern formats in Phase 15 after visual QA
- Keep originals separate from optimized web assets when editing heavily

## Naming suggestions

```
hero-portrait.webp
checkstation-desktop-01.webp
checkstation-mobile-01.webp
quickcal-iphone-01.webp
game-of-night-gameplay-01.webp
og-default.jpg
favicon.svg
resume.pdf
```

## Phase mapping

- Phase 0: folders + placeholders only
- Phase 9: real assets
- Phase 14: OG image finalization
- Phase 15: compression / modern formats
