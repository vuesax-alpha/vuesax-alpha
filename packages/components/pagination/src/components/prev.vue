<template>
  <button
    type="button"
    class="btn-prev"
    :disabled="internalDisabled && !infinite"
    :aria-disabled="internalDisabled && !infinite"
  >
    <span v-if="prevText">{{ prevText }}</span>
    <vs-icon v-else>
      <component :is="prevIcon" />
    </vs-icon>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { VsIcon } from '@vuesax-alpha/components/icon'
import { usePagination } from '../usePagination'
import { paginationPrevProps } from './prev'

defineOptions({
  name: 'VsPaginationPrev',
})

const { disabled, currentPage, infinite } = usePagination()
defineProps(paginationPrevProps)

const internalDisabled = computed(
  () => disabled.value || currentPage.value <= 1
)
</script>
