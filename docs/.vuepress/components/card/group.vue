<template>
  <div class="center">
    <vs-card-group>
      <vs-card v-for="card in 6" :key="card" @click="handleClick">
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img :src="`/foto${card}.png`" alt="" />
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
    </vs-card-group>
  </div>
</template>

<script lang="ts" setup>
const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log('click')
}
</script>
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
