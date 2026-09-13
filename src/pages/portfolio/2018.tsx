import { y2018 as data } from '../../data/years'
import { renderYear } from '../../portfolio/year'
import '../../portfolio/themes/2018.css'

export const page = () => renderYear(data)
