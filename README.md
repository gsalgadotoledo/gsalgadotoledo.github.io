# gsalgadotoledo.github.io

Gustavo Salgado's site, on GitHub Pages at `https://gsalgadotoledo.github.io`. All static: Vite
builds real HTML per page, prerendered, no server.

## Pages

- `/` — the home: who I am, what I work on, the stack.
- **[`/resume/`](https://gsalgadotoledo.github.io/resume/)** — the resume as a story read top to
  bottom: a prompt that types, the agent's trace filling line by line, the runtime diagram drawing
  itself, the jobs stacking as cards, the stack as a manifest. Dark, monospaced, one accent.

## Publishing

GitHub Pages with **Source = GitHub Actions**: `.github/workflows/pages.yml` builds and deploys on
every push to `main`. The workflow runs lint, build and the audit before uploading `dist/`, so a
page missing its skeleton (meta, canonical, one `<h1>`, skip link, prerendered content) never
ships.

## How it is made

```
index.html                 the home, plain HTML
resume/index.html          /resume/ — the shell; the prerender fills #root
src/resume/data.ts         the resume content: one file to edit
src/resume/Resume.tsx      the sections
src/resume/resume.css      the theme and the scroll choreography (CSS scroll-driven animations)
src/resume/motion.tsx      reveals, typing, counters, the rail — progressive, honors reduced motion
src/design/tokens.css      base tokens
src/entries/resume.tsx     hydrates the HTML in the browser
src/entry-server.tsx       route → page, for the prerender
scripts/prerender.mjs      after the build, writes the painted HTML into dist/
scripts/audit.mjs          the skeleton check over dist/
```

`npm run build` = `tsc` → client build → SSR build → prerender. `dist/` is HTML with real
content (readable without JavaScript); React hydrates on top.

## Run

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run audit    # over dist/
npm run lint
npm run format
```

## Decisions

| Decision        | Alternatives                                  | Chosen                                              | Why                                                                           |
| --------------- | --------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------- |
| How it ships    | Next.js/SSR · SPA with routes · static pages  | Static pages on GitHub Pages                        | No backend needed; every URL is a real HTML file                              |
| Generator       | Astro · Vite multi-page · CRA                 | Vite multi-page with React + TypeScript             | One `index.html` per page                                                     |
| Content in HTML | empty shell React paints · prerender · Astro  | prerender with `react-dom/server` + hydration       | Readable without JS, SEO, fast first paint                                    |
| Scroll motion   | GSAP/ScrollTrigger · Framer Motion · CSS + IO | CSS scroll-driven animations + IntersectionObserver | Zero dependencies, 60 fps, degrades to a static page, respects reduced motion |
| Resume content  | in JSX · JSON · a TS module                   | `src/resume/data.ts`                                | Typed, one file to edit                                                       |

The earlier portfolio — one page per year, 2018–2026, each in the style of its time — lives in
the git history and in the `task/T-3-portfolio-anual` branch.
