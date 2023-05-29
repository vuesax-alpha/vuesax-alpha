import { useColorProp } from '@vuesax-alpha/hooks'
import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Card from './card.vue'

const cardType = [1, '1', 2, '2', 3, '3', 4, '4', 5, '5'] as const

export const cardProps = buildProps({
  /**
   * @description Component color - Accept Vuesax's color, Hex, rgb
   */
  color: useColorProp,
  /**
   * @description Card type
   * @enum `1` | `2` | `3` | `4` | `5`
   * @default 1
   */
  type: {
    type: [String, Number],
    values: cardType,
    validator: (val: unknown): val is typeof cardType[number] =>
      cardType.includes(val as any),
    default: 1,
  },
} as const)

export type CardProps = ExtractPropTypes<typeof cardProps>
export type CardInstance = InstanceType<typeof Card>
