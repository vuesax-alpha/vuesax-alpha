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

defineProps(radioProps)

// init here
</script>
