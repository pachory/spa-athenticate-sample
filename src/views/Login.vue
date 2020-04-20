<template>
<div>
  <h1>ログイン</h1>
  <ul>
    <li><input type="text" v-model="userId"></li>
    <li><input type="password" v-model="password"></li>
    <li><input type="submit" @click="submit"></li>
  </ul>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import http from '@/utils/http'

export default {
  data() {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['saveToken', 'saveUserInfo']),
    submit() {
      http({isNotAuthenticate: true})
      .post(`${process.env.VUE_APP_API_URL}/login`, {
        userId: this.userId,
        password: this.password
      })
      .then(response => {
        const json = response.data

        if (json.result === true) {
          this.saveToken(json.token)
          this.saveUserInfo(json.user)
          this.$router.push('/')
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
