/* Ilustraciones flat al estilo 2018 (unDraw / Humaaans): personas sin rostro, formas planas,
   un acento que toma el color del tema. SVG inline en React para que hereden variables CSS.
   Colores: --ill-accent (marca), --ill-accent-2, --ill-skin, --ill-dark, --ill-light. */
import type { ReactNode, SVGProps } from 'react'
import './illustrations.css'

type Props = SVGProps<SVGSVGElement> & { title?: string }

const base = (title: string | undefined, props: Props) => ({
  role: 'img' as const,
  'aria-label': title,
  'aria-hidden': title ? undefined : true,
  className: `ill ${props.className ?? ''}`.trim(),
  ...props,
})

/** Persona sentada con laptop, pantallas flotando. Para el hero. */
export function HeroIllustration({ title, ...props }: Props) {
  return (
    <svg viewBox="0 0 520 420" {...base(title, props)}>
      {/* blob de fondo */}
      <path
        className="ill__light"
        d="M96 232c-30-78 32-158 116-172s176 12 214 76 6 168-70 200-230 26-260-104z"
      />
      {/* pantallas flotando */}
      <g className="ill__screen">
        <rect x="330" y="46" width="150" height="96" rx="12" className="ill__white" />
        <rect x="346" y="64" width="80" height="10" rx="5" className="ill__accent" />
        <rect x="346" y="84" width="118" height="8" rx="4" className="ill__muted" />
        <rect x="346" y="100" width="96" height="8" rx="4" className="ill__muted" />
        <rect x="346" y="116" width="60" height="8" rx="4" className="ill__muted" />
      </g>
      <g className="ill__screen ill__screen--2">
        <rect x="40" y="90" width="120" height="84" rx="12" className="ill__white" />
        <rect x="56" y="108" width="34" height="50" rx="6" className="ill__accent-2" />
        <rect x="98" y="108" width="46" height="10" rx="5" className="ill__muted" />
        <rect x="98" y="126" width="46" height="10" rx="5" className="ill__muted" />
        <rect x="98" y="144" width="30" height="10" rx="5" className="ill__accent" />
      </g>
      {/* suelo */}
      <ellipse cx="260" cy="392" rx="180" ry="12" className="ill__shadow" />
      {/* silla / puff */}
      <ellipse cx="262" cy="350" rx="96" ry="38" className="ill__accent-2" />
      {/* piernas */}
      <path className="ill__dark" d="M214 300c-8 26 6 52 40 54h60c18 0 26-16 20-32l-8-22h-112z" />
      <path className="ill__skin" d="M300 352l30 4c6 1 8 10 0 12l-34 2z" />
      <path className="ill__skin" d="M226 352l-30 4c-6 1-8 10 0 12l34 2z" />
      {/* torso */}
      <path className="ill__accent" d="M222 210c4-30 92-30 98 0l12 96H208z" />
      {/* brazos */}
      <path className="ill__accent" d="M222 216c-22 10-40 60-22 84l30-6-8-42z" />
      <path className="ill__accent" d="M320 216c22 10 40 60 22 84l-30-6 8-42z" />
      <circle cx="232" cy="300" r="10" className="ill__skin" />
      <circle cx="312" cy="300" r="10" className="ill__skin" />
      {/* laptop */}
      <path className="ill__dark" d="M212 268h120l10 36H202z" />
      <rect x="222" y="272" width="98" height="26" rx="3" className="ill__accent-light" />
      {/* cuello y cabeza */}
      <rect x="258" y="176" width="26" height="30" rx="8" className="ill__skin" />
      <circle cx="271" cy="150" r="36" className="ill__skin" />
      {/* pelo */}
      <path
        className="ill__dark"
        d="M235 146c2-34 26-46 46-44 24 2 36 22 34 42-10-12-22-16-40-14-16 2-30 6-40 16z"
      />
      {/* taza */}
      <rect x="376" y="330" width="30" height="34" rx="6" className="ill__white" />
      <path className="ill__white" d="M406 338h8a8 8 0 0 1 0 16h-8z" />
      <path className="ill__steam" d="M386 318c4-6-4-10 0-16m10 16c4-6-4-10 0-16" />
      {/* planta */}
      <rect x="92" y="330" width="34" height="40" rx="6" className="ill__accent-2" />
      <path
        className="ill__leaf"
        d="M109 332c-20-10-30-32-22-56 18 8 28 30 22 56zm0 0c20-10 30-32 22-56-18 8-28 30-22 56z"
      />
    </svg>
  )
}

