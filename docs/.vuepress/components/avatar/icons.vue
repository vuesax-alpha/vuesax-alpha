<template>
  <div class="center con-avatars">
    <vs-avatar>
      <img src="/avatars/avatar-1.png" alt="" />
      <template #icons>
        <i class="bx bxl-facebook-square" />
        <i class="bx bxl-github" />
        <i class="bx bxl-twitter" />
      </template>
    </vs-avatar>
    <vs-avatar badge badge-color="danger" badge-position="bottom-left">
      <img src="/avatars/avatar-8.png" alt="" />
      <template #icons>
        <i class="bx bxl-twitch" />
        <i class="bx bxl-discord" />
      </template>
    </vs-avatar>
    <vs-avatar loading badge badge-color="success" badge-position="top-left">
      <img src="/avatars/avatar-2.png" alt="" />
      <template #icons>
        <i class="bx bxl-patreon" />
        <i class="bx bxl-linkedin-square" />
        <i class="bx bx-link" />
      </template>
    </vs-avatar>
  </div>
</template>

<style scoped lang="scss">
.con-avatars {
  .vs-avatar-content {
    margin: 20px;
  }
}
</style>
