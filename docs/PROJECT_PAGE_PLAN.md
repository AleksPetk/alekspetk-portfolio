# Project Page Plan

Reusable specification for major project detail pages.

Initial pages:

- `projects/checkstation/`
- `projects/quickcal/` (QuickCal-native theme via `css/quickcal.css`)
- `projects/game-of-night.html`
- `projects/japan47/` (Japan47-native theme via `css/japan47.css`)

## Shared layout

Every project page uses:

1. **Global `site-header`** — identical to homepage (dark alekspetk.com shell)
2. **Project-themed `main` content** — product visual identity lives here only
3. **Global `site-footer`** — identical to homepage (dark alekspetk.com shell)

Hierarchy:

```
GLOBAL PORTFOLIO HEADER
→ PROJECT-SPECIFIC CONTENT WORLD
→ GLOBAL PORTFOLIO FOOTER
```

Do **not** invent project-specific headers or footers (no light Japan47 nav, etc.).

### Header (all project pages)

Reuse homepage markup (`.site-header`, nav toggle, edge divider). Paths from `projects/`:

- AP → `../index.html`
- Work → `../../index.html#work`
- About → `../../index.html#about`
- Skills → `../../index.html#skills`
- Contact → `../../index.html#contact`
- Resume → global EN/JA dropdown (same shared markup/behavior as homepage; PDF paths under `../../assets/documents/resume/`)

Include `navigation.js` (+ `main.js` bootstrap) so sticky/mobile/Resume menu behavior matches.

### Footer (all project pages)

Reuse homepage `.site-footer` structure and dark styling. Links back to homepage anchors (Work, About, Skills, Contact).

### Resume (global rule)

Do **not** invent project-specific Resume menus. Every page uses the identical header Resume control:

- English — English CV — View / Download → `aleksandar-petkov-cv-en.pdf`
- Japanese — 履歴書 — View / Download → `aleksandar-petkov-rirekisho-ja.pdf`
- Japanese — 職務経歴書 — View / Download → `aleksandar-petkov-shokumukeirekisho-ja.pdf`
- View: new tab · Download: `download` attribute
- Closes on outside click + Escape; keyboard accessible
- PDFs may be missing until provided — keep paths ready; do not add fake PDF files

### Main content order

Typical case-study sections inside `main`:

1. Project hero
2. Overview
3. Features / core experience
4. Media (web / mobile as needed)
5. Tech stack
6. What I built (contribution)
7. Links / CTA

Do **not** include a “Next project” section by default. Case studies end at the links/CTA block, then flow into the global portfolio footer with normal section spacing.

Keep structure consistent so recruiters learn the pattern quickly. Visual identity **inside main** must match the homepage showcase for that project — richer detail page, same design language.

## Homepage ↔ detail page relationship

| Surface | Role |
| --- | --- |
| Global header/footer | Always alekspetk.com dark shell — never project-themed |
| Homepage `.project-showcase` | Same skeleton as siblings; **project-specific skin**; visual preview |
| Detail `main` content | Same project identity, expanded case study |

Example — Japan47:

- Homepage: `.project-showcase--japan47` — cream panel, red accents, serif title
- Detail: `body.project-japan47` + `css/japan47.css` scoped to **`.page__main` only** — same beige / red / editorial language
- Header/footer: shared `.site-header` / `.site-footer`

Example — QuickCal:

- Homepage: `.project-showcase--quickcal` — soft gray/off-white panel, green accents, Plus Jakarta Sans title
- Detail: `body.project-quickcal` + `css/quickcal.css` scoped to **`.page__main` only** — same light native-mobile language
- Compact mobile case study (two phone screenshots max); no website CTA; no “Next project”
- Header/footer: shared `.site-header` / `.site-footer`

Example — CheckStation:

- Homepage: `.project-showcase--checkstation` — deep navy / blue / cyan panel, Plus Jakarta Sans title
- Detail: `body.project-checkstation` + `css/checkstation.css` scoped to **`.page__main` only** — light SaaS (white/gray, navy, blue, cyan)
- Substantial live SaaS case study; **only 3 primary screenshots**; mobile/desktop shown as IN DEVELOPMENT (no store badges)
- Header/footer: shared `.site-header` / `.site-footer`

Do not ship a homepage panel that looks like generic portfolio chrome while the detail **content** looks like an unrelated product brand (or the reverse). Do not restyle the global shell per project.

**Rule:** same homepage showcase structure; different project-specific visual identity.

## Project hero

Include:

- Title
- Short description
- Project type / category
- Status
- Technology tags
- Large hero visual
- Primary live link **only if KNOWN**

Layout: content + media grid on desktop; stacked on mobile.

## Overview

Clear blocks such as:

- **What it is** / Problem
- **Why it exists** / Solution
- **My role**

Use approved copy only. Prefer concise paragraphs over buzzword lists.

## Features

Key feature sections:

- Feature title
- Short explanation
- Optional supporting image later

Do not invent features. If unknown, leave an honest TODO note in content docs and a minimal placeholder in HTML.

## Tech stack

Structured groups (examples of grouping — fill with real tools only):

- Frontend
- Backend / services
- Mobile
- Tooling / other

Render as tags or short lists, consistent with homepage components.

## Gallery

Slots for:

- Screenshots
- Product images
- Mobile / desktop views

Use placeholders until Phase 9 assets arrive. Alt text must describe real content when images exist.

## Links

Possible outbound links (include only when KNOWN / applicable):

- Live website
- App Store
- Google Play
- GitHub
- Documentation
- Demo

Never invent unavailable URLs. Prefer marking gaps in `CONTENT_AND_LINKS.md` over placeholder `https://example.com` links.

## Footer

Always use the **global** `.site-footer` (dark portfolio identity). Project-specific colors stop when `main` ends. After the final CTA / links section, leave clean section padding before the footer — no interstitial “Next project” block.

## Per-project visual identity

Allowed:

- Full project-native theme on **main content** (scoped CSS, e.g. `japan47.css` under `.page__main`) when the product brand is strong
- Matching homepage showcase modifier (e.g. `.project-showcase--japan47`)
- Project-native screenshot color/UI chrome
- Slightly different gallery rhythm (phone vs desktop emphasis)
- Project-specific hero crop

Not allowed:

- Project-specific **header** or **footer** (must reuse global shell)
- Rewriting the **homepage showcase skeleton** (grid, media size, button size, panel chrome) per project
- One-off CSS frameworks or parallel design systems
- Gaming UI takeover of the whole alekspetk.com shell beyond the project page main / homepage panel

## Implementation notes for agents

When adding a project:

1. Reuse homepage `.project-showcase` structure + panel chrome (`.work__panels`)
2. Add a modifier class for the product skin — do not change dimensions
3. Copy an existing project HTML file; keep **global** header/footer markup
4. Scope theme CSS to `main` / `.page__main` only (never header/footer)
5. Match homepage panel identity ↔ detail **content** identity
6. Wire View Project to the detail page
7. Update paths, titles, and `assets/images/projects/<slug>/`
8. Sync facts with `CONTENT_AND_LINKS.md` and `ASSET_PLAN.md`
9. Do **not** add a “Next project” section unless explicitly requested
