<template>
  <div class="vs-select-content" :style="bindRootStyle" :class="bindRootClass">
    <div
      ref="select$"
      class="vs-select"
      :class="bindRefSelectClass"
      @mouseleave="mouseLeaveSelect"
      @mouseenter="mouseEnterSelect"
      @click.prevent="handleOpenOptions"
    >
      <input
        v-bind="$attrs"
        ref="input$"
        :readonly="!filter || !activeOptions"
        :id="`${selectId}`"
        class="vs-select__input"
        :class="[
          {
            multiple,
            simple: !multiple && !filter,
          },
        ]"
        :value="activeFilter ? textFilter : multiple ? '' : getLabels"
        :placeholder="inputPlaceholder"
        @input="handleInputEvent"
      />

      <labels
        :multiple="multiple"
        :placeholder="placeholder"
        :label="label"
        :label-placeholder="labelPlaceholder"
        :model-value="modelValue"
        :select-id="selectId"
        :text-filter="textFilter"
      />

      <label
        v-if="multiple"
        :for="selectId"
        ref="chips$"
        class="vs-select__chips"
        @mousedown="handleMouseDownChips"
        @focus="handleChipsFocus"
        @blur="blur"
      >
        <template v-for="chip in getChips">
          <span
            class="vs-select__chips__chip"
            :class="{
              isCollapse: chip?.isCollapse,
              disabled: chip?.disabled,
            }"
            :data-value="chip?.value"
          >
            {{ chip?.label }}
            <span
              v-if="!chip?.isCollapse && !chip?.disabled"
              ref="chip_close$"
              class="vs-select__chips__chip__close"
              @click="handleChipClose(chip)"
              @mouseleave="handleMouseLeaveChip"
              @mouseenter="handleMouseEnterChip"
            >
              <icon-close hover="less" />
            </span>
            <template v-else></template>
          </span>
        </template>

        <input
          v-if="filter"
          class="vs-select__chips__input"
          ref="chips_input$"
          :placeholder="placeholder"
          :value="textFilter"
          @focus="handleChipinputFocus"
          @input="handleInputEvent"
        />
        <template v-else></template>
      </label>
      <template v-else></template>

      <transition name="vs-select">
        <div
          v-if="activeOptions"
          ref="options$"
          class="vs-select__options"
          :class="bindRefOptionsClass"
          :style="bindRefOptionsStyle"
          @mouseleave="mouseLeaveOptionsRef"
          @mouseenter="mouseEnterOptionsRef"
        >
          <div ref="content$" class="vs-select__options__content">
            <div v-if="notData" class="vs-select__options__content__not-data">
              <slot name="notData">No data available</slot>
            </div>
            <template v-else></template>
            <vs-scrollbar
              ref="scrollbar$"
              max-height="200"
              thickness="3"
              :hide-scrollbar="hideScrollbar"
              :native="nativeScrollbar"
              :show-always="!hideScrollbar && isTouch"
            >
              <slot></slot>
            </vs-scrollbar>
          </div>
        </div>
      </transition>

      <icon-loading class="vs-select__loading" v-if="loading" />
      <template v-else></template>

      <transition name="v-clearable">
        <label
          v-if="showClearable"
          :for="selectId"
          class="vs-select__clearable"
          @mouseenter="mouseEnterClearable"
          @mouseleave="mouseLeaveClearable"
        >
          <icon-close @click="clearOptions" />
        </label>
      </transition>
      <label :for="selectId" class="vs-select__arrow"><icon-arrow /></label>
    </div>

    <template v-for="(type) in messageType">
      <message>
        <div
          v-if="$slots[`message-${type}`]"
          class="vs-select__message"
          :class="[`vs-select__message--${type}`]"
        >
          <slot :name="`message-${type}`"></slot>
        </div>
      </message>
    </template>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import {
  defineComponent,
  nextTick,
  ref,
  computed,
  watch,
  provide,
  onMounted,
  onBeforeUnmount,
  toRef,
  getCurrentInstance,
  onUpdated,
} from "vue";
import BaseComponent from "@/mixins/component.vue";
import { cloneDeep, includes, isArray } from "lodash";

