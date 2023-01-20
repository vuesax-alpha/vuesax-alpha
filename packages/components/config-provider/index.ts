import { withInstall } from '@vuesax-alpha/utils'

import ConfigProvider from './src/config-provider'

export const VsConfigProvider = withInstall(ConfigProvider)
export default VsConfigProvider

export * from './src/config-provider'
