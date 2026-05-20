## 1. CSS — revert ATS Tech prefix

- [x] 1.1 In `styles.css`, locate `body.ats-print .tech-tags::before` (~line 1767) and replace `content: "Primary technologies and frameworks used: " !important;` with `content: "Tech: " !important;`, preserving the surrounding `font-weight: bold !important;` and `font-size: 12px !important;` declarations.
- [x] 1.2 Confirm no other selector in `styles.css` still references the long prefix string (grep for `"Primary technologies and frameworks used"`).

## 2. HTML — shorten Vueling bullet (EN + ES)

- [x] 2.1 In `index.html`, locate the English Vueling sub-bullet (~line 363) under Hiberus 2017–2019 and replace its body so the text after `<strong>Vueling (fleet-wide Crew Management):</strong>` reads exactly 35 words or fewer while preserving signals: 5-developer team, ~1 year, daily rotation planning, EASA flight-time-limitation compliance, prevention of regulatory infractions.
- [x] 2.2 In `index.html`, locate the Spanish Vueling sub-bullet (~line 356) and replace its body in parallel so the text after `<strong>Vueling (Gestión de Tripulación, escala flota):</strong>` reads ≤35 palabras tras los dos puntos and conveys the same signals.
- [x] 2.3 Verify word count after the bold label for both languages with a manual count and document it inline as a comment in the commit message (no comments in HTML).

## 3. Verification — visual and parser

- [x] 3.1 Open `index.html` in a desktop browser; confirm the on-screen Experience section still shows tech-tag chips unchanged (no visual regression).
- [x] 3.2 Use the regular browser print preview (Ctrl+P, no ATS mode): confirm the visual print stylesheet is unchanged.
- [x] 3.3 Activate ATS mode and print preview in EN and ES: confirm the Tech line now reads `Tech: …` (short prefix) in every role, and that the Vueling sub-bullet body is visibly shorter while still mentioning 5 developers / ~1 year / daily / EASA.
- [x] 3.4 Save both ATS PDFs (`DanielJordan-ATS-EN.pdf` and `DanielJordan-ATS-ES.pdf`) and run them through Enhancv (or whichever ATS checker was used previously); confirm: (a) the "Tech line is a bullet without metrics" false positives are gone, (b) the "Vueling bullet too long" finding is gone, (c) the originally-resolved Vueling "Quantify Impact" and Tecnocom "short bullet" findings remain resolved.

## 4. OpenSpec — supersede note

- [x] 4.1 Validate this change with `openspec validate fix-enhancv-ats-feedback --strict` and resolve any reported issues.
- [x] 4.2 In `openspec/changes/ats-tech-stack-as-text/tasks.md`, leave the previously-completed boxes ticked but add a short note at the bottom of the file recording that §5 (Tech prefix wording) is superseded by `fix-enhancv-ats-feedback` and that the final live wording is `"Tech: "`.

## 5. Bilingual parity check

- [x] 5.1 Diff the EN and ES Vueling bullets side-by-side and confirm that both versions name the same metrics (5 developers / ~1 year / daily planning / EASA flight-time-limitation) and convey the same intent, with no signal present in only one language.

## 6. HTML — enforce ≥10-word Tech line for every role (follow-up after first Enhancv re-run)

The first Enhancv re-run (66/100) confirmed that Ibercaja's Tech line was being parsed as a bullet of 9 words and therefore violated the existing ats-export spec scenario "Tech line crosses the ATS minimum-word threshold for every role". The second re-run (79/100) then exposed the same violation on Hiberus 2017–2019 (8 words). The fix is to add genuine technologies (not to lengthen the prefix), per the same spec.

- [x] 6.1 In `index.html`, in the Ibercaja 2019–2021 experience-item, append a sixth `<span class="tech-tag">WPF (Windows Forms)</span>` after `Entity Framework` so the extracted Tech line reads `Tech: .NET Framework, C#, ASP.NET, SQL Server, Entity Framework, WPF (Windows Forms)` (≥10 words).
- [x] 6.2 In `index.html`, in the Hiberus 2017–2019 experience-item, append three additional `<span class="tech-tag">` entries `LINQ`, `WinForms` and `IIS` after `SQL Server` so the extracted Tech line reads `Tech: Angular, ASP.NET, C#, Entity Framework, SQL Server, LINQ, WinForms, IIS` (≥10 words, all genuinely part of that 2017–2019 stack).
- [x] 6.3 Re-export both ATS PDFs and re-run Enhancv; confirm the "Bullets Consistency — too short" findings on the Tech lines of Ibercaja and Hiberus are gone.

## 7. HTML — reduce repetition of the action verb "Led" (follow-up)

The second Enhancv re-run flagged 3 occurrences of "led" in the English text. This is an editorial polish, not a structural spec rule; it is tracked here only so that the diff against `main` is traceable from a change.

- [x] 7.1 In `index.html`, in the Ibercaja 2019–2021 standalone bullet, replace `Led the technical development` with `Directed the technical development` (EN) and `Lideré el desarrollo técnico` with `Dirigí el desarrollo técnico` (ES), preserving bilingual parity.
- [x] 7.2 In `index.html`, in the Hiberus 2017–2019 Ibercaja Seguros sub-bullet, replace `Led the analysis and development` with `Spearheaded the analysis and development` (EN) and `Lideré el análisis y desarrollo` with `Encabecé el análisis y desarrollo` (ES), preserving bilingual parity.
- [x] 7.3 Leave the third occurrence in the Summary (`successfully led the transformation`) untouched — reducing to 1 occurrence is enough to clear Enhancv's repetition heuristic (≥3).

## 8. Verification — final Enhancv re-run

- [x] 8.1 Re-export both ATS PDFs and upload to Enhancv; confirm: (a) no Tech-line "too short" finding on any role, (b) no "led" repetition finding, (c) the only remaining "Quantify Impact" finding (if any) is the legitimate Ibercaja Seguros premium-calculation bullet, (d) score ≥ the previous 79/100. **Result: 80/100, 0 repetition findings, 0 bullets-consistency findings, 1 quantify finding (Ibercaja Seguros — legitimate), remaining issues are phantom spelling (projekts/crickets — PDF extractor artifact) and template-related ATS Essentials.**
- [x] 8.2 Re-validate the change with `openspec validate fix-enhancv-ats-feedback --strict` and resolve any reported issues.
