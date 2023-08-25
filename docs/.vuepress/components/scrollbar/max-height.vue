<template>
  <div style="display: flex">
    <vs-button type="flat" @click="add">Add Item</vs-button>
    <vs-button type="flat" @click="onDelete">Delete Item</vs-button>
  </div>
  <vs-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </vs-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 12px;
  background: rgba(var(--vs-primary), 0.1);
  color: rgba(var(--vs-primary));
}
</style>
