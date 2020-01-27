<template>
  <div class="container-text">
    <div v-if="token">
      <div class="text-group">
        <p>
          Ödemenizi aşağıdaki form aracılığı ile güvenli bir şekilde ister tek çekim isterseniz taksitli olarak gerçekleştirebilirsiniz.
        </p>
        <h2>Ödeme Bilgileriniz</h2>
        <p>
          Alınan Hizmet "{{ token.field.hizmet }}"<br>
          Hizmet Tutarı "{{ token.field.tutar | price }}"<br>
          Ödeme Numaranız "{{ token.field.siparisno }}"<br>
          Mail Adresiniz "{{ token.field.mail }}"
        </p>
      </div>
      <iframe :src="'https://www.paytr.com/odeme/guvenli/'+token.id" width="100%" style="height:100vh" />
    </div>
    <div v-else>
      <div class="text-group mw-d-grid mw-grid-col-1 text-center mw-mb-2">
        <i class="el-icon-warning-outline icon" />
        <p>
          Ödeme yapabilmeniz için bilgilerinizi girip size özel "ANAHTAR" oluşturmalısınız.
        </p>
        <p>
          Yeni bir ANAHTAR oluşturmanız için ödeme formuna geri dönün
        </p>
      </div>
      <center>
        <nuxt-link tag="a" to="/kurumsal/online-odeme">
          <button type="button" class="container-button">
            <i class="el-icon-arrow-left mw-mr-1" /> Ödeme Formu
          </button>
        </nuxt-link>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: this.$cookies.get('token')
    }
  }
}
</script>
