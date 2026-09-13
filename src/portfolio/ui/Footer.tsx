import type { Link } from '../types'
import './ui.css'

export function Footer({ year, social }: { year: number; social?: Link[] }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>Gustavo Salgado · Portfolio {year}</span>
        <ul className="footer__social">
          {(social ?? [{ label: 'GitHub', href: 'https://github.com/gsalgadotoledo' }]).map((l) => (
            <li key={l.href}>
              <a href={l.href} rel="me noopener">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
