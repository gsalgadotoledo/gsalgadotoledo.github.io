import type { Link } from '../types'
import './ui.css'

interface NavProps {
  brand: string
  links: Link[]
  cta?: Link
}

/** Nav superior sticky con anclas a las secciones. En móvil, un toggle sin JS (checkbox). */
export function Nav({ brand, links, cta }: NavProps) {
  return (
    <nav className="nav" aria-label="Secciones">
      <div className="container nav__inner">
        <a className="nav__brand" href="#hero">
          {brand}
        </a>
        <input className="nav__toggle" type="checkbox" id="nav-toggle" aria-label="Menú" />
        <label className="nav__burger" htmlFor="nav-toggle" aria-hidden="true">
          <span />
          <span />
          <span />
        </label>
        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          {cta ? (
            <li className="nav__cta">
              <a className="btn btn--primary btn--sm" href={cta.href}>
                {cta.label}
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  )
}
