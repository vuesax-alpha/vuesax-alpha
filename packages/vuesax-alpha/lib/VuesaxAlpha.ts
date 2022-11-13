import { App } from "vue";
import _Components from "@/components/index";
import _ComponentsLayout from "@/layout/index";
import defineFunctions from "@/functions/defineFunctions";
import defineDirecives from "@/directives/defineDirecives";

import { setColor } from "@/util";
import { toggleTheme } from "@/functions/toggleTheme";
import { setTheme } from "@/functions/toggleTheme";
import { getPage } from "@/functions/vsTable/index";
import { getLength } from "@/functions/vsTable/index";
import { toggleSelectAll } from "@/functions/vsTable/index";
import { getSearch } from "@/functions/vsTable/index";
import { sortData } from "@/functions/vsTable/index";
import loading from "@/functions/vsLoading/Base/loading";
import notification from "@/functions/vsNotification/Base/notification";

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

export * from "./components";
export * from "./layout";

export {
  setColor as vsSetColor,
  toggleTheme as vsToggleTheme,
  setTheme as vsSetTheme,
  getPage,
  getLength,
  toggleSelectAll,
  getSearch,
  sortData,
  loading,
  notification,
};
