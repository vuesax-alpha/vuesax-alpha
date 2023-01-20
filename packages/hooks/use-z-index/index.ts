import { computed, ref } from 'vue'
import { defaultZIndex } from '@vuesax-alpha/constants'
import { useGlobalConfig } from '../use-global-config'

const zIndex = ref(0)

export const useZIndex = () => {
  const initialZIndex = useGlobalConfig('zIndex', defaultZIndex) // TODO: move to @vuesax-alpha/constants
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value)

  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  }
}
