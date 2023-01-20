import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue'
import { isClient, useTimeoutFn } from '@vueuse/core'
import {
  useBaseComponent,
  useLockscreen,
  useNamespace,
  useZIndex,
} from '@vuesax-alpha/hooks'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { getVsColor } from '@vuesax-alpha/utils'
import type { SetupContext } from 'vue'
import type { DialogEmits, DialogProps } from './../dialog'

export const useDialog = (props: DialogProps) => {
  const rebound = ref(false)
  const visible = ref(false)
  const closed = ref(false)
  const ns = useNamespace('dialog')
  const { nextZIndex } = useZIndex()

  const zIndex = ref(nextZIndex())

  const instance = getCurrentInstance()!
  const emit = instance.emit as SetupContext<DialogEmits>['emit']

  const afterEnter = () => {
    emit('opened')
  }

  const beforeLeave = () => {
    emit('close')
  }

  const afterLeave = () => {
    emit('closed')
    emit(UPDATE_MODEL_EVENT, false)
  }

  const doOpen = () => {
    if (!isClient) return
    visible.value = true
  }

  const doClose = () => {
    visible.value = false
  }

  const open = () => {
    doOpen()
  }

  const close = () => {
    const hide = (shouldCancel?: boolean) => {
      if (shouldCancel) return
      closed.value = true
      visible.value = false
    }

    if (props.beforeClose) {
      props.beforeClose(hide)
    } else {
      doClose()
    }
    // doClose()
  }

  const handleClose = () => {
    if (props.preventClose) {
      rebound.value = true
      useTimeoutFn(() => (rebound.value = false), 300)

      return
    }
    close()
  }

  if (props.lockScroll) {
    useLockscreen(visible)
  }

  watch(
    () => props.modelValue,
    (val: boolean) => {
      if (val) {
        closed.value = false
        rebound.value = true

        open()
        zIndex.value = nextZIndex()

        if (props.lockScroll) {
          document.body.style.overflow = 'hidden'
        }
        nextTick(() => {
          emit('open')
        })
      } else {
        rebound.value = false
        if (props.lockScroll) {
          document.body.style.overflow = ''
        }
        if (visible.value) {
          close()
        }
      }
    }
  )

  const dialogKls = computed(() => [
    ns.b('original'),
    useBaseComponent(props.color),
    {
      [ns.m('fullScreen')]: props.fullScreen,
      [ns.m('rebound')]: rebound.value,
      [ns.m('notPadding')]: props.notPadding,
      [ns.m('square')]: props.shape === 'square',
      [ns.m('autoWidth')]: props.autoWidth,
      [ns.m('scroll')]: props.scroll,
      [ns.m('loading')]: props.loading,
      [ns.m('notCenter')]: props.notCenter,
    },
  ])

  const dialogStyles = computed(() => ({
    width: props.width,
    ...ns.cssVar({
      color: getVsColor(props.color),
    }),
  }))

  onMounted(() => {
    if (props.modelValue) {
      visible.value = true
      open()
    }
  })

  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    close,
    doClose,
    zIndex,
    closed,
    visible,
    dialogKls,
    dialogStyles,
  }
}
