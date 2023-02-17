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

defineProps(rowProps)

// init here
</script>
