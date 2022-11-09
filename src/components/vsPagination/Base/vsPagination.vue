<template>
  <div class="vs-pagination-content" :class="bindClass" :style="bindStyle">
    <div
      v-if="!onlyArrows && !$slots.default"
      class="vs-pagination__active"
      :class="{ move: activeClassMove }"
      :style="{ left: `${leftActive}px` }"
    >
      {{ paginationActive }}
    </div>
    <template v-else></template>

    <!-- prev -->
    <button
      v-if="!notArrows"
      class="prev vs-pagination__arrow"
      :disabled="infinite ? false : modelValue <= 1"
      @click="clickPrevBtn"
    >
      <slot v-if="$slots.arrowPrev" name="arrowPrev"></slot>
      <icon-arrow v-else></icon-arrow>
    </button>
    <template v-else></template>

    <!-- Slot default -->
    <div v-if="$slots.default" class="vs-pagination__slot">
      <slot></slot>
    </div>
    <template v-else></template>

    <div
      v-if="!onlyArrows && !$slots.default"
      class="vs-pagination"
      ref="pagination"
    >
      <Buttons :array="getPages">
        <template #dotted="{ item }">
          <div
            class="vs-pagination__dotted"
            :class="{
              next: modelValue === length ? false : item === '...>',
            }"
            @click="clickDottedBtn(item)"
          >
            <span class="dotted">...</span>
            <span class="con-arrows">
              <icon-arrow />
              <icon-arrow />
            </span>
          </div>
        </template>

        <template #button="{ item }">
          <button
            :ref="`btn${item}`"
            class="vs-pagination__button"
            :class="{
              active: item === modelValue,
              prevActive: item === modelValue - 1,
              nextActive: item === modelValue + 1,
              disabled: isDisabledItem(Number(item)),
              loading: isLoadingItem(Number(item)),
            }"
            @click="setValuePage(Number(item))"
          >
            {{ buttonsDotted ? "" : item }}
            <icon-loading
              class="vs-pagination__button__loading"
              v-if="isLoadingItem(Number(item))"
            />
            <template v-else></template>
          </button>
        </template>
      </Buttons>
    </div>
    <template v-else></template>

    <!-- next -->
    <button
      v-if="!notArrows"
      class="next vs-pagination__arrow"
      :disabled="infinite ? false : modelValue >= length"
      @click="clickNextBtn"
    >
      <slot v-if="$slots.arrowNext" name="arrowNext"></slot>
      <icon-arrow v-else></icon-arrow>
    </button>
    <template v-else></template>

    <!-- progress -->
    <div v-if="progress" class="vs-pagination__progress">
      <div class="progress" :style="{ width: `${getProgress}%` }"></div>
    </div>
    <template v-else></template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { includes } from "lodash";
import BaseComponent from "@/mixins/component.vue";

import Buttons from "./Buttons.vue";
import iconArrow from "@/components/icons/Arrow.vue";
import iconLoading from "@/components/icons/Loading.vue";

