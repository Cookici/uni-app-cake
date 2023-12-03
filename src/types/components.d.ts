import CakeSwiper from '@/components/CakeSwiper.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CakeSwiper: typeof CakeSwiper
  }
}
