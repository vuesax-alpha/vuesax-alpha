<template>
  <div class="btn-group">
    <div><vs-button color="facebook" @click="handlerClick" href="https://facebook.com/" blank>Facebook</vs-button></div>
    <div><vs-button success flat>Click me</vs-button></div>
    <div><vs-button border loading>Click me</vs-button></div>
    <div><vs-button danger relief>Click me</vs-button></div>
    <div>
      <vs-button icon>
        <i class="bx bx-user"></i>
      </vs-button>
    </div>
    <div><vs-button disabled size="large">Click me</vs-button></div>
    <div>
      <vs-button
        circle
        icon
        success
        flat
      >
        <i class="bx bxs-phone-call"></i>
      </vs-button>
    </div>

    <div>
      <vs-button-group>
        <vs-button>Click me</vs-button>
        <vs-button>Click 2</vs-button>
      </vs-button-group>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const handlerClick = (evs) => {
      console.log('clicked', evs)
    }
    return { handlerClick };
  },
};
</script>

<style lang="scss" scoped>
.btn-group {
  display: flex;
  gap: 20px;
}
</style>
