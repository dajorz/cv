## 1. Content updates in index.html

- [x] 1.1 In the "IA & Productividad" skills category, append `Spec-Driven Development / SDD (OpenSpec, spec-kit de GitHub)` to the `.lang-es` span text.
- [x] 1.2 In the same "AI & Productivity" skills category, append `Spec-Driven Development / SDD (OpenSpec, spec-kit by GitHub)` to the `.lang-en` span text.
- [x] 1.3 Confirm no new `.skills-category` block is introduced and the category title remains unchanged.

## 2. SEO metadata updates in index.html

- [x] 2.1 Update `<meta name="description">` to mention Spec-Driven Development (SDD) as part of the AI-driven development clause.
- [x] 2.2 Append `Spec-Driven Development` and `SDD` to `<meta name="keywords">` without reordering existing keywords.
- [x] 2.3 Mirror the SDD wording into `<meta property="og:description">` and `<meta property="twitter:description">`.

## 3. Verification

- [x] 3.1 Open `index.html` locally and toggle the language switch; verify only one variant of the SDD text is visible per language and that it sits inside the AI skills category.
- [X] 3.2 Run a print preview (Ctrl+P) and confirm the sidebar still fits within the existing pagination with no overflow or new web-only artefacts.
- [X] 3.3 Resize the viewport to mobile (320–767px), tablet (768–1199px) and desktop (≥1200px); confirm no layout regression in the AI skills category.
- [x] 3.4 View page source and confirm the keywords, description, og:description and twitter:description meta tags include the new SDD terms.

## 4. Commit

- [x] 4.1 Stage the modified `index.html` and commit using Conventional Commits, e.g. `feat: add Spec-Driven Development (OpenSpec, spec-kit by GitHub) to AI skills and SEO metadata`.

## 5. Profile summary — AI-Driven Development bullet

- [x] 5.1 In the EN profile summary, extend the `AI-Driven Development` bullet to mention Spec-Driven Development (SDD), OpenSpec, and spec-kit alongside Generative AI.
- [x] 5.2 In the ES profile summary, extend the `Desarrollo Impulsado por IA` bullet to mention Spec-Driven Development (SDD), OpenSpec, and spec-kit alongside IA Generativa.
- [x] 5.3 Stage and commit: `feat: mention SDD (OpenSpec, spec-kit) in AI-Driven Development profile bullet (EN/ES)`.