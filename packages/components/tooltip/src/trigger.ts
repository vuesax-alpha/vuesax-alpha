import { buildProps, definePropType } from '@vuesax-alpha/utils'
import { popperTriggerProps } from '@vuesax-alpha/components/popper'
import { EVENT_CODE } from '@vuesax-alpha/constants'
import type { Arrayable } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'

export type TooltipTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'

export const tooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType<Arrayable<TooltipTriggerType>>([String, Array]),
    default: 'hover',
  },
  triggerKeys: {
    type: definePropType<string[]>(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space],
  },
} as const)

export type TooltipTriggerProps = ExtractPropTypes<typeof tooltipTriggerProps>
