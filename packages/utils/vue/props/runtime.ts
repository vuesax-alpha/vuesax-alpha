import { warn } from 'vue'
import { fromPairs } from 'lodash-unified'
import { isObject } from '../../types'
import { hasOwn } from '../../objects'

import type { PropType } from 'vue'
import type {
  IfNativePropType,
  IfVsProp,
  NativePropType,
  VsProp,
  VsPropConvert,
  VsPropFinalized,
  VsPropInput,
  VsPropMergeType,
} from './types'

export const vsPropKey = '__vsPropKey'

export const definePropType = <T>(val: any): PropType<T> => val

export const isVsProp = (val: unknown): val is VsProp<any, any, any> =>
  isObject(val) && !!(val as any)[vsPropKey]

/**
 * @description Build prop. It can better optimize prop types
 * @example
  // limited options
  // the type will be PropType<'light' | 'dark'>
  buildProp({
    type: String,
    values: ['light', 'dark'],
  } as const)
  * @example
  // limited options and other types
  // the type will be PropType<'small' | 'large' | number>
  buildProp({
    type: [String, Number],
    values: ['small', 'large'],
    validator: (val: unknown): val is number => typeof val === 'number',
  } as const)
  @link see more: https://github.com/vuesax-alphax/vuesax-alpha/pull/3341
 */
export const buildProp = <
  Type = never,
  Value = never,
  Validator = never,
  Default extends VsPropMergeType<Type, Value, Validator> = never,
  Required extends boolean = false
>(
  prop: VsPropInput<Type, Value, Validator, Default, Required>,
  key?: string
): VsPropFinalized<Type, Value, Validator, Default, Required> => {
  // filter native prop type and nested prop, e.g `null`, `undefined` (from `buildProps`)
  if (!isObject(prop) || isVsProp(prop)) return prop as any

  const { values, required, default: defaultValue, type, validator } = prop

  const _validator =
    values || validator
      ? (val: unknown) => {
          let valid = false
          let allowedValues: unknown[] = []

          if (values) {
            allowedValues = Array.from(values)
            if (hasOwn(prop, 'default')) {
              allowedValues.push(defaultValue)
            }
            valid ||= allowedValues.includes(val)
          }
          if (validator) valid ||= validator(val)

          if (!valid && allowedValues.length > 0) {
            const allowValuesText = [...new Set(allowedValues)]
              .map((value) => JSON.stringify(value))
              .join(', ')
            warn(
              `Invalid prop: validation failed${
                key ? ` for prop "${key}"` : ''
              }. Expected one of [${allowValuesText}], got value ${JSON.stringify(
                val
              )}.`
            )
          }
          return valid
        }
      : undefined

  const vsProp: any = {
    type,
    required: !!required,
    validator: _validator,
    [vsPropKey]: true,
  }
  if (hasOwn(prop, 'default')) vsProp.default = defaultValue
  return vsProp
}

export const buildProps = <
  Props extends Record<
    string,
    | { [vsPropKey]: true }
    | NativePropType
    | VsPropInput<any, any, any, any, any>
  >
>(
  props: Props
): {
  [K in keyof Props]: IfVsProp<
    Props[K],
    Props[K],
    IfNativePropType<Props[K], Props[K], VsPropConvert<Props[K]>>
  >
} =>
  fromPairs(
    Object.entries(props).map(([key, option]) => [
      key,
      buildProp(option as any, key),
    ])
  ) as any
