import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { useColorProp } from '@vuesax-alpha/hooks'
import { buildProps, definePropType, isBoolean } from '@vuesax-alpha/utils'
import type { EmitFn } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Dialog from './dialog.vue'

type DoneFn = (cancel?: boolean) => void
export type DialogBeforeCloseFn = (done: DoneFn) => void

export const dialogProps = buildProps({
  /**
   * @description visibility of Dialog
   */
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * @description Component color - Accept Vuesax's color, Hex, rgb
   */
  color: { ...useColorProp, default: 'primary' },

  overlayBlur: {
    default: false,
    type: Boolean,
  },
  /**
   * @description
   */
  beforeClose: {
    type: definePropType<DialogBeforeCloseFn>(Function),
  },
  /**
   * @description Add a loading animation to the dialog.
   */
  loading: {
    default: false,
    type: Boolean,
  },

  /**
   * @description Makes the dialog the size of the window.
   */
  fullScreen: {
    default: false,
    type: Boolean,
  },

  /**
   * @description Remove the close button from the dialog.
   */
  notClose: {
    default: false,
    type: Boolean,
  },

  /**
   * @description It makes the dialog cannot be closed by clicking outside or by pressing the esc key.
   */
  preventClose: {
    default: false,
    type: Boolean,
  },

  /**
   * @description Eliminates the padding of the base elements of the dialog.
   */
  notPadding: {
    default: false,
    type: Boolean,
  },

  /**
   * @description When the dialog is opened, the page scroll is deleted.
   */
  lockScroll: {
    default: false,
    type: Boolean,
  },

  /**
   * @enum `square` | `rounded`
   * @default 'rounded'
   */
  shape: {
    type: String,
    values: ['square', 'rounded'] as const,
    default: 'rounded',
  },

  /**
   * @description It makes the dialog have an automatic width to its content.
   */
  autoWidth: {
    default: false,
    type: Boolean,
  },

  /**
   * @description Makes the content a maximum high and gives the possibility to overflow the content add scroll.
   */
  scroll: {
    default: false,
    type: Boolean,
  },

  /**
   * @description By default the header centers the elements, with this property the centering is eliminated.
   */
  notCenter: {
    default: false,
    type: Boolean,
  },

  /**
   * @description Determine the width of the dialog.
   */
  width: {
    default: null,
    type: String,
  },

  /**
   * @deprecated
   */
  overflowHidden: Boolean,
  /**
   * @deprecated
   */
  blur: Boolean,
} as const)

export const dialogEmits = {
  /**
   * @description triggers when the Dialog opens
   */
  open: () => true,
  /**
   * @description triggers when the Dialog opening animation ends
   */
  opened: () => true,
  /**
   * @description triggers when the Dialog closes
   */
  close: () => true,
  /**
   * @description triggers when the Dialog closing animation ends
   */
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
}

export type DialogEmits = typeof dialogEmits
export type DialogEmitFn = EmitFn<DialogEmits>

export type DialogProps = ExtractPropTypes<typeof dialogProps>
export type DialogInstance = InstanceType<typeof Dialog>
