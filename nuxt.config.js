export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', 'http-equiv': 'Content-Language', content: 'tr' },
      { hid: 'viewport', name: 'viewport', content: 'with=device-width, initial-scale=1' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'poRsxt6HnflUsR_fBMLpM427Y0sWKDOthpREYsU5adE' },
      { hid: 'robots', name: 'robots', content: 'NOODP,index,follow' },
      { hid: 'googlebot', name: 'googlebot', content: 'index, follow' },
      { hid: 'rating', name: 'rating', content: 'general' },
      { hid: 'Pragma', 'http-equiv': 'Pragma', content: 'no-cache' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/style/css/min/style.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/v-mask',
    '~/plugins/filters',
    '~/plugins/vuelidate'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    ['@nuxtjs/google-analytics', { id: 'UA-112579653-1' }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: true
  }
}
