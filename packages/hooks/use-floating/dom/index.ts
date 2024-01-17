import { computePosition as computePositionCore } from '@vuesax-alpha/hooks/use-floating/core'

import { platform } from './platform'
import type {
  ComputePositionConfig,
  FloatingElement,
  ReferenceElement,
} from './types'

export * from './platform'
export * from './utils'

export * from './middleware'
export * from './types'

export const computePosition = (
  reference: ReferenceElement,
  floating: FloatingElement,
  options?: Partial<ComputePositionConfig>
) => {
  const cache = new Map<ReferenceElement, Array<Element>>()
  const mergedOptions = { platform, ...options }
  const platformWithCache = { ...mergedOptions.platform, _c: cache }
  return computePositionCore(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache,
  })
}
