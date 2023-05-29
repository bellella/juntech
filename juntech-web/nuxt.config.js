const isProduction = process.env.NODE_ENV === 'production'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  //target: 'static',
  head: {
    title: 'juntech-web',
    htmlAttrs: {
      lang: '',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://kit.fontawesome.com/540cf4e192.js',
        scrossorigin: 'anonymous',
      },
      {
        src: '//dapi.kakao.com/v2/maps/sdk.js?appkey=e9e45525c909135135aaa9f141c2630f',
        type: 'text/javascript',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js',
        type: 'text/javascript',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js',
        type: 'text/javascript',
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/service.js',
    '@/plugins/vee-validate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [
  //   // https://go.nuxtjs.dev/eslint
  //   '@nuxtjs/eslint-module',
  // ],
  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //   '@nuxtjs/style-resources'
  // ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //transpile: ['vee-validate/dist/rules'],
    standalone: true,
  },
  server: {
    port: isProduction ? 7000 : 4000,
  },
  env: {
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {
    proxy: true,
    //baseURL: isProduction ? 'http://localhost' : 'http://localhost:3000'
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      //pathRewrite: { '^/api': '/' },
    },
    '/s': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      //pathRewrite: { '^/api': '/' },
    },
  },
}
