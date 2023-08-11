<template>
  <vs-tooltip
    ref="tooltipRef"
    trigger="click"
    color="light"
    v-bind="$attrs"
    :popper-class="`${ns.namespace.value}-popconfirm`"
    :popper-style="style"
    :teleported="teleported"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :hide-after="hideAfter"
    :persistent="persistent"
  >
    <template #content>
      <div :class="ns.e('main')">
        <vs-icon
          v-if="!hideIcon && icon"
          :class="ns.e('icon')"
          :style="{ color: iconColor }"
          size="26"
        >
          <component :is="icon" />
        </vs-icon>
        {{ title }}
      </div>
      <div :class="ns.e('action')">
        <vs-button
          size="small"
          :color="cancelButtonColor"
          :type="cancelButtonType"
          @click="cancel"
        >
          {{ finalCancelButtonText }}
        </vs-button>
        <vs-button
          size="small"
          :color="confirmButtonColor"
          :type="confirmButtonType"
          @click="confirm"
        >
          {{ finalConfirmButtonText }}
        </vs-button>
      </div>
    </template>
    <template v-if="$slots.reference">
      <slot name="reference" />
    </template>
  </vs-tooltip>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import VsButton from '@vuesax-alpha/components/button'
import VsIcon from '@vuesax-alpha/components/icon'
import VsTooltip from '@vuesax-alpha/components/tooltip'
import { useLocale, useNamespace } from '@vuesax-alpha/hooks'
import { addUnit } from '@vuesax-alpha/utils'
import { popconfirmEmits, popconfirmProps } from './popconfirm'

import type { TooltipInstance } from '@vuesax-alpha/components/tooltip'

defineOptions({
  name: 'VsPopconfirm',
})

const props = defineProps(popconfirmProps)
const emit = defineEmits(popconfirmEmits)

const { t } = useLocale()
const ns = useNamespace('popconfirm')
const tooltipRef = ref<TooltipInstance>()

const hidePopper = () => {
  tooltipRef.value?.popperRef?.hide()
}

const style = computed(() => {
  return {
    width: addUnit(props.width),
  }
})

const confirm = (e: MouseEvent) => {
  emit('confirm', e)
  hidePopper()
}
const cancel = (e: MouseEvent) => {
  emit('cancel', e)
  hidePopper()
}

const finalConfirmButtonText = computed(
  () => props.confirmButtonText || t('vs.popconfirm.confirmButtonText')
)
const finalCancelButtonText = computed(
  () => props.cancelButtonText || t('vs.popconfirm.cancelButtonText')
)
</script>
