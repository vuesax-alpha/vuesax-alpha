<template>
  <div :class="[ns.e('group'), ns.is('hidden', isHidden)]">
    <h5>
      <slot name="label">
        {{ label }}
      </slot>
    </h5>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, reactive, ref } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { optionGroupProps } from './option-group'
import { optionGroupRegisterKey } from './tokens'
import type { OptionProps } from './option'

defineOptions({
  name: 'VsOptionGroup',
})

defineProps(optionGroupProps)

const ns = useNamespace('select')

const isHidden = ref(false)
const options = reactive<OptionProps[]>([])

provide(optionGroupRegisterKey, (option: OptionProps) => {
  options.push(option)

  return {
    unregister() {
      const index = options.indexOf(option)
      options.splice(index, 1)
    },
  }
})
</script>
