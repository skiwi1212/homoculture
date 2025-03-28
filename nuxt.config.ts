// nuxt.config.ts
export default defineNuxtConfig({
  // Core Modules
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-security',
    '@nuxtjs/i18n'
  ],

  // App Configuration
  app: {
    head: {
      htmlAttrs: {
        style: 'margin: 0; padding: 0;'
      },
      bodyAttrs: {
        style: 'margin: 0; padding: 0;'
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Anybody:wght@400;500;600;700&display=swap'
        },
        {
          rel: 'preload',
          href: '/images/home-hero-image.jpg',
          as: 'image'
        }
      ]
    }
  },

  // Internationalization
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },

  // Styling
  css: ['~/assets/css/tailwind.css'],

  // UI Configuration
  ui: {
    icons: ['heroicons'],
    colors: {
      primary: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ee4d9c',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
      }
    }
  },

  // Content Configuration
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

  // Security Configuration
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

  // Image Configuration
  image: {
    provider: 'ipx',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    quality: 80,
    format: ['webp', 'jpg'],
    densities: [1, 2],
    presets: {
      banner: {
        modifiers: {
          format: 'webp',
          width: 1920,
          height: 1080,
          fit: 'cover',
        }
      },
      article: {
        modifiers: {
          format: 'webp',
          width: 400,
          height: 300,
          fit: 'cover',
        }
      },
      featured: {
        modifiers: {
          format: 'webp',
          width: 800,
          height: 600,
          fit: 'cover',
        }
      }
    }
  },

  // Development Configuration
  devtools: {
    enabled: true
  },

  // TypeScript Configuration
  typescript: {
    strict: true
  },

  // Compatibility Settings
  compatibilityDate: '2025-03-27'
})