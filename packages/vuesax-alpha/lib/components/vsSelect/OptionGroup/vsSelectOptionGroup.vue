<template>
  <div class="vs-select__option-group" :class="{ hiddenGroup }">
    <h5 v-if="title">{{ title }}</h5>
    <h5 v-else><slot name="title"></slot></h5>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  computed,
  watch,
  reactive,
  provide,
  onMounted,
  getCurrentInstance,
  toRef,
} from "vue";
import BaseComponent from "@/mixins/component.vue";
import { GROUP_CONTEXT_KEY, SelectOption, SELECT_CONTEXT_KEY } from "../types";
import { includes } from "lodash";
import { loadAllOptions } from "../func";

export default defineComponent({
  name: "vsOptionGroup",
  extends: BaseComponent,
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const optionGroup = true;
    const hiddenGroup = ref<boolean>(false);
    const childsOptions = ref<SelectOption[]>([]);

    const select = reactive(inject(SELECT_CONTEXT_KEY)!);

    if (!select)
      throw new Error(
        "Cannot inject vsSelect component. vsOption component must be inside vsSelect component or vsOptionGroup component",
      );

    const labels = computed(() => {
      return childsOptions.value.reduce(
        (prev: any, acc: any) => (prev += acc.props.label),
        "",
      );
    });

    watch(
      () => select?.textFilter,
      (val: string | undefined) => {
        if (val) {
          if (includes(props.title.toLowerCase(), val.toLowerCase())) {
            hiddenGroup.value = false;
            return;
          }
          if (labels.value.toLowerCase().indexOf(val.toLowerCase()) === -1) {
            hiddenGroup.value = true;
          } else {
            hiddenGroup.value = false;
          }
        } else {
          hiddenGroup.value = false;
        }
      },
    );

    onMounted(() => {
      const instance = getCurrentInstance()!;
      childsOptions.value = loadAllOptions(instance.slots.default?.())
    })

    provide(GROUP_CONTEXT_KEY, {
      optionGroup,
      hiddenGroup,
      childsOptions,
      title: toRef(props, "title"),
    });

    return {
      optionGroup,
      hiddenGroup,
    };
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

