# Roadmap · Portafolio por años

Un portafolio con **una página por año, del 2018 al 2026**, cada una con el estilo web que se
usaba ese año (gradientes y flat en 2018, oscuro en 2020, IA en 2025…), todas bajo
`/portfolio/` en este sitio. Se construye en iteraciones: 2018 fijó el sistema de diseño
(tokens, componentes, datos en JSON, prerender) y los demás años lo heredan con su propio tema.

Las casillas se marcan en el mismo commit que cierra cada paso.

## Bloque 2018 — la plantilla

- [x] 1. Repositorio: Vite + React + TS, Prettier, README con Decisiones. · `npm run build` pasa.
- [x] 2. Sistema de diseño, Vite multi-page y prerender. · `dist/portfolio/2018/index.html` trae "Portfolio 2018" sin JS.
- [x] 3. Datos 2018 completos (`src/data/years/2018.json`): hero, sobre mí, skills, experiencia, proyectos, educación, highlights, testimonios, contacto. · `tsc` valida el JSON contra `YearData`.
- [x] 4. Tema 2018: gradiente violeta→coral, Poppins + Open Sans, cortes diagonales, formas flotando, nav sticky. · captura del hero.
- [x] 5. Ilustraciones flat estilo 2018 (hero, sobre mí, seis proyectos, contacto), SVG propios. · se ven en sus secciones.
- [x] 6. Secciones e interacciones: reveal al hacer scroll, contadores, barras de skills, filtro de proyectos, botón subir. · las 8 secciones con `id` en el HTML.
- [x] 7. Resumen `/portfolio/` con línea de tiempo y tarjetas; `YearNav` con ← →; responsive a 400 px. · capturas escritorio y móvil.
- [x] 8. Pulido 2018: contraste AA, skip link, meta/OG, favicon, robots. · Lighthouse escritorio 100/100/100/100, móvil 94/100/100/100.
- [x] 9. Este `roadmap.md`, enlazado desde el README. · el check `roadmap` vigila que cada año con página esté marcado.

## Los años

Cada año: su JSON de datos, su tema (`src/portfolio/themes/<año>.css`), su entrada en Vite y su
tarjeta activa en `/portfolio/`. Se da por hecho cuando `dist/portfolio/<año>/index.html` existe
con la etiqueta "Portfolio <año>" y hay captura.

- [x] 2018 — gradientes · flat · Poppins — **publicado** (en `dist/`; Pages llega en el paso 13)
- [x] 2019 — oscuro · vidrio · Inter — hecho (fondo azul-noche, tarjetas de vidrio, Living Coral, DM Sans + Inter)
- [x] 2020 — neumórfico · azul · mono — hecho (Classic Blue, relieve neumórfico, neón teal, IBM Plex Mono + Inter, terminal en el hero)
- [x] 2021 — pastel · redondo · Manrope — hecho (crema, blobs pastel, radios enormes, stats bento, Sora + Manrope)
- [ ] 2022 — por investigar (candidato: brutalista)
- [ ] 2023 — por investigar (candidato: gradientes y vidrio)
- [ ] 2024 — por investigar (candidato: minimal blanco, tipografía enorme)
- [ ] 2025 — por investigar (candidato: tema IA, oscuro con neón)
- [ ] 2026 — por investigar (el más actual; enlaza al home 3D)

## Después

- [ ] 13. Pulido 1 — cohesión de las nueve páginas y publicación en GitHub Pages. · URL pública de `/portfolio/`; Lighthouse ≥ 90 / ≥ 95 en tres páginas.
- [ ] 14. Hoja de vida real (la entrega Gustavo). · los nueve JSON con contenido real, o decidido qué años quedan de ejemplo.
- [ ] 15. Contenido real en los nueve JSON, capturas y enlaces. · ningún `[ejemplo]` en `src/data/years` ni en `dist/portfolio`.
- [ ] 16. Pulido final: OG image por año, enlaces desde el home y el README de perfil, PR a `main`. · capturas finales de las nueve.

## Cómo se construye

```
src/data/years/<año>.json      el contenido del año
src/portfolio/themes/<año>.css el tema (solo variables y estilos bajo .year-<año>)
src/portfolio/illustrations/   las ilustraciones del año, como componentes SVG
portfolio/<año>/index.html     la página; scripts/prerender.mjs la deja con el contenido pintado
```

El detalle de cada paso vive en la task T-3 del proyecto Remote Code (PLAN.md); aquí está el
progreso que se ve desde GitHub.
