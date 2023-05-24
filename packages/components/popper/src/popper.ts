import { buildProps, definePropType } from '@vuesax-alpha/utils'
import {
  createModelToggleComposable,
  useDelayedToggleProps,
} from '@vuesax-alpha/hooks'
import { popperContentProps } from './content'
import { popperTriggerProps } from './trigger'
import type { Placement } from '@vuesax-alpha/hooks'
import type { EmitFn } from '@vuesax-alpha/utils'
import type Popper from './popper.vue'

import type { ExtractPropTypes } from 'vue'

export const {
  useModelToggleProps: usePopperModelToggleProps,
  useModelToggleEmits: usePopperModelToggleEmits,
  useModelToggle: usePopperModelToggle,
} = createModelToggleComposable('visible' as const)

export const popperProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  ...popperTriggerProps,
  ...usePopperModelToggleProps,

  processBeforeOpen: {
    type: definePropType<() => boolean>(Function),
    default: () => true,
  },

  /**
   * Return false if cancled close
   */
  processBeforeClose: {
    type: definePropType<() => boolean>(Function),
    default: () => true,
  },

  /**
   * Return false if cancled open
   */
  showArrow: {
    type: Boolean,
    default: true,
  },

  loading: Boolean,
})

export type PopperProps = ExtractPropTypes<typeof popperProps>

export const popperEmits = [
  ...usePopperModelToggleEmits,
  'before-show',
  'show',
  'before-hide',
  'hide',
]

export type PopperEmits = typeof popperEmits

export type PopperEmitFn = EmitFn<PopperEmits>

export type PopperInstance = InstanceType<typeof Popper>

export type PopperExpose = {
  triggerRef: HTMLElement | undefined
  contentRef: HTMLElement | undefined
  isFocusInsideContent: () => boolean
  updatePopper: (shouldUpdateZIndex?: boolean) => void
  onOpen: (event?: Event | undefined) => void
  onClose: (event?: Event | undefined) => void
  hide: (event?: Event | undefined) => void
  popperPlacement: Placement
}
