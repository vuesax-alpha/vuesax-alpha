<template>
  <div class="center con-avatars">
    <vs-avatar color="primary">
      <template #text> Primary </template>
    </vs-avatar>
    <vs-avatar color="success">
      <template #text> Success </template>
    </vs-avatar>
    <vs-avatar color="danger">
      <template #text> Danger </template>
    </vs-avatar>
    <vs-avatar color="warn">
      <template #text> Warn </template>
    </vs-avatar>
    <vs-avatar color="dark">
      <template #text> Dark </template>
    </vs-avatar>
    <vs-avatar color="#7d33ff">
      <template #text> HEX </template>
    </vs-avatar>
    <vs-avatar color="rgb(59,222,200)">
      <template #text> RGB </template>
    </vs-avatar>
  </div>
</template>
<style scoped lang="scss">
.con-avatars {
  .vs-avatar-content {
    margin: 10px;
  }
}
</style>
