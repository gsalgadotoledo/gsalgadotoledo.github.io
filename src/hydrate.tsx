import type { ReactNode } from 'react'
import { hydrateRoot } from 'react-dom/client'

/** Hidrata el HTML que dejó el prerender. Cada entrada de página lo llama con su árbol. */
export function hydrate(tree: ReactNode) {
  const root = document.getElementById('root')
  if (root) hydrateRoot(root, tree)
}
