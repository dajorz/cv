## MODIFIED Requirements

### Requirement: Vueling bullet carries quantitative engagement signals

The Hiberus 2017–2019 Vueling sub-bullet SHALL additionally name the team size (5 developers), engagement duration (~1 year), and planning frequency (daily rotation planning) so that ATS parsers using post-bold-label word-counting recognise it as a quantified bullet, AND the body after the leading bold label SHALL be at most 35 words long in both languages so that ATS parsers using a "Bullets Consistency" length heuristic do not flag it as too long.

#### Scenario: Vueling bullet contains team, duration and frequency signals
- **WHEN** the visitor reads the Hiberus 2017–2019 Vueling sub-bullet
- **THEN** the body after the leading bold label mentions all of: a team-size phrase referring to 5 developers, a duration phrase referring to ~1 year, and a frequency phrase referring to daily rotation planning, in both languages

#### Scenario: Vueling bullet body fits within the ATS length budget
- **WHEN** the Hiberus 2017–2019 Vueling sub-bullet is audited for ATS bullet length
- **THEN** the bullet body after the leading bold "Vueling …:" label is at most 35 words long in both English and Spanish, while still containing the team, duration, frequency and EASA flight-time-limitation signals
