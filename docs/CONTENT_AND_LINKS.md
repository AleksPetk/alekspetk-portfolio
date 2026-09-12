# Content and Links Tracker

**Never invent missing values.** Mark each field as:

- `KNOWN` — verified and approved for use in the site
- `TODO` — needed later; do not invent
- `NOT APPLICABLE` — does not apply to this item

When a value becomes known, update this file **before** or **with** the HTML change.

---

## GLOBAL

| Field | Status | Value |
| --- | --- | --- |
| Email | KNOWN | `work@alekspetk.com` |
| GitHub profile | KNOWN | `https://github.com/AleksPetk` |
| LinkedIn | KNOWN | `https://www.linkedin.com/in/aleksandar-petkov-7a90b4435/` |
| Resume PDF path | KNOWN | English CV: `assets/documents/resume/aleksandar-petkov-cv-en.pdf` · 履歴書: `…/aleksandar-petkov-rirekisho-ja.pdf` · 職務経歴書: `…/aleksandar-petkov-shokumukeirekisho-ja.pdf` |
| Contact phone | TODO | (only if intentionally published) |
| Site domain | KNOWN | `alekspetk.com` (custom domain wiring is a later phase) |
| Meta description (home) | KNOWN | Aleksandar Petkov — software developer and product builder… (see `index.html`) |
| Canonical site URL | KNOWN | `https://alekspetk.com/` |
| OG image | KNOWN | `https://alekspetk.com/assets/images/hero/hero-cinematic.webp` |
| Full name | KNOWN | Aleksandar Petkov |
| Header brand | KNOWN | AP |
| Positioning | KNOWN | Software Developer / Product Builder |
| Hero supporting line | KNOWN | I design and build software products for web, mobile, and desktop. |
| Contact CTA | KNOWN | Get In Touch → mailto (no contact form) |
| Resume UI | KNOWN | Global Resume menu: English CV + 履歴書 + 職務経歴書 (View / Download) |

---

## CHECKSTATION

| Field | Status | Value |
| --- | --- | --- |
| Project page | KNOWN | `projects/checkstation/` |
| Short description (homepage) | KNOWN | A configurable SaaS platform for attendance, self-service kiosks, and workspace activity tracking. |
| Long overview / problem / role | KNOWN | See case-study Overview on `projects/checkstation/` |
| Project type / category | KNOWN | Live SaaS platform / Attendance & check-in |
| Status | KNOWN | Live web platform (mobile + desktop apps IN DEVELOPMENT) |
| Technology tags / stack groups | KNOWN | See Technology section on `projects/checkstation/` |
| Homepage tags | KNOWN | Web · SaaS · Django · React |
| What I built details | KNOWN | See “What I built” on `projects/checkstation/` |
| Core features | KNOWN | Multi-tenant workspaces, Owner & staff, Members, Groups, Self-service kiosks, Kiosk editor, Attendance history, Plans & billing, Auth & security, Localization & email |
| Live website | KNOWN | `https://checkstation.app` |
| Workspace / app URL | KNOWN | `https://workspace.checkstation.app` |
| Documentation | KNOWN | `https://docs.checkstation.app` |
| System status | KNOWN | `https://status.checkstation.app` |
| App Store | NOT APPLICABLE | Mobile apps not released |
| Google Play | NOT APPLICABLE | Mobile apps not released |
| Desktop downloads | NOT APPLICABLE | Desktop apps not released |
| GitHub repository | TODO | |
| Demo | NOT APPLICABLE | |
| Screenshots | KNOWN | `checkstation-public.webp`, `checkstation-workspace.webp`, `checkstation-kiosk-editor.webp` |
| Homepage showcase | KNOWN | Featured Projects #01 → `projects/checkstation/` |

Notes:

- Live deployed multi-tenant SaaS; commercial plans, trial, auth, and Stripe billing are live.
- Case-study **main** uses CheckStation light SaaS theme (`css/checkstation.css` under `.page__main`); global header/footer stay portfolio shell.
- Homepage showcase: `.project-showcase--checkstation` deep navy / blue / cyan panel skin — **same structure**, different identity.
- Detail page uses **only 3 primary screenshots** (public site, workspace, kiosk editor). No under-image captions.
- Mobile (Expo / React Native) and desktop (Electron) apps are shown as **IN DEVELOPMENT** only — no download links, no App Store / Play Store badges, no released-native claims.
- No “Next project” section.

---

## QUICKCAL

| Field | Status | Value |
| --- | --- | --- |
| Project page | KNOWN | `projects/quickcal/` |
| Short description (homepage) | KNOWN | A fast offline-first calorie counter built around a personal food library and one-tap logging. |
| Long overview / problem / role | KNOWN | See case-study Overview on `projects/quickcal/` |
| Project type / category | KNOWN | Mobile app / Calorie tracking (iOS + Android) |
| Status | KNOWN | Live (App Store + Google Play) |
| Technology tags / stack groups | KNOWN | See Technology section on `projects/quickcal/` |
| Homepage tags | KNOWN | iOS · Android · Offline-first |
| What I built details | KNOWN | See “What I built” on `projects/quickcal/` |
| Core features | KNOWN | Quick Log, Portion Logging, Personal Library, Offline Reference Foods, Today & History, Goals & Planner, Local-First Data |
| Website | NOT APPLICABLE | No web product |
| App Store | KNOWN | `https://apps.apple.com/jp/app/quickcal-calorie-counter/id6797413596?l=en-US` |
| Google Play | KNOWN | `https://play.google.com/store/apps/details?id=com.alekspetk.quickcal` |
| GitHub repository | TODO | |
| Demo | NOT APPLICABLE | |
| Screenshots | KNOWN | `quickcal-phone-home.webp`, `quickcal-phone-lifetime.webp` |
| Homepage showcase | KNOWN | Featured Projects #02 → `projects/quickcal/` |

