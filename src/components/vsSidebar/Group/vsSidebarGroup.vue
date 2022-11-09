<template>
  <div ref="el$" class="vs-sidebar__group" :class="{ open: openState }">
    <div class="vs-sidebar__group__header" @click="openState = !openState">
      <slot name="header"></slot>
    </div>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div ref="content$" class="vs-sidebar__group__content" v-show="openState">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, nextTick, onMounted, provide, ref, watch } from "vue";
import BaseComponent from "@/mixins/component.vue";
import { GroupContextKey } from "../type";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: "vsSidebarGroup",
  extends: BaseComponent,
  props: {
    open: Boolean,
  },
  setup(props) {
    const group = true;
    const openState = ref(false);

    const el$ = ref<HTMLElement>();
    const content$ = ref<HTMLElement>();

    const parent = inject(GroupContextKey, undefined);

    watch(
      () => props.open,
      (val: boolean) => {
        nextTick(() => {
          const h = content$.value?.scrollHeight || 0;
          if (parent?.group) {
            const parentContent = parent.refs.content$.value!;
            if (val) {
              parentContent.style.height = `${
                parentContent.scrollHeight + h - 1
              }px`;
            } else {
              parentContent.style.height = `${
                parentContent.scrollHeight - h + 1
              }px`;
            }
          }
        });
      },
    );

    const handleClickItem = (id: string) => {
      parent?.handleClickItem(id);
    };

    const getValue = computed(() => {
      return parent?.getValue;
    });

    const enter = (el: HTMLElement, done: any) => {
      const h = el.scrollHeight;
      el.style.height = h - 1 + "px";

      done();
    };

    const beforeEnter = (el: HTMLElement) => {
      el.style.height = "0";
    };

    const leave = (el: HTMLElement) => {
      el.style.minHeight = "0px";
      el.style.height = "0px";
    };

    onMounted(() => {
      if (el$.value?.querySelector('.active') || props.open) {
        openState.value = true
      }
    });

    provide(GroupContextKey, {
      group,
      refs: { content$ },
      handleClickItem,
      getValue,
    });

    return { openState, beforeEnter, enter, leave };
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

