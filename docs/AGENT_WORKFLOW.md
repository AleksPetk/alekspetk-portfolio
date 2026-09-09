# Agent Workflow

This project will sometimes be edited by weaker AI coding agents. Follow this workflow every time.

## Required reading order

Every agent must:

1. Read [`../AGENTS.md`](../AGENTS.md)
2. Read [`PROJECT_OVERVIEW.md`](PROJECT_OVERVIEW.md)
3. Read [`DESIGN_DIRECTION.md`](DESIGN_DIRECTION.md)
4. Read [`CODING_RULES.md`](CODING_RULES.md)
5. Read the relevant phase in [`ROADMAP.md`](ROADMAP.md)
6. Inspect existing files **before** writing
7. Perform **only** the requested task
8. Avoid unrelated refactors
9. Verify the result
10. Update roadmap/status docs if appropriate
11. Report exactly what changed

Also read as needed:

- `ARCHITECTURE.md` for file responsibilities
- `HOMEPAGE_PLAN.md` / `PROJECT_PAGE_PLAN.md` for section intent
- `CONTENT_AND_LINKS.md` before adding any link or factual claim
- `ASSET_PLAN.md` before adding/replacing images
- `QA_CHECKLIST.md` before calling work done

## Task sizing (critical)

Agents must **NEVER** assume they are allowed to redesign the entire website.

Prefer small, bounded tasks such as:

- implement hero layout only
- adjust project section spacing only
- replace CheckStation image only
- add one project link (already marked KNOWN)
- improve mobile navigation only

Owners / orchestrators should preferably assign **one roadmap phase** or **one component** at a time.

If a prompt is vague (“make it better”, “finish the site”), the agent should:

1. refuse to expand into a full redesign
2. ask for / choose the single next roadmap phase
3. implement only that slice

## Execution checklist

```
[ ] Read required docs
[ ] Confirm task boundary (phase/component)
[ ] Inspect current HTML/CSS/JS for that area
[ ] Implement minimal change
[ ] Keep design direction intact
[ ] No invented facts/URLs
[ ] Relative paths preserved
[ ] Quick desktop + mobile check
[ ] Console check
[ ] Update ROADMAP/CONTENT docs if needed
[ ] Report files changed + unfinished items
```

## Verification expectations

At minimum after UI work:

- Open the affected page(s) via file or local static server
- Confirm CSS and JS load (no 404 for local assets)
- Confirm header/nav still works on mobile widths
- Confirm no obvious overflow
- Confirm no console errors from introduced scripts

## Reporting format (suggested)

```
Phase / task:
Files changed:
Summary of changes:
Docs updated:
Verification performed:
Intentionally unfinished:
Recommended next task:
```

## Escalation / stop conditions

Stop and ask (or report blocked) if:

- requested work requires a framework/dependency
- requested work contradicts `DESIGN_DIRECTION.md`
- required factual content/URLs are unknown
- task implies rewriting unrelated completed phases

## Reminder

`docs/` is the source of truth. Code should follow docs — not the other way around — unless the owner explicitly changes direction and docs are updated in the same change.
