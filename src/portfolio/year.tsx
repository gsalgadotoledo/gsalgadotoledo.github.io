import type { YearData } from './types'
import {
  Footer,
  Hero,
  Nav,
  ProjectCard,
  Section,
  Skills,
  Stats,
  Testimonials,
  Timeline,
  YearNav,
} from './ui'
import '../design/tokens.css'

/** Arma la página de un año a partir de sus datos. El tema (themes/<año>.css) lo
 *  importa la entrada de la página; aquí solo hay estructura. Las secciones sin datos
 *  no se pintan. */
export function renderYear(data: YearData) {
  const { about, skills, experience, projects, education, certifications } = data
  const { highlights, testimonials, contact } = data
  const sections = [
    about && { label: 'Sobre mí', href: '#about' },
    skills?.length && { label: 'Skills', href: '#skills' },
    experience?.length && { label: 'Experiencia', href: '#experience' },
    projects?.length && { label: 'Proyectos', href: '#projects' },
    education?.length && { label: 'Educación', href: '#education' },
    contact && { label: 'Contacto', href: '#contact' },
  ].filter((s): s is { label: string; href: string } => Boolean(s))
  return (
    <div className={`year year-${data.year}`}>
      <Nav
        brand={initials(data.hero.name)}
        links={sections}
        cta={contact ? { label: 'Hablemos', href: '#contact' } : undefined}
      />
      <Hero data={data} aside={<div className="hero__art" aria-hidden="true" />} />
      <main>
        {about ? (
          <Section id="about" kicker="Quién soy" title="Sobre mí">
            <div className="about">
              <div className="about__text">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {about.stats?.length ? <Stats stats={about.stats} /> : null}
            </div>
          </Section>
        ) : null}
        {skills?.length ? (
          <Section id="skills" kicker="Qué sé hacer" title="Skills" alt>
            <Skills groups={skills} />
          </Section>
        ) : null}
        {experience?.length ? (
          <Section id="experience" kicker="Dónde" title="Experiencia">
            <Timeline roles={experience} />
          </Section>
        ) : null}
        {projects?.length ? (
          <Section id="projects" kicker="Qué construí" title="Proyectos" alt>
            <div className="grid">
              {projects.map((p) => (
                <ProjectCard project={p} key={p.title} />
              ))}
            </div>
          </Section>
        ) : null}
        {education?.length || certifications?.length ? (
          <Section id="education" kicker="Dónde aprendí" title="Educación">
            <div className="education">
              {education?.length ? (
                <ul className="education__list">
                  {education.map((e) => (
                    <li className="education__item" key={e.title}>
                      <span className="timeline__period">{e.period}</span>
                      <h3 className="education__title">{e.title}</h3>
                      <p className="education__where">{e.institution}</p>
                      {e.detail ? <p className="education__detail">{e.detail}</p> : null}
                    </li>
                  ))}
                </ul>
              ) : null}
              {certifications?.length ? (
                <div>
                  <h3 className="education__sub">Certificaciones</h3>
                  <ul className="education__list">
                    {certifications.map((c) => (
                      <li className="education__item" key={c.title}>
                        <span className="timeline__period">{c.year}</span>
                        <h4 className="education__title">{c.title}</h4>
                        <p className="education__where">{c.issuer}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </Section>
        ) : null}
        {highlights?.length ? (
          <Section id="highlights" kicker="Lo que quedó" title="Highlights del año" alt>
            <ul className="highlights">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Section>
        ) : null}
        {testimonials?.length ? (
          <Section id="testimonials" kicker="Qué dicen" title="Testimonios">
            <Testimonials items={testimonials} />
          </Section>
        ) : null}
        {contact ? (
          <Section id="contact" kicker="Hablemos" title="Contacto" alt>
            {contact.blurb ? <p className="contact__blurb">{contact.blurb}</p> : null}
            <p className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              {contact.links?.map((l) => (
                <a className="btn" href={l.href} key={l.label}>
                  {l.label}
                </a>
              ))}
            </p>
          </Section>
        ) : null}
      </main>
      <YearNav year={data.year} />
      <Footer year={data.year} social={data.social} />
    </div>
  )
}

function initials(name: string) {
  return (
    name
      .split(/\s+/)
      .map((w) => w[0])
      .join('')
      .toUpperCase() + '.'
  )
}
