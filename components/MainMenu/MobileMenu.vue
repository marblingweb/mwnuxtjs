<template>
  <div class="mobile-main-menu">
    <div class="mobile-menu-items">
      <nuxt-link to="/" tag="li">
        <h1>anasayfa</h1>
      </nuxt-link>
      <nuxt-link to="" tag="li">
        <h1>kurumsal</h1>
        <nuxt-link to="/kurumsal/biz-kimiz">
          <span>biz kimiz</span>
        </nuxt-link>
        <nuxt-link to="/kurumsal/banka-hesap-bilgileri">
          <span>banka hesap bilgileri</span>
        </nuxt-link>
        <nuxt-link to="/kurumsal/sozlesme-ornegi">
          <span>sözleşme örneği</span>
        </nuxt-link>
        <nuxt-link to="/kurumsal/musteri-yorumlari">
          <span>müşteri yorumları</span>
        </nuxt-link>
        <nuxt-link to="/kurumsal/teklif-formu">
          <span>teklif formu</span>
        </nuxt-link>
      </nuxt-link>
      <nuxt-link to="" tag="li">
        <h1>hizmetlerimiz</h1>
        <nuxt-link v-for="(item,index) in services" :key="index" :to="'/'+item.link" tag="a">
          <span>{{ item.baslik | lowercase }}</span>
        </nuxt-link>
      </nuxt-link>
      <nuxt-link to="/projelerimiz" tag="li">
        <h1>çalışmalarımız</h1>
      </nuxt-link>
      <nuxt-link to="" tag="li">
        <h1>iletişim</h1>
        <nuxt-link to="/kurumsal/teklif-formu">
          <span>teklif formu</span>
        </nuxt-link>
        <nuxt-link to="/kurumsal/demo-talebi">
          <span>demo talebi</span>
        </nuxt-link>
        <nuxt-link to="/iletisim">
          <span>iletişim formu</span>
        </nuxt-link>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      alldata: 'datas/alldata'
    }),
    services () {
      return this.alldata.filter((item) => {
        return item.parentlink === 'hizmetlerimiz'
      })
    }
  }
}
</script>
