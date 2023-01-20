<template>
  <span :class="ns.e('sizes')">
    <vs-select
      :model-value="innerPageSize"
      :disabled="disabled"
      :validate-event="false"
      @change="handleChange"
    >
      <vs-option
        v-for="item in innerPageSizes"
        :key="item"
        :value="item"
        :label="`${item} / page`"
      />
    </vs-select>
  </span>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { isEqual } from 'lodash-unified'
import { VsOption, VsSelect } from '@vuesax-alpha/components/select'
import { useNamespace } from '@vuesax-alpha/hooks'
import { usePagination } from '../usePagination'
import { paginationSizesProps } from './sizes'

defineOptions({
  name: 'VsPaginationSizes',
})

const props = defineProps(paginationSizesProps)
const emit = defineEmits(['page-size-change'])
const ns = useNamespace('pagination')

const { disabled, handleSizeChange } = usePagination()

const innerPageSize = ref<number>(props.pageSize)

watch(
  () => props.pageSizes,
  (newVal, oldVal) => {
    if (isEqual(newVal, oldVal)) return
    if (Array.isArray(newVal)) {
      const pageSize = newVal.includes(props.pageSize!)
        ? props.pageSize
        : props.pageSizes[0]
      emit('page-size-change', pageSize)
    }
  }
)

watch(
  () => props.pageSize,
  (newVal) => {
    innerPageSize.value = newVal!
  }
)

const innerPageSizes = computed(() => props.pageSizes)

function handleChange(val: number) {
  if (val !== innerPageSize.value) {
    innerPageSize.value = val
    handleSizeChange(Number(val))
  }
}
</script>
