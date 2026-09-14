import { y2020 as data } from '../../data/years'
import { renderYear } from '../../portfolio/year'
import { AboutIllustration, ContactIllustration } from '../../portfolio/illustrations/2018'
import { projectIllustrations } from '../../portfolio/illustrations/2018/projects'
import { Terminal } from '../../portfolio/illustrations/2020/Terminal'
import '../../portfolio/themes/2020.css'

/** 2020: el hero es una terminal (el año fue de CLI e infraestructura); el resto comparte las
 *  ilustraciones de 2018, recoloreadas por el tema. */
export const page = () =>
  renderYear(data, {
    hero: <Terminal />,
    about: <AboutIllustration />,
    contact: <ContactIllustration />,
    project: (name) => {
      const Art = projectIllustrations[name]
      return Art ? <Art /> : null
    },
  })
