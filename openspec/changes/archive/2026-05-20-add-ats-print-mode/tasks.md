## 1. Markup — ATS button in `index.html`

- [x] 1.1 Add a second action button next to the existing `.pdf-download-btn` (around line 51) with `id="ats-download-btn"`, classes `pdf-download-btn pdf-download-btn--ats`, `type="button"`, and bilingual label spans (`.lang-es` / `.lang-en`) both reading "ATS PDF".
- [x] 1.2 Ensure the new element is a `<button>` (not `<a>`) since it triggers JS, with accessible `aria-label="Download ATS-friendly PDF"`.

## 2. Styles — `styles.css`

- [x] 2.1 Add a `.pdf-download-btn--ats` rule that positions the new button directly below the existing one (e.g. `top: 175px` on desktop; mirror the existing responsive offsets for tablet/mobile).
- [x] 2.2 Add a new `@media print` block scoped to `body.ats-print` that:
  - hides `.sidebar`, profile photo, all icons/SVGs, `.language-toggle`, `.pdf-download-btn`, `.pdf-download-btn--ats`, and any decorative borders/backgrounds;
  - collapses the layout to a single column (`display: block; width: 100%; max-width: none`);
  - sets `font-family: Arial, Helvetica, sans-serif; color: #000; background: #fff`;
  - removes box-shadows, gradients, and rounded corners;
  - converts `.tech-tags` to inline plain text with a "Tech: " prefix (use `::before { content: "Tech: "; }` on the container and `display: inline; padding: 0; background: none; border: none;` on items, separating with a comma + space via `::after`);
  - applies `page-break-inside: avoid` to `.experience-item > .item-header` to prevent orphaned headings.
- [x] 2.3 Verify the existing (non-ATS) `@media print` block is untouched.

## 3. Behavior — `script.js`

- [x] 3.1 Add an `activateAtsPrint()` function that:
  - reads the active language from the same source used by `toggleLanguage()` (e.g. `document.body.classList.contains('lang-english')`);
  - stores `document.title` in a module-level variable;
  - sets `document.title` to `DanielJordan-EN` or `DanielJordan-ES` based on language (Enhancv-recommended `FirstNameLastName` format, no ATS tag, no extra punctuation);
  - adds `ats-print` class to `document.body`;
  - calls `window.print()`.
- [x] 3.2 Add an `afterprint` listener (and a safety `setTimeout(restore, 60_000)` fallback) that removes the `ats-print` class and restores the original `document.title`.
- [x] 3.3 Wire `document.getElementById('ats-download-btn').addEventListener('click', activateAtsPrint)` after DOM is ready.
- [x] 3.4 Include `#ats-download-btn` in `handleLanguageToggleScroll()` so mobile scroll visibility behaves identically to the existing button.

## 4. Verification

- [x] 4.1 Open `index.html` locally (or `python -m http.server`) and confirm the ATS button is visible in both languages.
- [x] 4.2 With ES selected, click ATS PDF → print preview shows single column, no sidebar, no icons, plain typography, "Tech:" text instead of tags; filename suggestion contains `DanielJordan-ES`. Save the PDF and open it to confirm text is selectable.
- [x] 4.3 Repeat 4.2 with EN selected; filename suggestion contains `DanielJordan-EN`.
- [x] 4.4 Cancel the print dialog → confirm the page returns to its normal layout and the original `<title>` is restored.
- [x] 4.5 With ATS mode NOT active, press Ctrl+P → confirm the existing visual print stylesheet is unchanged.
- [x] 4.6 Verify responsive layout at desktop (≥1200px), tablet (768–1199px) and mobile (320–767px) — both buttons positioned cleanly, no overlap.
- [x] 4.7 Validated against Enhancv ATS checker (May 2026): **ATS Parse Rate 100%**, all essential sections (Experience, Education, Summary) detected, contact info (phone, email, LinkedIn) extracted, sections in Impact-First order, header URL detected. Score 69/100 only penalised content-level items (bullet length, lack of quantifiable achievements, generic design template) — not PDF rendering. One real PDF-side fix surfaced: filename hint (see §6.7).

## 5. Documentation

- [x] 5.1 Add a short note to `README.md` describing the ATS PDF action and how the filename / language are derived.

