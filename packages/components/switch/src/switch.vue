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

const props = defineProps(switchProps)

// init here
</script>
