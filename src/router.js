import Vue from 'vue'
import Router from 'vue-router'
import Menus from './views/Menus.vue'
import Recipes from './views/Recipes.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/menus',
      name: 'menus',
      component: Menus
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    }
  ]
})
export default router
