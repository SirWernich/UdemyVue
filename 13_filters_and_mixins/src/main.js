import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lower', val => val.toLowerCase());

Vue.mixin({
  created() {
    console.log('global mixin created hook');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
