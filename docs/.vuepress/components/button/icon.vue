<template>
  <div class="center">
    <vs-button icon :active="active == 0" @click="active = 0">
      <i class="bx bx-home-alt" />
    </vs-button>

    <vs-button icon success flat :active="active == 1" @click="active = 1">
      <i class="bx bxs-phone-call" />
    </vs-button>

    <vs-button icon danger border :active="active == 2" @click="active = 2">
      <i class="bx bxs-heart" />
    </vs-button>

    <vs-button icon warn gradient :active="active == 3" @click="active = 3">
      <i class="bx bxs-bell-ring" />
    </vs-button>

    <vs-button
      icon
      color="#7d33ff"
      relief
      :active="active == 5"
      @click="active = 5"
    >
      <i class="bx bxs-paper-plane" />
    </vs-button>

    <vs-button
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active == 6"
      @click="active = 6"
    >
      <i class="bx bxs-purchase-tag" />
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref<number>(0)
</script>
