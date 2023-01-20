import { componentSizeMap } from '@vuesax-alpha/constants'

import type { ComponentSize } from '@vuesax-alpha/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
