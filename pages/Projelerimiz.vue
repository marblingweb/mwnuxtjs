<template>
  <div class="mw-container">
    <nuxt-child />
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
