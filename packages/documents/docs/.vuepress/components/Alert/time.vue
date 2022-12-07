<template>
  <div class="center">
    <vs-button flat @click="active = true">Open Alert 10s</vs-button>
    <vs-alert :progress="progress" v-model="active">
      <template #title> Vuesax Framework </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un
      <b>framework de componentes UI</b> creado con
      <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y
      con un estilo único y agradable, vuesax esta creado desde cero y pensado
      para todo tipo de desarrollador desde el amante del frontend hasta el
      backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const active = ref<boolean>(false);
const time = ref<number>(6000);
const progress = ref<number>(0);

watch(active, (val: boolean) => {
  if (val) {
    const interval = setInterval(() => {
      progress.value++;
    }, time.value / 100);

    setTimeout(() => {
      active.value = false;
      clearInterval(interval);
      progress.value = 0;
    }, time.value);
  }
});
</script>
