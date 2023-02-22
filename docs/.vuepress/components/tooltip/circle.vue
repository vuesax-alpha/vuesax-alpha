<template>
  <div class="center">
    <vs-tooltip circle>
      <vs-button circle flat> Do hover here </vs-button>
      <template #tooltip> This is a beautiful button </template>
    </vs-tooltip>
  </div>
</template>

<style scoped lang="scss">
.vs-button {
  margin: 0px;
}
</style>
