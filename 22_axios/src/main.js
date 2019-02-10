import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://axios-udemy-vue.firebaseio.com/';
axios.defaults.headers.common['Authorization'] = 'bob';
axios.defaults.headers.get['Accepts'] = 'application/json';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
