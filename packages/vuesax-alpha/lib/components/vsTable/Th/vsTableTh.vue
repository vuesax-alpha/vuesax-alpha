<template>
  <th ref="el$" class="vs-table__th" :class="{ sort: sort }">
    <div class="vs-table__th__content">
      <slot></slot>

      <div v-if="sort" class="vs-table__th__content__icons">
        <icon-arrow class="icon-sort-1"></icon-arrow>
        <icon-arrow class="icon-sort-2"></icon-arrow>
      </div>
      <template v-else></template>
    </div>
  </th>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
import BaseComponent from "@/mixins/component.vue";

import iconArrow from "@/components/icons/Arrow.vue";

export default defineComponent({
  name: "vsTh",
  extends: BaseComponent,
  components: { iconArrow },
  props: {
    sort: Boolean
  },
  setup() {
    const el$ = ref<HTMLElement>();

    onMounted(() => {
      el$.value!.style.width = `${el$.value!.scrollWidth}px`;
    });
    return { el$ }
  }
});
</script>

<style lang="scss" src="./style.scss"></style>