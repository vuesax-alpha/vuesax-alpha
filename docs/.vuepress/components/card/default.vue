<template>
  <div class="center">
    <vs-card>
      <template #title>
        <h3>Trendy clothing</h3>
      </template>
      <template #img>
        <img :src="`/foto5.png`" alt="" />
      </template>
      <template #text>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </template>
      <template #interactions>
        <vs-button color="danger" icon>
          <i class="bx bx-heart" />
        </vs-button>
        <vs-button class="btn-chat" type="shadow">
          <i class="bx bx-chat" />
          <span class="span"> 54 </span>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.btn-chat {
  i {
    font-size: 1.2rem;
  }
  .span {
    padding-left: 5px;
    font-weight: bold;
  }
}
</style>
