## MODIFIED Requirements

### Requirement: ATS export action

The CV SHALL expose an on-screen action that lets the visitor export the CV as an ATS-friendly PDF, in addition to the existing visual PDF download.

#### Scenario: ATS action visible alongside existing PDF download
- **WHEN** the visitor loads the CV in a modern desktop browser
- **THEN** a button labelled "ATS PDF" is visible next to the existing "Download PDF" button

#### Scenario: Activating ATS action opens the browser print dialog
- **WHEN** the visitor clicks the "ATS PDF" button
- **THEN** the browser's print dialog opens with the page rendered in ATS layout, so the visitor can save it as PDF

#### Scenario: ATS PDF suggested filename includes ATS infix
- **WHEN** the visitor saves the ATS export from the print dialog
- **THEN** the browser suggests `DanielJordan-ATS-EN.pdf` when English is active or `DanielJordan-ATS-ES.pdf` when Spanish is active
