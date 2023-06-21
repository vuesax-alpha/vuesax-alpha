import { computed, onBeforeMount } from 'vue'
import { isClient } from '@vueuse/shared'
import {
  createContainer,
  defaultNamespace,
  useGlobalConfig,
  useIdInjection,
} from '@vuesax-alpha/hooks'

export let cachedContainer: HTMLElement

export const useNotificationContainerId = () => {
  const namespace = useGlobalConfig('namespace', defaultNamespace)
  const idInjection = useIdInjection()

  const id = computed(() => {
    return `${namespace.value}-notification-container-${idInjection.prefix}`
  })
  const selector = computed(() => `#${id.value}`)

  return {
    id,
    selector,
  }
}

export const useNotificationContainer = () => {
  const { id, selector } = useNotificationContainerId()
  onBeforeMount(() => {
    if (!isClient) return

    // This is for bypassing the error that when under testing env, we often encounter
    // document.body.innerHTML = '' situation
    // for this we need to disable the caching since it's not really needed
    if (
      process.env.NODE_ENV === 'test' ||
      (!cachedContainer && !document.body.querySelector(selector.value))
    ) {
      cachedContainer = createContainer(id.value)
    }
  })

  return {
    id,
    selector,
  }
}
