<template>
  <div class="center con-avatars">
    <vs-avatar>
      <template #text> Lily </template>
    </vs-avatar>
    <vs-avatar>
      <template #text> Evan You </template>
    </vs-avatar>
    <vs-avatar>
      <i class="bx bx-user" />
    </vs-avatar>
    <vs-avatar color="primary">
      <i class="bx bxs-hot" />
    </vs-avatar>
    <vs-avatar>
      <img src="/avatars/avatar-5.png" alt="" />
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