import {
  SELECT_CONTEXT_KEY,
  SelectOption,
  SELECT_EMITS,
  SELECT_PROPS,
  Option,
  Chip,
} from "../types";
import { loadAllOptions } from "../func";
import {
  insertBody,
  isTouch,
  setCords,
} from "@/util";
import vsScrollbar from "@/components/vsScrollbar/Base/vsScrollbar.vue";
import iconArrow from "@/components/icons/Arrow.vue";
import iconClose from "@/components/icons/Close.vue";
import iconLoading from "@/components/icons/Loading.vue";
import Message from "./Message.vue";
import Labels from "./Labels.vue";

export default defineComponent({
  inheritAttrs: false,
  name: "vsSelect",
  extends: BaseComponent,
  components: {
    iconArrow,
    iconClose,
    iconLoading,
    Message,
    vsScrollbar,
    Labels,
  },
  props: SELECT_PROPS,
  emits: SELECT_EMITS,
  setup(props, ctx) {
    const instance          = getCurrentInstance()!;
    const uids              = ref<any[]>([]);
    const selectId          = `${instance.uid}`;
    const renderSelect      = ref<boolean>(false);
    const activeOptions     = ref<boolean>(false);
    const valueLabel        = ref<Option[]>([]);
    const hoverOption       = ref<number>(-1);
    const childOptions      = ref<SelectOption[]>([]);
    const targetSelect      = ref<boolean>(false);
    const targetChipClose   = ref<boolean>(false);
    const targetClearable   = ref<boolean>(false);
    const activeFilter      = ref<boolean>(false);
    const textFilter        = ref<string>("");
    const targetSelectInput = ref<boolean>(false);
    const messageType       = ["success", "warn", "danger", "primary", "dark"];

    // HTML Refs
    const options$     = ref<HTMLElement>();
    const chips$       = ref<HTMLElement>();
    const chips_input$ = ref<HTMLElement>();
    const select$      = ref<HTMLElement>();
    const input$       = ref<HTMLElement>();
    const content$     = ref<HTMLElement>();
    const placeholder$ = ref<HTMLElement>();
    const scrollbar$   = ref<HTMLElement>();
    const chip_close$  = ref<HTMLElement>();

    const insertOptions = () => {
      if (!options$.value || !select$.value) return;
      insertBody(options$.value, document.body);
      setCords(options$.value, select$.value);
    };
    const clickOption = (value: any, label: any, disabled: boolean = false) => {
      if (disabled) return;
      if (props.multiple) {
        const oldVal = isArray(props.modelValue)
          ? cloneDeep(props.modelValue)
          : [props.modelValue];
        if (oldVal.indexOf(value) == -1) {
          oldVal.push(value);
        } else {
          const _idx = oldVal.indexOf(value);
          oldVal.splice(_idx, 1);
        }
        ctx.emit("update:modelValue", oldVal);

        if (props.filter) {
          setTimeout(() => {
            if (activeOptions.value) {
              chips_input$.value?.focus();
            }
          });
        }
      } else {
        ctx.emit("update:modelValue", value);
        valueLabel.value = [
          {
            label,
            value,
          },
        ];
        setTimeout(() => {
          if (activeFilter.value) {
            input$.value?.focus();
          }
        });
      }

      setTimeout(() => {
        if (props.multiple && activeOptions.value) {
          chips$.value?.focus();
        }
      });
      if (!props.multiple) {
        handleBlur();
      }
    };
    const setHover = () => {
      let index: number = -1;
      childOptions.value.forEach((item: any, i: number) => {
        if (item.ctx?.value == props.modelValue) {
          index = i;
        }
      });
      hoverOption.value = index;
    };
    const optionsSelected = () => {
      const _optionsSelected: SelectOption[] = [];
      childOptions.value.forEach((option: any) => {
        if (
          isArray(props.modelValue) &&
          includes(props.modelValue, option.props.value)
        ) {
          _optionsSelected.push(option);
        } else if (props.modelValue == option.props.value) {
          _optionsSelected.push(option);
        }
      });
      return _optionsSelected;
    };
    const getValue = () => {
      if (props.modelValue == null || props.modelValue == undefined) return;
      const options = optionsSelected();
      const labels = options.map((option): Option => {
        return {
          label: option.props.label,
          value: option.props.value,
          disabled: option.props.disabled as boolean,
        };
      });

      labels.sort((a, b) => {
        return (
          `${props.modelValue}`.indexOf(a.value) -
          `${props.modelValue}`.indexOf(b.value)
        );
      });
      valueLabel.value = labels;
    };
    const handleBlur = () => {
      nextTick(() => {
        activeOptions.value = false;
      });
      ctx.emit("blur");
      setHover();
      window.removeEventListener("mousedown", handleWindowClick);
      if (activeOptions.value) {
        textFilter.value = "";
        if (!props.multiple) {
          activeFilter.value = false;
        }
      }
    };
    /**  Chip$ ref */
    const blur = (evs: any) => {
      if (
        !props.multiple ||
        !evs.relatedTarget ||
        !targetSelectInput.value ||
        (!targetSelect.value && !activeOptions.value)
      ) {
        handleBlur();
      }
      if (props.filter) {
        activeFilter.value = false;
      }
    };
    const handleMouseDownChips = () => {
      if (props.filter && props.multiple) {
        if (activeOptions.value) {
          setTimeout(() => {
            chips_input$.value?.focus();
          });
        }
      }
    };
    const handleChipsFocus = (evs: Event) => {
      if (!targetChipClose.value) {
        activeOptions.value = true;
        ctx.emit("focus", evs);
      }
    };
    /** Chips: chip item */
    const handleChipClose = (item: Option) => {
      setTimeout(() => {
        targetChipClose.value = false;
      });
      if (!activeOptions.value) {
        chips$.value?.blur();
        if (props.filter) {
          chips_input$.value?.blur();
        }
      }
      clickOption(item.value, item.label, item.disabled);
    };
    const handleMouseEnterChip = () => {
      targetChipClose.value = true;
    };
    const handleMouseLeaveChip = () => {
      targetChipClose.value = false;
    };
    /**  Chips_input$ ref */
    const handleChipinputFocus = (evs: Event) => {
      if (!targetChipClose.value) {
        activeOptions.value = true;
        ctx.emit("focus", evs);
        setTimeout(() => {
          chips_input$.value?.focus();
        });
      }
    };
    /** Options$ ref */
    const mouseEnterOptionsRef = () => {
      targetSelect.value = true;
      targetSelectInput.value = true;
    };
    const mouseLeaveOptionsRef = (evs: any) => {
      if (
        evs.relatedTarget === input$.value ||
        evs.relatedTarget === chips$?.value
      )
        return;
      targetSelect.value = false;
      targetSelectInput.value = false;
    };
    /** Clearable */
    const mouseEnterClearable = () => {
      targetClearable.value = true;
    };
    const mouseLeaveClearable = () => {
      targetClearable.value = false;
    };
    const showClearable = computed(() => {
      if (!props.clearable || props.disabled || props.loading) return false;
      if (valueLabel.value.length === 0) return false;

      const ignoreDisabledOptions = valueLabel.value.filter((e) => {
        return e.disabled === false;
      });
      if (ignoreDisabledOptions.length === 0) return false;

      return targetSelect.value;
    });
    const clearOptions = () => {
      if (props.disabled) return;
      if (!props.multiple) {
        const indexModelValue = childOptions.value.find(props.modelValue);
        if (indexModelValue?.props.disabled) return;
        ctx.emit("update:modelValue", null);
        return;
      }
      const selectDisabledOptions = valueLabel.value.filter((e) => {
        return e.disabled;
      });
      const getValueOptions = selectDisabledOptions.map((e) => {
        return e.value;
      });
      ctx.emit("update:modelValue", getValueOptions);
    };
    /** Input$ ref */
    const handleInputEvent = (evs: any) => {
      textFilter.value = evs.target.value;
    };
    /** Select$ ref */
    const handleOpenOptions = (evs: Event) => {
      if (activeOptions.value) {
        if (props.filter) return;
        if (targetChipClose.value) return;
      } else {
        if (targetChipClose.value) return;
      }
      if (targetClearable.value) return;
      activeOptions.value = !activeOptions.value;
      if (activeOptions.value) {
        textFilter.value = "";
        if (props.filter) {
          activeFilter.value = true;
          if (props.multiple) {
            setTimeout(() => {
              chips_input$.value?.focus();
            });
          }
        }
        if (!props.multiple) {
          setTimeout(() => {
            handleSrolltoOption();
          }, 250);
        }
      }
    };
    const mouseLeaveSelect = (evs: any) => {
      if (evs.relatedTarget !== options$.value) {
        targetSelectInput.value = false;
        targetSelect.value = false;
      }
    };
    const mouseEnterSelect = () => {
      targetSelectInput.value = true;
      targetSelect.value = true;
    };
    const clickArrowIcon = () => {
      if (activeOptions.value) {
        activeOptions.value = false;
      } else {
        input$.value!.focus();
      }
    };
    /** Window event */
    // the option handler is always inside the viewbox
    const handleSrolltoOption = () => {
      if (hoverOption.value !== -1) {
        const _childOption = childOptions.value[hoverOption.value];
        if (!_childOption) return;
        const childOptionRect = _childOption.ctx.$el.getBoundingClientRect();
        const optionsContentRect = content$.value?.getBoundingClientRect()!;
        const viewportOptionsScrolled = scrollbar$.value?.scrollView;
        // child option below option's' content view box.
        // option's top > viewbox || option's top + height > viewbox
        if (
          childOptionRect.bottom > optionsContentRect.bottom ||
          childOptionRect.top >
            optionsContentRect.bottom - optionsContentRect.height / 3
        ) {
          const needScrollTop =
            childOptionRect.bottom -
            (optionsContentRect.bottom - optionsContentRect.height / 3) +
            viewportOptionsScrolled.scrollTop;
          scrollbar$.value?.scrollTo({
            top: needScrollTop,
            behavior: "smooth",
          });
        }
        // located above the option's content view box
        else if (
          childOptionRect.bottom <
            optionsContentRect.top + optionsContentRect.height / 3 ||
          childOptionRect.top < optionsContentRect.top
        ) {
          const needScrollTop =
            viewportOptionsScrolled.scrollTop -
            (optionsContentRect.top +
              optionsContentRect.height / 3 -
              childOptionRect.top);
          scrollbar$.value?.scrollTo({
            top: needScrollTop,
            behavior: "smooth",
          });
        }
      }
    };
    const handleKeydown = (evs: any) => {
      if (!options$.value || !select$.value) return;

      for (let index = 0; index < 300; index++) {
        setTimeout(() => {
          if (!options$.value || !select$.value) return;
          setCords(options$.value, select$.value);
        }, index);
      }
      switch (evs.key) {
        case "ArrowDown": {
          evs.preventDefault();
          do {
            if (hoverOption.value < childOptions.value.length - 1) {
              hoverOption.value++;
            } else {
              hoverOption.value = 0;
            }
          } while (childOptions.value[hoverOption.value]?.ctx.hiddenOption);
          break;
        }
        case "ArrowUp": {
          evs.preventDefault();
          do {
            if (hoverOption.value > 0) {
              hoverOption.value--;
            } else {
              hoverOption.value = childOptions.value.length - 1;
            }
          } while (childOptions.value[hoverOption.value]?.ctx.hiddenOption);
          break;
        }
        case "Enter": {
          if (hoverOption.value !== -1) {
            if (
              !childOptions.value[hoverOption.value].props.disabled &&
              !childOptions.value[hoverOption.value].ctx.hiddenOption
            ) {
              clickOption(
                childOptions.value[hoverOption.value].props.value,
                childOptions.value[hoverOption.value].props.label,
              );
              if (!props.multiple) {
                handleBlur();
              }
            }
          }
          break;
        }
        case "Escape": {
          if (activeOptions.value) {
            activeOptions.value = false;
          }
          break;
        }
      }
      if (hoverOption.value !== -1 && content$.value) {
        content$.value.scrollTop =
          childOptions.value[hoverOption.value].ctx.$el.offsetTop - 66;
      }
    };
    const handleWindowClick = (evs: any) => {
      if (!targetSelectInput.value) {
        handleBlur();
      }
      if (props.filter && !activeOptions.value) {
        activeFilter.value = false;
      }
    };
    const handleWindowResize = () => {
      if (!options$.value || !select$.value) return;

      nextTick(() => {
        if (!options$.value || !select$.value) return;
        setCords(options$.value, select$.value);
      });

      // why need this for loop? What is 300?
      for (let index = 0; index < 300; index++) {
        setTimeout(() => {
          if (!options$.value || !select$.value) return;
          setCords(options$.value, select$.value);
        }, index);
      }
    };
    const handleWindowScroll = () => {
      if (!options$.value || !select$.value) return;
      setCords(options$.value, select$.value);
    };

    watch(hoverOption, handleSrolltoOption);
    watch(textFilter, (val: string) => {
      if (val) {
        if (placeholder$.value) {
          placeholder$.value.style.transition = "0s";
        }
      } else {
        if (placeholder$.value) {
          placeholder$.value.style.transition = "";
        }
      }
    });
    watch(
      () => props.modelValue,
      (val) => {
        getValue();
        if (placeholder$.value) {
          if (val) {
            placeholder$.value.style.transition = "0s";
          } else {
            placeholder$.value.style.transition = "";
          }
        }
        nextTick(() => {
          if (!options$.value || !select$.value) return;
          if (props.multiple && activeOptions.value) {
            setCords(options$.value, select$.value);
          }
        });
        setTimeout(() => {
          ctx.emit("change", val);
        });
      },
    );
    watch(activeOptions, (val: boolean) => {
      nextTick(() => {
        if (val === true) {
          input$.value?.focus();
          insertOptions();
          window.addEventListener("resize", handleWindowResize);
          window.addEventListener("scroll", handleWindowScroll);
          window.addEventListener("mousedown", handleWindowClick);
          window.addEventListener("keydown", handleKeydown);
        } else {
          window.removeEventListener("resize", handleWindowResize);
          window.removeEventListener("scroll", handleWindowScroll);
          window.removeEventListener("mousedown", handleWindowClick);
          window.removeEventListener("keydown", handleKeydown);
        }
      });
      if (val === true) {
        childOptions.value = [];
        uids.value = [];
      }
    });

    const inputPlaceholder = computed((): string => {
      if (props.filter && !props.multiple) {
        if (activeFilter.value && hoverOption.value !== -1) {
          return childOptions.value[hoverOption.value]?.props.label as string;
        }
      }
      return "";
    });
    const getLabels = computed((): any[] => {
      const _valueLabel = valueLabel.value;
      let labels: any = [];
      if (Array.isArray(_valueLabel)) {
        _valueLabel.forEach((item: any) => {
          labels.push(item.label);
        });
      } else {
        labels = _valueLabel;
      }
      return labels;
    });
    const notData = computed(() => {
      instance.proxy?.$forceUpdate();
      return (
        childOptions.value.filter((e) => e.ctx.hiddenOption === false)
          .length === 0
      );
    });
    const getChips = computed(() => {
      let _chips: Array<Chip> = [];
      _chips = valueLabel.value.map((e) => {
        return {
          ...e,
          isCollapse: false,
        };
      });
      if (props.collapseChips) {
        // _chips = [_chips[0]];
        if (_chips.length > 1) {
          _chips[1] = {
            label: `+${_chips.length - 1}`,
            value: null,
            isCollapse: true,
          };
          _chips.splice(2);
        }
      }
      return _chips;
    });

    onMounted(() => {
      childOptions.value = loadAllOptions(instance.slots.default?.());
      getValue();
      renderSelect.value = true;

      nextTick(() => {
        instance.proxy?.$forceUpdate();
      });
    });
    onUpdated(() => {
      const h = chips$.value?.scrollHeight;
      input$.value!.style.height = `${h}px`;
    });
    onBeforeUnmount(() => {
      handleBlur();
      // removeElementId(selectId);
    });

    provide(SELECT_CONTEXT_KEY, {
      modelValue: toRef(props, "modelValue"),
      uids,
      hoverOption,
      multiple: props.multiple,
      renderSelect,
      childOptions,
      textFilter,
      targetSelect,
      targetChipClose,
      activeOptions,
      setHover,
      clickOption,
    });

    return {
      valueLabel,
      messageType,
      activeFilter,
      textFilter,
      getLabels,
      selectId,
      activeOptions,
      renderSelect,
      notData,

      getValue,
      handleWindowResize,
      handleWindowScroll,
      handleBlur,

      /**Select$ ref */
      mouseLeaveSelect,
      mouseEnterSelect,

      /** Input$ ref */
      handleInputEvent,
      handleOpenOptions,
      inputPlaceholder,

      /** Chips$ ref */
      handleChipsFocus,
      blur,
      handleChipClose,
      handleMouseEnterChip,
      handleMouseLeaveChip,
      handleMouseDownChips,
      getChips,

      /** Chips_input$ ref  */
      handleChipinputFocus,

      /** Options$ ref */
      mouseEnterOptionsRef,
      mouseLeaveOptionsRef,

      /** Icon arrow */
      clickArrowIcon,
      showClearable,

      /** Clearable */
      clearOptions,
      mouseLeaveClearable,
      mouseEnterClearable,

      /** DOM ref */
      options$,
      chips$,
      chips_input$,
      select$,
      input$,
      content$,
      placeholder$,
      scrollbar$,
      chip_close$,
      isTouch,
    };
  },
  computed: {
    bindRootStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : "",
      };
    },
    bindRootClass() {
      return [
        {
          block: this.block,
        },
        // colors
        {
          [`vs-component--primary`]:
            !this.danger &&
            !this.success &&
            !this.warn &&
            !this.dark &&
            !this.color,
        },
        { [`vs-component--danger`]: !!this.danger },
        { [`vs-component--warn`]: !!this.warn },
        { [`vs-component--success`]: !!this.success },
        { [`vs-component--dark`]: !!this.dark },
      ];
    },
    bindRefSelectClass() {
      return [
        { [`vs-select--state-${this.state}`]: this.state },
        {
          "vs-select--disabled": this.disabled,
          activeOptions: this.activeOptions,
          loading: this.loading,
          multiple: this.multiple,
        },
      ];
    },
    bindRefOptionsStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : "",
      };
    },
    bindRefOptionsClass() {
      return [
        {
          isColorDark: this.isColorDark,
        },
        // colors
        {
          [`vs-component--primary`]:
            !this.danger &&
            !this.success &&
            !this.warn &&
            !this.dark &&
            !this.color,
        },
        { [`vs-component--danger`]: !!this.danger },
        { [`vs-component--warn`]: !!this.warn },
        { [`vs-component--success`]: !!this.success },
        { [`vs-component--dark`]: !!this.dark },
      ];
    },
  },
});
</script>

<style lang="scss" src="./style.scss"></style>
