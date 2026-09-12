# QA Checklist

Use before marking a phase complete or before application submission (Phase 18).

---

## VISUAL

- [ ] Spacing feels intentional and generous where planned
- [ ] Clear hierarchy (display → heading → body → muted)
- [ ] Surfaces/borders consistent with dark cinematic system
- [ ] Accents restrained (blue/purple not overused)
- [ ] Image cropping shows product clearly
- [ ] Project imagery not forced into identical blue/purple filters
- [ ] No template-looking sections (SaaS cards, fake terminals, glass stacks)
- [ ] No fake stats / testimonials / logo clouds
- [ ] Unfinished areas look honest, not like broken UI

## DESKTOP

- [ ] ~1280px and ~1440px widths look composed
- [ ] No horizontal overflow
- [ ] Hero reads as one composition
- [ ] Project showcases remain large (not tiny cards)
- [ ] Sticky header behaves (transparent → scrolled)

## TABLET

- [ ] ~768px–1024px layouts remain readable
- [ ] Grids collapse without awkward orphans
- [ ] Touch targets still comfortable

## MOBILE

- [ ] ~375px–430px stacking is correct
- [ ] Typography scales without overflow
- [ ] Menu opens/closes; Escape works; links close menu
- [ ] CTAs and nav links have adequate touch targets
- [ ] Media placeholders/images scale cleanly
- [ ] No unexpected horizontal scroll

## FUNCTIONAL

- [ ] Internal anchors (`/#projects`, `/#about`, `/#skills`, `/#contact`) work
- [ ] Project page links resolve
- [ ] Next-project links resolve (only on pages that still include them)
- [ ] Resume menu offers English CV + 履歴書 + 職務経歴書 View/Download
- [ ] Resume View opens the clean CV page (`/cv/en/`, `/cv/ja/rirekisho/`, `/cv/ja/shokumukeirekisho/`); Download uses the download attribute
- [ ] Resume menu closes on outside click and Escape
- [ ] External links (when present) use real KNOWN URLs
- [ ] Contact Get In Touch opens email chooser (Default / Gmail / Outlook)
- [ ] Contact aside Resume opens the global Resume menu
- [ ] 404 page returns home

## ACCESSIBILITY

- [ ] Semantic landmarks: header, nav, main, sections, footer
- [ ] Heading hierarchy is logical per page
- [ ] Skip link works
- [ ] Focus-visible styles visible on interactive elements
- [ ] Keyboard can operate mobile nav
- [ ] `aria-expanded` / labels present where needed (not over-ARIA’d)
- [ ] Contrast adequate for text/muted text/buttons
- [ ] `prefers-reduced-motion` disables decorative motion

## TECHNICAL

- [ ] No console errors on homepage
- [ ] No console errors on project pages
- [ ] No missing CSS/JS/asset 404s for referenced files
- [ ] Relative paths correct from `/` and `/projects/`
- [ ] No unused speculative files left from abandoned approaches
- [ ] Still static / GitHub Pages compatible
- [ ] No package manager / build requirement introduced

## PERFORMANCE

- [ ] Images reasonably sized for web
- [ ] No unnecessary JS running
- [ ] No unnecessary giant CSS
- [ ] Decorative effects remain cheap

## CONTENT HONESTY

- [ ] No invented biography claims
- [ ] No invented metrics
- [ ] TODOs tracked in `CONTENT_AND_LINKS.md`
- [ ] Visible links match KNOWN entries only

## PRE-APPLICATION SMOKE (Phase 18)

- [ ] Read site as a recruiter for 60 seconds — purpose is obvious
- [ ] Open each featured project page
- [ ] Try mobile nav
- [ ] Click contact/resume paths
- [ ] Confirm domain/HTTPS if deployed
