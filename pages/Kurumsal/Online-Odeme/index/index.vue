<template>
  <div class="container-text">
    <div v-loading="loading" element-loading-text="Lütfen Bekleyin...">
      <div class="text-group">
        <p>
          Sunduğumuz hizmetlerin karşılığında ödemelerinizi dilerseniz Kredi Kartı ile de yapabilirsiniz. Bunun için yapmanız gereken formu doldurmak ve ödeme adımına geçmek
        </p>
      </div>
      <form @submit.prevent="NEW_TOKEN()" class="container-form">
        <h2>KİŞİSEL BİLGİLER</h2>
        <div class="form-group" name="Ad Soyad">
          <input id="adsoyad" v-model="pay.adsoyad" type="text" placeholder="Adınız Soyadınız">
          <span v-if="!$v.pay.adsoyad.required" class="errors"> <i class="el-icon-warning-outline" /> Ad Soyad bilgisi zorunludur</span>
        </div>
        <div class="form-group" name="Telefon">
          <input id="telefon" v-mask="'# ### ### ## ##'" v-model="pay.telefon" type="text" placeholder="Telefon Numaranız">
          <span v-if="!$v.pay.telefon.required" class="errors"><i class="el-icon-warning-outline" /> Telefon numarası zorunludur</span>
          <span v-if="!$v.pay.telefon.minLength" class="errors"><i class="el-icon-warning-outline" /> Telefon numaraınzı en az 15 karakter olmalı</span>
        </div>
        <div class="form-group" name="Email">
          <input id="email" v-model="pay.mail" type="email" placeholder="E-Mail Adresiniz">
          <span v-if="!$v.pay.mail.required" class="errors"><i class="el-icon-warning-outline" /> E-Mail adresi zorunludur</span>
          <span v-if="!$v.pay.mail.email" class="errors"><i class="el-icon-warning-outline" /> Geçerli bir e-mail adresi girmelisiniz</span>
        </div>
        <div class="form-group" name="Adres">
          <el-select id="sehir" v-model="pay.adres" style="width:100%;" filterable placeholder="Şehir Seçin">
            <el-option v-for="(item,index) in citys" :key="index" :label="item" :value="item" />
          </el-select>
          <span v-if="!$v.pay.adres.required" class="errors"><i class="el-icon-warning-outline" /> Adres zorunludur</span>
        </div>
        <div class="form-group">
          <el-switch v-model="invoice" class="mw-mr-1" active-color="#111" /> Firma adına fatura istiyorum
        </div>
        <div v-if="invoice">
          <h2>FİRMA BİLGLİERİ</h2>
          <div class="form-group">
            <el-tooltip content="Zorunlu değildir" placement="left" effect="light">
              <input id="vd" v-model="pay.firma" type="text" placeholder="Firma Ünvanınız">
            </el-tooltip>
          </div>
          <div class="mw-d-grid mw-grid-col-2 mw-grid-gap-2">
            <div class="form-group">
              <el-tooltip content="Zorunlu değildir" placement="left" effect="light">
                <input id="vd" v-model="pay.vd" type="text" placeholder="Vergi Daireniz">
              </el-tooltip>
            </div>
            <div class="form-group">
              <el-tooltip content="Zorunlu değildir" placement="left" effect="light">
                <input id="vn" v-model="pay.vn" type="text" placeholder="Vergi Numaranız">
              </el-tooltip>
            </div>
          </div>
        </div>
        <h2>HİZMET KAPSAMI</h2>
        <div class="form-group" name="Hizmet">
          <el-select id="konu" v-model="pay.hizmet" style="width:100%;" filterable placeholder="Hizmet Seçin">
            <el-option v-for="(item,index) in services" :key="index" :label="item" :value="item" />
            <el-option :label="'Diğer'" :value="'Diğer'" />
          </el-select>
          <span v-if="!$v.pay.hizmet.required" class="errors"><i class="el-icon-warning-outline" /> Hizmet seçimi zorunludur</span>
        </div>
        <div class="form-group" name="Fiyat">
          <input id="tutar" v-model="pay.tutar" type="number" placeholder="Tutar Girin">
          <span v-if="!$v.pay.tutar.required" class="errors"><i class="el-icon-warning-outline" /> Tutar zorunludur</span>
        </div>
        <button :disabled="$v.$invalid" class="form-button">
          FORMU GÖNDER
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      token: this.$cookies.get('token'),
      invoice: false,
      loading: false,
      pay: {
        adsoyad: '',
        telefon: '',
        mail: '',
        adres: '',
        hizmet: '',
        tutar: ''
      },
      services: [
        'Web Tasarım Hizmeti', 'Sosyal Medya Danışmanlığı', 'Hosting & Domain', 'Baskı Hizmeti', 'Reklam Hizmeti'
      ]
    }
  },
  validations: {
    pay: {
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
      adres: {
        required
      },
      hizmet: {
        required
      },
      tutar: {
        required
      }
    }
  },
  computed: {
    ...mapGetters({
      citys: 'webconfig/citys'
    })
  },
  created () {
    if (this.token) {
      this.$router.push('online-odeme/3dpay')
    }
  },
  methods: {
    ...mapActions({
      CREATE_TOKEN: '3dpay/CREATE_TOKEN'
    }),
    NEW_TOKEN () {
      this.loading = true
      this.CREATE_TOKEN(this.pay).then(() => {
        this.$router.push('online-odeme/3dpay')
      })
    }
  }
}
</script>
