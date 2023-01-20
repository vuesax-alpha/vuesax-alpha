<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { radioProps } from './radio'

defineOptions({
  name: 'VsRadio',
})

const props = defineProps(radioProps)

// init here
</script>
