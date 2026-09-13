import type { ReactNode } from 'react'
import './ui.css'

interface SectionProps {
  id: string
  title: string
  kicker?: string
  children: ReactNode
  alt?: boolean
}

export function Section({ id, title, kicker, children, alt }: SectionProps) {
  return (
    <section className={alt ? 'section section--alt' : 'section'} id={id}>
      <div className="container">
        {kicker ? <p className="section__kicker">{kicker}</p> : null}
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  )
}
