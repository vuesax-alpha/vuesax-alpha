<template>
  <button ref="el$" class="vs-navbar__item" :class="{ active }" @click="click">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, inject, nextTick, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import BaseComponent from "@/mixins/component.vue";

import { NavbarContextKey } from "../type";

export default defineComponent({
  name: "vsNavbarItem",
  extends: BaseComponent,
  emits: ["click"],
  props: {
    active: Boolean,
    to: String,
    href: String,
    target: {
      type: String,
      default: "_blank",
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    const router = useRouter();
    const navbar = inject(NavbarContextKey)!;

    const el$ = ref<HTMLElement>();

    const handleLine = () => {
      nextTick(() => {
        if (props.active) {
          const left = el$.value!.offsetLeft;
          navbar.setLeftLine(left);
          const width = el$.value!.scrollWidth;
          navbar.setWidthLine(width);
        }
      });
    };

    const handleClick = () => {
      if (props.to) {
        router.push(props.to);
      } else if (props.href) {
        window.open(props.href, props.target);
      }
    };

    const handleActive = () => {
      navbar.setModel(props.id);
      handleLine();
    };

    const click = (evs: Event) => {
      ctx.emit("click", evs);
      handleLine();
      handleClick();
      handleActive();
    };

    watch(
      () => props.active,
      () => {
        handleLine();
      },
    );

    onMounted(() => {
      if (props.active) {
        const left = el$.value!.offsetLeft;
        navbar.setLeftLine(left);
        const width = el$.value!.scrollWidth;
        navbar.setWidthLine(width);
      }
    });

    ctx.expose({ handleActive, handleClick, click });

    return { el$, handleClick, handleActive, click };
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

