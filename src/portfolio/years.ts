import type { YearSummary } from './types'
import { y2018, y2019, y2020, y2021, y2022 } from '../data/years'

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
  {
    year: 2020,
    label: y2020.label,
    title: y2020.title,
    available: true,
    swatch:
      'radial-gradient(circle at 30% 30%, rgb(45 212 191 / 0.55), transparent 40%), linear-gradient(145deg, #223058, #131c36)',
    era: 'neumórfico · azul · mono',
  },
  {
    year: 2021,
    label: y2021.label,
    title: y2021.title,
    available: true,
    swatch:
      'radial-gradient(circle at 25% 30%, #e9defa, transparent 45%), radial-gradient(circle at 75% 70%, #ffd9c7, transparent 45%), #fbf7f2',
    era: 'pastel · redondo · Manrope',
  },
  {
    year: 2022,
    label: y2022.label,
    title: y2022.title,
    available: true,
    swatch:
      'linear-gradient(135deg, #ffd60a 0 50%, #ff5d8f 50% 75%, #6667ab 75%), #fffdf5',
    era: 'brutal · negro · Playfair',
  },
]
