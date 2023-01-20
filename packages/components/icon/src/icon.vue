<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { addUnit, getVsColor, isUndefined } from '@vuesax-alpha/utils'
import { useNamespace } from '@vuesax-alpha/hooks'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'VsIcon',
  inheritAttrs: false,
})
const props = defineProps(iconProps)
const ns = useNamespace('icon')

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    ...ns.cssVar({
      color: getVsColor(color),
    }),
    color: `rgb(${ns.cssVarName('color')})`,
    fontSize: isUndefined(size) ? undefined : addUnit(size),
  }
})
</script>
