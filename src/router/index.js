import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Accueil from '../views/Accueil/Accueil.vue'
import Programme from '../views/Programme/Programme.vue'
import Reservation from '../views/Reservation/Reservation.vue'
// import Actualite from '../views/Actualite/Actualite.vue'
import Contact from '../views/Contact/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    // component: require('../views/Accueil/Accueil.vue').default
    component: () => import('../views/Accueil/Accueil.vue')

  },

  {
    path: '/programme',
    name: 'Programme',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Programme/Programme.vue')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('../views/Reservation/Reservation.vue')
  },

  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact/Contact.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
