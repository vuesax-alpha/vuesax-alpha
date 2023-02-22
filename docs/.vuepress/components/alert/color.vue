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

    <vs-button :active="color == 'primary'" flat @click="color = 'primary'">
      Primary
    </vs-button>
    <vs-button
      :active="color == 'success'"
      success
      flat
      @click="color = 'success'"
    >
      Success
    </vs-button>
    <vs-button
      :active="color == 'danger'"
      danger
      flat
      @click="color = 'danger'"
    >
      Danger
    </vs-button>
    <vs-button :active="color == 'warn'" warn flat @click="color = 'warn'">
      Warn
    </vs-button>
    <vs-button :active="color == 'dark'" dark flat @click="color = 'dark'">
      Dark
    </vs-button>
    <vs-button
      :active="color == '#7d33ff'"
      color="#7d33ff"
      flat
      @click="color = '#7d33ff'"
    >
      HEX
    </vs-button>
    <vs-button
      :active="color == 'rgb(59,222,200)'"
      color="rgb(59,222,200)"
      flat
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
