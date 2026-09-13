// Después de `vite build` (cliente) y `vite build --ssr` (servidor): pinta cada página con
// react-dom/server y la escribe en su index.html de dist/. Así el HTML publicado trae el
// contenido de verdad; React hidrata encima.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const dist = new URL('../dist/', import.meta.url).pathname
const server = await import(join(dist, '.server/entry-server.js'))

for (const path of Object.keys(server.pages)) {
  const file = join(dist, path, 'index.html')
  const html = readFileSync(file, 'utf8')
  const out = html.replace('<div id="root"></div>', `<div id="root">${server.render(path)}</div>`)
  if (out === html) throw new Error(`${file}: no encontré <div id="root"></div>`)
  writeFileSync(file, out)
  console.log(`prerender ${path}`)
}
rmSync(join(dist, '.server'), { recursive: true, force: true })
