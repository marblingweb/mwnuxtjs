<template>
  <div class="container-text">
    <div class="text-group">
      <h1>SÖZLEŞME ÖRNEĞİ</h1>
    </div>
    <div class="text-group">
      <p>
        <b>MarblingWeb</b> olarak, işleyişimizin karşılıklı güven çerçevesi içerisinde gerçekleşmesi adına hazırladığımız Sözleşme & Teklif metninin örneğine aşağıdaki linkler aracılı ile ulaşabirsiniz.
      </p>
    </div>
    <div class="text-group text-center mw-d-grid mw-grid-col-2">
      <router-link to="/assets/files/contract/mw-contract.doc">
        <p>
          <i class="fa fa-file-word contract-icon" />
          <span>Word formatında indirin</span>
        </p>
      </router-link>
      <router-link to="/assets/files/contract/mw-contract.pdf">
        <p>
          <i class="fa fa-file-pdf contract-icon" />
          <span>PDF formatında indirin</span>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      meta: { title: 'Sözleşme Örneği', image: '/assets/files/img/webdesign1.jpg', url: 'sozlesme-ornegi' }
    }
  },
  created () {
    this.$emit('SET_TITLE', this.meta)
  }
}
</script>
