<template>
  <div
    ref="el$"
    class="vs-sidebar-content"
    :class="bindRootClass"
    :style="bindRootStyle"
    @mouseenter="handleMouseEnterSidebar"
    @mouseleave="handleMouseLeaveSidebar"
  >
		<div v-if="$slots.logo" class="vs-sidebar__logo">
			<slot name="logo"></slot>
		</div>
    <template v-else></template>

		<div v-if="$slots.header" class="vs-sidebar__header">
			<slot name="header"></slot>
		</div>
    <template v-else></template>

		<div class="vs-sidebar">
			<slot></slot>
		</div>

		<div v-if="$slots.footer" class="vs-sidebar__footer">
			<slot name="footer"></slot>
		</div>
    <template v-else></template>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, ref, watch } from "vue";
import BaseComponent from "@/mixins/component.vue";

import { getColor, setColor } from "@/util";
import { computed } from "@vue/reactivity";
import { SidebarContextKey } from "../type";

export default defineComponent({
  name: "vsSidebar",
  extends: BaseComponent,
  emits: ["update:open", "update:modelValue"],
  props: {
    modelValue: null,
    reduce: {
      default: false,
      type: Boolean,
    },
    hoverExpand: {
      default: false,
      type: Boolean,
    },
    open: {
      default: false,
      type: Boolean,
    },
    notLineActive: {
      default: false,
      type: Boolean,
    },
    square: {
      default: false,
      type: Boolean,
    },
    textWhite: {
      default: false,
      type: Boolean,
    },
    notShadow: {
      default: false,
      type: Boolean,
    },
    relative: {
      default: false,
      type: Boolean,
    },
    absolute: {
      default: false,
      type: Boolean,
    },
    right: {
      default: false,
      type: Boolean,
    },
    background: {
      default: "background",
      type: String,
    },
  },
  setup(props, ctx) {
    const staticWidth = ref<number>(260);
    const forceExpand = ref<boolean>(false);
    const reduceInternal = ref<boolean>(false);

    const el$ = ref<HTMLElement>();

    const handleMouseEnterSidebar = () => {
      if (props.hoverExpand) {
        reduceInternal.value = false;
      }
    };

    const handleMouseLeaveSidebar = () => {
      if (props.hoverExpand) {
        reduceInternal.value = true;
      }
    };

    const clickCloseSidebar = (evs: any) => {
      if (!(evs.target as any).closest(".vs-sidebar-content")) {
        ctx.emit("update:open", false);
      }
    };

    const handleClickItem = (id: string) => {
      ctx.emit("update:modelValue", id);
    };

    watch(
      () => props.open,
      (val: boolean) => {
        if (val) {
          setTimeout(() => {
            window.addEventListener("click", clickCloseSidebar);
          });
        } else {
          window.removeEventListener("click", clickCloseSidebar);
        }
      },
    );

    watch(
      () => props.reduce,
      (val: boolean) => {
        reduceInternal.value = val;
        const el = el$.value!;
        if (val) {
          el.style.width = "50px";
        } else {
          el.style.width = `${staticWidth.value}px`;
        }
      },
    );

    watch(reduceInternal, (val: boolean) => {
      const el = el$.value!;
      if (val) {
        el.style.width = "50px";
      } else {
        el.style.width = `${staticWidth.value}px`;
      }
    });

    watch(
      () => props.background,
      () => {
        setColor("background", props.background, el$.value!, true);
      },
    );

    const getValue = computed(() => props.modelValue);

    onMounted(() => {
      staticWidth.value = el$.value!.offsetWidth;
      reduceInternal.value = props.reduce;

      if (props.background !== "background") {
        setColor("background", props.background, el$.value!, true);
      }

      if (props.textWhite) {
        setColor("text", "#fff", el$.value!, true);
      }
    });

    provide(SidebarContextKey, {
      reduce: props.reduce,
      getValue,
      handleClickItem
    });

    return {
      el$,
      reduceInternal,
			handleMouseEnterSidebar,
			handleMouseLeaveSidebar,
      getValue
    };
  },
  computed: {
    bindRootStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : "",
      };
    },
    bindRootClass() {
      return [
        {
          reduce: this.reduceInternal,
          open: this.open,
          notLineActive: this.notLineActive,
          square: this.square,
          notShadow: this.notShadow,
          textWhite: this.textWhite,
          relative: this.relative,
          absolute: this.absolute,
          right: this.right,
        },
        // colors
        { [`vs-component--primary`]: !!this.primary },
        { [`vs-component--danger`]: !!this.danger },
        { [`vs-component--warn`]: !!this.warn },
        { [`vs-component--success`]: !!this.success },
        { [`vs-component--dark`]: !!this.dark },
        { [`vs-component--is-color`]: !!this.isColor },
      ];
    },
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

