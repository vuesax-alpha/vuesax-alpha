<template>
  <div class="flex">
    <div>
      <vs-select
        v-model="select"
        label="Plugin?"
        :state="st"
        filter
        multiple
        clearable
        collapse-chips
      >
        <vs-option
          v-for="i in options"
          :label="i.label"
          :value="i.value"
          :disabled="i.disabled"
        >
          {{ i.label }}
        </vs-option>
        <vs-option-group title="Other">
          <vs-option value="811" label="Nothings"> Nothing </vs-option>
          <vs-option label="Snake" value="101"> Snake </vs-option>
        </vs-option-group>
<!-- 
        <template v-if="id === 1" #message-dark>
          <p>dark</p>
        </template>-->
        <template  #message-warn>
          <p>warn Lorem ipsum dolor sit amet consectetur.</p>
        </template> 
      </vs-select>
    </div>
    {{ select }}
  </div>
</template>

<script lang="ts">
import { sample } from "lodash";
import { ref } from "vue";

export default {
  setup() {
    const select = ref([]);
    const options = [
      {
        label: "Vuesax",
        value: 1,
        disabled: Math.random() > 0.5 ? true : false,
      },
      {
        label: "Vue",
        value: 2,
        disabled: Math.random() > 0.5 ? true : false,
      },
      {
        label: "Javascript",
        value: 3,
        disabled: Math.random() > 0.5 ? true : false,
      },
      {
        label: "Sass",
        value: 4,
        disabled: Math.random() > 0.5 ? true : false,
      },
      {
        label: "Typescript",
        value: 5,
        disabled: Math.random() > 0.5 ? true : false,
      },
      {
        label: "Webpack",
        value: 6,
        disabled: Math.random() > 0.5 ? true : false,
      },
      {
        label: "Nodejs",
        value: 7,
        disabled: Math.random() > 0.5 ? true : false,
      },
    ];

    const id = ref(4);

    const states = ["success", "dark", "danger", "primary", "warn", ""];

    const st = ref("warn");

    // setInterval(() => {
    //   st.value = sample(states)!;
    // }, 1000);

    setInterval(() => {
      id.value = id.value === 5 ? 1 : id.value + 1;
    }, 3000);

    return { select, options, st, id };
  },
};
</script>

<style lang="scss" scoped></style>
