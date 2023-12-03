<template>
  <!-- 自定义导航栏 -->
  <custom-navbar />
  <!-- 自定义轮播图 -->
  <CakeSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<script setup lang="ts">
import { getHomeBannerApi } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  console.log(res)
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<style></style>
