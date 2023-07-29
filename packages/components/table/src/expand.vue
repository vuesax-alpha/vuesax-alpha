<template>
  <transition name="fade-expand">
    <tr v-if="!hidden" ref="trRef" :class="ns.be('tr-expand', 'row')">
      <td :class="ns.be('tr-expand', 'td')" :colspan="colspan">
        <div ref="contentRef" :class="ns.be('tr-expand', 'content')">
          <div :class="ns.bem('tr-expand', 'content', 'inner')">
            <slot />
          </div>
        </div>
      </td>
    </tr>
  </transition>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { expandProps } from './expand'

defineOptions({
  name: 'VsTableExpand',
})

const ns = useNamespace('table')

defineProps(expandProps)

const hidden = ref<boolean>(true)

const trRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()

watch(hidden, (val: boolean) => {
  if (!val) {
    nextTick(() => {
      const content = contentRef.value
      if (!content) return

      content.style.height = `${content.scrollHeight}px`
    })
  }
})
</script>
