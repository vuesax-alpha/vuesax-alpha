import type { Arrayable } from '../utils/typescript'
import type { InjectionKey, Ref } from 'vue'
import type { TooltipTriggerType } from '@vuesax-alpha/components/tooltip'

export type BasePlacement = 'top' | 'bottom' | 'right' | 'left'

export type Placement = BasePlacement

export type TooltipOption = {
  placement?: Placement
  windowResize?: boolean
  windowScroll?: boolean
  flip?: boolean
  notArrow?: boolean
}

export type TooltipInjectionContext = {
  controlled: Ref<boolean>
  id: Ref<string>
  open: Ref<boolean>
  trigger: Ref<Arrayable<TooltipTriggerType>>
  onOpen: (e?: Event) => void
  onClose: (e?: Event) => void
  onToggle: (e: Event) => void
  onShow: () => void
  onHide: () => void
  onBeforeShow: () => void
  onBeforeHide: () => void
  updateTooltip: () => void
}

export const tooltipInjectionKey: InjectionKey<TooltipInjectionContext> =
  Symbol('Tooltip')
