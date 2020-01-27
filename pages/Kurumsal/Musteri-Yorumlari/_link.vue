<template>
  <div>
    <div class="container-text">
      <div class="text-group">
        <h1>MÜŞTERİ YORUMLARI / {{ data.baslik }}</h1>
        <p>Bizim için herşeyden önce siz dostlarımızın güvenini kazanmak gelir</p>
      </div>
      <div class="text-group">
        <p v-html="data.icerik" class="first-letter" />
      </div>
    </div>
    <div class="mw-clear" />
    <!--     <div class="container-section mw-d-grid mw-grid-col-3">
      <div class="container-link">
        <nuxt-link :to="'/kurumsal/musteri-yorumlari/'+prevdata.link" v-if="prevdata" class="small">
          ÖNCEKİ YORUM
        </nuxt-link>
        <a v-else class="small pasive">ÖNCEKİ YORUM</a>
      </div>
      <div class="container-link text-center">
        <nuxt-link :to="'/kurumsal/musteri-yorumlari'" class="small">
          <i class="fa fa-th-large" />
        </nuxt-link>
      </div>
      <div class="container-link text-right">
        <nuxt-link :to="'/kurumsal/musteri-yorumlari/'+nextdata.link" v-if="nextdata" class="small">
          SONRAKİ YORUM
        </nuxt-link>
        <a v-else class="small pasive">SONRAKİ YORUM</a>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
/* import axios from 'axios'
import { APIURL } from '~/store/config' */
export default {
  /*   asyncData ({ params }) {
    return axios.get(APIURL + '/singledata/' + params.link).then((resp) => {
      return {
        data: resp.data.singledata,
        nextdata: resp.data.nextdata,
        prevdata: resp.data.prevdata
      }
    })
  }, */
  // eslint-disable-next-line require-await
  head () {
    return {
      titleTemplate: this.data.baslik + ' - Müşterilerimiz Neler Söyledi ? - %s',
      meta: [
        { name: 'title', content: this.data.baslik + ' - ' + this.config.metatitle },
        { name: 'description', content: this.data.icerik },
        { name: 'keywords', content: this.config.metakey },
        { property: 'og:title', content: this.data.baslik + ' - ' + this.config.metatitle },
        { property: 'og:url', content: this.config.web + '/kurumsal/musteri-yorumlari/' + this.data.link },
        { property: 'og:description', content: this.data.icerik }
      ]
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      config: 'webconfig/config',
      comment: 'datas/alldata'
    }),
    data () {
      return this.comment.find(el => el.link === this.$route.params.link)
    }
  }
}
</script>
