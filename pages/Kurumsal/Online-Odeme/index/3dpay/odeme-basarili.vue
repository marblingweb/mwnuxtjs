<template>
  <div>
    <div class="text-group mw-d-grid mw-grid-col-1 text-center mw-mb-2">
      <i class="el-icon-check icon" />
      <p>
        Kredi / Banka kartı ödemeniz başarılı bir şekilde gerçekleştirildi.
      </p>
      <p>
        Ödemeniz ile ilgili detaylar mail adresinize iletilmiştir.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created () {
    this.DELETE_TOKEN()
  },
  methods: {
    ...mapActions({
      DELETE_TOKEN: '3dpay/DELETE_TOKEN'
    })
  }
}
</script>
