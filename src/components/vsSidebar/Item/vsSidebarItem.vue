<template>
  <button class="vs-sidebar__item" :class="bindRootClass" @click="clickBtn">
    <div v-if="$slots.icon" class="vs-sidebar__item__icon">
      <slot name="icon"></slot>
    </div>
    <template v-else></template>

    <div v-if="!sidebar.reduce" class="vs-sidebar__item__text">
      <slot></slot>
    </div>
    <div v-else class="vs-sidebar__item__text-tooltip">
      <slot></slot>
    </div>

    <template v-if="$slots.arrow">
      <slot name="arrow"></slot>
    </template>
    <template v-else-if="arrow">
      <div class="vs-sidebar__item__arrow">
        <icon-arrow />
      </div>
    </template>
    <template v-else></template>
  </button>
</template>

<script lang="ts">
import { defineComponent, inject, useSlots, watch } from "vue";
import { useRouter } from "vue-router";
import BaseComponent from "@/mixins/component.vue";
import { SidebarContextKey } from "../type";
import { computed } from "@vue/reactivity";

import iconArrow from "@/components/icons/Arrow.vue";

export default defineComponent({
  name: "vsSidebarItem",
  extends: BaseComponent,
  components: {
    iconArrow,
  },
  props: {
    to: String,
    href: String,
    target: {
      type: String,
      default: "_blank",
    },
    modelValue: String,
    id: String,
    arrow: Boolean,
  },
  setup(props) {
    const router = useRouter();
    const slots = useSlots();

    const sidebar = inject(SidebarContextKey)!;

    const handleClick = () => {
      if (props.to) {
        router.push(props.to);
      } else if (props.href) {
        window.open(props.href, props.target);
      }
    };

    const clickBtn = () => {
      if (props.id) {
        sidebar?.handleClickItem(props.id);
      }
      handleClick();
    };

    const bindRootClass = computed(() => {
      return {
        active: sidebar.getValue.value === props.id,
        hasIcon: slots.icon,
      };
    });

    return { handleClick, bindRootClass, clickBtn, sidebar };
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

