import { computed } from 'vue'
import { useDeprecated } from '@vuesax-alpha/hooks'
import type { TooltipProps } from './tooltip'

export const useTooltipDeprecated = (props: TooltipProps) => {
  useDeprecated(
    {
      scope: 'vs-tooltip',
      type: 'Prop',
      from: '[top, right, bottom, left]',
      version: '0.0.2',
      replacement: 'placement',
      ref: 'https://vuesax-alpha.vercel.app/components/tooltip#props',
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
      ref: 'https://vuesax-alpha.vercel.app/components/tooltip#props',
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
      ref: 'https://vuesax-alpha.vercel.app/components/tooltip#props',
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
      ref: 'https://vuesax-alpha.vercel.app/components/tooltip#props',
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
      ref: 'https://vuesax-alpha.vercel.app/components/tooltip#props',
    },
    computed(() => props.square || props.circle)
  )
}
