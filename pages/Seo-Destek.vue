<template>
  <div class="mw-container">
    <div class="mw-center">
      <PageBanner :image="'/assets/files/img/marblingweb.jpg'" />
      <div class="container-title">
        <h1>SEO DESTEK</h1>
      </div>
      <div class="container-section">
        <div class="container-text mw-mb-4">
          <div class="text-group">
            <h1>SEO NEDİR ? NE İŞE YARAR ?</h1>
            <p> Web site tasarımlarınızı SEO alt yapısında hazırladığımız gibi, biz yapalım veya yapmayalım fark etmez var olan web sitelerinize de SEO desteği veriyoruz. Bunun için İzmit veya Kocaeli de olmanıza da gerek yok ! </p>
            <p>SEO (Search Engine Optimization) türkçe anlamı ile Arama Motoru Opitimizasyonu tanımı , web sitenizin arama motorlarında üst sıralarda yer bulması için yapılan detaylı çalışmadır ve Search (S) Engine (E) Optimization (O) baş harflarından meydana gelmektedir. </p>
            <p> Seo çalışmaları web site içi ve web site dışı olmak kaydı ile temel olarak ikiye ayrılmış gibi görünsede yapılan tüm işlemler birbirleri ile bağlantılı bir şekilde ilerlemektedir. Yani ikiye ayrılmış gibi görünsede bir bütün olarak yapılan çalışmaladır </p>
            <div class="mw-clear mw-mb-5" />
            <h1>NELER YAPILIYOR ? </h1>
            <p>Web sitenizin içerisinde yapılacak çeşitli düzenlemeler de diyebiliriz bu çalılmalara. Başlık (title) etiketlerinin kullanımı, sitenin doğru tanıtımı için kullanılan kelime ya da cümleler (description) , anahtar kelimeler (keywords) , web sitenizin sağlıklı bir arayüze sahip olması , web sitenizin mobile ayak uydurması gibi bir çok etken web site içi Seo çalışmalarının temelini oluşturan işlemlerdir. </p>
          </div>
          <div class="text-group">
            <h2><i class="el-icon-price-tag" /> Taglar</h2>
            <h6 class="tags">
              {{ keywords }}
            </h6>
          </div>
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
      titleTemplate: this.title + ' - %s',
      meta: [
        { name: 'title', content: this.title + ' - ' + this.config.metatitle },
        { name: 'description', content: 'Seo çalışmaları web site içi ve web site dışı olmak kaydı ile temel olarak ikiye ayrılmış gibi görünsede yapılan tüm işlemler birbirleri ile bağlantılı bir şekilde ilerlemektedir. Yani ikiye ayrılmış gibi görünsede bir bütün olarak yapılan çalışmaladır' },
        { name: 'keywords', content: this.keywords + this.config.metakey },
        { property: 'og:title', content: this.title + ' - ' + this.config.metatitle },
        { property: 'og:image', content: this.config.web + '/assets/files/img/seo-support.jpg' },
        { property: 'og:url', content: this.config.web + '/seo-destek' }
      ]
    }
  },
  components: {
    PageBanner
  },
  data () {
    return {
      title: 'Seo Destek',
      keywords: 'izmit seo,kocaeli seo çalışması,izmit seo yapanlar,kocaeli seo web sitesi,izmit google aramaları,kocaeli google arama,google ilk sırada çıkma'
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
