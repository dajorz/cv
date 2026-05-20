## 1. DOM audit

- [x] 1.1 Search `index.html` for every `.tech-tags` element and confirm each one is a sibling of the role's `<ul>`, never a descendant
- [x] 1.2 If any `.tech-tags` element is found inside a `<ul>` or `<li>`, move it out so it becomes a sibling of the list (no content change, structure only)

## 2. CSS hardening in ATS mode

- [x] 2.1 In `styles.css`, inside the existing `@media print { body.ats-print … }` block, update `body.ats-print .tech-tags` to: `display: block; margin: 10px 0 0 0; padding-left: 0; list-style: none; clear: both; break-inside: avoid;`
- [x] 2.2 Keep the existing `body.ats-print .tech-tags::before { content: "Tech: "; font-weight: bold; }` rule unchanged
- [x] 2.3 Add `body.ats-print .tech-tags::marker { content: none; }` defensively
- [x] 2.4 Add a specific separator rule: `body.ats-print .item-description ul + .tech-tags { margin-top: 10px !important; }` to guarantee separation when the Tech line follows a bullet list
- [x] 2.5 Confirm every new selector is prefixed with `body.ats-print` to keep the change scoped

## 3. Verification — ATS PDF

- [x] 3.1 Open `index.html` in a browser, click "ATS PDF" in English and confirm each role's Tech line shows visible vertical breathing room above it
- [x] 3.2 Confirm the Tech line never visually aligns with or appears as part of the bullet list above it
- [x] 3.3 Save the ATS PDF and open it in a text-extracting viewer; confirm the extracted text shows "Tech: …" on its own paragraph, not appended to the previous `<li>` text
- [x] 3.4 Repeat 3.1–3.3 in Spanish

## 4. Regression checks

- [x] 4.1 Reload the page on screen and confirm the colored pill-style tech-tags are unchanged
- [x] 4.2 Trigger the regular (non-ATS) print preview and confirm the visual print PDF tech-tag styling is unchanged
- [x] 4.3 Confirm the bilingual `.tech-tag` content displays correctly in both ES and EN with no missing tags

## 5. Lengthen the ATS prefix to clear the 10-word threshold

- [x] 5.1 In `styles.css`, inside `@media print { body.ats-print … }`, change `body.ats-print .tech-tags::before` content from `"Tech: "` to `"Primary technologies and frameworks used: "` (keep `font-weight: bold` and existing font-size)
- [x] 5.2 Confirm no other CSS rule references `"Tech: "` as `::before` content for `.tech-tags`
- [x] 5.3 Save the ATS PDF and extract its text; for every role, verify the Tech line begins with `"Primary technologies and frameworks used: "` followed by the comma-separated tags
- [x] 5.4 Word-count check on extracted text: confirm the Tech line for the worst-case role (Tecnocom — WPF, Silverlight, VB6, COM+, ASP Classic) contains at least 10 words
- [x] 5.5 Re-run the Enhancv ATS report on the updated PDF and confirm no Tech line is listed under "bullets too short" _(superseded — verified via `fix-enhancv-ats-feedback` §8.1; Enhancv score 80/100, 0 Tech-line findings)_
- [x] 5.6 Confirm the on-screen view and the regular (non-ATS) print PDF still show colored pills with no prefix label _(superseded — CSS reverted to `"Tech: "` prefix; on-screen pills unaffected as always scoped to `body.ats-print`)_

---

> **Note (2026-05-20):** §5 (Tech prefix wording) is superseded by change `fix-enhancv-ats-feedback`.
> The long prefix `"Primary technologies and frameworks used: "` introduced Enhancv false-positive "no metric" flags on the Tech line across all 5 roles, causing a score regression.
> The final live wording is `"Tech: "` (reverted in `styles.css`). Tasks 5.5 and 5.6 above are superseded and should be validated via `fix-enhancv-ats-feedback` §3 instead.
