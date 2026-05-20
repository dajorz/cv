## Why

The current CV download is a static PDF with a two-column layout (sidebar + main), iconography, and color — a format that ATS (Applicant Tracking System) parsers frequently mangle, dropping or misordering content. Recruiters using ATS pipelines (Workday, Greenhouse, Lever, Taleo) may therefore receive an incomplete or unreadable version of the CV.

## What Changes

- Add a new on-screen action button next to the existing PDF download button labelled **ATS PDF** (visible in both languages).
- Add an **ATS print mode** activated by that button: it temporarily applies a CSS class to `<body>`, swaps `document.title` to a deterministic ATS filename, and invokes `window.print()` so the user can save the CV as a single-column, plain-text-friendly PDF via the browser's print dialog.
- Add a new `@media print` ruleset (scoped to the ATS class) that:
  - Keeps **sidebar content** (name, title, contact details, skills categories, spoken languages) visible and renders it as plain text at the top of the document, so ATS parsers can extract identity and skills.
  - Hides decorative-only elements: profile photo, emoji contact icons, language toggle, download buttons, decorative borders/gradients/backgrounds.
  - Collapses the layout to a single column with neutral typography (system sans-serif), black-on-white.
  - Renders `.tech-tags` as plain inline text (e.g. `Tech: Azure, .NET, Kubernetes`).
  - Renders the hyperlink URLs of external/credential links inline as text (e.g. `View credential (https://learn.microsoft.com/…)`), so URLs survive ATS plain-text extraction.
  - Tightens the printable page margins so the document does not waste vertical space at the top of each page.
  - Preserves the existing non-ATS print stylesheet untouched.
- Localise **job date strings** in `index.html` (e.g. `Ago. 2021` ⇄ `Aug. 2021`, `May. 2019` ⇄ `May 2019`, `Sept. 2013` ⇄ `Sep. 2013`) by wrapping them in `.lang-es` / `.lang-en` spans, so the ATS PDF (and the on-screen CV) shows month abbreviations in the active language.
- Restore previous `document.title` and remove the class on `afterprint`.
- The downloaded PDF respects the language currently selected by the existing ES/EN toggle — no new language UI.

## Capabilities

### New Capabilities
- `ats-export`: ATS-friendly PDF export of the CV via in-browser print mode, including button placement, print stylesheet rules, filename behavior, and language inheritance from the existing toggle.

### Modified Capabilities
<!-- No existing capability spec governs current PDF/print behavior; introducing as new. -->

## Impact

- **Code**: `index.html` (new button, plus `.lang-es`/`.lang-en` spans around job date strings — no other content duplication), `styles.css` (new `@media print` block scoped to `body.ats-print`, plus a tighter `@page` margin scoped to the same class), `script.js` (button handler, title swap, `afterprint` cleanup).
- **No new dependencies**, no build tooling, no package manager — fully aligned with project conventions.
- **No content duplication**: ATS output reads from the same DOM as the visual CV; bilingual parity is automatic. The date-string spans are a localisation fix that also improves the on-screen experience.
- **SEO**: unchanged; `<title>` is only mutated transiently during print and restored on `afterprint`.
- **Existing print stylesheet**: unchanged (the new rules are class-scoped).
- **Existing static `CV - Daniel Jordan.pdf`**: kept as the "visual" PDF; ATS PDF coexists.

## Non-goals

- Do **not** generate `.docx` (out of scope; would require tooling).
- Do **not** produce a one-click download (browser print dialog is acceptable).
- Do **not** introduce any build step, npm package, or server-side rendering.
- Do **not** create a separate `ats.html` page or duplicate CV content anywhere.
- Do **not** auto-detect ATS-vs-recruiter; the user decides via the button.
