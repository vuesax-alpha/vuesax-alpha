<template>
  <div class="center">
    <vs-button>
      Home
      <template #animate>
        <i class="bx bx-home-alt" />
      </template>
    </vs-button>

    <vs-button type="flat" color="success" animation-type="vertical">
      Message
      <template #animate> <i class="bx bx-mail-send" /> Send </template>
    </vs-button>

    <vs-button
      type="gradient"
      style="min-width: 60px"
      color="warn"
      animation-type="scale"
    >
      <i class="bx bxs-shopping-bag" />
      <template #animate> Store </template>
    </vs-button>

    <vs-button icon type="relief" color="danger" animation-type="rotate">
      <i class="bx bx-like" />
      <template #animate>
        <i class="bx bxs-like" />
      </template>
    </vs-button>
  </div>
</template>

<style lang="scss" scoped>
.center {
  max-width: 400px;
  margin: auto;
}
</style>
