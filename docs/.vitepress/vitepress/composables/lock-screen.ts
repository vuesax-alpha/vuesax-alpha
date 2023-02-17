import { onUnmounted } from 'vue'
import { isClient } from '@vueuse/core'
import {
  addClass,
  getScrollBarWidth,
  getStyle,
  hasClass,
  removeClass,
} from '@vuesax-alpha/utils'

export const useLockScreen = () => {
  let scrollBarWidth = 0
  let withoutHiddenClass = false
  let bodyPaddingRight = '0'
  let computedBodyPaddingRight = 0

  onUnmounted(() => {
    cleanup()
  })

  const cleanup = () => {
    if (!isClient) return
    removeClass(document.body, 'vs-popup-parent--hidden')
    if (withoutHiddenClass) {
      document.body.style.paddingRight = bodyPaddingRight
    }
  }

  const lock = () => {
    if (!isClient) return
    withoutHiddenClass = !hasClass(document.body, 'vs-popup-parent--hidden')
    if (withoutHiddenClass) {
      bodyPaddingRight = document.body.style.paddingRight
      computedBodyPaddingRight = Number.parseInt(
        getStyle(document.body, 'paddingRight'),
        10
      )
    }
    scrollBarWidth = getScrollBarWidth('vs')
    const bodyHasOverflow =
      document.documentElement.clientHeight < document.body.scrollHeight
    const bodyOverflowY = getStyle(document.body, 'overflowY')
    if (
      scrollBarWidth > 0 &&
      (bodyHasOverflow || bodyOverflowY === 'scroll') &&
      withoutHiddenClass
    ) {
      document.body.style.paddingRight = `${
        computedBodyPaddingRight + scrollBarWidth
      }px`
    }
    addClass(document.body, 'vs-popup-parent--hidden')
  }

  return {
    lock,
    cleanup,
  }
}
