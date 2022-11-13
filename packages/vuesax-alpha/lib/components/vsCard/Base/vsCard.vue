<template>
  <div 
    :class="[
      'vs-card-content',
      `type-${type}`
    ]"
  >
    <div class="vs-card" v-bind="$attrs">
      <div v-if="$slots.img" class="vs-card__img">
        <slot name="img"></slot>
        <div v-if="$slots.interactions" class="vs-card__interactions">
          <slot name="interactions"></slot>
        </div>
        <template v-else></template>
      </div>
      <template v-else></template>

      <div v-if="$slots.text" class="vs-card__text">
        <div v-if="$slots.title" class="vs-card__title">
          <slot name="title"></slot>
        </div>
        <template v-else></template>

        <slot name="text"></slot>
      </div>
      <template v-else></template>

      <div v-if="$slots.buttons" class="vs-card__buttons">
        <slot name="buttons"></slot>
      </div>
      <template name="buttons"></template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import BaseComponent from "@/mixins/component.vue";

export default defineComponent({
  inheritAttrs: false,
  name: "vsCard",
  extends: BaseComponent,
  props: {
    type: {
      type: [String, Number],
      default: '1',
    },
  },
});
</script>

<style lang="scss" src="./style.scss"></style>