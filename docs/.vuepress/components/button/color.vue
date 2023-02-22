<template>
  <div class="center">
    <vs-button :active="active == 0" @click="active = 0"> Default </vs-button>
    <vs-button
      color="success"
      type="flat"
      :active="active == 1"
      @click="active = 1"
    >
      Success
    </vs-button>
    <vs-button
      color="danger"
      type="border"
      :active="active == 2"
      @click="active = 2"
    >
      Danger
    </vs-button>
    <vs-button
      color="warn"
      type="gradient"
      :active="active == 3"
      @click="active = 3"
    >
      Warn
    </vs-button>
    <vs-button
      color="dark"
      type="shadow"
      :active="active == 4"
      @click="active = 4"
    >
      Dark
    </vs-button>
    <vs-button
      color="#7d33ff"
      type="relief"
      :active="active == 5"
      @click="active = 5"
    >
      HEX
    </vs-button>
    <vs-button
      color="rgb(59,222,200)"
      type="gradient"
      :active="active == 6"
      @click="active = 6"
    >
      RGB
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref<number>(0)
</script>
