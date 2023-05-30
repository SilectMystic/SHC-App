import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Months from '../views/Months.vue'
import Days from '../views/Days.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomePage
   },
   {
      path: '/months',
      component: Months
   },
   {
      path: '/days',
      component: Days
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router