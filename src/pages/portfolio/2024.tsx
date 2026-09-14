import { y2024 as data } from '../../data/years'
import { renderYear } from '../../portfolio/year'
import {
  AboutIllustration,
  ContactIllustration,
  HeroIllustration,
} from '../../portfolio/illustrations/2018'
import { projectIllustrations } from '../../portfolio/illustrations/2018/projects'
import '../../portfolio/themes/2024.css'

/** 2024 comparte las ilustraciones de 2018; el tema las deja casi monocromas (tinta sobre
 *  blanco) y las apoya en una celda del bento, con el peach como único color. */
export const page = () =>
  renderYear(data, {
    hero: <HeroIllustration title="Persona programando en un laptop con pantallas flotando" />,
    about: <AboutIllustration />,
    contact: <ContactIllustration />,
    project: (name) => {
      const Art = projectIllustrations[name]
      return Art ? <Art /> : null
    },
  })
