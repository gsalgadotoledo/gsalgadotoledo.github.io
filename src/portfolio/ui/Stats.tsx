import type { Stat } from '../types'
import './ui.css'

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <ul className="stats">
      {stats.map((s) => (
        <li className="stat" key={s.label}>
          <span className="stat__value" data-count={s.value}>
            {s.value}
          </span>
          <span className="stat__label">{s.label}</span>
        </li>
      ))}
    </ul>
  )
}
