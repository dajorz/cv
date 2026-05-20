## Why

The current Experience section underperforms ATS scoring (67/100 on the ATS-optimized PDF) and reads as low-impact: 10+ bullets are shorter than 10 words, 7 lack quantitative metrics, action verbs are heavily repeated (`developed`×5, `engineered`×4, `led`×4), and three legacy Hiberus roles (2013–2016) fragment the timeline. The content has not been refreshed since current Visma responsibilities (27 microservices across 4 AKS environments, AI-assisted workflow) became part of the day-to-day.

**Update after first Enhancv re-run (May 2026).** A re-run of the ATS-optimized PDF through Enhancv after sections §1–§8 were implemented surfaced two remaining content gaps that were not visible in the first audit:

- The Hiberus 2017–2019 Vueling bullet, although structurally improved, still lacks numeric quantification (Enhancv flags it under "Quantify Impact" because no numbers are present).
- The Tecnocom 2016–2017 role — which §1–§8 did not touch — has a 9-word Silverlight/WPF bullet that Enhancv flags as too short (Enhancv counts words **after** the leading bold label, so the visible 14 words shrink to 9 for ATS purposes).

This re-run also confirmed that Enhancv occasionally reports phantom typos (`projekts`, `crickets`) that do not exist in any source file. They are parser-side false positives and require no action.

## What Changes

- Rewrite Experience bullets across all roles to add concrete metrics, vary action verbs, and lift every bullet above the 10-word threshold.
- Fuse the three Hiberus 2013–2016 entries (internship, web, desktop) into a single 2013–2016 role with two strong bullets.
- Fuse Ibercaja's three bullets into one hero bullet describing the brokerage platform (sole-developer scope, thousands of policies/day, up to 10 carriers).
- Refresh the Visma block with current scope: microservices on .NET Core, AI-assisted development (GitHub Copilot, 90%+ generated code), 27 services across 4 AKS environments (dev/test/acc/prod), FinOps.
- Reword the Hiberus 2017–2019 Vueling bullet to highlight fleet-wide crew rotations and EASA flight-time-limitation compliance.
- Apply all rewrites in both languages (`.lang-es` and `.lang-en` spans in `index.html`) to preserve bilingual parity.
- Establish a new `cv-content` capability codifying content-quality requirements (metrics, verb variety, minimum bullet length, role fusion) so future edits stay within these guardrails.
- **Post-re-run additions (§9):**
  - Quantify the Vueling bullet with team size (5 developers), engagement length (~1 year) and planning frequency (daily) — values pre-validated with the candidate; no fabricated numbers.
  - Rewrite both Tecnocom 2016–2017 bullets to reflect the candidate's real engagement structure: bullet 1 covers the legacy VB6/COM+/ASP Classic maintenance for an anonymised first client (~2 months); bullet 2 covers the Banco Sabadell internal banking application built in Silverlight/WPF as a 2-person team (~3 months). The first client is intentionally left unnamed in the CV to avoid duplicating Ibercaja with the later Hiberus 2017–2019 role.

## Capabilities

### New Capabilities
- `cv-content`: Content-quality requirements for the Experience section (bullet length, metrics coverage, verb variety, bilingual parity, role grouping).

### Modified Capabilities
<!-- None: this change does not modify ats-export or pdf-download behavior. -->

## Impact

- `index.html`: Experience section (`<section id="experience">`) rewritten for both languages. Existing role headers/dates preserved except for the Hiberus 2013–2016 fusion (3 entries → 1). The §9 additions further edit the Vueling sub-bullet and both Tecnocom 2016–2017 bullets in both languages.
- `styles.css`, `script.js`: no changes expected.
- ATS score: target uplift of ≥10 points on the content axis (short-bullet, metrics, verb-variety findings); §9 specifically targets the two remaining "Quantify Impact" / short-bullet findings flagged by the May 2026 Enhancv re-run.
- SEO/structured data: no impact; meta tags and JSON-LD remain unchanged.
- Print/ATS layout: no layout changes; content-only edit.
