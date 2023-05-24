<template>
  <div ref="root$" :class="avatarClassess" :style="avatarStyles">
    <div v-if="loading" :class="ns.e('loading')">
      <div :class="ns.em('loading', 'animate')">
        <icon-loading />
      </div>
    </div>
    <template v-else />

    <div
      :class="[
        ns.b(),
        getText.length > 2 && ns.em('letter', `${getText.length}`),
      ]"
    >
      <template v-if="$slots.text">
        {{ getText }}
      </template>
      <template v-else />
      <slot />
    </div>

    <div
      v-if="$slots.badge || badge"
      :class="[
        ns.e('badge'),
        ns.is('slot', !!$slots.badge),
        ns.is('writing', writing),
        badgePosition,
      ]"
    >
      <div v-if="writing" :class="ns.e('points')">
        <div :class="ns.em('points', 'item')" />
        <div :class="ns.em('points', 'item')" />
        <div :class="ns.em('points', 'item')" />
      </div>
      <slot v-else name="badge" />
    </div>
    <template v-else />

    <div v-if="isLastest" v-show="showLastest" :class="ns.e('lastest')">
      {{ `+${moreNumber}` }}
    </div>
    <template v-else />

    <div v-if="$slots.icons" :class="ns.e('icons')">
      <slot name="icons" />
    </div>
    <template v-else />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, useSlots, watch } from 'vue'
import { useBaseComponent, useNamespace } from '@vuesax-alpha/hooks'
import { getVsColor, setCssVar } from '@vuesax-alpha/utils'
import { IconLoading } from '@vuesax-alpha/components/icon'
import { avatarProps } from './avatar'
import { useAvatarStatus } from './composables'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'VsAvatar',
})

const props = defineProps(avatarProps)
const slots = useSlots()

const ns = useNamespace('avatar')

const root$ = ref<HTMLElement>()

const { isHidden, isLastest, getText, showLastest, moreNumber } =
  useAvatarStatus(slots)

const avatarClassess = computed(() => [
  ...useBaseComponent(props.color),
  ns.b('content'),
  props.history && 'history',
  props.historyGradient && 'history--gradient',
  props.shape != 'default' && `${ns.be('content', props.shape)}`,
  isHidden.value && `${ns.be('content', 'hidden')}`,
  isLastest.value && `${ns.be('content', 'latest')}`,
  slots.icons && `${ns.be('content', 'hasIcons')}`,
])

const avatarStyles = computed<CSSProperties>(
  () =>
    ({
      width: `${props.size}px`,
      height: `${props.size}px`,
      cursor: props.pointer ? 'pointer' : '',
      ...ns.cssVar({
        color: getVsColor(props.color),
      }),
    } as CSSProperties)
)

watch(
  () => props.badgeColor,
  () => {
    setCssVar('avatar-badge', getVsColor(props.badgeColor), root$.value)
    root$.value?.classList.add(ns.em('badge', 'change-color'))
  }
)

onMounted(() => {
  root$.value?.classList.add(ns.em('badge', 'change-color'))
  setCssVar('avatar-badge', getVsColor(props.badgeColor), root$.value)
})
</script>
