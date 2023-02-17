import type { InjectionKey, Ref } from 'vue'

export const focusAfterTrapped = 'focus-trap.focus-after-trapped'
export const focusAfterReleased = 'focus-trap.focus-after-released'
export const focusoutPrevented = 'focus-trap.focusout-prevented'
export const focusAfterTrappedOpts: EventInit = {
  cancelable: true,
  bubbles: false,
}
export const focusoutPreventedOpts: EventInit = {
  cancelable: true,
  bubbles: false,
}

export const onTrapFocusEvent = 'focusAfterTrapped'
export const onReleaseFocusEvent = 'focusAfterReleased'

export type FocusTrapInjectionContext = {
  focusTrapRef: Ref<HTMLElement | undefined>
  onKeydown: (e: KeyboardEvent) => void
}

export const focusTrapInjectionKey: InjectionKey<FocusTrapInjectionContext> =
  Symbol('FocusTrap')
