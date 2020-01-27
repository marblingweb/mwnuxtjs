<template>
  <div class="mw-container">
    <div class="mw-center">
      <PageBanner :image="'/assets/files/img/social-media.jpg'" />
      <div class="container-title">
        <h1>SOSYAL MEDYA</h1>
      </div>
      <div class="container-section">
        <div class="container-text mw-mb-4">
          <div class="text-group">
            <h1>KALİTELİ İÇERİK YÖNETİMİ</h1>
            <p>Günümüzün vazgeçilmez ve gelişerek en önemli iletişim aracı haline gelen sosyal medya, kurumsal alanlarda da firmanızın itibarını üst seviyeye taşımak için değerli bir alandır. Firmanıza ait sosyal medya hesaplarının öncelikle aktif olarak kullanımı, doluluğu ve yaratıcılığı kullanıcılarınızda güven oluşturan ve kurumsallığınızı tanıtmaya yarayan bir ortam haline gelmiştir. Bu nedenle profesyonel olarak sosyal medya danışmanlığı hizmeti alma gerekliliği de burada başlamaktadır.</p>
            <p>İşte bu yüzden Sosyal Medya Danışmanlığı (Kurumsal Hesap Yönetimi) hizmetimiz ile firmanızın veya işleyişinizin sektörüne özel "İçerik Geliştirme, Görsel Yaratma, Paylaşım Yönetimi" gibi konularda bulunduğunuz sektörde rakiplerinizin bir adım önünde olabilmeniz için yanınızdayız </p>
          </div>
        </div>
        <ul class="container-text mw-d-grid mw-grid-col-3">
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-finished services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>İÇERİK YÖNETİMİ</h2>
                <p>Firma vizyonunuzu yansıtacak ve sizi temsil edecek içerikler oluşturma</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-picture-outline services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>GÖRSEL YÖNETİMİ</h2>
                <p>Paylaşımlarınızda içeriğinizi en iyi şekilde temsil edecek görsel oluşturma</p>
              </div>
            </div>
          </li>
          <li>
            <div class="text-group mw-d-flex mw-justify-between">
              <i class="el-icon-chat-dot-square services-icon mw-flex-col-3" />
              <div class="mw-flex-col-9">
                <h2>PAYLAŞIM YÖNETİMİ</h2>
                <p>Sosyal medyanın kullanım analizlerine göre zamanlama planı oluşturma ve paylaşma</p>
              </div>
            </div>
          </li>
        </ul>
        <div class="container-text mw-mb-4">
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
        { name: 'title', content: this.title + this.config.metatitle },
        { name: 'description', content: 'Günümüzün vazgeçilmez ve gelişerek en önemli iletişim aracı haline gelen sosyal medya, kurumsal alanlarda da firmanızın itibarını üst seviyeye taşımak için değerli bir alandır. Firmanıza ait sosyal medya hesaplarının öncelikle aktif olarak kullanımı, doluluğu ve yaratıcılığı kullanıcılarınızda güven oluşturan ve kurumsallığınızı tanıtmaya yarayan bir ortam haline gelmiştir.' },
        { name: 'keywords', content: this.keywords + this.config.metakey },
        { property: 'og:title', content: this.title + this.config.metatitle },
        { property: 'og:image', content: '/assets/files/img/social-media.jpg' },
        { property: 'og:url', content: this.config.web + '/sosyal-medya' }
      ]
    }
  },
  components: {
    PageBanner
  },
  data () {
    return {
      title: 'Sosyal Medya Danışmanlığı',
      keywords: 'izmit sosyal medya danışmanlığı,kocaeli sosyal medya,izmit sosyal medya yönetimi,kocaeli instagram yönetimi,izmit instagram yönetimi,başiskele körfez izmit kartepe,instagram kocaeli,kocaeli instagram takipçi,izmit instagram beğeni,instagram paylaşım yönetimi'
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
