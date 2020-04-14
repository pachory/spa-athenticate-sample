<template>
  <div>
    <h1>ホーム</h1>
    <p>ここはログイン後しか閲覧できない。</p>
    <p>id: {{user.id}}, name: {{user.name}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
}
</script>
