import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login ({ commit }, payload) {
      const { username, password } = payload
      return Axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          username,
          password
        }
      })
    },
    register ({ commit }, payload) {
      const { username, password } = payload
      return Axios({
        url: 'http://localhost:3000/register',
        method: 'POST',
        data: {
          username,
          password
        }
      })
    }
  },
  modules: {
  }
})
