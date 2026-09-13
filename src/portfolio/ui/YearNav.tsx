import { YEARS, type Year } from '../types'
import './ui.css'

/** Anterior / siguiente entre años, con el resumen en medio. */
export function YearNav({ year }: { year: Year }) {
  const i = YEARS.indexOf(year)
  const prev = i > 0 ? YEARS[i - 1] : null
  const next = i < YEARS.length - 1 ? YEARS[i + 1] : null
  return (
    <nav className="year-nav" aria-label="Otros años">
      {prev ? (
        <a className="year-nav__link" href={`/portfolio/${prev}/`} rel="prev">
          ← {prev}
        </a>
      ) : (
        <span />
      )}
      <a className="year-nav__link year-nav__link--all" href="/portfolio/">
        Todos los años
      </a>
      {next ? (
        <a className="year-nav__link" href={`/portfolio/${next}/`} rel="next">
          {next} →
        </a>
      ) : (
        <span />
      )}
    </nav>
  )
}
