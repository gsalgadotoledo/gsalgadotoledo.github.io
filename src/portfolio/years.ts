import type { YearSummary } from './types'
import { y2018, y2019 } from '../data/years'

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
  {
    year: 2019,
    label: y2019.label,
    title: y2019.title,
    available: true,
    swatch:
      'radial-gradient(circle at 20% 30%, rgb(99 102 241 / 0.9), transparent 45%), radial-gradient(circle at 80% 70%, rgb(255 111 97 / 0.8), transparent 45%), #0b1020',
    era: 'oscuro · vidrio · Inter',
  },
]
