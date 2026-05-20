## MODIFIED Requirements

### Requirement: Technologies rendered as plain text in ATS output

When ATS export is active, the technologies of each experience entry SHALL be rendered as a single plain-text paragraph, structurally and visually separated from the experience bullet list so that ATS parsers do not classify the line as an additional bullet, and the resulting extracted text SHALL contain at least 10 words for every role.

#### Scenario: Tech line renders as a single inline plain-text line
- **WHEN** the visitor previews the ATS export
- **THEN** each experience entry's technologies appear as a single plain-text line in the form "Primary technologies and frameworks used: item1, item2, …", without styled tag widgets, pills, borders, backgrounds, or per-item line breaks

#### Scenario: Tech line is not nested inside a list
- **WHEN** the ATS PDF DOM (or its extracted text) is inspected
- **THEN** the Tech line does not appear inside any `<ul>` or `<li>` element; it is a sibling block following the experience bullet list

#### Scenario: Tech line is visually separated from the preceding bullet list
- **WHEN** the visitor previews the ATS export
- **THEN** the Tech line has a visible vertical gap of at least ~8 pixels above it, separating it from the last bullet of the experience entry's `<ul>`

#### Scenario: Tech label is bold and inline
- **WHEN** the visitor previews the ATS export
- **THEN** the line begins with a bold "Primary technologies and frameworks used: " label followed inline by the comma-separated technologies in the same paragraph

#### Scenario: Tech line stays on one logical block
- **WHEN** the visitor previews the ATS export
- **THEN** the Tech line for a given role is not split across two pages

#### Scenario: Tech line crosses the ATS minimum-word threshold for every role
- **WHEN** the ATS PDF text is extracted by an ATS parser (e.g. Enhancv)
- **THEN** the extracted Tech line for every experience entry contains at least 10 words, including the role with the fewest technologies (counting the bold prefix label as part of the same line)
