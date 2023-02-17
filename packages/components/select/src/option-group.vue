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

defineProps(optionGroupProps)

// init here
</script>
