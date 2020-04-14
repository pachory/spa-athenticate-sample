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
import axios from 'axios'

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
      axios.post(`${process.env.VUE_APP_API_URL}/login`)
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
