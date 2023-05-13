<template>
  <div class="center alert-example">
    <vs-alert :color="color">
      <template #title> Vuesax Framework </template>
      Vuesax (pronounced / vjusacks: /, as view sacks) is a
      <b>UI components framework</b> created with
      <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for
      all types of developed from the frontend lover to the backend that wants
      to easily create your visual approach to the end user
    </vs-alert>

    <vs-button
      type="flat"
      :active="color == 'primary'"
      @click="color = 'primary'"
    >
      Primary
    </vs-button>
    <vs-button
      color="success"
      type="flat"
      :active="color == 'success'"
      @click="color = 'success'"
    >
      Success
    </vs-button>
    <vs-button
      color="danger"
      type="flat"
      :active="color == 'danger'"
      @click="color = 'danger'"
    >
      Danger
    </vs-button>
    <vs-button
      color="warn"
      type="flat"
      :active="color == 'warn'"
      @click="color = 'warn'"
    >
      Warn
    </vs-button>
    <vs-button
      color="dark"
      type="flat"
      :active="color == 'dark'"
      @click="color = 'dark'"
    >
      Dark
    </vs-button>
    <vs-button
      color="#7d33ff"
      type="flat"
      :active="color == '#7d33ff'"
      @click="color = '#7d33ff'"
    >
      HEX
    </vs-button>
    <vs-button
      color="rgb(59,222,200)"
      type="flat"
      :active="color == 'rgb(59,222,200)'"
      @click="color = 'rgb(59,222,200)'"
    >
      RGB
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const color = ref<string>('danger')
</script>

<style scoped lang="scss">
.alert-example {
  .vs-button--active {
    transform: translate(0, -5px);
    border-radius: 0px 0px 12px 12px;
  }
}
</style>
