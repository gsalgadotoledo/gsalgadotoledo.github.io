// Audit: reads dist/ and checks that every published page has the same skeleton — language,
// title, meta description, canonical, Open Graph, favicon, skip link, one <h1>, heading levels
// without jumps, links with text — and that the prerender left real content. Exits 1 with one
// line per failure.
//
//   node scripts/audit.mjs            # over dist/
//
import { readFileSync, existsSync } from 'node:fs'

const SITE = 'https://gsalgadotoledo.github.io'
const fails = []
const fail = (page, msg) => fails.push(`${page}: ${msg}`)

/** The content of <meta name|property="x" content="y"> (the HTML may wrap on several lines). */
const meta = (html, key) => {
  const re = new RegExp(
    `<meta\\s*\\n?\\s*(?:name|property)=["']${key}["']\\s*\\n?\\s*content=["']([^"']*)["']`,
    's',
  )
  return html.match(re)?.[1] ?? null
}
const one = (html, re) => html.match(re)?.[1] ?? null
const count = (html, re) => (html.match(re) ?? []).length

/** The <a href> with their visible text and aria-label. */
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

function auditPage(page, file, { skip, content }) {
  const html = readFileSync(file, 'utf8')
  const url = `${SITE}${page}`

  if (one(html, /<html\s+lang=["']([^"']*)["']/) !== 'en') fail(page, 'missing <html lang="en">')
  const title = one(html, /<title>([^<]*)<\/title>/)
  if (!title?.includes('Gustavo Salgado')) fail(page, `<title> without the name: ${title}`)

  const desc = meta(html, 'description')
  if (!desc) fail(page, 'missing meta description')
  else if (desc.length < 70 || desc.length > 190)
    fail(page, `meta description of ${desc.length} characters (70–190 expected)`)

  const canonical = one(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/)
  if (canonical !== url) fail(page, `canonical ${canonical} instead of ${url}`)

  for (const k of ['og:type', 'og:site_name', 'og:title', 'og:description']) {
    if (!meta(html, k)) fail(page, `missing ${k}`)
  }
  if (meta(html, 'og:url') !== url) fail(page, `og:url ${meta(html, 'og:url')} instead of ${url}`)
  if (meta(html, 'og:title') !== title) fail(page, 'og:title differs from <title>')
  if (meta(html, 'og:description') !== desc) fail(page, 'og:description differs from description')
  if (!meta(html, 'twitter:card')) fail(page, 'missing twitter:card')
  if (!/^#[0-9a-f]{6}$/i.test(meta(html, 'theme-color') ?? '')) fail(page, 'missing theme-color')
  if (!/<link\s+rel=["']icon["']/.test(html)) fail(page, 'missing favicon')

  if (skip) {
    if (
      !/class=["']skip["'][^>]*href=["']#main["']|href=["']#main["'][^>]*class=["']skip["']/.test(
        html,
      )
    )
      fail(page, 'missing skip link (a.skip → #main)')
    if (!/<main[^>]*\bid=["']main["']/.test(html)) fail(page, 'missing <main id="main">')
  }

  const h1 = count(html, /<h1\b/g)
  if (h1 !== 1) fail(page, `${h1} <h1> (1 expected)`)

  let prev = 0
  for (const m of html.matchAll(/<h([1-6])\b/g)) {
    const lvl = Number(m[1])
    if (prev && lvl > prev + 1) fail(page, `heading jump h${prev} → h${lvl}`)
    prev = lvl
  }

  for (const a of links(html)) {
    if (!a.text && !a.label) fail(page, `link without text: ${a.href || '(no href)'}`)
    if (!a.href) fail(page, `<a> without href: "${a.text}"`)
  }

  if (content && !html.includes(content)) fail(page, `prerendered content missing ("${content}")`)
}

const pages = [
  ['/', 'dist/index.html', { skip: false }],
  ['/resume/', 'dist/resume/index.html', { skip: true, content: 'Revelar Technologies' }],
]
for (const [page, file, opts] of pages) {
  if (!existsSync(file)) fail(page, `${file} does not exist`)
  else auditPage(page, file, opts)
}

if (fails.length) {
  console.error(`Audit: ${fails.length} failure(s)\n` + fails.map((f) => `  · ${f}`).join('\n'))
  process.exit(1)
}
console.log(`Audit: ${pages.length} pages, all in place.`)
