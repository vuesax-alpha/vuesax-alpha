import { inject } from 'vue'
import { paginationContextKey } from '@vuesax-alpha/tokens/pagination'

export const usePagination = () => {
  const pagination = inject(paginationContextKey)!
  return pagination
}
