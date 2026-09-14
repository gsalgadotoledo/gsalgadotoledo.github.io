import './agent-console.css'

/** El motivo del hero de 2025: una consola de agente. No es la terminal de 2020 (aquella era
 *  un CLI con `$` y salida de kubectl): aquí hay un objetivo en lenguaje natural, una traza de
 *  llamadas a herramientas por MCP, una respuesta que se escribe sola y el coste corriendo al
 *  pie — la interfaz que 2025 inventó. Contenido fijo; solo parpadean el punto y el cursor. */
const steps: Array<{ tool: string; result: string; state: 'ok' | 'run' }> = [
  { tool: 'mcp:disputas.expediente', result: '18 eventos · 4 adjuntos', state: 'ok' },
  { tool: 'mcp:riesgo.score', result: '0.94 a favor del comercio', state: 'ok' },
  { tool: 'mcp:contratos.buscar', result: '3 cláusulas aplicables', state: 'ok' },
  { tool: 'mcp:disputas.responder', result: 'enviando al banco…', state: 'run' },
]

export function AgentConsole() {
  return (
    <div
      className="ac"
      role="img"
      aria-label="Consola de un agente resolviendo una disputa: llamadas a herramientas, respuesta y coste"
    >
      <div className="ac__bar">
        <span className="ac__id">agente · disputas</span>
        <span className="ac__state">
          <span className="ac__pulse" />
          ejecutando
        </span>
      </div>
      <div className="ac__body">
        <p className="ac__goal">
          <span className="ac__caret-in">&gt;</span> resuelve la disputa #48219 y responde al banco
        </p>
        <ul className="ac__steps">
          {steps.map((s) => (
            <li className={`ac__step ac__step--${s.state}`} key={s.tool}>
              <span className="ac__mark" aria-hidden="true" />
              <span className="ac__tool">{s.tool}</span>
              <span className="ac__result">{s.result}</span>
            </li>
          ))}
        </ul>
        <p className="ac__answer">
          Disputa resuelta a favor del comercio: la entrega está firmada y la cláusula 7.2 cubre el
          cargo. Expediente enviado
          <span className="ac__cursor" />
        </p>
      </div>
      <div className="ac__foot">
        <span>p95 1.8 s</span>
        <span>US$ 0.004</span>
        <span>confianza 0.96</span>
        <span className="ac__auto">autónomo</span>
      </div>
    </div>
  )
}
