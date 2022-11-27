import { defineClientConfig } from "@vuepress/client";
import { reactive } from "vue";

import Vuesax from "vuesax-alpha";
import "vuesax-alpha/dist/style.css";

import {
  userContext,
  userContextKey,
  siteDataKey
} from "./theme/type";

const $user = reactive<userContext>({ user: null });

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(Vuesax);
    app.provide(userContextKey, $user);
    app.provide(siteDataKey, siteData);
  },
  setup() {},
  rootComponents: [],
});
