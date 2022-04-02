import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
  }
  interface PublicRuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        assetsPath: any,

        cdnURL: any,
    },
  }
  interface PrivateRuntimeConfig {
  
  }
}