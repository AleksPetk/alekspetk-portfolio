# Design Direction

**Read this before any visual work.**

Agreed direction: **Dark Cinematic Professional Developer Portfolio**.

The site must feel custom-designed for a serious job-application context — not like a template, SaaS marketing page, fake terminal, or game UI.

## Core qualities

- Very dark **navy / charcoal** foundation (not pure black everywhere)
- Strong **white** typography
- Muted **cool-gray** supporting text
- Subtle **electric-blue** accents
- Controlled **deep-purple** lighting (atmosphere, not decoration spam)
- Cinematic atmosphere and large editorial typography
- Generous spacing and strong visual hierarchy
- Large project imagery
- Subtle borders and layered dark surfaces
- Restrained glow
- Tasteful movement
- Premium composition
- Professional enough for serious employers

Projects themselves should supply much of the color and personality. **Do not force the same blue/purple treatment over every project screenshot.**

## Color philosophy

Use tokens in `css/variables.css`:

- Background / soft background / surfaces for depth
- Text + muted text for hierarchy
- Border for quiet structure
- Blue for primary actions and sparse accents
- Purple as secondary atmospheric light
- Glow used sparingly on interaction, never as permanent neon noise

Prefer layered dark surfaces over flat pure black. Accent color should guide attention, not dominate.

## Typography philosophy

- Large, editorial display type for hero name and major headings
- Clear hierarchy: display → section heading → body → muted meta
- Generous line-height for body; tighter leading for display
- Wide letter-spacing for small uppercase labels/eyebrows only
- Avoid default “AI portfolio” font clichés when custom fonts are introduced later; until then, clean system-adjacent stacks are acceptable in foundation

Do not let supporting copy overpower the brand name in the hero.

## Spacing philosophy

- One composition per viewport when possible
- Section spacing should feel cinematic (`--section-space`), not cramped card grids
- Gutters via `--page-gutter`
- Prefer empty space over decorative filler
- Each section: one purpose, one headline, usually one short supporting sentence

## Project imagery philosophy

- Large media areas, not tiny thumbnails in equal cards
- Screenshots and product UI carry color/personality
- Placeholders until real assets exist (no stock photography)
- Crop for clarity of product UI; avoid busy device-mock spam unless intentionally designed
- Per-project visual identity is required on homepage showcases and matching detail pages (see below)

## Header direction

- Left: **AP** mark only (never full name in the main nav brand)
- Right: Work · About · Skills · Contact · Resume
- Resume opens a global CV menu (English CV + 履歴書 + 職務経歴書 · View / Download) — identical on every page
- Sticky
- Almost transparent at top; subtle dark surface + border after scroll
- Clean mobile navigation
- No unnecessary social icons in the main nav
- **Same header on every page** (homepage + all project pages) — never replace with a project-themed header
- Do **not** build project-specific Resume menus

## Hero direction

Desktop concept:

**Left**

- Eyebrow: `SOFTWARE DEVELOPER / PRODUCT BUILDER`
- Large heading: `ALEKSANDAR` / `PETKOV`
- Short positioning statement
- Buttons: View My Work · Get In Touch

**Right**

- Large cinematic visual area (portrait / custom artwork later)
- Clean media placeholder for now — easy to replace
- No stock photography
- No fake statistics

Brand-first: the name is a hero-level signal. The first viewport should not look like it could belong to any other brand after removing the nav.

## Project-showcase direction (homepage)

**Same skeleton, different skin.**

The surrounding site stays dark cinematic. Each featured project is a large **panel** inside `.work__panels` that may fully adopt that product’s visual identity.

### Visual identity (per project — allowed)

Each showcase **must** inherit the identity of the project it represents. Allowed to change:

- background color (including full light themes when the product is light, e.g. Japan47 cream)
- accent colors
- title typography personality (e.g. serif for Japan47)
- button colors
- tag colors
- border styling
- subtle project-specific atmosphere

Example — Japan47:

- warm beige / cream background
- Japan red accents
- dark green / charcoal text
- serif display typography
- light editorial language

The user should feel the project’s identity **before** clicking View Project. The homepage panel is a visual preview of the detail page.

### Structure (shared — non-negotiable)

Do **not** change per project:

- section height / width behavior
- overall grid
- content positioning system
- screenshot/media area size or placement
- internal spacing system
- button dimensions
- tag dimensions
- responsive structure

New projects reuse `.project-showcase` (+ optional modifier class). Never invent a one-off layout.

### Outer panel chrome (shared)

Project panels must **not** touch each other or the browser edges.

| Viewport | Side inset | Vertical gap | Corner radius |
| --- | --- | --- | --- |
| Desktop | ~16–20px | ~10–16px | ~20–24px |
| Tablet | ~12–16px | ~10–14px | ~16–20px |
| Mobile | ~8–12px | ~8–12px | ~16–20px |

- Gaps stay subtle — panels remain large and immersive, not tiny floating cards
- Softly rounded outer corners; clip backgrounds/gradients/media with `overflow: hidden`
- Avoid sharp full-bleed slabs and excessive pill rounding

Implementation: `.work__panels` + `.project-showcase` in `css/components.css` / `css/responsive.css`.

### Include

- Number, name, short description, tags, large media, View Project
- Live/store links when KNOWN
- Alternating text/media where useful
- **Not** three tiny equal cards

## Footer direction

- Quiet, consistent, structural
- AP + short identity line
- Minimal nav links
- No noisy icon walls unless later approved
- **Same footer on every page** — dark alekspetk.com branding; project themes end before the footer

## Animation philosophy

- Tasteful presence and hierarchy — not noise
- Prefer subtle reveals, header state, and restrained hover
- Always respect `prefers-reduced-motion`
- Do not invent complex animation systems early (see Roadmap Phase 11)

## Branding rules

| Element | Rule |
| --- | --- |
| Header brand | `AP` only |
| Hero name | `Aleksandar Petkov` |
| Positioning | Software Developer · Product Builder |
| Claims | Never invent years, clients, awards, user counts, revenue, testimonials |

## DO NOT

- Use generic portfolio templates or SaaS marketing layouts
- Build a fake terminal / hacker aesthetic
- Use excessive glassmorphism
- Use excessive rounded cards / card grids as the main pattern
- Use uncontrolled glow, neon trails, or gaming UI chrome
- Drop random stock imagery
- Add fake stats, fake testimonials, or fake employment claims
- Force identical blue/purple overlays on every project image
- Redesign showcase dimensions or invent a new layout per project
- Drop outer panel insets / rounded corners on homepage showcases
- Visually redesign the site direction without **explicit** instruction
- Put social icon clusters in the primary header nav
- Fill unfinished sections with generic AI marketing copy

## Related docs

- Homepage sections: `HOMEPAGE_PLAN.md`
- Project pages: `PROJECT_PAGE_PLAN.md`
- Assets: `ASSET_PLAN.md`
- Tokens: `../css/variables.css`
