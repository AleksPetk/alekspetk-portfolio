# Homepage Plan

The homepage is a **major page**, not a small card grid. Planned sections below.

Anchors: `#work` · `#about` · `#skills` · `#contact`

---

## 1. Header

### Purpose

Persistent orientation and navigation without stealing focus from the hero.

### Content

- Left: **AP** (home link)
- Right: Work, About, Skills, Contact, Resume
- Mobile: toggle button + expandable nav

### Layout intention

- Full-width sticky bar
- Inner aligned to container max width
- Almost transparent over hero; subtle dark surface + bottom border when scrolled

### Responsive intention

- Desktop: horizontal links
- Mobile: icon button; panel/drawer under header; Escape closes; link click closes

### Planned interactions

- Scroll state class on header
- Keyboard-accessible mobile menu (`aria-expanded`)
- Focus-visible styles

### Assets still needed

- Optional refined AP mark (text mark is acceptable initially)
- Resume file when available

---

## 2. Hero

### Purpose

Establish brand, name, and positioning immediately for recruiters.

### Content

- Eyebrow: Software Developer / Product Builder
- Heading: Aleksandar Petkov (stacked lines)
- Short positioning statement (approved later)
- CTAs: View My Work · Get In Touch
- Right: large media placeholder → later portrait/cinematic artwork

### Layout intention

- Desktop: two columns — copy left, media right
- One composition; no stats strips, no promo chips on media
- Brand-level typography for the name

### Responsive intention

- Mobile: stack copy then media; keep CTAs usable; reduce display size via fluid type

### Planned interactions

- CTA anchor scrolls
- Optional subtle reveal (Phase 11 refinement)

### Assets still needed

- Hero portrait or custom artwork
- Optional soft background treatments (not stock photos)

---

## 3. Featured Projects

### Purpose

Show real products at a scale that communicates seriousness.

### Content

For each of CheckStation, QuickCal, Game of Night:

- Project number
- Name
- Short description
- Technology tags
- Large image/media
- View Project
- Live/external/store links when KNOWN

### Layout intention

- Large horizontal showcases
- Alternating text/media where useful
- Separated by quiet borders / spacing — **not** equal mini-cards

### Responsive intention

- Tablet/desktop: two-column showcase
- Mobile: media stacks with text; maintain large media presence

### Planned interactions

- Primary button to project page
- Optional secondary outbound links (Phase 10)

### Assets still needed

- Per-project hero/showcase imagery (see `ASSET_PLAN.md`)
- Approved short descriptions and tags (`CONTENT_AND_LINKS.md`)

---

## 4. About

### Purpose

Human context for the work — concise and honest.

### Content

- Section label + heading
- Short about copy (pending approval)
- Optional supporting image later

### Layout intention

- Narrower reading measure
- Calm, editorial spacing
- Avoid timeline fluff unless real and useful

### Responsive intention

- Single column; comfortable type size

### Planned interactions

- Minimal; optional reveal

### Assets still needed

- Approved bio copy
- Optional about image

---

## 5. Skills / Technologies

### Purpose

Quick scan of real capabilities relevant to hiring.

### Content

- Grouped technologies actually used
- Tags, not fake percentage bars

### Layout intention

- Simple groups in a responsive grid
- Quiet tags consistent with components

### Responsive intention

- 1 → 2 → 3 columns by breakpoint

### Planned interactions

- None required

### Assets still needed

- Owner-approved skill groups/list

---

## 6. Contact / large pre-footer CTA

### Purpose

Make the next step obvious for recruiters.

### Content

- Strong heading
- Short supporting line
- Primary contact action (email when KNOWN)
- Optional secondary links (LinkedIn, GitHub, Resume) when KNOWN

### Layout intention

- Large panel with subtle surface/lighting
- Spacious; one job only

### Responsive intention

- Full-width panel inside container; buttons wrap cleanly

### Planned interactions

- `mailto:` / outbound links when real

### Assets still needed

- Email, LinkedIn, GitHub, resume path (`CONTENT_AND_LINKS.md`)

---

## 7. Footer

### Purpose

Quiet closure and redundant navigation.

### Content

- AP
- Short identity line
- Links: Work, About, Skills, Contact (as appropriate)

### Layout intention

- Simple split layout; border-top separator
- No social icon walls in foundation

### Responsive intention

- Stack on small screens

### Planned interactions

- Standard links

### Assets still needed

- None critical

---

## Explicit homepage anti-patterns

- Three equal project cards as the main work presentation
- Fake stats in the hero
- Stock photography
- Template SaaS sections (“trusted by”, logo clouds, testimonials)
- Overstuffed first viewport
