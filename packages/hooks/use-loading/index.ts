import type {
  LoadingData,
  /** LoadingFuncParams, */
  LoadingFuncReturn,
} from '@vuesax-alpha/constants'

export const useLoading =
  (/** params?: LoadingFuncParams */): LoadingFuncReturn => {
    const vm: any = {}

    const setText = (val: string) => {
      ;(vm.$data as LoadingData).text = val
    }
    const setProgress = (val: string | number) => {
      ;(vm.$data as LoadingData).progress = val
    }
    const setPercent = (val: string | number) => {
      ;(vm.$data as LoadingData).percent = val
    }
    return {
      close,
      setText,
      setPercent,
      setProgress,
    }
  }
