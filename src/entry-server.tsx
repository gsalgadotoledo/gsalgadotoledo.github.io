import type { ReactNode } from 'react'
import { renderToString } from 'react-dom/server'
import { page as portfolio } from './pages/portfolio/index'
import { page as y2018 } from './pages/portfolio/2018'

/** Ruta publicada → árbol. scripts/prerender.mjs recorre esto tras el build. */
export const pages: Record<string, () => ReactNode> = {
  '/portfolio/': portfolio,
  '/portfolio/2018/': y2018,
}

export function render(path: string): string {
  const page = pages[path]
  if (!page) throw new Error(`no page for ${path}`)
  return renderToString(page())
}
