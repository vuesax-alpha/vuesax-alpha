<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { selectProps } from './select'

defineOptions({
  name: 'VsSelect',
})

const props = defineProps(selectProps)

// init here
</script>
