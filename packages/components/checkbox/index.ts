import { withInstall, withNoopInstall } from '@vuesax-alpha/utils'
import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const VsCheckbox = withInstall(Checkbox, {
  CheckboxGroup,
})
export default VsCheckbox

export const VsCheckboxGroup = withNoopInstall(CheckboxGroup)

export * from './src/checkbox-group'
export * from './src/checkbox'
