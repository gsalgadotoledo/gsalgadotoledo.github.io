import type { SkillGroup } from '../types'
import './ui.css'

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="skills">
      {groups.map((g) => (
        <div className="skills__group" key={g.group}>
          <h3 className="skills__title">{g.group}</h3>
          <ul className="skills__list">
            {g.items.map((s) => (
              <li className="skill" key={s.name}>
                <span className="skill__name">{s.name}</span>
                <span className="skill__level">{s.level}%</span>
                <span
                  className="skill__bar"
                  role="meter"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={s.level}
                  aria-label={s.name}
                >
                  <span className="skill__fill" style={{ width: `${s.level}%` }} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
