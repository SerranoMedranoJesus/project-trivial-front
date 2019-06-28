import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    removeToken(state) {
      state.token = null
    }
  },
  actions: {},
  getters: {
    isAuthUser(state,getters){
      return (state.token !== null)
    },
    isnotAuthUser(state,getters){
      return (state.token === null)
    }
  }
})
