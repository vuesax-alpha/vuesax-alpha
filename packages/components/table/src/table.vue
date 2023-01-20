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

const props = defineProps(tableProps)

// init here
</script>
