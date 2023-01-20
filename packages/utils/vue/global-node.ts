import { isClient } from '@vueuse/core'

const globalNodes: HTMLElement[] = []
let target: HTMLElement = !isClient ? (undefined as any) : document.body

export const createGlobalNode = (id?: string) => {
  const el = document.createElement('div')
  if (id !== undefined) {
    el.setAttribute('id', id)
  }

  target.appendChild(el)
  globalNodes.push(el)

  return el
}

export const removeGlobalNode = (el: HTMLElement) => {
  globalNodes.splice(globalNodes.indexOf(el), 1)
  el.remove()
}

export const changeGlobalNodesTarget = (el: HTMLElement) => {
  if (el === target) return

  target = el
  globalNodes.forEach((el) => {
    if (el.contains(target) === false) {
      target.appendChild(el)
    }
  })
}
