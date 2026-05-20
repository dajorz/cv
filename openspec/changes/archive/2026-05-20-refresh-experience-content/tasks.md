## 1. Visma current role (Aug 2021 – present)

- [x] 1.1 Replace the "Microservices Development" bullet (ES + EN) with the approved wording: ".NET Core, business logic and identity services, high-performance scalable APIs in the Youforce ecosystem"
- [x] 1.2 Replace the "AI-Assisted Development" bullet (ES + EN) with: "GitHub Copilot, 90%+ AI-generated code, critical review for security/compliance/performance"
- [x] 1.3 Replace the "Infrastructure & Automation" bullet (ES + EN) with: "Operate 27 microservices across 4 AKS environments (dev/test/acc/prod), Terraform + Bicep, fully automated CI/CD"
- [x] 1.4 Replace the "Security & Cost Management" bullet (ES + EN) with: "FinOps practices to cut cloud spend, IAM workloads compliant with strict security protocols in highly regulated environments"

## 2. Ibercaja role

- [x] 2.1 Replace the three existing bullets with a single hero bullet (ES + EN): "Led the technical development of the core insurance brokerage platform — sole developer — processing thousands of policies/day across up to 10 insurance and reinsurance carriers, covering premium calculation, third-party data aggregation and B2B integrations under strict regulatory compliance."

## 3. Hiberus 2017–2019 role (Vueling reference)

- [x] 3.1 Replace the Vueling bullet (ES + EN) with: "Vueling (fleet-wide Crew Management): Built the airline's cabin-crew rotations panel, used across the full operation, with a rule engine that enforced EASA flight-time-limitation compliance and prevented regulatory infractions."

## 4. Hiberus 2013–2016 fusion

- [x] 4.1 Remove the two redundant Hiberus role headers (2013–2014 internship, 2015–2016 desktop), keeping a single header "Software Developer | Hiberus Tecnología — Sep 2013 – Oct 2016" in both languages
- [x] 4.2 Replace the merged role's bullets (ES + EN) with the two approved bullets: "Delivered full-lifecycle Windows desktop ERP and web applications across the Microsoft stack (ASP.NET, ADO.NET, WinForms, VB.NET, SQL Server)." and "Shipped a sales-order ERP, a real-time-sync custom CRM, and management systems for the Provincial Council of Zaragoza, progressing from internship to senior developer responsibilities."

## 5. Verb-variety + length sweep

- [x] 5.1 Audit the final Experience section in English: confirm no leading action verb is used more than twice
- [x] 5.2 Audit the final Experience section in Spanish: confirm no leading action verb is used more than twice
- [x] 5.3 Confirm every bullet (ES and EN) is at least 10 words long after the leading bold label, if any
- [x] 5.4 Confirm at least 80% of bullets contain a metric or named-entity signal in both languages

## 6. Bilingual parity verification

- [x] 6.1 For each edited bullet, diff the `.lang-es` and `.lang-en` spans side by side and confirm both versions reference the same metrics, system names and customer names
- [x] 6.2 Toggle the language switch in a local browser and confirm both ES and EN render the new content without layout breakage

## 7. Print + ATS smoke test

- [x] 7.1 Open `index.html` in a browser, switch to English, click "Download PDF" and confirm the visual PDF still fits the expected page count
- [x] 7.2 Switch to Spanish and repeat the visual PDF check
- [x] 7.3 Click "ATS PDF" in English and confirm the rendered ATS preview has no obvious truncation or layout regression (this change does not modify ATS layout, but the content edit must not break it)
- [x] 7.4 Repeat the ATS preview check in Spanish

## 8. Spec capability stub

- [x] 8.1 After the change is archived, ensure `openspec/specs/cv-content/spec.md` exists with the requirements introduced in this change (handled by archive workflow; no manual action during apply)

## 9. Post-Enhancv content tweaks (added after first re-run, May 2026)

- [x] 9.1 Replace the Vueling sub-bullet (EN) under Hiberus 2017–2019 with: "Vueling (fleet-wide Crew Management): Built the airline's cabin-crew rotations panel over ~1 year with a 5-developer team, supporting daily rotation planning across the full operation, with a rule engine that enforced EASA flight-time-limitation compliance and prevented regulatory infractions."
- [x] 9.2 Replace the Vueling sub-bullet (ES) with the parallel translation, preserving "EASA flight-time-limitation" verbatim and keeping the same metrics (~1 año, 5 desarrolladores, planificación diaria).
- [x] 9.3 Replace the Tecnocom Bullet 1 (EN) with: "Legacy Architecture (VB6 / COM+ / ASP Classic): Maintained mission-critical business logic on a client's legacy VB6 + COM+ + ASP Classic platform, supporting day-to-day operations during a ~2-month period."
- [x] 9.4 Replace the Tecnocom Bullet 1 (ES) with the parallel translation, keeping VB6 / COM+ / ASP Classic verbatim and the ~2-month duration; do not name the client and do not mention any parallel project being negotiated.
- [x] 9.5 Replace the Tecnocom Bullet 2 (EN) with: "Banco Sabadell (internal banking application): Built Silverlight/WPF screens for the bank's internal banking application as part of a 2-person team during a ~3-month engagement, owning end-to-end delivery of production features."
- [x] 9.6 Replace the Tecnocom Bullet 2 (ES) with the parallel translation, keeping "Banco Sabadell", "Silverlight", "WPF", the 2-person team and the ~3-month duration.
- [x] 9.7 Tech-tag review for the Tecnocom role: keep WPF, Silverlight, VB6, COM+ and ASP Classic; do not add or remove tags as part of this section
- [x] 9.8 Word-count check: confirm every bullet edited in §9 has ≥10 words after the leading bold label in both languages (Vueling bullet, Tecnocom Bullet 1, Tecnocom Bullet 2)
- [x] 9.9 Bilingual parity check: diff ES vs EN for each §9 bullet and confirm same metrics, names and stack references appear in both
- [x] 9.10 Re-run the ATS-optimized PDF through Enhancv after §9 ships; record the new score and confirm the two findings (Vueling "Quantify Impact", Tecnocom short bullet) no longer appear
  - Result: Vueling "Quantify Impact" ✅ gone; Tecnocom "short bullet" ✅ gone. New score 57/100 (down from 71/100) — regression caused by side-effects of §5 (Tech line now parsed as bullet) and Vueling now flagged "too long" (38 > 35 words). Both objective findings of §9 confirmed eliminated; broader score regression to be addressed in a separate change.
