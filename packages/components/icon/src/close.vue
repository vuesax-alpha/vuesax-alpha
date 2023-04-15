<template>
  <i
    :class="[ns.b(), hover && ns.bm('hover', hover)]"
    :style="{ transform: `scale(${scale})` }"
  />
</template>

<script lang="ts" setup>
import { useNamespace } from '@vuesax-alpha/hooks'
import { closeProps } from './close'

defineOptions({
  name: 'IconClose',
})

defineProps(closeProps)

const ns = useNamespace('icon-close')
</script>
