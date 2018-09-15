import Vue from 'vue'
import Vuex from 'vuex'
import LoginService from '@/services/LoginService'
import RegisterService from '@/services/RegisterService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
    loginSuccess (state, { user }) {
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    loginFailure (state) {
      localStorage.removeItem('user')
      state.user = null
    },
    logout (state) {
      localStorage.removeItem('user')
      state.user = null
    }
  },
  actions: {
    login ({ commit }, credentials) {
      return LoginService.post(credentials)
        .then(res => {
          const user = res.data
          commit('loginSuccess', { user })
          return Promise.resolve(user)
        })
        .catch(err => {
          commit('loginFailure')
          return Promise.reject(err)
        })
    },
    register ({ commit }, newUser) {
      return RegisterService.post(newUser)
    },
    logout ({ commit }) {
      commit('logout')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isLoggedIn (state) {
      return !!state.user
    }
  }
})
