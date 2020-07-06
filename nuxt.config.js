export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Brendan Bax | Digital Product Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Brendan is a passionate designer and developer building products that intersect practical design and cutting-edge technology.  He applies his skills at startups, agencies, and major enterprises using design thinking, rapid prototyping, and agile development to create user-centered solutions for complex business problems.' }
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
