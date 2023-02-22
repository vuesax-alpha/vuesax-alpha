<template>
  <div class="center example-nav">
    <vs-navbar v-model="active" center-collapsed>
      <template #left>
        <img src="/logo2.png" alt="" />
      </template>
      <vs-navbar-group>
        Docs
        <template #items>
          <vs-navbar-item id="guide" :active="active == 'guide'">
            Guide
          </vs-navbar-item>
          <vs-navbar-item id="docs" :active="active == 'docs'">
            Documents
          </vs-navbar-item>
          <vs-navbar-item id="components" :active="active == 'components'">
            Components
          </vs-navbar-item>
        </template>
      </vs-navbar-group>

      <vs-navbar-group>
        Ecosystem

        <template #items>
          <h5 class="title">Social</h5>

          <vs-navbar-item id="Github" :active="active == 'Github'">
            Github
          </vs-navbar-item>
          <vs-navbar-item id="Discord" :active="active == 'Discord'">
            Discord
          </vs-navbar-item>
          <vs-navbar-item id="Twitter" :active="active == 'Twitter'">
            Twitter
          </vs-navbar-item>
          <vs-navbar-item id="Medium" :active="active == 'Medium'">
            Medium
          </vs-navbar-item>
        </template>
      </vs-navbar-group>

      <vs-navbar-item id="License" :active="active == 'License'">
        License
      </vs-navbar-item>

      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
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

const active = ref('guide')
</script>

<style lang="scss">
.title {
  text-align: left;
  margin: 0px;
  width: 100%;
  padding: 5px 6px;
}
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
    max-height: 25px;
  }
}
</style>
