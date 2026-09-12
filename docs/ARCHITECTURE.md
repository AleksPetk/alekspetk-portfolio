# Architecture

Keep this architecture intentionally simple. Do not introduce alternate structures without updating this document and receiving explicit approval.

## Repository structure

```
/
├── index.html                 # Homepage
├── 404.html                   # Branded not-found page
├── README.md
├── AGENTS.md
├── .gitignore
│
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── global.css
│   ├── components.css
│   ├── home.css
│   ├── project.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── animations.js
│   └── project.js
│
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   │   ├── checkstation/
│   │   │   ├── quickcal/
│   │   │   └── game-of-night/
│   │   ├── about/
│   │   └── misc/
│   ├── icons/
│   └── documents/
│       └── resume/
│
├── projects/
│   ├── checkstation/
│   │   └── index.html
│   ├── quickcal/
│   │   └── index.html
│   ├── japan47/
│   │   └── index.html
│   ├── checkstation.html      # tiny redirect → /projects/checkstation/
│   ├── quickcal.html          # tiny redirect → /projects/quickcal/
│   ├── japan47.html           # tiny redirect → /projects/japan47/
│   └── game-of-night.html     # unpublished / noindex stub
│
└── docs/                      # Source of truth for agents & humans
```

## CSS responsibilities

| File | Responsibility |
| --- | --- |
| `reset.css` | Minimal modern reset; focus-visible baseline |
| `variables.css` | Design tokens (color, layout, type, space, radius, motion) |
| `global.css` | Document defaults, skip link, utilities, reduced-motion |
| `components.css` | Reusable primitives: container, section, buttons, tags, header, nav, footer, placeholders, showcase shell |
| `home.css` | Homepage-specific section layouts (hero, work, about, skills, contact, 404 helpers) |
| `project.css` | Shared project detail page structure |
| `responsive.css` | Breakpoint adaptations and mobile nav layout |

**Rule:** Prefer extending existing files over creating new CSS entry points. Avoid duplicating selectors across files.

### Stylesheet include order

Homepage:

1. reset → variables → global → components → home → responsive

Project pages:

1. reset → variables → global → components → project → responsive

## JavaScript responsibilities

| File | Responsibility |
| --- | --- |
| `main.js` | Bootstrap; marks `js-enabled`; calls module inits |
| `navigation.js` | Mobile menu + sticky header scroll state |
| `animations.js` | Optional IntersectionObserver reveal; respects reduced motion |
| `project.js` | Project-page helpers (intentionally minimal until needed) |

**Rule:** Keep JS small. No libraries. No speculative features.

### Script include order

`navigation.js` → `animations.js` → `project.js` → `main.js` (all `defer`)

## Asset organization

- `assets/images/hero/` — homepage hero visual
- `assets/images/projects/<slug>/` — per-project screenshots and media
- `assets/images/about/` — about imagery if needed
- `assets/images/misc/` — OG image, shared graphics
- `assets/icons/` — favicon and small icons
- `assets/documents/resume/` — resume PDF (when available)

Optional local-only originals may live outside the published tree (see `.gitignore` for `assets/_originals/` / `assets/originals/`).

## Project-page organization

Each major project lives at `projects/<slug>/index.html` (clean public URL `/projects/<slug>/`), sharing:

- global header/footer patterns
- `project.css` section structure
- relative paths back to `../../css`, `../../js`, `../../assets`, `../../index.html`

Legacy `projects/<slug>.html` files are tiny redirects to the clean URL (meta refresh + JS + fallback link).

Shared semantic blocks: hero, overview, features, tech, gallery, links/CTA, then global footer.

Do **not** include a “Next project” section by default.

## Relative-path strategy

| From | To CSS/JS/assets |
| --- | --- |
| `/index.html`, `/404.html` | `css/...`, `js/...`, `assets/...` |
| `/projects/<slug>/index.html` | `../../css/...`, `../../js/...`, `../../assets/...` |
| `/projects/<slug>.html` (redirect stubs) | no local asset deps |

Anchors on the homepage use `#work`, `#about`, `#skills`, `#contact`.

From project pages, homepage anchors use `../../index.html#work` (etc.).

## GitHub Pages compatibility

- No server-side code
- No absolute site-root assumptions that break project-page nesting beyond the relative strategy above
- `404.html` at repo root for Pages custom 404 (when enabled)
- Works with project-site or user-site hosting as long as relative paths remain correct
- Custom domain (`alekspetk.com`) is a later roadmap phase — do not hard-require domain-specific build steps

## How to add a new project page

1. Add approved content/links to `docs/CONTENT_AND_LINKS.md`
2. Create `projects/<slug>/index.html` using an existing project page as the template (paths use `../../`)
3. Add a tiny `projects/<slug>.html` redirect to `/projects/<slug>/`
4. Add `assets/images/projects/<slug>/`
5. Add a homepage showcase article in `#work` linking to `projects/<slug>/`
6. Add the clean URL to `sitemap.xml`
7. Update `ASSET_PLAN.md` and roadmap status as needed
8. Do **not** invent URLs or screenshots
7. Do **not** add a “Next project” section unless explicitly requested

## What not to do

- Do not add a `src/` + bundler layout
- Do not split into component frameworks
- Do not rename major folders casually
- Do not create parallel CSS design systems
- Do not introduce package.json “just in case”
