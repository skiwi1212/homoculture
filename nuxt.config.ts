export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-security'
  ],

  ui: {
    icons: ['heroicons'],
    colors: {
      primary: 'pink'
    }
  },

  content: {
    documentDriven: true,
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    },
    highlight: {
      theme: 'github-dark'
    }
  },

  security: {
    headers: {
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginResourcePolicy: 'cross-origin',
      contentSecurityPolicy: false
    },
    rateLimiter: {
      tokensPerInterval: 150,
      interval: 'hour',
    },
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
    xssValidator: false,
    enabled: true
  },

  compatibilityDate: '2025-03-27'
})