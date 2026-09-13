import { YEARS, type YearSummary } from './types'
import { Footer } from './ui'
import '../design/tokens.css'

/** La página /portfolio/: las nueve tarjetas, una por año. */
export function renderSummary(years: YearSummary[]) {
  const byYear = new Map(years.map((y) => [y.year, y]))
  return (
    <div className="summary">
      <header className="hero" id="hero">
        <div className="container">
          <h1 className="hero__title">Portfolio</h1>
          <p className="hero__summary">
            Un año por página, del 2018 al 2026. Cada uno con el estilo de su época.
          </p>
        </div>
      </header>
      <main className="container" style={{ paddingBlock: 'var(--sp-16)' }}>
        <ul className="years">
          {YEARS.map((year) => {
            const y = byYear.get(year)
            return y?.available ? (
              <li key={year}>
                <a className="years__card" href={`/portfolio/${year}/`}>
                  <span className="years__year">{year}</span>
                  <p className="years__title">{y.title}</p>
                </a>
              </li>
            ) : (
              <li key={year}>
                <div className="years__card years__card--soon" aria-disabled="true">
                  <span className="years__year">{year}</span>
                  <p className="years__title">próximamente</p>
                </div>
              </li>
            )
          })}
        </ul>
      </main>
      <Footer year={2026} />
    </div>
  )
}
