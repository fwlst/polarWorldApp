<template>
    <div class="hot_list">
      <div class="hot_list_title">热门场馆</div>
      <ul class="hot_list_box">
        <router-link class="hot_item" v-for="(val,index) in hotItems" tag="li" :to="'/choose/'+index">
          <div class="item_img"><img :src=" val.imgUrl "></div>
          <div class="hot_item_right">
            <div class="title">{{index + 1}}. {{ val.name }} </div>
            <div class="site">地址：{{ val.site }}</div>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'hotList',
  data () {
    return {
      hotItems: []
    }
  },
  mounted () {
    // 获取数据
    this.fetchData()
  },
  methods: {
    fetchData () {
      const _this = this
      const url = '../../static/data/hotList.json'
      this.$http.get(url).then(function (res) {
        _this.hotItems = res.data.hotItems
      }).catch(function (err) {
        console.log(err)
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less">
.hot_list_title{
  text-align: left;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
}
.hot_list_box{
  margin: 0;
  padding: 0 15px;
  .hot_item{
    padding: 15px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #eeeeee;
    &:last-child{
      border-bottom: none;
    }
    .item_img{
      flex: 30%;
      img{
        display: block;
        width: 100%;
      }
    }
    .hot_item_right{
      flex: 65%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 5%;
      text-align: left;
      .title{
        font-size: 1.2rem;
      }
      .site{
        font-size: 1rem;
      }
    }
  }
}
</style>
