<template>
  <div class="mw-center">
    <div class="mw-container">
      <PageBanner :image="'/assets/files/img/marblingweb2.jpg'" />
      <div class="container-title">
        <h1>KURUMSAL</h1>
      </div>
      <div class="container-section mw-d-grid mw-grid-col-xxs-l">
        <div class="container-text">
          <div class="text-group">
            <h1>KURUMSAL</h1>
            <nuxt-link to="/kurumsal/biz-kimiz" class="pointer" tag="a">
              Biz Kimiz ?
            </nuxt-link>
            <nuxt-link to="/kurumsal/banka-hesap-bilgileri" tag="a">
              Banka Hesap Bilgileri
            </nuxt-link>
            <nuxt-link to="/kurumsal/musteri-yorumlari" tag="a">
              Müşteri Yorumları
            </nuxt-link>
            <nuxt-link to="/kurumsal/teklif-formu" tag="a">
              Teklif Formu
            </nuxt-link>
            <nuxt-link to="/kurumsal/sozlesme-ornegi" tag="a">
              Sözleşme Örneği
            </nuxt-link>
            <nuxt-link to="/kurumsal/online-odeme" tag="a">
              Online Ödeme
            </nuxt-link>
          </div>
        </div>
        <div class="content">
          <nuxt-child @SET_TITLE="SET_TITLE" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageBanner from '~/components/Banner/PageBanner'
export default {
  head () {
    return {
      title: this.meta.title + ' - ' + this.config.metatitle,
      meta: [
        { name: 'title', content: this.meta.title + ' - ' + this.config.metatitle },
        { name: 'description', content: this.config.metadesc },
        { name: 'keywords', content: this.config.metakey },
        { property: 'og:image', content: this.config.web + this.meta.image },
        { property: 'og:url', content: this.config.web + this.$route.path }
      ]
    }
  },
  components: {
    PageBanner
  },
  data () {
    return {
      meta: ''
    }
  },
  computed: {
    ...mapGetters({
      config: 'webconfig/config'
    })
  },
  methods: {
    SET_TITLE (val) {
      this.meta = val
    }
  }
}
</script>
