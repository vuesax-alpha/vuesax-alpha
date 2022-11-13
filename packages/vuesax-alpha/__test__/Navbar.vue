<template>
  <div>
    <vs-navbar center-collapsed shadow-scroll fixed v-model="active">
      <template #left>
        <img style="width: 90px;" src="https://vuesax.com/logo2.png" alt="" />
      </template>
      <vs-navbar-item :active="active == 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref<string>("");
</script>
