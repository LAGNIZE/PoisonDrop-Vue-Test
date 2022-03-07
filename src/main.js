// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Store from "./store";
import App from "./App";
import Vuelidate from "vuelidate";
import './assets/styles/style.css';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
  store: Store,
  el: "#app",
  components: { App },
  template: "<App/>"
});
