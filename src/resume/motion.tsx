import { useEffect } from 'react'

/** The scroll choreography of /resume/. Progressive: without JS the page is complete and
 *  static; with JS, `html.js` arms the initial states and the observers release them as the
 *  reader scrolls. Honors prefers-reduced-motion: then nothing moves. */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    root.classList.add('js')

    // reveals and counters
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('in')
          if (e.target instanceof HTMLElement && e.target.dataset.count !== undefined) {
            countUp(e.target)
          }
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
    )
    document.querySelectorAll('.reveal, [data-count]').forEach((el) => io.observe(el))

    // the rail: which section is on screen
    const rail = new Map<string, HTMLElement>()
    document.querySelectorAll<HTMLElement>('[data-rail]').forEach((a) => {
      if (a.dataset.rail) rail.set(a.dataset.rail, a)
    })
    const sec = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const a = rail.get(e.target.id)
          if (a) a.classList.toggle('on', e.isIntersecting)
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    document.querySelectorAll('main > section[id]').forEach((s) => sec.observe(s))

    // the typed line of the hero
    const typed = document.querySelector<HTMLElement>('[data-type]')
    const stop = typed ? type(typed) : () => {}

    return () => {
      io.disconnect()
      sec.disconnect()
      stop()
      root.classList.remove('js')
    }
  }, [])
  return null
}

/** Types the element's text character by character, then leaves a blinking cursor. */
function type(el: HTMLElement) {
  const text = el.textContent ?? ''
  el.textContent = ''
  el.classList.add('typing')
  let i = 0
  let t = 0
  const step = () => {
    i++
    el.textContent = text.slice(0, i)
    if (i < text.length) t = window.setTimeout(step, 28 + Math.random() * 40)
    else el.classList.add('typed')
  }
  t = window.setTimeout(step, 350)
  return () => {
    window.clearTimeout(t)
    el.textContent = text
  }
}

/** 0 → the number in the text, in ~1.1 s, keeping what is around it ("85–95%" counts the first). */
function countUp(el: HTMLElement) {
  const text = el.dataset.count ?? el.textContent ?? ''
  const m = text.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/)
  if (!m) return
  const [, pre, num, post] = m
  const decimals = num.split(/[.,]/)[1]?.length ?? 0
  const target = Number(num.replace(',', '.'))
  if (!Number.isFinite(target)) return
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / 1100)
    const eased = 1 - Math.pow(1 - t, 3)
    el.textContent = `${pre}${(target * eased).toFixed(decimals)}${post}`
    if (t < 1) requestAnimationFrame(tick)
    else el.textContent = text
  }
  requestAnimationFrame(tick)
}
