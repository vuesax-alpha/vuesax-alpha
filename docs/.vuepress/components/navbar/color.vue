<template>
  <div class="center example-nav">
    <vs-navbar v-model="active" text-white :color="active" right-collapsed>
      <template #left>
        <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="" />
      </template>
      <template #right>
        <vs-navbar-item id="primary" :active="active == 'primary'">
          Primary
        </vs-navbar-item>
        <vs-navbar-item id="success" :active="active == 'success'">
          Success
        </vs-navbar-item>
        <vs-navbar-item id="danger" :active="active == 'danger'">
          Danger
        </vs-navbar-item>
        <vs-navbar-item id="warn" :active="active == 'warn'">
          Warn
        </vs-navbar-item>
        <vs-navbar-item id="dark" :active="active == 'dark'">
          Dark
        </vs-navbar-item>
        <vs-navbar-item id="#7d33ff" :active="active == '#7d33ff'">
          HEX
        </vs-navbar-item>
        <vs-navbar-item
          id="rgb(59,222,200)"
          :active="active == 'rgb(59,222,200)'"
        >
          RGB
        </vs-navbar-item>
      </template>
    </vs-navbar>
    <div class="square">
      <div class="child">child 1</div>
      <div class="child">child 2</div>
      <div class="child">child 3</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const active = ref('primary')
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
