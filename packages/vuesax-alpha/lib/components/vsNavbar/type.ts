import { InjectionKey } from "vue";

interface SetModel {
  (id: string): void
}

interface SetLeftLine {
  (left: number): void
}

interface SetWidthLine {
  (width: number): void
}

export interface NavbarContext {
  setModel: SetModel,
  setLeftLine: SetLeftLine,
  setWidthLine: SetWidthLine
}

export const NavbarContextKey: InjectionKey<NavbarContext> =
  Symbol("vs-navbar-context");
