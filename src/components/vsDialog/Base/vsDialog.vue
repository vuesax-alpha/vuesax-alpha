<template>
  <teleport to="body">
    <transition name="vs-dialog">
      <div
        ref="dialog-content"
        v-if="modelValue"
        class="vs-dialog-content"
        :class="{
          blur: blur,
          fullScreen: fullScreen,
        }"
        @click="clickDialog"
      >
        <div
          class="vs-dialog"
          :style="{ width: width }"
          :class="{
            'vs-dialog--fullScreen': fullScreen,
            'vs-dialog--rebound': rebound,
            'vs-dialog--notPadding': notPadding,
            'vs-dialog--square': square,
            'vs-dialog--autoWidth': autoWidth,
            'vs-dialog--scroll': scroll,
            'vs-dialog--loading': loading,
            'vs-dialog--notCenter': notCenter,
          }"
        >
          <div v-if="loading" class="vs-dialog__loading">
            <icon-loading />
          </div>

          <button
            v-if="!notClose"
            class="vs-dialog__close"
            @click="clickClose"
          >
            <icon-close :hover="'x'" />
          </button>

          <template v-if="$slots.header">
            <div class="vs-dialog__header">
              <slot name="header"></slot>
            </div>
          </template>
          <template v-else></template>

          <div class="vs-dialog__content" :class="{ notFooter: !$slots.footer }">
            <slot></slot>
          </div>

          <template v-if="$slots.footer">
            <div class="vs-dialog__footer">
              <slot name="footer"></slot>
            </div>
          </template>
          <template v-else></template>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import BaseComponent from "@/mixins/component.vue";

import iconLoading from "@/components/icons/Loading.vue";
import iconClose from "@/components/icons/Close.vue";

export default defineComponent({
  name: "vsDialog",
  extends: BaseComponent,
  components: {
    iconLoading,
    iconClose
  },
  props: {
    modelValue: {
      default: false,
      type: Boolean,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    fullScreen: {
      default: false,
      type: Boolean,
    },
    notClose: {
      default: false,
      type: Boolean,
    },
    preventClose: {
      default: false,
      type: Boolean,
    },
    notPadding: {
      default: false,
      type: Boolean,
    },
    overflowHidden: {
      default: false,
      type: Boolean,
    },
    blur: {
      default: false,
      type: Boolean,
    },
    square: {
      default: false,
      type: Boolean,
    },
    autoWidth: {
      default: false,
      type: Boolean,
    },
    scroll: {
      default: false,
      type: Boolean,
    },
    notCenter: {
      default: false,
      type: Boolean,
    },
    width: {
      default: null,
      type: String,
    },
    routerClose: {
      default: false,
      type: Boolean,
    },
  },
  emits: ["update:modelValue", "close"],
  setup(props, ctx) {
    const rebound = ref(false);

    const esc = (evs: KeyboardEvent) => {
      console.log(evs);
      if (evs.which == 27 && !props.preventClose) {
        ctx.emit("update:modelValue", false);
        ctx.emit("close");
      }
    };

    const addEsc = () => {
      window.addEventListener("keydown", esc);
    };

    const clickDialog = (evs: any) => {
      if (!evs.target.closest(".vs-dialog") && !props.preventClose) {
        ctx.emit("update:modelValue", !props.modelValue);
        ctx.emit("close");
      }

      if (props.preventClose && !evs.target.closest(".vs-dialog")) {
        rebound.value = true;
        setTimeout(() => {
          rebound.value = false;
        }, 300);
      }
    };

    const clickClose = () => {
      ctx.emit("update:modelValue", !props.modelValue);
      ctx.emit("close");
    };

    watch(
      () => props.modelValue,
      (val: boolean) => {
        if (val) {
          rebound.value = true;
          if (props.overflowHidden) {
            document.body.style.overflow = "hidden";
          }
        } else {
          rebound.value = false;
          if (props.overflowHidden) {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", esc);
          }
        }
      },
    );

    return {
      rebound,
      addEsc,
      clickDialog,
      clickClose
    };
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

