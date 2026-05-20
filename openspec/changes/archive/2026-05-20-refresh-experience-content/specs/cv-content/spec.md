## ADDED Requirements

### Requirement: Experience bullets carry quantitative or named-entity signals

Each bullet in the Experience section SHALL carry at least one quantitative metric, named environment, named customer/system, or concrete technology stack reference. At least 80% of all Experience bullets MUST satisfy this rule.

#### Scenario: Every current-role bullet has a signal
- **WHEN** the visitor reads the Experience section in either language
- **THEN** every bullet under the current Visma role contains either a number, a named environment (e.g. AKS), a named technology, or a percentage

#### Scenario: Aggregate coverage across all roles
- **WHEN** the Experience section is audited
- **THEN** at least 4 out of every 5 bullets across all roles include at least one quantitative metric or named-entity signal

### Requirement: Minimum bullet length

Every Experience bullet SHALL be at least 10 words long (excluding leading section labels such as "Tech:") in both Spanish and English.

#### Scenario: No short bullets in either language
- **WHEN** the visitor reads any Experience bullet
- **THEN** the bullet text is 10 words or longer in the active language

### Requirement: Action-verb variety

No leading action verb SHALL be repeated more than twice across the entire Experience section in either language.

#### Scenario: No verb appears more than twice
- **WHEN** the Experience section is scanned for the first word of each bullet
- **THEN** no verb (e.g. "Developed", "Engineered", "Led") appears as the leading verb of more than two bullets in the active language

### Requirement: Hiberus 2013–2016 is rendered as a single fused role

The three legacy Hiberus 2013–2016 entries (internship, web developer, desktop developer) SHALL be rendered as a single role spanning Sep 2013 – Oct 2016 with two bullets summarising the stack and delivered systems.

#### Scenario: Single Hiberus 2013–2016 entry visible
- **WHEN** the visitor reads the Experience section
- **THEN** exactly one role header is shown for Hiberus Tecnología with a date range of Sep 2013 – Oct 2016, followed by two bullets, in both languages

### Requirement: Ibercaja role consolidated into one hero bullet

The Ibercaja role SHALL be rendered with a single bullet that names: the platform scope (core insurance brokerage), sole-developer ownership, throughput ("thousands of policies/day"), and breadth ("up to 10 insurance and reinsurance carriers").

#### Scenario: Ibercaja hero bullet contains all required signals
- **WHEN** the visitor reads the Ibercaja role
- **THEN** the role contains exactly one bullet, and that bullet mentions "sole developer", a throughput phrase referring to policies per day, and a count of carriers, in both languages

### Requirement: Visma current scope is reflected in the Experience section

The current Visma role SHALL include bullets that explicitly name: microservices on .NET Core, AI-assisted development with GitHub Copilot, 27 microservices across 4 AKS environments (dev/test/acc/prod), and FinOps cost management.

#### Scenario: Visma bullets carry current operational scope
- **WHEN** the visitor reads the Visma role
- **THEN** the bullets mention all of: ".NET Core" (or "microservices"), "GitHub Copilot", "27 microservices", "4 AKS environments", and "FinOps", in both languages

### Requirement: Vueling bullet names EASA compliance

The Hiberus 2017–2019 Vueling reference SHALL describe the fleet-wide crew rotations panel and explicitly name EASA flight-time-limitation compliance.

#### Scenario: Vueling bullet mentions EASA FTL
- **WHEN** the visitor reads the Hiberus 2017–2019 role
- **THEN** the Vueling sub-bullet contains the words "EASA" and a flight-time-limitation reference, in both languages

### Requirement: Vueling bullet carries quantitative engagement signals

The Hiberus 2017–2019 Vueling sub-bullet SHALL additionally name the team size (5 developers), engagement duration (~1 year), and planning frequency (daily rotation planning) so that ATS parsers using post-bold-label word-counting recognise it as a quantified bullet.

#### Scenario: Vueling bullet contains team, duration and frequency signals
- **WHEN** the visitor reads the Hiberus 2017–2019 Vueling sub-bullet
- **THEN** the body after the leading bold label mentions all of: a team-size phrase referring to 5 developers, a duration phrase referring to ~1 year, and a frequency phrase referring to daily rotation planning, in both languages

### Requirement: Tecnocom 2016–2017 role exposes both real engagements

The Tecnocom 2016–2017 role SHALL be rendered with two bullets that together describe the candidate's actual work during the five-month period: a ~2-month maintenance engagement on a legacy VB6 + COM+ + ASP Classic platform for an anonymised first client, and a ~3-month engagement at Banco Sabadell building an internal banking application in Silverlight/WPF as part of a 2-person team.

#### Scenario: Tecnocom legacy bullet describes anonymised first client
- **WHEN** the visitor reads the Tecnocom 2016–2017 role
- **THEN** the first bullet's body, after the leading bold label, mentions a client's legacy VB6 + COM+ + ASP Classic platform and a ~2-month period, does not name the client, and does not refer to a parallel project being negotiated, in both languages

#### Scenario: Tecnocom Sabadell bullet names client, stack, team and duration
- **WHEN** the visitor reads the Tecnocom 2016–2017 role
- **THEN** the second bullet's body, after the leading bold label, names "Banco Sabadell", names "Silverlight" and "WPF", references a 2-person team, and references a ~3-month engagement, in both languages

#### Scenario: Tecnocom bullets meet the post-bold-label minimum length
- **WHEN** the Tecnocom 2016–2017 role is audited for ATS bullet length
- **THEN** each of the two bullets has at least 20 words after the leading bold label in both languages

### Requirement: Bilingual parity for Experience content

Every Experience bullet edited under this content policy SHALL appear in both `lang-es` and `lang-en` spans, and the two versions MUST convey the same metrics, named entities, and verb intent.

#### Scenario: Editing a bullet updates both languages
- **WHEN** an Experience bullet is added, modified, or removed
- **THEN** the corresponding `.lang-es` and `.lang-en` spans are both updated in the same change, and both versions contain the same numbers, environment names, and customer/system names
