<template>
  <i :class="[ns.b('plus'), ns.is('less', less)]" />
</template>

<script setup lang="ts">
import { useNamespace } from '@vuesax-alpha/hooks'
import { plusProps } from './plus'

defineProps(plusProps)

defineOptions({
  name: 'IconPlus',
})

const ns = useNamespace('icon')
</script>
