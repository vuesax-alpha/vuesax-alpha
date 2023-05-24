import type { OptionProps } from './option'
import type { InjectionKey } from 'vue'

export type SelectOptionValue = string | number | object

export type SelectOptionStates = {
  index: number
  groupDisabled: boolean
  visible: boolean
  hitState: boolean
  hover: boolean
  userCreated: boolean
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
  selected: SelectOptionContext[]
  createdLabel: string | null
  createdSelected: boolean
  targetOnElement: SelectTargetElement | null
  optionsCount: number
  filteredOptionsCount: number
  visible: boolean
  softFocus: boolean
  selectedLabel: string | null
  hoverIndex: number
  query: string | null
  previousQuery: string | null
  inputHovering: boolean
  cachedPlaceHolder: string | undefined
  currentPlaceholder: string | undefined
  menuVisibleOnFocus: boolean
  isOnComposition: boolean
  isSilentBlur: boolean
  prefixWidth: number
  tagInMultiLine: boolean
  mouseEnter: boolean
}

export type SelectGroupContext = {
  disabled: boolean
}

export type SelectContext = {
  props: {
    multiple?: boolean
    multipleLimit?: number
    modelValue?: SelectValue
    popperClass?: string
  }
  states: SelectStates
  query: string
  groupQuery: string
  selectWrapper: HTMLElement
  cachedOptions: Map<SelectOptionValue, SelectOptionContext>
  hoverIndex: number
  optionsCount: number
  filteredOptionsCount: number
  options: Map<SelectOptionValue, SelectOptionContext>
  optionsArray: SelectOptionContext[]
  selected: SelectOptionContext[]
  handleTarget: (
    target: SelectTargetElement | null,
    condition?: boolean
  ) => void
  setSelected(): void
  onOptionCreate(vm: SelectOptionContext): void
  onOptionDestroy(key: SelectOptionValue, vm: SelectOptionContext): void
  handleOptionSelect(vm: SelectOptionContext, byClick: boolean): void
}

export const selectGroupContextKey: InjectionKey<SelectGroupContext> =
  Symbol('SelectGroup')

export const selectContextKey: InjectionKey<SelectContext> = Symbol('Select')

export interface SelectOptionContext {
  el: HTMLElement | undefined
  value: SelectOptionValue
  label?: string
  disabled: boolean
  index: number
  groupDisabled: boolean
  visible: boolean
  hitState: boolean
  hover: boolean
  userCreated: boolean
  currentLabel: string
  isSelected: boolean
  isDisabled: boolean
  hoverItem: () => void
  selectOptionClick: () => void
}

export type RegisterContext = (props: OptionProps) => {
  unregister: () => void
}

export const optionGroupRegisterKey: InjectionKey<RegisterContext> =
  Symbol('group-register')

export const selectRegisterKey: InjectionKey<RegisterContext> =
  Symbol('select-register')
