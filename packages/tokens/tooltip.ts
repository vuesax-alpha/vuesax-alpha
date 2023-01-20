import type { Arrayable } from '../utils/typescript'
import type { InjectionKey, Ref } from 'vue'
import type { TooltipTriggerType } from '@vuesax-alpha/components/tooltip'
import type { Instance } from '@popperjs/core'

export type Measurable = {
  getBoundingClientRect: () => DOMRect
}

/**
 * triggerRef indicates the element that triggers tooltip
 * contentRef indicates the element of tooltip content
 * referenceRef indicates the element that tooltip content relative with
 */
export type TooltipInjectionContext = {
  triggerRef: Ref<Measurable | undefined>
  contentRef: Ref<HTMLElement | undefined>
  referenceRef: Ref<Measurable | undefined>
  tooltipInstance: Ref<Instance | undefined>

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

export type TooltipContentInjectionContext = {
  arrowRef: Ref<HTMLElement | undefined>
  arrowOffset: Ref<number | undefined>
}

export const TOOLTIP_INJECTION_KEY: InjectionKey<TooltipInjectionContext> =
  Symbol('Tooltip')

export const POPPER_CONTENT_INJECTION_KEY: InjectionKey<TooltipContentInjectionContext> =
  Symbol('TooltipContent')
