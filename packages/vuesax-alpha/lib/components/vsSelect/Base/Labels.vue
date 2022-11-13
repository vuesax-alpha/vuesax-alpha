<template>
  <label
    v-if="!multiple || label || labelPlaceholder"
    class="vs-select__label"
    :for="selectId"
    :class="{
      'vs-select__label--placeholder': labelPlaceholder,
      'vs-select__label--label': label,
      'vs-select__label--hidden': modelValue,
    }"
  >
    {{ labelPlaceholder || label }}
  </label>
  <template v-else></template>

  <label
    v-if="!multiple && !labelPlaceholder && placeholder"
    ref="placeholder$"
    :for="selectId"
    class="vs-select__label"
    :class="{
      'vs-select__label--hidden': modelValue || textFilter,
    }"
  >
    {{ placeholder }}
  </label>
  <template v-else></template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "vsSelectLabel",
  props: {
    multiple: Boolean,
    labelPlaceholder: String,
    placeholder: String,
    selectId: String,
    modelValue: null,
    textFilter: String,
    label: String
  }
});
</script>
