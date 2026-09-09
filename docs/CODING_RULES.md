# Coding Rules

Strict engineering rules for humans and coding agents working on alekspetk.com.

## Stack rules

- **HTML / CSS / vanilla JavaScript only**
- **No dependencies** without explicit owner approval documented in `docs/`
- **No backend**, server APIs, databases, auth, or accounts
- **No npm**, package managers, bundlers, or framework migrations
- Do not “temporarily” introduce React/Vue/Svelte/Tailwind/Bootstrap

## Architecture rules

- Reuse existing components and styles in `css/` and patterns in HTML
- **Do not duplicate CSS** — extend shared classes first
- **Do not create an alternate architecture** (no parallel design system)
- **Do not rename major folders casually** (`css`, `js`, `assets`, `projects`, `docs`)
- New project pages follow `ARCHITECTURE.md` and `PROJECT_PAGE_PLAN.md`
- Keep JavaScript minimal and modular as already structured

## Content rules

- **Do not invent content**: bios, metrics, testimonials, employers, dates, user counts, revenue
- **Do not invent URLs** or store links
- Track unknowns in `CONTENT_AND_LINKS.md`
- Unfinished areas should be clearly unfinished — not filled with generic AI marketing copy

## Scope rules

- Modify only what the assigned task requires
- Do not “while I’m here” refactor unrelated sections
- Do not redesign visual direction without explicit instruction
- Prefer one phase or one component per task (`AGENT_WORKFLOW.md`)

## Quality rules

- Maintain responsive behavior (mobile, tablet, desktop)
- Maintain accessibility foundations (semantics, focus, keyboard, reduced motion, contrast)
- Use **relative paths** only
- Preserve **GitHub Pages** compatibility
- Check the browser console for errors after changes
- Do not leave broken links you introduced

## BEFORE EDITING

1. Read `AGENTS.md`
2. Read `PROJECT_OVERVIEW.md`, `DESIGN_DIRECTION.md`, `CODING_RULES.md`
3. Read the relevant roadmap phase and plan docs
4. Inspect existing HTML/CSS/JS for the area you will touch
5. Identify affected files and keep the list small

## AFTER EDITING

1. Verify desktop layout for changed views
2. Verify mobile layout / nav if relevant
3. Verify links and anchors you touched
4. Verify console is clean
5. Update docs if architecture or roadmap status changed
6. Report exactly which files changed and what was intentionally left unfinished

## Review anti-patterns

Agents must not:

- Replace the dark cinematic direction with a light template look
- Convert showcases into generic card grids
- Add glassmorphism / glow spam
- Add stock photos
- Add package.json “for tooling”
- Rewrite all docs when only a CSS tweak was requested
