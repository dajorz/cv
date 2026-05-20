## Why

Tras aplicar `ats-tech-stack-as-text` (prefijo `"Primary technologies and frameworks used: "`) y `refresh-experience-content` (re-redacción Vueling/Tecnocom), una nueva pasada por Enhancv bajó la puntuación de 71 → 57 (−14). Diagnóstico: el prefijo largo hizo que el parser de Enhancv tratara la línea `Tech:` como un bullet sin métrica (×5 roles), y el bullet de Vueling quedó en 38 palabras (>35, límite Enhancv). Los hallazgos objetivos originales (Vueling "Quantify Impact", Tecnocom "short bullet") siguen resueltos; sólo queremos eliminar los side-effects.

## What Changes

- Revertir el prefijo ATS de la línea de tecnologías de `"Primary technologies and frameworks used: "` a `"Tech: "` en `styles.css` (`body.ats-print .tech-tags::before`), para que Enhancv vuelva a clasificarla como meta-línea y no como bullet.
- Acortar el bullet de Vueling (EN + ES) a ≤35 palabras tras los dos puntos, preservando las métricas clave (5 desarrolladores, ~1 año, planificación diaria, EASA flight-time-limitation compliance).
- Mantener intacta toda la re-redacción de Tecnocom (Bullets 1 y 2) y los demás bullets de la sección Experience.
- No tocar el modo on-screen (las pills siguen igual) ni el modo de impresión no-ATS.

## Capabilities

### New Capabilities
<!-- Ninguna -->

### Modified Capabilities
- `ats-export`: requisito de "Tech line prefix" vuelve al texto corto `"Tech: "`; requisito de "Bullet length budget" se refina para el caso Vueling (≤35 palabras tras la etiqueta en negrita).
- `cv-content`: el bullet de Vueling se reescribe a una variante más compacta (≤35 palabras tras los dos puntos) manteniendo las mismas métricas.

## Impact

- `styles.css` — una regla CSS (`body.ats-print .tech-tags::before { content: ... }`).
- `index.html` — dos líneas (bullet Vueling EN, bullet Vueling ES).
- Specs afectadas: `openspec/specs/ats-export/spec.md` (Tech line prefix + bullet budget) y `openspec/specs/cv-content/spec.md` (Vueling bullet).
- Sin impacto en SEO, JSON-LD, responsive, scripts ni en el modo de impresión estándar.
- Las tareas manuales pendientes de `ats-tech-stack-as-text` (4.1, 4.2, 5.5, 5.6) quedan supersedidas por esta change (la 5.5 se valida aquí; el prefijo cambia, así que sus específicos de §5 se sobrescriben).
