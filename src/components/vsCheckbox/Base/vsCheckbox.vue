<template>
  <div
    class="vs-checkbox-content"
    :class="bindClass"
    :style="bindStyle"
  >
    <div class="vs-checkbox-con">
      <input
        v-bind="$attrs"
        type="checkbox"
        :value="val || notValue"
        :id="uid"
        class="vs-checkbox"
        :checked="checkedForce || isChecked"
        @input="listenerInput"
        @blur="listenerBlur"
      />
      <div class="vs-checkbox-mask">
        <icon-check v-if="!$slots.icon" :indeterminate="indeterminate" />
        <slot v-else name="icon"></slot>
      </div>
      
      <icon-loading v-if="loading"></icon-loading>
      <template v-else></template>
    </div>
    <label
      v-if="label || $slots.default"
      :for="uid"
      class="vs-checkbox-label"
      :class="lineThrough && 'lineThrough'"
    >
      <div v-if="label">{{ label }}</div>
      <slot v-else></slot>
    </label>
    <template v-else></template>

  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, useAttrs, watch } from "vue";
import component from "@/mixins/component.vue";
import { isArray, includes } from "lodash";

import iconCheck from "@/components/icons/Check.vue";
import iconLoading from "@/components/icons/Loading.vue";
import { computed } from "@vue/reactivity";

export default defineComponent({
  inheritAttrs: false,
  name: "vsCheckbox",
  extends: component,
  components: { iconCheck, iconLoading },
  emits: ["input", "blur", "mousedown", "update:modelValue"],
  props: {
    modelValue: [Boolean, String, Array],
    val: [String, Object],
    notValue: String,
    indeterminate: Boolean,
    lineThrough: Boolean,
    checked: Boolean,
    loading: Boolean,
    label: String,
    labelBefore: Boolean,
    checkedForce: Boolean,
  },
  setup(props, ctx) {
    const instance = getCurrentInstance()!;
    const uid = instance?.uid as unknown as string;
    const attrs = useAttrs();

    const isChecked = computed(() => {
      if (props.modelValue) {
        if (typeof props.modelValue == "boolean") return props.modelValue;
        if (isArray(props.modelValue)) {
          return (
            includes(props.modelValue, props.val) &&
            includes(JSON.stringify(props.modelValue), JSON.stringify(props.val))
          );
        }
        return attrs.hasOwnProperty("checked");
      }
      if (props.checkedForce && typeof props.checkedForce === 'boolean') return props.checkedForce;
      return false;
    });

    const emitModelValue = () => {
      if (typeof props.modelValue == "boolean") {
        ctx.emit("update:modelValue", !props.modelValue);
      } else if (isArray(props.modelValue) && props.modelValue !== null) {
        const array = props.modelValue;
        const containValue =
          includes(array, props.val) ||
          includes(JSON.stringify(array), JSON.stringify(props.val));
        let indexVal = 0;

        array.forEach((item, index) => {
          if (JSON.stringify(item) === JSON.stringify(props.val))
            indexVal = index;
        });

        if (!containValue) {
          array.push(props.val);
        } else {
          array.splice(indexVal, 1);
        }
        ctx.emit("update:modelValue", array);
      } 
      else {
        if (props.val !== props.modelValue) {
          ctx.emit("update:modelValue", props.val);
        } 
        else {
          ctx.emit("update:modelValue", props.notValue || null);
        }
      }
    }

    const listenerInput = (evs: Event) => {
      emitModelValue();
      ctx.emit("mousedown", evs);
    }

    const listenerBlur = (evs: Event) => {
      ctx.emit("blur", evs);
    }

    watch(() => props.indeterminate, (val) => {
      ctx.emit("update:modelValue", val)
    });

    onMounted(() => {
      if (props.checked || props.checkedForce) {
        // ctx.emit("update:modelValue", true);
        emitModelValue();
      }      
    })

    return {
      uid,
      isChecked,
      listenerBlur,
      listenerInput,
    };
  },
  computed: {
    bindStyle() {
      return {
        ['--vs-color']: this.color ? this.getColor : ''
      }
    },
    bindClass() {
      return {
        "vs-checkbox--checked": this.isChecked,
        "vs-checkbox--disabled": this.$attrs.hasOwnProperty("disabled"),
        "vs-checkbox--loading": this.loading,
        "vs-checkbox--label-before": this.labelBefore,
        // colors
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
      };
    },
  },
});
</script>

<style lang="scss" src="./style.scss"></style>
