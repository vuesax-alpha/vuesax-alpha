<template>
  <div ref="loadingRef" :class="loadingKls" :style="loadingStyles">
    <div :class="ns.e('load')" :style="[{ transform: `scale(${scale})` }]">
      <div :class="ns.e('animation')">
        <div v-if="percent" :class="ns.em('load', 'percent')">
          {{ percent }}
        </div>

        <template v-if="type === 'default'">
          <icon-loading />
        </template>

        <div
          :class="[ns.em('animation', 'item'), ns.em('animation', 'item-1')]"
        />
        <div
          :class="[ns.em('animation', 'item'), ns.em('animation', 'item-2')]"
        />
        <div
          :class="[ns.em('animation', 'item'), ns.em('animation', 'item-3')]"
        />

        <template v-if="type === 'ball'">
          <div
            :class="[
              ns.em('animation', 'shadow'),
              ns.em('animation', 'shadow-1'),
            ]"
          />
          <div
            :class="[
              ns.em('animation', 'shadow'),
              ns.em('animation', 'shadow-2'),
            ]"
          />
          <div
            :class="[
              ns.em('animation', 'shadow'),
              ns.em('animation', 'shadow-3'),
            ]"
          />
        </template>
      </div>

      <div v-if="text" :class="ns.e('text')">{{ text }}</div>
    </div>

    <div v-if="progress" :class="ns.e('progress')">
      <div :class="ns.e('progress-bar')" :style="[{ width: `${progress}%` }]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, unref } from 'vue'
import {
  useColor,
  useGlobalComponentSettings,
  useProp,
} from '@vuesax-alpha/hooks'
import { IconLoading } from '@vuesax-alpha/components/icon'
import { getVsColor } from '@vuesax-alpha/utils'
import { loadingProps } from './loading'
import type { Color } from '@vuesax-alpha/constants'

defineOptions({
  name: 'VsLoading',
})

const props = defineProps(loadingProps)

const { ns, zIndex } = useGlobalComponentSettings('loading')

const { currentZIndex } = zIndex

const loadingRef = ref<HTMLElement>()
const color = useColor('primary')
const background = useProp<Color>('background')
const type = useProp<string>('type')

const loadingKls = computed(() => [
  ns.b(),
  type.value && ns.m(type.value),
  ns.is('has-target', !!props.target),
])
const loadingStyles = computed(() => [
  ns.cssVar({
    color: getVsColor(color),
    background: getVsColor(background),
    opacity: `${props.opacity}`,
  }),
  { zIndex: unref(currentZIndex) },
])

const close = () => {
  loadingRef.value?.remove()
}

defineExpose({
  close,
})
</script>
