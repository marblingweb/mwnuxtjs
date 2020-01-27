<template>
  <div class="mw-container home-container">
    <MainBanner />
    <div class="mw-center">
      <ul class="container-section mw-d-grid mw-grid-col-s-m">
        <li>
          <div class="container-title">
            <h1 class="circle-effect">
              Biz Kimiz ?
            </h1>
          </div>
        </li>
        <li>
          <div class="container-text mw-mb-3">
            <p><b>MarblingWeb</b> , Kocaeli İzmit'te '99 yılından bu yana ihtisasını Bilgisayar Programcılığı ve Teknolojileri üzerine yapmış bizlerin kurduğu , hiç bir zaman "tamam" demeyerek sürekli araştırmalar yapıp "öğrenmenin" sonu yoktur politikasını ilke edinmiş bir oluşumdur.</p>
            <p>Amacımız , sadece Kocaeli İzmit'te değil Türkiye'nin tüm bölgelerinde üstlenmiş olduğumuz projelerin tasarımlarını yaparken hazır paket yazılımlar kullanmak yerine <b>tamamen müşterilerimizin hayal gücünün vermiş olduğu</b> istekler doğrultusunda hareket ederek işe sıfırdan başlayarak bir benzeri olmayan yeni ve farklı tasarımlar üretip , yeni nesil yazılımlar ile özgün tasarımlar oluşturmak</p>
          </div>
          <div class="container-link text-right">
            <router-link to="/kurumsal/biz-kimiz" class="small">
              HAKKIMIZDA
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <ul class="projects mw-d-grid mw-grid-col-3">
      <Productlist v-for="(product,index) in web.slice(0,6)" :key="index" :product="product" />
    </ul>
    <div class="mw-center">
      <ul class="container-section mw-d-grid mw-grid-col-3 mw-grid-gap-3">
        <li v-for="(item,index) in services" :key="index" class="mw-d-flex">
          <div class="container-title">
            <h1>{{ '0'+parseInt(index+1) }}</h1>
            <h2>{{ item.baslik }}</h2>
          </div>
          <div class="container-text mw-mb-2">
            <p v-html="item.icerik" />
          </div>
        </li>
      </ul>
      <ul class="customer-comments mw-d-grid mw-grid-gap-1">
        <li class="mw-d-flex mw-align-center">
          <h1 class="comment-title">
            MÜŞTERİ YORUMLARI
          </h1>
          <div class="comment-text-container">
            <transition name="in">
              <div v-for="(comment,index) in comments" :key="index" v-if="commentNo==index" class="comment-text">
                <h1 v-html="comment.icerik" />
                <div class="mw-d-grid mw-grid-col-2">
                  <p v-html="comment.baslik" />
                  <div class="text-right">
                    <router-link :to="'/kurumsal/musteri-yorumlari/'+comment.link" tag="a">
                      <i class="el-icon-right mw-mr-1" /> DEVAMI
                    </router-link>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <div class="comment-button">
            <div v-for="(btn,index) in comments" @click="commentNo=index" :key="index" :class="{'active':commentNo==index}">
              {{ index+1 }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <ul class="demo-request">
      <div>
        <h1 class="demo-title">
          DEMOTALEBİ
        </h1>
        <div class="demo-text text-center">
          <h1>Demo talebinde bulunarak en iyi çözüme kolayca ulaşabilirsiniz</h1>
          <p>Yeni bir web sitesi ya da var olan web siteniz için demo talebinde bulunun , size en uygun tasarımı "ücretsiz" hazırlayalım</p>
          <router-link to="/kurumsal/demo-talebi">
            <button>Ücretsiz Demo Talebi</button>
          </router-link>
        </div>
      </div>
    </ul>
    <div class="mw-clear" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainBanner from '~/components/Banner/MainBanner'
import Productlist from '~/components/ProductList/index'
export default {
  head () {
    return {
      title: this.config.metatitle,
      meta: [
        { name: 'title', content: this.config.metatitle },
        { name: 'description', content: this.config.metadesc },
        { name: 'keywords', content: this.config.metakey },
        { property: 'og:image', content: this.config.web + '/assets/files/img/webdesign5.jpg' },
        { property: 'og:url', content: this.config.web }
      ]
    }
  },
  components: {
    MainBanner,
    Productlist
  },
  data () {
    return {
      commentNo: 0
    }
  },
  computed: {
    ...mapGetters({
      web: 'datas/web',
      comments: 'datas/comments',
      alldata: 'datas/alldata',
      config: 'webconfig/config'
    }),
    services () {
      return this.alldata.filter((item) => {
        return item.parentlink === 'hizmetlerimiz'
      })
    }
  }
}
</script>
