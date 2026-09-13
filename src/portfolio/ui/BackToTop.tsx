import { useEffect, useState } from 'react'
import './ui.css'

export function BackToTop() {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <a
      className={shown ? 'to-top is-shown' : 'to-top'}
      href="#hero"
      aria-label="Volver arriba"
      tabIndex={shown ? 0 : -1}
    >
      ↑
    </a>
  )
}
