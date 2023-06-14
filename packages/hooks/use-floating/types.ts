import type { Ref } from 'vue'

export type Alignment = 'start' | 'end'
export type Side = 'top' | 'right' | 'bottom' | 'left'
export type AlignedPlacement = `${Side}-${Alignment}`
export type Placement = Side | AlignedPlacement
export type Axis = 'x' | 'y'
export type Strategy = 'fixed' | 'absolute'
export type Length = 'height' | 'width'

export type Coords = {
  [key in Axis]: number
}

export type Demensions = {
  [key in Length]: number
}

export type SideObject = { [key in Side]: number }

export type Rect = Coords & Demensions

export type ClientRectObject = Rect & SideObject

export type ElementRects = {
  reference: Rect
  floating: Rect
  arrow: Rect
}

export type Options = {
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
   * Flip popper when the viewport crosses the screen
   * @default true
   */
  flip?: boolean
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
   * distance from popper to element
   * @default 0
   */
  offset?: number

  visible: Ref<boolean>
}
