<template>
  <button
    class="vs-button"
    :class="bindRootClass"
    :style="bindRootStyle"
    @mousedown="mouseDown"
    @click="click"
  >
    <div class="vs-button__content">
      <slot></slot>
    </div>

    <div
      v-if="$slots.animate"
      class="vs-button__animate"
      :class="[`vs-button__animate--${animationType}`]"
    >
      <slot name="animate"></slot>
    </div>
    <template v-else></template>

    <div v-if="loading" class="vs-button__loading">
      <icon-loading />
    </div>
    <template v-else></template>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseComponent from "@/mixins/component.vue";
import { includes } from "lodash";

import ripple, { rippleCut, rippleReverse } from "@/util/ripple";
import iconLoading from "@/components/icons/Loading.vue";

export const ButtonSize = ["xl", "large", "default", "small", "mini"];

export const ButtonAnimateType = ["vertical", "scale", "rotate"];

export default defineComponent({
  name: "vsButton",
  extends: BaseComponent,
  emits: ['mousedown'],
  props: {
    ripple: String,
    // type Button Style
    flat: Boolean,
    border: Boolean,
    gradient: Boolean,
    relief: Boolean,
    transparent: Boolean,
    shadow: Boolean,
    floating: Boolean,
    icon: Boolean,
    circle: Boolean,
    square: Boolean,
    size: {
      type: String,
      validator(_size: string) {
        return includes(ButtonSize, _size);
      }
    },
    loading: Boolean,
    upload: Boolean,
    block: Boolean,
    animationType: {
      type: String,
      validator(_animateType: string) {
        return includes(ButtonAnimateType, _animateType);
      }
    },
    animateInactive: Boolean,
    to: [String, Object],
    href: String,
    blank: Boolean,
  },
  components: { iconLoading },
  data: () => ({
    class: "",
    prototype: null,
  }),
  computed: {
    bindRootClass() {
      return [
        `vs-button--size-${this.size}`,
        { [`vs-button--fff`]: this.color === "#fff" },
        { [`vs-button--active`]: !!this.active },
        { [`vs-button--icon`]: !!this.icon },
        { [`vs-button--circle`]: !!this.circle },
        { [`vs-button--square`]: !!this.square },
        { [`vs-button--loading`]: !!this.loading },
        { [`vs-button--upload`]: !!this.upload },
        { [`vs-button--block`]: !!this.block },
        { [`vs-button--animate`]: !!this.$slots.animate },
        { [`vs-button--animate-${this.animationType}`]: !!this.animationType },
        { [`vs-button--animate-inactive`]: !!this.animateInactive },

        // colors
        {
          [`vs-button--primary`]:
            !this.danger &&
            !this.success &&
            !this.warn &&
            !this.dark &&
            !this.color,
        },
        { [`vs-button--danger`]: !!this.danger },
        { [`vs-button--warn`]: !!this.warn },
        { [`vs-button--success`]: !!this.success },
        { [`vs-button--dark`]: !!this.dark },

        {
          [`vs-button--default`]:
            !this.flat &&
            !this.border &&
            !this.gradient &&
            !this.relief &&
            !this.transparent &&
            !this.shadow &&
            !this.floating,
        },
        { [`vs-button--flat`]: !!this.flat },
        { [`vs-button--border`]: !!this.border },
        { [`vs-button--gradient`]: !!this.gradient },
        { [`vs-button--relief`]: !!this.relief },
        { [`vs-button--transparent`]: !!this.transparent },
        { [`vs-button--shadow`]: !!this.shadow },
        { [`vs-button--floating`]: !!this.floating },
      ];
    },
    bindRootStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : "",
      };
    },
  },
  methods: {
    mouseDown(evs: MouseEvent) {
      // ripple effect
      if (this.ripple === "reverse") {
        rippleReverse(evs);
      } else if (this.ripple === "cut") {
        rippleCut(evs);
      } else {
        if (this.flat) {
          ripple(
            evs,
            (this.componentColor || this.color || "primary") &&
              !this.active &&
              document.activeElement !== this.$el
              ? "inherit"
              : undefined,
            this.flat && !this.active && document.activeElement !== this.$el,
          );
        } else {
          ripple(evs, undefined, false);
        }
      }
    },
    click() {
      // no need to fire event emitter (click) from this component
      if (this.to) {
        this.$router.push(this.to);
      } else if (this.href) {
        window.open(this.href, (this.blank && "_blank") || "_self");
        // console.log(this.blank && '_self')
      }
    },
  },
});
</script>

<style lang="scss" src="./style.scss"></style>
