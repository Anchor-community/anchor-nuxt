export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Anchor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://anchor.institute/OGP.png',
      },
      {
        name: 'twitter:description',
        content: 'Anchorは、リモートクリエイターのためのコミュニティです。',
      },
      { name: 'twitter:title', content: 'Anchor' },
      {
        hid: 'description',
        name: 'description',
        content: 'Anchorは、リモートクリエイターのためのコミュニティです。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Anchor',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://anchor.institute',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'アンカーデザイン研究所',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Anchor',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://anchor.institute/OGP.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      {
        rel: 'stylesheets',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@200,400;500;700&family=Roboto:wght@400;500;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['~/assets/scss/_variables.scss', '~/assets/scss/_global.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
