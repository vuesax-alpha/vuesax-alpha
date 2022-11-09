<template>
  <thumb
    :move="moveX"
    :ratio="ratioX"
    :size="width"
    :showAlways="showAlways"
    :style="`height: ${thickness}px`"
  />
  <thumb
    vertical
    :move="moveY"
    :ratio="ratioY"
    :size="height"
    :showAlways="showAlways"
    :style="`width: ${thickness}px`"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "scrollbar-bar",
});
</script>

<script setup lang="ts">
import { ref } from "vue";

import { GAP } from "./types";
import Thumb from "./Thumb.vue";

const props = defineProps({
  showAlways: {
    type: Boolean,
    default: true,
  },
  width: [String, Number],
  height: [String, Number],
  ratioX: {
    type: Number,
    default: 1,
  },
  ratioY: {
    type: Number,
    default: 1,
  },
  thickness: {
    type: [Number, String],
    default: 8,
  },
});

const moveX = ref(0)
const moveY = ref(0)
const handleScroll = (wrap: HTMLDivElement) => {
  if (wrap) {
    const offsetHeight = wrap.offsetHeight - GAP
    const offsetWidth = wrap.offsetWidth - GAP
    moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * props.ratioY
    moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * props.ratioX
  }
}
defineExpose({
  handleScroll,
})
</script>
