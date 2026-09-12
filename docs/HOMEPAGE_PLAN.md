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
- Resume: shared English / Japanese dropdown (English CV + 履歴書 + 職務経歴書; View opens PDF in new tab; Download uses `download`)
- Mobile: toggle button + expandable nav

### Layout intention

- Full-width sticky bar
- Inner aligned to container max width
- Almost transparent over hero; subtle dark surface + bottom border when scrolled

### Responsive intention

- Desktop: horizontal links + Resume popover
- Mobile: icon button; panel/drawer under header; Escape closes; link click closes; Resume menu stacks inside the panel

### Permanent rules

- Contact section shows real Email (`work@alekspetk.com`), GitHub, LinkedIn
- Get In Touch opens the visitor’s email app — **no contact form**
- GitHub: `https://github.com/AleksPetk`
- LinkedIn: `https://www.linkedin.com/in/aleksandar-petkov-7a90b4435/`
- Resume behavior is **global** across homepage and all project pages
- CV PDF files may land later; keep the menu paths ready without fake PDFs

### Planned interactions

- Scroll state class on header
- Keyboard-accessible mobile menu (`aria-expanded`)
- Focus-visible styles

### Assets still needed

- Optional refined AP mark (text mark is acceptable initially)
- Resume PDF files: `aleksandar-petkov-cv-en.pdf`, `aleksandar-petkov-rirekisho-ja.pdf`, `aleksandar-petkov-shokumukeirekisho-ja.pdf`

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

For each of CheckStation, QuickCal, Japan47 (and future projects):

- Project number
- Name
- Short description
- Technology / platform tags (KNOWN only)
- Large image/media
- View Project → matching `projects/*.html`
- Live/external/store links when KNOWN

### Same skeleton, different skin (non-negotiable)

**Structure stays identical** across all homepage project panels:

- section height / width behavior
- grid and content positioning
- media size and placement
- internal spacing system
- button and tag dimensions
- responsive behavior

**Visual identity may fully change** per project:

- background color (including light product themes)
- accent colors
- title typography personality
- button / tag / border colors
- subtle atmosphere

Example — Japan47 (`.project-showcase--japan47`):

- warm beige / cream panel background
- Japan red accents
- dark charcoal / green text
- Shippori Mincho (serif) title: cream/ink `Japan` + red `47`
- light editorial language matching `projects/japan47.html`

Example — QuickCal (`.project-showcase--quickcal`):

- soft light gray / off-white panel background
- fresh green primary + subtle lime atmosphere
- dark text / muted gray copy
- Plus Jakarta Sans title
- 16:9 media slot keeps shared dimensions; inner phone presentation holds portrait screenshots later
- light native-mobile language matching `projects/quickcal.html`

Example — CheckStation (`.project-showcase--checkstation`):

- deep navy / blue panel with cyan accents (product branding; not generic portfolio dark)
- white / light-gray text
- Plus Jakarta Sans title
- shared 16:10 media slot prepared for `checkstation-workspace.webp`
- language matching `projects/checkstation.html` (live SaaS; apps in development are detail-page only)

Do **not** invent a separate incompatible layout for a new project. Reuse `.project-showcase` + a project modifier class.

### Outer panel chrome

Panels live in `.work__panels` and must not touch each other or the page edges.

| Viewport | Side inset | Vertical gap | Corner radius |
| --- | --- | --- | --- |
| Desktop | ~16–20px | ~10–16px | ~20–24px |
| Tablet | ~12–16px | ~10–14px | ~16–20px |
| Mobile | ~8–12px | ~8–12px | ~16–20px |

- Keep gaps subtle; panels stay large and immersive
- Soft rounded corners; `overflow: hidden` clips project backgrounds
- Not tiny floating cards; not sharp full-bleed slabs

### Layout intention

- Large horizontal showcases inside shared panel chrome
- Alternating text/media where useful (`project-showcase--reverse`)
- Section header stays in `.container`; panels sit below in `.work__panels`

### Relationship to project detail pages

Homepage showcase identity ↔ detail page **main content** identity.

The panel is a **visual preview** of the richer case-study page (e.g. Japan47 cream/red editorial continues inside `projects/japan47.html` `main` via `css/japan47.css`).

Global **header and footer** stay the dark alekspetk.com shell on every page — never project-themed.

### Adding a future project

1. Reuse the same `.project-showcase` structure
2. Keep dimensions, spacing, and panel chrome rules
3. Apply the product’s own visual identity via a modifier class
4. Create/update the detail page with the **same** identity
5. Wire View Project to that page
6. Keep scale/structure consistent with sibling panels

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

- Label: About
- Heading: I like building things from the ground up.
- Three short paragraphs (backend/full-stack, plan-before-build, open to roles)
- Right rail: At a glance (Focus, What I enjoy, Approach, Based in, Languages, Looking for)

### Layout intention

- Desktop (~900px+): two columns — copy left, At a glance right
- Spacious, personal, recruiter-friendly
- No portrait/photo; no invented metrics, employers, or years of experience

### Responsive intention

- Stack: copy first, At a glance below
- Compact rows; no horizontal overflow

### Planned interactions

- Minimal; optional reveal

### Assets still needed

- None required for About copy

---

## 5. Skills / Technologies

### Purpose

Quick scan of real capabilities relevant to hiring.

### Content

- Label: Capabilities
- Heading: Skills / Technologies
- Short intro (one line)
- Five compact groups: Backend, Frontend, Mobile, Infrastructure, Services / Integrations
- Real technologies only — see `CONTENT_AND_LINKS.md`

### Layout intention

- Dense multi-column grid (5 cols desktop → 3 tablet → 2 mobile)
- Lightweight groups with left accent border — **not** large cards or pill walls
- Keep section height close to the original compact footprint

### Responsive intention

- Tighten columns by breakpoint; no horizontal overflow

### Planned interactions

- Subtle hover brighten on group / list text only

### Assets still needed

- None

---

## 6. Contact / large pre-footer CTA

### Purpose

Make the next step obvious for recruiters.

### Content

- Strong heading
- Short supporting line
- Primary contact action: **Get In Touch** opens an email-app chooser (Default Mail App / Gmail / Outlook) for `work@alekspetk.com` with subject `Portfolio contact — Aleksandar Petkov`
- Subtle note: “Choose your preferred email app — no contact form.”
- Contact channels on the left are **informational text only** (not links)
- Right side (“Prefer another way?”): clickable Email / GitHub / LinkedIn / Resume actions
- Resume on the right reuses the **global** header Resume menu (no duplicate implementation)

### Layout intention

- Large panel with subtle surface/lighting
- Two-column balance on desktop (primary left, spacious link list right); stacked on mobile
- Do **not** grow the outer panel footprint or invent a contact form / backend

### Responsive intention

- Full-width panel inside container; buttons wrap cleanly
- Aside stacks under primary content on small screens

### Planned interactions

- Email chooser: outside click + Escape close; keyboard accessible
- Email address + Default Mail App use `mailto:`
- Gmail / Outlook web compose open in a new tab with `rel="noopener noreferrer"`
- GitHub / LinkedIn open in a new tab with `rel="noopener noreferrer"`
- Aside Resume triggers the shared header Resume dropdown

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