/** Escritorio con monitor, libros y ventana. Para "sobre mí". */
export function AboutIllustration({ title, ...props }: Props) {
  return (
    <svg viewBox="0 0 420 320" {...base(title, props)}>
      <circle cx="210" cy="150" r="130" className="ill__light" />
      <rect x="60" y="200" width="300" height="14" rx="7" className="ill__dark" />
      <rect x="80" y="214" width="12" height="80" className="ill__dark" />
      <rect x="328" y="214" width="12" height="80" className="ill__dark" />
      <rect x="140" y="96" width="140" height="94" rx="10" className="ill__dark" />
      <rect x="148" y="104" width="124" height="70" rx="6" className="ill__accent-light" />
      <rect x="160" y="118" width="60" height="8" rx="4" className="ill__accent" />
      <rect x="160" y="134" width="96" height="6" rx="3" className="ill__white" />
      <rect x="160" y="148" width="80" height="6" rx="3" className="ill__white" />
      <rect x="196" y="190" width="28" height="12" className="ill__dark" />
      <rect x="290" y="160" width="14" height="42" rx="3" className="ill__accent-2" />
      <rect x="306" y="150" width="14" height="52" rx="3" className="ill__accent" />
      <rect x="322" y="170" width="14" height="32" rx="3" className="ill__muted" />
      <rect x="96" y="176" width="36" height="26" rx="6" className="ill__accent-2" />
      <path
        className="ill__leaf"
        d="M114 176c-16-8-22-28-14-44 14 8 20 26 14 44zm0 0c16-8 22-28 14-44-14 8-20 26-14 44z"
      />
      <circle cx="80" cy="70" r="6" className="ill__accent" />
      <circle cx="350" cy="60" r="10" className="ill__accent-2" />
      <path className="ill__accent" d="M330 250l8 8-8 8-8-8z" />
    </svg>
  )
}

/* Tarjetas de proyecto: una escena pequeña por tipo, 240×160. */
function Frame({ children, title, ...props }: Props & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 240 160" {...base(title, props)}>
      <rect width="240" height="160" rx="12" className="ill__light" />
      {children}
    </svg>
  )
}

export function EcommerceIllustration(p: Props) {
  return (
    <Frame {...p}>
      <rect x="60" y="30" width="120" height="100" rx="10" className="ill__white" />
      <rect x="74" y="44" width="40" height="40" rx="6" className="ill__accent-light" />
      <rect x="124" y="46" width="42" height="8" rx="4" className="ill__dark" />
      <rect x="124" y="62" width="30" height="8" rx="4" className="ill__muted" />
      <rect x="124" y="78" width="38" height="12" rx="6" className="ill__accent" />
      <rect x="74" y="100" width="92" height="8" rx="4" className="ill__muted" />
      <rect x="74" y="114" width="60" height="8" rx="4" className="ill__muted" />
      <circle cx="186" cy="34" r="14" className="ill__accent-2" />
      <path className="ill__white-stroke" d="M178 34h6l2 6h8l2-6" />
      <path className="ill__accent" d="M30 120l10 10-10 10-10-10z" />
    </Frame>
  )
}

export function DashboardIllustration(p: Props) {
  return (
    <Frame {...p}>
      <rect x="30" y="26" width="180" height="108" rx="10" className="ill__white" />
      <rect x="44" y="40" width="50" height="30" rx="6" className="ill__accent-light" />
      <rect x="102" y="40" width="50" height="30" rx="6" className="ill__accent-light" />
      <rect x="160" y="40" width="36" height="30" rx="6" className="ill__accent-2" />
      <rect x="44" y="110" width="14" height="14" className="ill__accent" />
      <rect x="64" y="96" width="14" height="28" className="ill__accent" />
      <rect x="84" y="86" width="14" height="38" className="ill__accent-2" />
      <rect x="104" y="100" width="14" height="24" className="ill__accent" />
      <rect x="124" y="80" width="14" height="44" className="ill__accent-2" />
      <path className="ill__line" d="M150 116l14-14 12 8 20-22" />
    </Frame>
  )
}

