<template>
  <span
    :class="[
      ns.e('chip'),
      ns.is('collapsed', collapsed),
      ns.is('disabled', disabled),
    ]"
    :data-value="value"
  >
    {{ label }}

    <span
      v-if="!collapsed && !disabled"
      :class="ns.em('chip', 'close')"
      @click="onClose"
    >
      <icon-close hover="less" />
    </span>
  </span>
</template>

<script setup lang="ts">
import { IconClose } from '@vuesax-alpha/components'
import { useNamespace } from '@vuesax-alpha/hooks'
import { tagEmits, tagProps } from './tag'

defineProps(tagProps)
const emit = defineEmits(tagEmits)

const ns = useNamespace('select')

const onClose = (event: Event) => {
  emit('close', event)
}
</script>
