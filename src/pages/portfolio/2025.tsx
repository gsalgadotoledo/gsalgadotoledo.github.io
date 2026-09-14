import { y2025 as data } from '../../data/years'
import { renderYear } from '../../portfolio/year'
import { AboutIllustration, ContactIllustration } from '../../portfolio/illustrations/2018'
import { projectIllustrations } from '../../portfolio/illustrations/2018/projects'
import { AgentConsole } from '../../portfolio/illustrations/2025/AgentConsole'
import '../../portfolio/themes/2025.css'

/** 2025: el hero es una consola de agente (el año en que los agentes ejecutan, no sugieren);
 *  el resto comparte las ilustraciones de 2018, recoloreadas en neón por el tema. */
export const page = () =>
  renderYear(data, {
    hero: <AgentConsole />,
    about: <AboutIllustration />,
    contact: <ContactIllustration />,
    project: (name) => {
      const Art = projectIllustrations[name]
      return Art ? <Art /> : null
    },
  })
