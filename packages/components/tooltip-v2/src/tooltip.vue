<template>
  <tooltip-root v-bind="rootProps">
    <template #default="{ open }">
      <tooltip-trigger v-bind="triggerProps" nowrap>
        <slot name="trigger" />
      </tooltip-trigger>
      <teleport :to="to" :disabled="!teleported">
        <template v-if="fullTransition">
          <transition v-bind="transitionProps">
            <tooltip-content v-if="alwaysOn || open" v-bind="contentProps">
              <slot />
              <template #arrow="{ style, side }">
                <tooltip-arrow
                  v-if="showArrow"
                  v-bind="arrowProps"
                  :style="style"
                  :side="side"
                />
              </template>
            </tooltip-content>
          </transition>
        </template>
        <template v-else>
          <tooltip-content v-if="alwaysOn || open" v-bind="contentProps">
            <slot />
            <template #arrow="{ style, side }">
              <tooltip-arrow
                v-if="showArrow"
                v-bind="arrowProps"
                :style="style"
                :side="side"
              />
            </template>
          </tooltip-content>
        </template>
      </teleport>
    </template>
  </tooltip-root>
</template>

<script setup lang="ts">
// @ts-nocheck
import { reactive, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import { tooltipArrowProps } from './arrow'
import { tooltipContentProps } from './content'
import { tooltipRootProps } from './root'
import { tooltipProps } from './tooltip'
import { tooltipTriggerProps } from './trigger'
import TooltipRoot from './root.vue'
import TooltipArrow from './arrow.vue'
import TooltipContent from './content.vue'
import TooltipTrigger from './trigger.vue'

defineOptions({
  name: 'VsTooltip',
})

const props = defineProps(tooltipProps)

const refedProps = toRefs(props)

const arrowProps = reactive(pick(refedProps, Object.keys(tooltipArrowProps)))

const contentProps = reactive(
  pick(refedProps, Object.keys(tooltipContentProps))
)

const rootProps = reactive(pick(refedProps, Object.keys(tooltipRootProps)))

const triggerProps = reactive(
  pick(refedProps, Object.keys(tooltipTriggerProps))
)
</script>
