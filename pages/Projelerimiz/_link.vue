<template>
  <div class="mw-container">
    <div class="mw-center">
      <PageBanner :image="'/'+data.foto" />
      <div class="container-title">
        <h1>PROJELERİMİZ</h1>
        <h2>{{ data.baslik }}</h2>
      </div>
      <div class="container-section mw-d-grid mw-grid-col-m-s mw-grid-gap-3">
        <img :src="'/'+data.foto" :alt="data.title" class="container-image">
        <div class="container-text">
          <div class="text-group">
            <h1>PROJE</h1>
            <p>{{ data.baslik }}</p>
          </div>
          <div class="text-group">
            <h2>İÇERİK</h2>
            <p v-html="data.icerik" />
          </div>
          <div class="text-group">
            <h2>KODLAMA</h2>
            <p v-html="data.webkod" />
          </div>
          <div class="text-group">
            <h2>YER</h2>
            <p>{{ data.il }}</p>
          </div>
        </div>
      </div>
      <div class="mw-clear" />
      <!-- <div class="container-section mw-d-grid mw-grid-col-3">
        <div class="container-link">
          <router-link :to="'/projelerimiz/'+prevdata.link" v-if="prevdata" class="small">
            ÖNCEKİ PROJE
          </router-link>
          <a v-else class="small pasive">ÖNCEKİ PROJE</a>
        </div>
        <div class="container-link text-center">
          <router-link :to="'/projelerimiz'" class="small">
            <i class="fa fa-th-large" />
          </router-link>
        </div>
        <div class="container-link text-right">
          <router-link :to="'/projelerimiz/'+nextdata.link" v-if="nextdata" class="small">
            SONRAKİ PROJE
          </router-link>
          <a v-else class="small pasive">SONRAKİ PROJE</a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import { APIURL } from '~/store/config'
import PageBanner from '~/components/Banner/PageBanner'
export default {
  components: {
    PageBanner
  },
  asyncData ({ params }) {
    return axios.get(APIURL + '/singledata/' + params.link).then((resp) => {
      return {
        data: resp.data.singledata,
        nextdata: resp.data.nextdata,
        prevdata: resp.data.prevdata
      }
    })
  },
  /*   asyncData ({ params }) {
    return axios.get(APIURL + '/singledata/' + params.link).then((resp) => {
      return {
        data: resp.data.singledata,
        nextdata: resp.data.nextdata,
        prevdata: resp.data.prevdata
      }
    })
  }, */
  head () {
    return {
      titleTemplate: this.data.baslik + ' ' + this.data.il + ' Web Site Tasarımı - %s',
      meta: [
        { name: 'title', content: this.data.baslik + ' - ' + this.config.metatitle },
        { name: 'description', content: this.data.icerik },
        { name: 'keywords', content: this.config.metakey },
        { property: 'og:title', content: this.data.baslik + this.data.il + '  Web Site Tasarımı' },
        { property: 'og:image', content: this.config.web + '/' + this.data.foto },
        { property: 'og:url', content: this.config.web + '/projelerimiz/' + this.data.link }
      ]
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      config: 'webconfig/config',
      project: 'datas/alldata'
    })/* ,
    data () {
      return this.project.find(el => el.link === this.$route.params.link)
    } */
  }
}
</script>
