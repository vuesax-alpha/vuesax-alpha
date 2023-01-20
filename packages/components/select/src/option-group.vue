<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { optionGroupProps } from './option-group'

defineOptions({
  name: 'VsOptionGroup',
})

const props = defineProps(optionGroupProps)

// init here
</script>
