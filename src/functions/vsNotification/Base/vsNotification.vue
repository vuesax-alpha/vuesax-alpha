<template>
  <transition 
    name="notification"
    @before-enter="transitionBeforeEnter"
    @enter="transitionEnter"
    @leave="transitionLeave"
  >
    <div 
      v-if="isVisible" 
      class="vs-notification"
      :class="bindRootClass"  
      @click="handleRootClick"
    >
      <template v-if="!loading">
        <template v-if="icon">
          <div v-if="typeof icon === 'string'" class="vs-notification__icon" v-html="icon"></div>
          <div v-else class="vs-notification__icon">
            <component class="vs-notification__icon" :is="icon"></component>
          </div>
        </template>
        <template v-else></template>

        <div class="vs-notification__content">
          <div v-if="title" class="vs-notification__content__header"><h4>{{ title }}</h4></div>
          <template v-else></template>
          
          <div v-if="text" class="vs-notification__content__text"><p>{{ text }}</p></div>
          <template v-else></template>

          <div v-if="typeof content === 'string'" v-html="content"></div>
          <component :is="content" v-else-if="content" />
          <template v-else></template>
        </div>
      </template>
      <div v-else class="vs-notification__loading"></div>      

      <button 
        v-if="buttonClose" 
        class="vs-notification__close"
        @click="close"
      >
        <icon-close hover="less" />
      </button>
      <template v-else></template>

      <div v-if="Number(progress) !== 0" class="vs-notification__progress" :style="{ width: `${progress}%` }"></div>
      <template v-else></template>
    </div>
  </transition>
</template>

<script lang="ts">
import { App, defineComponent, getCurrentInstance } from "vue";
import { nextTick } from "vue";
import { removeBody, setColor } from "@/util";
import { NotificationData } from "./types";
import iconClose from "@/components/icons/Close.vue";

export default defineComponent({
  name: "vsNotification",
  components: { iconClose },
  data: (): NotificationData & {
    instance?    : App,
    progressAuto?: boolean;
  } => ({
    content          : undefined,
    title            : undefined,
    text             : undefined,
    color            : null,
    border           : null,
    icon             : null,
    flat             : false,
    sticky           : false,
    square           : false,
    onClick          : undefined,
    onClickClose     : undefined,
    clickClose       : false,
    buttonClose      : true,
    onDestroy        : undefined,
    width            : undefined,
    loading          : false,
    notPadding       : undefined,
    classNotification: undefined,
    progressAuto     : false,
    isVisible        : false,
    progress         : 0,
    duration         : 4000,
    intervalProgress : null,
    countProgress    : 0,
    instance         : undefined
  }),
  computed: {
    bindRootClass() {
      return [
        { 'vs-notification--color': this.color },
        { 'vs-notification--border': this.border },
        { 'vs-notification--icon': this.icon },
        { 'vs-notification--onClick': this.onClick },
        { 'vs-notification--onClickClose': this.onClickClose },
        { 'vs-notification--flat': this.flat },
        { 'vs-notification--sticky': this.sticky },
        { 'vs-notification--square': this.square },
        { 'vs-notification--width-all': this.width == '100%' },
        { 'vs-notification--width-auto': this.width == 'auto' },
        { 'vs-notification--loading': this.loading },
        { 'vs-notification--notPadding': this.notPadding },
        this.classNotification
      ];
    },
  },
  watch: {
    isVisible() {
      nextTick(() => {
        if (this.color) setColor('color', this.color, this.$el);
        if (this.border) setColor('border', this.border, this.$el)
      })  
    }
  },
  methods: {
    close() { 
      this.isVisible = false; 
    },
    transitionBeforeEnter(el: HTMLElement) {
      el.style.maxHeight = `0`;
      el.style.padding = `0 20px`;
    },
    transitionEnter(el: HTMLElement, done: any) {
      const h = el.scrollHeight;
      el.style.maxHeight = `${h + 40}px`;
      if (window.innerWidth < 600) {
        el.style.padding = `15px`;
      } else {
        el.style.padding = `20px`;
      }
      done();
    },
    transitionLeave(_: any, done: any) {
      const parent = this.$el.parentElement;
      const expectNodeVIf = [...parent.childNodes as any].filter(e => e.data != 'v-if');
      setTimeout(() => {
        done();
        if (expectNodeVIf.length === 1) {
          removeBody(parent);
        } else {
          removeBody(this.$el, parent);
        }
        this.instance?.unmount();
        this.onDestroy?.();
      }, 150);
    },
    handleRootClick() {
      this.onClick?.()
      if (this.clickClose) {
        this.close()
        this.onClickClose?.()
      }
    },
  },
  mounted() {
    this.instance = getCurrentInstance()?.appContext.app;
  },
  beforeUpdate() {
    if (this.progressAuto) {
      this.intervalProgress = setInterval(() => {
        (this.progress as number)++;
      }, (Number(this.duration) / 100));
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalProgress);
  },
});
</script>

<style lang="scss" src="./style.scss"></style>
