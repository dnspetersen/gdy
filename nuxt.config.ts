// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
      head: {
          meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { name: 'format-detection', content: 'telephone=no' }
          ],
          link: [
              { rel: 'icon', type: 'image/png', href: '/favicon.png' },
              { rel:"stylesheet" , href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&display=swap", type: 'text/css'}
          ]
      }
  },
  css: [
      '@/assets/style.css',
      '@/assets/mixin.less'
  ],
  modules: [
      '@nuxtjs/google-fonts',
      '@pinia/nuxt',
      'nuxt-swiper',
      'nuxt-gtag',
      '@nuxtjs/storybook',
  ],
  storybook: {
    url: 'http://localhost:6006',
    storybookRoute: '/__storybook__',
    port: 6006,
  },
  gtag: {
    id: 'G-MT4GSMBB6L',
    initialConsent: false
  },
  devtools: { enabled: false },
  ssr: false,
  generate: {
    routes: [
        '/servicos',
        '/cases',
        '/cases/sce',
        '/cases/tecnicotorcedor',
        '/cases/esupri',
        '/cases/powerin',
        '/cases/banktools',
        '/cases/pathnet',
        '/cases/uanna',
        '/sobre',
        '/politica',
        '/termos',
        '/contato'
    ]
  },
  build: {
    transpile:['gsap']
  }
  
})
