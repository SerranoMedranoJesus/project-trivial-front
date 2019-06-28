import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import { routes } from '../src/routes'
import { store } from './store/store'
import './plugins/vuetify'
import App from './App'

Vue.use(axios)
Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'history'
});

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.isAuthUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser){
    next('login');
  } else{
    next();
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
