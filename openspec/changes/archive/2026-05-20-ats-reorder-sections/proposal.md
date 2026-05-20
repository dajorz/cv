## Why

The Enhancv ATS report on `DanielJordan-ATS-EN.pdf` flagged "inverted structure" because the ATS PDF currently renders Skills, Languages and Contact (the sidebar) before the Summary and Experience. ATS parsers and human screeners both expect Summary → Experience → Skills order, and the current order costs structure points and pushes Experience past the first page.

## What Changes

- When `body.ats-print` is active, reorder the rendered sections so the document reads: Identity (name + title) → Contact → Summary → Experience → Skills → Education → Spoken Languages.
- Implement the reorder via CSS only (flexbox `order` + `display: contents`), without altering the HTML DOM order or the on-screen / visual-print layout.
- Update the `ats-export` capability to formalise the required section order as a normative requirement.

## Capabilities

### New Capabilities
<!-- None: this change only adds a new requirement to an existing capability. -->

### Modified Capabilities
- `ats-export`: Add a new normative requirement specifying the ATS section order.

## Impact

- `styles.css`: Add a small block under `@media print { body.ats-print … }` setting `display: contents` on `.sidebar` and `.main-content`, making `.container` a flex column, and assigning `order` values to each direct grandchild section.
- `index.html`: No structural changes; DOM order preserved (sidebar still first child).
- `script.js`: No changes.
- On-screen layout: unchanged.
- Visual print (`Download PDF`): unchanged — guarded by the `body.ats-print` selector.
- Accessibility: no semantic-order change in the DOM; ATS mode is print-only so the reading-order shift is purely visual on the printed PDF.
