<template>
  <div
    class="vs-switch"
    :class="bindClass"
    @click="click"
    :style="bindStyle"
    type="checkbox"
  >
    <input
      :checked="checkedStatus"
      v-bind="$attrs"
      type="checkbox"
      class="vs-switch__input"
      @input="input"
    />
    <div class="vs-switch__circle">
      <slot name="circle"></slot>
      <icon-loading v-if="loading"></icon-loading>
      <template v-else></template>
    </div>
    <div v-if="$slots.on || $slots.default" ref="on" class="vs-switch__text on">
      <slot v-if="$slots.on" name="on"></slot>
      <slot v-else-if="$slots.default"></slot>
    </div>
    <template v-else></template>

    <div v-if="$slots.off || $slots.default" ref="off" class="vs-switch__text off">
      <slot v-if="$slots.off" name="off"></slot>
      <slot v-else-if="$slots.default"></slot>
    </div>
    <template v-else></template>
    
    <div class="vs-switch__background"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { includes, isArray } from "lodash";
import component from "@/mixins/component.vue";
import iconLoading from "@/components/icons/Loading.vue";

export default defineComponent({
  inheritAttrs: false,
  name: "vsSwitch",
  extends: component,
  emits: ["update:modelValue", "change", "click"],
  components: { iconLoading },
  props: {
    modelValue: {
      type   : [Array, Boolean],
      default: null
    },
    val: {
      type   : String,
      default: ''
    },
    notValue: {
      type   : String,
      default: ''
    },
    loading      : Boolean,
    square       : Boolean,
    indeterminate: Boolean,
    icon         : Boolean,
  },
  computed: {
    bindClass() {
      return [
        {
          "vs-switch--loading": this.loading,
          "vs-switch--square": this.square,
          "vs-switch--indeterminate": this.indeterminate,
          "vs-switch--icon": this.icon,
          "vs-switch--checked": this.checkedStatus,
          "vs-component--primary":
            !this.danger &&
            !this.success &&
            !this.warn &&
            !this.dark &&
            !this.color,
          "vs-component--danger": !!this.danger,
          "vs-component--warn": !!this.warn,
          "vs-component--success": !!this.success,
          "vs-component--dark": !!this.dark,
        },
      ];
    },
    checkedStatus() {
      if (this.modelValue) {
        if (typeof this.modelValue == "boolean") return this.modelValue;
        if (isArray(this.modelValue)) {
          return (
            includes(this.modelValue, this.val) ||
            includes(JSON.stringify(this.modelValue), JSON.stringify(this.val))
          );
        }
      }
      return false;
    },
    bindStyle() {
      return {
        "--vs-color": this.color ? this.getColor : "",
      };
    },
  },
  methods: {
    input(event: Event) {
      if (typeof this.modelValue == "boolean") {
        this.$emit("update:modelValue", !this.modelValue);
      } else if (isArray(this.modelValue) && this.modelValue !== null) {
        const array = this.modelValue;
        const containValue =
          includes(array, this.val) ||
          includes(JSON.stringify(array), JSON.stringify(this.val));
        let indexVal = 0;

        array.forEach((item, index) => {
          if (JSON.stringify(item) === JSON.stringify(this.val))
            indexVal = index;
        });

        if (!containValue) {
          array.push(this.val);
        } else {
          array.splice(indexVal, 1);
        }
        this.$emit("update:modelValue", array);
      } 
      else {
        if (this.val !== this.modelValue) {
          this.$emit("update:modelValue", this.val);
        } 
        else {
          this.$emit("update:modelValue", this.notValue || null);
        }
      }
      this.$emit("change", event);
    },
    click(event: Event) {
      this.$emit("click", event);
    },
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

