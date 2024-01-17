import type {
  ClientRectObject,
  Dimensions,
  ElementRects,
  Rect,
  Strategy,
} from '@vuesax-alpha/hooks/use-floating/utils'
import type {
  ArrowOptions as CoreArrowOptions,
  ComputePositionConfig as CoreComputePositionConfig,
  DetectOverflowOptions as CoreDetectOverflowOptions,
  FlipOptions as CoreFlipOptions,
  Middleware as CoreMiddleware,
  MiddlewareState as CoreMiddlewareState,
  ShiftOptions as CoreShiftOptions,
  MiddlewareReturn,
  RootBoundary,
} from '@vuesax-alpha/hooks/use-floating/core'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & unknown

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
    element: Element
    boundary: Boundary
    rootBoundary: RootBoundary
    strategy: Strategy
  }) => Promisable<Rect>
  getDimensions: (element: Element) => Promisable<Dimensions>

  // Optional
  convertOffsetParentRelativeRectToViewportRelativeRect?: (args: {
    rect: Rect
    offsetParent: Element
    strategy: Strategy
  }) => Promisable<Rect>
  getOffsetParent?: (
    element: Element,
    polyfill?: (element: HTMLElement) => Element | null
  ) => Promisable<Element | Window>
  isElement?: (value: unknown) => Promisable<boolean>
  getDocumentElement?: (element: Element) => Promisable<HTMLElement>
  getClientRects?: (element: Element) => Promisable<Array<ClientRectObject>>
  isRTL?: (element: Element) => Promisable<boolean>
  getScale?: (element: HTMLElement) => Promisable<{ x: number; y: number }>
}

export interface NodeScroll {
  scrollLeft: number
  scrollTop: number
}

export type Boundary = 'clippingAncestors' | Element | Array<Element> | Rect

export type DetectOverflowOptions = Prettify<
  Omit<CoreDetectOverflowOptions, 'boundary'> & {
    boundary?: Boundary
  }
>

export type ComputePositionConfig = Prettify<
  Omit<CoreComputePositionConfig, 'middleware' | 'platform'> & {
    middleware?: Array<Middleware | null | undefined | false>

    platform?: Platform
  }
>

export interface VirtualElement {
  getBoundingClientRect(): ClientRectObject
  contextElement?: Element
}

export type ReferenceElement = Element | VirtualElement
export type FloatingElement = HTMLElement

export interface Elements {
  reference: ReferenceElement
  floating: FloatingElement
}

export type MiddlewareState = Prettify<
  Omit<CoreMiddlewareState, 'elements'> & {
    elements: Elements
  }
>

export type Middleware = Prettify<
  Omit<CoreMiddleware, 'fn'> & {
    fn(state: MiddlewareState): Promisable<MiddlewareReturn>
  }
>
export type ArrowOptions = Prettify<
  Omit<CoreArrowOptions, 'element'> & {
    element: Element
  }
>
export type ShiftOptions = Prettify<
  Omit<CoreShiftOptions, 'boundary'> & DetectOverflowOptions
>
export type FlipOptions = Prettify<
  Omit<CoreFlipOptions, 'boundary'> & DetectOverflowOptions
>
