<template>
  <div 
    class="vs-avatar-content"
    :class="bindClass"
    :style="bindStyle"
  >
    <div v-if="loading" class="vs-avatar__loading">
      <div class="vs-avatar__loading__animate">
        <icon-loading />
      </div>
    </div>
    <template v-else></template>

    <div 
      class="vs-avatar"
      :class="{[`vs-avatar--letter--${textLength}`]: textLength > 2}"
    >
      <div v-if="$slots.text">{{ getText }}</div>
      <template v-else></template>

      <slot></slot>
    </div>
    <div
      v-if="$slots.badge || badge"
      class="vs-avatar__badge"
      :class="[{ isSlot: $slots.badge, writing: writing }, badgePosition]"
    >
      <div v-if="writing" class="vs-avatar__points">
        <div class="vs-avatar__points__point"></div>
        <div class="vs-avatar__points__point"></div>
        <div class="vs-avatar__points__point"></div>
      </div>
      <slot v-else name="badge"></slot>
    </div>
    <template v-else></template>
    <div 
      v-if="isLatest" 
      class="vs-avatar__latest"
      v-show="getParent()?.avatars.length - index - 1 !== 0"
    >{{ `+${getParent()?.avatars.length - index - 1}` }}</div>
    <template v-else></template>

    <div v-if="$slots.icons" class="vs-avatar__icons"><slot name="icons"></slot></div>
    <template v-else></template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseComponent from "@/mixins/component.vue";
import { setColor } from "@/util";
import { isArray } from "lodash";
import iconLoading from "@/components/icons/Loading.vue";

export default defineComponent({
  name: "vsAvatar",
  extends: BaseComponent,
  props: {
    badgePosition: String,
    pointer: Boolean,
    circle: Boolean,
    square: Boolean,
    history: Boolean,
    historyGradient: Boolean,
    loading: Boolean,
    writing: Boolean,
    badge: Boolean,
    badgeColor: String,
    size: String,
  },
  components: { iconLoading },
  data: () => ({
    textLength: 0,
    countPlus: 0,
    index: 0,
  }),
  computed: {
    getText(): string { // split text: 'Evan You' -> EY, lyli -> lyli
      const [nodeText] = this.$slots.text?.() as any; // only get text in one tag on slots text. And not deep
      if (isArray(nodeText.children)) {
        throw new Error("Required $slots.text: one tag HTMLElement or text only required");
      } else {
        let text: string = nodeText.children.trim() as string;
        let getLetters: string[] = [text];
        if (text.length > 5) {
          getLetters = text.split(/\s/g).map((item: string) => {
            return item[0];
          });
          this.textLength = getLetters.length;
        } else {
          this.textLength = getLetters[0].length;
        }
        return getLetters.join('');
      }
    },
    isHidden() { // for avatar group
      return (
        this.getParent() &&
        this.getParent().max &&
        this.index > Number(this.getParent().max) - 1
      );
    },
    isLatest() { // for avatar group
      return this.getParent() && this.index == Number(this.getParent().max) - 1;
    },
    bindStyle() {
      return [
        `width: ${this.size}px`,
        `height: ${this.size}px`,
        { [`cursor`]: this.pointer ? 'pointer' : '' },
        { ['--vs-color']: this.color ? this.getColor : '' }
      ];
    },
    bindClass() {
      return [{
          'history': this.history,
          'history--gradient': this.historyGradient,
          'vs-avatar-content--circle': this.circle,
          'vs-avatar-content--square': this.square,
          'vs-avatar-content--hidden': this.isHidden,
          'vs-avatar-content--latest': this.isLatest,
          'vs-avatar-content--hasIcons': this.$slots.icons,
          // [`vs-avatar-content--size`]: this.size,
        },
        // colors
        { [`vs-component--primary`] : !!this.primary },
        { [`vs-component--danger`] : !!this.danger },
        { [`vs-component--warn`] : !!this.warn },
        { [`vs-component--success`] : !!this.success },
        { [`vs-component--dark`] : !!this.dark },
        { [`vs-component--is-color`] : !!this.isColor },
      ]
    }
  },
  methods: {
    getParent() { // for avatar group
      return (this.$parent as any).vsAvatarGroup && (this.$parent as any);
    },
  },
  watch: {
    "$slots.text"() {
      console.log("cambio el slot");
    },
    badgeColor() {
      setColor("badge", this.badgeColor ?? "primary", this.$el);
      (this.$el as HTMLElement).classList.add("vs-change-color-badge");
    },
  },
  mounted() {
    setColor("badge", this.badgeColor ?? "primary", this.$el);
    this.$el.classList.add("vs-change-color-badge");
    if (this.getParent()) {
      this.index = this.getParent().avatars.length;
      this.getParent().avatars.push(this);
    }
  },
});
</script>

<style lang="scss" src="./style.scss"></style>
