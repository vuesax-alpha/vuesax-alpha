import { computed, getCurrentInstance } from 'vue'
import { useAttrs } from '@vuesax-alpha/hooks'
import { componentColors } from '@vuesax-alpha/constants'
import { getVsColor } from '../color'
import { debugWarn } from '../error'

export const getComponentColor = () => {
  const instance = getCurrentInstance()
  if (!instance) {
    debugWarn(
      'use-attrs',
      'getCurrentInstance() returned null. getComponentColor() must be called at the top of a setup function'
    )
    return computed(() => null)
  }

  const attrs = useAttrs({ excludeListeners: true })

  return computed(() => {
    const propColor = componentColors.find(
      (color) => attrs.value[color] === true
    )
    if (propColor) return propColor

    const hasColorString = attrs.value['color'] as string | undefined
    if (!hasColorString) return null

    return getVsColor(hasColorString)
  })
}
