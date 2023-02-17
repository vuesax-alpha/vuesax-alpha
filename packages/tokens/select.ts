// import type { InjectionKey } from 'vue'
// import type { SelectProps } from '@vuesax-alpha/components/select'

// export type SelectOptionValue = string | number | Record<any, unknown>

// export type SelectOptionStates = {
//   index: number
//   groupDisabled: boolean
//   visible: boolean
//   hitState: boolean
//   hover: boolean
//   userCreated: boolean
// }

// export type SelectValue = SelectOptionValue | SelectOptionValue[]

// export type SelectStates = {
//   options: Map<SelectOptionValue, SelectOptionContext>
//   cachedOptions: Map<SelectOptionValue, SelectOptionContext>
//   selected: SelectOptionContext[]
//   createdLabel: string | null
//   createdSelected: boolean
//   inputLength: number
//   inputWidth: number
//   optionsCount: number
//   filteredOptionsCount: number
//   visible: boolean
//   softFocus: boolean
//   selectedLabel: string | null
//   hoverIndex: number
//   query: string | null
//   previousQuery: string | null
//   inputHovering: boolean
//   cachedPlaceHolder: string | null
//   currentPlaceholder: string | null
//   menuVisibleOnFocus: boolean
//   isOnComposition: boolean
//   isSilentBlur: boolean
//   prefixWidth: number
//   tagInMultiLine: boolean
//   mouseEnter: boolean
// }

// interface SelectGroupContext {
//   disabled: boolean
// }

// export interface QueryChangeCtx {
//   query: string
// }

// export interface SelectContext {
//   props: SelectProps
//   states: SelectStates
//   queryChange: QueryChangeCtx
//   groupQueryChange: string
//   selectWrapper: HTMLElement
//   cachedOptions: Map<SelectOptionValue, SelectOptionContext>
//   hoverIndex: number
//   optionsCount: number
//   filteredOptionsCount: number
//   options: Map<SelectOptionValue, SelectOptionContext>
//   optionsArray: SelectOptionContext[]
//   selected: SelectOptionContext[]
//   setSelected(): void
//   onOptionCreate(vm: SelectOptionContext): void
//   onOptionDestroy(key: SelectOptionValue, vm: SelectOptionContext): void
//   handleOptionSelect(vm: SelectOptionContext, byClick: boolean): void
// }

// export const selectGroupContextKey: InjectionKey<SelectGroupContext> =
//   Symbol('SelectGroup')

// export const selectContextKey: InjectionKey<SelectContext> = Symbol('Select')

// export interface SelectOptionContext {
//   el: HTMLElement | undefined
//   value: SelectOptionValue
//   label?: string
//   disabled: boolean
//   index: number
//   groupDisabled: boolean
//   visible: boolean
//   hitState: boolean
//   hover: boolean
//   userCreated: boolean
//   currentLabel: string
//   isSelected: boolean
//   isDisabled: boolean
//   hoverItem: () => void
//   selectOptionClick: () => void
// }
