<template>
  <div :class="{ hasOpenLoading }" class="center">
    <div :style="`background: ${color};`" class="con-input">
      <input v-model="color" type="color" />
      <i class="bx bxs-color-fill" />
    </div>
    <div ref="$loadings" class="con-loadings">
      <div
        v-for="(type, index) in types"
        :key="index"
        :ref="(el) => $refs.push(el)"
        class="box-loading"
        @click="handleClickLoading(type)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUpdate, onMounted, reactive, ref, watch } from 'vue'
import { VsLoadingFn } from 'vuesax-alpha'
import type { Color, LoadingType } from 'vuesax-alpha'

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

const color = ref<Color>('#d5397b')
const hasOpenLoading = ref(false)

const $loadings = ref<HTMLElement>()
let $refs = reactive([]) // refs HTMLElement

const handleClickLoading = (type) => {
  const loadingInstance = VsLoadingFn({
    type,
    color,
  })

  hasOpenLoading.value = true

  setTimeout(() => {
    loadingInstance.close()
    hasOpenLoading.value = false
  }, 3000)
}

const openLoading = (type: LoadingType, ref: HTMLElement) => {
  VsLoadingFn({
    target: ref,
    text: type,
    type,
    color,
  })
}

watch(color, () => {
  $loadings.value?.querySelectorAll('.box-loading').forEach((item) => {
    item.innerHTML = ''
  })
  types.forEach((type, i) => {
    openLoading(type, $refs[i])
  })
})

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

.con-input {
  border-radius: 10px;
  border: 4px solid -color('theme-layout');
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  &:hover {
    transform: translate(0, -4px);
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.1);
  }
  input {
    opacity: 0;
    width: 30px;
    height: 30px;
    border: 0px;
    cursor: pointer;
  }
  i {
    position: absolute;
    color: -color('theme-layout');
    pointer-events: none;
  }
}
.con-loadings {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
      .vs-loading__load__animation__2 {
        background: -color('theme-layout') !important;
      }
    }
  }
}
</style>
