import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  provide,
  ref,
  watch,
} from 'vue'
import {
  buildProps,
  debugWarn,
  definePropType,
  getVsColor,
  iconPropType,
  isNumber,
  mutable,
} from '@vuesax-alpha/utils'
import { useColorProp, useNamespace } from '@vuesax-alpha/hooks'
import { paginationContextKey } from '@vuesax-alpha/tokens'
import { ChevronLeft, ChevronRight } from '@vuesax-alpha/icons-vue'

import Next from './components/next.vue'
import Prev from './components/prev.vue'
import Sizes from './components/sizes.vue'
import Jumper from './components/jumper.vue'
import Total from './components/total.vue'
import Pager from './components/pager.vue'

import type { ExtractPropTypes, VNode } from 'vue'

/**
 * It it user's responsibility to guarantee that the value of props.total... is number
 * (same as pageSize, defaultPageSize, currentPage, defaultCurrentPage, pageCount)
 * Otherwise we can reasonable infer that the corresponding field is absent
 */
const isAbsent = (v: unknown): v is undefined => typeof v !== 'number'
type LayoutKey =
  | 'prev'
  | 'pager'
  | 'next'
  | 'jumper'
  | '->'
  | 'total'
  | 'slot'
  | 'sizes'

export const paginationProps = buildProps({
  /**
   * @description Component color - Accept Vuesax's color, Hex, rgb
   */
  color: useColorProp,

  /** @description total item count */
  total: { type: Number },

  /** @description default initial value of current page */
  defaultCurrentPage: { type: Number },

  /** @description current page number */
  currentPage: { type: Number },

  /** @description default initial value of page size */
  defaultPageSize: { type: Number },

  /** @description options of item count per page */
  pageSize: { type: Number },

  /**
   * @description total page count. Set either `total` or `page-count` and pages will be displayed; if you need `page-sizes`, `total` is required
   */
  pageCount: { type: Number },

  /**
   * @description number of pages to show. Pagination collapses when the total page count exceeds this value
   */
  pagerCount: {
    type: Number,
    validator: (value: unknown) => {
      return (
        isNumber(value) &&
        Math.trunc(value) === value &&
        value > 4 &&
        value < 22 &&
        value % 2 === 1
      )
    },
    default: 7,
  },

  /** @description layout of Pagination, an array or string elements separated with a comma */
  layout: {
    type: definePropType<LayoutKey[] | LayoutKey>([String, Array]),
    default: () =>
      mutable([
        'prev',
        'pager',
        'next',
        'jumper',
        '->',
        'total',
        'slot',
        'sizes',
      ] as const),
  },

  /** @description item count of each page */
  pageSizes: {
    type: definePropType<number[]>(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100] as const),
  },

  /** @description */
  hideOnSinglePage: { type: Boolean },

  /** @description text for the prev button */
  prevText: {
    type: String,
    default: '',
  },
  /** @description icon for the prev button, higher priority of `prev-text` */
  prevIcon: {
    type: iconPropType,
    default: () => ChevronLeft,
  },
  /** @description text for the next button */
  nextText: {
    type: String,
    default: '',
  },
  /** @description icon for the next button, higher priority of `next-text` */
  nextIcon: {
    type: iconPropType,
    default: () => ChevronRight,
  },

  /** @description Determine if the pagination is infinite. */
  infinite: { type: Boolean, default: false },

  /** @description Add a progress bar to the component determined by the current page and the total (length) of pages. */
  progress: { type: Boolean },

  /** @description Change the margin between the items causing them to be fully glued and the radius is removed making them square. */
  notMargin: { type: Boolean },

  /** @description Makes the buttons not have the internal number and changes its size. */
  buttonsDotted: { type: Boolean, default: false },

  shape: {
    type: String,
    values: ['circle', 'square'] as const,
    default: '',
  },

  /** @description Determine if the entire component is in the disabled state. */
  disabled: { type: Boolean, default: false },

  /** @description Determine which items are in the disabled state. */
  disabledItems: {
    type: definePropType<number[]>(Array),
    default: (): number[] => [],
  },

  /** @description Determine which items are in the charging state. */
  loadingItems: {
    type: definePropType<number[]>(Array),
    default: (): number[] => [],
  },
} as const)

export type PaginationProps = ExtractPropTypes<typeof paginationProps>

