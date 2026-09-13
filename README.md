# gsalgadotoledo.github.io

El sitio personal de Gustavo Salgado, publicado en GitHub Pages en `https://gsalgadotoledo.github.io`.
Todo es estático: Vite genera HTML real por página, sin servidor.

## Qué hay

- `/` — el home (T-2 · Mr. Portfolio).
- `/portfolio/` — resumen del portafolio por años, con una página por año en
  `/portfolio/2018/` … `/portfolio/2026/` (T-3 · Portafolio anual).

<!-- screenshot: pendiente hasta que exista la primera página -->

## Cómo está hecho

```
index.html                    el home (T-2)
portfolio/index.html          /portfolio/  — el resumen, nueve tarjetas
portfolio/<año>/index.html    /portfolio/<año>/ — una página por año
src/design/tokens.css         tokens del sistema de diseño (los temas los sobreescriben)
src/portfolio/ui/             componentes compartidos: Hero, Section, ProjectCard, Timeline, YearNav, Footer
src/portfolio/year.tsx        renderYear(data): arma la página de un año
src/portfolio/themes/<año>.css  el tema de cada año
src/data/years/<año>.json     el contenido de cada año
src/entries/<página>.tsx      hidratan el HTML en el navegador
src/entry-server.tsx          ruta → página, para el prerender
scripts/prerender.mjs         tras el build, escribe el HTML ya pintado en dist/
```

`npm run build` = `tsc` → build cliente → build SSR → prerender. El resultado en `dist/` es HTML
con contenido real (se lee sin JavaScript); React hidrata encima.

## Correr

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run lint
npm run format
```

## Decisiones

| Decisión              | Alternativas                                                | Elegida                                                 | Por qué                                                                               |
| --------------------- | ----------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Cómo se publica       | Next.js/SSR · SPA con rutas · páginas estáticas             | Páginas estáticas en GitHub Pages                       | No hace falta backend; cada URL es un HTML real, sin trucos de 404                    |
| Generador             | Astro · Vite multi-page · CRA                               | Vite multi-page con React + TypeScript                  | Un `index.html` por página, mismo stack que el home                                   |
| Lint y formato        | ESLint + Prettier · oxlint + Prettier                       | oxlint (lo trae la plantilla de Vite) + Prettier        | Rápido, sin config que mantener                                                       |
| HTML con contenido    | cascarón vacío que pinta React · prerender en build · Astro | prerender en build con `react-dom/server` + hidratación | páginas estáticas de verdad: se leen sin JS, SEO, la etiqueta del año está en el HTML |
| Textos del portafolio | en JSX · JSON por año                                       | `src/data/years/<año>.json`                             | Cambiar contenido es editar JSON                                                      |
