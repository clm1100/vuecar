import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

Vue.config.productionTip = false;

import "@/source/css/base.css";
import "@/source/css/common.css";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
