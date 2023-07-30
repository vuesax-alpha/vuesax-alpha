import { getPackageInfo, isPackageExists } from 'local-pkg'

export async function getPkgVersion(
  pkgName: string,
  defaultVersion: string
): Promise<string> {
  try {
    const isExist = isPackageExists(pkgName)
    if (isExist) {
      const pkg = await getPackageInfo(pkgName)
      return pkg?.version ?? defaultVersion
    } else {
      return defaultVersion
    }
  } catch (err) {
    console.error(err)
    return defaultVersion
  }
}

export function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

type Awaitable<T> = T | Promise<T>

interface ImportInfo {
  as?: string
  name?: string
  from: string
}

export type SideEffectsInfo =
  | (ImportInfo | string)[]
  | ImportInfo
  | string
  | undefined

export interface ComponentInfo extends ImportInfo {
  sideEffects?: SideEffectsInfo
}

export type ComponentResolveResult = Awaitable<
  string | ComponentInfo | null | undefined | void
>

export type ComponentResolverFunction = (name: string) => ComponentResolveResult
export interface ComponentResolverObject {
  type: 'component' | 'directive'
  resolve: ComponentResolverFunction
}
export type ComponentResolver =
  | ComponentResolverFunction
  | ComponentResolverObject

export interface VuesaxAlphaResolverOptions {
  /**
   * import style css or sass with components
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'sass'

  /**
   * use commonjs lib & source css or scss for ssr
   */
  ssr?: boolean

  /**
   * specify vuesax-alpha version to load style
   *
   * @default installed version
   */
  version?: string

  /**
   * auto import for directives
   *
   * @default true
   */
  directives?: boolean

  /**
   * exclude component name, if match do not resolve the name
   */
  exclude?: RegExp

  /**
   * a list of component names that have no styles, so resolving their styles file should be prevented
   */
  noStylesComponents?: string[]
}

type VuesaxAlphaResolverOptionsResolved = Required<
  Omit<VuesaxAlphaResolverOptions, 'exclude'>
> &
  Pick<VuesaxAlphaResolverOptions, 'exclude'>

/**
 *
 * @param partialName
 * @param options
 *
 * @returns
 */
export function getSideEffectsLegacy(
  partialName: string,
  options: VuesaxAlphaResolverOptionsResolved
): SideEffectsInfo | undefined {
  const { importStyle } = options
  if (!importStyle) return

  if (importStyle === 'sass') {
    return [
      'vuesax-alpha/packages/theme-chalk/src/base.scss',
      `vuesax-alpha/packages/theme-chalk/src/${partialName}.scss`,
    ]
  } else if (importStyle === true || importStyle === 'css') {
    return [
      'vuesax-alpha/lib/theme-chalk/base.css',
      `vuesax-alpha/lib/theme-chalk/vs-${partialName}.css`,
    ]
  }
}

function getSideEffects(
  dirName: string,
  options: VuesaxAlphaResolverOptionsResolved
): SideEffectsInfo | undefined {
  const { importStyle, ssr } = options
  const themeFolder = 'vuesax-alpha/theme-chalk'
  const esComponentsFolder = 'vuesax-alpha/es/components'

  if (importStyle === 'sass')
    return ssr
      ? `${themeFolder}/src/${dirName}.scss`
      : `${esComponentsFolder}/${dirName}/style/index`
  else if (importStyle === true || importStyle === 'css')
    return ssr
      ? `${themeFolder}/vs-${dirName}.css`
      : `${esComponentsFolder}/${dirName}/style/css`
}

function resolveComponent(
  name: string,
  options: VuesaxAlphaResolverOptionsResolved
): ComponentInfo | undefined {
  if (options.exclude && name.match(options.exclude)) return

  if (!name.match(/^Vs[A-Z]/)) return

  const partialName = kebabCase(name.slice(2)) // VsCardGroup -> card-group
  const { ssr } = options

  // >=0.0.1
  return {
    name,
    from: `vuesax-alpha/${ssr ? 'lib' : 'es'}`,
    sideEffects: getSideEffects(partialName, options),
  }
}

function resolveDirective(
  name: string,
  options: VuesaxAlphaResolverOptionsResolved
): ComponentInfo | undefined {
  if (!options.directives) return

  const directives: Record<string, { importName: string; styleName: string }> =
    {
      // Loading: { importName: 'VsLoadingDirective', styleName: 'loading' },
      // InfiniteScroll: {
      //   importName: 'VsInfiniteScroll',
      //   styleName: 'infinite-scroll',
      // },
    }

  const directive = directives[name]
  if (!directive) return

  const { ssr } = options

  // >=0.0.1
  return {
    name: directive.importName,
    from: `vuesax-alpha/${ssr ? 'lib' : 'es'}`,
    sideEffects: getSideEffects(directive.styleName, options),
  }
}

export const VuesaxAlphaResolver = (
  options: VuesaxAlphaResolverOptions = {}
): ComponentResolver[] => {
  let optionsResolved: VuesaxAlphaResolverOptionsResolved

  async function resolveOptions() {
    if (optionsResolved) return optionsResolved
    optionsResolved = {
      ssr: false,
      version: await getPkgVersion('vuesax-alpha', '0.0.1'),
      importStyle: 'css',
      directives: true,
      exclude: undefined,
      noStylesComponents: options.noStylesComponents || [],
      ...options,
    }
    return optionsResolved
  }

  return [
    {
      type: 'component',
      resolve: async (name: string) => {
        const options = await resolveOptions()

        if ([...options.noStylesComponents].includes(name))
          return resolveComponent(name, { ...options, importStyle: false })
        else return resolveComponent(name, options)
      },
    },
    {
      type: 'directive',
      resolve: async (name: string) => {
        return resolveDirective(name, await resolveOptions())
      },
    },
  ]
}
