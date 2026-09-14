import { y2019 as data } from '../../data/years'
import { renderYear } from '../../portfolio/year'
import {
  AboutIllustration,
  ContactIllustration,
  HeroIllustration,
} from '../../portfolio/illustrations/2018'
import { projectIllustrations } from '../../portfolio/illustrations/2018/projects'
import '../../portfolio/themes/2019.css'

/** 2019 comparte las ilustraciones de 2018; el tema las recolorea para el fondo oscuro. */
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
