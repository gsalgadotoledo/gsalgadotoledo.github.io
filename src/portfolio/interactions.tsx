import { useEffect } from 'react'

/** Micro-interacciones al hacer scroll: reveal de secciones, contadores y barras de skills.
 *  Todo progresivo: sin JS la página se ve entera; con JS, `html.js` activa los estados
 *  iniciales y el observer los va soltando. Respeta prefers-reduced-motion. */
export function Interactions() {
  useEffect(() => {
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    root.classList.add('js')

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-visible')
          if (e.target instanceof HTMLElement && e.target.dataset.count !== undefined) {
            countUp(e.target)
          }
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )
    document.querySelectorAll('.reveal, .skill, [data-count]').forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      root.classList.remove('js')
    }
  }, [])
  return null
}

/** Cuenta de 0 al número que hay en el texto ("6+" → 0…6+), en ~1.2 s. */
function countUp(el: HTMLElement) {
  const text = el.dataset.count ?? el.textContent ?? ''
  const m = text.match(/^(\D*)(\d[\d\s.,]*)(.*)$/)
  if (!m) return
  const [, pre, num, post] = m
  const target = Number(num.replace(/[^\d]/g, ''))
  if (!Number.isFinite(target)) return
  const start = performance.now()
  const dur = 1200
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur)
    const eased = 1 - Math.pow(1 - t, 3)
    el.textContent = `${pre}${Math.round(target * eased)}${post}`
    if (t < 1) requestAnimationFrame(tick)
    else el.textContent = text
  }
  requestAnimationFrame(tick)
}
