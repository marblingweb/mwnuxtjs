<template>
  <div class="mw-error-container">
    <div class="mw-center">
      <PageBanner :image="'/assets/files/img/marblingweb.jpg'" />
      <div class="container-title text-center">
        <span class="error-title">404</span>
      </div>
      <div class="container-section">
        <div class="container-text text-center mw-mb-4">
          <div class="text-group">
            <h1>UPPPSSS !!</h1>
            <p>
              Ardağınız sayfaya ulaşamadık, sayfa silinmiş ya da değişmiş olabilir
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageBanner from '~/components/Banner/PageBanner'
export default {
  layout: 'error-layout',
  components: {
    PageBanner
  }
}
</script>
