<template>
  <div class="swiperComponent">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides">
        <img :src=" slide ">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption: {
          autoplay: 200,
          loop: true,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true
        },
        swiperSlides: ['/assets/img/a.jpg', '/assets/img/b.jpg', '/assets/img/c.jpg']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less">
.swiperComponent{
  img{
    display: block;
    width: 100%;
  }
}
</style>
