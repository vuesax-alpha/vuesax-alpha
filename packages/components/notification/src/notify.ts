import { createVNode, isVNode, render } from 'vue'
import { isClient } from '@vueuse/core'
import {
  createContainer,
  useGlobalComponentSettings,
} from '@vuesax-alpha/hooks'

import NotificationConstructor from './notification.vue'
import { useNotificationContainerId } from './use-notification'
import type { Notify, NotifyFn } from './notification'

const globalContainer: Record<string, HTMLElement | null> = {
  'top-right': null,
  'top-center': null,
  'top-left': null,
  'bottom-right': null,
  'bottom-center': null,
  'bottom-left': null,
}

export const notification: NotifyFn & Partial<Notify> = (options = {}) => {
  if (!isClient)
    return {
      close: () => undefined,
    }

  if (typeof options === 'string' || isVNode(options)) {
    options = { content: options }
  }

  const position = options.position || 'bottom-right'

  const { id, selector } = useNotificationContainerId()

  if (
    !globalContainer[position] &&
    !document.body.querySelector(selector.value)
  ) {
    globalContainer[position] = createContainer(`${id.value}-${position}`)
    const { ns } = useGlobalComponentSettings('notification')
    globalContainer[position]?.classList.add(ns.is(position))
  }

  const vm = createVNode(NotificationConstructor, { ...options, position })

  const container = document.createElement('div')
  render(vm, container)
  globalContainer[position]?.appendChild(container.firstChild!)

  const close = () => {
    ;(vm.component!.exposed as { close: () => void }).close()
  }

  return {
    close,
  }
}

export default notification as Notify
