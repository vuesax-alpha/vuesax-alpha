<template>
  <i :class="[ns.b(), ns.is('less', less)]" />
</template>

<script setup lang="ts">
import { useNamespace } from '@vuesax-alpha/hooks'
import { arrowProps } from './arrow'

defineOptions({
  name: 'IconArrow',
})

defineProps(arrowProps)

const ns = useNamespace('icon-arrow')
</script>
