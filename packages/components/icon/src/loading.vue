<template>
  <div :class="ns.b()">
    <svg viewBox="0 0 50 50" :class="[ns.e('item'), ns.e('1')]">
      <circle class="path" cx="25" cy="25" r="25" />
    </svg>
    <svg viewBox="0 0 50 50" :class="[ns.e('item'), ns.e('2')]">
      <circle class="path" cx="25" cy="25" r="25" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@vuesax-alpha/hooks'

defineOptions({
  name: 'IconLoading',
})

const ns = useNamespace('icon-loading')
</script>
