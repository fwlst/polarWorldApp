<template>
    <ul class="siteList">
      <router-link class="hot_item" v-for="(item,index) in hotItems" tag="li" :to="'/choose/'+index">
        <div class="item_img"><img :src=" item.imgUrl "></div>
        <div class="hot_item_right">
          <div class="title">{{index + 1}}.{{ typeName[$route.params.id] }}</div>
          <div class="site">地址：{{ item.site }} </div>
        </div>
      </router-link>
    </ul>
</template>

<script>
    export default {
      name: 'siteList',
      data () {
        return {
          hotItems: [],
          typeName: ['网球', '羽毛球', '足球', '篮球', '游泳', '乒乓球']
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
  .siteList{
    margin: 0;
    padding: 0 15px;
    .hot_item{
      padding: 15px 0;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      border-bottom: 1px solid #eeeeee;
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
