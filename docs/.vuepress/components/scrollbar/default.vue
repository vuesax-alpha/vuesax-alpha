<template>
  <vs-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-item">{{ item }}</p>
  </vs-scrollbar>
</template>

<style scoped lang="scss">
.scrollbar-item {
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
