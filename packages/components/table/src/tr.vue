<template>
  <tr ref="trRef" :class="trKls" :style="trStyles" @click="click">
    <slot />
  </tr>
  <template v-if="$slots.expand">
    <transition name="fade-expand">
      <tr v-if="expand" ref="trRef" :class="ns.be('tr-expand', 'row')">
        <td :class="ns.be('tr-expand', 'td')" :colspan="unref(table.colspan)">
          <div ref="contentRef" :class="ns.be('tr-expand', 'content')">
            <div :class="ns.bem('tr-expand', 'content', 'inner')">
              <slot />
            </div>
          </div>
        </td>
      </tr>
    </transition>
  </template>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, ref, unref, useSlots, watch } from 'vue'
import { isEqual } from 'lodash-unified'
import { useBaseComponent, useNamespace } from '@vuesax-alpha/hooks'
import { tableContextKey } from '@vuesax-alpha/tokens'
import { getVsColor, isArray, throwError } from '@vuesax-alpha/utils'

import { tableTrEmits, tableTrProps } from './tr'

defineOptions({
  name: 'VsTr',
})

const ns = useNamespace('table')

const props = defineProps(tableTrProps)
const emit = defineEmits(tableTrEmits)

const slots = useSlots()

const table = inject(tableContextKey)

if (!table) {
  throwError('vs-tr', 'component must be called inside table component')
}

const trRef = ref<HTMLElement>()
const contentExpandRef = ref<HTMLElement>()

const expand = ref<boolean>(false)

const isSelected = computed(() => {
  if (props.isSelected != null) return props.isSelected

  const modelValue = isArray(table.modelValue.value)
    ? table.modelValue.value
    : [table.modelValue.value]

  return modelValue.some((e) => isEqual(e, props.data))
})

const trKls = computed(() => [
  useBaseComponent(props.color),
  ns.b('tr'),
  ns.is('selected', isSelected.value),
  ns.is('expand', expand.value),
  ns.is('has-expand-slot', !!slots.expand),
])

const trStyles = computed(() => [
  ns.cssVar({
    color: getVsColor(props.color),
  }),
])

const click = (evs: any) => {
  if (slots.expand) {
    if (!evs.target.className.includes(ns.is('edit'))) {
      expand.value = !expand.value
    }
  }

  if (evs.target.nodeName == 'TD' && !props.notClickSelected) {
    table.selected(props.data)
    emit('selected', props.data)
  }

  emit('click', evs)
}

watch(expand, (val: boolean) => {
  if (val) {
    nextTick(() => {
      const content = contentExpandRef.value
      if (!content) return

      content.style.height = `${content.scrollHeight}px`
    })
  }
})

watch(
  () => props.data,
  () => {
    trRef.value?.style.removeProperty(ns.cssVarName('color'))
    expand.value = false
  }
)
</script>
