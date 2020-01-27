<template>
  <div class="mw-container">
    <div class="mw-center">
      <PageBanner :image="'/assets/files/img/marblingweb-kurumsal-kimlik.jpg'" />
      <div class="container-title">
        <h1>KURUMSAL KİMLİK</h1>
      </div>
      <div class="container-section">
        <div class="container-text mw-mb-4">
          <div class="text-group">
            <h1>KURUMSAL KİMLİK</h1>
            <p>
              <b>Kurumsal Kimlik</b> , bir işletmenin markalaşma yolunda yaptığı işin kalitesini ve profesyonelliğini gösterebileceği etkenlerden biridir.<br>
              İç iletişim standartlarının oluşturulmasında yardımcı olmasının yanında pazarlama faaliyetlerinde de getiri sağlayan Kurumsal Kimlik , bir işletmenin olmazsa olmazı bir aktivitedir.
            </p>
            <p>
              Kurumsal kimlik tasarımı kurum yada markanın, felsefesi ile bütünleşerek görsel öğeler kullanılarak somutlaştırılmasıdır.
              Bu terimin getirdiği çalışmaları sadece antetli kağıt ve kartvizit tasarımı olarak ele almak oldukça yanlış bir düşüncedir. Unutulmamalıdır ki , her işletmenin Kurumsal Kimliği yapılan işe bağlı olarak kendine özgü öğeleri taşır
            </p>
            <p>
              <b>MarblingWeb</b> olarak sizlere Web Tasarımlarının yanında , Kurumsal Kimlik ihtiyaçlarınızda da yardımcı oluyor , bir bütün olarak işletmenizi tanıtmanızda ve işinizin kalitesini göstermenizde etkin rol alıyoruz.<br>
              Böylelikle tek seferde hem web siteniz hemde kurumsal kimlik ihtiyacınızı karşılamış oluyoruz.
            </p>
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
        { property: 'og:image', content: this.title + ' - ' + this.config.metatitle },
        { property: 'og:image', content: this.config.web + '/assets/files/img/webdesign5.jpg' },
        { property: 'og:url', content: this.config.web + '/kurumsal-kimlik' }
      ]
    }
  },
  components: {
    PageBanner
  },
  data () {
    return {
      title: 'Kurumsal Kimlik',
      keywords: 'izmit kurumsal kimlik,kocaeli kurumsal kimlik,izmit kurumsal kimlik yapanlar,kocaeli kurumsal kimlik hazırlayanlar'
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
