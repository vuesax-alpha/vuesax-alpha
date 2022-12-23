<template>
  <CodeCopied :copied="copied" :text="'Copied'" />
  <div class="command" ref="$el">
    <div class="copy">
      <div title="Copy code" class="con-copy" :class="{ copied }" @click="copy">
        <i v-if="!copied" class="bx bx-clipboard"></i>
        <i v-else class="bx bx-check"></i>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, useSlots, onBeforeMount } from "vue";
import CodeCopied from "../components/CodeCopied.vue";

import { clipboard } from "../util";

const slots = useSlots();

const $el = ref<HTMLElement>();

const copied = ref<boolean>(false);

const copy = () => {
  const text = $el.value?.textContent || "";

  clipboard(text);

  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 1000);
};

onBeforeMount(() => {
  console.log(slots);
});
</script>

<style lang="scss">
@import "../styles/use";

.command {
  z-index: 300;
  transition: all 0.25s ease;
  position: relative;

  border-radius: 20px;
  overflow: hidden;
  margin: 20px 0;
  width: 100%;
 
  .copy {
    position: absolute;
    top: 10px;
    right: 24px;
    z-index: 3;
    color: aliceblue;
    cursor: pointer;
    border-radius: 15px;
    
    &:hover {
      background-color: #1f2937;
    }

    .con-copy {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      transition: all 0.25s ease;
      opacity: 0;
      visibility: hidden;
        
      &.copied {
        i {
          color: #22c55e;
        }
        transform: scale(1.3) !important;
        opacity: 1;
        visibility: visible;
      }
    }
  }
 
  &:hover {
    .con-copy {
      opacity: 1;
      visibility: visible;
    }
  }

}
</style>
