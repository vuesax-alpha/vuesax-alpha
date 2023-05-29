<template>
  <div class="center">
    <vs-button @click="active = !active"> Alert </vs-button>
    <vs-button type="flat" @click="active2 = !active2"> Confirm </vs-button>
    <vs-button type="border" @click="active3 = !active3"> Prompt </vs-button>
    <vs-dialog v-model="active" width="550px" not-center>
      <template #header>
        <h4 class="not-margin">Welcome to <b>Vuesax</b></h4>
      </template>

      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in
          the latest trends, vuesax based on vuejs which means that we go hand
          in hand with one of the most popular javascript frameworks in the
          world and with a huge community with which you will have all the help
          and documentation to create and make your project
        </p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button type="transparent" @click="active = false"> Ok </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog v-model="active2" width="550px" not-center>
      <template #header>
        <h4 class="not-margin">Welcome to <b>Vuesax</b></h4>
      </template>

      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in
          the latest trends, vuesax based on vuejs which means that we go hand
          in hand with one of the most popular javascript frameworks in the
          world and with a huge community with which you will have all the help
          and documentation to create and make your project
        </p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button type="transparent" @click="active2 = false">
            Ok
          </vs-button>
          <vs-button color="danger" type="transparent" @click="active2 = false">
            Cancel
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog v-model="active3" width="300px" not-center>
      <template #header>
        <h4 class="not-margin">Welcome what is your <b>Name</b></h4>
      </template>

      <div class="con-content">
        <vs-input v-model="input1" placeholder="Name" />
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button type="transparent" @click="active3 = false">
            Ok
          </vs-button>
          <vs-button color="danger" type="transparent" @click="active3 = false">
            Cancel
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(false)
const active2 = ref(false)
const active3 = ref(false)
const input1 = ref('')
</script>

<style lang="scss" scoped>
@function -color($color, $alpha: 1) {
  @return unquote('rgba(var(--vs-#{$color}), #{$alpha})');
}
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 0.8rem;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
  .vs-checkbox__label {
    font-size: 0.8rem;
  }
  .vs-input {
    margin: 10px 0px;
    width: calc(100%);
    .vs-input__original {
      width: 100%;
    }
  }
}
.con-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100%);
  .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;
    a {
      color: -color('primary') !important;
      margin-left: 6px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .vs-button {
    margin: 0px;
  }
}
</style>
