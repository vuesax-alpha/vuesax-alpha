<template>
  <div class="vs-input-parent" :class="bindRootClass" :style="bindRootStyle">
    <div
      class="vs-input-content"
      :class="[
        { [`vs-input-content--has-color`]: hasColor },
        { [`vs-input-content--has-label`]: label || labelPlaceholder },
        { ['vs-input-content-icon--after']: !!iconAfter },
      ]"
      @mouseenter="mouseEnterInput"
      @mouseleave="mouseLeaveInput"
    >
      <input
        v-bind="$attrs"
        class="vs-input vs-hide-clear"
        :class="[
          { ['vs-input--has-icon']: !!$slots.icon },
          { ['vs-input--has-icon--after']: !!iconAfter },
          { ['vs-input--has-icon--eye']: showPassword },
          { ['vs-input--has-icon--clearable']: clearable || type === 'search' }
        ]"
        :value="modelValue"
        placeholder=""
        :id="getId"
        :type="inputType"
        @input="inputEvent"
      />

      <label
        v-if="label"
        :for="getId"
        :class="[
          'vs-input__label',
          { 'vs-input__label--hidden': modelValue !== '' },
        ]"
      >
        {{ $attrs.placeholder }}
      </label>

      <label
        :for="getId"
        :class="[
          'vs-input__label',
          { 'vs-input__label--placeholder': labelPlaceholder },
          {
            'vs-input__label--hidden':
              (modelValue || modelValue === 0) ||
              $attrs.type == 'date' ||
              $attrs.type == 'time',
          },
          { 'vs-input__label--label': label },
        ]"
      >
        {{ label || $attrs.placeholder || labelPlaceholder }}
      </label>

      <template v-if="$slots.icon">
        <span
          class="vs-input__icon"
          :class="[
            { 'vs-input__icon--after': iconAfter },
            { 'vs-input__icon--click': !!$attrs['click-icon'] || true },
          ]"
          @click="clickIcon"
        >
          <slot name="icon"></slot>
        </span>
      </template>
      <template v-else></template>

      <div v-if="loading" class="vs-input__loading">
        <icon-loading></icon-loading>
      </div>
      <template v-else></template>

      <transition name="input-default-icon">
        <label
          :for="getId"
          v-if="showClearable"
          class="vs-input-content__clearable"
          @mouseenter="mouseEnterClearable"
          @mouseleave="mouseLeaveClearable"
        >
          <icon-close @click="clearOptions"></icon-close>
        </label>
      </transition>

      <label
        :for="getId"
        v-if="showPassword && type === 'password'"
        @click="handleShowPassword"
        class="vs-input-content__show--password"
      >
        <i v-if="isVisiblePassword" class="bx bx-show-alt"></i>
        <i v-else class="bx bx-hide"></i>
      </label>
      <template v-else></template>

      <div class="vs-input__affects">
        <div class="vs-input__affects__1"></div>
        <div class="vs-input__affects__2"></div>
      </div>
    </div>

    <div 
      v-if="progress && progress > 0"
      class="vs-input__progress"
      :class="[
        { 'vs-input__progress--danger': progress <= 33 },
        { 'vs-input__progress--warn': progress <= 66 && progress > 33 },
        { 'vs-input__progress--success': progress > 66 }
      ]"
    >
      <div class="vs-input__progress__bar" :style="{width: `${progress}%`}"></div>
    </div> 
    <template v-else></template>

    <template v-for="(type) in messageType">
      <Message>
        <div
          v-if="$slots[`message-${type}`]"
          class="vs-input__message"
          :class="[`vs-input__message--${type}`]"
        >
          <slot :name="`message-${type}`"></slot>
        </div>
      </Message>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, useAttrs } from "vue";
import BaseComponent from "@/mixins/component.vue";

import { PROPS } from "./type";
import { computed } from "@vue/reactivity";

