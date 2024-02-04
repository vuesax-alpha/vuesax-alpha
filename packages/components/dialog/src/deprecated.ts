import { computed } from 'vue'
import { useDeprecated } from '@vuesax-alpha/hooks'

import type { DialogProps } from './dialog'

export const dialogDeprecated = (props: DialogProps) => {
  useDeprecated(
    {
      from: 'overflowHidden',
      scope: 'vs-dialog',
      version: 'v0.1.0',
      type: 'Prop',
      ref: 'https://vuesax-alpha.vercel.app/components/dialog#lockScroll',
      replacement: 'lockScroll',
    },
    computed(() => !!props.overflowHidden)
  )
}