export function VideoIllustration(p: Props) {
  return (
    <Frame {...p}>
      <rect x="40" y="30" width="160" height="100" rx="10" className="ill__dark" />
      <circle cx="120" cy="74" r="20" className="ill__accent" />
      <path className="ill__white" d="M114 64l16 10-16 10z" />
      <rect x="54" y="112" width="132" height="6" rx="3" className="ill__muted" />
      <rect x="54" y="112" width="70" height="6" rx="3" className="ill__accent-2" />
      <rect x="150" y="40" width="40" height="12" rx="6" className="ill__white" />
    </Frame>
  )
}

export function MobileIllustration(p: Props) {
  return (
    <Frame {...p}>
      <rect x="92" y="18" width="56" height="124" rx="12" className="ill__dark" />
      <rect x="98" y="30" width="44" height="100" rx="6" className="ill__white" />
      <circle cx="120" cy="60" r="14" className="ill__accent" />
      <path className="ill__accent-2" d="M106 96c8-14 20-14 28 0 4 8-4 14-14 14s-18-6-14-14z" />
      <rect x="106" y="116" width="28" height="6" rx="3" className="ill__muted" />
      <circle cx="56" cy="50" r="10" className="ill__accent-2" />
      <circle cx="186" cy="110" r="8" className="ill__accent" />
      <path className="ill__line" d="M40 100c10-10 20-10 30 0s20 10 30 0" />
    </Frame>
  )
}

export function ChatIllustration(p: Props) {
  return (
    <Frame {...p}>
      <path
        className="ill__white"
        d="M40 40h100a12 12 0 0 1 12 12v30a12 12 0 0 1-12 12H70l-18 16v-16h-12a12 12 0 0 1-12-12V52a12 12 0 0 1 12-12z"
      />
      <rect x="54" y="54" width="60" height="8" rx="4" className="ill__accent" />
      <rect x="54" y="70" width="80" height="8" rx="4" className="ill__muted" />
      <path
        className="ill__accent-2"
        d="M110 84h88a12 12 0 0 1 12 12v24a12 12 0 0 1-12 12h-12v14l-18-14h-58a12 12 0 0 1-12-12V96a12 12 0 0 1 12-12z"
      />
      <rect x="122" y="98" width="60" height="8" rx="4" className="ill__white" />
      <rect x="122" y="112" width="40" height="8" rx="4" className="ill__white" />
    </Frame>
  )
}

export function ApiIllustration(p: Props) {
  return (
    <Frame {...p}>
      <path
        className="ill__white"
        d="M76 110a28 28 0 0 1 4-56 40 40 0 0 1 78-8 30 30 0 0 1 6 60z"
      />
      <rect x="60" y="112" width="40" height="22" rx="6" className="ill__accent" />
      <rect x="100" y="120" width="40" height="22" rx="6" className="ill__accent-2" />
      <rect x="140" y="112" width="40" height="22" rx="6" className="ill__accent" />
      <path className="ill__line" d="M80 110v-14m40 24v-24m40 14v-14" />
      <rect x="96" y="70" width="48" height="10" rx="5" className="ill__accent-light" />
      <rect x="108" y="86" width="24" height="10" rx="5" className="ill__muted" />
    </Frame>
  )
}

/** Sobre abierto con avión de papel. Para contacto. */
export function ContactIllustration({ title, ...props }: Props) {
  return (
    <svg viewBox="0 0 320 240" {...base(title, props)}>
      <circle cx="160" cy="130" r="90" className="ill__light" />
      <path className="ill__white" d="M70 110l90-60 90 60v90H70z" />
      <path className="ill__accent-light" d="M70 110l90 60 90-60v90H70z" />
      <path className="ill__white" d="M70 200l90-60 90 60z" />
      <path className="ill__accent-2" d="M196 40l64 20-52 40 4-28z" />
      <path className="ill__accent" d="M212 72l48-12-52 40z" />
      <path className="ill__steam" d="M120 40c10-8 20-8 30 0M100 60c6-4 12-4 18 0" />
    </svg>
  )
}
