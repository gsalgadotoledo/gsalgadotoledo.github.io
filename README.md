# gsalgadotoledo.github.io

El sitio personal de Gustavo Salgado, publicado en GitHub Pages en `https://gsalgadotoledo.github.io`.
Todo es estático: Vite genera HTML real por página, sin servidor.

## Qué hay

- `/` — el home (T-2 · Mr. Portfolio).
- `/portfolio/` — resumen del portafolio por años, con una página por año en
  `/portfolio/2018/` … `/portfolio/2026/` (T-3 · Portafolio anual).

<!-- screenshot: pendiente hasta que exista la primera página -->

## Correr

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run lint
npm run format
```

## Decisiones

| Decisión              | Alternativas                                    | Elegida                                          | Por qué                                                            |
| --------------------- | ----------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------ |
| Cómo se publica       | Next.js/SSR · SPA con rutas · páginas estáticas | Páginas estáticas en GitHub Pages                | No hace falta backend; cada URL es un HTML real, sin trucos de 404 |
| Generador             | Astro · Vite multi-page · CRA                   | Vite multi-page con React + TypeScript           | Un `index.html` por página, mismo stack que el home                |
| Lint y formato        | ESLint + Prettier · oxlint + Prettier           | oxlint (lo trae la plantilla de Vite) + Prettier | Rápido, sin config que mantener                                    |
| Textos del portafolio | en JSX · JSON por año                           | `src/data/years/<año>.json`                      | Cambiar contenido es editar JSON                                   |
