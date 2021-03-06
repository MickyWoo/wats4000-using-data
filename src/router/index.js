import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus.vue'
import AdjectiveSaurus from '@/views/AdjectiveSaurus.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/Rhymesaurus',
    name: 'Rhymesaurus',
    component: Rhymesaurus
    // aka home
  },
  {
    path: '/AdjectiveSaurus',
    name: 'AdjectiveSaurus',
    component: AdjectiveSaurus
  }

]

const router = new VueRouter({
  routes
})

export default router
