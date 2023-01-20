import { computed } from 'vue'
import { isArray } from '@vue/shared'
import { avatarGroupContextKey } from '@vuesax-alpha/tokens'
import { useGroupInject } from '@vuesax-alpha/hooks'
import { debugWarn } from '@vuesax-alpha/utils'
import type { ComponentInternalInstance } from 'vue'

export const useAvatarStatus = (slots: ComponentInternalInstance['slots']) => {
  const avatarGroup = useGroupInject(avatarGroupContextKey)

  const isHidden = computed(
    () => avatarGroup && avatarGroup.index.value > avatarGroup.max - 1
  )

  const isLastest = computed(
    () => !!avatarGroup?.max && avatarGroup.index.value === avatarGroup.max - 1
  )

  const moreNumber = computed(
    () =>
      avatarGroup && avatarGroup.children.length - avatarGroup.index.value - 1
  )

  const showLastest = computed(
    () =>
      avatarGroup &&
      avatarGroup.children.length - avatarGroup.index.value - 1 != 0
  )

  // split text: 'Evan You' -> EY, lyli -> lyli
  const getText = computed(() => {
    const slotText = slots.text?.()
    if (!slotText) return ''

    if (slotText.length > 1) {
      debugWarn('Avatar slot="text"', 'requires exact only one valid child.')
      return ''
    }

    const nodeText = slotText[0]

    if (isArray(nodeText.children) || !nodeText.children) return ''

    const text = nodeText.children as string

    let getLetters: string[] = [text]
    if (text.length > 5) {
      getLetters = text.split(/\s/g).map((item) => item[0])
    }
    return getLetters.join('')
  })

  return {
    isHidden,
    isLastest,
    getText,
    moreNumber,
    showLastest,
  }
}
