import { agents, also, before, now, person, sections, stack } from './data'
import { Motion } from './motion'
import './resume.css'

/** /resume/ — one page, read top to bottom like a story. Every section is visible without JS;
 *  `Motion` adds the scroll choreography on top (reveals, typing, counters, the drawn diagram). */
export function Resume() {
  return (
    <div className="resume">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Rail />
      <header className="top">
        <a className="top__home" href="/">
          gs
        </a>
        <span className="top__path">~/resume</span>
        <a className="top__gh" href={person.github}>
          github
        </a>
      </header>

      <main id="main">
        <Hero />
        <Now />
        <Agents />
        <Before />
        <Stack />
        <Also />
        <Contact />
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} Gustavo Salgado</span>
        <span>Static HTML, prerendered. No tracking.</span>
        <a href="https://github.com/gsalgadotoledo/gsalgadotoledo.github.io">source</a>
      </footer>
      <Motion />
    </div>
  )
}

/** The progress rail on the right: one tick per section, the current one lit. */
function Rail() {
  return (
    <nav className="rail" aria-label="Sections">
      {sections.map(([id, label], i) => (
        <a key={id} href={`#${id}`} data-rail={id}>
          <span className="rail__n">{String(i).padStart(2, '0')}</span>
          <span className="rail__l">{label}</span>
        </a>
      ))}
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <p className="prompt">
        <span className="prompt__ps">~ $</span> whoami
      </p>
      <p className="hero__out" data-type>
        {person.name} · {person.title}
      </p>
      <h1 className="hero__title">{person.tagline}</h1>
      <p className="hero__sub">{person.sub}</p>
      <p className="hero__meta">{person.location}</p>
      <a className="hero__scroll" href="#now" aria-label="Scroll to the first section">
        <span className="hero__line" />
        scroll
      </a>
    </section>
  )
}

function Head({ n, title, children }: { n: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="head reveal">
      <p className="head__n">
        {n} <span className="head__slash">/</span> {title}
      </p>
      {children ? <h2 className="head__title">{children}</h2> : null}
    </div>
  )
}

function Now() {
  return (
    <section className="now" id="now">
      <Head n="01" title="now">
        One email in, one case out. The agent does the middle.
      </Head>
      <div className="now__grid">
        <div className="now__side">
          <p className="meta reveal">
            <strong>{now.role}</strong>
            <br />
            {now.company}
            <br />
            {now.dates} · {now.where}
          </p>
          <p className="reveal">{now.summary}</p>
          <dl className="stats">
            {now.stats.map((s) => (
              <div key={s.label} className="stat reveal">
                <dt>{s.label}</dt>
                <dd data-count={s.value}>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="trace" aria-label="A submission moving through the system">
          <p className="trace__bar">
            <span /> <span /> <span /> <em>agents-extractor · trace</em>
          </p>
          <ol className="trace__lines">
            {now.trace.map(([k, v], i) => (
              <li key={i} className="trace__line reveal" style={{ ['--i' as string]: i }}>
                <span className="trace__t">{(i * 1.1).toFixed(1).padStart(4, '0')}s</span>
                <span className="trace__k">{k}</span>
                <span className="trace__v">{v}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <ul className="bullets">
        {now.bullets.map((b) => (
          <li key={b} className="reveal">
            {b}
          </li>
        ))}
      </ul>
      <p className="stackline reveal">{now.stack}</p>
    </section>
  )
}

function Agents() {
  const col = (title: string, items: string[], cls: string) => (
    <div className={`node ${cls} reveal`}>
      <p className="node__t">{title}</p>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
  return (
    <section className="agents" id="agents">
      <Head n="02" title="agents, two places">
        The same agent on a server or on your computer. Tools on both sides.
      </Head>
      <p className="lead reveal">{agents.intro}</p>
      <div className="diagram">
        {col('cloud', agents.nodes.cloud, 'node--cloud')}
        <svg className="wire" viewBox="0 0 400 120" aria-hidden="true" preserveAspectRatio="none">
          <path className="wire__p" d="M0 60 C 80 60, 120 20, 200 20 S 320 60, 400 60" />
          <path className="wire__p wire__p2" d="M0 60 C 80 60, 120 100, 200 100 S 320 60, 400 60" />
          <circle className="wire__dot" r="3" />
        </svg>
        {col('runtime', agents.nodes.core, 'node--core')}
        <svg className="wire" viewBox="0 0 400 120" aria-hidden="true" preserveAspectRatio="none">
          <path className="wire__p" d="M0 60 C 80 60, 120 20, 200 20 S 320 60, 400 60" />
          <path className="wire__p wire__p2" d="M0 60 C 80 60, 120 100, 200 100 S 320 60, 400 60" />
          <circle className="wire__dot wire__dot2" r="3" />
        </svg>
        {col('desktop', agents.nodes.desktop, 'node--desktop')}
      </div>
      <dl className="points">
        {agents.points.map(([k, v]) => (
          <div key={k} className="point reveal">
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <p className="note reveal">{agents.note}</p>
    </section>
  )
}

function Before() {
  return (
    <section className="before" id="before">
      <Head n="03" title="before">
        Thirteen years of shipping, for teams that could not afford a miss.
      </Head>
      <div className="cards">
        {before.map((j, i) => (
          <article key={j.company} className="card" style={{ ['--i' as string]: i }}>
            <p className="card__dates">{j.dates}</p>
            <h3 className="card__role">{j.role}</h3>
            <p className="card__co">
              {j.company} · {j.where}
            </p>
            <p className="card__text">{j.text}</p>
            <p className="stackline">{j.stack}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section className="stack" id="stack">
      <Head n="04" title="stack">
        What I reach for. The number is years.
      </Head>
      <pre className="manifest reveal" aria-label="Stack as a manifest">
        <code>
          <span className="m__p">{'{'}</span>
          {'\n'}
          {stack.map(([group, items], gi) => (
            <span key={group}>
              {'  '}
              <span className="m__k">"{group}"</span>
              <span className="m__p">: {'{'}</span>
              {'\n'}
              {items.map(([name, years], ii) => (
                <span key={name} className="m__line">
                  {'    '}
                  <span className="m__k">"{name}"</span>
                  <span className="m__p">: </span>
                  <span className="m__n">{years}</span>
                  <span className="m__p">{ii < items.length - 1 ? ',' : ''}</span>
                  <span className="m__bar" style={{ ['--w' as string]: years / 13 }} />
                </span>
              ))}
              {'  '}
              <span className="m__p">
                {'}'}
                {gi < stack.length - 1 ? ',' : ''}
              </span>
              {'\n'}
            </span>
          ))}
          <span className="m__p">{'}'}</span>
        </code>
      </pre>
    </section>
  )
}

function Also() {
  return (
    <section className="also" id="also">
      <Head n="05" title="also" />
      <dl className="also__list">
        {also.map((a) => (
          <div key={a.k} className="also__row reveal">
            <dt>{a.k}</dt>
            <dd>{a.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <Head n="06" title="contact" />
      <p className="prompt reveal">
        <span className="prompt__ps">~ $</span> open mailto:
      </p>
      <a className="contact__mail reveal" href={`mailto:${person.email}`}>
        {person.email}
      </a>
      <p className="contact__links reveal">
        <a href={person.github}>github</a>
        <a href={person.linkedin}>linkedin</a>
        <span>{person.languages}</span>
      </p>
    </section>
  )
}
