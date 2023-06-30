import {
  buildProps,
  definePropType,
  isNumber,
  isStringNumber,
} from '@vuesax-alpha/utils'

import { useColorProp } from '@vuesax-alpha/hooks'
import type { MaybeRef } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'
import type Loading from './loading.vue'

export const loadingTypes = [
  'atom',
  'ball',
  'scale',
  'waves',
  'border',
  'points',
  'square',
  'circles',
  'corners',
  'default',
  'gradient',
  'rectangle',
  'square-rotate',
] as const

export type LoadingType = typeof loadingTypes[number]

export const loadingProps = buildProps({
  type: {
    type: definePropType<LoadingType>(String),
    values: loadingTypes,
    default: 'default',
  },
  text: String,
  scale: {
    type: definePropType<string | number>([String, Number]),
    validator: (scale: string | number) =>
      isNumber(scale) || isStringNumber(scale),
    default: 1,
  },
  color: useColorProp,
  target: {
    type: definePropType<string | HTMLElement>([String, Object]),
  },
  opacity: {
    type: definePropType<string | number>([String, Number]),
    validator: (scale: string | number) =>
      isNumber(scale) || isStringNumber(scale),
    default: 0.6,
  },
  percent: {
    type: definePropType<string | number>([String, Number]),
    validator: (scale: string | number) =>
      isNumber(scale) || isStringNumber(scale),
  },
  progress: {
    type: definePropType<string | number>([String, Number]),
    validator: (progress: string | number) =>
      isNumber(progress) || isStringNumber(progress),
  },
  background: useColorProp,
})

export type LoadingProps = ExtractPropTypes<typeof loadingProps>
export type LoadingInstance = InstanceType<typeof Loading>

export type LoadingParams = Partial<LoadingProps & { visible: boolean }>
export type LoadingParamsRef = {
  [P in keyof LoadingParams]?: MaybeRef<LoadingParams[P]>
}

export interface LoadingHandle {
  close: () => void
  setText: (text: string) => void
  setProgress: (progress: number) => void
  setPercent: (percent: number) => void
}

export type LoadingFn = (options?: LoadingParamsRef) => LoadingHandle
