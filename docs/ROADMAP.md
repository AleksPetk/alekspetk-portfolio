# Roadmap

Phased plan for alekspetk.com. Agents should preferably complete **one phase (or one bounded slice of a phase)** per task.

Status legend for agents updating this file:

- `[ ]` not started
- `[~]` in progress
- `[x]` complete

---

## PHASE 0 — Foundation and documentation

**Status:** `[x]` complete (this phase)

### Goal

Establish a clean technical foundation, documentation system, and guardrails so future agents can continue without reinventing architecture or design direction.

### Work included

- Repository structure
- CSS token + component foundation
- JS navigation / reveal foundation
- Homepage + project page skeletons
- 404 page
- Full `docs/` set + `AGENTS.md` + `README.md`

### Explicitly NOT included

- Final hero artwork
- Real screenshots
- Final copy
- Real external URLs
- Polish animations
- Deployment / custom domain

### Completion criteria

- Structure matches architecture docs
- Pages load via relative paths with CSS/JS
- Docs are internally consistent
- No invented facts/URLs
- Recommended next task is Phase 1

---

## PHASE 1 — Header + Hero

**Status:** `[x]` complete

### Goal

Make the first viewport feel like a real custom portfolio composition.

### Work included

- Header visual polish (transparent → scrolled state)
- Desktop hero layout (left copy / right media)
- Typography hierarchy for name + eyebrow
- CTA buttons wired to `#work` / `#contact`
- Clean media placeholder ready for later asset swap
- Mobile header/hero stacking

### Explicitly NOT included

- Final portrait/artwork generation
- Featured project polish
- About/skills copy
- Complex motion systems

### Completion criteria

- Brand-first hero with AP in nav and full name in hero
- No fake stats
- Responsive first viewport
- Matches `DESIGN_DIRECTION.md`

---

## PHASE 2 — Featured Projects homepage sections

**Status:** `[~]` (structure + Japan47 skin in progress; other panels may still use default dark surface)

### Goal

Build large homepage project panels for featured products (currently CheckStation, QuickCal, Japan47).

### Work included

- Shared `.work__panels` chrome: outer insets, vertical gaps, rounded corners
- Shared `.project-showcase` skeleton (grid, media size, buttons, tags, spacing)
- Alternating large horizontal showcases
- Numbers, titles, descriptions/tags (KNOWN only)
- Media placeholders sized for final imagery
- Links to project detail pages
- **Per-project visual skins** (same skeleton, different identity) — e.g. Japan47 cream/red editorial

### Explicitly NOT included

- Final screenshots
- Final marketing copy
- Store/live links unless KNOWN
- Full project detail page content (except when a separate phase/page task covers it)
- Per-project redesign of showcase dimensions or layout

### Rules (source of truth)

See `DESIGN_DIRECTION.md` and `HOMEPAGE_PLAN.md`:

- Same skeleton / different skin
- Panel side inset + vertical gap + soft radius required
- Homepage identity must preview the detail page

### Completion criteria

- Not a three-card grid
- Distinct large panels with breathing room from edges and each other
- Clear path to each project page
- Each panel recognizable as that product’s brand

---

## PHASE 3 — About + Skills

**Status:** `[x]`

### Goal

Add honest About and Skills sections with approved content only.

### Work included

- About two-column layout + approved bio / At a glance — **done**
- Compact Skills groups (Backend, Frontend, Mobile, Infrastructure, Services / Integrations) — **done**
- Responsive stacking

### Explicitly NOT included

- Invented experience years / employers / awards
- Decorative skill bars that imply false proficiency metrics
- Oversized skill cards that inflate section height

### Completion criteria

- About + Skills content matches owner-approved facts — **met**
- Skills section stays compact and scannable — **met**

---

## PHASE 4 — Contact + Footer

**Status:** `[x]` (contact links + Resume menu + real CV PDFs shipped)

### Goal

Ship a strong contact/pre-footer CTA and consistent footer.

### Work included

- Large contact CTA panel with real Email / GitHub / LinkedIn
- Get In Touch opens email-app chooser (Default Mail App / Gmail / Outlook) for `work@alekspetk.com`
- Global Resume EN/JA View + Download menu across all pages
- Contact aside Resume reuses the global Resume menu
- Footer consistency across pages

### Explicitly NOT included

- Contact forms requiring backends
- Fake social proof
- Shipping CV PDF binaries before they are provided

### Completion criteria

- Clear next step for recruiters — **met**
- Footer not noisy — **met**
- CV PDF files still TODO

---

## PHASE 5 — Project detail page structure

**Status:** `[ ]`

### Goal

Polish the shared project page template before filling project-specific content.

### Work included

- Shared hero/overview/features/tech/gallery/links/next patterns
- Visual consistency with homepage
- Empty-state / TODO treatment that still looks intentional

### Explicitly NOT included

- Project-specific final copy and assets (Phases 6–8 / 9–10)

### Completion criteria

- All three project pages share solid structure
- Ready for per-project content drops

---

## PHASE 6 — CheckStation project page

**Status:** `[x]` (content + theme + links + optimized WebP screenshots shipped)

### Goal

Complete CheckStation detail content within known facts.

### Work included

- Substantial SaaS case study (`projects/checkstation/` + `css/checkstation.css`)
- Global header/footer preserved; light navy/blue SaaS theme scoped to main
- Homepage showcase skin `.project-showcase--checkstation` (same structure)
- Verified links: checkstation.app, workspace, docs, status
- Three primary screenshot placeholders only
- Live web status + separate IN DEVELOPMENT mobile/desktop section (no store/download claims)

