<template>
  <div class="center con-avatars">
    <vs-avatar shape="square">
      <template #text> Joel </template>
    </vs-avatar>
    <vs-avatar shape="square" color="danger">
      <template #text> Fanny </template>
    </vs-avatar>
    <vs-avatar shape="square">
      <img src="/avatars/avatar-1.png" alt="" />
    </vs-avatar>
    <vs-avatar shape="square" badge>
      <img src="/avatars/avatar-2.png" alt="" />
    </vs-avatar>
    <vs-avatar shape="square" badge writing badge-color="success">
      <img src="/avatars/avatar-3.png" alt="" />
    </vs-avatar>
    <vs-avatar
      badge
      shape="square"
      badge-color="warn"
      badge-position="top-right"
    >
      <img src="/avatars/avatar-5.png" alt="" />
    </vs-avatar>
    <vs-avatar history history-gradient shape="square">
      <img src="/avatars/avatar-6.png" alt="" />
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
