<template>
  <button
    class="vs-select__option"
    :class="bindRootClass"
    :style="bindRootStyle"
    @mousedown="handleMouseDown"
    @blur="handleBlur"
  >
    <vs-checkbox v-if="isMultiple" :checked-force="isActive">
      <slot>{{ label }}</slot>
    </vs-checkbox>
    <template v-else>
      <slot>{{ label }}</slot>
    </template>
  </button>
</template>

<script lang="ts">
// @ts-nocheck
import {
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  watch,
  computed,
  ref,
  reactive,
  onBeforeUnmount,
} from "vue";
import BaseComponent from "@/mixins/component.vue";

import vsCheckbox from "@/components/vsCheckbox/Base/vsCheckbox.vue";
import { SELECT_CONTEXT_KEY, GROUP_CONTEXT_KEY, GroupContext } from "../types";
import { findIndex, includes } from "lodash";

export default defineComponent({
  name: "vsOption",
  extends: BaseComponent,
  components: { vsCheckbox },
  props: {
    value: null,
    disabled: Boolean,
    label: null,
  },
  setup(props) {
    const instance = getCurrentInstance()!;

    const hiddenOption = ref<boolean>(false);
    const uid = instance.uid;
    const optionIndex = ref<number>(0);

    const select = reactive(inject(SELECT_CONTEXT_KEY)!);
    let selectGroup: GroupContext | null = null;

    if (instance?.parent?.type.name === "vsOptionGroup") {
      selectGroup = reactive(inject(GROUP_CONTEXT_KEY)!);
    }

    if (!select)
      throw new Error(
        "Cannot inject vsSelect component. vsOption component must be inside vsSelect component",
      );

    watch(
      () => select?.textFilter,
      (val) => {
        if (val) {
          if (includes(selectGroup?.title.toLowerCase(), val.toLowerCase())) {
            hiddenOption.value = false;
            return;
          }
          if (props.label.toLowerCase().indexOf(val.toLowerCase()) === -1) {
            hiddenOption.value = true;
          } else {
            hiddenOption.value = false;
          }
        } else {
          hiddenOption.value = false;
        }
      },
    );

    const isActive = computed(() => {
      return Array.isArray(select?.modelValue)
        ? select.modelValue.includes(props.value)
        : select.modelValue === props.value;
    });

    const isHover = computed(() => {
      return select?.uids?.indexOf(uid) === select?.hoverOption;
    });

    const isMultiple = computed(() => {
      return select?.multiple;
    });

    const bindRootClass = computed(() => {
      return [
        {
          activeOption: isActive.value,
          isHover: isHover.value,
          isMultiple: isMultiple.value,
          hiddenOption: hiddenOption.value,
          disabled: props.disabled,
        },
      ];
    });

    const bindRootStyle = computed(() => {
      // if (hiddenOption.value)
        // return [{ [`transition-delay`]: optionIndex.value * 0.03 + "s" }];
      return [];
    });

    const handleMouseDown = () => {
      if (props.disabled === true || selectGroup?.hiddenGroup === true) return;
      select?.clickOption?.(props.value, props.label, props.disabled);
    };

    const handleBlur = () => {
      if (!select?.targetSelect && !select?.targetClose) {
        select.activeOptions = false;
      }
    };

    onMounted(() => {
      const indexOption = findIndex(select.uids, uid);

      if (!select?.renderSelect || indexOption === -1) {
        select.childOptions?.push(instance);
        select.uids?.push(uid);
      }

      if (selectGroup) {
        selectGroup.childsOptions?.push(instance);
      }
      if (indexOption !== -1) optionIndex.value = indexOption;
      else optionIndex.value = select.uids?.length - 1;
      select?.setHover?.();
    });

    return {
      hiddenOption,
      uid,
      isHover,
      isMultiple,
      isActive,

      //
      bindRootStyle,
      bindRootClass,

      /** Event */
      handleMouseDown,
      handleBlur,
    };
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

