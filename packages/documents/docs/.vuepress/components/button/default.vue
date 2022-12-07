<template>
  <div class="center">
    <vs-button
      :active="active == 0"
      @click="active = 0"
    >
      Active
    </vs-button>
    <vs-button
      :active="active == 1"
      @click="active = 1"
    >
      Default
    </vs-button>
    <vs-button disabled >Disabled</vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const active = ref<number>(0);
</script>