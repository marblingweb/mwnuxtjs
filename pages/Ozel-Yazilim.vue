<template>
  <div class="mw-container">
    <div class="mw-center">
      <PageBanner :image="'/assets/files/img/webdesign7.jpg'" />
      <div class="container-title">
        <h1>ÖZEL YAZILIM</h1>
      </div>
      <div class="container-section">
        <div class="container-text mw-mb-4">
          <div class="text-group">
            <h1>ÖZEL YAZILIM</h1>
            <p>
              <b>Özel yazılımlar</b> , işleyişinizin mevcut standartları dışında özgün ve ihtiyaçlar doğrultusunda oluşturulan küçük ama etkili programlardır.
              Diğer bir deyişle işleyişin yazılıma değil , yazılımın işleyişe uyarlanması halidir.
            </p>
            <p>
              İşletmelerin işleyişleri birbirlerinden farklıdır. Bu nedenle hali hazırda bulunan programlar bazı problemleri yüzeysel olarak çözebilmekte ya da tam olarak cevap verememektedir.
            </p>
            <p>
              Bu tarz yazılımların devreye girmesi neticesinde işleyişlere yönelik yazılımların aslında büyük bir ihtiyaç olduğu ortaya çıkmaktadır.<br>
              İşinizde zaman kazanmanıza ve daha az maaliyetle yönetmenize olanak sağlayacak olan özel yazılımlar işletmelerinize kullanım kolaylığı da sağlamaktadır.
            </p>
            <p>
              <b>Özel yazılımların</b> diğer bir güzel yanı ise web tabanlı olmasından dolayı iş yerinize bağlı kalmadan dilediğiniz cihaz ile internetinizin olduğu herhangi bir yerden erişebilir olması ve aynı anda bir çok kullanıcının kullanabilmesidir
            </p>
            <p>
              <b>MarblingWeb</b> olarak ihtiyacınıza yönelik özel yazılımlar geliştirerek işletmenizi daha iyi koşullarda yönetmenize yardımcı oluyoruz
            </p>
          </div>
          <div class="text-group">
            <h2><i class="el-icon-price-tag" /> Taglar</h2>
            <h6 class="tags">
              izmit kocaeli özel yazılım, kocaeli özel program yazılımı, izmit özel yazılım firmaları,özel yazılım nedir,firmaya özel yazılım
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
        { name: 'description', content: 'İşinizde zaman kazanmanız adına özel yazılımlar yazarak işleyişinizi hızlandırıyor ve sistematik olarak ilerlemenizi sağlıyoruz.' },
        { name: 'keywords', content: this.keywords + this.config.metakey },
        { property: 'og:title', content: this.title + ' - ' + this.config.metatitle },
        { property: 'og:image', content: this.config.web + '/assets/files/img/webdesign5.jpg' },
        { property: 'og:url', content: this.config.web + '/ozel-yazilim' }
      ]
    }
  },
  components: {
    PageBanner
  },
  data () {
    return {
      title: 'Özel Yazılım',
      keywords: 'kocaeli özel yazılım,izmit özel yazılım,özel yazılım firmaları,izmit özel yazılım yapanlar,marblingweb özel yazılım,'
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
