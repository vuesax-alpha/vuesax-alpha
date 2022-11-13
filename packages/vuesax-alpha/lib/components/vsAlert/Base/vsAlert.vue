<template>
  <transition 
    @before-enter="beforeEnter" 
    @leave="leave" 
    @enter="enter"
  >
    <div
      v-if="modelValue"
      class="vs-alert"
      :class="bindClass"
      :style="bindStyle"
    >
      <div ref="icon" v-if="$slots.icon" class="vs-alert__icon">
        <slot name="icon"></slot>
      </div>
      <template v-else></template>

      <div
        @click="handleClickHidden"
        class="vs-alert__title"
        :class="{ 'vs-alert__title--click__hidden': typeof hiddenContent === 'boolean' }"
        v-if="$slots.title"
      >
        <slot name="title"></slot>
        <icon-plus
          v-if="!closable && typeof hiddenContent === 'boolean'" 
          :less="!hiddenContent"
          @click.stop="handleClickHidden" 
        />
        <template v-else></template>
      </div>      
      <template v-else></template>

      <transition
        @before-enter="beforeEnter" 
        @leave="leave"
        @enter="enter"
        v-if="!hiddenContent"
      >
        <div ref="content" v-if="!hiddenContent" class="vs-alert__content">
          <div ref="text" class="vs-alert__content__text">
            <slot></slot>
            <slot :name="`page-${page}`"></slot>
          </div>
        </div>
      </transition>
      <template v-else></template>

      <button 
        v-if="closable"
        class="vs-alert__close"
        @click="handleClickClose"
      >
        <icon-close hover="less" />
      </button>
      <template v-else></template>

      <div v-if="$slots.footer" class="vs-alert__footer">
        <slot name="footer"></slot>
      </div>
      <template v-else></template>

      <div v-if="!!progress" class="vs-alert__progress">
        <div class="vs-alert__progress__bar" :style="{ width: `${progress}%` }"></div>
      </div>
      <template v-else></template>

      <div v-if="getTotalPages > 0" class="vs-alert__pagination">
        <button @click="handleClickPrevPage" v-text="'<'"></button>
        <span>{{ page }} / {{ getTotalPages }}</span>
        <button @click="handleClickNextPage" v-text="'>'"></button>
      </div>
      <template v-else></template>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import BaseComponent from "@/mixins/component.vue";
import iconClose from "@/components/icons/Close.vue";
import iconPlus from "@/components/icons/Plus.vue";

export default defineComponent({
  name: "vsAlert",
  extends: BaseComponent,
  emits: ['update:modelValue', 'update:hiddenContent', 'update:page'],
  props: {
    solid: Boolean,
    border: Boolean,
    shadow: Boolean,
    gradient: Boolean,
    flat: Boolean,
    relief: Boolean,
    hiddenContent: {
      type: Boolean,
      default: null
    },
    closable: Boolean,
    progress: {
      type: [Number, String],
      default: 0,
    },
    page: {
      type: [Number, String],
      default: 0,
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
    time: {
      type: [Number, String],
      default: 0,
    }
  },
  watch: {
    page() {
      const content = this.$refs.content as HTMLElement;
      content.style.minHeight = content.scrollHeight + "px";

      nextTick(() => {
        const el = this.$el as HTMLElement;
        el.style.height = this.$el.scrollHeight - 1 + "px";
      });
    },
    hiddenContent(val: boolean) {
      if (!this.modelValue) return;
      const el = this.$el as HTMLElement;
      const content = this.$refs.content as HTMLElement;
      if (!val) {
        el.style.height = "auto";
        setTimeout(() => {
          el.style.height = this.$el.scrollHeight - 1 + "px";
        }, 250);
      } else {
        el.style.height = this.$el.scrollHeight - content.scrollHeight + "px";
      }
    },
  },
  computed: {
    getTotalPages() {
      const keys = Object.keys(this.$slots).filter((item) => {
        return item.indexOf("page") !== -1;
      });
      return keys.length;
    },
    getPages() {
      const keys = Object.keys(this.$slots).filter((item) => {
        return item.indexOf("page") !== -1;
      });
      
      const values: any = [];
      keys.forEach((item) => {
        values.push(this.page == item.split("-")[1] && this.$slots[item]);
      });
      return values;
    },
    bindStyle() {
      return {
        ['--vs-color']: this.color ? this.getColor : '',
      }
    },
    bindClass() {
      return {
        [`vs-alert--solid`]: !!this.solid,
        [`vs-alert--border`]: !!this.border,
        [`vs-alert--shadow`]: !!this.shadow,
        [`vs-alert--gradient`]: !!this.gradient,
        [`vs-alert--flat`]: !!this.flat,
        [`vs-alert--relief`]: !!this.relief,
        [`vs-alert--pages`]: this.getPages.length > 0,

        // colors
        [`vs-component--primary`]:
          !this.danger &&
          !this.success &&
          !this.warn &&
          !this.dark &&
          !this.color,
        [`vs-component--danger`]: !!this.danger,
        [`vs-component--warn`]: !!this.warn,
        [`vs-component--success`]: !!this.success,
        [`vs-component--dark`]: !!this.dark,
      };
    },
  },
  mounted() {
    if (this.$el && this.$refs.content) {
      const el = this.$el as HTMLElement;
      el.style.height = this.$el.scrollHeight - 1 + "px";

      const content = this.$refs.content as HTMLElement;
      content.style.minHeight = content.scrollHeight + "px";
    }
  },
  methods: {
    beforeEnter(el: any) {
      el.style.height = 0;
    },
    enter(el: any, done: any) {
      let h = el.scrollHeight;
      el.style.height = h - 1 + "px";
      done();
    },
    leave(el: any, done: any) {
      done();
      el.style.minHeight = "0px";
      el.style.height = "0px";
    },
    handleClickClose() {
      this.$emit("update:modelValue", !this.modelValue);
    },
    handleClickHidden() {
      this.$emit("update:hiddenContent", !this.hiddenContent);
    },
    handleClickPrevPage() {
      if (this.page > 1) {
        this.$emit("update:page", Number(this.page) - 1);
      }
    },
    handleClickNextPage() {
      if (this.page < this.getTotalPages) {
        this.$emit("update:page", Number(this.page) + 1);
      }
    },
  },
  components: {
    iconPlus,
    iconClose
  }
});
</script>

<style lang="scss" src="./style.scss"></style>
