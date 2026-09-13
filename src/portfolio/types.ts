/** Los datos de un año. Viven en src/data/years/<año>.json; renderYear los pinta.
 *  El paso 3 del plan amplía esto con todo lo que una página de portafolio necesita. */
export type Year = 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026

export const YEARS: Year[] = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]

export interface Link {
  label: string
  href: string
}

export interface Role {
  title: string
  company: string
  period: string
  summary?: string
}

export interface Project {
  title: string
  description: string
  stack: string[]
  links?: Link[]
}

export interface YearData {
  year: Year
  /** La etiqueta de la página: "Portfolio 2018". */
  label: string
  title: string
  summary: string
  roles: Role[]
  projects: Project[]
  stack: string[]
  highlights: string[]
}

/** Lo que el resumen (/portfolio/) sabe de cada año sin cargar su JSON. */
export interface YearSummary {
  year: Year
  label: string
  title?: string
  available: boolean
}
