import { App } from "vue";

import loading from "./loading";
import clickOutside from "./clickOutside";

interface Directives {
  [key: string]: any;
}

const directives: Directives = {
  loading,
  clickOutside
};

export default (app: App) => {
  Object.keys(directives).forEach((e) => {
    app.directive(e, directives[e]);
  });
};
