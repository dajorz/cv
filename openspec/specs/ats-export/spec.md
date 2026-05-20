# ats-export Specification

## Purpose
TBD - created by archiving change add-ats-print-mode. Update Purpose after archive.
## Requirements
### Requirement: ATS export action

The CV SHALL expose an on-screen action that lets the visitor export the CV as an ATS-friendly PDF, in addition to the existing visual PDF download.

#### Scenario: ATS action visible alongside existing PDF download
- **WHEN** the visitor loads the CV in a modern desktop browser
- **THEN** a button labelled "ATS PDF" is visible next to the existing "Download PDF" button

#### Scenario: Activating ATS action opens the browser print dialog
- **WHEN** the visitor clicks the "ATS PDF" button
- **THEN** the browser's print dialog opens with the page rendered in ATS layout, so the visitor can save it as PDF

### Requirement: ATS print layout

When ATS export is active, the CV SHALL be rendered as a single-column, plain-typography, black-on-white document optimized for ATS parsing.

#### Scenario: Single-column layout in ATS output
- **WHEN** the visitor previews the ATS export
- **THEN** the decorative-only elements (profile photo, language toggle, download buttons, emoji contact icons, decorative borders, gradients and backgrounds) are hidden, and all CV content flows in a single column

#### Scenario: Identity and contact details visible at the top of the ATS output
- **WHEN** the visitor previews the ATS export
- **THEN** the candidate's name, professional title, email, phone, location and LinkedIn profile URL are visible as plain text near the top of the document

#### Scenario: Skills and spoken languages included in the ATS output
- **WHEN** the visitor previews the ATS export
- **THEN** every technical-skills category and every spoken-language entry from the sidebar is rendered as plain text so that ATS parsers can extract them

#### Scenario: Plain typography and colors in ATS output
- **WHEN** the visitor previews the ATS export
- **THEN** text is rendered in a standard sans-serif font, in black on a white background, without colored headings, backgrounds, borders or pill-shaped tags

#### Scenario: Section titles preserve original casing in ATS output
- **WHEN** the visitor previews the ATS export
- **THEN** sidebar section headings, skill category labels and language proficiency labels are rendered in their natural case (no forced uppercase transformation)

#### Scenario: Skills and language entries render inline in ATS output
- **WHEN** the visitor previews the ATS export
- **THEN** each skill category appears on a single line as "Category: item1, item2, …" and each spoken-language entry appears on a single line as "Language — Level", without artificial line breaks between the localized fragments of the same label

#### Scenario: Technologies rendered as plain text in ATS output
- **WHEN** the visitor previews the ATS export
- **THEN** each experience entry's technologies appear as a single plain-text line (e.g. "Tech: Azure, .NET, Kubernetes") instead of styled tag widgets

#### Scenario: External link URLs rendered as readable text in ATS output
- **WHEN** the ATS export contains an external link (e.g. a "View credential" link or the LinkedIn profile link)
- **THEN** the link's destination URL is visible as plain text alongside its label, so the URL survives ATS plain-text extraction

#### Scenario: Tight page margins in ATS output
- **WHEN** the visitor previews the ATS export
- **THEN** the top page margin is no larger than the side margins, so the first page does not waste vertical space before the candidate's name

#### Scenario: Visual print output is unaffected
- **WHEN** the visitor uses the browser's regular print (Ctrl+P) without activating ATS mode
- **THEN** the page prints with the existing visual print stylesheet, unchanged

### Requirement: Localized job date strings

The CV SHALL render job date strings (month abbreviations) in the language currently selected by the ES/EN toggle, on both the on-screen page and the ATS export.

#### Scenario: Spanish job dates
- **WHEN** the visitor has Spanish selected
- **THEN** each job date uses Spanish month abbreviations (e.g. "Ago. 2021", "May. 2019", "Sept. 2013")

#### Scenario: English job dates
- **WHEN** the visitor has English selected
- **THEN** each job date uses English month abbreviations (e.g. "Aug. 2021", "May 2019", "Sep. 2013")

### Requirement: ATS export inherits the active language

The ATS export SHALL render the CV in the language currently selected by the existing ES/EN toggle, without introducing additional language controls.

#### Scenario: Spanish ATS export
- **WHEN** the visitor has Spanish selected and clicks "ATS PDF"
- **THEN** the ATS output contains only the Spanish content

#### Scenario: English ATS export
- **WHEN** the visitor has English selected and clicks "ATS PDF"
- **THEN** the ATS output contains only the English content

### Requirement: ATS download filename hint

The ATS export SHALL hint to the browser a deterministic default filename that follows ATS-checker recommendations (first+last name, no resume/ATS tags, no extra punctuation) while still distinguishing language.

#### Scenario: Filename hint for Spanish
- **WHEN** the visitor activates ATS export with Spanish selected
- **THEN** the browser's "Save as PDF" dialog suggests a filename containing "DanielJordan-ES"

#### Scenario: Filename hint for English
- **WHEN** the visitor activates ATS export with English selected
- **THEN** the browser's "Save as PDF" dialog suggests a filename containing "DanielJordan-EN"

### Requirement: ATS export does not affect on-screen experience

The ATS export flow SHALL leave the on-screen page in its original state once the print dialog closes, regardless of whether the visitor saved or cancelled the PDF.

#### Scenario: Page restored after saving the PDF
- **WHEN** the visitor activates ATS export and then saves the PDF
- **THEN** the visible page returns to its normal layout, colors and document title

#### Scenario: Page restored after cancelling the print dialog
- **WHEN** the visitor activates ATS export and then cancels the print dialog
- **THEN** the visible page returns to its normal layout, colors and document title

### Requirement: Bilingual ATS action label

The ATS action SHALL be labelled consistently in both supported languages so visitors recognise it regardless of the active language.

#### Scenario: Label visible in Spanish mode
- **WHEN** the visitor has Spanish selected
- **THEN** the ATS action shows a recognisable "ATS PDF" label

#### Scenario: Label visible in English mode
- **WHEN** the visitor has English selected
- **THEN** the ATS action shows a recognisable "ATS PDF" label

