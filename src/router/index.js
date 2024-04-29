import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Chap03 from '../views/Chap03.vue';
import Chap04 from '../views/Chap04.vue';
import Chap05 from '../views/Chap05.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chap03',
      name: 'chap03',
      component: Chap03
    },
    {
      path: '/chap04',
      name: 'chap04',
      component: Chap04
    },
    {
      path: '/chap05',
      name: 'chap05',
      component: Chap05
    },

  ]
})

export default router
