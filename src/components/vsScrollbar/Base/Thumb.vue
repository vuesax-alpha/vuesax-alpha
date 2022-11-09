<template>
  <transition name="scrollbar-fade">
    <div
      v-show="showAlways || visible"
      ref="instance"
      :class="[
        'vs-scrollbar__bar',
        `vs-scrollbar__bar--${bar.key}`,
        // { highlight: cursorDown },
      ]"
      @mousedown.self="clickTrackHandler"
    >
      <div
        ref="thumb"
        class="vs-scrollbar__thumb"
        :style="thumbStyle"
        @mousedown.self="clickThumbHandler"
        v-bind="$attrs"
      ></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  name: "scrollbar-thumb",
});
</script>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, ref, toRef } from "vue";
import { isClient, useEventListener } from "@vueuse/core";
import { BAR_MAP, scrollbarContextKey } from "./types";

const props = defineProps({
  vertical: Boolean,
  size: [String, Number],
  move: Number,
  ratio: {
    type: Number,
    required: true,
  },
  showAlways: Boolean,
});

const scrollbar = inject(scrollbarContextKey);

if (!scrollbar) throw new Error("vsScollbar can not inject scrollbar context");

const instance    = ref<HTMLDivElement>();
const thumb       = ref<HTMLDivElement>();
const thumbState  = ref<Partial<Record<"X" | "Y", number>>>({});
const visible     = ref(false);
const cursorDown  = ref(false);
const cursorLeave = ref(false);
let originalOnSelectStart:
  | ((this: GlobalEventHandlers, ev: Event) => any)
  | null = isClient ? document.onselectstart : null;
const bar = computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
const thumbStyle = computed(() => {
  return {
    [bar.value.size]: props.size,
    transform: `translate${bar.value.axis}(${props.move}%)`,
  };
});

const offsetRatio = computed(
  () =>
    // offsetRatioX = original width of thumb / current width of thumb / ratioX
    // offsetRatioY = original height of thumb / current height of thumb / ratioY
    // instance height = wrap height - GAP
    instance.value![bar.value.offset] ** 2 /
    scrollbar.wrapElement![bar.value.scrollSize] /
    props.ratio /
    thumb.value![bar.value.offset],
);
const clickThumbHandler = (e: MouseEvent) => {
  // prevent click event of middle and right mouse's button
  if (e.ctrlKey || [1, 2].includes(e.button)) return;
  window.getSelection()?.removeAllRanges();
  startDrag(e);
  const el = e.currentTarget as HTMLDivElement;
  if (!el) return;
  thumbState.value[bar.value.axis as "X" | "Y"] =
    el[bar.value.offset] -
    (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
};
const clickTrackHandler = (e: MouseEvent) => {
  if (!thumb.value || !instance.value || !scrollbar.wrapElement) return;
   scrollbar.wrapElement.style.scrollBehavior = 'smooth';

  const offset = Math.abs(
    (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] -
      e[bar.value.client],
  );
  const thumbHalf = thumb.value[bar.value.offset] / 2;
  const thumbPositionPercentage =
    ((offset - thumbHalf) * 100 * offsetRatio.value) /
    instance.value[bar.value.offset];
  scrollbar.wrapElement[bar.value.scroll] =
    (thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize]) /
    100;
  scrollbar.wrapElement.style.scrollBehavior = 'unset';
};
const startDrag = (e: MouseEvent) => {
  // e.stopImmediatePropagation();
  cursorDown.value = true;
  document.addEventListener("mousemove", mouseMoveDocumentHandler);
  document.addEventListener("mouseup", mouseUpDocumentHandler);
  originalOnSelectStart = document.onselectstart;
  document.onselectstart = () => false;
};
const mouseMoveDocumentHandler = (e: MouseEvent) => {
  if (!instance.value || !thumb.value) return;
  if (cursorDown.value === false) return;
  const prevPage = thumbState.value[bar.value.axis as "X" | "Y"];
  if (!prevPage) return;
  const offset =
    (instance.value.getBoundingClientRect()[bar.value.direction] -
      e[bar.value.client]) *
    -1;
  const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
  const thumbPositionPercentage =
    ((offset - thumbClickPosition) * 100 * offsetRatio.value) /
    instance.value[bar.value.offset];
  scrollbar.wrapElement[bar.value.scroll] =
    (thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize]) /
    100;
};
const mouseUpDocumentHandler = () => {
  cursorDown.value = false;
  thumbState.value[bar.value.axis as "X" | "Y"] = 0;
  document.removeEventListener("mousemove", mouseMoveDocumentHandler);
  document.removeEventListener("mouseup", mouseUpDocumentHandler);
  restoreOnselectstart();
  if (cursorLeave.value) visible.value = false;
};
const mouseMoveScrollbarHandler = () => {
  cursorLeave.value = false;
  visible.value = !!props.size;
};
const mouseLeaveScrollbarHandler = () => {
  cursorLeave.value = true;
  visible.value = cursorDown.value;
};
onBeforeUnmount(() => {
  restoreOnselectstart();
  document.removeEventListener("mouseup", mouseUpDocumentHandler);
});
const restoreOnselectstart = () => {
  if (document.onselectstart !== originalOnSelectStart)
    document.onselectstart = originalOnSelectStart;
};
useEventListener(
  toRef(scrollbar, "scrollbarElement"),
  "mousemove",
  mouseMoveScrollbarHandler,
);
useEventListener(
  toRef(scrollbar, "scrollbarElement"),
  "mouseleave",
  mouseLeaveScrollbarHandler,
);
</script>