export default defineComponent({
  name: "vsPagination",
  extends: BaseComponent,
  components: {
    iconArrow,
    iconLoading,
    Buttons,
  },
  props: {
    modelValue: {
      type: Number,
      required: true,
      validator(mval: number) {
        return mval >= 1;
      },
    },
    infinite: Boolean,
    progress: Boolean,
    notMargin: Boolean,
    buttonsDotted: Boolean,
    notArrows: Boolean,
    onlyArrows: Boolean,
    circle: Boolean,
    square: Boolean,
    disabled: Boolean,
    length: {
      type: Number,
      default: 0,
      validator(l: number) {
        return l >= 1;
      },
    },
    max: {
      type: Number,
      default: 9,
      validator(m: number) {
        return m > 0;
      },
    },
    dottedNumber: {
      type: Number,
      default: 5,
      validator(n: number) {
        return n > 0;
      },
    },
    disabledItems: {
      type: Array<Number>,
      default: (): Array<number> => [],
    },
    loadingItems: {
      type: Array<Number>,
      default: (): Array<number> => [],
    },
  },
  data: () => ({
    val: 0,
    leftActive: 42, // left init, prev btn 40px and margin 2px
    activeClassMove: false,
  }),
  watch: {
    length() {
      this.$nextTick(() => {
        const offsetLeftPagination = (this.$refs.pagination as HTMLElement)
          .offsetLeft;
        this.leftActive =
          (this.$refs[`btn${this.modelValue}`] as HTMLElement).offsetLeft +
          offsetLeftPagination;
        setTimeout(() => {
          this.activeClassMove = false;
        }, 300);
      });
    },
    modelValue: {
      handler(newValue: number, oldValue: number) {
        this.handlerModelValue(newValue, oldValue);
      },
      immediate: true,
      flush: "post",
    },
  },
  computed: {
    bindStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : "",
      };
    },
    bindClass() {
      return [
        {
          buttonsDotted: this.buttonsDotted,
          circle: this.circle,
          square: this.square,
          disabled: this.disabled,
          notMargin: this.notMargin,
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
    isMobile() {
      return window.innerWidth < 600;
    },
    getProgress() {
      return (this.modelValue * 100) / this.length;
    },
    getPages() {
      const length = Number(this.length);
      const max = this.isMobile ? 5 : this.max;
      const even = max % 2 === 0 ? 1 : 0;
      const prevRange = Math.floor(max / 2);
      const nextRange = length - prevRange + 1 + even;

      if (
        this.modelValue >= prevRange &&
        this.modelValue <= nextRange &&
        !this.buttonsDotted
      ) {
        const start = this.modelValue - prevRange + 2;
        const end = this.modelValue + prevRange - 2 - even;
        return [1, "<...", ...this.getButtons(start, end), "...>", this.length];
      }
      if (!this.buttonsDotted && this.length > 6) {
        return [
          ...this.getButtons(1, prevRange),
          "...>",
          ...this.getButtons(nextRange, length),
        ];
      }
      if (this.buttonsDotted || this.length <= 6) {
        return [...this.getButtons(1, this.length == 0 ? 1 : this.length)];
      }
      return [];
    },
    paginationActive() {
      return this.buttonsDotted ? "" : this.modelValue;
    },
  },
  methods: {
    setValuePage(numberPage: number) {
      this.$emit("update:modelValue", numberPage);
    },
    isDisabledItem(item: number) {
      return includes(this.disabledItems, item);
    },
    isLoadingItem(item: number) {
      return includes(this.loadingItems, item);
    },
    getButtons(start: number = 1, end: number = 6) {
      const buttons = [];
      for (start > 0 ? start : 1; start <= end; start++) {
        buttons.push(start);
      }
      return buttons;
    },
    clickPrevBtn() {
      const newVal = this.modelValue - 1;
      if (newVal > 0) {
        this.setValuePage(newVal);
      } else if (this.infinite) {
        this.setValuePage(this.length);
      }
    },
    clickNextBtn() {
      const newVal = this.modelValue + 1;
      if (newVal <= this.length) {
        this.setValuePage(newVal);
      } else if (this.infinite) {
        this.setValuePage(1);
      }
    },
    clickDottedBtn(text: string | number = "...") {
      const isNotLastest =
        this.modelValue === this.length ? false : text === "...>";
      let newVal = isNotLastest
        ? this.modelValue + this.dottedNumber
        : this.modelValue - this.dottedNumber;
      if (newVal > this.length) {
        newVal = this.length;
      } else if (newVal < 1) {
        newVal = 1;
      }
      this.setValuePage(newVal);
    },
    isButtonDotted(item: number | string) {
      return item === "...>" || item === "<...";
    },
    handlerModelValue(newValue: number, oldValue: number) {
      if (this.isDisabledItem(newValue) || this.isLoadingItem(newValue)) {
        let newVal = newValue;
        if (newValue > oldValue) {
          newVal += 1;
        } else {
          newVal -= 1;
        }

        if (newVal > this.length) {
          newVal = this.infinite ? 1 : oldValue;
        } else if (newVal <= 0) {
          newVal = this.infinite ? this.length : oldValue;
        }
        this.setValuePage(newVal);
      } else {
        if (this.$refs.pagination) {
          this.activeClassMove = true;
          this.$nextTick(() => {
            const offsetLeftPagination = (this.$refs.pagination as HTMLElement)
              .offsetLeft;
            const offsetLeftButtonActive = (
              this.$refs[`btn${newValue}`] as HTMLElement
            ).offsetLeft;

            this.leftActive = offsetLeftButtonActive + offsetLeftPagination;

            setTimeout(() => {
              this.activeClassMove = false;
            }, 300);
          });
        }
      }
    },
  },

  mounted() {
    this.handlerModelValue(this.modelValue, 0);
  },
  beforeMount() {
    if (this.notArrows) this.leftActive = 0;
    if (this.buttonsDotted) this.leftActive = 21;
  },
});
</script>

<style lang="scss" src="./style.scss"></style>

