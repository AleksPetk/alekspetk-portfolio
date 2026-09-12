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
│   │   ├── game-of-night/
│   │   └── japan47/
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

- Full-width cinematic background: `hero-cinematic.webp` (shipped; ~112 KB)
- Optional legacy: `hero-portrait.webp` (not used on homepage after cinematic hero)
- Raw source PNGs are kept out of the public repo to avoid multi‑MB deploy weight

Recommended slots:

- Homepage hero backdrop ≈ **16:9** cinematic cover
- CSS `background-position` tuned per breakpoint so the portrait stays visible on the right

Rules:

- No random stock photography
- Do not bake site text/buttons into the artwork
- Keep source PNG untouched; ship optimized WebP

---

## CheckStation

Folder: `assets/images/projects/checkstation/`

Primary screenshot slots (only these three on the detail page):

- `checkstation-public.webp` — Public marketing site (hero + shot 1) — 1600×900
- `checkstation-workspace.webp` — Authenticated workspace dashboard (shot 2 + homepage showcase) — 1600×900
- `checkstation-kiosk-editor.webp` — Kiosk editor (shot 3) — 1600×900

Shipped optimized WebP (no raw originals in repo).

Detail page (`projects/checkstation/`):

- Wide browser-style frames; natural aspect ratio for images when wired
- No under-image captions; short contextual text beside / above
- Do **not** add more screenshots unless explicitly requested
- Scoped light SaaS theme via `css/checkstation.css` on **main** only
- Mobile / desktop apps: IN DEVELOPMENT presentation only (no fake store UI)

Homepage showcase (`.project-showcase--checkstation`):

- Outer media slot stays shared **16:10 / wide** dimensions
- Prepare for `checkstation-workspace.webp`; use placeholder until file exists
- Deep navy / blue / cyan product skin — not generic portfolio dark chrome

Do not invent fake product UI.

---

## QuickCal

Folder: `assets/images/projects/quickcal/`

Shipped optimized WebP (no raw originals in repo):

- `quickcal-phone-home.webp` — Home / Quick Log (600×1200)
- `quickcal-phone-lifetime.webp` — Lifetime unlock (600×1200)

Detail page (`projects/quickcal/`):

- Tall phone frames only; natural aspect ratio (`width: 100%`, `height: auto`)
- Do **not** use 16:9 browser-style boxes
- No under-image captions
- Scoped light gray / green theme via `css/quickcal.css` on **main** only

Homepage showcase (`.project-showcase--quickcal`):

- Outer media slot stays shared **16:10 / wide** dimensions
- Centered portrait phone on soft off-white / light-gray stage with subtle green wash — no stretch into 16:9

Do not invent fake app UI.

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

## Japan47

Folder: `assets/images/projects/japan47/`

Shipped optimized WebP (no raw originals in repo):

- `japan47-web-main.webp` — homepage / discovery (1600×900)
- `japan47-web-secondary-1.webp` — places page (1600×900)
- `japan47-web-secondary-2.webp` — region page (1600×900)
- `japan47-phone.webp` — iPhone (600×1200)
- `japan47-tablet.webp` — iPad portrait (900×1200)

Frames use natural image aspect ratios (`width: 100%`, `height: auto`) so full screenshots are preserved without stretch.

Case-study page (`projects/japan47/`) uses Japan47-native cream / red editorial styling scoped in `css/japan47.css`. Do not apply that theme to the homepage.

---

## About / misc / icons

- About: optional personal/work context image
- Misc: Open Graph share image (≈ 1200×630)
- Icons: favicon SVG/PNG set; apple-touch later if desired
- Resume: PDFs in `assets/documents/resume/`
  - `aleksandar-petkov-cv-en.pdf` — English CV
  - `aleksandar-petkov-rirekisho-ja.pdf` — 履歴書
  - `aleksandar-petkov-shokumukeirekisho-ja.pdf` — 職務経歴書
  - Global header Resume menu: English + Japanese sections with View / Download per document

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
checkstation-public.webp
checkstation-workspace.webp
checkstation-kiosk-editor.webp
quickcal-phone-home.webp
japan47-web-main.webp
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
