import { useState, type ReactNode } from 'react'
import type { Project } from '../types'
import { ProjectCard } from './ProjectCard'
import './ui.css'

interface ProjectsProps {
  projects: Project[]
  art?: (name: string) => ReactNode
}

/** Grilla de proyectos con filtro por tecnología. En el HTML prerenderizado salen todos. */
export function Projects({ projects, art }: ProjectsProps) {
  const [tag, setTag] = useState<string | null>(null)
  const tags = Array.from(new Set(projects.flatMap((p) => p.stack)))
  const shown = tag ? projects.filter((p) => p.stack.includes(tag)) : projects
  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar por tecnología">
        <button
          type="button"
          className={tag === null ? 'chip is-active' : 'chip'}
          onClick={() => setTag(null)}
          aria-pressed={tag === null}
        >
          Todos
        </button>
        {tags.map((t) => (
          <button
            type="button"
            className={tag === t ? 'chip is-active' : 'chip'}
            onClick={() => setTag(tag === t ? null : t)}
            aria-pressed={tag === t}
            key={t}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid--projects">
        {shown.map((p) => (
          <ProjectCard
            project={p}
            key={p.title}
            art={p.illustration && art ? art(p.illustration) : undefined}
          />
        ))}
      </div>
    </>
  )
}
