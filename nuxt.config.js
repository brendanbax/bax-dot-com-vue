export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Brendan Bax | Digital Product Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Excellent description of my site here...' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['~/assets/animation.css'],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  content: {},
  build: {}
}
