<template>
  <vs-select
    ref="selectInstance"
    :model-value="value"
    :disabled="disabled"
    :clearable="clearable"
    :clear-icon="clearIcon"
    :effect="effect"
    :placeholder="placeholder"
    default-first-option
    :filter="editable"
    @update:model-value="(event) => $emit('update:modelValue', event)"
    @change="(event) => $emit('change', event)"
    @blur="(event) => $emit('blur', event)"
    @focus="(event) => $emit('focus', event)"
  >
    <vs-option
      v-for="item in items"
      :key="item.value"
      :label="item.value"
      :value="item.value"
      :disabled="item.disabled"
    />
  </vs-select>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import { VsOption, VsSelect } from '@vuesax-alpha/components/select'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { compareTime, formatTime, nextTime, parseTime } from './utils'
import { timeSelectProps } from './time-select'
import type { SelectInstance } from '@vuesax-alpha/components/select'

dayjs.extend(customParseFormat)

defineOptions({
  name: 'VsTimeSelect',
})

defineEmits(['change', 'blur', 'focus', UPDATE_MODEL_EVENT])
const props = defineProps(timeSelectProps)

const selectInstance = ref<SelectInstance>()

const value = computed(() =>
  dayjs(props.modelValue || start.value, 'HH:mm').format(props.format)
)
const start = computed(() => {
  const time = parseTime(props.start)
  return time ? formatTime(time) : null
})
const end = computed(() => {
  const time = parseTime(props.end)
  return time ? formatTime(time) : null
})
const step = computed(() => {
  const time = parseTime(props.step)
  return time ? formatTime(time) : null
})
const minTime = computed(() => {
  const time = parseTime(props.minTime || '')
  return time ? formatTime(time) : null
})
const maxTime = computed(() => {
  const time = parseTime(props.maxTime || '')
  return time ? formatTime(time) : null
})
const items = computed(() => {
  const result: { value: string; disabled: boolean }[] = []
  if (props.start && props.end && props.step) {
    let current = start.value
    let currentTime: string
    while (current && end.value && compareTime(current, end.value) <= 0) {
      currentTime = dayjs(current, 'HH:mm').format(props.format)
      result.push({
        value: currentTime,
        disabled:
          props.disabledItems.includes(current) ||
          compareTime(current, minTime.value || '-1:-1') <= 0 ||
          compareTime(current, maxTime.value || '100:100') >= 0,
      })
      current = nextTime(current, step.value!)
    }
  }
  return result
})

const focus = () => {
  selectInstance.value?.focus()
}

const blur = () => {
  selectInstance.value?.blur()
}

defineExpose({
  /** focus to time select */
  focus,

  /** blur time select */
  blur,
})
</script>
