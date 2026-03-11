import { createRouter, createWebHistory } from 'vue-router'

import ActorsView from '@/views/ActorsView.vue'
import GenerosView from '@/views/GenerosView.vue'
import PeliculasView from '@/views/PeliculasView.vue'
import DetallePelicula from '@/views/DetallePelicula.vue'


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
      path: '/peliculas/:id',
      component: DetallePelicula
    },
    {
      path: '/actors',
      component: ActorsView
    },
    {
      path: '/generos',
      component: GenerosView 
    }
  ],
})

export default router