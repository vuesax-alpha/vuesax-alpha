<template>
  <tr ref="el$" class="vs-table__tr" :class="bindRootClass" @click="click">
    <slot></slot>
  </tr>
  <template v-if="$slots.expand">
    <transition name="fade-expand">
      <tr v-if="expand" class="vs-table__tr__expand">
        <td class="vs-table__expand__td" :colspan="table.colspan.value">
          <div ref="contentExpand$" class="vs-table__expand__td__content">
            <div class="vs-table__expand__td__content__sub">
              <slot name="expand"></slot>
            </div>
          </div>
        </td>
      </tr>
    </transition>
  </template>
  <template v-else></template>
</template>

<script lang="ts">
import { defineComponent, inject, nextTick, ref, useSlots, watch } from "vue";
import BaseComponent from "@/mixins/component.vue";

import vsTableExpand from "./vsTableExpand.vue";
import { TableContext, TableContextKey } from "../type";

export default defineComponent({
  name: "vsTr",
  extends: BaseComponent,
  components: {
    vsTableExpand,
  },
  emits: ["click", "selected"],
  props: {
    data: null,
    isSelected: Boolean,
    notClickSelected: Boolean,
    openExpandOnlyTd: Boolean,
  },
  setup(props, ctx) {
    const slots = useSlots();
    const table = inject(TableContextKey, {} as unknown as TableContext);
    const el$ = ref<HTMLElement>();
    const contentExpand$ = ref<HTMLElement>();

    const expand = ref<boolean>(false);

    const click = (evs: any) => {
      if (slots.expand) {
        if (!evs.target.className.includes("isEdit")) {
          expand.value = !expand.value;
        }
      }
      if (evs.target.nodeName == "TD" && !props.notClickSelected) {
        table.selected(props.data);
        ctx.emit("selected", props.data);
      }

      ctx.emit("click", evs);
    };

    watch(expand, (val: boolean) => {
      if (val) {
        nextTick(() => {
          const content: HTMLElement = contentExpand$.value!;
          content.style.height = `${content.scrollHeight}px`;
        });
      }
    });

    watch(
      () => props.data,
      () => {
        el$.value?.style.removeProperty(`--vs-color`);
        expand.value = false;
      },
    );

    return {
      table,
      expand,
      el$,
      contentExpand$,
      click,
    };
  },
  computed: {
    bindRootClass() {
      return {
        "vs-component--primary": !!this.primary,
        "vs-component--danger": !!this.danger,
        "vs-component--warn": !!this.warn,
        "vs-component--success": !!this.success,
        "vs-component--dark": !!this.dark,

        selected: this.isSelected,
        isExpand: this.expand,
        expand: !!this.$slots.expand,
      };
    },
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

