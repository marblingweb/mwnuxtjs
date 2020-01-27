<template>
  <div>
    <div class="mw-container body-container">
      <MainMenu />
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainMenu from '@/components/MainMenu/MainMenu'
import Footer from '@/components/Footer/index'
export default {
  head () {
    return {
      title: this.config.metatitle
    }
  },
  components: {
    MainMenu,
    Footer
  },
  computed: {
    ...mapGetters({
      config: 'webconfig/config'
    })
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
