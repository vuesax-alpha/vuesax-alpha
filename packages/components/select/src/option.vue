<template>
  <button
    ref="el"
    :class="optionKls"
    @mouseenter="hoverItem"
    @click="selectOptionClick"
  >
    <!-- <vs-checkbox v-if="isMultiple" :checked-force="isSelected">
      <slot>{{ label }}</slot>
    </vs-checkbox> -->
    <!-- <template v-else> -->
    <slot>{{ currentLabel }}</slot>
    <!-- </template> -->
  </button>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import {
  isObject as _isObject,
  includes,
  isEqual,
  toArray,
} from 'lodash-unified'
import { useNamespace } from '@vuesax-alpha/hooks'
import { escapeStringRegexp, throwError } from '@vuesax-alpha/utils'
import { selectContextKey, selectGroupContextKey } from './tokens'
import { optionProps } from './option'
import type {
  SelectOptionContext,
  SelectOptionStates,
  SelectValue,
} from './tokens'

defineOptions({
  name: 'VsOption',
})

const select = inject(selectContextKey)
const selectGroup = inject(selectGroupContextKey, { disabled: false })

if (!select) {
  throwError(
    'Select Option',
    '`Option` component must be called inside `select` or `option-group` component'
  )
}

const ns = useNamespace('select')

const props = defineProps(optionProps)

const el = ref<HTMLElement>()

const states = reactive<SelectOptionStates>({
  index: -1,
  groupDisabled: false,
  visible: true,
  hitState: false,
  hover: false,
  userCreated: false,
})

const { visible, hover } = toRefs(states)

const isObject = computed(() => _isObject(props.value))

const isSelected = computed(() => {
  if (!select?.props.multiple) {
    return isEqual(props.value, select.props.modelValue)
  } else {
    // @ts-ignore
    return includes(select.props.modelValue, props.value)
  }
})

const limitReached = computed(() => {
  if (select.props.multiple && select.props.multipleLimit) {
    const modelValue = (toArray(select.props.modelValue) || []) as SelectValue[]
    return (
      !isSelected.value &&
      modelValue.length >= select.props.multipleLimit &&
      select.props.multipleLimit > 0
    )
  }
  return false
})

const currentLabel = computed(() => {
  return (
    props.label || ((isObject.value ? '' : props.value) as unknown as string)
  )
})

const isDisabled = computed(() => {
  return props.disabled || states.groupDisabled || limitReached.value
})

const hoverItem = () => {
  if (!props.disabled && !selectGroup.disabled) {
    select.hoverIndex = select.optionsArray.indexOf(
      reactive({
        ...props,
        ...states,
        isDisabled,
        isSelected,
        currentLabel,
        hoverItem,
      }) as SelectOptionContext
    )
  }
}

const vm = reactive({
  ...props,
  ...states,
  isDisabled,
  isSelected,
  currentLabel,
  hoverItem,
}) as SelectOptionContext

watch(
  () => currentLabel.value,
  () => {
    // !remote
    if (!states.userCreated) select.setSelected()
  }
)

watch(
  () => props.value,
  (val, oldVal) => {
    if (!Object.is(val, oldVal)) {
      select.onOptionDestroy(oldVal, vm)
      select.onOptionCreate(vm)
    }
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
  () => select.query,
  (query: string) => {
    const regexp = new RegExp(escapeStringRegexp(query), 'i')
    states.visible = regexp.test(`${currentLabel.value}`)
    if (!states.visible) {
      select.filteredOptionsCount--
    }
  }
)

const optionKls = computed(() => [
  ns.e('option'),
  ns.is('hover', hover.value),
  ns.is('active', isSelected.value),
  ns.is('disabled', isDisabled.value),
  ns.is('hidden', !visible.value),
])

onBeforeUnmount(() => {
  const key = vm.value
  const { selected } = select
  const doesSelected = selected.includes(vm)
  // if option is not selected, remove it from cache
  nextTick(() => {
    if (select.cachedOptions.get(key) === vm && !doesSelected) {
      select.cachedOptions.delete(key)
    }
  })
  select.onOptionDestroy(
    key,
    reactive({
      ...props,
      ...states,
      isDisabled,
      isSelected,
      currentLabel,
      hoverItem,
    }) as SelectOptionContext
  )
})

const selectOptionClick = () => {
  if (props.disabled !== true && states.groupDisabled !== true) {
    select.handleOptionSelect(vm, true)
  }
}

select.onOptionCreate(
  reactive({
    ...props,
    ...states,
    isDisabled,
    isSelected,
    currentLabel,
    hoverItem,
  }) as SelectOptionContext
)
</script>
