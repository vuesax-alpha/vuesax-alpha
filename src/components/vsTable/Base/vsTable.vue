<template>
  <div class="vs-table-content">
    <div v-if="$slots.header" class="vs-table__header">
      <slot name="header"></slot>
    </div>
    <template v-else></template>

    <div
      class="vs-table"
      :class="{
        isSelectedValue: modelValue,
        striped: striped,
        isMultipleSelected: isMultipleSelected,
      }"
    >
      <table>
        <thead ref="thead$" class="vs-table__thead">
          <slot name="thead"></slot>
        </thead>
        <tbody class="vs-table__tbody">
          <slot name="tbody"></slot>
        </tbody>

        <tbody class="vs-table__not-found">
          <tr>
            <td :colspan="colspan">
              <slot name="notFound">No matching records found</slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="$slots.footer" class="vs-table__footer">
      <slot name="footer"></slot>
    </div>
    <template v-else></template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, ref } from "vue";
import BaseComponent from "@/mixins/component.vue";
import { computed } from "@vue/reactivity";
import { isArray } from "@vue/shared";
import { TableContextKey } from "../type";

export default defineComponent({
  name: "vsTable",
  extends: BaseComponent,
  emits: ["update:modelValue"],
  props: {
    modelValue: null,
    striped: Boolean,
    loading: Boolean,
    // multiple: Boolean
  },
  setup(props, ctx) {
    const colspan = ref<number>(0);

    const thead$ = ref<HTMLElement>();

    const isMultipleSelected = computed(() => isArray(props.modelValue));

    const selectedMultiple = (val: any) => {
      const newVal = props.modelValue;
      if (props.modelValue.includes(val)) {
        newVal.splice(props.modelValue.indexOf(val), 1);
      } else {
        newVal.push(val);
      }

      ctx.emit("update:modelValue", newVal);
    };

    const selected = (val: any) => {
      if (isMultipleSelected.value) {
        selectedMultiple(val);
      } else {
        ctx.emit("update:modelValue", val);
      }
    };

    onMounted(() => {
      const tds = thead$.value?.querySelectorAll("th");
      colspan.value = tds?.length || 0;
    });

    provide(TableContextKey, {
      selected,
      colspan
    });

    return { colspan, thead$, isMultipleSelected, selected };
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

