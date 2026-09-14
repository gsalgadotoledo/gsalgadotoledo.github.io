import './terminal.css'

/** Una ventana de terminal en HTML/CSS: el motivo del hero de 2020 (remoto, nube, CLI).
 *  Líneas fijas; el cursor parpadea solo con CSS. */
const lines: Array<{ prompt?: boolean; text: string; tone?: 'ok' | 'dim' }> = [
  { prompt: true, text: 'kubectl get pods -n pagos' },
  { text: 'api-7d9f  1/1  Running  0  4h', tone: 'dim' },
  { text: 'worker-c2  1/1  Running  0  4h', tone: 'dim' },
  { prompt: true, text: 'terraform apply -auto-approve' },
  { text: 'Apply complete! 12 added, 0 destroyed.', tone: 'ok' },
  { prompt: true, text: 'make deploy' },
  { text: '✔ desplegado en 3m 58s', tone: 'ok' },
]

export function Terminal() {
  return (
    <div className="term" role="img" aria-label="Terminal con despliegues a Kubernetes">
      <div className="term__bar">
        <span className="term__dot" />
        <span className="term__dot" />
        <span className="term__dot" />
        <span className="term__title">gustavo@remoto — zsh</span>
      </div>
      <pre className="term__body">
        {lines.map((l, i) => (
          <span className={`term__line${l.tone ? ` term__line--${l.tone}` : ''}`} key={i}>
            {l.prompt ? <span className="term__prompt">$ </span> : null}
            {l.text}
            {'\n'}
          </span>
        ))}
        <span className="term__prompt">$ </span>
        <span className="term__cursor" />
      </pre>
    </div>
  )
}
