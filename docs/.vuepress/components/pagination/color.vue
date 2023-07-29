<template>
  <div class="center con-pagination">
    <div class="con-radio">
      <vs-radio v-model="color" color="success" value="success">
        Success
      </vs-radio>
      <vs-radio v-model="color" color="danger" value="danger">
        Danger
      </vs-radio>
      <vs-radio v-model="color" color="warn" value="warn"> Warning </vs-radio>
      <vs-radio v-model="color" color="dark" value="dark"> Dark </vs-radio>
      <vs-radio v-model="color" color="#7d33ff" value="#7d33ff"> HEX </vs-radio>
      <vs-radio v-model="color" color="rgb(59,222,200)" value="rgb(59,222,200)">
        RGB
      </vs-radio>
    </div>
    <vs-pagination v-model:current-page="page" :color="color" :total="50" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Color } from 'vuesax-alpha'

const page = ref(1)
const color = ref<Color>('success')
</script>

<style lang="scss" scoped>
.con-pagination {
  .con-radio {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .vs-radio-wrapper {
      margin: 10px;
    }
  }
  .vs-pagination {
    margin: 10px 0px;
  }
}

@media screen and (max-width: 768px) {
  .con-pagination {
    overflow: scroll;
    justify-content: flex-start;
  }
}
</style>
