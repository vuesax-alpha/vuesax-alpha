<template>
  <button
    ref="el"
    :class="optionKls"
    @mouseenter="hoverItem"
    @click="selectOptionClick"
  >
    <slot>{{ currentLabel }}</slot>
  </button>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  onBeforeUnmount,
  reactive,
  ref,
  toRef,
  watch,
} from 'vue'
import { isObject as _isObject } from 'lodash-unified'
import { useNamespace } from '@vuesax-alpha/hooks'
import { escapeStringRegexp, throwError } from '@vuesax-alpha/utils'
import {
  optionGroupContextKey,
  optionGroupRegisterKey,
  selectContextKey,
  selectRegisterKey,
} from './tokens'
import { optionProps } from './option'
import type { SelectOptionContext } from './tokens'

defineOptions({
  name: 'VsOption',
})

const ns = useNamespace('select')

const props = defineProps(optionProps)
const value = toRef(props, 'value')

const select = inject(selectContextKey)
const selectRegister = inject(selectRegisterKey)

const optionGroupRegister = inject(optionGroupRegisterKey, undefined)

if (!select || !selectRegister) {
  throwError(
    'Select Option',
    '`Option` component must be called inside `select` or `option-group` component'
  )
}

const selectGroup = inject(optionGroupContextKey, { disabled: false })

const el = ref<HTMLElement>()

const isObject = computed(() => _isObject(props.value))

const limitReached = computed(() => {
  if (select.multiple && select.multipleLimit) {
    const modelValue = select.selectedArray
    return (
      !isSelected.value &&
      modelValue.length >= select.multipleLimit &&
      select.multipleLimit > 0
    )
  }
  return false
})

const currentLabel = computed(() => {
  return props.label || (isObject.value ? '' : `${props.value}`)
})

const isDisabled = computed(() => {
  return props.disabled || states.groupDisabled || limitReached.value
})

const isSelected = computed(() => {
  return select.selectedArray.some((e) => e.value == states.value)
})

const states: SelectOptionContext = reactive({
  index: -1,
  el,
  value,
  currentLabel,
  isDisabled,
  groupDisabled: false,
  visible: true,
  hit: false,
  hover: false,
  created: props.created,
})

const { unregister, updateOption } = selectRegister(states)

const { unregister: optionGroupUnregister } =
  optionGroupRegister?.(states) || {}

onBeforeUnmount(() => {
  unregister()
  optionGroupUnregister?.()
})

const hoverItem = () => {
  if (!props.disabled && !selectGroup.disabled) {
    select.hoverIndex = select.optionsArray.indexOf(states)
  }
}

watch(currentLabel, () => {
  if (!props.created) select.setSelected()
})

watch(
  () => props.value,
  (val, oldVal) => {
    if (!Object.is(val, oldVal)) {
      updateOption(states)
    }
    if (!props.created) select.setSelected()
  }
)

watch(
  () => selectGroup.disabled,
  (val) => {
    states.groupDisabled = val
  },
  { immediate: true }
)

watch(
  () => select.queryChange,
  (query) => {
    const regexp = new RegExp(escapeStringRegexp(`${query}`), 'i')
    states.visible = regexp.test(`${currentLabel.value}`) || props.created
    if (!states.visible) {
      select.states.filteredOptionsCount--
    }
  }
)

const optionKls = computed(() => [
  ns.e('option'),
  ns.is('hover', states.hover),
  ns.is('active', isSelected.value),
  ns.is('disabled', isDisabled.value),
  ns.is('hidden', !states.visible),
])

const selectOptionClick = () => {
  if (props.disabled !== true && states.groupDisabled !== true) {
    select.handleOptionSelect(states, true)
  }
}
</script>
