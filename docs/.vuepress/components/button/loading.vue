<template>
  <div class="center">
    <vs-button loading :active="active == 0" @click="active = 0">
      Home
    </vs-button>

    <vs-button
      loading
      icon
      success
      flat
      :active="active == 1"
      @click="active = 1"
    >
      <i class="bx bxs-phone-call" />
    </vs-button>

    <vs-button loading danger border :active="active == 2" @click="active = 2">
      <i class="bx bxs-heart" /> Like
    </vs-button>

    <vs-button loading warn gradient :active="active == 3" @click="active = 3">
      Notifications <i class="bx bxs-bell-ring" />
    </vs-button>

    <vs-button
      loading
      icon
      color="#7d33ff"
      relief
      :active="active == 5"
      @click="active = 5"
    >
      <i class="bx bxs-paper-plane" />
    </vs-button>
    <vs-button
      loading
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
