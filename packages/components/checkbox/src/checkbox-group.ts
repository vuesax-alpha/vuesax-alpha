import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { buildProps, definePropType, isArray } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type { CheckboxValueType } from './checkbox'
import type CheckboxGroup from './checkbox-group.vue'

export type CheckboxGroupValueType = CheckboxValueType[]

export const checkboxGroupProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<CheckboxGroupValueType>(Array),
    default: () => [],
  },
  /**
   * @description whether the nesting checkboxes are disabled
   */
  disabled: Boolean,
  /**
   * @description minimum number of checkbox checked
   */
  min: Number,
  /**
   * @description maximum number of checkbox checked
   */
  max: Number,
} as const)

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxGroupValueType) => isArray(val),
  change: (val: CheckboxGroupValueType) => isArray(val),
}

export type CheckboxGroupEmits = typeof checkboxGroupEmits
