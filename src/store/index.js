import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/utils/http'
import getToken from '@/utils/get_token'

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
    async checkAuth() {
        // ローカルストレージに保存しているログイントークンを取得
        if (getToken() == '') {
          // ローカルストレージに token が無い場合
          return false
        }

        // 認証チェック
        if (!await this.dispatch('requestAuth')) {
          return false 
        }

        // vuex ステートにユーザー情報をセット
        this.dispatch('setUserInfoToState')

        return true
    },
    async requestAuth() {
      return http.get(`${process.env.VUE_APP_API_URL}/auth`)
      .then(res => {
        if (res.status == 200) {
          return true
        }
      })
      .catch(error => {
        if (error.response.status == 401) {
          return false
        }
        else {
          return false
        }
      })
    },
    saveToken(context, token) {
      localStorage.setItem('LoginToken', token)
    },
    saveUserInfo(context, user) {
      localStorage.setItem('UserInfo', JSON.stringify(user))
    },
    setUserInfoToState(context) {
      const user = JSON.parse(localStorage.getItem('UserInfo'))
      context.commit('setUser', user)
    }
  },
  modules: {
  }
})
