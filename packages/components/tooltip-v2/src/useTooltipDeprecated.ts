import { computed } from 'vue'
import { useDeprecated } from '@vuesax-alpha/hooks'
import { buildProps } from '@vuesax-alpha/utils'
import type { TooltipProps } from './tooltip'

export const tooltipDeprecatedProps = buildProps({
  /** @deprecated use visible instead */
  modelValue: Boolean,

  /** @deprecated use placement instead*/
  bottom: Boolean,
  /** @deprecated use placement instead*/
  left: Boolean,
  /** @deprecated use placement instead*/
  right: Boolean,
  /** @deprecated use placement instead*/
  top: Boolean,

  /** @deprecated use trigger instead */
  notHover: Boolean,

  /** @deprecated use type instead */
  shadow: Boolean,
  /** @deprecated use type instead */
  border: Boolean,
  /** @deprecated use type instead */
  borderThick: Boolean,

  /** @deprecated use enterable instead. */
  interactivity: Boolean,
  /** @deprecated use shape instead */
  square: Boolean,
  /** @deprecated use shape instead */
  circle: Boolean,
})

export const useTooltipDeprecated = (props: TooltipProps) => {
  useDeprecated(
    {
      scope: 'vs-tooltip',
      type: 'Prop',
      from: 'v-model / modelValue',
      version: '0.0.2',
      replacement: 'visible',
      ref: 'https://vuesax.space/components/tooltip#props',
    },
    computed(() => !!props.modelValue)
  )

  useDeprecated(
    {
      scope: 'vs-tooltip',
      type: 'Prop',
      from: '[top, right, bottom, left]',
      version: '0.0.2',
      replacement: 'placement',
      ref: 'https://vuesax.space/components/tooltip#props',
    },
    computed(() => props.top || props.right || props.bottom || props.left)
  )

  useDeprecated(
    {
      scope: 'vs-tooltip',
      type: 'Prop',
      from: 'notHover',
      version: '0.0.2',
      replacement: 'trigger',
      ref: 'https://vuesax.space/components/tooltip#props',
    },
    computed(() => props.notHover)
  )

  useDeprecated(
    {
      scope: 'vs-tooltip',
      type: 'Prop',
      from: '[border, borderThick]',
      version: '0.0.2',
      replacement: 'type',
      ref: 'https://vuesax.space/components/tooltip#props',
    },
    computed(() => props.border || props.borderThick)
  )

  useDeprecated(
    {
      scope: 'vs-tooltip',
      type: 'Prop',
      from: 'shadow',
      version: '0.0.2',
      replacement: 'type',
      ref: 'https://vuesax.space/components/tooltip#props',
    },
    computed(() => props.shadow)
  )

  useDeprecated(
    {
      scope: 'vs-tooltip',
      type: 'Prop',
      from: 'square | circle',
      version: '0.0.2',
      replacement: 'shape',
      ref: 'https://vuesax.space/components/tooltip#props',
    },
    computed(() => props.square || props.circle)
  )
}
