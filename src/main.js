


import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from "./Routes"
import { store } from './store'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode:'history'
});

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = "1200px";
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '400px';
    }

    if (binding.arg === 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...';
});

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store
});

