<template>
  <div class="vs-card__group">
    <button class="vs-card__group-prev" @click="handleClickPrevicon">
      <icon-arrow />
    </button>

    <vs-scrollbar show-always ref="cards$" view-class="vs-card__group-cards">
      <slot></slot>
    </vs-scrollbar>
    <div class="vs-card__group-space"></div>

    <button class="vs-card__group-next" @click="handleClickNexticon">
      <icon-arrow />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import BaseComponent from "@/mixins/component.vue";

import iconArrow from "@/components/icons/Arrow.vue";
import vsScrollbar from "@/components/vsScrollbar/Base/vsScrollbar.vue";

export default defineComponent({
  name: "vsCardGroup",
  extends: BaseComponent,
  components: {
    iconArrow,
    vsScrollbar,
  },
  setup() {
    const cards$ = ref<InstanceType<typeof vsScrollbar>>();

    const handleClickNexticon = () => {
      const cards = cards$.value!;
      cards.wrap$!.style.scrollBehavior = 'smooth';
      cards.scrollTo(cards.scrollView.scrollLeft + cards.view$!.clientWidth, 0);
      cards.wrap$!.style.scrollBehavior = 'unset';
    };
    const handleClickPrevicon = () => {
      const cards = cards$.value!;
      cards.wrap$!.style.scrollBehavior = 'smooth';
      cards.scrollTo(cards.scrollView.scrollLeft - cards.view$!.clientWidth, 0);
      cards.wrap$!.style.scrollBehavior = 'unset';
    };

    return {
      cards$,
      handleClickNexticon,
      handleClickPrevicon,
    };
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

