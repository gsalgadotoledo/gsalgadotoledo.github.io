import type { ReactNode } from 'react'
import { YearLabel } from './YearLabel'
import './ui.css'

interface HeroProps {
  label: string
  title: string
  summary: string
  aside?: ReactNode
}

export function Hero({ label, title, summary, aside }: HeroProps) {
  return (
    <header className="hero" id="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <YearLabel label={label} />
          <h1 className="hero__title">{title}</h1>
          <p className="hero__summary">{summary}</p>
        </div>
        {aside ? <div className="hero__aside">{aside}</div> : null}
      </div>
    </header>
  )
}
