<template>
  <div class="center">
    <vs-button>
      Home
      <template #animate>
        <i class="bx bx-home-alt" />
      </template>
    </vs-button>

    <vs-button flat success animation-type="vertical">
      Message
      <template #animate> <i class="bx bx-mail-send" /> Send </template>
    </vs-button>

    <vs-button gradient style="min-width: 60px" warn animation-type="scale">
      <i class="bx bxs-shopping-bag" />
      <template #animate> Store </template>
    </vs-button>

    <vs-button icon relief danger animation-type="rotate">
      <i class="bx bx-like" />
      <template #animate>
        <i class="bx bxs-like" />
      </template>
    </vs-button>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.center {
  max-width: 400px;
  margin: auto;
}
</style>
