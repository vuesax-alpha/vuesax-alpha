<template>
  <transition 
    name="loading"
    @leave="transitionLeave"
  >
    <div v-if="isVisible" class="vs-loading" :class="bindRootClass">
      <div class="vs-loading__load" :style="[{ transform: `scale(${scale})` }]">
        <div class="vs-loading__load__animation">
          <div v-if="percent" class="vs-loading__load__percent">{{ percent }}</div>
          <template v-else></template>

          <template v-if="type === 'default'"><icon-loading/></template>
          <template v-else></template>

          <div class="vs-loading__load__animation__item vs-loading__load__animation__1"></div>
          <div class="vs-loading__load__animation__item vs-loading__load__animation__2"></div>
          <div class="vs-loading__load__animation__item vs-loading__load__animation__3"></div>
          
          <template v-if="type === 'ball'">
            <div class="shadow shadow__1"></div>
            <div class="shadow shadow__2"></div>
            <div class="shadow shadow__3"></div>
          </template>
          <template v-else></template>
        </div>
        
        <div v-if="text" class="vs-loading__load__text">{{ text }}</div>
        <template v-else></template>
      </div>
      <div v-if="progress" class="vs-loading__progress">
        <div class="vs-loading__progress__bar" :style="[{ width: `${progress}%` }]"></div>
      </div>
      <template v-else></template>
    </div>
  </transition>
</template>

<script lang="ts">
import { App, defineComponent, getCurrentInstance } from "vue";
import { removeBody, setColor, setVar } from '@/util';
import { LoadingData } from "./types"
import iconLoading from "@/components/icons/Loading.vue";

export default defineComponent({
    name: "vsLoading",
    data: (): LoadingData & {
        instance?: App;
        isDirective?: boolean;
    } => ({
        text: undefined,
        type: "default",
        color: undefined,
        background: undefined,
        opacity: undefined,
        percent: undefined,
        progress: 0,
        scale: undefined,
        target: undefined,
        isVisible: false,
        instance: undefined,
        isDirective: false,
    }),
    watch: {
        isVisible() {
            this.$nextTick(() => {
                if (this.color)
                    setColor("color", this.color, this.$el);
                if (this.background)
                    setColor("background", this.background, this.$el);
                if (this.opacity)
                    setVar("opacity", this.opacity, this.$el);
            });
        },
    },
    computed: {
        bindRootClass() {
            return [
                `vs-loading--${this.type || "default"}`,
                { "vs-loading--target": !!this.target },
                { "vs-loading--background": !!this.background },
            ];
        },
    },
    methods: {
        close() {
            this.isVisible = false;
        },
        transitionLeave(_: any, done: any) {
            setTimeout(() => {
                done();
                removeBody(this.$el, this.$el.parentElement);
                if (this.isDirective === false) {
                    this.instance?.unmount();
                }
            }, 2);
        },
    },
    mounted() {
        this.instance = getCurrentInstance()?.appContext.app;
    },
    components: { iconLoading }
});
</script>

<style lang="scss" src="./style.scss"></style>
