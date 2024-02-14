import { buildProps, definePropType } from '@vuesax-alpha/utils'
import {
  onReleaseFocusEvent,
  onTrapFocusEvent,
} from '@vuesax-alpha/tokens/focus-trap'
import type { createFocusOutPreventedEvent } from './utils'

import type { ExtractPropTypes } from 'vue'
import type FocusTrap from './focus-trap.vue'

export const focusTrapProps = buildProps({
  loop: {
    type: Boolean,
  },
  trapped: {
    type: Boolean,
  },
  focusTrapEl: {
    type: definePropType<HTMLElement>(Object),
  },
  focusStartEl: {
    type: definePropType<'container' | 'first' | HTMLElement>([Object, String]),
    default: 'first',
  },
} as const)

export type FocusTrapProps = ExtractPropTypes<typeof focusTrapProps>

type CustomEvent = ReturnType<typeof createFocusOutPreventedEvent>

export const focusTrapEmits = {
  [onTrapFocusEvent]: (e: Event) => e instanceof Event,
  [onReleaseFocusEvent]: (e: CustomEvent) => e,

  // NOTE: when autofill by browser, the focus event is instanceof Event, not FocusEvent
  focusin: (e: FocusEvent | Event) => e instanceof Event,
  focusout: (e: FocusEvent | Event) => e instanceof Event,

  focusoutPrevented: (e: CustomEvent) => e,

  // NOTE: when autofill by browser, the keydown event is instanceof Event, not KeyboardEvent
  releaseRequested: (e: KeyboardEvent | Event) => e instanceof Event,
}

export type FocusTrapInstance = InstanceType<typeof FocusTrap>
