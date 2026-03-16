import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import ActorsView from '@/views/ActorsView.vue'
import GenerosView from '@/views/GenerosView.vue'
import PeliculasView from '@/views/PeliculasView.vue'
import DetallePelicula from '@/views/DetallePelicula.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/peliculas'
    },
    {
      path: '/peliculas',
      component: PeliculasView
    },
    {
      path :'/peliculas/:id',
      component: DetallePelicula
    },
    {
      path: '/actors',
      component: ActorsView,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/generos',
      component: GenerosView,
      meta: { requiresAuth: true, requiresAdmin: true } 
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/register',
      component: RegisterView
    }
  ],
})

router.beforeEach((to) => {
  const user = store.state.user
  const rol = store.state.rol

  if (to.meta.requiresAuth && !user) {
    return '/login'
  }

  if (to.meta.requiresAdmin && rol !== 'admin') {
    return '/peliculas'
  }
})

export default router