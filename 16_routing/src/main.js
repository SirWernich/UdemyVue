import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";

import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    
    return {
       x: 0, y: 0
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('global before each');

  /*
    if this is not called, then it will be as if the route wasn't allowed and the navigation
    won't continue. you can also call 'next(false)' to abort operation and stay on the page,
    of a path/path object (a redirect)

  */
  next();
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
