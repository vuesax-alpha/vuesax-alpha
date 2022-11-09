<template>
  <div 
    class="vs-col" 
    :class="bindClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vsCol",
  props: {
    sm  : [String, Number],
    smO : [String, Number],
    md  : [String, Number],
    mdO : [String, Number],
    lg  : [String, Number],
    lgO : [String, Number],
    xl  : [String, Number],
    xlO : [String, Number],
    xxl : [String, Number],
    xxlO: [String, Number],
  },
  computed: {
    bindClass() {
      return [
        // `order-${this.order}`,
        this.smO && `sm-o-${this.smO}`,
        this.mdO &&`md-o-${this.mdO}`,
        this.lgO &&`lg-o-${this.lgO}`,
        this.xlO &&`xl-o-${this.xlO}`,
        this.xxlO &&`xxl-o-${this.xxlO}`,
        this.sm &&`sm-${this.sm}`,
        this.md &&`md-${this.md}`,
        this.lg &&`lg-${this.lg}`,
        this.xl &&`xl-${this.xl}`,
        this.xxl &&`xxl-${this.xxl}`,
      ];
    },
  },
});
</script>

<style lang="scss">
// sm-o === sm-offset
// layout 12 column

@import "../../styles/_mixins.scss";
$sizes: (
  1: 8.33%,
  2: 16.66%,
  3: 25%,
  4: 33.33%,
  5: 41.66%,
  6: 50%,
  7: 58.33%,
  8: 66.66%,
  9: 75%,
  10: 83.33%,
  11: 91.66%,
  12: 100%
);
.vs-col {
  width: 100%;
  position: relative;
  padding: var(--row-gutter) var(--col-gutter);
}

.sm-0 {
  display: none;
}
@for $i from 1 through 12 {
  .sm-#{$i} {
    width: map-get($map: $sizes, $key: $i);
    display: block;
  }
  .sm-o-#{$i} {
    margin-left: map-get($map: $sizes, $key: $i);
  }
}
@include break-point('smx') {
  .smx-0 {
    display: none;
  }
  @for $i from 1 through 12 {
    .smx-#{$i} {
      width: map-get($map: $sizes, $key: $i);
      display: block;
    }
    .smx-o-#{$i} {
      margin-left: map-get($map: $sizes, $key: $i);
    }
  }
}
@include break-point('md') {
  .md-0 {
    display: none;
  }
  @for $i from 1 through 12 {
    .md-#{$i} {
      width: map-get($map: $sizes, $key: $i);
      display: block;
    }
    .md-o-#{$i} {
      margin-left: map-get($map: $sizes, $key: $i);
    }
  }
}
@include break-point('lg') {
  .lg-0 {
    display: none;
  }
  @for $i from 1 through 12 {
    .lg-#{$i} {
      width: map-get($map: $sizes, $key: $i);
      display: block;
    }
    .lg-o-#{$i} {
      margin-left: map-get($map: $sizes, $key: $i);
    }
  }
}
@include break-point('xl') {
  .xl-0 {
    display: none;
  }
  @for $i from 1 through 12 {
    .xl-#{$i} {
      width: map-get($map: $sizes, $key: $i);
      display: block;
    }
    .xl-o-#{$i} {
      margin-left: map-get($map: $sizes, $key: $i);
    }
  }
}
@include break-point('xxl') {
  .xxl-0 {
    display: none;
  }
  @for $i from 1 through 12 {
    .xxl-#{$i} {
      width: map-get($map: $sizes, $key: $i);
      display: block;
    }
    .xxl-#{$i} {
      margin-left: map-get($map: $sizes, $key: $i);
    }
  }
}
</style>