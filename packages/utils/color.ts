import {
  hexFullRE,
  hexShorthandRE,
  leadingHashRE,
  rgbNumberRE,
  rgbRE,
  vuesaxColors,
} from '@vuesax-alpha/constants'
import { debugWarn } from './error'
import type { VuesaxColor } from '@vuesax-alpha/constants'

export const getCssVariable = (el: HTMLElement, property: string) => {
  return getComputedStyle(el).getPropertyValue(property)
}

export const isColorDark = (color?: string | boolean): boolean => {
  if (color === undefined || color === false) return false
  return color === 'dark' || color === true
}

export const isVsColor = (color: string): boolean =>
  vuesaxColors.includes(color as any)

/**
 * #eee -> length hex shorthand, shorthand with alpha, classic, hex alpha
 */
export const isHexColor = (color: string) =>
  leadingHashRE.test(color) && [4, 7, 5, 9].includes(color.length)

export const isRgbColor = (color: string) => rgbRE.test(color)

export const isRGBNumbers = (color: string) => rgbNumberRE.test(color)

export const hexToRgb = (color: string) => {
  color = color.replace(
    hexShorthandRE,
    (_, r: string, g: string, b: string) => r + r + g + g + b + b
  )
  const res = hexFullRE.exec(color)

  return res
    ? {
        r: Number.parseInt(res[1], 16),
        g: Number.parseInt(res[2], 16),
        b: Number.parseInt(res[3], 16),
      }
    : null
}

export const setColor = (
  colorName: string,
  color: string,
  el: HTMLElement,
  addClass?: boolean,
  namespace = 'vs'
) => {
  let newColor
  if (color == 'dark' && el) {
    if (addClass) {
      el.classList.add(`${namespace}-component-dark`)
    }
  }
  if (isRgbColor(color)) {
    const arrayColor = color.replace(/[rgba()]/g, '').split(',')
    newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`
    setVsCssVar(colorName, newColor, el)
    if (addClass) {
      el.classList.add(`${namespace}-change-color`)
    }
  } else if (isHexColor(color)) {
    const rgb = hexToRgb(color)
    newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`
    setVsCssVar(colorName, newColor, el)
    if (addClass) {
      el.classList.add(`${namespace}-change-color`)
    }
  } else if (isVsColor(color)) {
    const style = window.getComputedStyle(document.body)
    newColor = style.getPropertyValue(`--${namespace}-${color}`)
    setVsCssVar(colorName, newColor, el)
    if (addClass) {
      el.classList.add(`${namespace}-change-color`)
    }
  } else if (isRGBNumbers(color)) {
    setVsCssVar(colorName, color, el)
    if (addClass) {
      el.classList.add(`${namespace}-change-color`)
    }
  }
}

/**
 * accept Vuesax's color, hex color, rgb color
 * @param color string
 */
export const acceptColor = (color: string) => {
  const isValid = isVsColor(color) || isHexColor(color) || isRgbColor(color)

  if (isValid) return true
  debugWarn(
    'Invalid Color',
    'Vuesax only accepts colors like hex, rgb, rgba or rgb number'
  )
  return false
}

/**
 * Convert color to rgb number, accept Vuesax's color, hex color, rgb color
 *
 * e.g 'rgb(23,34,34)' -> '23, 34, 34'
 */
export const getVsColor = (color?: string, namespace = 'vs'): string => {
  if (!color) return ''

  const isRGB = rgbRE.test(color)
  const isRGBNumbers = rgbNumberRE.test(color)
  const isHEX = leadingHashRE.test(color)

  let newColor = ''

  if (isRGB) {
    const arrayColor = color.replace(/[rgba()]/g, '').split(',')
    newColor = `${arrayColor[0]}, ${arrayColor[1]}, ${arrayColor[2]}`
  } else if (isHEX) {
    const rgb = hexToRgb(color)
    newColor = `${rgb?.r}, ${rgb?.g}, ${rgb?.b}`
  } else if (isVsColor(color as VuesaxColor)) {
    newColor = `--${namespace}-${color}`
  } else if (isRGBNumbers) {
    newColor = color
  }
  return newColor
}

export const setVsCssVar = (
  propertyName: string,
  value: string,
  el?: HTMLElement,
  namespace = 'vs'
) => {
  if (!el) {
    document.documentElement.style.setProperty(
      `--${namespace}-${propertyName}`,
      value
    )
  } else {
    if (el.nodeName !== '#comment') {
      el.style.setProperty(`--${namespace}-${propertyName}`, value)
    }
  }
}
