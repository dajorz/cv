## 1. Audit DOM markers

- [x] 1.1 Inspect `index.html` and confirm that the three sidebar sections (Contact, Technical Skills, Spoken Languages) have stable class hooks (e.g. `contact`, `skills`, `languages`); add minimal marker classes if missing
- [x] 1.2 Inspect `index.html` and confirm that Summary, Experience and Education each have a stable selector (id or class) usable from CSS; add a minimal marker if missing
- [x] 1.3 Verify that adding any new marker classes does not affect existing CSS rules (grep `styles.css` for the new selectors before adding)

## 2. CSS reorder block

- [x] 2.1 In `styles.css`, inside the existing `@media print { body.ats-print … }` section, add a rule turning `.sidebar` and `.main-content` into `display: contents` and `.container` into `display: flex; flex-direction: column;`
- [x] 2.2 Add `order` declarations: `.profile-section` order 1, contact section order 2, summary order 3, experience order 4, skills section order 5, education order 6, spoken-languages section order 7
- [x] 2.3 Verify every new selector is prefixed with `body.ats-print` to keep the change scoped to ATS mode

## 3. Verification — ATS mode

- [x] 3.1 Open `index.html`, switch to English, click "ATS PDF" and confirm the print preview shows: Name + Title → Contact → Summary → Experience → Skills → Education → Spoken Languages
- [x] 3.2 Switch to Spanish and repeat — same order
- [x] 3.3 Save the ATS PDF (English) and visually confirm Summary lands above the fold on page 1

## 4. Regression — on-screen and visual print

- [x] 4.1 Reload the page without ATS mode and confirm the on-screen layout is unchanged (sidebar on left, main content on right at desktop width)
- [x] 4.2 Resize the browser to mobile width and confirm sidebar still stacks on top of main content
- [x] 4.3 Trigger the regular (non-ATS) print preview and confirm the visual print PDF is unchanged
- [x] 4.4 Use the language toggle in screen view and confirm both ES and EN render without any reordering or layout shift
