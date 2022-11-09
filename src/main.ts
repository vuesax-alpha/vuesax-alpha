import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";
import App from './App.vue';
import About from './About.vue';
import Vuesax from "./install";

import "./style.css";

const routes = [
  { path: '/', component: App },
  { path: '/about', component: About },
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

const app = createApp(App)
app.use(Vuesax);
app.use(router);
app.mount('#app')
