import type {
  FloatingElement,
  ReferenceElement,
} from '@vuesax-alpha/hooks/use-floating/dom'
import type { ComponentPublicInstance, Ref } from 'vue-demi'

import type {
  Padding,
  Placement,
  Strategy,
} from '@vuesax-alpha/hooks/use-floating/utils'

import type {
  Middleware,
  MiddlewareData,
} from '@vuesax-alpha/hooks/use-floating/core'

export type {
  AlignedPlacement,
  Alignment,
  Axis,
  ClientRectObject,
  Coords,
  Dimensions,
  ElementRects,
  Length,
  Padding,
  Placement,
  Rect,
  Side,
  SideObject,
  Strategy,
} from '@vuesax-alpha/hooks/use-floating/utils'

export type {
  ComputePositionReturn,
  MiddlewareData,
  MiddlewareReturn,
  OffsetOptions,
  RootBoundary,
} from '@vuesax-alpha/hooks/use-floating/core'

export type {
  Boundary,
  ComputePositionConfig,
  DetectOverflowOptions,
  Elements,
  FlipOptions,
  FloatingElement,
  Middleware,
  MiddlewareState,
  NodeScroll,
  Platform,
  ReferenceElement,
  ShiftOptions,
  VirtualElement,
} from '@vuesax-alpha/hooks/use-floating/dom'

export type MaybeReadonlyRef<T> = T | Readonly<Ref<T>>

export type MaybeElement<T> = T | ComponentPublicInstance | null | undefined

export type UseFloatingOptions<T extends ReferenceElement = ReferenceElement> =
  {
    /**
     * Represents the open/close state of the floating element.
     * @default true
     */
    open?: MaybeReadonlyRef<boolean | undefined>
    /**
     * Make the popper content same width with reference element
     */
    fit?: MaybeReadonlyRef<boolean | undefined>
    /**
     * Where to place the floating element relative to its reference element.
     * @default 'bottom'
     */
    placement?: MaybeReadonlyRef<Placement | undefined>
    /**
     * The type of CSS position property to use.
     * @default 'absolute'
     */
    strategy?: MaybeReadonlyRef<Strategy | undefined>
    /**
     * These are plain objects that modify the positioning coordinates in some fashion, or provide useful data for the consumer to use.
     * @default undefined
     */
    middleware?: MaybeReadonlyRef<Middleware[] | undefined>
    /**
     * Whether to use `transform` instead of `top` and `left` styles to
     * position the floating element (`floatingStyles`).
     * @default true
     */
    transform?: MaybeReadonlyRef<boolean | undefined>
    /**
     * Callback to handle mounting/unmounting of the elements.
     * @default undefined
     */
    whileElementsMounted?: (
      reference: T,
      floating: FloatingElement,
      update: () => void
    ) => () => void
  }

export type UseFloatingReturn = {
  /**
   * The x-coord of the floating element.
   */
  x: Readonly<Ref<number>>
  /**
   * The y-coord of the floating element.
   */
  y: Readonly<Ref<number>>
  /**
   * The stateful placement, which can be different from the initial `placement` passed as options.
   */
  placement: Readonly<Ref<Placement>>
  /**
   * The type of CSS position property to use.
   */
  strategy: Readonly<Ref<Strategy>>
  /**
   * Additional data from middleware.
   */
  middlewareData: Readonly<Ref<MiddlewareData>>
  /**
   * The boolean that let you know if the floating element has been positioned.
   */
  isPositioned: Readonly<Ref<boolean>>
  /**
   * CSS styles to apply to the floating element to position it.
   */
  floatingStyles: Readonly<
    Ref<{
      position: Strategy
      top: string
      left: string
      transform?: string
      willChange?: string
    }>
  >
  /**
   * The function to update floating position manually.
   */
  update: () => void
}

export type ArrowOptions = {
  /**
   * The arrow element or template ref to be positioned.
   * @required
   */
  element: MaybeReadonlyRef<MaybeElement<Element>>
  /**
   * The padding between the arrow element and the floating element edges. Useful when the floating element has rounded corners.
   * @default 0
   */
  padding?: Padding
}
