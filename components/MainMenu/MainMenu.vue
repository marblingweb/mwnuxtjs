<template>
  <div>
    <div :class="{'fix-menu':fixMenu}" class="main-menu-container">
      <div class="menu-logo">
        <nuxt-link to="/" class="pointer">
          <h1>MARBLINGWEB</h1>
        </nuxt-link>
      </div>
      <div class="menu-items">
        <nuxt-link to="/" tag="div" class="mw-pointer item">
          ANASAYFA
        </nuxt-link>
        <div class="item">
          KURUMSAL
          <div class="sub-menus">
            <nuxt-link tag="a" to="/kurumsal/biz-kimiz" class="sub-item">
              biz kimiz ?
            </nuxt-link>
            <nuxt-link tag="a" to="/kurumsal/banka-hesap-bilgileri" class="sub-item">
              banka hesap bilgilerimiz
            </nuxt-link>
            <nuxt-link tag="a" to="/kurumsal/musteri-yorumlari" class="sub-item">
              müşteri yorumları
            </nuxt-link>
            <nuxt-link tag="a" to="/kurumsal/teklif-formu" class="sub-item">
              teklif formu
            </nuxt-link>
            <nuxt-link tag="a" to="/kurumsal/sozlesme-ornegi" class="sub-item">
              sözleşme örneği
            </nuxt-link>
            <nuxt-link tag="a" to="/kurumsal/online-odeme" class="sub-item">
              online ödeme
            </nuxt-link>
          </div>
        </div>
        <div class="item">
          HİZMETLERİMİZ
          <div class="sub-menus">
            <nuxt-link v-for="(item,index) in services" :key="index" :to="'/'+item.link" tag="a" class="sub-item">
              {{ item.baslik | lowercase }}
            </nuxt-link>
          </div>
        </div>
        <nuxt-link to="/projelerimiz" tag="div" class="item">
          ÇALIŞMALARIMIZ
        </nuxt-link>
        <nuxt-link to="/iletisim">
          <div class="item">
            İLETİŞİM
          </div>
        </nuxt-link>
        <div class="item mobile-menu">
          <div @click="mobileMenu=!mobileMenu" class="mobile-menu-container">
            <div :class="{'active':mobileMenu}" class="hamburger-icon" />
            <transition name="mobile-menu-in">
              <MobilMenu v-if="mobileMenu" />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MobilMenu from './MobileMenu'
export default {
  components: {
    MobilMenu
  },
  data () {
    return {
      mobileMenu: false,
      fixMenu: false
    }
  },
  computed: {
    ...mapGetters({
      alldata: 'datas/alldata'
    }),
    services () {
      return this.alldata.filter((item) => {
        return item.parentlink === 'hizmetlerimiz'
      })
    }
  },
  watch: {
    $route () {
      this.mobileMenu = false
    }
  }
}
</script>
