import { defineClientConfig } from "@vuepress/client";

import Vuesax from "vuesax-alpha";
import "vuesax-alpha/dist/vuesax.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(Vuesax);
  },
  setup() {},
  rootComponents: [],
});
