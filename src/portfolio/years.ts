import type { YearSummary } from './types'
import { y2018 } from '../data/years'

/** Los años que ya tienen página. Cada iteración agrega el suyo. */
export const years: YearSummary[] = [
  {
    year: 2018,
    label: y2018.label,
    title: y2018.title,
    available: true,
    swatch: 'linear-gradient(135deg, #5b21b6, #9333ea 40%, #db2777 75%, #fb7185)',
    era: 'gradientes · flat · Poppins',
  },
]
