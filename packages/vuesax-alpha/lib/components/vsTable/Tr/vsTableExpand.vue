<template>
  <transition name="fade-expand">
    <tr v-if="!hidden" ref="el$" class="vs-table__tr__expand">
      <td class="vs-table__expand__td" :colspan="colspan">
        <div ref="content$" class="vs-table__expand__td__content">
          <div class="vs-table__expand__td__content__sub">
            <slot></slot>
          </div>
        </div>
      </td>
    </tr>
  </transition>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, watch } from "vue";
import BaseComponent from "@/mixins/component.vue";

export default defineComponent({
  name: "vsTrExpand",
  extends: BaseComponent,
  props: {
    colspan: Number,
  },
  setup() {
    const hidden = ref<boolean>(true);

    const el$ = ref<HTMLElement>();
    const content$ = ref<HTMLElement>();

    watch(hidden, (val: boolean) => {
      if (!val) {
        nextTick(() => {
          const content: HTMLElement = content$.value!;
          content.style.height = `${content.scrollHeight}px`;
        });
      }
    });

    return {
      hidden,
      el$,
      content$,
    };
  },
});
</script>

<style lang="scss" scoped></style>
