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
  triggerRef: Ref<HTMLElement | undefined>
  contentRef: Ref<HTMLElement | undefined>
  referenceRef: Ref<Measurable | undefined>
  open: Ref<boolean>
  startShow: () => void
  stopShow: () => void
  startHide: () => void
  stopHide: () => void
}

export type PopperContentInjectionContext = {
  arrowRef: Ref<HTMLElement | undefined>
  arrowOffset: Ref<number | undefined>
}

export const popperContextKey: InjectionKey<PopperContext> = Symbol('popper')

export const popperContentContextKey: InjectionKey<PopperContentInjectionContext> =
  Symbol('popper-content')
