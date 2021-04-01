import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil.vue'
import Destination from '@/components/Destination.vue'
import Reviews from '@/components/Reviews.vue'
import Apropos from '@/components/Apropos.vue'
// import Header from '@/components/Header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/destination',
      name: 'Destination',
      component: Destination
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews
    },
    {
      path: '/apropos',
      name: 'Apropos',
      component: Apropos
    }
  ]
})
