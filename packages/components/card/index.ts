import { withInstall, withNoopInstall } from '@vuesax-alpha/utils'
import Card from './src/card.vue'
import CardGroup from './src/card-group.vue'

export const VsCard = withInstall(Card, {
  CardGroup,
})
export default VsCard

export const VsCardGroup = withNoopInstall(CardGroup)

export * from './src/card-group'
export * from './src/card'
