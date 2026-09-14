import './ui.css'

/** Aviso de que el contenido todavía es de ejemplo.
 *
 *  El sitio es público y lleva el nombre real de Gustavo, así que mientras los años
 *  lleven cargos, proyectos y cifras inventados hay que decirlo en voz alta: un
 *  reclutador no tiene por qué adivinar qué es demo de diseño y qué es carrera.
 *
 *  Se quita entero (esta etiqueta y su import) en el paso 15, cuando entre el
 *  contenido de la hoja de vida. Los colores son propios a propósito: así se lee
 *  igual sobre los nueve temas, sin que ninguno tenga que saber de él. */
export function DemoNotice() {
  return (
    <aside className="demo-notice" aria-label="Aviso sobre el contenido">
      <span className="demo-notice__tag">Demo</span>
      <span className="demo-notice__text">
        Diseño real, contenido de ejemplo: los cargos, proyectos y cifras de esta página son
        ficticios mientras termino de cargar mi hoja de vida.{' '}
        <a href="https://www.linkedin.com/in/gustavo-salgado-ai-product-manager/">
          Mi experiencia real está en LinkedIn
        </a>
        .
      </span>
    </aside>
  )
}
