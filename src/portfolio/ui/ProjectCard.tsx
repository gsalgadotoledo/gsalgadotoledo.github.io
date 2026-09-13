import type { Project } from '../types'
import './ui.css'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
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
