<template>
  <div :class="[ns.b(), ns.is('hidden', !visible)]">
    <h5>
      <slot name="label">
        {{ label }}
      </slot>
    </h5>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, provide, ref, watch } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { throwError } from '@vuesax-alpha/utils'
import { optionGroupProps } from './option-group'
import { optionGroupRegisterKey, selectContextKey } from './tokens'
import type { SelectOptionContext, SelectOptionValue } from './tokens'

defineOptions({
  name: 'VsOptionGroup',
})

defineProps(optionGroupProps)

const ns = useNamespace('option-group')

const select = inject(selectContextKey)

if (!select) {
  throwError(
    'Option Group',
    '`option-group` component must be called inside `select` component'
  )
}

const visible = ref(true)
const options = ref<Map<SelectOptionValue, SelectOptionContext>>(new Map())

const optionsArray = computed(() => Array.from(options.value.values()))

watch(
  () => select.queryChange,
  () => {
    visible.value = optionsArray.value.some((option) => option.visible === true)
  },
  { flush: 'post' }
)

provide(optionGroupRegisterKey, (option: SelectOptionContext) => {
  options.value.set(option.value, option)

  return {
    unregister() {
      options.value.delete(option.value)
    },
  }
})
</script>
