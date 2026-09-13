import type { YearSummary } from './types'
import { y2018 } from '../data/years'

/** Los años que ya tienen página. Cada iteración agrega el suyo. */
export const years: YearSummary[] = [
  { year: 2018, label: y2018.label, title: y2018.title, available: true },
]
