## ADDED Requirements

### Requirement: ATS export section order

When ATS export is active, the rendered document SHALL present sections in this order, regardless of DOM order: Identity (name + title), Contact, Summary, Experience, Skills, Education, Spoken Languages.

#### Scenario: ATS PDF places Summary before Skills
- **WHEN** the visitor previews or saves the ATS export
- **THEN** the Summary section appears before the Technical Skills section in the rendered output

#### Scenario: ATS PDF places Experience before Skills
- **WHEN** the visitor previews or saves the ATS export
- **THEN** the Experience section appears before the Technical Skills section in the rendered output

#### Scenario: Identity and Contact remain at the top
- **WHEN** the visitor previews or saves the ATS export
- **THEN** the candidate's name + professional title appear first, immediately followed by the Contact block, both before the Summary

#### Scenario: Spoken Languages appears last
- **WHEN** the visitor previews or saves the ATS export
- **THEN** the Spoken Languages section is the last content section in the rendered output

#### Scenario: On-screen and visual print are unaffected
- **WHEN** the visitor views the CV on screen or uses the regular (non-ATS) print
- **THEN** sections render in the original DOM order (sidebar on the left, main content on the right on desktop; sidebar stacked on top on mobile; standard order on visual print) with no reordering applied
