<template>
  <div>
    <h1>ホーム</h1>
    <p>ここはログイン後しか閲覧できない。</p>
    <p>id: {{user.id}}, name: {{user.name}}</p>
  </div>
</template>

<script>

export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
