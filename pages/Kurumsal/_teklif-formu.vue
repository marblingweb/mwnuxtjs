<template>
  <div>
    <div class="container-text">
      <div class="text-group">
        <h1>TEKLİF FORMU</h1>
        <p>Size en uygun teklifi verebilmemiz için lütfen aşağıdaki formu doldurun ve iletin</p>
      </div>
    </div>
    <form v-loading="loading" @submit.prevent="SEND_REQUEST()" element-loading-text="Lütfen Bekleyin..." class="container-form" novalidate>
      <div class="form-group" name="Ad Soyad">
        <input id="adsoyad" v-model.trim="request.adsoyad" type="text" placeholder="Adınız Soyadınız">
        <span v-if="!$v.request.adsoyad.required" class="errors"> <i class="el-icon-warning-outline" /> Ad Soyad bilgisi zorunludur</span>
      </div>
      <div class="form-group" name="Telefon">
        <input id="telefon" v-mask="'# ### ### ## ##'" v-model="request.telefon" type="text" placeholder="Telefon Numaranız">
        <span v-if="!$v.request.telefon.required" class="errors"><i class="el-icon-warning-outline" /> Telefon numarası zorunludur</span>
        <span v-if="!$v.request.telefon.minLength" class="errors"><i class="el-icon-warning-outline" /> Telefon numaraınzı en az 15 karakter olmalı</span>
      </div>
      <div class="form-group" name="Email">
        <input id="email" v-model="request.mail" type="email" placeholder="E-Mail Adresiniz">
        <span v-if="!$v.request.mail.required" class="errors"><i class="el-icon-warning-outline" /> E-Mail adresi zorunludur</span>
        <span v-if="!$v.request.mail.email" class="errors"><i class="el-icon-warning-outline" /> Geçerli bir e-mail adresi girmelisiniz</span>
      </div>
      <div class="form-group" name="Konu">
        <el-select id="konu" v-model="request.konu" style="width:100%;" placeholder="Konu Seçin">
          <el-option v-for="(item,index) in services" :key="index" :label="item" :value="item" />
          <el-option :label="'Diğer'" :value="'Diğer'" />
        </el-select>
        <span v-if="!$v.request.konu.required" class="errors"><i class="el-icon-warning-outline" /> Konu seçimi zorunludur</span>
      </div>
      <div class="form-group" name="Mesaj">
        <textarea id="mesaj" v-model="request.mesaj" placeholder="Mesajınız" />
        <span v-if="!$v.request.mesaj.required" class="errors"><i class="el-icon-warning-outline" /> Mesaj alanı zorunludur</span>
        <span v-if="!$v.request.mesaj.minLength" class="errors"><i class="el-icon-warning-outline" /> Mesajınız en az 20 karakterden oluşmalı</span>
      </div>
      <button :disabled="$v.$invalid" class="form-button">
        FORMU GÖNDER
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      meta: { title: 'Teklif Formu', image: '/assets/files/img/webdesign1.jpg', url: 'teklif-formu' },
      loading: false,
      request: {
        adsoyad: '',
        telefon: '',
        mail: '',
        konu: '',
        mesaj: ''
      },
      services: [
        'Web Tasarım Hizmeti', 'Sosyal Medya Danışmanlığı', 'Hosting & Domain', 'Baskı Hizmeti', 'Reklam Hizmeti'
      ]
    }
  },
  validations: {
    request: {
      adsoyad: {
        required
      },
      telefon: {
        required,
        minLength: minLength(15)
      },
      mail: {
        required,
        email
      },
      konu: {
        required
      },
      mesaj: {
        required,
        minLength: minLength(20)
      }
    }
  },
  created () {
    this.$emit('SET_TITLE', this.meta)
  },
  methods: {
    ...mapActions({
      SEND_FORM: 'contact/SEND_FORM'
    }),
    SEND_REQUEST () {
      this.loading = true
      this.SEND_FORM(this.request).then(() => {
        this.loading = false
        this.request = {}
        this.$notify({
          type: 'success',
          message: 'Mesajınız iletildi'
        })
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>
