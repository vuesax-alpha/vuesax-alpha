<template>
  <div class="center">
    <vs-tooltip loading>
      <vs-button type="flat"> Do hover here loading </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip loading>
      <vs-button type="flat"> Do hover here loading </vs-button>
      <template #content />
    </vs-tooltip>
  </div>
</template>
<style scoped lang="scss">
.vs-button {
  margin: 0 5px;
}
</style>
