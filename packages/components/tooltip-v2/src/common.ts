import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'

/**
 * TODO: make this under constants or tokens
 */
export const tooltipCommonProps = buildProps({
  nowrap: Boolean,
} as const)

export type TooltipCommonProps = ExtractPropTypes<typeof tooltipCommonProps>

export enum TooltipSides {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

export const tooltipSides = Object.values(TooltipSides)

export const tooltipOppositeSide = {
  [TooltipSides.top]: TooltipSides.bottom,
  [TooltipSides.bottom]: TooltipSides.top,
  [TooltipSides.left]: TooltipSides.right,
  [TooltipSides.right]: TooltipSides.left,
} as const

export const tooltipArrowBorders = {
  [TooltipSides.top]: [TooltipSides.left, TooltipSides.top],
  [TooltipSides.bottom]: [TooltipSides.bottom, TooltipSides.right],
  [TooltipSides.left]: [TooltipSides.bottom, TooltipSides.left],
  [TooltipSides.right]: [TooltipSides.top, TooltipSides.right],
} as const
