# alekspetk.com

Professional software developer portfolio for **Aleksandar Petkov**.

Primary purpose: support **job applications** and recruiter/company review with live projects, clear technical detail, and a custom-designed frontend — not a template portfolio.

## Technology

- HTML
- CSS
- Vanilla JavaScript

No frameworks, no npm, no build step, no backend.

Open `index.html` in a browser, or serve the folder with any static file server.

## Local usage

```bash
# Option A — open directly
open index.html

# Option B — simple local server (optional)
python3 -m http.server 8080
```

Visit `http://localhost:8080`.

## File structure

```
/
├── index.html
├── 404.html
├── AGENTS.md
├── README.md
├── css/
├── js/
├── assets/
├── projects/
└── docs/
```

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for responsibilities of each file.

## Documentation

`docs/` is the source of truth for purpose, design, architecture, roadmap, content tracking, and agent rules.

Start here:

- [`AGENTS.md`](AGENTS.md) — short rules for coding agents
- [`docs/PROJECT_OVERVIEW.md`](docs/PROJECT_OVERVIEW.md)
- [`docs/DESIGN_DIRECTION.md`](docs/DESIGN_DIRECTION.md)
- [`docs/ROADMAP.md`](docs/ROADMAP.md)
- [`docs/AGENT_WORKFLOW.md`](docs/AGENT_WORKFLOW.md)

## Deployment intention

- Static hosting via **GitHub Pages**
- Custom domain: **alekspetk.com** (later roadmap phases)

## How future agents should work

1. Read `AGENTS.md` and required docs
2. Inspect existing files before writing
3. Perform only the requested task / roadmap phase
4. Do not invent content or URLs
5. Verify desktop, mobile, links, and console
6. Report changed files; update docs if architecture/roadmap changes

Recommended next implementation task after Phase 0:

**Phase 1 — Header + Hero design**

Do not skip ahead without instruction.
