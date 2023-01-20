import { get, set } from 'lodash-unified'
import type { Entries } from 'type-fest'
import type { Arrayable } from '.'

export const keysOf = <T>(arr: T) => Object.keys(arr as any) as Array<keyof T>
export const entriesOf = <T>(arr: T) => Object.entries(arr as any) as Entries<T>
export { hasOwn } from '@vue/shared'

export const hasOwnProperty = <X extends object, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> =>
  Object.prototype.hasOwnProperty.call(obj, prop)

export const getProp = <T = any>(
  obj: Record<string, any>,
  path: Arrayable<string>,
  defaultValue?: any
): { value: T } => {
  return {
    get value() {
      return get(obj, path, defaultValue)
    },
    set value(val: any) {
      set(obj, path, val)
    },
  }
}
