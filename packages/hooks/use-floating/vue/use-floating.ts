import {
  computed,
  getCurrentScope,
  onMounted,
  onScopeDispose,
  ref,
  shallowReadonly,
  shallowRef,
  unref,
  watch,
} from 'vue'
import { useEventListener } from '@vueuse/core'
import { computePosition } from '@vuesax-alpha/hooks/use-floating/dom'

import { getDPR } from './utils/get-dpr'
import { roundByDPR } from './utils/round-by-dpr'
import { unwrapElement } from './utils/unwrap-element'
import type {
  MaybeElement,
  MiddlewareData,
  UseFloatingOptions,
  UseFloatingReturn,
} from './types'
import type { Ref } from 'vue'
import type {
  FloatingElement,
  ReferenceElement,
} from '@vuesax-alpha/hooks/use-floating/dom'

export function useFloating<T extends ReferenceElement = ReferenceElement>(
  reference: Ref<MaybeElement<T>>,
  floating: Ref<MaybeElement<FloatingElement>>,
  options: UseFloatingOptions<T> = {}
): UseFloatingReturn {
  const whileElementsMountedOption = options.whileElementsMounted
  const openOption = computed(() => unref(options.open) ?? true)
  const fitOption = computed(() => unref(options.fit) ?? false)
  const middlewareOption = computed(() => unref(options.middleware))
  const placementOption = computed(() => unref(options.placement) ?? 'bottom')
  const strategyOption = computed(() => unref(options.strategy) ?? 'absolute')
  const transformOption = computed(() => unref(options.transform) ?? true)
  const referenceElement = computed(() => unwrapElement(reference.value))
  const floatingElement = computed(() => unwrapElement(floating.value))

  const x = ref(0)
  const y = ref(0)
  const strategy = ref(strategyOption.value)
  const placement = ref(placementOption.value)
  const middlewareData = shallowRef<MiddlewareData>({})
  const isPositioned = ref(false)
  const floatingStyles = computed(() => {
    const initialStyles = {
      position: strategy.value,
      left: '0',
      top: '0',
    }

    if (!floatingElement.value) {
      return initialStyles
    }

    const xVal = roundByDPR(floatingElement.value, x.value)
    const yVal = roundByDPR(floatingElement.value, y.value)

    if (transformOption.value) {
      return {
        ...initialStyles,
        transform: `translate(${xVal}px, ${yVal}px)`,
        ...(getDPR(floatingElement.value) >= 1.5 && {
          willChange: 'transform',
        }),
      }
    }

    return {
      position: strategy.value,
      left: `${xVal}px`,
      top: `${yVal}px`,
    }
  })

  let whileElementsMountedCleanup: (() => void) | undefined

  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return
    }

    if (fitOption.value) {
      floatingElement.value.style.width = `${
        referenceElement.value.getBoundingClientRect().width
      }px`
    }

    computePosition(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value,
    }).then((position) => {
      x.value = position.x
      y.value = position.y
      strategy.value = position.strategy
      placement.value = position.placement
      middlewareData.value = position.middlewareData
      isPositioned.value = true
    })
  }

  function cleanup() {
    if (typeof whileElementsMountedCleanup === 'function') {
      whileElementsMountedCleanup()
      whileElementsMountedCleanup = undefined
    }
  }

  function attach() {
    cleanup()

    if (whileElementsMountedOption === undefined) {
      update()
      return
    }

    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(
        referenceElement.value,
        floatingElement.value,
        update
      )
      return
    }
  }

  function reset() {
    if (!openOption.value) {
      isPositioned.value = false
    }
  }

  onMounted(() => {
    useEventListener('resize', attach, true)
    useEventListener('scroll', attach, true)

    watch([middlewareOption, placementOption, strategyOption], update, {
      flush: 'sync',
    })
    watch([referenceElement, floatingElement], attach, { flush: 'sync' })
    watch(openOption, reset, { flush: 'sync' })
  })

  if (getCurrentScope()) {
    onScopeDispose(cleanup)
  }

  return {
    x: shallowReadonly(x),
    y: shallowReadonly(y),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    floatingStyles,
    update,
  }
}
