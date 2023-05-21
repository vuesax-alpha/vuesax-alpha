import { buildProps, definePropType } from '@vuesax-alpha/utils'
import { defaultZIndex, placements } from '@vuesax-alpha/constants'
import type { Options, Placement, Strategy } from '@vuesax-alpha/hooks'
import type Content from './content.vue'

import type { ExtractPropTypes, StyleValue } from 'vue'

const POSITIONING_STRATEGIES = ['fixed', 'absolute'] as const

type ClassObjectType = Record<string, boolean>
type ClassType = string | ClassObjectType | ClassType[]

export const popperContentProps = buildProps({
  animation: {
    type: String,
    default: 'fade-in-linear',
  },
  appendTo: {
    type: definePropType<string | HTMLElement>(String),
    default: 'body',
  },
  teleported: {
    type: Boolean,
    default: true,
  },
  options: {
    type: definePropType<Options>(Object),
  },
  strategy: {
    type: definePropType<Strategy>(String),
    values: POSITIONING_STRATEGIES,
    default: 'absolute',
  },
  fit: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: definePropType<Placement>(String),
    values: placements,
    default: 'bottom',
  },
  zIndex: {
    type: Number,
    default: defaultZIndex,
  },
  interactivity: {
    type: Boolean,
    default: true,
  },
  offset: {
    type: Number,
    default: 12,
  },
  popperClass: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  popperStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
})

export type PopperContentProps = ExtractPropTypes<typeof popperContentProps>

export type PopperContentInstance = InstanceType<typeof Content>
