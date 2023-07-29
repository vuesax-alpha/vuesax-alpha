<template>
  <th ref="thRef" :class="thKls">
    <div :class="ns.be('th', 'content')">
      <slot />

      <div v-if="sort" :class="ns.be('th', 'icons')">
        <icon-arrow class="icon-sort-1" />
        <icon-arrow class="icon-sort-2" />
      </div>
    </div>
  </th>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { IconArrow } from '@vuesax-alpha/components/icon'
import { useNamespace } from '@vuesax-alpha/hooks'
import { tableThProps } from './th'

defineOptions({
  name: 'VsTh',
})

const ns = useNamespace('table')

const props = defineProps(tableThProps)

const thRef = ref<HTMLElement>()

const thKls = computed(() => [ns.b('th'), ns.is('sort', props.sort)])

onMounted(() => {
  thRef.value!.style.width = `${thRef.value!.scrollWidth}px`
})
</script>
