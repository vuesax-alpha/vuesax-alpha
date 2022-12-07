<template>
  <div class="center example-nav">
    <vs-navbar target-scroll="#padding-scroll-content" padding-scroll center-collapsed v-model="active">
      <template #left>
        <img src="/logo2.png" alt="">
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
        <vs-button flat >Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <div id="padding-scroll-content" class="square">
      <div class="child">
        child 1
      </div>
      <div class="child">
        child 2
      </div>
      <div class="child">
        child 3
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const active = ref("guide");
</script>

<style lang="scss">
.square {
  height: 400px;
  position: relative;
  overflow: auto;
  width: 100%;
  .child {
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
.example-nav {
  background: #f0f0f0 !important;
  padding: 0px !important;
  position: relative;
  img {
    max-height: 22px;
  }
}
</style>
