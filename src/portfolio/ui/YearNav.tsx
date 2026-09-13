import { useEffect } from 'react'
import { YEARS, type Year } from '../types'
import './ui.css'

/** Anterior / siguiente entre años, con el resumen en medio. Atajos: ← y →. */
export function YearNav({ year, available }: { year: Year; available?: Year[] }) {
  const i = YEARS.indexOf(year)
  const can = (y: Year | undefined) => (y && (!available || available.includes(y)) ? y : null)
  const prev = can(i > 0 ? YEARS[i - 1] : undefined)
  const next = can(i < YEARS.length - 1 ? YEARS[i + 1] : undefined)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return
      if (e.target instanceof HTMLElement && /input|textarea|select/i.test(e.target.tagName)) return
      if (e.key === 'ArrowLeft' && prev) location.href = `/portfolio/${prev}/`
      if (e.key === 'ArrowRight' && next) location.href = `/portfolio/${next}/`
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])
  return (
    <nav className="year-nav" aria-label="Otros años">
      {prev ? (
        <a className="year-nav__link" href={`/portfolio/${prev}/`} rel="prev" title="Tecla ←">
          ← {prev}
        </a>
      ) : (
        <span className="year-nav__link year-nav__link--off" aria-hidden="true">
          ← {i > 0 ? YEARS[i - 1] : ''}
        </span>
      )}
      <a className="year-nav__link year-nav__link--all" href="/portfolio/">
        Todos los años
      </a>
      {next ? (
        <a className="year-nav__link" href={`/portfolio/${next}/`} rel="next" title="Tecla →">
          {next} →
        </a>
      ) : (
        <span className="year-nav__link year-nav__link--off" aria-hidden="true">
          {i < YEARS.length - 1 ? YEARS[i + 1] : ''} →
        </span>
      )}
    </nav>
  )
}
