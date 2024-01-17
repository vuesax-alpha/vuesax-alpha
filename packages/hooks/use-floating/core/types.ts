import type {
  ClientRectObject,
  Coords,
  Dimensions,
  ElementRects,
  Placement,
  Rect,
  SideObject,
  Strategy,
} from '@vuesax-alpha/hooks/use-floating/utils'

export type UseFloatingOptions = {
  /**
   * Tooltip placement - `top` | `bottom` | `left` | `right`
   * @default bottom
   */
  placement?: Placement
  /**
   * Tooltip strategy
   * @default absolute
   */
  strategy?: Strategy
  /**
   * Fit popper content with reference element
   * @default true
   */
  fit?: boolean

  /**
   * Update popper content with reference element when window is resized
   * @default true
   */
  windowResize?: boolean
  /**
   * Update popper content with reference element when window is scrolled
   * @default true
   */
  windowScroll?: boolean

  /**
   * define visible
   *
   * @default false
   */
  visible: boolean

  middlewares: Middleware[]
}

type Promisable<T> = T | Promise<T>

export type Derivable<T> = (state: MiddlewareState) => T

export interface Platform {
  // Required
  getElementRects: (args: {
    reference: ReferenceElement
    floating: FloatingElement
    strategy: Strategy
  }) => Promisable<ElementRects>
  getClippingRect: (args: {
    element: any
    boundary: Boundary
    rootBoundary: RootBoundary
    strategy: Strategy
  }) => Promisable<Rect>
  getDimensions: (element: any) => Promisable<Dimensions>

  // Optional
  convertOffsetParentRelativeRectToViewportRelativeRect?: (args: {
    rect: Rect
    offsetParent: any
    strategy: Strategy
  }) => Promisable<Rect>
  getOffsetParent?: (element: any) => Promisable<any>
  isElement?: (value: any) => Promisable<boolean>
  getDocumentElement?: (element: any) => Promisable<any>
  getClientRects?: (element: any) => Promisable<Array<ClientRectObject>>
  isRTL?: (element: any) => Promisable<boolean>
  getScale?: (element: any) => Promisable<{ x: number; y: number }>
}

export interface MiddlewareData {
  [key: string]: any
  arrow?: Partial<Coords> & {
    centerOffset: number
    alignmentOffset?: number
  }
  autoPlacement?: {
    index?: number
    overflows: Array<{
      placement: Placement
      overflows: Array<number>
    }>
  }
  flip?: {
    index?: number
    overflows: Array<{
      placement: Placement
      overflows: Array<number>
    }>
  }
  hide?: {
    referenceHidden?: boolean
    escaped?: boolean
    referenceHiddenOffsets?: SideObject
    escapedOffsets?: SideObject
  }
  offset?: Coords & { placement: Placement }
  shift?: Coords
}

export interface ComputePositionConfig {
  /**
   * Object to interface with the current platform.
   */
  platform: Platform
  /**
   * Where to place the floating element relative to the reference element.
   */
  placement?: Placement
  /**
   * The strategy to use when positioning the floating element.
   */
  strategy?: Strategy
  /**
   * Array of middleware objects to modify the positioning or provide data for
   * rendering.
   */
  middleware?: Array<Middleware | null | undefined | false>
}

export interface ComputePositionReturn extends Coords {
  /**
   * The final chosen placement of the floating element.
   */
  placement: Placement
  /**
   * The strategy used to position the floating element.
   */
  strategy: Strategy
  /**
   * Object containing data returned from all middleware, keyed by their name.
   */
  middlewareData: MiddlewareData
}

export type ComputePosition = (
  reference: unknown,
  floating: unknown,
  config: ComputePositionConfig
) => Promise<ComputePositionReturn>

export interface MiddlewareReturn extends Partial<Coords> {
  data?: {
    [key: string]: any
  }
  reset?:
    | boolean
    | {
        placement?: Placement
        rects?: boolean | ElementRects
      }
}

export type Middleware = {
  name: string
  options?: any
  fn: (state: MiddlewareState) => Promisable<MiddlewareReturn>
}

export type ReferenceElement = any
export type FloatingElement = any

export interface Elements {
  reference: ReferenceElement
  floating: FloatingElement
}

export interface MiddlewareState extends Coords {
  initialPlacement: Placement
  placement: Placement
  strategy: Strategy
  middlewareData: MiddlewareData
  elements: Elements
  rects: ElementRects
  platform: Platform
}

export type Boundary = any
export type RootBoundary = 'viewport' | 'document' | Rect
export type ElementContext = 'reference' | 'floating'
