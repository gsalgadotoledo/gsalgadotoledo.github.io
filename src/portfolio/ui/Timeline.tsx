import type { Role } from '../types'
import './ui.css'

export function Timeline({ roles }: { roles: Role[] }) {
  return (
    <ol className="timeline">
      {roles.map((r) => (
        <li className="timeline__item" key={`${r.company}-${r.period}`}>
          <span className="timeline__period">{r.period}</span>
          <h3 className="timeline__title">
            {r.title} · <span className="timeline__company">{r.company}</span>
          </h3>
          {r.summary ? <p className="timeline__text">{r.summary}</p> : null}
        </li>
      ))}
    </ol>
  )
}
