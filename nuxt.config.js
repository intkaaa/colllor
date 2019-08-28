const pkg = require('./package')
const resolve = require('path').resolve

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:900&display=swap' }
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
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    [
      'nuxt-stylus-resources-loader',
      [resolve(__dirname, 'assets/stylus/main.styl')]
    ],
  ],

  manifest: {
    name: 'colllor',
    short_name: "colllor",
    lang: 'ja',
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    title: 'colllor',
    description: 'Brand color tools',
    'og:title': 'Brand color tools',
    'og:description': 'Brand color tools',
    "icons": [
      {
        "src": "/icon.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
  },

  workbox: {
    dev: true, //開発環境でもPWA
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  server: {
    host: "0.0.0.0"
  }
}
