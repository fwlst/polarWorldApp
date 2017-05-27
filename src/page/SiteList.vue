<template>
    <ul class="siteList">
        <router-link class="hot_item" v-for="(item,index) in hotItems" tag="li" :to="'/choose/' + item.id">
            <div class="item_img"><img :src=" item.picture "></div>
            <div class="hot_item_right">
                <div class="title">{{index + 1}} {{item.name}}</div>
                <div class="site">地址：{{ item.address }}</div>
            </div>
        </router-link>
    </ul>
</template>

<script>
    import API from '@/api/API'
    export default {
        name: 'siteList',
        data () {
            return {
                hotItems: [],
            }
        },
        mounted () {
            // 获取数据
            this.get_venues_list()
        },
        methods: {
            get_venues_list () {
                API.get_hot_venues_list().then(({data}) => {
                    console.log(data.data)
                    this.hotItems = data.data
                }).catch(function (err) {
                    console.log(err)
                })
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less">
    .siteList {
        margin: 0;
        padding: 0 15px;
        .hot_item {
            padding: 15px 0;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            border-bottom: 1px solid #eeeeee;
            .item_img {
                flex: 30%;
                img {
                    display: block;
                    width: 100%;
                }
            }
            .hot_item_right {
                flex: 65%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: 5%;
                text-align: left;
                .title {
                    font-size: 1.2rem;
                }
                .site {
                    font-size: 1rem;
                }
            }
        }
    }
</style>