Notes:

- Case-study **main** uses QuickCal-native light green theme (`css/quickcal.css` under `.page__main`); global header/footer stay portfolio shell.
- Homepage showcase: `.project-showcase--quickcal` soft gray/green panel skin — **same structure**, different identity.
- Compact mobile case study (not a large platform page). No “Next project” section.
- Do not claim cloud sync, accounts, social, AI, web app, or backend services.

---

## GAME OF NIGHT

| Field | Status | Value |
| --- | --- | --- |
| Short description (homepage) | TODO | |
| Long description / overview | TODO | |
| Problem | TODO | |
| Solution | TODO | |
| My role | TODO | |
| Project type / category | TODO | |
| Status | TODO | |
| Technology tags | TODO | |
| Relevant links | TODO | |
| App Store | TODO | |
| Google Play | TODO | |
| GitHub repository | TODO | |
| Demo | TODO | |
| Screenshots | TODO | See `ASSET_PLAN.md` |

---

## JAPAN47

| Field | Status | Value |
| --- | --- | --- |
| Project page | KNOWN | `projects/japan47/` |
| Short description | KNOWN | Community travel guide for Japan’s 9 regions and 47 prefectures (web + Expo mobile; shared Django REST API) |
| Long overview / problem / role | KNOWN | See case-study Overview on `projects/japan47/` |
| Project type | KNOWN | Travel platform (Web + iOS + Android) |
| Status | KNOWN | Live |
| Technology tags / stack groups | KNOWN | See Technology section on `projects/japan47/` |
| Homepage tags | KNOWN | Web · iOS · Android |
| What I built details | KNOWN | See “What I built” on `projects/japan47/` |
| Core features | KNOWN | Regions, Prefectures, Places & discovery, Community contributions, Reviews & profiles, Personal travel, Mobile access, Media & support |
| Live website | KNOWN | `https://japan47.alekspetk.com` |
| App Store | KNOWN | `https://apps.apple.com/jp/app/japan47/id6796367175?l=en-US` |
| Google Play | KNOWN | `https://play.google.com/store/apps/details?id=com.alekspetk.japan47` |
| GitHub repository | TODO | |
| Screenshots | KNOWN | Optimized WebP in `assets/images/projects/japan47/` |
| Community / user metrics | TODO | Do not invent counts |
| Homepage showcase | KNOWN | Featured Projects #03 → `projects/japan47/` |

Notes:

- Case-study **main** uses Japan47-native visual theme (`css/japan47.css` under `.page__main`); global header/footer stay portfolio shell.
- Homepage showcase: `.project-showcase--japan47` cream/red panel skin.

---

## Skills groups (homepage)

| Group | Status | Items |
| --- | --- | --- |
| Backend | KNOWN | Python, Django, Django REST Framework, PostgreSQL, Redis |
| Frontend | KNOWN | React, JavaScript, TypeScript, HTML, CSS, Vite |
| Mobile | KNOWN | React Native, Expo, SQLite, React Navigation |
| Infrastructure | KNOWN | Docker, Nginx, Reverse proxy configuration, Gunicorn, Cloudflare, Certbot / TLS, Hetzner, GitHub Pages |
| Services / Integrations | KNOWN | Stripe, OAuth, Resend, Umami Analytics, Google AdSense, Apple / Google in-app purchases, EAS |

---

## About copy

| Field | Status | Value |
| --- | --- | --- |
| About heading | KNOWN | I like building things from the ground up. |
| About paragraphs | KNOWN | See homepage `#about` — backend/full-stack focus, plan-before-build approach, open to programming roles |
| At a glance | KNOWN | Focus: Backend / Full Stack · End-to-end product development · Plan → Document → Build → Test → Improve · Based in Japan · Japanese / English / Russian / Bulgarian · Looking for software development opportunities |

---

## Agent reminder

### Contact + Resume (permanent)

- Contact shows Email / GitHub / LinkedIn only (no contact form, no backend)
- Email: `work@alekspetk.com` (shown as info on the left; actions via Get In Touch chooser / right-side Email)
- GitHub: `https://github.com/AleksPetk` (right-side action; left shows `github.com/AleksPetk` as text)
- LinkedIn: `https://www.linkedin.com/in/aleksandar-petkov-7a90b4435/` (right-side action; left shows name as text)
- Resume is a **global** header menu on every page:
  - English → English CV (View / Download)
  - Japanese → 履歴書 + 職務経歴書 (View / Download each)
- Contact aside “Resume” must trigger that same global menu — do not build a second Resume UI
- Paths: `aleksandar-petkov-cv-en.pdf`, `aleksandar-petkov-rirekisho-ja.pdf`, `aleksandar-petkov-shokumukeirekisho-ja.pdf`
- Do not invent fake PDF files; UI may ship before binaries exist

If other content is `TODO`, show a clear unfinished state in the UI **or** omit the control entirely.

Never use:

- `https://example.com`
- lorem stats
- fabricated store links
- placeholder social proof
