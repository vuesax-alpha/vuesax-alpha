<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { optionProps } from './option'

defineOptions({
  name: 'VsOption',
})

const props = defineProps(optionProps)

// init here
</script>
