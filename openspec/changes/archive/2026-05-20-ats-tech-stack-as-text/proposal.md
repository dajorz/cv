## Why

The Enhancv ATS report counted the per-role "Tech: …" lines as if they were extra short bullets, inflating the "10 bullets under 10 words" finding. The existing ATS stylesheet already collapses tech-tags into a single inline block prefixed by "Tech: ", but visually and structurally the line still sits immediately below the role's `<ul>`, so ATS parsers conflate it with the bullet list. We need to make the Tech line unambiguously a paragraph-level annotation, distinct from the bullet list, in the ATS PDF.

A follow-up Enhancv run after the initial CSS hardening confirmed that even with full structural separation, short Tech lines (≤9 words, e.g. roles with 5 technologies) are still flagged as "bullets too short". Enhancv's heuristic is length-based and ignores HTML/visual structure. To finally clear the flag, the extracted Tech line text MUST cross the 10-word threshold for every role, including the worst case (5 single-word technologies).

## What Changes

- In ATS mode, render the `.tech-tags` block as a clearly-separated paragraph (own block, explicit vertical gap above the line, bold prefix label, plain comma-separated technologies) that no ATS parser can mistake for an `<li>`.
- Guarantee in the spec that the Tech line is NOT visually adjacent to the experience bullet list (minimum vertical margin), is NOT nested inside any `<ul>` / `<li>`, and reads as a single inline sentence.
- Replace the bold ATS-only prefix "Tech: " with the longer phrase "Primary technologies and frameworks used: " so that every role's extracted Tech line contains at least 10 words, including the shortest role (Tecnocom: 5 single-word technologies → 11 words total).
- Strengthen the existing `ats-export` requirement covering Tech-as-text with explicit structural, visual-separation, and minimum-word-count guarantees.

## Capabilities

### New Capabilities
<!-- None. -->

### Modified Capabilities
- `ats-export`: Replace the existing "Technologies rendered as plain text" requirement with a stronger version that adds structural (no list ancestor) and visual-separation (vertical margin) guarantees.

## Impact

- `styles.css`: Adjust the `body.ats-print .tech-tags` rule — increase `margin-top` for clear visual separation from the preceding `<ul>`, add `clear: both`, and confirm `display: block` plus paragraph-like spacing. Reset any inherited list-item styling. Update the `body.ats-print .tech-tags::before` rule to use the longer prefix `"Primary technologies and frameworks used: "`.
- `index.html`: Verify (and fix if needed) that every `.tech-tags` div is a sibling of `<ul>`, never a descendant. No content edits.
- `script.js`: No changes.
- On-screen layout: unchanged (rules are inside `@media print { body.ats-print … }`).
- Visual print: unchanged.
- ATS PDF: Tech line now reads "Primary technologies and frameworks used: A, B, C" with visible breathing room above it and a structure parsers won't confuse with a bullet, and a length comfortably above the 10-word ATS threshold for every role.
