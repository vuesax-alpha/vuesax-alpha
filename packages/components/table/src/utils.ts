import { toLower } from 'lodash-unified'
import { useNamespace } from '@vuesax-alpha/hooks'
/**
 *
 * @param selected array seleted
 * @param data
 * @return data or empty array
 */
export const toggleSelectAll = <T = any>(selected: T[], data: T[]): T[] => {
  if (selected.length !== data.length) {
    return [...data]
  }
  return []
}

export const sortData = <T = Record<any, unknown>>(
  event: Event,
  data: T[],
  sortKey: keyof T,
  type: 'desc' | 'asc' = 'desc'
) => {
  const _sortKey = toLower(String(sortKey))
  let sortType: string | undefined = type
  const ns = useNamespace('table')
  const el: HTMLElement | null = event.target as HTMLElement | null

  data = [...data].sort(returnOriginalIndex)

  if (!el) return []

  if (el.dataset[`sortType${_sortKey}`] === 'desc') {
    sortType = 'asc'
  } else if (el.dataset[`sortType${_sortKey}`] === 'asc') {
    sortType = undefined
  }

  if (sortType === 'desc') {
    data.forEach((item: any, index: number) => {
      item[`originalIndex${_sortKey}`] = index
    })
  }

  el.dataset[`sortType${_sortKey}`] = sortType
  el.dataset['sortType'] = sortType
  el.dataset['sortKey'] = `sortType${_sortKey}`

  const parent = el.closest(ns.e('tr'))
  const thsort = parent?.querySelectorAll('th.is-sort')

  thsort?.forEach((th: any) => {
    if (th !== el) {
      th.dataset.sortType = null
      th.dataset[th.dataset[`sortKey`]] = null
    }
  })

  function compare(a: any, b: any) {
    if (a[_sortKey] < b[_sortKey]) {
      return sortType !== 'desc' ? 1 : -1
    }
    if (a[_sortKey] > b[_sortKey]) {
      return sortType !== 'desc' ? -1 : 1
    }
    return 0
  }

  function returnOriginalIndex(a: any, b: any) {
    return a[`originalIndex${_sortKey}`] - b[`originalIndex${_sortKey}`]
  }

  return sortType !== undefined
    ? [...data].sort(compare)
    : [...data].sort(returnOriginalIndex)
}

export const getPage = <T = any>(
  data: T[],
  page: number,
  maxItems = 5
): T[] => {
  const max = Math.ceil(page * maxItems)
  const min = max - maxItems
  return data.filter((_: any, index: number) => index >= min && index < max)
}
