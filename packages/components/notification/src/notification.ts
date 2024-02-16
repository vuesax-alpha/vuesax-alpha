import {
  buildProps,
  definePropType,
  iconPropType,
  isNumber,
  isStringNumber,
} from '@vuesax-alpha/utils'

import { useColorProp } from '@vuesax-alpha/hooks'
import type { ExtractPropTypes, VNode } from 'vue'
import type Notification from './notification.vue'

export const notificationPosition = [
  'top-right',
  'top-center',
  'top-left',
  'bottom-right',
  'bottom-center',
  'bottom-left',
] as const

export type NotificationPosition = typeof notificationPosition[number]

export const notificationProps = buildProps({
  border: useColorProp,
  color: useColorProp,
  /**
   * @description custom class name for Notification
   */
  customClass: {
    type: String,
    default: '',
  },
  /**
   * @description duration before close. It will not automatically close if set 0
   */
  duration: {
    type: Number,
    default: 4500,
  },
  flat: { type: Boolean },
  /**
   * @description custom icon component.
   */
  icon: {
    type: iconPropType,
  },
  iconSize: {
    type: String,
    default: '1.2rem',
  },
  /**
   * @description notification dom id
   */
  id: {
    type: String,
    default: '',
  },
  dangerousHtmlString: {
    type: Boolean,
    default: false,
  },
  /**
   * @description description text
   */
  content: {
    type: definePropType<string | VNode>([String, Object]),
    default: '',
  },
  loading: Boolean,
  notPadding: Boolean,
  /**
   * @description offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset
   */
  offset: {
    type: Number,
    default: 0,
  },
  /**
   * @description callback function when notification clicked
   */
  onClick: {
    type: definePropType<() => void>(Function),
    default: () => undefined,
  },
  /**
   * @description callback function called before the notification close, return false to cancel the notification, otherwise close the notification
   */
  onClickClose: {
    type: definePropType<() => boolean>(Function),
    default: () => true,
  },
  /**
   * @description callback function when closed
   */
  onClose: {
    type: definePropType<() => void>(Function),
    default: () => undefined,
  },
  /**
   * @description custom position
   */
  position: {
    type: definePropType<NotificationPosition>(String),
    values: notificationPosition,
    default: 'bottom-right',
  },
  progressAuto: { type: Boolean },
  shape: {
    type: String,
    values: ['square', ''] as const,
    default: '',
  },
  /**
   * @description whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  sticky: { type: Boolean },
  /**
   * @description title
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description initial zIndex
   */
  zIndex: { type: Number },
  width: {
    type: definePropType<string | number>([String, Number]),
    validator: (prop) =>
      ['auto', 'full'].includes(prop) || isNumber(prop) || isStringNumber(prop),
    default: null,
  },
} as const)

export type NotificationProps = ExtractPropTypes<typeof notificationProps>

export const notificationEmits = {
  destroy: () => true,
}

export type NotificationEmits = typeof notificationEmits

export type NotificationInstance = InstanceType<typeof Notification>

export type NotificationOptions = Omit<NotificationProps, 'id'>
export type NotificationOptionsTyped = Omit<NotificationOptions, 'color'>

export interface NotificationHandle {
  close: () => void
}

export type NotificationParamsTyped =
  | Partial<NotificationOptionsTyped>
  | string
  | VNode

export type NotificationParams = Partial<NotificationOptions> | string

export type NotifyFn = (options?: NotificationParams) => NotificationHandle
export type NotifyTypedFn = (
  options?: NotificationParamsTyped
) => NotificationHandle

export interface Notify extends NotifyFn {
  primary: NotifyTypedFn
  success: NotifyTypedFn
  warn: NotifyTypedFn
  danger: NotifyTypedFn
  dark: NotifyTypedFn
}
