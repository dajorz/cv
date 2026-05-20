## Context

The CV site serves three PDF files with inconsistent naming: `CV - Daniel Jordan.pdf` (pretty, Spanish-only), `DanielJordan-EN.pdf` and `DanielJordan-ES.pdf` (ATS, generated via print). The pretty PDF download button is a static `<a>` tag that always points to the Spanish file regardless of the active language. The ATS print flow sets `document.title` to control the browser's suggested filename.

## Goals / Non-Goals

**Goals:**
- Unify all PDF file names under the pattern `DanielJordan[-ATS]-<LANG>.pdf`.
- Make the pretty PDF download button switch between `DanielJordan-EN.pdf` and `DanielJordan-ES.pdf` based on the active language.
- Distinguish ATS exports with a `-ATS-` infix in the generated filename.

**Non-Goals:**
- Auto-generating PDF content.
- Changing any visual or ATS print layout.
- Adding new file formats.

## Decisions

### 1. Language-aware download via JS update of `href` and `download` attributes

**Choice**: Update the `<a>` element's `href` and `download` attributes from `toggleLanguage()` and on `DOMContentLoaded`.

**Why**: The site already uses JS for language switching. Adding two lines to update the link keeps the approach consistent and avoids duplicating the `<a>` element or introducing CSS-based toggling for a functional (non-visual) attribute. The link gets an `id="pdf-download-btn"` for easy selection.

**Alternative considered**: Two separate `<a>` elements with `lang-en` / `lang-es` classes, toggled via CSS `display`. Rejected because `href` is functional, not presentational; hiding one link with CSS means both are in the DOM and could confuse assistive tech or crawlers.

### 2. ATS filename pattern `DanielJordan-ATS-<LANG>`

**Choice**: Insert `-ATS-` between the name and language code.

**Why**: Keeps the pretty PDF name cleanest (`DanielJordan-EN.pdf`) for recruiters. The ATS variant is clearly labeled and sorts next to the pretty version alphabetically. Follows the existing CamelCase convention.

### 3. Set initial `href` in HTML to `DanielJordan-EN.pdf`

**Choice**: Since the default language on page load is English (`body.classList.add('lang-english')` in `DOMContentLoaded`), set the initial `href` in the HTML to `DanielJordan-EN.pdf`. JS will update it if the user toggles to Spanish.

**Why**: Ensures the download works even if JS fails to load — progressive enhancement.

## Risks / Trade-offs

- **Stale PDF files**: The user must manually rename/replace PDF files on disk. If they forget to add `DanielJordan-EN.pdf`, the download button will 404. → Mitigation: document the expected file names clearly in tasks.
- **Cached old filenames**: Browsers or CDNs may cache the old `CV - Daniel Jordan.pdf` URL. → Mitigation: GitHub Pages cache is short-lived; not a significant risk for a personal CV site.
