import type { ReactNode } from 'react'
import type { YearData } from '../types'
import { YearLabel } from './YearLabel'
import './ui.css'

interface HeroProps {
  data: YearData
  aside?: ReactNode
}

export function Hero({ data, aside }: HeroProps) {
  const { hero } = data
  return (
    <header className="hero" id="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <YearLabel label={data.label} />
          <p className="hero__name">
            {hero.name} · <span className="hero__role">{hero.role}</span>
          </p>
          <h1 className="hero__title">{data.title}</h1>
          <p className="hero__summary">{data.summary}</p>
          {hero.ctas?.length ? (
            <p className="hero__ctas">
              {hero.ctas.map((c, i) => (
                <a className={i === 0 ? 'btn btn--primary' : 'btn'} href={c.href} key={c.href}>
                  {c.label}
                </a>
              ))}
            </p>
          ) : null}
          {hero.location || hero.availability ? (
            <p className="hero__meta">
              {hero.location}
              {hero.location && hero.availability ? ' · ' : ''}
              {hero.availability}
            </p>
          ) : null}
        </div>
        {aside ? <div className="hero__aside">{aside}</div> : null}
      </div>
    </header>
  )
}
