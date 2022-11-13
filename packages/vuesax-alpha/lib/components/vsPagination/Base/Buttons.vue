<template>
  <template v-for="(item, i) in array" :key="i">
    <slot :item="item" :name="dynamicNameSlot(item)"></slot>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "vsPaginationButtons",
  props: {
    array: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
  methods: {
    dynamicNameSlot(item: any) {
      if(item === "...>" || item === "<...") return 'dotted';
      return 'button'
    },
  },
});
</script>

<style lang="scss" scoped></style>
