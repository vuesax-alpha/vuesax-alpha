<template>
  <div class="center">
    <vs-button :active="active == 0" @click="active = 0">
      <i class="bx bx-home-alt" /> Home
    </vs-button>

    <vs-button
      color="success"
      type="flat"
      :active="active == 1"
      @click="active = 1"
    >
      <i class="bx bxs-phone-call" /> Call
    </vs-button>

    <vs-button
      color="danger"
      type="border"
      :active="active == 2"
      @click="active = 2"
    >
      <i class="bx bxs-heart" /> Like
    </vs-button>

    <vs-button
      color="warn"
      type="gradient"
      :active="active == 3"
      @click="active = 3"
    >
      <i class="bx bxs-bell-ring" /> Notifications
    </vs-button>

    <vs-button color="#7d33ff" relief :active="active == 5" @click="active = 5">
      <i class="bx bxs-paper-plane" /> Send
    </vs-button>

    <vs-button
      color="rgb(59,222,200)"
      gradient
      :active="active == 6"
      @click="active = 6"
    >
      <i class="bx bxs-purchase-tag" /> Save
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref<number>(0)
</script>
