<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div>
    <!-- swiper -->
    <swiper :options="swiperOption">
      <div class="swiper-slide" v-for="banner in banners">
        <img v-bind:src="banner.src">
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      // banners: [
      //   '/static/images/cbd.jpg',
      //   '/static/images/muwu.jpg',
      //   '/static/images/shuijiao.jpg',
      //   '/static/images/yuantiao.jpg'
      // ],
      swiperOption: {
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
    }
  },
  props: [
    'banners'
  ],
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
}
</style>