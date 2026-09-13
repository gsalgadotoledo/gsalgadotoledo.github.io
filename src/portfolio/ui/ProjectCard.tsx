import type { ReactNode } from 'react'
import type { Project } from '../types'
import './ui.css'

export function ProjectCard({ project, art }: { project: Project; art?: ReactNode }) {
  return (
    <article className={project.featured ? 'card card--featured' : 'card'}>
      {art ? <div className="card__art">{art}</div> : null}
      <h3 className="card__title">{project.title}</h3>
      <p className="card__text">{project.description}</p>
      <ul className="tags">
        {project.stack.map((s) => (
          <li className="tag" key={s}>
            {s}
          </li>
        ))}
      </ul>
      {project.links?.length ? (
        <p className="card__links">
          {project.links.map((l) => (
            <a href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </p>
      ) : null}
    </article>
  )
}
