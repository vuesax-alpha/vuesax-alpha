import { nextTick, onMounted, ref, watch } from 'vue'
import { useEventListener } from '@vueuse/core'

import { computeCoordsFromPlacement } from './computed-coord-from-placement'
import { getBoundingClientRect } from './utils'
import type { Options } from './types'
import type { Ref } from 'vue'

export * from './types'

export function useFloating(
  reference: Ref<HTMLElement | undefined>,
  popper: Ref<HTMLElement | undefined>,
  arrowRef: Ref<HTMLElement | undefined>,
  options: Options
) {
  const {
    placement = 'bottom',
    fit = true,
    offset = 0,
    windowResize = true,
    visible,
  } = options ?? {}

  const popperPlacement = ref(placement)

  const destroy = () => {
    popper.value?.remove()
  }

  const computedCoord = () => {
    const triggerElement = reference.value
    const popperElement = popper.value

    if (!popperElement || !triggerElement) return

    const referenceBounding = getBoundingClientRect(triggerElement)

    const popperStyle = popperElement.style

    if (fit) popperStyle.width = `${referenceBounding.width}px`

    const { x, y } = computeCoordsFromPlacement(
      {
        reference: getBoundingClientRect(triggerElement),
        floating: getBoundingClientRect(popperElement),
        arrow: getBoundingClientRect(arrowRef.value),
      },
      popperPlacement.value,
      {
        offset,
      }
    )

    popperStyle.left = `${x}px`
    popperStyle.top = `${y}px`
  }

  onMounted(() => {
    if (windowResize) useEventListener('resize', computedCoord)

    watch(visible, () => {
      nextTick(computedCoord)
    })

    watch(popperPlacement, (placement) => {
      popper.value?.setAttribute('data-popper-placement', placement)
    })

    watch(
      reference,
      (referenceElement) => {
        destroy()

        if (!referenceElement) return

        if (visible.value) {
          nextTick(computedCoord)
        }
      },
      {
        flush: 'post',
      }
    )
  })

  return {
    update: computedCoord,
    destroy,
    placement: popperPlacement,
  }
}
