import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    theme: ''
  },
  mutations: {
    setTheme (state, theme) {
      state.theme = theme
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit('setTheme', theme)
    }
  },
  getters: {
    getTheme(state) {
      return state.theme
    }
  }
})
