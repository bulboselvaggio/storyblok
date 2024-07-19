import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import mkcert from 'vite-plugin-mkcert';
const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      //accessToken: env.STORYBLOK_TOKEN,
      accessToken: 'Z25UexdLwCf2QLAZGrP7rwtt',
      apiOptions: {
        region: '',
      },
      bridge: {
        customParent: 'https://app.storyblok.com',
      },
      components: {
        page: 'storyblok/Page',
        product: 'components/Product',
        config: 'storyblok/Config',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        hero: 'storyblok/Hero',
        'popular-articles': 'storyblok/PopularArticles',
        'all-articles': 'storyblok/AllArticles',
        article: 'storyblok/Article',
        'popular-products': 'storyblok/PopularProducts',
        'all-products': 'storyblok/AllProducts',
        product: 'storyblok/Product',
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [mkcert()],
    server: {
      https: true,
    },
  },
})