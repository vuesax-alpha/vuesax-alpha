<template>
  <CodeCopied :copied="copied" />
  <div ref="$el" class="code">
    <header class="header-codex">
      <ul>
        <li
          v-if="codepen"
          title="Codepen"
          class="con-link"
          @click="openCodepen"
        >
          <i class="bx bxl-codepen" />
        </li>
        <template v-else />

        <li v-if="codesandbox" title="Codesandbox" @click="openCodesandbox">
          <svg
            t="1514359261842"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9197"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="15px"
            height="15px"
          >
            <path
              d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"
              p-id="9198"
            />
          </svg>
        </li>
        <template v-else />

        <li
          title="Copy code"
          :class="{ copied }"
          @click="copy($slotRefs[activeSlot].textContent)"
        >
          <i v-if="!copied" class="bx bx-clipboard" />
          <i v-else class="bx bx-check" />
        </li>

        <li
          :title="active ? 'hide code' : 'View code'"
          :class="{ active: active }"
          class="not-a con-link"
          @click="toggleCode"
        >
          <i v-if="!active" class="bx bx-code-alt" />

          <i v-else class="bx bx-hide" />
        </li>
      </ul>
    </header>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-show="active" ref="$codex" class="con-code">
        <ul ref="$ul" class="ul-codes">
          <li
            v-if="$slots.template"
            :class="{ active: activeSlot == 0 }"
            @click="activeSlot = 0"
          >
            Template
          </li>
          <template v-else />

          <li
            v-if="$slots.script"
            :class="{ active: activeSlot == 1 }"
            @click="activeSlot = 1"
          >
            Script
          </li>
          <template v-else />

          <li
            v-if="$slots.style"
            :class="{ active: activeSlot == 2 }"
            @click="activeSlot = 2"
          >
            Style
          </li>
          <template v-else />

          <li
            v-if="Object.keys($slots).length > 1"
            :class="{ active: activeSlot == 3 }"
            @click="activeSlot = 3"
          >
            All
          </li>
          <template v-else />
        </ul>
        <div class="con-codes">
          <CardTransitionCodes>
            <div
              v-if="activeSlot == 0"
              :ref="(el) => ($slotRefs[0] = el)"
              key="0"
              class="slot-template slots"
            >
              <slot name="template" />

              <CardFooter :active="active" @toggle-code="toggleCode" />
            </div>
            <template v-else />
          </CardTransitionCodes>
          <CardTransitionCodes>
            <div
              v-if="activeSlot == 1"
              :ref="(el) => ($slotRefs[1] = el)"
              key="1"
              class="slot-script slots"
            >
              <slot name="script" />

              <CardFooter :active="active" @toggle-code="toggleCode" />
            </div>
            <template v-else />
          </CardTransitionCodes>
          <CardTransitionCodes>
            <div
              v-if="activeSlot == 2"
              :ref="(el) => ($slotRefs[2] = el)"
              key="2"
              class="slot-style slots"
            >
              <slot name="style" />

              <CardFooter :active="active" @toggle-code="toggleCode" />
            </div>
            <template v-else />
          </CardTransitionCodes>
          <CardTransitionCodes>
            <div
              v-if="activeSlot == 3"
              :ref="(el) => ($slotRefs[3] = el)"
              key="3"
              class="slot-all slots"
            >
              <slot name="template" />
              <slot name="script" />
              <slot name="style" />

              <CardFooter :active="active" @toggle-code="toggleCode" />
            </div>
            <template v-else />
          </CardTransitionCodes>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { inject, nextTick, onMounted, ref, watch } from 'vue'
import { useClipboard } from '@vueuse/core'

import CardFooter from '../components/CardFooter.vue'
import CardTransitionCodes from '../components/CardTransitionCodes.vue'
import CodeCopied from '../components/CodeCopied.vue'
import { codesandboxContextKey, vsThemeKey } from '../type'
import type { activeSlotType } from '../type'

const props = defineProps<{
  codepen?: string
  codesandbox?: string
}>()

const $el = ref<HTMLElement>()
const $ul = ref<HTMLElement>()
const $codex = ref<HTMLElement>()
const $slotRefs = ref<any[]>([])

const active = ref<boolean>(false)
const activeSlot = ref<activeSlotType>(0)

const $vsTheme = inject(vsThemeKey)!
const $codesandbox = inject(codesandboxContextKey)!

const { copied, copy } = useClipboard({ legacy: true })

