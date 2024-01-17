import type {
  FloatingElement,
  ReferenceElement,
} from '@vuesax-alpha/hooks/use-floating/vue'
import type { PopperTriggerType } from '@vuesax-alpha/components/popper'
import type { Arrayable } from '@vuesax-alpha/utils'
import type { InjectionKey, Ref } from 'vue'

export type Measurable = {
  getBoundingClientRect: () => DOMRect
}

/**
 * triggerRef indicates the element that triggers popper
 * contentRef indicates the element of popper content
 * referenceRef indicates the element that popper content relative with
 */
export type PopperContext = {
  triggerRef: Ref<ReferenceElement | undefined>
  contentRef: Ref<FloatingElement | undefined>
  arrowRef: Ref<HTMLElement | undefined>
  referenceRef: Ref<ReferenceElement | undefined>

  controlled: Ref<boolean>
  id: Ref<string>
  open: Ref<boolean>
  trigger: Ref<Arrayable<PopperTriggerType>>
  onOpen: (e?: Event) => void
  onClose: (e?: Event) => void
  onToggle: (e: Event) => void
  onShow: () => void
  onHide: () => void
  onBeforeShow: () => void
  onBeforeHide: () => void
  updatePopper: (shouldUpdateZIndex?: boolean) => void
}

export type PopperContentInjectionContext = {
  arrowRef: Ref<HTMLElement | undefined>
  arrowOffset: Ref<number | undefined>
}

export const popperContextKey: InjectionKey<PopperContext> = Symbol('popper')

export const popperContentContextKey: InjectionKey<PopperContentInjectionContext> =
  Symbol('popper-content')
