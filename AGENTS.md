# AGENTS.md — Instructions for coding agents

This repository is **Aleksandar Petkov’s professional portfolio** for **alekspetk.com**.

It is used in **job applications**. Treat every change as production-bound work: polished, original, and recruiter-safe.

## Non-negotiable stack

- **HTML + CSS + vanilla JavaScript only**
- **No** React, Vue, Angular, Tailwind, Bootstrap, npm, package managers, build tools, backends, databases, auth, or server APIs
- Must stay **static**, **lightweight**, and **GitHub Pages compatible**
- All paths must be **relative** (files must work when opened locally)

## Source of truth

Read `docs/` before editing. Especially:

1. [`docs/PROJECT_OVERVIEW.md`](docs/PROJECT_OVERVIEW.md)
2. [`docs/DESIGN_DIRECTION.md`](docs/DESIGN_DIRECTION.md)
3. [`docs/CODING_RULES.md`](docs/CODING_RULES.md)
4. [`docs/AGENT_WORKFLOW.md`](docs/AGENT_WORKFLOW.md)
5. The relevant phase in [`docs/ROADMAP.md`](docs/ROADMAP.md)

Also consult when needed:

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/HOMEPAGE_PLAN.md`](docs/HOMEPAGE_PLAN.md)
- [`docs/PROJECT_PAGE_PLAN.md`](docs/PROJECT_PAGE_PLAN.md)
- [`docs/CONTENT_AND_LINKS.md`](docs/CONTENT_AND_LINKS.md)
- [`docs/ASSET_PLAN.md`](docs/ASSET_PLAN.md)
- [`docs/QA_CHECKLIST.md`](docs/QA_CHECKLIST.md)

## Hard rules

- **Never redesign** unrelated areas or the whole site without explicit instruction
- **Preserve** the agreed **dark cinematic professional** design direction for the site shell
- **Preserve** identical **global header + footer** on every page (homepage and all project pages)
- **Preserve** global Resume EN/JA menu behavior (do not invent per-project Resume UIs)
- Contact uses real Email / GitHub / LinkedIn; Get In Touch is mailto only (no forms)
- **Preserve** homepage project showcase **structure** (same skeleton); allow **project-specific skins** on panels / main content only
- **Preserve** outer panel insets, vertical gaps, and soft rounded corners on Featured Project panels
- **Preserve** the static / GitHub Pages architecture
- **Never invent** facts, years of experience, stats, testimonials, clients, awards, or URLs
- Keep scope **narrow** — one phase or one component at a time
- Reuse existing CSS/JS; do not invent alternate architectures
- **Test after edits** (desktop, mobile, links, console)
- **Report changed files** when done
- **Update docs** when architecture or roadmap status changes

## Homepage project panels (quick reference)

- Same structure, media size, button size, spacing system for every project
- Unique theme per project (background, accents, title type, etc.) is required when the product has a strong identity
- Outer gaps + rounded corners are required — see `docs/HOMEPAGE_PLAN.md`
- Do **not** redesign showcase dimensions per project
- Detail page **main content** identity should continue the homepage panel identity
- **Global header and footer are identical on all pages** (alekspetk.com shell) — project themes never restyle them
- Examples: `.project-showcase--checkstation` ↔ `css/checkstation.css`; `.project-showcase--quickcal` ↔ `css/quickcal.css`; `.project-showcase--japan47` ↔ `css/japan47.css`

## Preferred task shape

Agents should receive bounded work, for example:

- implement hero layout only
- adjust project section spacing only
- replace CheckStation image only
- add one verified project link
- improve mobile navigation only

Do **not** assume permission to finish the entire site in one pass.