const toggleCode = () => {
  active.value = !active.value
}

const openCodepen = () => {
  window.open(props.codepen)
}

const openCodesandbox = () => {
  document.body.style.overflow = 'hidden'
  $codesandbox.url = props.codesandbox
}

// animation
const beforeEnter = (el: HTMLElement) => {
  el.style.height = `0`
}

const enter = (el: HTMLElement) => {
  const h = el.scrollHeight
  el.style.height = `${h - 1}px`
}

const leave = (el: HTMLElement) => {
  el.style.height = '0px'
}

watch(
  () => $vsTheme.openCode,
  (val) => {
    active.value = val
    localStorage.openCode = val
  }
)

watch(activeSlot, () => {
  nextTick(() => {
    const ul = $ul.value?.scrollHeight
    const h = $slotRefs.value[activeSlot.value].scrollHeight
    $codex.value!.style.height = `${h + ul - 1}px`
  })
})

onMounted(() => {
  $vsTheme.openCode = localStorage.openCode === 'true'
})
</script>

<style lang="scss">
@import '../styles/use';

.slot-all {
  & > div {
    &:nth-last-child(2) {
      pre {
        margin-bottom: 0px;
      }
    }
    &:last-child {
      div[class*='language-'] {
        border-radius: 0px 0px 20px 20px;
        pre {
          margin-bottom: 0px !important;
        }
      }
    }
  }
}
.con-codes {
  position: relative;
  width: 100%;
}
.slots {
  transition: all 0.25s ease;
  width: 100%;
  overflow: hidden;
  top: 0px;
  left: 0px;
  div {
    width: 100%;
    pre {
      width: 100%;
    }
  }
  & > div {
    &:last-child {
      div[class*='language-'] {
        border-radius: 0px 0px 20px 20px;
      }
    }
  }
}
.ul-codes {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin: 0px;
  li {
    list-style: none;
    padding: 10px;
    font-size: 0.75rem;
    opacity: 0.4;
    transition: all 0.25s ease;
    cursor: pointer;
    position: relative;
    color: #fff;
    user-select: none;
    &:after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%);
      height: 2px;
      width: 0%;
      background: #fff;
      transition: all 0.25s ease;
    }
    &:hover {
      opacity: 1;
    }
    &.active {
      opacity: 1;
      &:after {
        width: 100%;
      }
    }
  }
}
.code {
  background: -color('theme-layout');
  z-index: 300;
  position: relative;
  padding-bottom: 10px;
  transition: all 0.25s ease;
}
.input-transparent {
  position: absolute;
  z-index: 0;
  opacity: 0;
  bottom: 0px;
  right: 0px;
}
.con-code {
  display: block;
  transition: all 0.25s ease;
  background: -color('theme-code2');
  border-radius: 20px;
  width: calc(100% - 20px);
  margin: 0px 10px;
  div[class*='language-'] {
    border-radius: 0px;
  }
  pre {
    margin-top: 0px !important;
  }
}

.header-codex {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 0px;
    justify-content: center;
    width: 100%;
    padding: 0px 4px;
    align-items: stretch;
    padding-top: 10px;
    li {
      list-style: none;
      color: -color('theme-color');
      opacity: 0.6;
      padding: 3px 10px;
      transition: all 0.25s ease;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 12px;
      background: transparent;
      outline: none !important;
      &.copied {
        transform: scale(1.3);
        opacity: 1 !important;
        i {
          color: #46c93a !important;
        }
      }
      &:nth-last-child(3) {
        position: relative;
        padding-right: 15px;
        margin-right: 5px;
      }
      &:nth-last-child(3):after {
        content: '';
        position: absolute;
        right: 0px;
        height: 60%;
        top: 20%;
        width: 1px;
        background: -color('border-color', 1);
        display: block;
      }
      &.active {
        color: -color('accent-color') !important;
        opacity: 1;
        border-radius: 12px 12px 0px 0px;
        background: -color('theme-code2');
        i {
          color: #fff !important;
        }
      }
      &:hover {
        opacity: 1;
      }
      &:not(.not-a) {
        svg {
          transition: all 0.25s ease;
          fill: -color('text-color', 0.6);
          pointer-events: none;
        }
      }
    }
  }
}
.header-codex ul li svg,
.header-codex ul li i {
  max-width: 18px;
  fill: -color('theme-color') !important;
}

@media (max-width: 500px) {
  .code .con-code {
    width: 100%;
    margin: 0px;
  }
}
</style>
