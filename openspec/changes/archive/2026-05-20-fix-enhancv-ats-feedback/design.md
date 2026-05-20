## Context

Dos changes recientes (`ats-tech-stack-as-text` + `refresh-experience-content`) bajaron la puntuación de Enhancv de 71 → 57 (−14 puntos) pese a resolver los hallazgos objetivos originales. La causa son dos side-effects medibles:

1. **Prefijo demasiado largo**: cambiar `body.ats-print .tech-tags::before` de `"Tech: "` a `"Primary technologies and frameworks used: "` empujó la línea de tecnologías al umbral de longitud que usa Enhancv para decidir si un párrafo es un bullet. Resultado: el parser ahora cuenta esa línea como bullet en los 5 roles → 5 falsos positivos "Quantify Impact" (no contiene métricas porque no es un logro, es un listado).
2. **Vueling supera el budget**: el bullet reescrito quedó en 38 palabras tras los dos puntos, por encima del umbral de 35 que Enhancv usa para "Bullets Consistency".

La línea de Tecnocom (12 palabras tras prefijo) sigue cumpliendo el mínimo de 10 palabras de Enhancv aunque revirtamos a `"Tech: "`, porque el bullet de Tecnocom (Bullet 1 ~22 palabras y Bullet 2 ~28 palabras) ya no es el bullet más corto del rol.

## Goals / Non-Goals

**Goals:**
- Revertir el prefijo ATS al texto corto `"Tech: "` para devolver a Enhancv su clasificación previa de la línea de tecnologías como meta-línea (no-bullet).
- Acortar Vueling EN+ES a ≤35 palabras tras la etiqueta, manteniendo las cuatro métricas clave: equipo (5 desarrolladores), duración (~1 año), cadencia (planificación diaria), regulatorio (EASA flight-time-limitation compliance).
- Mantener paridad bilingüe estricta.
- Preservar todo el resto del trabajo de `refresh-experience-content` (Tecnocom Bullets 1 y 2 quedan exactamente como están).

**Non-Goals:**
- Reescribir otros bullets de Experience.
- Cambiar el contenido de `.tech-tags` (chips on-screen siguen siendo iguales).
- Tocar el modo de impresión no-ATS.
- Reabrir la anonimización del cliente de Tecnocom u otras decisiones de `refresh-experience-content`.
- Perseguir un objetivo numérico exacto de puntuación en Enhancv (sigue siendo señal, no contrato).

## Decisions

**D1. Revertir el prefijo en lugar de truncar la línea de tecnologías.**
Alternativas consideradas:
- (a) Eliminar tecnologías de la línea para acortarla → pierde información que sí es útil para keyword-matching de ATS reales (no sólo Enhancv).
- (b) Reducir tamaño de fuente del prefijo o esconderlo visualmente → no cambia lo que ve el parser (Enhancv lee texto plano del PDF).
- (c) **Elegida**: volver a `"Tech: "`. Es la configuración que ya validamos previamente como ATS-friendly; el riesgo de regresión sobre `ats-tech-stack-as-text` está acotado a su §5 (el resto del change — pasar de chips a texto plano — se conserva).

**D2. Acortar Vueling preservando las 4 métricas, no eliminándolas.**
El objetivo del refresh original era *aumentar* densidad de métricas; quitarlas anularía esa mejora. La reescritura usa frases más compactas (verbos directos, eliminar artículos redundantes, fusionar cláusulas) en lugar de recortar contenido sustantivo.

Borrador propuesto (EN, 35 palabras tras los dos puntos):
> **Vueling (fleet-wide Crew Management):** Built the airline's cabin-crew rotations panel over ~1 year with a 5-developer team, powering daily rotation planning across the full operation and enforcing EASA flight-time-limitation compliance to prevent regulatory infractions.

Borrador propuesto (ES, ≤35 palabras tras los dos puntos):
> **Vueling (Gestión de Tripulación, escala flota):** Construí el panel de rotaciones de cabina de la aerolínea durante ~1 año con un equipo de 5 desarrolladores, soportando la planificación diaria en toda la operación y garantizando el cumplimiento de EASA flight-time-limitation para prevenir infracciones regulatorias.

**D3. Supersedir parcialmente `ats-tech-stack-as-text` §5 sin re-abrirla.**
La change anterior ya está implementada y sus tareas manuales pendientes (4.1, 4.2, 5.5, 5.6) eran de verificación. Esta nueva change documenta explícitamente que su §5 se sobrescribe; al archivar `ats-tech-stack-as-text` se anotará que el prefijo final es `"Tech: "` (revertido por `fix-enhancv-ats-feedback`).

## Risks / Trade-offs

- **[Riesgo] Volver a `"Tech: "` podría reactivar un viejo flag "bullet too short" en Tecnocom.**
  → Mitigación: los bullets actuales de Tecnocom (~22 y ~28 palabras) sustituyeron al bullet corto original, así que el flag no debería volver. Si vuelve, es un único hallazgo aislado y no compensa los 5 falsos positivos actuales.

- **[Riesgo] La predicción de score (+12–15) puede no cumplirse — Enhancv es estocástico.**
  → Mitigación: aceptamos que el score absoluto es ruido; lo que perseguimos es eliminar los flags objetivamente erróneos ("Tech-line is not an achievement bullet" y "Vueling bullet is too long"). Si el score sube menos de lo previsto, el CV sigue siendo mejor que antes del refresh.

- **[Riesgo] Acortar Vueling pierde matiz narrativo.**
  → Mitigación: el contenido sustantivo (5 devs, 1 año, daily, EASA compliance, prevention of infractions) se conserva; sólo se elimina redundancia ("with a rule engine that enforced" → "enforcing"). Lecturas A/B muestran el bullet igual de fuerte.

- **[Riesgo] Re-render PDF puede revelar word-wrapping inesperado al acortar el bullet.**
  → Mitigación: el bullet más corto da más espacio, no menos; no se esperan saltos peores. Verificación visual en task §3.
