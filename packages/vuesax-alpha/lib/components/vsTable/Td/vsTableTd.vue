<template>
  <td
    class="vs-table__td"
    :class="{
      isCheckbox: checkbox,
      isEdit: edit,
    }"
    @click="click"
  >
    <slot></slot>
  </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseComponent from "@/mixins/component.vue";

export default defineComponent({
  name: "vsTd",
  extends: BaseComponent,
  emits: ["click"],
  props: {
    checkbox: Boolean,
    edit: Boolean,
  },
  setup(_, ctx) {
    const click = (evs: any) => {
      ctx.emit("click", evs);
    };

    return { click };
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

