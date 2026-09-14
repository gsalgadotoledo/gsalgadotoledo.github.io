import { y2026 as data } from '../../data/years'
import { renderYear } from '../../portfolio/year'
import { AboutIllustration, ContactIllustration } from '../../portfolio/illustrations/2018'
import { projectIllustrations } from '../../portfolio/illustrations/2018/projects'
import '../../portfolio/themes/2026.css'

/** 2026: el hero **no** lleva ilustración — la tendencia del año es que el titular ocupe el lugar
 *  de la imagen (el tema esconde `.hero__aside`). El resto comparte las ilustraciones de 2018,
 *  recoloreadas en tinta y barro: el año es monocromo. */
export const page = () =>
  renderYear(data, {
    about: <AboutIllustration />,
    contact: <ContactIllustration />,
    project: (name) => {
      const Art = projectIllustrations[name]
      return Art ? <Art /> : null
    },
  })
