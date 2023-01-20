import type { MaybeRef } from '@vueuse/core'

export type LoadingType =
  | 'atom'
  | 'border'
  | 'ball'
  | 'circles'
  | 'corners'
  | 'default'
  | 'gradient'
  | 'points'
  | 'rectangle'
  | 'scale'
  | 'square'
  | 'square-rotate'
  | 'waves'

export type LoadingData = {
  background?: string
  color?: string
  opacity?: string
  isVisible?: boolean
  percent?: string | number
  progress?: string | number
  scale?: string | number
  target?: MaybeRef<HTMLElement>
  text?: string
  type?: LoadingType
}

export type LoadingFuncParams = LoadingData & {
  hidden?: boolean
}

export type LoadingFuncReturn = {
  close: () => void
  setText: (text: string) => void
  setProgress: (progress: string | number) => void
  setPercent: (percent: string | number) => void
}
