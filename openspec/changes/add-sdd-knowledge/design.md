## Context

The CV currently lists AI-related expertise inside a single sidebar skills category — "AI & Productivity" / "IA & Productividad" in `index.html` — containing: `GitHub Copilot, Generative AI, Augmented Engineering`. SEO metadata (`description`, `keywords`, OG, Twitter) also mentions AI-driven development and Copilot.

Spec-Driven Development (SDD) is a methodology where machine-readable specs drive code generation and review. Two relevant toolchains exemplify it:
- **OpenSpec** — the CLI / workflow already used in this repo (`openspec/` directory).
- **spec-kit (GitHub)** — GitHub's open-source toolkit for spec-driven development.

The change introduces a concise, recruiter-facing mention of SDD knowledge naming both tools, without altering the CV's visual structure.

## Goals / Non-Goals

**Goals:**
- Surface "Spec-Driven Development / SDD" plus the tools "OpenSpec" and "spec-kit (GitHub)" on the rendered CV.
- Keep bilingual parity (EN/ES) using the existing `lang-en` / `lang-es` span pattern.
- Keep the addition discoverable via SEO (description + keywords + OG + Twitter).
- Preserve the existing layout, print pagination, and responsive behaviour.

**Non-Goals:**
- No new skills category, no new sidebar section, no icon or visual treatment.
- No deep description or external links to SDD resources.
- No edits to the experience / education / languages sections.
- No changes to README, JS toggle logic, or CSS rules.

## Decisions

**D1. Where to place the SDD mention — inside the existing "AI & Productivity" / "IA & Productividad" skills category.**
Rationale: SDD with OpenSpec / spec-kit is tightly coupled to AI-driven engineering workflows, so it belongs next to "GitHub Copilot, Generative AI, Augmented Engineering". Avoids creating a new category that would unbalance the sidebar and risk pushing the print layout to an extra page.
Alternatives considered:
- New dedicated "Methodologies" category — rejected: visually heavier, single-item category looks thin.
- Inline mention in the profile summary — rejected: less scannable for recruiters skimming skills.

**D2. Exact wording (user-confirmed).**
- EN: append `Spec-Driven Development / SDD (OpenSpec, spec-kit by GitHub)` to the existing list.
- ES: append `Spec-Driven Development / SDD (OpenSpec, spec-kit de GitHub)` to the existing list.
Rationale: keeps the English methodology name in both locales (as is common in the Spanish tech industry) while localising the connector "by"/"de". Explicitly attributes spec-kit to GitHub. Parenthetical tool names mirror the `Kubernetes (AKS)` style already used in the CV.

**D3. SEO updates — full coverage, minimally invasive.**
- Append `Spec-Driven Development` and `SDD` to `<meta name="keywords">`.
- Add a short clause to `<meta name="description">` mentioning Spec-Driven Development (SDD).
- Mirror the same clause in `<meta property="og:description">` and `<meta property="twitter:description">` so social previews stay consistent.
Rationale: matches the existing pattern of co-listing methodologies and tools in metadata; no JSON-LD changes needed.

**D4. No CSS or JS changes.**
Rationale: the new text uses existing `lang-en` / `lang-es` spans inside `.skills-list`; the language toggle already handles them.

## Risks / Trade-offs

- [Print layout overflow] One extra line in the AI category could push the sidebar onto a second printed page. → Mitigation: keep wording on a single line; verify in print preview during apply.
- [Tool-name churn] Tool names may evolve (e.g. spec-kit rename). → Mitigation: methodology name "Spec-Driven Development / SDD" stays primary; tool names are parenthetical and easy to edit later.
- [Mixed-language tool names] "OpenSpec" / "spec-kit" stay untranslated in ES, and the methodology label is kept in English. → Acceptable and intentional: matches common ES-tech usage and how "GitHub Copilot" is already left untranslated.
- [SEO dilution] Adding more keywords could marginally dilute focus. → Mitigation: add only two terms (`Spec-Driven Development`, `SDD`) instead of bloating the list.
