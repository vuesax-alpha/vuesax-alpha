import { defineClientConfig } from "@vuepress/client";
import { reactive } from "vue";

import Vuesax from "vuesax-alpha";
import "vuesax-alpha/dist/style.css";

import {
  siteDataKey
} from "./theme/type";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(Vuesax);
    app.provide(siteDataKey, siteData);
  },
  setup() {},
  rootComponents: [],
});
