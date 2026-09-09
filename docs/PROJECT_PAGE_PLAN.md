# Project Page Plan

Reusable specification for major project detail pages.

Initial pages:

- `projects/checkstation.html`
- `projects/quickcal.html`
- `projects/game-of-night.html`

## Shared layout

Every project page uses the same semantic skeleton and `project.css`, plus global header/footer chrome.

Order:

1. Site header (AP + nav back to homepage sections)
2. Project hero
3. Overview
4. Features
5. Tech stack
6. Gallery
7. Links
8. Next project
9. Site footer

Keep structure consistent so recruiters learn the pattern quickly. Visual identity may still vary per project **inside** media and accent choices — not by inventing a new page architecture.

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

Three clear blocks:

- **Problem**
- **Solution**
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

## Next project

End-of-page navigation into another project to encourage continued browsing.

Suggested cycle:

- CheckStation → QuickCal
- QuickCal → Game of Night
- Game of Night → CheckStation

## Footer

Same global footer patterns as the homepage for consistency.

## Per-project visual identity

Allowed:

- Project-native screenshot color/UI chrome
- Slightly different gallery rhythm (e.g., phone frames for QuickCal vs desktop for CheckStation)
- Project-specific hero crop

Not allowed:

- Rewriting the whole site theme per project
- Gaming UI takeover for Game of Night beyond the project media
- One-off CSS frameworks or page-local design systems

## Implementation notes for agents

1. Copy an existing project HTML file when adding a new project
2. Update paths, titles, next-project target, and asset folder
3. Keep CSS in `project.css` / shared components unless a tiny, documented exception is required
4. Sync facts with `CONTENT_AND_LINKS.md` and `ASSET_PLAN.md`
