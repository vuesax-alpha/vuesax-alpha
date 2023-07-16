<template>
  <vs-collapse-transition>
    <div v-if="modelValue" :class="alertClasses" :style="alertStyles">
      <div v-if="$slots.icon" :class="ns.e('icon')">
        <slot name="icon" />
      </div>

      <div
        v-if="$slots.title"
        :class="[
          ns.e('title'),
          isBoolean(hiddenContent) && ns.em('title', 'click__hidden'),
        ]"
        @click="handleClickHidden"
      >
        <slot name="title" />
        <icon-plus
          v-if="!closable && isBoolean(hiddenContent)"
          :less="!hiddenContent"
          @click.stop="handleClickHidden"
        />
      </div>

      <vs-collapse-transition>
        <div v-if="!hiddenContent" :class="ns.e('content')">
          <div :class="ns.em('content', 'text')">
            <slot />
            <slot :name="`page-${page}`" />
          </div>
        </div>
      </vs-collapse-transition>

      <button v-if="closable" :class="ns.e('close')" @click="handleClickClose">
        <icon-close hover="less" />
      </button>

      <div v-if="$slots.footer" :class="ns.e('footer')">
        <slot name="footer" />
      </div>

      <div v-if="!!progress" :class="ns.e('progress')">
        <div
          :class="ns.em('progress', 'bar')"
          :style="{ width: `${progress}%` }"
        />
      </div>

      <div v-if="getTotalPages > 0" :class="ns.e('pagination')">
        <button @click="handleClickPrevPage" v-text="'<'" />
        <span>{{ page }} / {{ getTotalPages }}</span>
        <button @click="handleClickNextPage" v-text="'>'" />
      </div>
    </div>
  </vs-collapse-transition>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { getVsColor, isBoolean } from '@vuesax-alpha/utils'
import { IconClose, IconPlus } from '@vuesax-alpha/components/icon'
import { VsCollapseTransition } from '@vuesax-alpha/components/collapse-transition'
import { useBaseComponent, useNamespace } from '@vuesax-alpha/hooks'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { alertEmits, alertProps } from './alert'
import { useAlertDeprecated } from './use-deprecated'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'VsAlert',
})

const props = defineProps(alertProps)
const slots = useSlots()
const emit = defineEmits(alertEmits)

useAlertDeprecated(props)

const ns = useNamespace('alert')

const alertClasses = computed(() => [
  ...useBaseComponent(props.color),
  ns.b(),
  props.type && ns.m(props.type),
  getPages.value.length > 0 && ns.m('pages'),
])
const alertStyles = computed(() => {
  return ns.cssVar({
    color: getVsColor(props.color),
  }) as CSSProperties
})

const getTotalPages = computed(() => {
  const keys = Object.keys(slots).filter((slot) => slot.includes('page-'))
  return keys.length
})

const getPages = computed(() => {
  const pages = Object.keys(slots).filter((slot) => {
    return slot.includes('page-')
  })

  const values: any = []
  pages.forEach((page) => {
    values.push(`${props.page}` === page.split('-')[1] && slots[page])
  })
  return values
})

const handleClickClose = () => {
  emit(UPDATE_MODEL_EVENT, !props.modelValue)
}
const handleClickHidden = () => {
  emit('update:hiddenContent', !props.hiddenContent)
}
const handleClickPrevPage = () => {
  if (props.page > 1) {
    emit('update:page', props.page - 1)
  }
}
const handleClickNextPage = () => {
  if (props.page < getTotalPages.value) {
    emit('update:page', props.page + 1)
  }
}
</script>
