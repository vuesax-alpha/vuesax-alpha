<template>
  <div class="center con-avatars">
    <vs-avatar size="30">
      <template #text> Lily </template>
    </vs-avatar>
    <vs-avatar size="40" color="text">
      <template #text> Evan You </template>
    </vs-avatar>
    <vs-avatar color="success">
      <i class="bx bx-user" />
    </vs-avatar>
    <vs-avatar size="60" color="primary" badge badge-color="danger">
      <i class="bx bxs-hot" />
    </vs-avatar>
    <vs-avatar size="70" badge badge-color="success">
      <img src="/avatars/avatar-4.png" alt="" />
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
