import { defineComponent, renderSlot } from 'vue'
import { buildProps, definePropType } from '@vuesax-alpha/utils'
import { provideGlobalConfig } from '@vuesax-alpha/hooks'

import type { ExtractPropTypes } from 'vue'
import type { Language } from '@vuesax-alpha/locale'
import type { ColorProviderContext } from '@vuesax-alpha/constants'

export const configProviderProps = buildProps({
  /**
   * @description global Initial zIndex
   */
  zIndex: {
    type: Number,
  },
  /**
   * @description global component className prefix (cooperated with [$namespace](https://github.com/vuesax-alphax/vuesax-alpha/blob/main/packages/theme-chalk/src/mixins/config.scss#L1)) | ^[string]
   */
  namespace: {
    type: String,
    default: 'vs',
  },
  color: {
    type: definePropType<ColorProviderContext>(Object),
  },
  /**
   * @description Locale Object
   */
  locale: {
    type: definePropType<Language>(Object),
  },
} as const)

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>

const ConfigProvider = defineComponent({
  name: 'VsConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    const config = provideGlobalConfig(props)

    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})

export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>

export default ConfigProvider
