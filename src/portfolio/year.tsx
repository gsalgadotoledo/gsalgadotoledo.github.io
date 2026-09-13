import type { YearData } from './types'
import { Footer, Hero, ProjectCard, Section, Timeline, YearNav } from './ui'
import '../design/tokens.css'

/** Arma la página de un año a partir de sus datos. El tema (themes/<año>.css) lo
 *  importa la entrada de la página; aquí solo hay estructura. */
export function renderYear(data: YearData) {
  return (
    <div className={`year year-${data.year}`}>
      <Hero label={data.label} title={data.title} summary={data.summary} />
      <main>
        {data.roles.length ? (
          <Section id="roles" kicker="Qué hice" title="Roles">
            <Timeline roles={data.roles} />
          </Section>
        ) : null}
        {data.projects.length ? (
          <Section id="projects" kicker="Qué construí" title="Proyectos" alt>
            <div className="grid">
              {data.projects.map((p) => (
                <ProjectCard project={p} key={p.title} />
              ))}
            </div>
          </Section>
        ) : null}
        {data.stack.length ? (
          <Section id="stack" kicker="Con qué" title="Stack">
            <ul className="tags">
              {data.stack.map((s) => (
                <li className="tag" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </Section>
        ) : null}
        {data.highlights.length ? (
          <Section id="highlights" kicker="Lo que quedó" title="Highlights" alt>
            <ul className="highlights">
              {data.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Section>
        ) : null}
      </main>
      <YearNav year={data.year} />
      <Footer year={data.year} />
    </div>
  )
}
