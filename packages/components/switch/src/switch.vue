<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { switchProps } from './switch'

defineOptions({
  name: 'VsSwitch',
})

defineProps(switchProps)

// init here
</script>
