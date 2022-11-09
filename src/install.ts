import { App } from "vue";
import _Components from "@/components/index";
import _ComponentsLayout from "@/layout/index";
import defineFunctions from "@/functions/defineFunctions";
import defineDirecives from "@/directives/defineDirecives";
import "@/styles/index";

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
