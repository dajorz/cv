### Requirement: SDD mention in skills

The CV SHALL display "Spec-Driven Development / SDD" together with the tool names "OpenSpec" and "spec-kit (attributed to GitHub)" inside the existing AI-focused skills category, in both English and Spanish, without introducing a new skills category or section.

#### Scenario: English view shows SDD entry
- **WHEN** a reader views the CV with the language toggle set to English
- **THEN** the "AI & Productivity" skills category SHALL contain the text "Spec-Driven Development / SDD (OpenSpec, spec-kit by GitHub)" alongside the existing AI-related skills

#### Scenario: Spanish view shows SDD entry
- **WHEN** a reader views the CV with the language toggle set to Spanish
- **THEN** the "IA & Productividad" skills category SHALL contain the text "Spec-Driven Development / SDD (OpenSpec, spec-kit de GitHub)" alongside the existing AI-related skills

#### Scenario: No new category is introduced
- **WHEN** a reader views the sidebar skills list in either language
- **THEN** the number and titles of skills categories SHALL be unchanged from before this change

### Requirement: SDD discoverability in SEO metadata

The CV's HTML head SHALL expose Spec-Driven Development as a discoverable concept in the page-level SEO metadata, without removing or reordering existing keywords or descriptions.

#### Scenario: Keywords include SDD terms
- **WHEN** a search engine or crawler reads the `<meta name="keywords">` tag
- **THEN** the keywords list SHALL include both "Spec-Driven Development" and "SDD"

#### Scenario: Descriptions mention SDD
- **WHEN** a crawler or social platform reads `<meta name="description">`, `<meta property="og:description">`, or `<meta property="twitter:description">`
- **THEN** each of those descriptions SHALL mention Spec-Driven Development (SDD) as part of the candidate's AI-driven engineering expertise

### Requirement: Layout and print integrity preserved

Adding the SDD content SHALL NOT regress the existing responsive layout, print pagination, or language-toggle behaviour.

#### Scenario: Language toggle continues to work
- **WHEN** a reader toggles the language between English and Spanish after this change
- **THEN** only the language-appropriate variant of the SDD text SHALL be visible at any time, matching the behaviour of all other bilingual entries

#### Scenario: Print output is not broken
- **WHEN** the CV is printed or exported to PDF
- **THEN** the printed output SHALL render the SDD entry inside the AI skills category without introducing layout overflow, broken page breaks, or web-only controls in the print result
