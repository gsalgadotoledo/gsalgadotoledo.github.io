import data from '../../data/years/2018.json'
import { renderYear } from '../../portfolio/year'
import type { YearData } from '../../portfolio/types'
import '../../portfolio/themes/2018.css'

export const page = () => renderYear(data as YearData)
