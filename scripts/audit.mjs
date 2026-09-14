// Auditor de cohesión: lee dist/portfolio y comprueba que las diez páginas (el resumen y los
// nueve años) comparten el mismo esqueleto — idioma, título, meta, canonical, Open Graph,
// favicon, enlace de salto, un solo <h1>, jerarquía de encabezados sin saltos, enlaces con
// texto y la misma YearNav. Sale con código 1 y una línea por fallo.
//
//   node scripts/audit.mjs            # sobre dist/
//
import { readFileSync, existsSync } from 'node:fs'

const YEARS = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']
const SITE = 'https://gsalgadotoledo.github.io'
const fails = []
const fail = (page, msg) => fails.push(`${page}: ${msg}`)

/** El contenido de <meta name|property="x" content="y"> (el HTML viene formateado a varias líneas). */
const meta = (html, key) => {
  const re = new RegExp(
    `<meta\\s+(?:name|property)=["']${key}["']\\s+content=["']([^"']*)["']`,
    's',
  )
  const alt = new RegExp(
    `<meta\\s*\\n?\\s*(?:name|property)=["']${key}["']\\s*\\n?\\s*content=["']([^"']*)["']`,
    's',
  )
  return (html.match(re) ?? html.match(alt))?.[1] ?? null
}
const one = (html, re) => html.match(re)?.[1] ?? null
const count = (html, re) => (html.match(re) ?? []).length

/** Los <a href> con su texto visible y su aria-label. */
function links(html) {
  const out = []
  const re = /<a\b([^>]*)>(.*?)<\/a>/gs
  let m
  while ((m = re.exec(html))) {
    const attrs = m[1]
    out.push({
      href: one(attrs, /href=["']([^"']*)["']/) ?? '',
      label: one(attrs, /aria-label=["']([^"']*)["']/) ?? '',
      text: m[2]
        .replace(/<[^>]*>/g, ' ')
        .replace(/&[a-z]+;/g, ' ')
        .trim(),
    })
  }
  return out
}

function auditPage(page, file, { year }) {
  const html = readFileSync(file, 'utf8')
  const url = year ? `${SITE}/portfolio/${year}/` : `${SITE}/portfolio/`

  // --- el esqueleto que comparten todas ---
  if (one(html, /<html\s+lang=["']([^"']*)["']/) !== 'es') fail(page, 'falta <html lang="es">')
  const title = one(html, /<title>([^<]*)<\/title>/)
  if (!title?.includes('Portfolio')) fail(page, `<title> sin "Portfolio": ${title}`)
  if (year && !title?.includes(year)) fail(page, `<title> sin el año: ${title}`)

  const desc = meta(html, 'description')
  if (!desc) fail(page, 'falta meta description')
  else if (desc.length < 70 || desc.length > 190)
    fail(page, `meta description de ${desc.length} caracteres (se esperan 70–190)`)

  const canonical = one(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/)
  if (canonical !== url) fail(page, `canonical ${canonical} en vez de ${url}`)

  for (const k of ['og:type', 'og:site_name', 'og:title', 'og:description', 'og:locale']) {
    if (!meta(html, k)) fail(page, `falta ${k}`)
  }
  if (meta(html, 'og:url') !== url) fail(page, `og:url ${meta(html, 'og:url')} en vez de ${url}`)
  if (meta(html, 'og:title') !== title) fail(page, 'og:title distinto del <title>')
  if (meta(html, 'og:description') !== desc) fail(page, 'og:description distinta de la description')
  if (!meta(html, 'twitter:card')) fail(page, 'falta twitter:card')
  if (!/^#[0-9a-f]{6}$/i.test(meta(html, 'theme-color') ?? '')) fail(page, 'falta theme-color')
  if (!/<link\s+rel=["']icon["']/.test(html)) fail(page, 'falta el favicon')

  // --- accesibilidad de base ---
  if (
    !/class=["']skip["'][^>]*href=["']#main["']|href=["']#main["'][^>]*class=["']skip["']/.test(
      html,
    )
  )
    fail(page, 'falta el enlace de salto (a.skip → #main)')
  if (!/<main[^>]*\bid=["']main["']/.test(html)) fail(page, 'falta <main id="main">')

  const h1 = count(html, /<h1\b/g)
  if (h1 !== 1) fail(page, `${h1} <h1> (se espera 1)`)

  // La jerarquía no salta niveles (h1 → h3 sin h2 de por medio).
  let prev = 0
  for (const m of html.matchAll(/<h([1-6])\b/g)) {
    const lvl = Number(m[1])
    if (prev && lvl > prev + 1) fail(page, `salto de encabezado h${prev} → h${lvl}`)
    prev = lvl
  }

  const ls = links(html)
  for (const a of ls) {
    if (!a.text && !a.label) fail(page, `enlace sin texto: ${a.href || '(sin href)'}`)
    if (!a.href) fail(page, `<a> sin href: "${a.text}"`)
  }

  // --- la navegación entre años ---
  const hrefs = new Set(ls.map((a) => a.href))
  if (year) {
    if (!html.includes(`Portfolio ${year}`)) fail(page, `falta la etiqueta "Portfolio ${year}"`)
    if (count(html, /class=["']year-nav["']/g) !== 1)
      fail(page, 'falta la YearNav (una y solo una)')
    if (!hrefs.has('/portfolio/')) fail(page, 'la YearNav no vuelve a /portfolio/')
    const i = YEARS.indexOf(year)
    for (const sib of [YEARS[i - 1], YEARS[i + 1]]) {
      if (sib && !hrefs.has(`/portfolio/${sib}/`)) fail(page, `la YearNav no alcanza ${sib}`)
    }
  } else {
    for (const y of YEARS) {
      if (!hrefs.has(`/portfolio/${y}/`)) fail(page, `el resumen no enlaza ${y}`)
    }
  }
}

/** Las secciones de un año, en el orden en que salen: la misma jerarquía en los nueve. */
const SECTIONS = ['hero', 'main', 'about', 'skills', 'experience', 'projects', 'education']
function auditSections() {
  let ref = null
  for (const y of YEARS) {
    const file = `${root}/${y}/index.html`
    if (!existsSync(file)) continue
    const ids = [...readFileSync(file, 'utf8').matchAll(/\bid="([a-z]+)"/g)]
      .map((m) => m[1])
      .filter((id) => id !== 'root')
    for (const s of SECTIONS) {
      if (!ids.includes(s)) fail(`/portfolio/${y}/`, `falta la sección #${s}`)
    }
    if (ref === null) ref = ids.join(' ')
    else if (ids.join(' ') !== ref)
      fail(`/portfolio/${y}/`, `otras secciones u otro orden: "${ids.join(' ')}" ≠ "${ref}"`)
  }
}

const root = 'dist/portfolio'
const pages = [
  ['/portfolio/', `${root}/index.html`, {}],
  ...YEARS.map((y) => [`/portfolio/${y}/`, `${root}/${y}/index.html`, { year: y }]),
]
for (const [page, file, opts] of pages) {
  if (!existsSync(file)) fail(page, `no existe ${file}`)
  else auditPage(page, file, opts)
}
auditSections()

if (fails.length) {
  console.error(`Cohesión: ${fails.length} fallo(s)\n` + fails.map((f) => `  · ${f}`).join('\n'))
  process.exit(1)
}
console.log(`Cohesión: ${pages.length} páginas, todo en su sitio.`)
