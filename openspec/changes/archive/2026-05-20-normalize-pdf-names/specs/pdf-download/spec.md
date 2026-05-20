## ADDED Requirements

### Requirement: Language-aware pretty PDF download

The CV SHALL offer a downloadable "pretty" (designed) PDF whose filename and content match the currently active language.

#### Scenario: English PDF download when English is active
- **WHEN** the site language is set to English and the visitor clicks the PDF download button
- **THEN** the browser downloads `DanielJordan-EN.pdf`

#### Scenario: Spanish PDF download when Spanish is active
- **WHEN** the site language is set to Spanish and the visitor clicks the PDF download button
- **THEN** the browser downloads `DanielJordan-ES.pdf`

#### Scenario: Download button reflects language change
- **WHEN** the visitor toggles the language from English to Spanish (or vice versa)
- **THEN** the PDF download button immediately updates to point to the PDF file for the newly active language

### Requirement: Normalized PDF file naming convention

All PDF files served by the CV site SHALL follow the naming pattern `DanielJordan[-Variant]-<LANG>.pdf` where `<LANG>` is `EN` or `ES` and `Variant` is an optional descriptor (e.g., `ATS`).

#### Scenario: Pretty PDF file names
- **WHEN** the visitor downloads the pretty PDF
- **THEN** the file is named `DanielJordan-EN.pdf` or `DanielJordan-ES.pdf` depending on the active language

#### Scenario: No spaces or special characters in PDF file names
- **WHEN** a PDF file is referenced anywhere in the codebase (HTML attributes, JS strings, or on disk)
- **THEN** its filename uses CamelCase with hyphens as separators and contains no spaces

### Requirement: Progressive enhancement for PDF download

The PDF download button SHALL work even if JavaScript fails to load.

#### Scenario: Default href set in HTML markup
- **WHEN** the page is rendered with JavaScript disabled
- **THEN** the PDF download button links to `DanielJordan-EN.pdf` (the default language)
