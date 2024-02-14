import { isNumber, isString } from 'lodash'
import type { DirectiveBinding, ObjectDirective } from 'vue'

const animateCssPrefix = 'animate__'

type AnimateName = string

export type AnimateOptions = {
  name: AnimateName

  /**
   * Duration of the animation in milliseconds.
   */
  duration?: number

  /**
   * Delay in milliseconds before the animation starts.
   *
   * @default 0
   */
  delay?: number
  /**
   * Number of times to repeat the animation.
   *
   * @default 1
   */
  repeat?: number | 'infinite'

  type?: 'transition' | 'animation'
}

export type AnimateWithInOut = {
  in: AnimateOptions
  out: AnimateOptions
}

export type AnimateDirectiveOptions =
  | AnimateName
  | AnimateOptions
  | AnimateWithInOut

const animated = (element: HTMLElement, animation: string) => {
  const animationName = `${animateCssPrefix}${animation}`

  element.classList.add(`${animateCssPrefix}animated`, animationName)

  function handleAnimationEnd(event: AnimationEvent) {
    event.stopPropagation()
    element.classList.remove(`${animateCssPrefix}animated`, animationName)
  }

  element.addEventListener('animationend', handleAnimationEnd, { once: true })
}

const Animate: ObjectDirective<HTMLElement, AnimateDirectiveOptions> = {
  beforeMount(
    element: HTMLElement,
    binding: DirectiveBinding<AnimateDirectiveOptions>
  ) {
    const value = binding.value
    let animationName = ''

    // check value is a onject with type AnimateWithInOut
    if (isString(value)) {
      animationName = value
    } else {
      let options: AnimateOptions
      if ('in' in value) {
        options = value.in
      } else {
        options = value
      }

      const { name, delay, duration, repeat } = options

      if (isNumber(duration)) {
        element.style.setProperty('--animate-duration', `${duration}ms`)
      }
      if (isNumber(delay)) {
        element.style.setProperty('--animate-delay', `${delay}ms`)
      }
      if (isNumber(repeat)) {
        element.style.setProperty('--animate-repeat', `${repeat}`)
      }
      animationName = name
    }

    animated(element, animationName)
  },
}

export default Animate
