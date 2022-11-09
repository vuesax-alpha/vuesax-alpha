/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "vue/types/vue" {
  export interface Vue {
    $vs: any;
    $router: any;
  }
  export interface ComponentInternalInstance extends ComponentInternalInstance {
    ctx: any;
  }
}

interface HTMLDivElement extends HTMLDivElement {
  [key: string]: any;
}
interface HTMLElement extends HTMLElement {
  [key: string]: any;
}
interface MouseEvent extends MouseEvent {
  [x: string]: any;
}
interface DOMRect extends DOMRect {
  [x: string]: any;
}
