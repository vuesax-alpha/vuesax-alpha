<template>
  <div class="vs-radio-content" :class="bindClass" :style="bindStyle">
    <div class="vs-radio">
      <input
        type="radio"
        :id="uid"
        :value="val"
        :name="name || modelValue"
        :checked="isChecked"
        @input="input"
      />
      <span class="vs-radio__effect">
        <span class="vs-radio__effect__icon" v-if="$slots.icon"
          ><slot name="icon"></slot
        ></span>
        <template v-else></template>

        <span v-if="loading" class="vs-radio__effect__loading">
          <icon-loading />
        </span>
        <template v-else></template>
      </span>
    </div>

    <label v-if="label || $slots.default" :for="uid" class="vs-radio__label">
      <template v-if="label">{{ label }}</template>
      <slot v-else></slot>
    </label>
    <template v-else></template>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import BaseComponent from "@/mixins/component.vue";
import iconLoading from "@/components/icons/Loading.vue";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: "vsRadio",
  extends: BaseComponent,
  emits: ["update:modelValue"],
  components: {
    iconLoading,
  },
  props: {
    modelValue: null,
    val: null,
    name: String,
    disabled: Boolean,
    loading: Boolean,
    label: String,
    labelBefore: Boolean,
  },
  setup(props, ctx) {
    const instance = getCurrentInstance()!;
    const uid = instance?.uid as unknown as string;

    const isChecked = computed(() => {
      // if (this.modelValue === undefined && this.val === undefined) return false;
      return props.modelValue === props.val;
    });

    const input = (evs: Event) => {
      if (props.loading) return;
      ctx.emit("update:modelValue", props.val);
    };

    return { uid, isChecked, input };
  },
  computed: {
    bindClass() {
      return [
        {
          disabled: this.disabled,
          loading: this.loading,
          active: this.isChecked,
          [`vs-radio__label__before`]: this.labelBefore,
        },
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
      ];
    },
    bindStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : "",
      };
    },
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

