import { MessageQuestion } from '@vuesax-alpha/icons-vue'
import { buildProps, iconPropType } from '@vuesax-alpha/utils'
import { popperContentProps } from '@vuesax-alpha/components/popper'
import { useColorProp } from '@vuesax-alpha/hooks'
import { buttonSizes, buttonTypes } from '@vuesax-alpha/components/button'
import { tooltipProps } from '@vuesax-alpha/components/tooltip'
import type { ExtractPropTypes } from 'vue'
import type Popconfirm from './popconfirm.vue'

export const popconfirmProps = buildProps({
  animation: tooltipProps.animation,
  /**
   * @description Title
   */
  title: String,
  /**
   * @description Confirm button text
   */
  confirmButtonText: String,
  /**
   * @description Cancel button text
   */
  cancelButtonText: String,
  /**
   * @description Confirm button color
   */
  confirmButtonColor: {
    ...useColorProp,
    default: 'primary',
  },
  confirmButtonType: {
    type: String,
    values: buttonTypes,
    default: 'flat',
  },
  confirmButtonSize: {
    type: String,
    values: buttonSizes,
    default: 'small',
  },
  /**
   * @description Cancel button color
   */
  cancelButtonColor: {
    ...useColorProp,
    default: 'text',
  },
  cancelButtonType: {
    type: String,
    values: buttonTypes,
    default: 'transparent',
  },
  cancelButtonSize: {
    type: String,
    values: buttonSizes,
    default: 'small',
  },
  /**
   * @description Icon Component
   */
  icon: {
    type: iconPropType,
    default: () => MessageQuestion,
  },
  /**
   * @description Icon color
   */
  iconColor: {
    type: String,
    default: '#f90',
  },
  /**
   * @description is hide Icon
   */
  hideIcon: {
    type: Boolean,
    default: false,
  },
  /**
   * @description delay of disappear, in millisecond
   */
  hideAfter: {
    type: Number,
    default: 200,
  },
  /**
   * @description whether popconfirm is teleported to the body
   */
  teleported: popperContentProps.teleported,
  /**
   * @description when popconfirm inactive and `persistent` is `false` , popconfirm will be destroyed
   */
  persistent: popperContentProps.persistent,
  /**
   * @description popconfirm width, min width 150px
   */
  width: {
    type: [String, Number],
    default: 200,
  },
} as const)

export const popconfirmEmits = {
  /**
   * @description triggers when click confirm button
   */
  confirm: (e: MouseEvent) => e instanceof MouseEvent,
  /**
   * @description triggers when click cancel button
   */
  cancel: (e: MouseEvent) => e instanceof MouseEvent,
}

export type PopconfirmEmits = typeof popconfirmEmits

export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>

export type PopconfirmInstance = InstanceType<typeof Popconfirm>
