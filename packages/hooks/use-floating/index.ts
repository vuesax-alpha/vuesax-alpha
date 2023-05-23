import { nextTick, onMounted, reactive, ref, watch } from 'vue'
import {
  isClient,
  unrefElement,
  useElementBounding,
  useEventListener,
} from '@vueuse/core'
import type { MaybeElementRef } from '@vueuse/core'

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export type Strategy = 'fixed' | 'absolute'

export type Options = {
  /**
   * Tooltip placement - `top` | `bottom` | `left` | `right`
   * @default bottom
   */
  placement?: Placement
  /**
   * Tooltip strategy
   * @default absolute
   */
  strategy?: Strategy
  /**
   * Fit popper content with reference element
   * @default true
   */
  fit?: boolean

  /**
   * Flip popper when the viewport crosses the screen
   * @default true
   */
  flip?: boolean
  /**
   * Update popper content with reference element when window is resized
   * @default true
   */
  windowResize?: boolean
  /**
   * Update popper content with reference element when window is scrolled
   * @default true
   */
  windowScroll?: boolean

  /**
   * distance from popper to element
   * @default 0
   */
  offset?: number
}

export function useFloating(
  reference: MaybeElementRef,
  popper: MaybeElementRef,
  options?: Options
) {
  const {
    placement = 'bottom',
    fit = true,
    offset = 0,
    windowResize = true,
    windowScroll = true,
    flip = true,
  } = options ?? {}

  const cacheOptions: Pick<
    Options,
    'placement' | 'windowResize' | 'windowScroll' | 'flip'
  > = {
    placement,
    windowResize,
    windowScroll,
    flip,
  }

  const popperPlacement = ref(placement)

  const destroy = () => {
    unrefElement(popper)?.remove()
  }

  const updateCord = () => {
    const triggerElement = unrefElement(reference)
    const popperElement = unrefElement(popper)

    if (!popperElement || !triggerElement) return

    const triggerBounding = reactive(useElementBounding(triggerElement))
    const popperBounding = reactive(useElementBounding(popperElement))

    const style = popperElement.style
    style.position = 'fixed'

    // TODO: add support for arrow elements
    const arrowHeight = 0
    const arrowWidth = 0

    const triggerWidth = triggerBounding.width
    const triggerHeight = triggerBounding.height
    const triggerHalfWidth = triggerWidth / 2
    const triggerHalfHeight = triggerHeight / 2

    const popperWidth = popperBounding.width
    const popperHaflWidth = popperWidth / 2
    const popperHeight = popperBounding.height
    const popperHaflHeight = popperHeight / 2

    const distanceYAxis = Math.abs(triggerHalfWidth - popperHaflWidth)
    const distanceXAxis = Math.abs(triggerHalfHeight - popperHaflHeight)

    // BUG: the first time render is not executed
    if (flip) {
      const flipPlacement = () => {
        const _placement = cacheOptions.placement

        if (_placement === 'top')
          return triggerBounding.y - arrowHeight < popperHeight
            ? 'bottom'
            : 'top'

        if (_placement === 'bottom')
          return window.innerHeight - popperHeight - triggerBounding.y < 30
            ? 'top'
            : 'bottom'

        if (_placement === 'left')
          return triggerBounding.x - arrowWidth < popperWidth ? 'right' : 'left'

        if (_placement === 'right')
          return triggerBounding.x + arrowWidth + triggerWidth + popperWidth >
            window.innerWidth
            ? 'left'
            : 'right'

        return 'bottom'
      }

      popperPlacement.value = flipPlacement()
    }

    if (
      popperPlacement.value.includes('bottom') ||
      popperPlacement.value.includes('top')
    ) {
      if (fit) style.width = `${triggerBounding.width}px`

      let popperOffsetTop = triggerBounding.top

      if (popperPlacement.value.includes('bottom')) {
        popperOffsetTop += triggerHeight + offset
      }

      if (popperPlacement.value.includes('top')) {
        popperOffsetTop -= popperHeight - offset
      }

      style.top = `${popperOffsetTop}px`

      switch (popperPlacement.value) {
        case 'bottom':
        case 'top':
          // eslint-disable-next-line no-case-declarations
          let left = triggerBounding.x
          if (!fit) {
            if (triggerBounding.width > popperBounding.width) {
              left += distanceYAxis
            } else if (triggerBounding.width < popperBounding.width) {
              left -= distanceYAxis
            }
          }

          style.left = `${left}px`
          break

        case 'bottom-start':
        case 'top-start':
          style.left = `${triggerBounding.x}px`
          break

        case 'bottom-end':
        case 'top-end':
          style.left = `${triggerBounding.right - popperBounding.width}px`
          break
      }
    }

    if (
      popperPlacement.value.includes('left') ||
      popperPlacement.value.includes('right')
    ) {
      let left = triggerBounding.x
      if (popperPlacement.value.includes('left')) {
        left -= offset - popperBounding.width
      }

      if (popperPlacement.value.includes('right')) {
        left += offset + popperBounding.width
      }
      style.left = `${left}px`

      switch (popperPlacement.value) {
        case 'left':
        case 'right':
          style.top = `${triggerBounding.top + distanceXAxis}px`
          break

        case 'left-start':
        case 'right-start':
          style.top = `${triggerBounding.top}px`
          break

        case 'left-end':
        case 'right-end':
          style.top = `${triggerBounding.top - popperHeight + triggerHeight}px`
          break
      }
    }
  }

  const update = () => {
    if (!isClient) return

    updateCord()
  }

  onMounted(() => {
    if (windowResize) {
      addEventListener('resize', update)
    }

    if (windowScroll) {
      useEventListener('scroll', update)
    }
  })

  watch(popperPlacement, (placement) => {
    unrefElement(popper)?.setAttribute('data-popper-placement', placement)
  })

  return {
    update,
    destroy,
    placement: popperPlacement,
  }
}