### Explicitly NOT included

- Invented URLs
- Fake screenshots or released mobile/desktop claims
- “Next project” section

### Completion criteria

- Page is recruiter-usable with available truth
- Screenshot WebP files can drop into prepared slots later

---

## PHASE 7 — QuickCal project page

**Status:** `[x]` (content + theme + screenshots shipped)

### Goal

Complete QuickCal detail content within known facts.

### Work included

- Compact mobile-oriented case study (`projects/quickcal/` + `css/quickcal.css`)
- Global header/footer preserved; theme scoped to main
- Homepage showcase skin `.project-showcase--quickcal` (same structure)
- Verified App Store + Google Play links
- Phone screenshot placeholders prepared

### Explicitly NOT included

- Website CTA (no web product)
- “Next project” section
- Invented cloud / social / AI / backend claims

### Completion criteria

- Honest, complete-as-possible QuickCal page — **met**
- Optimized phone WebP screenshots shipped on detail + homepage preview

---

## PHASE 8 — Game of Night project page

**Status:** `[ ]`

### Goal

Complete Game of Night detail content within known facts.

### Work included

- Same structural fill for Game of Night
- Allow stronger project-native visuals without breaking site chrome

### Explicitly NOT included

- Turning the whole site into a gaming aesthetic

### Completion criteria

- Honest, complete-as-possible Game of Night page

---

## PHASE 9 — Real assets

**Status:** `[ ]`

### Goal

Replace placeholders with real imagery.

### Work included

- Screenshots, cropping, hero artwork/portrait
- Device presentation if needed
- Icons / favicon finalization
- Follow `ASSET_PLAN.md`

### Explicitly NOT included

- Random stock photos
- Heavy unoptimized dumps

### Completion criteria

- Major placeholders replaced
- Images look intentional at desktop and mobile

---

## PHASE 10 — Real URLs

**Status:** `[ ]`

### Goal

Wire verified external and document links.

### Work included

- Project websites, GitHub, LinkedIn, App Store, Google Play, resume, email
- Update `CONTENT_AND_LINKS.md` statuses from TODO → KNOWN

### Explicitly NOT included

- Guessing or fabricating links

### Completion criteria

- Every visible link resolves to a real destination
- N/A items remain unlabeled as links

---

## PHASE 11 — Effects and motion

**Status:** `[ ]`

### Goal

Add restrained motion that improves hierarchy/presence.

### Work included

- Refine reveal/hover/header transitions
- 2–3 intentional motions max for key moments

### Explicitly NOT included

- Parallax spam, particle systems, distracting loops

### Completion criteria

- Motion respects reduced-motion
- Feels premium, not flashy

---

## PHASE 12 — Responsive / mobile polish

**Status:** `[ ]`

### Goal

Make every major breakpoint feel designed, not merely stacked.

### Work included

- Mobile nav UX
- Typography scaling
- Showcase stacking
- Touch targets

### Explicitly NOT included

- Separate mobile-only redesign language

### Completion criteria

- Passes mobile/tablet items in `QA_CHECKLIST.md`

---

## PHASE 13 — Accessibility

**Status:** `[ ]`

### Goal

Harden semantics, keyboard use, focus, contrast, and announcements.

### Work included

- Audit headings, labels, focus-visible, menu behavior
- Contrast checks
- Reduced-motion verification

### Explicitly NOT included

- Over-ARIA that harms accessibility

### Completion criteria

- Passes accessibility checklist

---

## PHASE 14 — SEO / Open Graph / metadata

**Status:** `[ ]`

### Goal

Finalize titles, descriptions, canonicals, OG images, favicons.

### Work included

- Replace TODO metadata
- Per-page unique descriptions
- OG image asset

### Explicitly NOT included

- Keyword stuffing
- Fake rich-result markup

### Completion criteria

- Metadata complete and accurate

---

## PHASE 15 — Performance optimization

**Status:** `[ ]`

### Goal

Keep the site fast on real devices.

### Work included

- Image compression / modern formats if appropriate
- Remove unused CSS/JS
- Verify no expensive effects

### Explicitly NOT included

- Introducing a bundler solely for micro-gains

### Completion criteria

- Sensible image weights; clean network waterfalls for a static site

---

## PHASE 16 — GitHub Pages deployment

**Status:** `[ ]`

### Goal

Publish the static site on GitHub Pages.

### Work included

- Repo remote + Pages settings
- Verify 404 behavior
- Verify asset paths on hosted URL

### Explicitly NOT included

- Custom domain (Phase 17)

### Completion criteria

- Public Pages URL loads correctly

---

## PHASE 17 — Custom domain alekspetk.com

**Status:** `[ ]`

### Goal

Attach and verify `alekspetk.com`.

### Work included

- DNS + Pages custom domain
- HTTPS
- Canonical URL updates

### Explicitly NOT included

- Unrelated product features

### Completion criteria

- https://alekspetk.com serves the portfolio

---

## PHASE 18 — Final recruiter-oriented review

**Status:** `[ ]`

### Goal

End-to-end review as if submitting a job application tomorrow.

### Work included

- Content honesty check
- Link check
- Visual consistency check
- Mobile + accessibility smoke test
- Remove leftover TODO markers that should be resolved

### Explicitly NOT included

- Last-minute redesign of visual direction

### Completion criteria

- Site is application-ready
- Remaining TODOs (if any) are consciously accepted

---

## Recommended next task after Phase 1

**PHASE 2 — Featured Projects homepage sections**

Do not start Phase 2 automatically unless instructed.
