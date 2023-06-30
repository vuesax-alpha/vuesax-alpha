<template>
  <div :class="{ hasOpenLoading }" class="center">
    <div
      v-for="(type, index) in types"
      :key="index"
      :ref="(el) => $refs.push(el)"
      class="box-loading"
      @click="handleClickLoading(type)"
    />
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUpdate, onMounted, reactive, ref } from 'vue'
import { VsLoadingFn } from 'vuesax-alpha'
import type { LoadingType } from 'vuesax-alpha'

const types: LoadingType[] = [
  'atom',
  'ball',
  'scale',
  'waves',
  'border',
  'points',
  'square',
  'circles',
  'corners',
  'default',
  'gradient',
  'rectangle',
  'square-rotate',
]

const hasOpenLoading = ref(false)
let $refs = reactive([]) // refs HTMLElement

const handleClickLoading = (type: LoadingType) => {
  const loadingInstance = VsLoadingFn({
    type,
  })
  hasOpenLoading.value = true
  setTimeout(() => {
    loadingInstance.close()
    hasOpenLoading.value = false
  }, 3000)
}
const openLoading = (type: LoadingType, ref: string) => {
  VsLoadingFn({
    target: ref,
    text: type,
    type,
  })
}

onBeforeUpdate(() => {
  $refs = []
})

onMounted(() => {
  types.forEach((type, i) => {
    openLoading(type, $refs[i])
  })
})
</script>

<style scoped lang="scss">
@function -var($var) {
  @return unquote('var(--vs-' + var + ')');
}
@function -color($color, $alpha: 1) {
  @return unquote('rgba(var(--vs-#{$color}), #{$alpha})');
}
.center {
  flex-wrap: wrap;
  z-index: 200;
  position: relative;
  padding: 20px 10px;
  &.hasOpenLoading {
    .box-loading {
      opacity: 0;
      transform: scale(0.7);
    }
  }
}
.box-loading {
  width: 120px;
  height: 120px;
  position: relative;
  margin: 5px;
  border-radius: 20px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 15px 20px -10px rgba(0, 0, 0, 0.09);
  }
  .vs-loading {
    padding: 0px;
    background: transparent !important;

    &.vs-loading--gradient,
    &.vs-loading--square {
      .vs-loading__load--item-2 {
        background: -color('theme-layout') !important;
      }
    }
  }
}
</style>
