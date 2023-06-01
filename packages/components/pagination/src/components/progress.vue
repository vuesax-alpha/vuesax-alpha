<template>
  <div :class="ns.e('progress')">
    <div class="progress" :style="{ width: `${progress}%` }" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { usePagination } from '../usePagination'

const { pageCount, currentPage } = usePagination()

const ns = useNamespace('pagination')

const progress = computed(() => (currentPage.value * 100) / pageCount.value)
</script>
