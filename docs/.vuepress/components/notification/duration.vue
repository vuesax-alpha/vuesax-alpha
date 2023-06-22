<template>
  <div class="center con-avatars">
    <vs-button type="border" @click="openNotification(4500)">
      Duration default (4.5s)
    </vs-button>
    <vs-button type="border" @click="openNotification(6000)">
      Duration 6s
    </vs-button>
    <vs-button type="border" @click="openNotification(10000)">
      Duration 10s
    </vs-button>
    <vs-button type="border" @click="openNotification(0)">
      Duration none
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { VsNotification } from 'vuesax-alpha'

const openNotification = (duration) => {
  VsNotification({
    duration,
    progressAuto: true,
    title: 'Documentation Vuesax-alpha',
    text: 'These documents refer to the latest version of Vuesax-alpha, to see the documents of the previous versions you can do it here 👉 Vuesax4.0',
  })
}
</script>
<style scoped lang="scss">
.vs-button {
  margin: 10px;
}
i {
  margin: 2px;
  font-size: 1.2rem;
  transform-origin: center;
  &.b-r {
    transform: rotate(90deg);
  }
  &.t-r {
    transform: rotate(0deg);
  }
  &.t-l {
    transform: rotate(-90deg);
  }
  &.b-l {
    transform: rotate(-180deg);
  }
}
</style>
