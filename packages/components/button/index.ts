import { withInstall, withNoopInstall } from '@vuesax-alpha/utils'
import ButtonGroup from './src/button-group.vue'
import Button from './src/button.vue'

export const VsButton = withInstall(Button, {
  ButtonGroup,
})
export default VsButton

export const VsButtonGroup = withNoopInstall(ButtonGroup)

export * from './src/button-group'
export * from './src/button'
