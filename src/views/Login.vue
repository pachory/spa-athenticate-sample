<template>
<div>
  <h1>ログイン</h1>
  <ul>
    <li><input type="text" v-model="userId"></li>
    <li><input type="password" v-model="password"></li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      password: ''
    }
  }
}
</script>
