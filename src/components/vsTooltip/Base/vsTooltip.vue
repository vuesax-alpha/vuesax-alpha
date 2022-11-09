<template>
  <div
    ref="content"
    class="vs-tooltip-content"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <transition 
      name="vs-tooltip"
      @leave="leaveTooltip"
    >
      <div
        v-show="activeTooltip"
        ref="tooltip"
        class="vs-tooltip"
        :class="bindTooltipClass"
        :style="bindTooltipStyle"
        @mouseenter="onMouseEnterTooltip"
        @mouseleave="onMouseLeaveTooltip"
      >
        <slot name="tooltip"></slot>
        <icon-loading v-if="loading"></icon-loading>
        <template v-else></template>
      </div>
    </transition>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseComponent from "@/mixins/component.vue";

import { insertBody, removeBody, setCordsPosition } from "@/util";
import iconLoading from "@/components/icons/Loading.vue";

export default defineComponent({
  name: "vsTooltip",
  extends: BaseComponent,
  components: { iconLoading },
  props: {
    modelValue: {
      default: null,
    },
    loading: Boolean,
    bottom: Boolean,
    left: Boolean,
    right: Boolean,
    notHover: Boolean,
    shadow: Boolean,
    interactivity: Boolean,
    notArrow: Boolean,
    square: Boolean,
    circle: Boolean,
    border: Boolean,
    borderThick: Boolean,
    delay: null,
  },
  data: () => ({
    activeTooltip: false,
    isHoverTooltip: false,
    timeoutTooltip: NaN
  }),
  watch: {
    modelValue(val: boolean) {
      this.activeTooltip = val;
      if (val) {
        this.$nextTick(() => {
          this.insertTooltip();
        });
      }
    },
  },
  computed: {
    bindTooltipClass() {
      return [
        {
          top: !this.bottom && !this.left && !this.right,
          bottom: this.bottom,
          left: this.left,
          right: this.right,
          shadow: this.shadow,
          notArrow: this.notArrow,
          square: this.square,
          circle: this.circle,
          border: this.border,
          borderThick: this.borderThick,
          loading: this.loading,
        },
        // colors
        { [`vs-component--primary`]: !!this.primary },
        { [`vs-component--danger`]: !!this.danger },
        { [`vs-component--warn`]: !!this.warn },
        { [`vs-component--success`]: !!this.success },
        { [`vs-component--dark`]: !!this.dark },
      ];
    },
    bindTooltipStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : "",
      };
    },
  },
  methods: {
    insertTooltip() {
      const tooltip = this.$refs.tooltip as HTMLElement;
      insertBody(tooltip, document.body);

      let position = "top";
      if (this.bottom) {
        position = "bottom";
      } else if (this.left) {
        position = "left";
      } else if (this.right) {
        position = "right";
      }

      setCordsPosition(tooltip, this.$refs.content as unknown as HTMLElement, position);
      this.$emit('update:modelValue', true);
    },
    handlerMouseEnter() {
      if (this.delay) {
        setTimeout(() => {
          this.activeTooltip = true;
          this.$nextTick(() => {
            this.insertTooltip();
          });
        }, Number(this.delay));
      } else {
        this.activeTooltip = true;
        this.$nextTick(() => {
          this.insertTooltip();
        });
      }
    },
    removeTooltip() {
      this.activeTooltip = false;
      this.$emit("update:modelValue", false);
    },
    handleResize() {
      let position = "top";
      if (this.bottom) {
        position = "bottom";
      } else if (this.left) {
        position = "left";
      } else if (this.right) {
        position = "right";
      }
      const tooltip = this.$refs.tooltip as HTMLElement;
      if (!tooltip) {
        return;
      }
      this.$nextTick(() => {
        setCordsPosition(tooltip, this.$refs.content as unknown as HTMLElement, position);
      });

      for (let index = 0; index < 300; index++) {
        setTimeout(() => {
          setCordsPosition(tooltip, this.$refs.content as unknown as HTMLElement, position);
        }, index);
      }
    },
    handleMouseDownNotHover(evs: any) {
      if (
        !evs.target.closest(".vs-tooltip") &&
        !evs.target.closest(".vs-tooltip-content")
      ) {
        this.removeTooltip();
      }
    },
    onMouseEnter() {
      if (!this.notHover) {
        this.handlerMouseEnter();
      }
    },
    onMouseLeave() {
      if (!this.notHover) {
        if (this.interactivity) {
          clearTimeout(this.timeoutTooltip);
          this.timeoutTooltip = setTimeout(() => {
            if (!this.isHoverTooltip) {
              this.removeTooltip();
            }
          }, 250);
        } else {
          this.removeTooltip();
        }
      }
    },
    onMouseEnterTooltip() {
      if (this.interactivity) {
        this.isHoverTooltip = true;
        this.handlerMouseEnter();
      }
    },
    onMouseLeaveTooltip() {
      this.isHoverTooltip = false;
      this.removeTooltip();
    },
    leaveTooltip(el: HTMLElement, done: any) {
      setTimeout(() => {
        done();
        removeBody(el, el.parentElement);
      }, 250);      
    }
  },
  mounted() {
    window.addEventListener("popstate", () => {
      const tooltips = document.querySelectorAll(".vs-tooltip");
      tooltips.forEach((tooltip) => {
        tooltip.remove();
      });
    });

    window.addEventListener("resize", this.handleResize);
    if (this.notHover) {
      window.addEventListener("mousedown", this.handleMouseDownNotHover);
    }

    window.addEventListener("touchstart", this.handleMouseDownNotHover);
  },
  beforeUnmount() {
    this.activeTooltip = false;
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("mousedown", this.handleMouseDownNotHover);
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

