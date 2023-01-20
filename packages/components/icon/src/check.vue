<template>
  <i
    :class="[
      ns.b(),
      ns.is('indeterminate', indeterminate),
      ns.is('active', active),
    ]"
  >
    <span>
      <div class="line1" />
      <div class="line2" />
    </span>
  </i>
</template>

<script lang="ts" setup>
import { useNamespace } from '@vuesax-alpha/hooks'
import { checkProps } from './check'

defineOptions({
  name: 'IconCheck',
})

defineProps(checkProps)

const ns = useNamespace('icon-check')
</script>
