import type { YearData } from '../../portfolio/types'
import raw2018 from './2018.json'
import raw2019 from './2019.json'
import raw2020 from './2020.json'
import raw2021 from './2021.json'

export const y2018 = { ...raw2018, year: 2018 } satisfies YearData
export const y2019 = { ...raw2019, year: 2019 } satisfies YearData
export const y2020 = { ...raw2020, year: 2020 } satisfies YearData
export const y2021 = { ...raw2021, year: 2021 } satisfies YearData
