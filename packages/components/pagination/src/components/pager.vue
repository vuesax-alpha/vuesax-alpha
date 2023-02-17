<template>
  <div ref="pagerRef" :class="nsPager.b()">
    <div
      v-if="pageCount > 0"
      :class="[
        nsPager.is('active', currentPage === 1),
        nsPager.is('disabled', disabled),
      ]"
      class="number"
      :aria-current="currentPage === 1"
      aria-label="1"
      :tabindex="tabindex"
      @click="onPageClick(1)"
      @keyup.enter="onPageClick(1)"
    >
      1
    </div>
    <div
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
      @click="onMoreClick('prev')"
      @keyup.enter="onMoreClick('prev')"
    >
      <chevron-left v-if="(quickPrevHover || quickPrevFocus) && !disabled" />
      <span v-else>...</span>
    </div>
    <div
      v-for="pager in pagers"
      :key="pager"
      :class="[
        nsPager.is('active', currentPage === pager),
        nsPager.is('disabled', disabled),
      ]"
      class="number"
      :aria-label="`${pager}`"
      :aria-current="currentPage === pager"
      :tabindex="tabindex"
      @click="onPageClick(pager)"
      @keyup.enter="onPageClick(pager)"
    >
      {{ pager }}
    </div>
    <div
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
      @click="onMoreClick('next')"
      @keyup.enter="onMoreClick('next')"
    >
      <chevron-right v-if="(quickNextHover || quickNextFocus) && !disabled" />
      <span v-else>...</span>
    </div>
    <div
      v-if="pageCount > 1"
      :class="[
        nsPager.is('active', currentPage === pageCount),
        nsPager.is('disabled', disabled),
      ]"
      class="number"
      :aria-current="currentPage === pageCount"
      :aria-label="`${pageCount}`"
      :tabindex="tabindex"
      @click="onPageClick(pageCount)"
      @keyup.enter="onPageClick(pageCount)"
    >
      {{ pageCount }}
    </div>

    <span
      :class="[nsPager.e('aria-active'), nsPager.is('change', isChange)]"
      :style="pageActive"
    >
      {{ currentPage }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, reactive, ref, watch, watchEffect } from 'vue'
import { isNil } from 'lodash-unified'
import { useNamespace } from '@vuesax-alpha/hooks'
import { ChevronLeft, ChevronRight } from '@vuesax-alpha/icons-vue'
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

const pagerRef = ref<HTMLElement>()
const showPrevMore = ref(false)
const showNextMore = ref(false)
const quickPrevHover = ref(false)
const quickNextHover = ref(false)
const quickPrevFocus = ref(false)
const quickNextFocus = ref(false)
const isChange = ref(false)
const pageActive = reactive({
  left: 0,
  top: 0,
})
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

watch([pagerRef, currentPage], () => {
  nextTick(() => {
    const pageActived = pagerRef.value?.querySelector(
      `[aria-label="${currentPage.value}"]`
    )

    // current page changed but dom not changing aria-label
    // => pageActive null
    // need to query after dom updated
    if (isNil(pageActived) || isNil(pagerRef.value)) {
      return Object.assign(pageActive, {
        left: 0,
        top: 0,
      })
    }

    const pageActiveBounding = pageActived.getBoundingClientRect()
    const pagerBounding = pagerRef.value.getBoundingClientRect()

    onChange()

    Object.assign(pageActive, {
      left: `${pageActiveBounding.left - pagerBounding.left}px`,
      top: `${pagerBounding.top - pagerBounding.top}px`,
    })
  })
})

function onChange() {
  isChange.value = true
  setTimeout(() => (isChange.value = false), 300)
}
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
// function onEnter(e: UIEvent) {
//   const target = e.target as HTMLElement
//   if (
//     target.tagName.toLowerCase() === 'li' &&
//     Array.from(target.classList).includes('number')
//   ) {
//     const newPage = Number(target.textContent)
//     if (newPage !== currentPage.value) {
//       emit('change', newPage)
//     }
//   } else if (
//     target.tagName.toLowerCase() === 'li' &&
//     Array.from(target.classList).includes('more')
//   ) {
//     onPagerClick(e)
//   }
// }
// function onPagerClick(event: UIEvent) {
//   const target = event.target as HTMLElement
//   if (target.tagName.toLowerCase() === 'ul' || disabled.value) {
//     return
//   }
//   let newPage = Number(target.textContent)

//   const pagerCountOffset = props.pagerCount - 2
//   if (target.className.includes('more')) {
//     if (target.className.includes('quickprev')) {
//       newPage = currentPage.value - pagerCountOffset
//     } else if (target.className.includes('quicknext')) {
//       newPage = currentPage.value + pagerCountOffset
//     }
//   }
//   if (!Number.isNaN(+newPage)) {
//     if (newPage < 1) {
//       newPage = 1
//     }
//     if (newPage > pageCount.value) {
//       newPage = pageCount.value
//     }
//   }
//   if (newPage !== currentPage.value) {
//     emit('change', newPage)
//   }
// }

function onMoreClick(key: 'prev' | 'next') {
  let newPage: number = currentPage.value
  const pagerCountOffset = props.pagerCount - 2

  if (key == 'prev') {
    newPage = currentPage.value - pagerCountOffset
  } else if (key == 'next') {
    newPage = currentPage.value + pagerCountOffset
  }
  emitChange(newPage)
}

function onPageClick(page: number) {
  if (!Number.isNaN(+page)) {
    if (page < 1) page = 1
    if (page > pageCount.value) page = pageCount.value
  }
  if (page != currentPage.value) emitChange(page)
}

function emitChange(page: number) {
  if (disabled.value || Number.isNaN(+page)) return
  emit('change', page)
}
</script>
