<template>
    <div class="grid">
      <router-link class="menu_item" v-for="(item,index) in menuItems" :to="'/siteList/'+index" tag="div">
        <img :src="item.imgUrl" class="item_img">
        <p>{{ item.name }} </p>
      </router-link>
    </div>
</template>

<script>
    export default {
      name: 'grid',
      data () {
        return {
          menuItems: [
            {
              name: '网球',
              imgUrl: 'http://weixin.dongxinwl.cn/Public/Uploads/projects/app_icon/wq.png'
            },
            {
              name: '羽毛球',
              imgUrl: 'http://weixin.dongxinwl.cn/Public/Uploads/projects/app_icon/ymq.png'
            },
            {
              name: '足球',
              imgUrl: 'http://weixin.dongxinwl.cn/Public/Uploads/projects/app_icon/zq.png'
            },
            {
              name: '篮球',
              imgUrl: 'http://weixin.dongxinwl.cn/Public/Uploads/projects/app_icon/lq.png'
            },
            {
              name: '游泳',
              imgUrl: 'http://weixin.dongxinwl.cn/Public/Uploads/projects/app_icon/yy.png'
            },
            {
              name: '乒乓球',
              imgUrl: 'http://weixin.dongxinwl.cn/Public/Uploads/projects/app_icon/ppq.png'
            }
          ]
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less">
.grid{
  display: flex;
  flex-wrap: wrap;
  border-bottom: 10px solid #eee;
  .menu_item{
    flex: 32%;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    &:nth-child(3n){
      border-right: none;
    }
    &:nth-last-child(3),&:nth-last-child(2),&:nth-last-child(1){
      border-bottom: none;
    }
    .item_img{
      width: 50%;
      margin-top: 10px;
    }
    p{
      margin: 0 0 10px;
      font-size: 1rem;
    }
  }
}




</style>
