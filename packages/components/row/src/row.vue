<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { rowProps } from './row'

defineOptions({
  name: 'VsRow',
})

const props = defineProps(rowProps)

// init here
</script>
