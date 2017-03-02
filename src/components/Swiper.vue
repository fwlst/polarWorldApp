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
          autoplay: 3500,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true
        },
        swiperSlides: ['/static/img/a.jpg', '/static/img/b.jpg', '/static/img/c.jpg']
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
