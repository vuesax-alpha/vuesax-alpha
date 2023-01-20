import { getCurrentInstance, nextTick, ref } from 'vue'
import type { ShallowRef } from 'vue'

export const useInputEvent = ({
  inputRef,
}: {
  inputRef: ShallowRef<HTMLInputElement | undefined>
}) => {
  const { emit } = getCurrentInstance()!

  const focused = ref(false)

  const handleInput = (event: Event) => {
    emit('input', event)
  }

  const blur = () => inputRef.value?.blur()
  const handleBlur = (event: FocusEvent) => {
    focused.value = false
    emit('blur', event)
  }

  const select = () => inputRef.value?.select()

  const handleKeydown = (evt: KeyboardEvent) => {
    emit('keydown', evt)
  }

  const focus = async () => {
    await nextTick()
    inputRef.value?.focus()
  }
  const handleFocus = (event: FocusEvent) => {
    focused.value = true
    emit('focus', event)
  }

  const handleChange = (event: Event) => {
    emit('change', (event.target as HTMLInputElement).value)
  }

  return {
    handleInput,
    handleChange,

    blur,
    handleBlur,

    focused,
    focus,
    handleFocus,

    handleKeydown,
    select,
  }
}
