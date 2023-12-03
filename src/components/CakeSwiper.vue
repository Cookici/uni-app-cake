<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'
const activeIndex = ref(0)
const changehandler: UniHelper.SwiperOnChange = (event) => {
  activeIndex.value = event.detail.current
}

//定义props接收index.vue传过来的bannerList
const props = defineProps<{
  list: BannerItem[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" @change="changehandler">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl" />
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
@import './styles/CakeSwiper.scss';
</style>
