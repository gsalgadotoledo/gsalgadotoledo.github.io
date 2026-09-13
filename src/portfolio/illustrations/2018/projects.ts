import type { ReactNode, SVGProps } from 'react'
import {
  ApiIllustration,
  ChatIllustration,
  DashboardIllustration,
  EcommerceIllustration,
  MobileIllustration,
  VideoIllustration,
} from './index'

type Props = SVGProps<SVGSVGElement> & { title?: string }

/** Registro por nombre: lo que `project.illustration` referencia en el JSON. */
export const projectIllustrations: Record<string, (p: Props) => ReactNode> = {
  ecommerce: EcommerceIllustration,
  dashboard: DashboardIllustration,
  video: VideoIllustration,
  mobile: MobileIllustration,
  chat: ChatIllustration,
  api: ApiIllustration,
}
