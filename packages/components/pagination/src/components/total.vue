<template>
  <span :class="ns.e('total')" :disabled="disabled">
    {{ total }}
  </span>
</template>

<script lang="ts" setup>
import { useNamespace } from '@vuesax-alpha/hooks'
import { usePagination } from '../usePagination'
import { paginationTotalProps } from './total'

defineOptions({
  name: 'ElPaginationTotal',
})
defineProps(paginationTotalProps)

const ns = useNamespace('pagination')
const { disabled } = usePagination()
</script>
