import type { Testimonial } from '../types'
import './ui.css'

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid">
      {items.map((t) => (
        <figure className="card quote" key={t.author}>
          <blockquote className="quote__text">{t.quote}</blockquote>
          <figcaption className="quote__author">
            {t.author} · <span>{t.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
