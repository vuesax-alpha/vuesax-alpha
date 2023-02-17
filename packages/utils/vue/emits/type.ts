type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never

export type EmitFn<
  Options = ObjectEmitsOptions,
  Event extends keyof Options = keyof Options
> = Options extends Array<infer V>
  ? (event: V, ...args: any[]) => void
  : unknown extends Options
  ? (event: string, ...args: any[]) => void
  : UnionToIntersection<
      {
        [key in Event]: Options[key] extends (...args: infer Args) => any
          ? (event: key, ...args: Args) => void
          : (event: key, ...args: any[]) => void
      }[Event]
    >
