<template>
  <CodeCopied :copied="copied" :text="'Copied'" />
  <div class="command">
    <div v-if="isMultipleSlot" class="tabs">
      <svg
        class="tab-effect tab-effect1"
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="160"
        viewBox="0 0 160 160"
      >
        <path
          id="Trazado_200"
          data-name="Trazado 200"
          d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
          transform="translate(0 10)"
        />
      </svg>
      <svg
        class="tab-effect tab-effect2"
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="160"
        viewBox="0 0 160 160"
      >
        <path
          id="Trazado_200"
          data-name="Trazado 200"
          d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
          transform="translate(0 10)"
        />
      </svg>

      <div ref="$tab" class="active" />
      <div
        v-for="(slot, index) of slotsNames"
        :key="index"
        :ref="slotRefs.set"
        class="tab"
        @click="activeSlot = index"
      >
        {{ slot }}
      </div>
    </div>
    <div class="copy">
      <div
        title="Copy code"
        class="con-copy"
        :class="{ copied }"
        @click="copy($el.textContent)"
      >
        <i v-if="!copied" class="bx bx-clipboard" />
        <i v-else class="bx bx-check" />
      </div>
    </div>

    <div ref="$el" class="slots">
      <template v-if="isMultipleSlot">
        <template v-for="(slot, index) of slotsNames" :key="index">
          <slot v-if="activeSlot === index" :name="slot" />
        </template>
      </template>

      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, useSlots, watchPostEffect } from 'vue'
import { useClipboard, useTemplateRefsList } from '@vueuse/core'
import CodeCopied from '../components/CodeCopied.vue'

const slots = useSlots()

const slotsNames = Object.keys(slots)
const isMultipleSlot = slotsNames.length > 1

const $el = ref<HTMLElement>()
const $tab = ref<HTMLElement>()
const slotRefs = useTemplateRefsList<HTMLDivElement>()
const activeSlot = ref(0)

const { copied, copy } = useClipboard({
  legacy: true,
})

if (isMultipleSlot) {
  watchPostEffect(() => {
    if ($tab.value) {
      $tab.value.style.width = `${
        slotRefs.value[activeSlot.value].clientWidth
      }px`
      $tab.value!.style.height = `${
        slotRefs.value[activeSlot.value].clientHeight
      }px`
      $tab.value!.style.top = `${slotRefs.value[activeSlot.value].offsetTop}px`
      $tab.value!.style.left = `${slotRefs.value[activeSlot.value].offsetLeft}px`
    }
  })
}
</script>

<style lang="scss">
@import '../styles/use';

.command {
  z-index: 300;
  transition: all 0.25s ease;
  position: relative;

  border-radius: 20px;
  overflow: hidden;
  margin: 20px 0;
  width: 100%;

  .tabs {
    position: relative;
    top: 1px;
    display: inline-flex;
    height: 48px;
    border-radius: 20px 25px 0 0;
    margin-left: 18px;
    gap: 4px;
    // color: -color(text-color);
    background: -color(theme-code);
    padding: 6px;
    padding-right: 9px;

    ~ div {
      div[class*='language-'] {
        border-radius: 20px 10px 20px 20px;
      }
    }

    .tab-effect {
      position: absolute;
      max-width: 40px;
      max-height: 40px;
      z-index: -1;
      pointer-events: none;
      fill: rgba(var(--vsd-theme-code), 1);

      &.tab-effect1 {
        transform: rotate(72deg) scale(0.6);
        left: -87px;
        bottom: -14px;
      }
      &.tab-effect2 {
        right: -96px;
        bottom: -4px;
        transform: rotate(-181deg);
      }
    }

    .tab {
      border-radius: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      // cursor: pointer;
      color: rgb(240, 234, 234, 0.84);
      padding: 2px 12px;
      // #e0e6ec
      // background: -color(theme-code);
      z-index: 3;
    }

    .active {
      border-radius: 14px;
      position: absolute;
      background: rgba($color: #fff, $alpha: 0.2);
      transition: all 0.25s ease;
      z-index: 0;
    }

    ~ .copy {
      top: 58px;
    }
  }

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

  .slots {
    border-radius: 20px;
    background: -color(theme-code);
    // padding: 1.25rem 1.5rem;
  }

  &:hover {
    .con-copy {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
