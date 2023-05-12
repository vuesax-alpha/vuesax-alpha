<template>
  <div class="center">
    <vs-button-group>
      <vs-button> One </vs-button>
      <vs-button> Two </vs-button>
      <vs-button> Three </vs-button>
      <vs-button> four </vs-button>
    </vs-button-group>

    <span class="divider"></span>

    <vs-button-group>
      <vs-button flat icon>
        <i class="bx bx-play" />
      </vs-button>
      <vs-button flat icon>
        <i class="bx bx-pause" />
      </vs-button>
      <vs-button flat icon>
        <i class="bx bx-fast-forward" />
      </vs-button>
      <vs-button flat icon>
        <i class="bx bx-shuffle" />
      </vs-button>
    </vs-button-group>

    <span class="divider"></span>

    <vs-button-group>
      <vs-button border> <i class="bx bxs-pencil" /> Edit </vs-button>
      <vs-button border icon>
        <i class="bx bx-font-color" />
      </vs-button>
      <vs-button border icon>
        <i class="bx bx-align-middle" />
      </vs-button>
      <vs-button border> <i class="bx bx-font-size" /> Font size </vs-button>
    </vs-button-group>

    <span class="divider"></span>

    <vs-button-group>
      <vs-button relief> <i class="bx bx-home-alt" /> Home </vs-button>
      <vs-button relief> <i class="bx bxs-phone-call" /> Contact </vs-button>
      <vs-button relief loading>
        <i class="bx bxs-cart-alt" /> Products
      </vs-button>
      <vs-button relief upload> <i class="bx bxs-envelope" /> Send </vs-button>
    </vs-button-group>
  </div>
</template>

<style lang="scss" scoped>
.center {
  flex-wrap: wrap;
  .vs-button__group {
    margin: 20px 20px;
  }
}
</style>
