import './ui.css'

export function Footer({ year }: { year: number }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>Gustavo Salgado · Portfolio {year}</span>
        <a href="https://github.com/gsalgadotoledo">github.com/gsalgadotoledo</a>
      </div>
    </footer>
  )
}
