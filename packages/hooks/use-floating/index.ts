import { nextTick, reactive, ref } from 'vue'
import { isClient, unrefElement, useElementBounding } from '@vueuse/core'
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
   * @default bottom
   */
  strategy?: Strategy
  /**
   * Fit popper content with reference element
   * @default true
   */
  fit?: boolean

  /**
   * Update popper content with reference element when window is resized or scrolled
   * @default true
   */
  autoUpdate?: boolean

  /**
   * distance from popper to element
   * @default 0
   */
  offset: number
}

export function useFloating(
  reference: MaybeElementRef,
  popper: MaybeElementRef,
  options?: Options
) {
  const { placement = 'bottom', fit = true, offset = 0 } = options ?? {}

  const popperPlacement = ref(placement)

  const destroy = () => {
    unrefElement(popper)?.remove()
  }

  const updateCord = () => {
    if (!isClient) return

    nextTick(() => {
      const triggerElement = unrefElement(reference)
      const popperElement = unrefElement(popper)

      if (!popperElement || !triggerElement) return

      const triggerBounding = reactive(useElementBounding(triggerElement))
      const popperBounding = reactive(useElementBounding(popperElement))

      const style = popperElement.style
      style.position = 'fixed'

      const scrollTop = window.pageYOffset

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

      if (placement.includes('bottom') || placement.includes('top')) {
        if (fit) style.width = `${triggerBounding.width}px`

        let popperOffsetTop = triggerBounding.y + offset

        if (placement.includes('bottom')) {
          popperOffsetTop += scrollTop + triggerHeight
        }

        if (placement.includes('top')) {
          popperOffsetTop += scrollTop - popperHeight
        }

        style.top = `${popperOffsetTop}px`

        switch (placement) {
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

      if (placement.includes('left') || placement.includes('right')) {
        if (placement.includes('left')) {
          style.left = `${triggerBounding.x - popperBounding.width}px`
        }

        if (placement.includes('right')) {
          style.left = `${triggerBounding.x + triggerBounding.width}px`
        }

        switch (placement) {
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
            style.top = `${
              triggerBounding.top - popperHeight + triggerHeight
            }px`
            break
        }
      }

      popperPlacement.value = placement
    })
  }

  return {
    update: updateCord,
    destroy,
    placement: popperPlacement,
  }
}
