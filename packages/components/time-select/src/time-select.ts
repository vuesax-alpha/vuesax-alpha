import { CloseCircle } from '@vuesax-alpha/icons-vue'

import { definePropType } from '@vuesax-alpha/utils'
import type { Component, ExtractPropTypes, PropType } from 'vue'
import type TimeSelect from './time-select.vue'

export const timeSelectProps = {
  format: {
    type: String,
    default: 'HH:mm',
  },
  modelValue: { type: String },
  disabled: { type: Boolean },
  editable: {
    type: Boolean,
    default: true,
  },
  effect: {
    type: String as PropType<'light' | 'dark' | string>,
    default: null,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  placeholder: { type: String },
  start: {
    type: String,
    default: '09:00',
  },
  end: {
    type: String,
    default: '18:00',
  },
  step: {
    type: String,
    default: '00:30',
  },
  minTime: { type: String },
  maxTime: { type: String },
  name: { type: String },
  // prefixIcon: {
  //   type: [String, Object] as PropType<string | Component>
  //   default: () => Clock,
  // },
  clearIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: () => CloseCircle,
  },
  disabledItems: {
    type: definePropType<string[]>(Array),
    default: () => [],
  },
}

export type TimeSelectProps = ExtractPropTypes<typeof timeSelectProps>

export type TimeSelectInstance = InstanceType<typeof TimeSelect>

export interface TimeSelectExpose {
  /** focus to time select */
  readonly focus: () => void
  /** blur time select */
  readonly blur: () => void
}
