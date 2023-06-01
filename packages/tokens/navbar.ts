import type { ComputedRef, InjectionKey } from 'vue'

export type NavbarRegisterContext = (id: string) => {
  unregister: () => void
  onClick: () => void
  isActive: ComputedRef<boolean>
}

export const navbarRegisterContextKey: InjectionKey<NavbarRegisterContext> =
  Symbol('navbar-register')

export type NavbarContextKey = {
  modelValue: ComputedRef<string | undefined>
}

export const navbarContextKey: InjectionKey<NavbarContextKey> = Symbol('navbar')

export type NavbarGroupRegisterContext = (id: string) => {
  unregister: () => void
}

export const navbarGroupRegisterContextKey: InjectionKey<NavbarGroupRegisterContext> =
  Symbol('navbar-register')
