import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Quiz from './components/Quiz'
import Stats from './components/Stats';

Vue.use(Vuetify)
Vue.use(Router)

export const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz,
      meta: {requiresAuth: true}
    },
    {
      path: '/stats',
      component: Stats,
      meta: {requiresAuth: true}
    }
  ]
