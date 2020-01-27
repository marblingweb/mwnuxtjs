<template>
  <div class="mw-container">
    <div class="mw-center">
      <PageBanner :image="'/assets/files/slider/11.jpg'" />
      <div class="container-title">
        <h1>WEB TASARIMLARI</h1>
      </div>
      <div class="container-section">
        <div class="container-text mw-mb-4">
          <div class="text-group">
            <h1>PROFESYONEL HİZMET</h1>
            <p>Tamamen size özel , sizlerin istekleri doğrultusunda , herhangi bir hazır paket kullanılmadan özel web tasarımları yapıyoruz</p>
            <p>Üstlenmiş olduğumuz projelerin tasarımlarını yaparken hazır paket yazılımlar kullanmak yerine tamamen müşterilerimizin hayal gücünün vermiş olduğu istekler doğrultusunda hareket ederek bir benzeri olmayan yeni ve farklı tasarımlar üretip , yeni nesil yazılımlar ile kuvvetlendiriyoruz.</p>
            <p>Projelerimizde sadece İzmit veya Kocaeli değil çevre illere de hizmet vermekten keyif duyuyoruz</p>
          </div>
        </div>
        <ul class="container-text mw-d-grid mw-grid-col-3">
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-magic-stick services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>YARATICI TASARIMLAR</h2>
                <p>Sizlerin fikirleri doğrultusunda , size özel renk paletleri ile , size özel fontlar kullanarak tasarım oluşturup demo oluşturup sonuca ulaşıyoruz </p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-mobile services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>EKRAN UYUMLULUĞU</h2>
                <p>Tasarımlarımızı tüm cihazların ekranlarında rahatlıkla kullanılabilecek şekilde dizayn edip sorunsuz bir şekilde çalışmasını sağlıyoruz</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-cpu services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>KODLAMA</h2>
                <p>Web sitenizin en iyi şekilde kullanılabilmesi için yeni nesil kodlamalar ile destekleyip ziyaretçilerin web sitenizde rahatlıkla gezinmesini sağlıyoruz </p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-set-up services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>YÖNETİM PANELİ</h2>
                <p>Web sitenizin kontrol edilebilir tüm alanları için her web sitesine özel kontrol panelleri hazılıyoruz.Böylelikle web sitelerinizi 7/24 kontrol edilebilir hale getiriyoruz</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-coin services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>HOSTING & DOMAIN</h2>
                <p>Web siteniz için en ideal domain ve hosting paketlerini Türkiye'nin en iyi altyapısına sahip sunucularda barındırıyoruz</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-user services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>TESLIMAT & GUVENCE</h2>
                <p>Detaylı bir çalışma neticesinde web sitenizi tüm testleri yapıldıktan sonra teslim ediyoruz ve gerekli teknik destek için "her zaman yanınızda olduğumuzu" bildiriyoruz</p>
              </div>
            </div>
          </li>
        </ul>
        <div class="container-text mw-mb-4">
          <h1>SON ÇALIŞMALARIMIZ</h1>
        </div>
        <ul class="projects mw-d-grid mw-grid-col-3">
          <Productlist v-for="(project,index) in alldata.filter(project => project.parentlink=='web-tasarimlari').slice(0,3)" :key="index" :product="project" />
        </ul>
      </div>
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
      titleTemplate: this.title + ' - %s',
      meta: [
        { name: 'title', content: this.title + ' - ' + this.config.metatitle },
        { name: 'description', content: 'Tamamen size özel , sizlerin istekleri doğrultusunda , herhangi bir hazır paket kullanılmadan özel web tasarımları yapıyoruz' },
        { name: 'keywords', content: this.config.metakey },
        { property: 'og:title', content: this.title + ' - ' + this.config.metatitle },
        { property: 'og:image', content: this.config.web + '/assets/files/slider/marblingweb-design-262888496.jpg' },
        { property: 'og:url', content: this.config.web + '/web-tasarimlari' }
      ]
    }
  },
  components: {
    Productlist,
    PageBanner
  },
  data () {
    return {
      title: 'Web Site Tasarımları'
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
