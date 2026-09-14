import type { ReactNode } from 'react'
import { renderToString } from 'react-dom/server'
import { page as portfolio } from './pages/portfolio/index'
import { page as y2018 } from './pages/portfolio/2018'
import { page as y2019 } from './pages/portfolio/2019'
import { page as y2020 } from './pages/portfolio/2020'
import { page as y2021 } from './pages/portfolio/2021'

/** Ruta publicada → árbol. scripts/prerender.mjs recorre esto tras el build. */
export const pages: Record<string, () => ReactNode> = {
  '/portfolio/': portfolio,
  '/portfolio/2018/': y2018,
  '/portfolio/2019/': y2019,
  '/portfolio/2020/': y2020,
  '/portfolio/2021/': y2021,
}

export function render(path: string): string {
  const page = pages[path]
  if (!page) throw new Error(`no page for ${path}`)
  return renderToString(page())
}
