<template>
  <div
    ref="el$"
    class="vs-navbar-content"
    :class="bindRootClass"
    :style="bindRootStyle"
  >
    <div class="vs-navbar">
      <div v-if="isLeft" ref="left$" class="vs-navbar__left">
        <slot name="left"></slot>
      </div>
      <template v-else></template>
      <div v-if="isCenter" ref="center$" class="vs-navbar__center">
        <slot></slot>
      </div>
      <template v-else></template>
      <div v-if="isRight" ref="right$" class="vs-navbar__right">
        <slot name="right"></slot>
      </div>
      <template v-else></template>
    </div>

    <div
      v-if="!notLine"
      class="vs-navbar__line"
      :class="{ notTransition: lineNotTransition }"
      :style="{
        left: `${leftLine}px`,
        width: `${widthLine}px`,
      }"
    ></div>
    <template v-else></template>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, provide, ref, watch } from "vue";
import BaseComponent from "@/mixins/component.vue";
import { computed } from "@vue/reactivity";
import { NavbarContextKey } from "../type";

export default defineComponent({
  name: "vsNavbar",
  extends: BaseComponent,
  emits: ["update:modelValue", "collapsed"],
  props: {
    modelValue: null,
    fixed: Boolean,
    shadow: Boolean,
    shadowScroll: Boolean,
    hideScroll: Boolean,
    textWhite: Boolean,
    square: Boolean,
    paddingScroll: Boolean,
    notLine: Boolean,
    leftCollapsed: Boolean,
    centerCollapsed: Boolean,
    rightCollapsed: Boolean,
    targetScroll: String,
  },
  setup(props, ctx) {
    const el$ = ref<HTMLElement>();
    const left$ = ref<HTMLElement>();
    const right$ = ref<HTMLElement>();
    const center$ = ref<HTMLElement>();

    const leftLine = ref<number>(0);
    const widthLine = ref<number>(0);
    const scrollTop = ref<number>(0);
    const collapsedWidth = ref<number>(0);
    const hidden = ref<boolean>(false);
    const shadowActive = ref<boolean>(false);
    const paddingScrollActive = ref<boolean>(false);
    const lineNotTransition = ref<boolean>(false);
    const collapsedForced = ref<boolean>(false);

    const scroll = () => {
      const _scrollTop = props.targetScroll
        ? document.querySelector(props.targetScroll)!.scrollTop
        : window.pageYOffset;
      if (props.hideScroll) {
        if (Math.sign(_scrollTop - scrollTop.value) === 1) {
          hidden.value = true;
        } else {
          hidden.value = false;
        }
      }

      if (props.shadowScroll) {
        if (_scrollTop > 0) {
          shadowActive.value = true;
        } else {
          shadowActive.value = false;
        }
      }

      if (props.paddingScroll) {
        if (_scrollTop > 0) {
          paddingScrollActive.value = true;
        } else {
          paddingScrollActive.value = false;
        }
      }
      scrollTop.value = _scrollTop;
    };

    const handleScroll = () => {
      if (props.hideScroll || props.shadowScroll || props.paddingScroll) {
        if (props.targetScroll) {
          const scrollElement = document.querySelector(props.targetScroll);
          scrollElement?.addEventListener("scroll", scroll);
        } else {
          window.addEventListener("scroll", scroll);
        }
      }
    };

    const setModel = (id: string) => {
      ctx.emit("update:modelValue", id);
    };

    const setLeftLine = (left: number, transition: boolean = true) => {
      if (!transition) {
        lineNotTransition.value = true;
      } else {
        lineNotTransition.value = false;
      }
      nextTick(() => {
        leftLine.value = left;
      });
    };

    const setWidthLine = (width: number) => {
      nextTick(() => {
        widthLine.value = width;
      });
    };

    const handleResize = () => {
      const active: HTMLElement | null | undefined 
        = el$.value?.querySelector(".vs-navbar__item.active");
      if (active) {
        setLeftLine(active.offsetLeft, false);
      } else {
        widthLine.value = 0;
      }
      const navbar: any = el$.value;

      if (
        props.leftCollapsed ||
        props.centerCollapsed ||
        props.rightCollapsed
      ) {
        if (navbar.offsetWidth < collapsedWidth.value) {
          collapsedForced.value = true;
        }
      }

      if (collapsedForced.value) {
        ctx.emit("collapsed", true);
      } else {
        ctx.emit("collapsed", false);
      }

      if (navbar.offsetWidth < collapsedWidth.value) {
        ctx.emit("collapsed", true);
      } else {
        ctx.emit("collapsed", false);
        collapsedForced.value = false;
      }
    };

    const isLeft = computed(() =>
      props.leftCollapsed ? !collapsedForced.value : true,
    );
    const isRight = computed(() =>
      props.rightCollapsed ? !collapsedForced.value : true,
    );
    const isCenter = computed(() =>
      props.centerCollapsed ? !collapsedForced.value : true,
    );

    watch(
      [
        () => props.hideScroll,
        () => props.paddingScroll,
        () => props.shadowScroll,
      ],
      handleScroll,
    );

    onMounted(() => {
      nextTick(() => {
        if (el$.value && left$.value && center$.value && right$.value) {
          const left = left$.value;
          const center = center$.value;
          const right = right$.value;
          const navbar = el$.value;

          collapsedWidth.value =
            left.offsetWidth + center.offsetWidth + right.offsetWidth + 150;

          if (navbar.offsetWidth < collapsedWidth.value) {
            collapsedForced.value = true;
            ctx.emit("collapsed", true);
            widthLine.value = 0;
            handleResize();
          }
        }
      });

      handleScroll();
      window.addEventListener("resize", handleResize);
    });

    provide(NavbarContextKey, {
      setModel,
      setLeftLine,
      setWidthLine,
    });

    ctx.expose({
      setLeftLine,
      setModel,
      setWidthLine,
    });

    return {
      el$,
      left$,
      center$,
      right$,
      isLeft,
      isRight,
      isCenter,

      leftLine,
      widthLine,
      scrollTop,
      collapsedWidth,
      hidden,
      shadowActive,
      paddingScrollActive,
      lineNotTransition,
      collapsedForced,
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
          fixed: this.fixed,
          shadow: this.shadow,
          hidden: this.hidden,
          shadowActive: this.shadowActive,
          textWhite: this.textWhite,
          paddingScroll: this.paddingScroll,
          paddingScrollActive: this.paddingScrollActive,
          vsNavbarSquare: this.square,
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

