<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      meta: { title: 'Müşterilerimiz Neler Söyledi ? ', image: '/assets/files/img/webdesign5.jpg', url: 'musteri-yorumlari' }
    }
  },
  computed: {
    ...mapGetters([
      'config',
      'alldata'
    ])
  },
  created () {
    this.$emit('SET_TITLE', this.meta)
  }
}
</script>
