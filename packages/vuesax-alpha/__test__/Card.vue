<template>
  <div class="flex">
    <div>
      <vs-card>
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img src="https://vuesax.com/foto5.png" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>
    </div>
    <div>
      <vs-card type="2">
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img src="https://vuesax.com/foto5.png" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>
    </div>
    <div>
      <vs-card type="3">
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img src="https://vuesax.com/foto5.png" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>
    </div>
    <div>
      <vs-card type="4">
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img src="https://vuesax.com/foto5.png" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>
    </div>
    <div>
      <vs-card type="5">
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img src="https://vuesax.com/foto5.png" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>
    </div>
  </div>
  <div>
    <vs-card-group>
      <vs-card v-for="i in 6">
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img :src="`https://vuesax.com/foto${i}.png`" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>
    </vs-card-group>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
