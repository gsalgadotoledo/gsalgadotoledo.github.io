import type { ReactNode } from 'react'
import { renderToString } from 'react-dom/server'
import { page as resume } from './pages/resume'

/** Published route → tree. scripts/prerender.mjs walks this after the build. */
export const pages: Record<string, () => ReactNode> = {
  '/resume/': resume,
}

export function render(path: string): string {
  const page = pages[path]
  if (!page) throw new Error(`no page for ${path}`)
  return renderToString(page())
}
