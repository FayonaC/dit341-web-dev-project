import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cafes from './views/Cafes.vue'
import Cafe from './views/Cafe.vue'
import AddACafe from './views/AddaCafe.vue'
import Categories from './views/Categories.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cafes',
      name: 'cafes',
      component: Cafes
    },
    {
      path: '/cafes/:id',
      name: 'cafe',
      component: Cafe
    },
    {
      path: '/addacafe',
      name: 'addacafe',
      component: AddACafe
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    }
  ]
})
