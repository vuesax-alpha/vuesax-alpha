import { buildProps, definePropType } from '@vuesax-alpha/utils'
import type { Arrayable } from '@vuesax-alpha/utils'
import type { Measurable } from '@vuesax-alpha/tokens'
import type Trigger from './trigger.vue'

import type { ExtractPropTypes, StyleValue } from 'vue'

// TODO: move this into types utils
export type PopperTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'

type ClassObjectType = Record<string, boolean>
type ClassType = string | ClassObjectType | ClassType[]

const EventHandler = {
  type: definePropType<(e: Event) => boolean | void>(Function),
} as const

export const popperTriggerProps = buildProps({
  disabled: {
    type: Boolean,
  },
  trigger: {
    type: definePropType<Arrayable<PopperTriggerType>>([String, Array]),
    default: 'hover',
  },
  virtualRef: {
    type: definePropType<Measurable>(Object),
  },
  virtualTriggering: {
    type: Boolean,
  },
  onMouseenter: EventHandler,
  onMouseleave: EventHandler,
  onClick: EventHandler,
  onKeydown: EventHandler,
  onFocus: EventHandler,
  onBlur: EventHandler,
  onContextmenu: EventHandler,
  triggerClass: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  triggerStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
})

export type PopperTriggerProps = ExtractPropTypes<typeof popperTriggerProps>

export type PopperTriggerInstance = InstanceType<typeof Trigger>
