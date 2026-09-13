import { y2018 as data } from '../../data/years'
import { renderYear } from '../../portfolio/year'
import {
  AboutIllustration,
  ContactIllustration,
  HeroIllustration,
} from '../../portfolio/illustrations/2018'
import { projectIllustrations } from '../../portfolio/illustrations/2018/projects'
import '../../portfolio/themes/2018.css'

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
