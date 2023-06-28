import { computed } from 'vue'
import {
  defaultNamespace,
  useGlobalConfig,
  useIdInjection,
} from '@vuesax-alpha/hooks'

export let cachedContainer: HTMLElement

export const useLoadingContainerId = () => {
  const namespace = useGlobalConfig('namespace', defaultNamespace)
  const idInjection = useIdInjection()

  const id = computed(() => {
    return `${namespace.value}-loading-container-${idInjection.prefix}`
  })
  const selector = computed(() => `#${id.value}`)

  return {
    id,
    selector,
  }
}
