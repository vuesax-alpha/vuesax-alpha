<template>
  <button
    type="button"
    class="btn-next"
    :disabled="internalDisabled"
    :aria-disabled="internalDisabled"
  >
    <span v-if="nextText">{{ nextText }}</span>
    <vs-icon v-else>
      <component :is="nextIcon" />
    </vs-icon>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { VsIcon } from '@vuesax-alpha/components/icon'
import { usePagination } from '../usePagination'
import { paginationNextProps } from './next'

defineOptions({
  name: 'VsPaginationNext',
})

defineProps(paginationNextProps)

const { pageCount, disabled, currentPage } = usePagination()

const internalDisabled = computed(
  () =>
    disabled.value ||
    currentPage.value === pageCount.value ||
    pageCount.value === 0
)
</script>
