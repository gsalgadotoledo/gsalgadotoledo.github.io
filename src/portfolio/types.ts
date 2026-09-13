/** Los datos de un año. Viven en src/data/years/<año>.json; renderYear los pinta.
 *  Todo lo que no es el hero es opcional: un año puede omitir secciones. */
export type Year = 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026

export const YEARS: Year[] = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]

export interface Link {
  label: string
  href: string
  /** Para iconos: github, linkedin, mail, twitter, cv, web… */
  kind?: string
}

export interface Stat {
  value: string
  label: string
}

export interface Skill {
  name: string
  /** 0–100, para las barras. */
  level: number
}

export interface SkillGroup {
  group: string
  items: Skill[]
}

export interface Role {
  title: string
  company: string
  period: string
  location?: string
  summary?: string
  bullets?: string[]
}

export interface Project {
  title: string
  description: string
  stack: string[]
  /** Nombre de la ilustración (src/portfolio/illustrations/<año>/). */
  illustration?: string
  links?: Link[]
  featured?: boolean
}

export interface Education {
  title: string
  institution: string
  period: string
  detail?: string
}

export interface Certification {
  title: string
  issuer: string
  year: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface YearData {
  year: Year
  /** La etiqueta de la página: "Portfolio 2018". */
  label: string
  /** Nota interna (p. ej. que los datos son de ejemplo). No se pinta. */
  note?: string
  /** Titular y resumen: van en el hero y en la tarjeta del resumen. */
  title: string
  summary: string
  hero: {
    name: string
    role: string
    location?: string
    availability?: string
    ctas?: Link[]
  }
  about?: {
    paragraphs: string[]
    stats?: Stat[]
  }
  skills?: SkillGroup[]
  experience?: Role[]
  projects?: Project[]
  education?: Education[]
  certifications?: Certification[]
  highlights?: string[]
  testimonials?: Testimonial[]
  contact?: {
    email: string
    blurb?: string
    links?: Link[]
  }
  social?: Link[]
}

/** Lo que el resumen (/portfolio/) sabe de cada año sin cargar su JSON. */
export interface YearSummary {
  year: Year
  label: string
  title?: string
  available: boolean
}
