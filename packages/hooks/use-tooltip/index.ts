import { computed, nextTick, onMounted, reactive, unref } from 'vue'
import { unrefElement, useEventListener } from '@vueuse/core'
import { assign } from 'lodash-unified'
import type { Placement, TooltipOption } from '@vuesax-alpha/tokens'
import type { MaybeElement, MaybeRef } from '@vueuse/core'

type TooltipPosition = {
  top: MaybeRef<number>
  left: MaybeRef<number>
  offset?: MaybeRef<number>
}

type Bounding = ReturnType<typeof getBounding>

export const useTooltip = (
  reference: MaybeRef<MaybeElement>,
  tooltip: MaybeRef<MaybeElement>,
  {
    placement = 'bottom',
    windowResize = true,
    windowScroll = true,
    flip = true,
    notArrow = false,
  }: TooltipOption
) => {
  const referenceEl = computed(() => unrefElement(reference))
  const tooltipEl = computed(() => unrefElement(tooltip))

  const scrollTop = window.pageYOffset
  const rootTop = scrollTop + window.innerHeight

  const arrowHeight = notArrow ? 0 : 10
  const arrowWidth = notArrow ? 0 : 10

  const cacheOptions: TooltipOption = {
    placement,
    windowResize,
    windowScroll,
    flip,
  }
  const selfOptions = reactive<TooltipOption>(assign({}, cacheOptions))

  const position = (bouding: Bounding) => {
    const placement = selfOptions.placement

    if (placement === 'top') {
      const _left =
        bouding.referenceX + (bouding.referenceWidth - bouding.tooltipWidht) / 2
      return {
        top:
          bouding.referenceY + scrollTop - bouding.tooltipHeight - arrowHeight,
        left: _left,
      }
    }
    if (placement === 'left') {
      return {
        top:
          bouding.referenceY +
          scrollTop +
          (bouding.referenceHeight - bouding.tooltipHeight) / 2,
        left: bouding.referenceX - bouding.tooltipWidht - arrowWidth,
      }
    }
    if (placement === 'right') {
      return {
        top:
          bouding.referenceY +
          scrollTop +
          (bouding.referenceHeight - bouding.tooltipHeight) / 2,
        left: bouding.referenceX + bouding.referenceWidth + arrowWidth,
      }
    }
    return {
      top:
        bouding.referenceY + scrollTop + bouding.referenceHeight + arrowHeight,
      left:
        bouding.referenceX +
        (bouding.referenceWidth - bouding.tooltipWidht) / 2,
    }
  }

  const flipPlacement = (bouding: Bounding) => {
    const placement = cacheOptions.placement

    if (placement === 'top')
      return bouding.referenceY - arrowHeight < bouding.tooltipHeight
        ? 'bottom'
        : 'top'

    if (placement === 'bottom')
      return rootTop - bouding.tooltipHeight + bouding.referenceY + scrollTop <
        30
        ? 'top'
        : 'bottom'

    if (placement === 'left')
      return bouding.referenceX - arrowWidth < bouding.tooltipWidht
        ? 'right'
        : 'left'

    if (placement === 'right')
      return bouding.referenceX +
        arrowWidth +
        bouding.referenceWidth +
        bouding.tooltipWidht >
        window.innerWidth
        ? 'left'
        : 'right'

    return 'bottom'
  }

  const updateOptions = (options: TooltipOption) => {
    assign(selfOptions, options)
    assign(cacheOptions, options)

    update()
  }

  const updatePosition = ({ top, left }: TooltipPosition) => {
    if (!tooltipEl.value) return
    const tooltipStyle = tooltipEl.value.style
    tooltipStyle.top = `${unref(top)}px`
    tooltipStyle.left = `${unref(left)}px`
  }

  const updatePlacement = (placement: Placement) => {
    selfOptions.placement = placement
    tooltipEl.value?.setAttribute('data-tooltip-placement', placement)
  }

  const update = () => {
    if (!referenceEl.value || !tooltipEl.value) return
    const bouding = getBounding(referenceEl.value, tooltipEl.value)
    if (cacheOptions.flip) updatePlacement(flipPlacement(bouding))
    updatePosition(position(bouding))
  }

  const handleUpdate = () => {
    nextTick(() => {
      update()
    })
    for (let i = 1; i < 100; i++) {
      setTimeout(() => {
        update()
      }, i)
    }
  }

  onMounted(() => {
    if (windowResize) {
      addEventListener('resize', handleUpdate)
    }

    if (windowScroll) {
      useEventListener('scroll', update)
    }
  })

  return {
    updateOptions,
    update: handleUpdate,
  }
}

export type Instance = ReturnType<typeof useTooltip>

function getBounding(reference: Element, tooltip: Element) {
  const referenceBouding = reference.getBoundingClientRect()
  const tooltipBouding = tooltip.getBoundingClientRect()

  return {
    referenceX: referenceBouding.x,
    referenceY: referenceBouding.y,
    referenceWidth: referenceBouding.width,
    referenceHeight: referenceBouding.height,
    tooltipWidht: tooltipBouding.width,
    tooltipHeight: tooltipBouding.height,
  }
}
