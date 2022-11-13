<template>
  <div class="vs-avatar__group" :class="{ float }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseComponent from "@/mixins/component.vue";

export default defineComponent({
  name: "vsAvatarGroup",
  extends: BaseComponent,
  props: {
    max: [Number, String],
    float: Boolean,
  },
  data: (): {
    avatars: any[];
    vsAvatarGroup: boolean;
  } => ({
    avatars: [],
    vsAvatarGroup: true,
  }),
});
</script>

<style lang="scss" src="./style.scss"></style>
