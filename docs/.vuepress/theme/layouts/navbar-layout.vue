<template>
  <div id="con-example" class="con-example">
    <vs-navbar
      v-model="active"
      :fixed="fixed"
      :shadow="shadow"
      :text-white="textWhite"
      :hide-scroll="hideScroll"
      :shadow-scroll="shadowScroll"
      :padding-scroll="paddingScroll"
      :not-line="notLine"
      :square="square"
      :color="color"
      @collapsed="handleCollapsed"
    >
      <template #left>
        <vs-button v-if="collapsed" class="btn-menu" flat icon>
          <i class="bx bx-menu-alt-left" />
        </vs-button>
        <img
          v-if="!textWhite"
          src="/logos/logo-vuesax-logotipo-vuesax-png-3.png"
          alt=""
        />
        <img v-else src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="" />
      </template>
      <vs-navbar-group v-if="!collapsed">
        list
        <template #items>
          <vs-navbar-item id="guide2" :active="active == 'guide2'">
            nuevo 1
          </vs-navbar-item>
          <vs-navbar-item id="docs2" :active="active == 'docs2'">
            nuevo 2
          </vs-navbar-item>
        </template>
      </vs-navbar-group>
      <vs-navbar-item v-if="!collapsed" id="guide" :active="active == 'guide'">
        Guide
      </vs-navbar-item>
      <vs-navbar-item v-if="!collapsed" id="docs" :active="active == 'docs'">
        Documents
      </vs-navbar-item>
      <vs-navbar-item
        v-if="!collapsed"
        id="components"
        :active="active == 'components'"
      >
        Components
      </vs-navbar-item>
      <vs-navbar-item
        v-if="!collapsed"
        id="license"
        :active="active == 'license'"
      >
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat :color="textWhite ? '#fff' : 'primary'"
          >Login</vs-button
        >
        <vs-button :shadow="textWhite" :color="textWhite ? '#fff' : 'primary'"
          >Get Started</vs-button
        >
        <!-- <vs-input square transparent color="#fff" :text-white="textWhite" placeholder="Search"></vs-input> -->
      </template>
    </vs-navbar>

    <div class="content-1 contentx">
      <div class="con-colors">
        <vs-radio v-model="color" val="#fff"> Default </vs-radio>
        <vs-radio v-model="color" val="primary"> Primary </vs-radio>
        <vs-radio v-model="color" success val="success"> success </vs-radio>
        <vs-radio v-model="color" danger val="danger"> danger </vs-radio>
        <vs-radio v-model="color" warn val="warn"> warn </vs-radio>
        <vs-radio v-model="color" dark val="dark"> dark </vs-radio>
      </div>
      <div class="con-opts">
        <vs-switch v-model="paddingScroll"> Padding-scroll </vs-switch>
        <vs-switch v-model="shadow"> shadow </vs-switch>
        <vs-switch v-model="textWhite"> text-white </vs-switch>
        <vs-switch v-model="fixed"> fixed </vs-switch>
        <vs-switch v-model="shadowScroll"> shadow-scroll </vs-switch>
        <vs-switch v-model="hideScroll"> hide-scroll </vs-switch>
        <vs-switch v-model="notLine"> not-line </vs-switch>
        <vs-switch v-model="square"> square </vs-switch>
      </div>
    </div>
    <div class="content-2 contentx"><h2>2</h2></div>
    <div class="content-3 contentx"><h2>3</h2></div>
    <div class="content-4 contentx"><h2>4</h2></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const active = ref('guide')
const color = ref('#fff')
const paddingScroll = ref(false)
const shadow = ref(false)
const textWhite = ref(false)
const fixed = ref(false)
const shadowScroll = ref(false)
const hideScroll = ref(false)
const notLine = ref(false)
const square = ref(false)
const collapsed = ref(false)

watch(color, (val: string) => {
  if (val !== '#fff') {
    textWhite.value = true
  } else {
    textWhite.value = false
  }
})

const handleCollapsed = (val: boolean) => {
  collapsed.value = val
}
</script>

<style lang="scss">
.btn-menu {
  margin-right: 15px;
}
.con-example {
  overflow-x: hidden;
  .contentx {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-direction: column;
    background: #f4f7f8;
    h2 {
      font-size: 2rem;
    }
    .con-colors {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      flex-wrap: wrap;
    }
    .con-opts {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 20px;
      flex-wrap: wrap;
      .vs-switch {
        margin: 10px;
      }
    }
  }
  img {
    max-height: 25px;
  }
}
</style>
