import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MaybeView from '@/views/MaybeView.vue'
import CallbackView from '@/views/CallbackView.vue'
import SignupView from '@/views/SignupView.vue'
import DeviceView from '@/views/DeviceView.vue'
import DevCtrlView from '@/views/DevCtrlView.vue'
import UsersView from '@/views/UsersView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
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
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/room/:id',
      name: 'room',
      component: DeviceView
    },
    {
      path: '/dev/:id',
      name: 'dev',
      component: DevCtrlView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/users/:id',
      name: 'user',
      component: ProfileView
    }

  ]
})

export default router
 