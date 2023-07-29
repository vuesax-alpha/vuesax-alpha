import { withInstall, withNoopInstall } from '@vuesax-alpha/utils'
import Table from './src/table.vue'
import Td from './src/td.vue'
import Th from './src/th.vue'
import Tr from './src/tr.vue'

export const VsTable = withInstall(Table, {
  Td,
  Th,
  Tr,
})
export default VsTable

export const VsTd = withNoopInstall(Td)
export const VsTh = withNoopInstall(Th)
export const VsTr = withNoopInstall(Tr)

export * from './src/table'
export * from './src/utils'
