import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: '',
      name: ''
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, user) {
      state.user.id = user.id
      state.user.name = user.name
    }
  },
  actions: {
    checkAuth(context) {
        // TODO: ローカルストレージからの取得処理を実装する
        const loginToken = null
        if (loginToken == null) {
          // ローカルストレージに token が無い場合
          return false
        }

        // TODO: axios で非同期処理してログイン情報を取得する
        const user = {
          id: '0001',
          name: 'shigematsu'
        }
        context.commit('setUser', user)
        return true
    }
  },
  modules: {
  }
})
