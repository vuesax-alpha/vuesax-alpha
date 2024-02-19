import installer from './defaults'
export * from '@vuesax-alpha/components'
export * from '@vuesax-alpha/constants'
export * from '@vuesax-alpha/directives'
export * from '@vuesax-alpha/hooks'
export * from '@vuesax-alpha/tokens'
export * from './make-installer'

export { VuesaxAlphaResolver } from '@vuesax-alpha/build-utils'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
