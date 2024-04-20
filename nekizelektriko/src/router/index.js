import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MaybeView from '@/views/MaybeView.vue'
import CallbackView from '@/views/CallbackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/test',
      name: 'test',
      component: MaybeView
    },
    {
      path: '/callback',
      name: 'callback',
      component: CallbackView
    },

  ]
})

export default router
 