<template>
  <div :class="{ hasOpenLoading }" class="center">
    <div
      v-for="(type) in types"
      :ref="el => $refs.push(el)"
      @click="handleClickLoading(type)"
      class="box-loading"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, onBeforeUpdate } from "vue"
import { loading } from "vuesax-alpha"

const types = [
  "default",
  "waves",
  "corners",
  "border",
  "points",
  "square",
  "gradient",
  "rectangle",
  "circles",
  "square-rotate",
  "scale"
]

const hasOpenLoading = ref(false)
let   $refs          = reactive([]) // refs HTMLElement

const handleClickLoading = (type: string) => {
  const loadingInstance = loading({
    type
  })
  hasOpenLoading.value = true
  setTimeout(() => {
    loadingInstance.close()
    hasOpenLoading.value = false
  }, 3000)
}
const openLoading = (type: string, ref: string) => {
  loading({
    target: ref,
    text: type,
    type
  })
}

onBeforeUpdate(() => {
  $refs = []
})

onMounted(() => {
  types.forEach((type, i) => {
    openLoading(type, $refs[i])
  })
})
</script>
<style scoped lang="scss">
@import "../../assets/styles/mixin";
.center {
	flex-wrap: wrap;
	z-index: 200;
	position: relative;
	padding: 20px 10px;
	&.hasOpenLoading {
		.box-loading {
			opacity: 0;
			transform: scale(0.7);
		}
	}
}
.box-loading {
	width: 120px;
	height: 120px;
	position: relative;
	margin: 5px;
	border-radius: 20px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.07);
	overflow: hidden;
	cursor: pointer;
	transition: all 0.25s ease;
	&:hover {
		transform: translate(0, -5px);
		box-shadow: 0px 15px 20px -10px rgba(0,0,0,0.09);
	}
	>>> .vs-loading {
    padding: 0px;
    background: transparent !important;

    &.vs-loading--gradient,
    &.vs-loading--square {
      .vs-loading__load__animation__2 {
        background: -color('theme-layout') !important;
      }
    }
  }
}
</style>