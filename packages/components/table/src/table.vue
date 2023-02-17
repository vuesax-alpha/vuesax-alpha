<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { tableProps } from './table'

defineOptions({
  name: 'VsTable',
})

defineProps(tableProps)

// init here
</script>
