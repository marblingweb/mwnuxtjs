<template>
  <div class="mw-container">
    <div class="mw-center">
      <PageBanner :image="'/assets/files/img/webdesign6.jpg'" />
      <div class="container-title">
        <h1>İLETİŞİM</h1>
      </div>
      <div class="container-text">
        <p>Bilgilerinizi bırakın sizleri arayalım</p>
      </div>
      <div v-loading="loading" element-loading-text="Lütfen Bekleyin..." class="container-section mw-d-grid mw-grid-col-2 mw-grid-gap-4" novalidate>
        <div>
          <form @submit.prevent="SEND_CONTACT()" class="container-form">
            <div class="form-group" name="Ad Soyad">
              <input id="adsoyad" v-model="contact.adsoyad" type="text" placeholder="Adınız Soyadınız">
              <span v-if="!$v.contact.adsoyad.required" class="errors"><i class="el-icon-warning-outline" /> Ad Soyad bilgisi zorunludur</span>
            </div>
            <div class="form-group" name="Telefon">
              <input id="telefon" v-mask="'# ### ### ## ##'" v-model="contact.telefon" type="text" placeholder="Telefon Numaranız">
              <span v-if="!$v.contact.telefon.required" class="errors"><i class="el-icon-warning-outline" /> Telefon numarası zorunludur</span>
              <span v-if="!$v.contact.telefon.minLength" class="errors"><i class="el-icon-warning-outline" /> Telefon numaraınzı en az 15 karakter olmalı</span>
            </div>
            <div class="form-group" name="Email">
              <input id="email" v-model="contact.mail" type="email" placeholder="E-Mail Adresiniz">
              <span v-if="!$v.contact.mail.required" class="errors"><i class="el-icon-warning-outline" /> E-Mail adresi zorunludur</span>
              <span v-if="!$v.contact.mail.email" class="errors"><i class="el-icon-warning-outline" /> Geçerli bir e-mail adresi girmelisiniz</span>
            </div>
            <button :disabled="$v.$invalid" class="form-button">
              FORMU GÖNDER
            </button>
          </form>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5667560395937!2d29.96155641540541!3d40.72755297933019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe65fd4b613f49df8!2sMarblingWeb%20-%20Web%20Tasar%C4%B1m%20Hizmetleri!5e0!3m2!1str!2str!4v1578214461999!5m2!1str!2str" frameborder="0" style="border:0;width:100%;height:300px" allowfullscreen="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
import PageBanner from '~/components/Banner/PageBanner'

export default {
  head () {
    return {
      title: 'İletişim - ' + this.config.metatitle,
      meta: [
        { name: 'title', content: this.title + ' - ' + this.config.metatitle },
        { name: 'description', content: this.config.metadesc },
        { name: 'keywords', content: this.config.metakey },
        { property: 'og:title', content: this.title + ' - ' + this.config.metatitle },
        { property: 'og:image', content: this.config.web + '/assets/files/img/webdesign5.jpg' },
        { property: 'og:url', content: this.config.web + '/iletisim' }
      ]
    }
  },
  components: {
    PageBanner
  },
  data () {
    return {
      title: 'İletişim',
      contact: { konu: 'İletişim Formu', mesaj: 'İletişim bilgileri kullanılarak geri dönüş beklenmektedir' },
      loading: false
    }
  },
  validations: {
    contact: {
      adsoyad: {
        required
      },
      mail: {
        required,
        email
      },
      telefon: {
        required,
        minLength: minLength(15)
      }
    }
  },
  computed: {
    ...mapGetters({
      config: 'webconfig/config'
    })
  },
  methods: {
    ...mapActions({
      SEND_FORM: 'contact/SEND_FORM'
    }),
    SEND_CONTACT () {
      this.loading = true
      this.SEND_FORM(this.contact).then(() => {
        this.loading = false
        this.contact = {}
        this.$notify({
          type: 'success',
          message: 'Mesaj iletildi'
        })
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>
