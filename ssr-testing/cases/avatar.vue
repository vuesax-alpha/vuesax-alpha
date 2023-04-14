<template>
  <div class="demo-type">
    <div>
      <vs-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
    <div>
      <vs-avatar> user </vs-avatar>
    </div>
  </div>
</template>

<style scoped>
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--vs-border-color);
}
</style>
