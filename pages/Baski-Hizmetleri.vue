<template>
  <div class="mw-container">
    <div class="mw-center">
      <PageBanner :image="'/assets/files/slider/brosur.jpg'" />
      <div class="container-title">
        <h1>BASKI HİZMETLERİ</h1>
      </div>
      <div class="container-section">
        <div class="container-text mw-mb-4">
          <div class="text-group">
            <h1>PROFESYONEL HİZMET</h1>
            <p> Kişisel ya da işletmeniz için kartvizit,broşür,el ilanı,insert,katalog gibi çeşitli "kurumsal" baskı ürünlerinde gerekli tasarımları yaparak baskı alıp sizlere ulaştırıyoruz </p>
          </div>
        </div>
        <ul class="container-text mw-d-grid mw-grid-col-3">
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-user services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>KARTVİZİT</h2>
                <p>Standart,kare,kraft,pvc,kabartmalı,lensli gibi çeşitli özelliklerde kartvizit tasarımları</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-reading services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>BROŞÜR</h2>
                <p>A5 veya A4 ebatlarında kırımlı ya da düz çeşitli özelliklerde boroşür tasarımları</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-document-copy services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>EL İLANI</h2>
                <p>A5 veya A4 ebatlarında kırımlı ya da düz çeşitli özelliklerde boroşür tasarımları</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-notebook-2 services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>İNSERT</h2>
                <p>A5 veya A4 ebatlarında kırımlı ya da düz çeşitli özelliklerde boroşür tasarımları</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-notebook-1 services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>CEPLİ DOSYA</h2>
                <p>A5 veya A4 ebatlarında kırımlı ya da düz çeşitli özelliklerde boroşür tasarımları</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-message services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>DİPLOMAT ZARF</h2>
                <p>A5 veya A4 ebatlarında kırımlı ya da düz çeşitli özelliklerde boroşür tasarımları</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-tickets services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>ANTETLİ KAĞIT</h2>
                <p>A5 veya A4 ebatlarında kırımlı ya da düz çeşitli özelliklerde boroşür tasarımları</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-price-tag services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>MAGNET</h2>
                <p>A5 veya A4 ebatlarında kırımlı ya da düz çeşitli özelliklerde boroşür tasarımları</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-edit services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>PROMOSYON</h2>
                <p>Firmanızı tanıtacak , müşterilerinize ya da ziyartçilerinize sunabileceğiniz çeşitli promosyon ürünleri</p>
              </div>
            </div>
          </li>
        </ul>
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
      titleTemplate: this.title + ' - %s',
      meta: [
        { name: 'title', content: this.title + ' - ' + this.config.metatitle },
        { name: 'description', content: 'Kişisel ya da işletmeniz için kartvizit,broşür,el ilanı,insert,katalog gibi çeşitli "kurumsal" baskı ürünlerinde gerekli tasarımları yaparak baskı alıp sizlere ulaştırıyoruz' },
        { name: 'keywords', content: this.keywords + this.config.metakey },
        { property: 'og:title', content: this.title + ' - ' + this.config.metatitle },
        { property: 'og:image', content: this.config.web + '/assets/files/slider/brosur.jpg' },
        { property: 'og:url', content: this.config.web + '/baski-hizmetleri' }
      ]
    }
  },
  components: {
    PageBanner
  },
  data () {
    return {
      link: '',
      title: 'Baskı Hizmetleri',
      keywords: 'izmit kartvizit,kocaeli kartvizit yapımı,izmit broşür baskısı,kocaeli broşür tasarlama,izmit el ilanı yapanlar,kocaeli baskı hizmetleri,'
    }
  },
  computed: {
    ...mapGetters({
      alldata: 'datas/alldata',
      config: 'webconfig/config'
    })
  }
}
</script>
