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

    <vs-button :active="color == 'primary'" @click="color = 'primary'" flat>
      Primary
    </vs-button>
    <vs-button :active="color == 'success'" @click="color = 'success'" success flat>
      Success
    </vs-button>
    <vs-button :active="color == 'danger'" @click="color = 'danger'" danger flat>
      Danger
    </vs-button>
    <vs-button :active="color == 'warn'" @click="color = 'warn'" warn flat>
      Warn
    </vs-button>
    <vs-button :active="color == 'dark'" @click="color = 'dark'" dark flat>
      Dark
    </vs-button>
    <vs-button :active="color == '#7d33ff'" @click="color = '#7d33ff'" color="#7d33ff" flat>
      HEX
    </vs-button>
    <vs-button :active="color == 'rgb(59,222,200)'" @click="color = 'rgb(59,222,200)'" color="rgb(59,222,200)" flat>
      RGB
    </vs-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const color = ref<string>('danger');
</script>
<style scoped lang="scss">
.alert-example {
	.vs-button--active {
		transform: translate(0, -5px);
		border-radius: 0px 0px 12px 12px;
	}
}
</style>
