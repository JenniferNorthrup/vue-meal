import VueRouter from 'vue-router';

import Front from './front.vue'
import Home from './front/views/home.vue'

import PageNotFound from './components/pageNotFound.vue'

let routes = [
  {
    path: '/',
    component: Front,
    children: [
      {
        path: '',
        components: {
          frontRouter: Home,
        }
      }
    ]
  },
  {
    path: "*",
    component: PageNotFound
  }
];

let router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
});



export default router;
