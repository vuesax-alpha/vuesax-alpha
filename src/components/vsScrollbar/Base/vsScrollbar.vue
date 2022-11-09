<template>
  <div ref="scrollbar$" class="vs-scrollbar">
    <div
      ref="wrap$"
      :class="[
        'vs-scrollbar__wrap',
        { 'vs-scrollbar--hidden-default': !native || hideScrollbar },
        wrapClass,
      ]"
      :style="bindWrapStyle"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="view$"
        :class="['vs-scrollbar__view', viewClass]"
      >
        <slot></slot>
      </component>
    </div>
    <template v-if="!native && !hideScrollbar">
      <Bar
        ref="barRef"
        :height="sizeHeight"
        :width="sizeWidth"
        :show-always="showAlways"
        :ratio-x="ratioX"
        :ratio-y="ratioY"
        :thickness="thickness"
      />
    </template>
    <template v-else></template>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "vsScrollbar",
});
</script>

<script setup lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
  onUpdated,
  provide,
  reactive,
  ref,
  StyleValue,
  watch,
} from "vue";
import { useEventListener, useResizeObserver } from "@vueuse/core";
import { isNumber, isObject } from "lodash";

import Bar from "./Bar.vue";
import { scrollbarContextKey, GAP, SCROLLBAR_PROPS } from "./types";

const props = defineProps(SCROLLBAR_PROPS);

const emit = defineEmits(["scroll"]);

const instance = getCurrentInstance();

let stopResizeObserver: (() => void) | undefined = undefined;
let stopResizeListener: (() => void) | undefined = undefined;
const scrollbar$    = ref<HTMLDivElement>();
const wrap$         = ref<HTMLDivElement>();
const view$         = ref<HTMLElement>();
const scrollView    = ref<{ scrollTop: number, scrollLeft: number }>({ scrollTop: 0, scrollLeft: 0 });
const sizeWidth     = ref("0");
const sizeHeight    = ref("0");
const barRef        = ref<InstanceType<typeof Bar>>();
const ratioY        = ref(1);
const ratioX        = ref(1);
const bindWrapStyle = computed<StyleValue>(() => {
  return [`height: ${props.height}px`, `max-height: ${props.maxHeight}px`];
});
const handleScroll = () => {
  if (wrap$.value) {
    barRef.value?.handleScroll(wrap$.value);
    scrollView.value = {
      scrollTop: wrap$.value.scrollTop,
      scrollLeft: wrap$.value.scrollLeft,
    };
    emit("scroll", scrollView.value);
  }
};

// TODO: refactor method overrides, due to script setup dts
function scrollTo(xCord: number, yCord?: number): void;
function scrollTo(options: ScrollToOptions): void;
function scrollTo(arg1: unknown, arg2?: number) {
  if (isObject(arg1)) {
    wrap$.value?.scrollTo(arg1);
  } else if (isNumber(arg1) && isNumber(arg2)) {
    wrap$.value?.scrollTo(arg1, arg2);
  }
}
const setScrollTop = (value: number) => {
  if (!isNumber(value)) {
    throw new Error(
      "Scrollbar: Set Scrolltop, params value must be a number",
    );
    return;
  }
  wrap$.value!.scrollTop = value;
};
const setScrollLeft = (value: number) => {
  if (!isNumber(value)) {
    throw new Error(
      "Scrollbar: Set ScrollLeft, params value must be a number",
    );
    return;
  }
  wrap$.value!.scrollLeft = value;
};
const update = () => {
  if (!wrap$.value) return;
  const offsetHeight = wrap$.value.offsetHeight - GAP;
  const offsetWidth = wrap$.value.offsetWidth - GAP;
  const originalHeight = offsetHeight ** 2 / wrap$.value.scrollHeight;
  const originalWidth = offsetWidth ** 2 / wrap$.value.scrollWidth;
  const height = Math.max(originalHeight, Number(props.minSize));
  const width = Math.max(originalWidth, Number(props.minSize));
  ratioY.value =
    originalHeight /
    (offsetHeight - originalHeight) /
    (height / (offsetHeight - height));
  ratioX.value =
    originalWidth /
    (offsetWidth - originalWidth) /
    (width / (offsetWidth - width));
  sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
  sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
};
watch(
  () => props.noresize,
  (noresize) => {
    if (noresize) {
      stopResizeObserver?.();
      stopResizeListener?.();
    } else {
      ({ stop: stopResizeObserver } = useResizeObserver(view$, update));
      stopResizeListener = useEventListener("resize", update);
    }
  },
  { immediate: true },
);
watch(
  () => [props.maxHeight, props.height],
  () => {
    if (!props.native)
      nextTick(() => {
        update();
        if (wrap$.value) {
          barRef.value?.handleScroll(wrap$.value);
        }
      });
  },
);
provide(
  scrollbarContextKey,
  reactive({
    scrollbarElement: scrollbar$,
    wrapElement: wrap$,
  }),
);
onMounted(() => {
  if (!props.native)
    nextTick(() => {
      update();
    });
});
onUpdated(() => update());

defineExpose({
  /** @description scrollbar ref */
  scrollbar$,
  /** @description scrollbar wrap ref */
  wrap$,
  /** @description scrollbar instance */
  instance,
  /** @description scrollbar view */
  view$,
  /** @description update scrollbar state manually */
  update,
  /** @description scrolls to a particular set of coordinates */
  scrollTo,
  /** @description set distance to scroll top */
  setScrollTop,
  /** @description set distance to scroll left */
  setScrollLeft,
  /** @description handle scroll event */
  handleScroll,
  /** @description top|left the viewport that wrap has scrolled */
  scrollView,
});
</script>

<style lang="scss" src="./style.scss"></style>

