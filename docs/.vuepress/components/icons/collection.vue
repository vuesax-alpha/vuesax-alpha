<script setup lang="ts">
import { computed, ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { VsNotification } from 'vuesax-alpha'
import * as VuesaxIconsVue from '@vuesax-alpha/icons-vue'

const copyIconVue = ref(true)
const iconNameFilter = ref('')

const { copy } = useClipboard()

const copyContent = async (content) => {
  try {
    await copy(content)

    VsNotification({
      showClose: true,
      content: 'Copied',
      border: 'success',
      position: 'top-center',
    })
  } catch {
    VsNotification({
      showClose: true,
      content: 'Error',
      border: 'danger',
      position: 'top-center',
    })
  }
}

const copyIcon = async (name, refs) => {
  if (copyIconVue.value) {
    await copyContent(`<vs-icon><${name} /></vs-icon>`)
  } else {
    const content = refs[name]?.[0]?.$el.querySelector('svg')?.outerHTML ?? ''
    await copyContent(content)
  }
}

const iconFiltered = computed<typeof VuesaxIconsVue>(
  () =>
    Object.keys(VuesaxIconsVue)
      .filter((key) =>
        key.toLowerCase().includes(iconNameFilter.value.toLowerCase())
      )
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: VuesaxIconsVue[key],
        })
      }, {}) as any
)
</script>

<template>
  <div class="center">
    <div style="width: 100%">
      <div class="header">
        <vs-input
          v-model="iconNameFilter"
          label="Search"
          placeholder="Type icon name"
        />

        <div class="icon-type">
          <span>Copy SVG</span>
          <vs-switch v-model="copyIconVue" />
          <span>Copy Icon</span>
        </div>
      </div>

      <vs-row class="row">
        <vs-col
          v-for="icon in iconFiltered"
          :key="icon.name"
          :ref="icon.name"
          :sm="2"
          class="col"
          @click="copyIcon(icon.name, $refs)"
        >
          <vs-icon :size="30">
            <component :is="icon" />
          </vs-icon>
          <span class="icon-name">
            {{ icon.name }}
          </span>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@function -color($color, $alpha: 1) {
  @return unquote('rgba(var(--vs-#{$color}), #{$alpha})');
}

.col {
  padding: 16px;
  border: 0.5px solid -color(text, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  user-select: none;

  &:hover {
    background-color: -color(gray-4, 0.3);
  }

  .icon-name {
    font-size: 10px;
    margin-top: 12px;
  }
}

.header {
  display: flex;
  gap: 30px;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  margin: 20px 0;

  .icon-type {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
  }
}
</style>
