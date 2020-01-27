<template>
  <div class="container-text">
    <div class="text-group">
      <h1>BANKA HESAP BİLGİLERİ</h1>
    </div>
    <div class="text-group">
      <p>Ödemelerinizi aşağıdaki banka bilgileri doğrultusunda yapabilirsiniz</p>
    </div>
    <div class="text-group">
      <h2>AKBANK</h2>
      <p>TR55 0004 6006 9388 8000 2453 15</p>
    </div>
    <div class="text-group">
      <h2>YAPI KREDİ</h2>
      <p>TR91 0006 7010 0000 0047 7073 28</p>
    </div>
    <div class="text-group">
      <h2>GARANTİ</h2>
      <p>TR55 0006 2001 1620 0006 6740 32</p>
    </div>
    <div class="text-group">
      <h2>ZİRAAT</h2>
      <p>TR32 0001 0021 8947 1084 5950 02</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      meta: { title: 'Banka Hesap Bilgilerimiz ', image: '/assets/files/img/webdesign6.jpg', url: 'banka-hesap-bilgileri' }
    }
  },
  created () {
    this.$emit('SET_TITLE', this.meta)
  }
}
</script>
