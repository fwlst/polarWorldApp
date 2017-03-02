<template>
    <div>
      <swiper></swiper>
      <grid></grid>
      <hotList></hotList>
    </div>
</template>

<script>
  import swiper from './Swiper.vue'
  import grid from './Grid.vue'
  import hotList from './HotList.vue'
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

