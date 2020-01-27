<template>
  <div class="container-text">
    <div class="text-group">
      <h1>ONLINE ÖDEME</h1>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data () {
    return {
      meta: { title: 'Güvenli Ödeme Sayfası', image: '/assets/files/img/webdesign3.jpg', url: 'online-odeme' }
    }
  },
  created () {
    this.$emit('SET_TITLE', this.meta)
  }
}
</script>
