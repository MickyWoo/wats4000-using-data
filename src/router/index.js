import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import adjectiveSaurus from '@/views/adjectiveSaurus'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Rhymesaurus',
    component: Rhymesaurus
  },
  {
    path: '/',
    name: 'adjectiveSaurus',
    component: adjectiveSaurus
  }

]

const router = new VueRouter({
  routes
})

export default router
