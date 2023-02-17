import { withInstall, withNoopInstall } from '@vuesax-alpha/utils'
import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

export const VsSelect = withInstall(Select, {
  Option,
  OptionGroup,
})
export default VsSelect

export const VsOption = withNoopInstall(Option)
export const VsOptionGroup = withNoopInstall(OptionGroup)

export * from './src/option-group'
export * from './src/option'
export * from './src/select'
