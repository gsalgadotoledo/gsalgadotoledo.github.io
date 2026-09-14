import { YEARS, type YearSummary } from './types'
import { Footer } from './ui'
import '../design/tokens.css'
import './summary.css'

/** La página /portfolio/: línea de tiempo y las nueve tarjetas, una por año. */
export function renderSummary(years: YearSummary[]) {
  const byYear = new Map(years.map((y) => [y.year, y]))
  const done = years.filter((y) => y.available).length
  return (
    <div className="summary">
      <a className="skip" href="#main">
        Saltar al contenido
      </a>
      <header className="summary__hero" id="hero">
        <div className="container">
          <p className="summary__kicker">Gustavo Salgado</p>
          <h1 className="summary__title">
            Portfolio, <span>un año por página</span>
          </h1>
          <p className="summary__lead">
            Del 2018 al 2026. Cada página cuenta lo que hice ese año con el estilo que se usaba
            entonces: nueve diseños, una misma historia.
          </p>
          <p className="summary__count">
            {done} de {YEARS.length} años publicados
          </p>
        </div>
      </header>
      <main className="container summary__main" id="main">
        <ol className="tl" aria-label="Línea de tiempo">
          {YEARS.map((year) => {
            const y = byYear.get(year)
            return (
              <li className={y?.available ? 'tl__item is-on' : 'tl__item'} key={year}>
                {y?.available ? (
                  <a className="tl__dot" href={`/portfolio/${year}/`} aria-label={y.label}>
                    <span className="tl__year">{year}</span>
                  </a>
                ) : (
                  <span className="tl__dot" aria-hidden="true">
                    <span className="tl__year">{year}</span>
                  </span>
                )}
              </li>
            )
          })}
        </ol>
        <ul className="years">
          {YEARS.map((year) => {
            const y = byYear.get(year)
            return y?.available ? (
              <li key={year}>
                <a className="years__card" href={`/portfolio/${year}/`}>
                  <span className="years__swatch" style={{ background: y.swatch }} />
                  <span className="years__year">{year}</span>
                  <p className="years__title">{y.title}</p>
                  {y.era ? <p className="years__era">{y.era}</p> : null}
                  <span className="years__go">Ver el año →</span>
                </a>
              </li>
            ) : (
              <li key={year}>
                <div className="years__card years__card--soon" aria-disabled="true">
                  <span className="years__swatch" />
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