## 6. ATS output adjustments (post-review)

- [x] 6.1 In `index.html`, wrap every job date string (`Ago./Aug. 2021`, `May. 2019`/`May 2019`, `Mar. 2017`, `Oct. 2016`, `May. 2015`/`May 2015`, `Mar. 2014`, `Sept./Sep. 2013`, `Feb. 2014`, `Ago./Aug. 2021`, `Presente`/`Present`) in `.lang-es` / `.lang-en` spans so the visible month abbreviation matches the active language.
- [x] 6.2 In `styles.css` (ATS `@media print` block, scoped to `body.ats-print`):
  - Stop hiding `.sidebar`; instead neutralise its decorations (no gradient/background, no padding/borders, black text on white, single-column flow).
  - Hide only the truly decorative sidebar elements: `.profile-photo`, `.contact-icon` (emoji), and any photo container.
  - Ensure `.contact-item a` is rendered as plain readable text (color inherit, no underline).
  - Ensure `.skills-category h4`, `.skills-list`, `.language-item`, and the `.sidebar-section h3` headers render as plain text headings/paragraphs (no pills, no badges, no colored borders).
  - Append the destination URL after external/credential links via `a[href^="http"]::after { content: " (" attr(href) ")"; }` (scoped to `body.ats-print`). Do not apply to `mailto:` or `tel:` anchors (their href is already the text).
- [x] 6.3 Add a tighter `@page` rule scoped to `body.ats-print` (e.g. `@page { size: A4; margin: 15mm 15mm 15mm 15mm; }`) so the first page does not waste vertical space at the top. Leave the existing global `@page` rule untouched.
- [x] 6.4 Second visual cleanup pass on the ATS print block in `styles.css`:
  - Hide the decorative blue gradient underline below sidebar headings (`body.ats-print .sidebar-section h3::after { display: none; content: none; background: none; }`) so only the plain black border-bottom remains.
  - Override the global `.lang-es, .lang-en { display: block }` rule for the **active language only** (`body.ats-print:not(.lang-english) … .lang-es` and `body.ats-print.lang-english … .lang-en`) inside `.skills-category h4`, `.skills-list`, and `.language-item`, forcing `display: inline !important`. The inactive-language span must remain hidden by the existing `display: none` rule — never select both `.lang-es` and `.lang-en` together with `!important`, or both will render and produce duplicated bilingual text in the PDF.
  - Force `text-transform: none !important` on `body.ats-print .sidebar-section h3`, `.skills-category h4`, and `.language-level` so section titles, skill categories, and language proficiency keep normal casing in the ATS PDF.
  - Make `.language-level` `display: inline !important` so the proficiency label stays on the same line as the language name.
- [x] 6.5 Verify the on-screen layout is unaffected by the language-spans / inline-override changes (no visual regression in either ES or EN mode at desktop/tablet/mobile breakpoints).
- [x] 6.6 Generate the ATS PDF again in EN and ES and confirm: name + contact appear at top, skills and languages sections are present on a single line each, credential URL is visible, month abbreviations match language, sidebar headings have no blue underline, skill categories and language levels are in normal case, top page margin is tight.
- [x] 6.7 Filename hint clean-up (Enhancv `FILE NAME CHECK` finding): change `document.title` in `script.js#activateAtsPrint()` from `CV-Daniel-Jordan-ATS-<LANG>` to `DanielJordan-<LANG>`. Rationale: Enhancv flags `CV-`/`ATS-` tags and extra hyphens as unprofessional and recommends `FirstNameLastName.pdf`. Lang suffix retained (single hyphen) to differentiate EN/ES saves for the user.
- [x] 6.8 Decision: do NOT mitigate Enhancv's "Date period" false positive on the SDD Summary bullet. Root cause is Enhancv's parser heuristic mis-classifying the bolded `Desarrollo Impulsado por IA & SDD:` bullet (with Vueling/Ibercaja mentioned in the same paragraph) as a job entry; the string `Date period` does NOT exist in our HTML/CSS/JS. ATS Parse Rate remains 100%, all real experience entries parse correctly with their actual dates. Removing the `<strong>` from Summary bullets would harm screen/visual-PDF readability for no real ATS gain.
