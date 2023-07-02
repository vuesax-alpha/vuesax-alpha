import { computed, onMounted, ref } from 'vue'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { isArray } from '@vuesax-alpha/utils'
import { useNamespace } from '@vuesax-alpha/hooks'
import type { TableEmitFn, TableProps } from './../table'

export const useTable = (props: TableProps, emit: TableEmitFn) => {
  const ns = useNamespace('table')

  const colspan = ref<number>(0)

  // DOM refs
  const theadRef = ref<HTMLElement>()

  const isMultipleSelected = computed(
    () => props.multiple && isArray(props.modelValue)
  )

  const tableKls = computed(() => [
    ns.b(),
    ns.is('striped', props.striped),
    ns.is('multiple', props.multiple),
  ])

  const selectedMultiple = (val: any) => {
    const newVal = props.modelValue

    if (props.modelValue.includes(val)) {
      newVal.splice(props.modelValue.indexOf(val), 1)
    } else {
      newVal.push(val)
    }

    emit(UPDATE_MODEL_EVENT, newVal)
  }

  const selected = (val: any) => {
    if (isMultipleSelected.value) {
      selectedMultiple(val)
    } else {
      emit(UPDATE_MODEL_EVENT, val)
    }
  }

  onMounted(() => {
    if (props.multiple) {
      if (!isArray(props.modelValue)) {
        const value = props.modelValue ? [props.modelValue] : []
        emit(UPDATE_MODEL_EVENT, [...value])
      }
    }
    const tds = theadRef.value?.querySelectorAll('th')
    colspan.value = tds?.length || 0
  })

  return {
    tableKls,
    colspan,
    isMultipleSelected,
    selected,

    theadRef,
  }
}
