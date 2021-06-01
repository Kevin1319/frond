import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import register from '../views/register.vue'
import homePage from '../views/homePage.vue'
import homePage_registerDevice from '../views/homePage_registerDevice.vue'
import homePage_HCMenor from '../views/homePage_HCMenor.vue'
import homePage_HCMayor from '../views/homePage_HCMayor.vue'
import homePage_MVoltaje from '../views/homePage_MVoltaje.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/homePage/registerDevice',
    name: 'homePage_registerDevice',
    component: homePage_registerDevice
  },
  {
    path: '/homePage/HCMenor',
    name: 'HCMenor',
    component: homePage_HCMenor
  },
  {
    path: '/homePage/HCMayor',
    name: 'HCMayor',
    component: homePage_HCMayor
  },
  {
    path: '/homePage/MVoltaje',
    name: 'MVoltaje',
    component: homePage_MVoltaje
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
