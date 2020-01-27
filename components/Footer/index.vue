<template>
  <div class="footer-container">
    <div class="mw-center">
      <div class="mw-d-grid mw-grid-col-4 mw-grid-gap-3">
        <div class="mw-d-flex mw-align-center">
          <div class="footer-logo">
            <div>
              <h1>MARBLINGWEB</h1>
              <h2>ÖZGÜN ve YARATICI WEB SİTE TASARIMLARI</h2>
            </div>
          </div>
        </div>
        <div class="footer-text">
          <p><i class="fa fa-phone footer-icon" /> {{ config.tel }}</p>
          <p><i class="fa fa-phone footer-icon" /> {{ config.cep }}</p>
          <p><i class="fa fa-envelope footer-icon" /> {{ config.mail }}</p>
        </div>
        <div class="footer-text">
          <p><i class="fa fa-map-marker footer-icon" /> {{ config.adres }}</p>
        </div>
        <div class="footer-text">
          <a href="https://www.facebook.com/marblingweb" target="_blank">
            <p><i class="fab fa-facebook-f footer-icon" /> fb</p>
          </a>
          <a href="https://www.instagram.com/marblingwebdesign/" target="_blank">
            <p><i class="fab fa-instagram footer-icon" /> ins</p>
          </a>
          <a href="https://wa.me/905432152426">
            <p><i class="fab fa-whatsapp footer-icon" /> wp</p>
          </a>
          <a href="https://m.me/marblingweb" target="_blank">
            <p><i class="fab fa-facebook-messenger footer-icon" /> msn</p>
          </a>
        </div>
      </div>
      <div class="footer-htag">
        {{ config.htag }}
      </div>
      <el-tooltip class="whatsapp" effect="dark" content="Whatsapp ile iletişime geçin" placement="left">
        <a target="_blank" href="https://wa.me/905432152426?text=Web Site Yaptırmak İstiyorum">
          <i class="fab fa-whatsapp" />
        </a>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      config: 'webconfig/config'
    })
  }
}
</script>
