<template>
  <span :class="['badge', type, vertical]">
    {{ text || $slots.default }}
  </span>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type: string;
    text: string;
    vertical: string;
  }>(),
  {
    type: "tip",
    vertical: "top",
  }
);
</script>

<style lang="scss" scoped>
@import "../styles/use";


.badge {
  display: inline-block;
  font-size: 0.7rem;
  border-radius: 5px;
  padding: 1px 5px;
  color: #fff;
  margin-right: 0px;
  background-color: #42b983;
  cursor: default;
  pointer-events: none;
  user-select: none;
  &.middle {
    vertical-align: middle;
  }
  &.top {
    vertical-align: top;
  }
  &.accent {
    background: -color('accent-color');
  }
  &.text {
    background: -color('theme-color');
    color: #fff;
  }
}
.badge.tip,
.badge.green,
.badge.success {
  background-color: #42b983;
  color: #fff;
}
.badge.error,
.badge.danger {
  background: #ff4757;
  color: #fff;
  border: 0px;
}
.badge.warning,
.badge.warn,
.badge.yellow {
  background: #ffba00;
  color: #fff;
}
</style>
