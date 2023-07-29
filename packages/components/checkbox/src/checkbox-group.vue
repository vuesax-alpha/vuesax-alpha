<template>
  <div :class="ns.b('group')">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onBeforeMount, provide, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { useNamespace } from '@vuesax-alpha/hooks'
import { checkboxGroupContextKey } from '@vuesax-alpha/tokens'
import { isArray } from '@vuesax-alpha/utils'
import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group'

import type { CheckboxGroupValueType } from './checkbox-group'

defineOptions({
  name: 'VsCheckboxGroup',
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)
const ns = useNamespace('checkbox')

const changeEvent = async (value: CheckboxGroupValueType) => {
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  emit('change', value)
}

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val: CheckboxGroupValueType) {
    changeEvent(val)
  },
})

onBeforeMount(() => {
  if (!isArray(props.modelValue)) {
    modelValue.value = [props.modelValue]
  }
})

provide(checkboxGroupContextKey, {
  ...pick(toRefs(props), ['min', 'max', 'disabled']),
  modelValue,
  changeEvent,
})
</script>
