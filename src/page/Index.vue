<template>
    <div class="index">
      <swiper></swiper>
      <grid></grid>
      <hotList></hotList>
    </div>
</template>

<script>
  import swiper from '@/components/index/Swiper.vue'
  import grid from '@/components/index/Grid.vue'
  import hotList from '@/components/index/HotList.vue'
  export default {
    name: 'app',
    components: {
      swiper: swiper,
      grid: grid,
      hotList: hotList
    }
  }
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

