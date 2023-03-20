// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss'],
    modules: [
        '@nuxt/image-edge',
    ],
    meta: {
        title: 'PersonUs',
        htmlAttrs: {
            lang: 'fr'
        },
        link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            {
                rel: 'stylesheet',
                media: 'print',
                onload: 'this.onload=null;this.removeAttribute(\'media\');',
                href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Lato:wght@300;400&display=swap'
            },
        ],
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        '@/assets/css/main.css',
    ],
    image: {
        // domains: ['https://personus.com']
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
          '2xl': 1536
        }
      },
})