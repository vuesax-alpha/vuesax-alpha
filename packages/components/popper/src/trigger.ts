import { buildProps, definePropType } from '@vuesax-alpha/utils'

import type { Measurable } from '@vuesax-alpha/tokens'
import type Trigger from './trigger.vue'

const EventHandler = {
  type: definePropType<(e: Event) => boolean | void>(Function),
} as const

export const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType<Measurable>(Object),
  },
  virtualTriggering: Boolean,

  onMouseenter: EventHandler,
  onMouseleave: EventHandler,
  onClick: EventHandler,
  onKeydown: EventHandler,
  onFocus: EventHandler,
  onBlur: EventHandler,
  onContextmenu: EventHandler,
  id: String,
  open: Boolean,
} as const)

export type PopperTriggerProps = typeof popperTriggerProps

export type PopperTriggerInstance = InstanceType<typeof Trigger>