export const paginationEmits = {
  'update:current-page': (val: number) => isNumber(val),
  'update:page-size': (val: number) => isNumber(val),
  'size-change': (val: number) => isNumber(val),
  'page-change': (val: number) => isNumber(val),
  'prev-click': (val: number) => isNumber(val),
  'next-click': (val: number) => isNumber(val),
}

export type PaginationEmits = typeof paginationEmits

const COMPONENT_NAME = 'VsPagination'

export default defineComponent({
  name: COMPONENT_NAME,
  props: paginationProps,
  emits: paginationEmits,
  setup(props, { emit, slots }) {
    const ns = useNamespace('pagination')

    const vnodeProps = getCurrentInstance()!.vnode.props || {}

    // we can find @xxx="xxx" props on `vnodeProps` to check if user bind corresponding events
    const hasCurrentPageListener =
      'onUpdate:currentPage' in vnodeProps ||
      'onUpdate:current-page' in vnodeProps ||
      'onCurrentChange' in vnodeProps
    const hasPageSizeListener =
      'onUpdate:pageSize' in vnodeProps ||
      'onUpdate:page-size' in vnodeProps ||
      'onSizeChange' in vnodeProps

    const assertValidUsage = computed(() => {
      // Users have to set either one, otherwise count of pages cannot be determined
      if (isAbsent(props.total) && isAbsent(props.pageCount))
        return 'need to set props `total` or `pageCount`, otherwise count of pages cannot be determined.'

      // <pagination ...otherProps :current-page="xxx" /> without corresponding listener is forbidden now
      // Users have to use two way binding of `currentPage`
      // If users just want to provide a default value, `defaultCurrentPage` is here for you
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener)
        return 'You have to use v-model binding of `currentPage`.\nIf you just want to provide a default value, `defaultCurrentPage` is here for you.'

      // When you want to change sizes, things get more complex, detailed below
      // Basically the most important value we need is page count
      // either directly from props.pageCount
      // or calculated from props.total
      // we will take props.pageCount precedence over props.total
      if (props.layout.includes('sizes')) {
        if (!isAbsent(props.pageCount)) {
          // if props.pageCount is assign by user, then user have to watch pageSize change
          // and recalculate pageCount
          if (!hasPageSizeListener)
            return 'Your layout having `sizes`. If `pageCount` is assign, then you have to watch `pageSize` change and recalculate `pageCount`.'
        } else if (!isAbsent(props.total)) {
          // Otherwise, we will see if user have props.pageSize defined
          // If so, meaning user want to have pageSize controlled himself/herself from component
          // Thus page size listener is required
          // users are account for page size change
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return 'Your layout having `sizes`. If you have `pageSize` defined, meaning you want to have `pageSize` controlled yourself from component. Thus page size `listener` is required, you are account for `pageSize` changed.'
            }
          } else {
            // (else block just for explaination)
            // else page size is controlled by pagination internally
          }
        }
      }
      return true
    })

    const innerPageSize = ref(
      isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize
    )

    const innerCurrentPage = ref(
      isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage
    )

    const pageSizeBridge = computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize
      },
      set(v: number) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v
        }
        if (hasPageSizeListener) {
          emit('update:page-size', v)
          emit('size-change', v)
        }
      },
    })

    const pageCountBridge = computed<number>(() => {
      let pageCount = 0
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value))
      }
      return pageCount
    })

    const currentPageBridge = computed<number>({
      get() {
        return isAbsent(props.currentPage)
          ? innerCurrentPage.value
          : props.currentPage
      },
      set(v) {
        let newCurrentPage = v
        if (v < 1) {
          newCurrentPage = props.infinite ? pageCountBridge.value : 1
        } else if (v > pageCountBridge.value) {
          newCurrentPage = props.infinite ? 1 : pageCountBridge.value
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage
        }
        if (hasCurrentPageListener) {
          emit('update:current-page', newCurrentPage)
          emit('page-change', newCurrentPage)
        }
      },
    })

    watch(currentPageBridge, (newValue, oldValue) => {
      if (isPagerDisabled(newValue) || isPagerLoading(newValue)) {
        let newVal = newValue
        if (newValue > oldValue) {
          newVal += 1
        } else {
          newVal -= 1
        }

        if (newVal > pageCountBridge.value) {
          newVal = props.infinite ? 1 : oldValue
        } else if (newVal <= 0) {
          newVal = props.infinite ? pageCountBridge.value : newValue + 1
        }

        currentPageBridge.value = newVal
      }
    })

    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val) currentPageBridge.value = val
    })

    const isPagerLoading = (pager = Number.NaN) =>
      props.loadingItems.includes(pager)

    const isPagerDisabled = (pager = Number.NaN) =>
      props.disabled || props.disabledItems.includes(pager)

    function handleCurrentChange(val: number) {
      currentPageBridge.value = val
    }

    function handleSizeChange(val: number) {
      pageSizeBridge.value = val
      const newPageCount = pageCountBridge.value
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount
      }
    }

    function prev() {
      if (props.disabled) return
      currentPageBridge.value -= 1
      emit('prev-click', currentPageBridge.value)
    }

    function next() {
      if (props.disabled) return
      currentPageBridge.value += 1
      emit('next-click', currentPageBridge.value)
    }

    function addClass(element: any, cls: string) {
      if (element) {
        if (!element.props) {
          element.props = {}
        }
        element.props.class = [element.props.class, cls].join(' ')
      }
    }

    provide(paginationContextKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      buttonsDotted: computed(() => props.buttonsDotted),
      infinite: computed(() => props.infinite),
      loadingItems: computed(() => props.loadingItems),
      disabledItems: computed(() => props.disabledItems),
      isPagerDisabled,
      isPagerLoading,
      changeEvent: handleCurrentChange,
      handleSizeChange,
    })

    return () => {
      if (assertValidUsage.value != true) {
        debugWarn(COMPONENT_NAME, assertValidUsage.value)
        return null
      }
      if (!props.layout.length) return null
      if (props.hideOnSinglePage && pageCountBridge.value <= 1) return null

      const rootChildren: Array<VNode | VNode[] | null> = []
      const rightWrapperChildren: Array<VNode | VNode[] | null> = []
      const rightWrapperRoot = h(
        'div',
        { class: ns.e('rightwrapper') },
        rightWrapperChildren
      )
      const TEMPLATE_MAP: Record<
        Exclude<LayoutKey, '->'>,
        VNode | VNode[] | null
      > = {
        prev: h(Prev, {
          prevText: props.prevText,
          prevIcon: props.prevIcon,
          onClick: prev,
        }),
        jumper: h(Jumper),
        pager: h(Pager, {
          color: props.color,
          progress: props.progress,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
        }),
        next: h(Next, {
          nextText: props.nextText,
          nextIcon: props.nextIcon,
          onClick: next,
        }),
        sizes: h(Sizes, {
          pageSize: pageSizeBridge.value,
          pageSizes: props.pageSizes,
        }),
        slot:
          slots?.default?.({
            currentPage: currentPageBridge.value,
            total: props.total,
            pageSize: pageSizeBridge.value,
            pageSizes: props.pageSizes,
            pagerCount: props.pagerCount,
          }) ?? null,
        total: h(Total, { total: isAbsent(props.total) ? 0 : props.total }),
      }

      const components = props.layout
        .toString()
        .split(',')
        .map((item: string) => item.trim()) as LayoutKey[]

      let haveRightWrapper = false

      components.forEach((c) => {
        if (c === '->') {
          haveRightWrapper = true
          return
        }
        if (!haveRightWrapper) {
          rootChildren.push(TEMPLATE_MAP[c])
        } else {
          rightWrapperChildren.push(TEMPLATE_MAP[c])
        }
      })

      addClass(rootChildren[0], ns.is('first'))
      addClass(rootChildren[rootChildren.length - 1], ns.is('last'))

      if (haveRightWrapper && rightWrapperChildren.length > 0) {
        addClass(rightWrapperChildren[0], ns.is('first'))
        addClass(
          rightWrapperChildren[rightWrapperChildren.length - 1],
          ns.is('last')
        )
        rootChildren.push(rightWrapperRoot)
      }
      return h(
        'div',
        {
          role: 'pagination',
          'aria-label': 'pagination',
          class: [
            ns.b(),
            ns.is(props.shape),
            ns.is('buttons-dotted', props.buttonsDotted),
            ns.is('not-margin', props.notMargin),
          ],
          style: ns.cssVar({
            color: getVsColor(props.color),
          }),
        },
        rootChildren
      )
    }
  },
})
