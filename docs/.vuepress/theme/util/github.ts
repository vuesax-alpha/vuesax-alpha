import { unref } from 'vue'
import { createFetch } from '@vueuse/core'
import type { MaybeRef } from '@vueuse/core'
// import { REPO_PATH } from '@vuesax-alpha/build-constants'
import type { CommitLog } from '../shared/client/github'

/**
 * Custom a fetch git-commit
 */
export const customCommitFetch = createFetch({
  baseUrl: `https://api.github.com/repos/vuesax-alphax/vuesax-alpha/commits?path=docs`,
  options: {
    timeout: 500,
    refetch: true,
    afterFetch: (ctx) => {
      ctx.data = JSON.parse(ctx.data || '[]')
      return ctx
    },
  },
})

export const useCommitLog = (path: MaybeRef<string>) => {
  return customCommitFetch<CommitLog[]>(unref(path))
}
