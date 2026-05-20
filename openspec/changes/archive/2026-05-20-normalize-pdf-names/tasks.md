## 1. Rename PDF files on disk

- [x] 1.1 Rename `CV - Daniel Jordan.pdf` to `DanielJordan-ES.pdf` (or verify the existing `DanielJordan-ES.pdf` is the pretty version and delete the old file)
- [x] 1.2 Add `DanielJordan-EN.pdf` (pretty English version) to the repo — the user must supply this file externally
- [x] 1.3 Remove the obsolete `CV - Daniel Jordan.pdf` from the repo

## 2. Update HTML markup

- [x] 2.1 Add `id="pdf-download-btn"` to the pretty PDF `<a>` element in `index.html`
- [x] 2.2 Change the `<a>` element's `href` to `DanielJordan-EN.pdf` and `download` to `DanielJordan-EN.pdf` (default language is English)

## 3. Make pretty PDF download language-aware

- [x] 3.1 Create a helper function `updatePdfDownloadLink()` in `script.js` that reads the active language and updates `#pdf-download-btn`'s `href` and `download` attributes to `DanielJordan-EN.pdf` or `DanielJordan-ES.pdf`
- [x] 3.2 Call `updatePdfDownloadLink()` from `toggleLanguage()` after toggling the language class
- [x] 3.3 Call `updatePdfDownloadLink()` from the `DOMContentLoaded` handler to set the initial state

## 4. Update ATS print filename

- [x] 4.1 Change the `document.title` assignment in `activateAtsPrint()` from `'DanielJordan-' + lang` to `'DanielJordan-ATS-' + lang`

## 5. Verify

- [x] 5.1 Verify the pretty PDF download button serves the correct file when toggling between EN and ES
- [x] 5.2 Verify the ATS print dialog suggests `DanielJordan-ATS-EN` or `DanielJordan-ATS-ES` as filename
- [x] 5.3 Verify the download button works with JS disabled (static `href` points to `DanielJordan-EN.pdf`)
