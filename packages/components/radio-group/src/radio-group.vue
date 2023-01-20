<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { radioGroupProps } from './radio-group'

defineOptions({
  name: 'VsRadioGroup',
})

const props = defineProps(radioGroupProps)

// init here
</script>
