import {
  Star as IconStar,
  StarBold as IconStarFilled,
} from '@vuesax-alpha/icons-vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import {
  buildProps,
  definePropType,
  iconPropType,
  isNumber,
  isValidComponentSize,
  mutable,
} from '@vuesax-alpha/utils'
import type { ComponentSize } from '@vuesax-alpha/constants'
import type { Component, ExtractPropTypes, PropType } from 'vue'
import type Rate from './rate.vue'

export const rateProps = buildProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  id: {
    type: String,
    default: undefined,
  },
  lowThreshold: {
    type: Number,
    default: 2,
  },
  highThreshold: {
    type: Number,
    default: 4,
  },
  max: {
    type: Number,
    default: 5,
  },
  colors: {
    type: definePropType<string[] | Record<number, string>>([Array, Object]),
    default: () => mutable(['', '', ''] as const),
  },
  voidColor: {
    type: String,
    default: '',
  },
  disabledVoidColor: {
    type: String,
    default: '',
  },
  icons: {
    type: definePropType<
      Array<string | Component> | Record<number, string | Component>
    >([Array, Object]),
    default: () => [IconStarFilled, IconStarFilled, IconStarFilled],
  },
  voidIcon: {
    type: iconPropType,
    default: () => IconStar,
  },
  disabledVoidIcon: {
    type: iconPropType,
    default: () => IconStarFilled,
  },
  disabled: {
    type: Boolean,
  },
  allowHalf: {
    type: Boolean,
  },
  showText: {
    type: Boolean,
  },
  showScore: {
    type: Boolean,
  },
  textColor: {
    type: String,
    default: '',
  },
  texts: {
    type: definePropType<string[]>(Array),
    default: () =>
      mutable([
        'Extremely bad',
        'Disappointed',
        'Fair',
        'Satisfied',
        'Surprise',
      ] as const),
  },
  scoreTemplate: {
    type: String,
    default: '{value}',
  },
  size: {
    type: String as PropType<ComponentSize>,
    validator: isValidComponentSize,
  },
  label: {
    type: String,
    default: undefined,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
} as const)

export type RateProps = ExtractPropTypes<typeof rateProps>

export const rateEmits = {
  [CHANGE_EVENT]: (value: number) => isNumber(value),
  [UPDATE_MODEL_EVENT]: (value: number) => isNumber(value),
}
export type RateEmits = typeof rateEmits

export type RateInstance = InstanceType<typeof Rate>
