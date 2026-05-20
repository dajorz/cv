## Context

The CV markup uses a 2-column grid: `.container > .sidebar + .main-content`. The sidebar holds the profile (name + title), contact, skills and spoken-languages sections. The main column holds summary, experience and education. The screen and visual-print stylesheets both depend on this DOM order and the grid layout.

In ATS mode (`body.ats-print`), the existing stylesheet collapses everything into a single column by overriding `.container` to `grid-template-columns: 1fr`. Because the sidebar is the first DOM child, the ATS PDF currently renders Skills/Languages/Contact before Summary/Experience — flagged by Enhancv as an inverted structure.

Changing DOM order would break the visual layout and the existing visual-print stylesheet. CSS-only reordering scoped to `body.ats-print` is the safe path.

## Goals / Non-Goals

**Goals:**
- ATS PDF section order: Identity → Contact → Summary → Experience → Skills → Education → Spoken Languages.
- No DOM changes in `index.html`.
- No regression in on-screen layout or visual print PDF.
- Bilingual parity preserved (no language-specific code paths).

**Non-Goals:**
- No JavaScript changes.
- No styling refresh (colors, typography, spacing) beyond what is needed to make the reorder work.
- No content edits to any section.
- No changes to the responsive (mobile/tablet) layout.

## Decisions

**Decision 1: Reorder via flexbox `order` + `display: contents`.**
- Alternatives considered:
  - (a) Reorder DOM in `index.html` → rejected: breaks the existing CSS grid layout for screen and visual print; requires parallel changes in `styles.css` and risks regression.
  - (b) Move sidebar nodes at runtime in `script.js` when ATS mode activates → rejected: adds JS state to a print-only flow, harder to roll back, and risks race conditions with `window.print()`.
  - (c) Flexbox `order` + `display: contents` on the sidebar and main-content wrappers → chosen: pure CSS, scoped to `body.ats-print`, zero DOM mutation, no JS change.
- `display: contents` is supported in all current evergreen browsers; ATS PDF generation only needs to work in the user's print dialog, so legacy-browser concerns do not apply.

**Decision 2: Order values.**
- `.profile-section` → `order: 1` (name + title)
- `.sidebar-section.contact` (Contact) → `order: 2`
- `.summary` / `#summary` block → `order: 3`
- `.experience` / `#experience` block → `order: 4`
- `.sidebar-section.skills` (Technical Skills) → `order: 5`
- `.education` / `#education` block → `order: 6`
- `.sidebar-section.languages` (Spoken Languages) → `order: 7`
- Use existing section identifiers/classes. If sidebar sections do not already have semantic classes (`.contact`, `.skills`, `.languages`), add them in `index.html` as a minimal, non-visual marker.

**Decision 3: Scope strictly to `body.ats-print` + `@media print`.**
- All new rules live inside the existing `@media print { body.ats-print … }` block. Nothing outside ATS print mode is touched.

## Risks / Trade-offs

- [Risk] `display: contents` historically had accessibility-tree bugs in some browsers → Mitigation: this only applies during print rendering, not the interactive view, so the AOM impact is irrelevant.
- [Risk] If `.sidebar-section` children do not have stable class hooks per section (Contact / Skills / Languages), CSS cannot target them individually → Mitigation: add minimal marker classes (`contact`, `skills`, `languages`) in `index.html` if not already present; verify during task 1.
- [Risk] Visual or screen-print regressions caused by the new rules leaking outside ATS mode → Mitigation: every new selector is prefixed `body.ats-print`; covered by manual visual smoke test in tasks.
- [Risk] Page-break behaviour in the new order may produce a Summary/Experience split at a worse boundary than before → Mitigation: visual review in print preview; adjust existing `break-inside` / `break-before` rules if needed (still scoped to `body.ats-print`).
