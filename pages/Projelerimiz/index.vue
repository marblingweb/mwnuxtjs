<template>
  <div class="mw-container">
    <div class="mw-center">
      <PageBanner :image="'/assets/files/img/marblingweb.jpg'" />
      <div class="container-title">
        <h1>PROJELERİMİZ</h1>
      </div>
      <div class="container-text">
        <p>Web tasarım projelerinde bizleri tercih eden dostlarımız için ne tür çalışmalar yaptık göz atabilirsiniz</p>
      </div>
      <ul class="projects mw-d-grid mw-grid-col-3">
        <Productlist v-for="(product,index) in web" :key="index" :product="product" />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Productlist from '~/components/ProductList'
import PageBanner from '~/components/Banner/PageBanner'
export default {
  head () {
    return {
      titleTemplate: this.meta.title + ' - %s',
      meta: [
        { name: 'title', content: this.meta.title + ' - ' + this.config.metatitle },
        { name: 'description', content: this.meta.desc },
        { name: 'keywords', content: this.config.metakey },
        { property: 'og:image', content: this.config.web + this.meta.image },
        { property: 'og:url', content: this.config.web + this.$route.path }
      ]
    }
  },
  components: {
    Productlist,
    PageBanner
  },
  data () {
    return {
      meta: { title: 'Web Site Projelerimiz', image: '/assets/files/img/webdesign1.jpg', desc: 'Web tasarım projelerinde bizleri tercih eden dostlarımız için ne tür çalışmalar yaptık göz atabilirsiniz' },
      parentfilter: this.$route.name ? this.$route.name : 'web-tasarimlari'
    }
  },
  computed: {
    ...mapGetters({
      web: 'datas/web',
      config: 'webconfig/config'
    })
  },
  watch: {
    $route () {
      this.parentfilter = this.$route.name ? this.$route.name : 'web-tasarimlari'
    }
  }
}
</script>
