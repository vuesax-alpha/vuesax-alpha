<template>
  <div :class="ns.e('group')">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@vuesax-alpha/hooks'

defineOptions({
  name: 'VsButtonGroup',
})

const ns = useNamespace('button')
</script>
