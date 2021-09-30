export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'resume-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'noindex' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js'
       }, {
        code:'ca',
        iso: 'ca-ES',
        file: 'ca.js'
      }
    ],    
    defaultLocale: 'en',
    langDir: 'locales'
  }

}
