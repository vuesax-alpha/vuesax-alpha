import { buildProps } from '@vuesax-alpha/utils'
import { useDelayedToggleProps } from '@vuesax-alpha/hooks'
import { popperContentProps } from './content'
import { popperTriggerProps } from './trigger'
import type Popper from './popper.vue'

import type { ExtractPropTypes } from 'vue'

export const popperProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  ...popperTriggerProps,

  showArrow: {
    type: Boolean,
    default: true,
  },

  loading: Boolean,
})

export type PopperProps = ExtractPropTypes<typeof popperProps>

export type PopperInstance = InstanceType<typeof Popper>
