<template>
  <div :class="colKls" :style="colStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { rowContextKey } from '@vuesax-alpha/tokens'
import { isNumber, isObject } from '@vuesax-alpha/utils'
import { colProps } from './col'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'VsCol',
})

const props = defineProps(colProps)

const ns = useNamespace('col')

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) })

const colKls = computed(() => {
  const classes: string[] = []
  const pos = ['span', 'offset', 'pull', 'push'] as const
  pos.forEach((prop) => {
    const size = props[prop]
    if (isNumber(size)) {
      if (prop === 'span') classes.push(ns.b(`${props[prop]}`))
      else if (size > 0) classes.push(ns.b(`${prop}-${props[prop]}`))
    }
  })
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
  sizes.forEach((size) => {
    if (isNumber(props[size])) {
      classes.push(ns.b(`${size}-${props[size]}`))
    } else if (isObject(props[size])) {
      Object.entries(props[size]).forEach(([prop, sizeProp]) => {
        classes.push(
          prop !== 'span'
            ? ns.b(`${size}-${prop}-${sizeProp}`)
            : ns.b(`${size}-${sizeProp}`)
        )
      })
    }
  })
  if (gutter.value) {
    classes.push(ns.is('guttered'))
  }
  return [ns.b(), classes]
})

const colStyle = computed(() => {
  const styles: CSSProperties = {}
  if (gutter.value) {
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`
  }
  return styles
})
</script>
