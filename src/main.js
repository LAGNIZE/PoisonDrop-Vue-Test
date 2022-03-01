// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import store from "./store";
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store: store,
  el: "#app",
  components: { App },
  template: "<App/>"
});