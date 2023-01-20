import { getCurrentInstance, nextTick } from 'vue'

import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel, CheckboxStatus } from '../composables'

export const useCheckboxEvent = (
  props: CheckboxProps,
  {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
  }: Pick<CheckboxModel, 'model' | 'isLimitExceeded'> &
    Pick<CheckboxStatus, 'isDisabled' | 'hasOwnLabel'>
) => {
  const { emit } = getCurrentInstance()!

  function getCheckboxValue(value: string | number | boolean) {
    return value === props.value || value === true
  }

  function emitChangeEvent(
    checked: string | number | boolean,
    e: InputEvent | MouseEvent
  ) {
    emit('change', getCheckboxValue(checked), e)
  }

  function handleChange(e: Event) {
    if (isLimitExceeded.value) return

    const target = e.target as HTMLInputElement
    emit('change', getCheckboxValue(target.checked), e)
  }

  async function onClickRoot(e: MouseEvent) {
    if (isLimitExceeded.value) return

    if (!hasOwnLabel.value && !isDisabled.value) {
      const eventTargets: EventTarget[] = e.composedPath()
      const hasLabel = eventTargets.some(
        (item) => (item as HTMLElement).tagName === 'LABEL'
      )
      if (!hasLabel) {
        model.value = getCheckboxValue(model.value === false)
        await nextTick()
        emitChangeEvent(model.value, e)
      }
    }
  }

  return {
    handleChange,
    onClickRoot,
  }
}
