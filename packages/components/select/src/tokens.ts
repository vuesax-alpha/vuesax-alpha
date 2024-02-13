import type { SelectProps } from './select'
import type { InjectionKey } from 'vue'

export type SelectOptionValue = string | number | object

export type SelectOptionContext = {
  el: HTMLElement | undefined
  index: number
  groupDisabled: boolean
  label?: string
  value: SelectOptionValue
  isDisabled: boolean
  visible: boolean
  hit: boolean
  hover: boolean
  created: boolean
  currentLabel: string
}

export type SelectTargetElement =
  | 'select'
  | 'chip'
  | 'popper'
  | 'chip'
  | 'chip-close'
  | 'input'
  | 'input-filter'
  | 'reference'

export type SelectValue = SelectOptionValue | SelectOptionValue[]

export type SelectStates = {
  options: Map<SelectOptionValue, SelectOptionContext>
  cachedOptions: Map<SelectOptionValue, SelectOptionContext>
  selected: Map<SelectOptionValue, SelectOptionContext>
  disabledOptions: Map<SelectOptionValue, SelectOptionContext>
  createdLabel: string | null
  createdSelected: boolean
  targetOnElement: SelectTargetElement | null
  optionsCount: number
  filteredOptionsCount: number
  visible: boolean
  softFocus: boolean
  selectedLabel: string
  hoverIndex: number
  query: string
  previousQuery: string | null
  cachedPlaceHolder: string | undefined
  currentPlaceholder: string | undefined
  menuVisibleOnFocus: boolean
  isOnComposition: boolean
  isSilentBlur: boolean
  mouseEnter: boolean
}

export type SelectGroupContext = {
  disabled: boolean
}

export type SelectContext = {
  multipleLimit: number
  multiple: boolean
  states: SelectStates
  queryChange: string | null
  selectWrapper: HTMLElement | undefined
  selectedArray: SelectOptionContext[]
  optionsArray: SelectOptionContext[]
  cachedOptionsArray: SelectOptionContext[]
  hoverIndex: number
  handleTarget: (
    target: SelectTargetElement | null,
    condition?: boolean
  ) => void
  setSelected(): void
  handleOptionSelect(vm: SelectOptionContext, byClick: boolean): void
}

type SelectRegisterContext = (option: SelectOptionContext) => {
  unregister: () => void
  updateOption: (option: SelectOptionContext) => void
}

export const selectContextKey: InjectionKey<SelectContext> = Symbol()

export const selectRegisterKey: InjectionKey<SelectRegisterContext> = Symbol()

export const optionGroupContextKey: InjectionKey<SelectGroupContext> = Symbol()

type OptionGroupRegisterContext = (option: SelectOptionContext) => {
  unregister: () => void
}
export const optionGroupRegisterKey: InjectionKey<OptionGroupRegisterContext> =
  Symbol()
