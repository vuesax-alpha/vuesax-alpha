<template>
  <div
    ref="popperContentRef"
    :style="contentStyle"
    :class="contentClass"
    tabindex="-1"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <vs-focus-trap
      :trapped="trapped"
      :trap-on-focus-in="true"
      :focus-trap-el="popperContentRef"
      :focus-start-el="focusStartRef"
      @focus-after-trapped="onFocusAfterTrapped"
      @focus-after-released="onFocusAfterReleased"
      @focusin="onFocusInTrap"
      @focusout-prevented="onFocusoutPrevented"
      @release-requested="onReleaseRequested"
    >
      <slot />
    </vs-focus-trap>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  unref,
  watch,
} from 'vue'
import { isNil } from 'lodash-unified'
import { createPopper } from '@popperjs/core'
import { VsFocusTrap } from '@vuesax-alpha/components/focus-trap'
import { useNamespace, useZIndex } from '@vuesax-alpha/hooks'
import {
  popperContentInjectionKey,
  popperInjectionKey,
} from '@vuesax-alpha/tokens'
import { isElement } from '@vuesax-alpha/utils'
import { popperContentEmits, popperContentProps } from './content'
import { buildPopperOptions, unwrapMeasurableEl } from './utils'
import type { Instance } from '@popperjs/core'
import type { WatchStopHandle } from 'vue'
import type { CreatePopperInstanceParams } from './content'

defineOptions({
  name: 'VsPopperContent',
})

const emit = defineEmits(popperContentEmits)
const props = defineProps(popperContentProps)

const { popperInstance, contentRef, triggerRef, role } = inject(
  popperInjectionKey,
  undefined
)!

const ns = useNamespace('popper')

const { nextZIndex } = useZIndex()
const popperContentRef = ref<HTMLElement>()
const focusStartRef = ref<'container' | 'first' | HTMLElement>('first')
const arrowRef = ref<HTMLElement>()
const arrowOffset = ref<number>()

provide(popperContentInjectionKey, {
  arrowRef,
  arrowOffset,
})

const contentZIndex = ref<number>(props.zIndex || nextZIndex())
const trapped = ref<boolean>(false)

let triggerTargetAriaStopWatch: WatchStopHandle | undefined = undefined

const computedReference = computed(
  () => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef)
)

const contentStyle = computed(
  () => [{ zIndex: unref(contentZIndex) }, props.popperStyle] as any
)

const contentClass = computed(() => [
  ns.b(),
  ns.is('pure', props.pure),
  ns.is(props.effect),
  props.popperClass,
])

const ariaModal = computed<string | undefined>(() => {
  return role && role.value === 'dialog' ? 'false' : undefined
})

const createPopperInstance = ({
  referenceEl,
  popperContentEl,
  arrowEl,
}: CreatePopperInstanceParams) => {
  const options = buildPopperOptions(props, {
    arrowEl,
    arrowOffset: unref(arrowOffset),
  })
  return createPopper(referenceEl, popperContentEl, options)
}

const updatePopper = (shouldUpdateZIndex = true) => {
  unref(popperInstance)?.update()
  shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex())
}

const togglePopperAlive = () => {
  const monitorable = { name: 'eventListeners', enabled: props.visible }
  unref(popperInstance)?.setOptions?.((options) => ({
    ...options,
    modifiers: [...(options.modifiers || []), monitorable],
  }))
  updatePopper(false)
  if (props.visible && props.focusOnShow) {
    trapped.value = true
  } else if (props.visible === false) {
    trapped.value = false
  }
}

const onFocusAfterTrapped = () => {
  emit('focus')
}

const onFocusAfterReleased = (event: CustomEvent) => {
  if (event.detail?.focusReason !== 'pointer') {
    focusStartRef.value = 'first'
    emit('blur')
  }
}

const onFocusInTrap = (event: Event | FocusEvent) => {
  if (props.visible && !trapped.value) {
    if (event.target) {
      focusStartRef.value = event.target as typeof focusStartRef.value
    }
    trapped.value = true
  }
}

const onFocusoutPrevented = (event: CustomEvent) => {
  if (!props.trapping) {
    if (event.detail.focusReason === 'pointer') {
      event.preventDefault()
    }
    trapped.value = false
  }
}

const onReleaseRequested = () => {
  trapped.value = false
  emit('close')
}

onMounted(() => {
  let updateHandle: WatchStopHandle

  watch(
    computedReference,
    (referenceEl) => {
      updateHandle?.()
      popperInstance.value?.destroy?.()
      if (referenceEl) {
        const popperContentEl = unref(popperContentRef)!
        contentRef.value = popperContentEl
        popperInstance.value = createPopperInstance({
          referenceEl,
          popperContentEl,
          arrowEl: unref(arrowRef),
        })
        updateHandle = watch(
          () => referenceEl.getBoundingClientRect(),
          () => updatePopper(),
          {
            immediate: true,
          }
        )
      } else {
        popperInstance.value = undefined
      }
    },
    {
      immediate: true,
    }
  )

  watch(
    () => props.triggerTargetEl,
    (triggerTargetEl, prevTriggerTargetEl) => {
      triggerTargetAriaStopWatch?.()
      triggerTargetAriaStopWatch = undefined
      const el = unref(triggerTargetEl || popperContentRef.value)
      const prevEl = unref(prevTriggerTargetEl || popperContentRef.value)
      if (isElement(el)) {
        triggerTargetAriaStopWatch = watch(
          [role, () => props.ariaLabel, ariaModal, () => props.id],
          (watches) => {
            ;['role', 'aria-label', 'aria-modal', 'id'].forEach((key, idx) => {
              isNil(watches[idx])
                ? el.removeAttribute(key)
                : el.setAttribute(key, watches[idx]!)
            })
          },
          { immediate: true }
        )
      }
      if (prevEl !== el && isElement(prevEl)) {
        ;['role', 'aria-label', 'aria-modal', 'id'].forEach((key) => {
          prevEl.removeAttribute(key)
        })
      }
    },
    { immediate: true }
  )

  watch(() => props.visible, togglePopperAlive, { immediate: true })

  watch(
    () =>
      buildPopperOptions(props, {
        arrowEl: unref(arrowRef),
        arrowOffset: unref(arrowOffset),
      }),
    (option) => popperInstance.value?.setOptions(option)
  )
})

onBeforeUnmount(() => {
  triggerTargetAriaStopWatch?.()
  triggerTargetAriaStopWatch = undefined
})

defineExpose({
  /**
   * @description popper content element
   */
  popperContentRef,
  /**
   * @description popperjs instance
   */
  popperInstance,
  /**
   * @description method for updating popper
   */
  updatePopper,
  /**
   * @description content style
   */
  contentStyle,
})
</script>

<script lang="ts">
export type PopperContentExpose = Readonly<{
  popperContentRef: HTMLElement | undefined
  popperInstance: Instance
  updatePopper: (shouldUpdateZIndex?: boolean) => void
  contentStyle: any
}>
</script>
