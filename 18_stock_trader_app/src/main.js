import App from './App.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes/routes';
import { store } from './store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
