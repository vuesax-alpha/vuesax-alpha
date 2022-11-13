import { App } from "vue";
import _Components from "../lib/components/index";
import _ComponentsLayout from "../lib/layout/index";
import defineFunctions from "../lib/functions/defineFunctions";
import defineDirecives from "../lib/directives/defineDirecives";
import "../lib/styles/index";

export default {
  install: (app: App) => {
    // layout
    for (const [_, component] of Object.entries(_ComponentsLayout)) {
      app.component(component.name, component);
    }
    // component
    for (const [_, component] of Object.entries(_Components)) {
      app.component(component.name, component);
    }

    defineFunctions(app);

    defineDirecives(app);
  },
};
