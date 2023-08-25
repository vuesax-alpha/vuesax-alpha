import type { InjectionKey, ToRefs, WritableComputedRef } from 'vue'
import type { CheckboxGroupProps } from '@vuesax-alpha/components/checkbox'

type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<any>
  changeEvent?: (...args: any) => any
} & ToRefs<Pick<CheckboxGroupProps, 'min' | 'max' | 'disabled'>>

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('CheckboxGroupContextKey')
