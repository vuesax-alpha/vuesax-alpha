import { buildProps, isBoolean, isString } from '@vuesax-alpha/utils'

import { useColorProp } from '@vuesax-alpha/hooks'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import type { ExtractPropTypes } from 'vue'
import type Sidebar from './sidebar.vue'

export const sidebarProps = buildProps({
  color: useColorProp,
  background: useColorProp,
  modelValue: {
    type: String,
    default: null,
  },
  reduce: {
    type: Boolean,
    default: false,
  },
  hoverExpand: {
    type: Boolean,
    default: false,
  },
  open: {
    type: Boolean,
    default: false,
  },
  notLineActive: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String,
    values: ['square'] as const,
    default: '',
  },
  textWhite: {
    type: Boolean,
    default: false,
  },
  notShadow: {
    type: Boolean,
    default: false,
  },
  absolute: Boolean,
  right: {
    type: Boolean,
    default: false,
  },
} as const)

export type SidebarProps = ExtractPropTypes<typeof sidebarProps>

export const sidebarEmits = {
  [UPDATE_MODEL_EVENT]: (val: string) => isString(val),
  'update:open': (val: boolean) => isBoolean(val),
}

export type SidebarInstance = InstanceType<typeof Sidebar>
