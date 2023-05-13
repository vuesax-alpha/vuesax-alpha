import { computed } from 'vue'
import { useDeprecated } from '@vuesax-alpha/hooks'
import type { AlertProps } from './alert'

// TODO: remove in v0.3.0
export const useAlertDeprecated = (props: AlertProps) => {
  useDeprecated(
    {
      scope: 'vs-alert',
      type: 'Prop',
      from: 'border',
      version: '0.2.0',
      replacement: 'type',
      ref: 'https://vuesax.space/components/alert#props',
    },
    computed(() => !!props.border)
  )

  useDeprecated(
    {
      scope: 'vs-alert',
      type: 'Prop',
      from: 'shadow',
      version: '0.2.0',
      replacement: 'type',
      ref: 'https://vuesax.space/components/alert#props',
    },
    computed(() => !!props.shadow)
  )
  useDeprecated(
    {
      scope: 'vs-alert',
      type: 'Prop',
      from: 'relief',
      version: '0.2.0',
      replacement: 'type',
      ref: 'https://vuesax.space/components/alert#props',
    },
    computed(() => !!props.relief)
  )
  useDeprecated(
    {
      scope: 'vs-alert',
      type: 'Prop',
      from: 'flat',
      version: '0.2.0',
      replacement: 'type',
      ref: 'https://vuesax.space/components/alert#props',
    },
    computed(() => !!props.flat)
  )
  useDeprecated(
    {
      scope: 'vs-alert',
      type: 'Prop',
      from: 'gradient',
      version: '0.2.0',
      replacement: 'type',
      ref: 'https://vuesax.space/components/alert#props',
    },
    computed(() => !!props.gradient)
  )
  useDeprecated(
    {
      scope: 'vs-alert',
      type: 'Prop',
      from: 'solid',
      version: '0.2.0',
      replacement: 'type',
      ref: 'https://vuesax.space/components/alert#props',
    },
    computed(() => !!props.solid)
  )
}
