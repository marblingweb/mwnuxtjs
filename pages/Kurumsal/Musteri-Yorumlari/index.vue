<template>
  <div>
    <div class="container-text">
      <div class="text-group">
        <h1>MÜŞTERİ YORUMLARI</h1>
        <p>Bizim için herşeyden önce siz dostlarımızın güvenini kazanmak gelir</p>
      </div>
    </div>
    <div class="container-section mw-d-grid mw-grid-col-3 mw-grid-gap-2">
      <div v-for="(comment,index) in comments" :key="index" class="mw-mb-3">
        <div class="container-text">
          <h2>{{ comment.baslik | uppercase }}</h2>
          <p v-html="comment.icerik.slice(0,200)+'...'" />
        </div>
        <div class="container-link">
          <nuxt-link :to="'/kurumsal/musteri-yorumlari/'+comment.link" class="small" tag="a">
            <i class="el-icon-right mw-mr-1" /> DEVAMI
          </nuxt-link>
        </div>
      </div>
    </div>
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
    ...mapGetters({
      config: 'webconfig/config',
      comments: 'datas/comments'
    })
  },
  created () {
    this.$emit('SET_TITLE', this.meta)
  }
}
</script>
