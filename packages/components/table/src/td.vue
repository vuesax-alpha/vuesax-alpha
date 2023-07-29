<template>
  <td :class="tdKls" @click="onClick">
    <slot />
  </td>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { tableTdEmits, tableTdProps } from './td'

defineOptions({
  name: 'VsTd',
})

const ns = useNamespace('table')

const props = defineProps(tableTdProps)

const emit = defineEmits(tableTdEmits)

const tdKls = computed(() => [
  ns.b('td'),
  ns.is('has-checkbox', props.checkbox),
  ns.is('edit', props.edit),
])

const onClick = (e: Event) => {
  emit('click', e)
}
</script>