import iconLoading from "@/components/icons/Loading.vue";
import iconClose from "@/components/icons/Close.vue";
import Message from "@/components/vsSelect/Base/Message.vue";

export default defineComponent({
  inheritAttrs: false,
  name: "vsInput",
  extends: BaseComponent,
  components: {
    iconLoading,
    iconClose,
    Message
  },
  props: PROPS,
  emits: ['update:modelValue', 'click-icon'],
  setup(props, ctx) {
    const instance = getCurrentInstance()!;
    const attrs = useAttrs();
    const messageType = ["success", "warn", "danger", "primary", "dark"];
    const targetInput     = ref(false);
    const targetClearable = ref<boolean>(false);
    const isVisiblePassword = ref(false);
    const InputId = instance.uid;

    const getId = computed(() => {
      return `vs-input--${attrs.id || InputId}`;
    });
    const inputType = computed(() => {
      if (props.showPassword) {
        if (!isVisiblePassword.value) return 'password';
        return 'text';
      }
      return props.type;
    });
    // Transition
    const transitionBeforeEnter = (el: HTMLElement) => {
      el.style.height = "0";
    };
    const transitionEnter = (el: HTMLElement, done: any) => {
      let h = el.scrollHeight;
      el.style.height = h - 1 + "px";
      done();
    };
    const transitionLeave = (el: HTMLElement) => {
      el.style.minHeight = "0px";
      el.style.height = "0px";
    };
    // input event
    const inputEvent = (evs: any) => {
      ctx.emit("update:modelValue", evs.target.value);
    };
    const mouseEnterInput = () => {
      targetInput.value = true;
    };
    const mouseLeaveInput = () => {
      targetInput.value = false;
    };
    const clickIcon = (evs: any) => {
      ctx.emit("click-icon", evs.target.value);
    };
    const handleShowPassword = () => {
      isVisiblePassword.value = !isVisiblePassword.value;
    }
    // clearable
    /** transition */
    const mouseEnterClearable = () => {
      targetClearable.value = true;
    };
    const mouseLeaveClearable = () => {
      targetClearable.value = false;
    };
    const showClearable = computed(() => {
      if ((!props.clearable && props.type != 'search' ) || props.disabled || props.loading) return false;
      if (!props.modelValue || props.modelValue === 0) return false;
      return targetInput.value;
    });
    const clearOptions = () => {
      if (props.disabled) return;
      ctx.emit("update:modelValue", null);
    }
    return {
      attrs,
      // state
      isVisiblePassword,
      messageType,
      // computed
      getId,
      showClearable,
      inputType,
      inputEvent,
      clickIcon,
      handleShowPassword,
      // clearable
      mouseEnterClearable,
      mouseLeaveClearable,
      clearOptions,
      // input
      mouseEnterInput,
      mouseLeaveInput,
      // transition
      transitionBeforeEnter,
      transitionEnter,
      transitionLeave,
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
        `vs-input-parent--state-${this.state}`,
        { "vs-input-parent--border": !!this.border },
        { "vs-input-parent--shadow": !!this.shadow },
        {
          [`vs-input-content--has-label`]: this.label || this.labelPlaceholder,
        },
        { block: this.block },
        { transparent: this.transparent },
        { textWhite: this.textWhite },
        { square: this.square },

        // colors
        {
          [`vs-component--primary`]:
            !this.danger &&
            !this.success &&
            !this.warn &&
            !this.dark &&
            !this.color,
        },
        { [`vs-component--danger`]: !!this.danger },
        { [`vs-component--warn`]: !!this.warn },
        { [`vs-component--success`]: !!this.success },
        { [`vs-component--dark`]: !!this.dark },
        { [`vs-component--is-color`]: !!this.isColor },
      ];
    },
    hasColor() {
      return (
        this.color ||
        this.primary ||
        this.danger ||
        this.success ||
        this.dark ||
        this.warn
      );
    },
  },
});
</script>

<style lang="scss" src="./style.scss"></style>
