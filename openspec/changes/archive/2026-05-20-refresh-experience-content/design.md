## Context

The CV's Experience section currently scores 67/100 on Enhancv's ATS check (run against `DanielJordan-ATS-EN.pdf`). The structural complaints (section order, `Tech:` lines as `<li>`) are handled by sibling changes `ats-reorder-sections` and `ats-tech-stack-as-text`. This change focuses exclusively on the **content** axis: bullet wording, metrics, action-verb variety, and role grouping in `index.html`.

Content lives inline in `index.html` using twin `<span class="lang-es">` / `<span class="lang-en">` pairs; there is no CMS, build step, or content database. Bilingual parity is a hard constraint.

## Goals / Non-Goals

**Goals:**
- Every Experience bullet has ≥10 words after the leading verb.
- ≥80% of bullets carry at least one quantitative or named-entity signal (numbers, environments, customers, technologies).
- No action verb repeats more than twice across the Experience section.
- Hiberus 2013–2016 collapses from 3 role entries into 1.
- Ibercaja consolidates from 3 bullets into 1 hero bullet.
- Visma block reflects current scope (27 microservices, 4 AKS envs, AI-assisted workflow).
- Vueling bullet names EASA flight-time-limitation compliance.
- Full bilingual parity: ES and EN spans updated together for every edited bullet.

**Non-Goals:**
- No CSS or JS changes.
- No section reordering, layout, or ATS-mode rendering changes (covered by sibling changes).
- No new sections, no removal of existing roles other than the Hiberus fusion.
- No fabricated metrics: only use numbers already validated with the candidate.
- No structured data / JSON-LD changes.

## Decisions

**Decision 1: Fuse Hiberus 2013–2016 into a single role.**
- Alternatives considered:
  - (a) Keep three separate entries with stronger bullets each — rejected: still leaves 3 short blocks fragmenting the early timeline and inflates the page.
  - (b) Drop the internship entry — rejected: loses the "progressed from intern to senior" narrative.
- Chosen: one combined role `Software Developer | Hiberus Tecnología — Sep 2013 – Oct 2016` with two strong bullets covering stack + delivered systems.

**Decision 2: Consolidate Ibercaja into one hero bullet.**
- The role's three current bullets each restate the same context (insurance brokerage, calculation, integrations). One dense bullet carrying the "thousands of policies/day, up to 10 carriers, sole developer" signal is stronger for ATS keyword density and human scan.

**Decision 3: Approved verb palette.**
- Allowed (each used ≤2 times): `Built`, `Designed`, `Delivered`, `Shipped`, `Operate`, `Drove`, `Applied`, `Led`, `Engineered`, `Owned`.
- Banned for this pass (overused in current copy): more than 2 uses of any of `developed`, `engineered`, `led`.

**Decision 4: Approved metric set (no fabrication).**
- Visma: `27 microservices`, `4 AKS environments (dev/test/acc/prod)`, `90%+ AI-generated code`.
- Ibercaja: `thousands of policies/day`, `up to 10 insurance and reinsurance carriers`, `sole developer`.
- Hiberus / Vueling: `fleet-wide`, `EASA flight-time-limitation compliance`. No invented numbers for older roles.

**Decision 5: Establish `cv-content` capability rather than embed rules in `ats-export`.**
- ATS export covers *how* the document is rendered for parsers. Content quality (verb variety, metric coverage) is editorial policy that applies to the on-screen CV as well as the ATS PDF. Keeping it in its own capability makes future content audits targeted.

**Decision 6 (added after first Enhancv re-run): Extend this change rather than open a new one for the post-re-run tweaks.**
- Alternatives considered:
  - (a) Open a new change `quantify-vueling-and-tecnocom` — rejected: would duplicate the `cv-content` capability and split the editorial narrative across two changes; this change is still active (not archived) so extension is the cleanest path.
  - (b) Park the tweaks under the empty `fix-enhancv-ats-feedback` shell — rejected: that shell has no defined capability, no proposal, and would force a parallel scope decision with no benefit.
- Chosen: append a §9 "Post-Enhancv content tweaks" section to `tasks.md`, mirror it as new ADDED requirements in `specs/cv-content/spec.md`, and document the trigger in `proposal.md`. Same pattern was applied to `ats-tech-stack-as-text` §5 and worked well.

**Decision 7: Anonymise the first Tecnocom client in the CV.**
- The first Tecnocom 2016–2017 client is, in real life, Ibercaja — but the candidate spent ~2 months there waiting for a project that never started. Naming Ibercaja under Tecnocom would create a confusing duplicate with the Hiberus 2017–2019 Ibercaja engagement (where the candidate did deliver substantial work).
- Chosen: bullet 1 refers to "a client's legacy VB6 + COM+ + ASP Classic platform" without naming the client. Honest about scope, neutral about outcome, and leaves the Ibercaja narrative cleanly anchored under Hiberus.

**Decision 8: Use the neutral wording for the legacy bullet, not the transparent one.**
- The transparent variant ("…during a ~2-month engagement *while a follow-up project was being negotiated*") is honest but reads as bench/standby to a recruiter scanning quickly.
- Chosen: "…supporting day-to-day operations during a ~2-month period." Equally honest about the work performed, drops the negotiation framing, leaves room for the candidate to volunteer the full context in interview if asked.

## Risks / Trade-offs

- [Risk] Bilingual drift if ES and EN spans are edited separately → Mitigation: tasks.md groups every bullet edit as a single ES+EN unit; reviewer verifies parity bullet-by-bullet.
- [Risk] Rewritten bullets break the visual print layout (page breaks) → Mitigation: render visual PDF (`Download PDF`) after the rewrite and visually confirm Experience still fits expected page count.
- [Risk] Removing the three Hiberus role headers loses ATS-detected "job title" entries → Mitigation: keep the role-title text intact within the fused entry; ATS parsers detect titles by line, not by HTML block boundaries.
- [Risk] New metrics could be challenged in interviews → Mitigation: all metrics in this change are pre-validated with the candidate; no new claims introduced.
- [Risk] Anonymising the first Tecnocom client could read as evasive → Mitigation: the bullet stays factual about stack and duration; interviewers who ask are told the real context (Ibercaja pre-engagement that didn't launch).
- [Known false positive] Enhancv reports phantom typos `projekts` and `crickets` that do not exist in any source file (`grep -i 'projekt\|cricket' **/*.{md,html,css,js}` returns zero matches). These are parser-side artifacts (likely PDF-text extraction quirks combined with Enhancv's spell-checker) and **require no action**. Documenting here so future audits don't re-investigate.

## Migration Plan

- No runtime migration. Edit is text-only in `index.html`. Deploy by pushing to `main` (GitHub Pages auto-publishes). Rollback = revert the commit.
