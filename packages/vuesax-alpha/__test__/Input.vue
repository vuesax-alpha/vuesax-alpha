<template>
  <div class="flex">
    <div>
      <vs-input
        v-model="val"
        placeholder="Name"
        labelPlaceholder="Name"
        danger
        state="danger"
        type="search"
        :progress="progress"
      >
        <template #icon>
          <i class="bx bx-lock-open-alt"></i>
        </template>

        <template v-if="id === 1" #message-success> Success </template>
        <template v-else-if="id === 2" #message-warn> Warn message </template>
      </vs-input>
    </div>

    <vs-input v-model="label" type="text" label="Label"></vs-input>
    <vs-input
      v-model="password"
      type="password"
      label="password"
      show-password
    >
      <template #icon>
        <i class='bx bxs-lock-alt'></i>
      </template>
    </vs-input>

    <vs-input
      v-model="labelPlaceholder"
      type="number"
      label-placeholder="Label Placeholder"
    ></vs-input>

    <vs-input type="time" />
    <vs-input type="date" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const val = ref("");
    const label = ref("");
    const password = ref("");
    const labelPlaceholder = ref();

    const hasVisiblePassword = ref(false);

    const id = ref(1);

    const progress = ref(9);

    setInterval(() => {
      id.value = id.value === 2 ? 1 : 2;
    }, 2000);

    return { val, id, progress, label, labelPlaceholder, password, hasVisiblePassword };
  },
};
</script>

<style lang="scss" scoped></style>
