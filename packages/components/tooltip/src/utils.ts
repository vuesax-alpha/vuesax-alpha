import { unref } from 'vue'
import { isArray } from '@vuesax-alpha/utils'
import type { PopperTriggerType } from '@vuesax-alpha/components/popper'
import type { Arrayable } from '@vuesax-alpha/utils'
import type { Ref } from 'vue'

export const isTriggerType = (
  trigger: Arrayable<PopperTriggerType>,
  type: PopperTriggerType
) => {
  if (isArray(trigger)) {
    return trigger.includes(type)
  }
  return trigger === type
}

export const whenTrigger = (
  trigger: Ref<Arrayable<PopperTriggerType>>,
  type: PopperTriggerType,
  handler: (e: Event) => void
) => {
  return (e: Event) => {
    isTriggerType(unref(trigger), type) && handler(e)
  }
}
