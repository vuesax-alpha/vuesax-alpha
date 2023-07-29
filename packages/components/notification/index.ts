import { withInstallFunction } from '@vuesax-alpha/utils'
import Notification from './src/notify'

export const VsNotification = withInstallFunction(Notification, '$notification')
export default VsNotification

export * from './src/notification'
