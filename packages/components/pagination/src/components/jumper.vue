<template>
  <span :class="ns.e('jump')" :disabled="disabled">
    <span :class="ns.e('goto')">Goto</span>
    <vs-input
      type="number"
      :class="[ns.e('editor'), ns.is('in-pagination')]"
      :min="1"
      :max="pageCount"
      :disabled="disabled"
      :model-value="innerValue"
      @change="handleChange"
      @update:model-value="handleInput"
    />
  </span>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import VsInput from '@vuesax-alpha/components/input'
import { usePagination } from '../usePagination'
import type { InputValue } from '@vuesax-alpha/components/input'

defineOptions({
  name: 'VsPaginationJumper',
})

const ns = useNamespace('pagination')

const { pageCount, disabled, currentPage, changeEvent } = usePagination()
const userInput = ref<number>()

const innerValue = computed(() => userInput.value ?? currentPage.value)

function handleInput(val: InputValue) {
  userInput.value = Number(val)
}

function handleChange(val: number | string) {
  val = Math.trunc(+val)
  changeEvent(+val)
  userInput.value = undefined
}
</script>
