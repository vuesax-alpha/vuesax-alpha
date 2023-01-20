<template>
  <ul :class="nsPager.b()" @click="onPagerClick" @keyup.enter="onEnter">
    <li
      v-if="pageCount > 0"
      :class="[
        nsPager.is('active', currentPage === 1),
        nsPager.is('disabled', disabled),
      ]"
      class="number"
      :aria-current="currentPage === 1"
      :tabindex="tabindex"
    >
      1
    </li>
    <li
      v-if="showPrevMore"
      :class="[
        'more',
        'btn-quickprev',
        nsIcon.b(),
        nsPager.is('disabled', disabled),
      ]"
      :tabindex="tabindex"
      @mouseenter="onMouseEnter(true)"
      @mouseleave="quickPrevHover = false"
      @focus="onFocus(true)"
      @blur="quickPrevFocus = false"
    >
      <d-arrow-left v-if="(quickPrevHover || quickPrevFocus) && !disabled" />
      <more-filled v-else />
    </li>
    <li
      v-for="pager in pagers"
      :key="pager"
      :class="[
        nsPager.is('active', currentPage === pager),
        nsPager.is('disabled', disabled),
      ]"
      class="number"
      :aria-current="currentPage === pager"
      :tabindex="tabindex"
    >
      {{ pager }}
    </li>
    <li
      v-if="showNextMore"
      :class="[
        'more',
        'btn-quicknext',
        nsIcon.b(),
        nsPager.is('disabled', disabled),
      ]"
      :tabindex="tabindex"
      @mouseenter="onMouseEnter()"
      @mouseleave="quickNextHover = false"
      @focus="onFocus()"
      @blur="quickNextFocus = false"
    >
      <d-arrow-right v-if="(quickNextHover || quickNextFocus) && !disabled" />
      <more-filled v-else />
    </li>
    <li
      v-if="pageCount > 1"
      :class="[
        nsPager.is('active', currentPage === pageCount),
        nsPager.is('disabled', disabled),
      ]"
      class="number"
      :aria-current="currentPage === pageCount"
      :tabindex="tabindex"
    >
      {{ pageCount }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { usePagination } from '../usePagination'
import { paginationPagerProps } from './pager'

defineOptions({
  name: 'VsPaginationPager',
})

const props = defineProps(paginationPagerProps)
const emit = defineEmits(['change'])
const nsPager = useNamespace('pager')
const nsIcon = useNamespace('icon')
const { currentPage, disabled, pageCount } = usePagination()

const showPrevMore = ref(false)
const showNextMore = ref(false)
const quickPrevHover = ref(false)
const quickNextHover = ref(false)
const quickPrevFocus = ref(false)
const quickNextFocus = ref(false)
const pagers = computed(() => {
  const pagerCount = props.pagerCount
  const halfPagerCount = (pagerCount - 1) / 2

  let showPrevMore = false
  let showNextMore = false
  if (pageCount.value > pagerCount) {
    if (currentPage.value > pagerCount - halfPagerCount) {
      showPrevMore = true
    }
    if (currentPage.value < pageCount.value - halfPagerCount) {
      showNextMore = true
    }
  }
  const array: number[] = []
  if (showPrevMore && !showNextMore) {
    const startPage = pageCount.value - (pagerCount - 2)
    for (let i = startPage; i < pageCount.value; i++) {
      array.push(i)
    }
  } else if (!showPrevMore && showNextMore) {
    for (let i = 2; i < pagerCount; i++) {
      array.push(i)
    }
  } else if (showPrevMore && showNextMore) {
    const offset = Math.floor(pagerCount / 2) - 1
    for (
      let i = currentPage.value - offset;
      i <= currentPage.value + offset;
      i++
    ) {
      array.push(i)
    }
  } else {
    for (let i = 2; i < pageCount.value; i++) {
      array.push(i)
    }
  }
  return array
})
const tabindex = computed(() => (disabled.value ? -1 : 0))
watchEffect(() => {
  const halfPagerCount = (props.pagerCount - 1) / 2
  showPrevMore.value = false
  showNextMore.value = false
  if (pageCount.value! > props.pagerCount) {
    if (currentPage.value > props.pagerCount - halfPagerCount) {
      showPrevMore.value = true
    }
    if (currentPage.value < pageCount.value! - halfPagerCount) {
      showNextMore.value = true
    }
  }
})
function onMouseEnter(forward = false) {
  if (disabled.value) return
  if (forward) {
    quickPrevHover.value = true
  } else {
    quickNextHover.value = true
  }
}
function onFocus(forward = false) {
  if (forward) {
    quickPrevFocus.value = true
  } else {
    quickNextFocus.value = true
  }
}
function onEnter(e: UIEvent) {
  const target = e.target as HTMLElement
  if (
    target.tagName.toLowerCase() === 'li' &&
    Array.from(target.classList).includes('number')
  ) {
    const newPage = Number(target.textContent)
    if (newPage !== currentPage.value) {
      emit('change', newPage)
    }
  } else if (
    target.tagName.toLowerCase() === 'li' &&
    Array.from(target.classList).includes('more')
  ) {
    onPagerClick(e)
  }
}
function onPagerClick(event: UIEvent) {
  const target = event.target as HTMLElement
  if (target.tagName.toLowerCase() === 'ul' || disabled.value) {
    return
  }
  let newPage = Number(target.textContent)

  const pagerCountOffset = props.pagerCount - 2
  if (target.className.includes('more')) {
    if (target.className.includes('quickprev')) {
      newPage = currentPage.value - pagerCountOffset
    } else if (target.className.includes('quicknext')) {
      newPage = currentPage.value + pagerCountOffset
    }
  }
  if (!Number.isNaN(+newPage)) {
    if (newPage < 1) {
      newPage = 1
    }
    if (newPage > pageCount.value) {
      newPage = pageCount.value
    }
  }
  if (newPage !== currentPage.value) {
    emit('change', newPage)
  }
}
</script>
