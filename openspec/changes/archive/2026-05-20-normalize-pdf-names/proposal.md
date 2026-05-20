## Why

Three different naming conventions coexist for PDF files (`CV - Daniel Jordan.pdf`, `CV-Daniel-Jordan.pdf` in the download attribute, and `DanielJordan-<LANG>` for ATS print). The "pretty" designed PDF is only available in Spanish and lacks an English variant, even though the site is bilingual. This creates an inconsistent experience and makes file management harder.

## What Changes

- Adopt a single naming convention for all PDF files: `DanielJordan[-Variant]-<LANG>.pdf` (CamelCase, no spaces, language suffix).
- Rename the existing pretty PDF from `CV - Daniel Jordan.pdf` to `DanielJordan-ES.pdf`; add `DanielJordan-EN.pdf` for the English version.
- Make the pretty PDF download button language-aware: it downloads the EN file when in English mode and the ES file when in Spanish mode.
- Change the ATS print title from `DanielJordan-<LANG>` to `DanielJordan-ATS-<LANG>` to distinguish ATS exports from pretty PDFs.
- Remove the obsolete `CV - Daniel Jordan.pdf` file.

## Capabilities

### New Capabilities
- `pdf-download`: Language-aware pretty PDF download with normalized file naming convention.

### Modified Capabilities
- `ats-export`: ATS print filename changes from `DanielJordan-<LANG>` to `DanielJordan-ATS-<LANG>`.

## Impact

- **Files**: `index.html` (download button href/download attributes), `script.js` (ATS title, language-aware download logic, `toggleLanguage` function).
- **Assets**: Rename/add PDF files on disk. Remove `CV - Daniel Jordan.pdf`.
- **User-visible**: Download button now serves the correct language variant. ATS-generated PDFs have a distinct filename.
- **SEO / Print**: No impact on SEO metadata or print stylesheets beyond the ATS title tweak.

## Non-goals

- Generating the actual PDF content (the user creates them externally).
- Changing the visual design or layout of either PDF variant.
- Adding new download formats (e.g., DOCX).
