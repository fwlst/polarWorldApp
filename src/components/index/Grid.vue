<template>
    <div class="grid">
        <div class="menu_item" v-for="(item,index) in menuItems" @click="goToChoose(index)">
            <img :src="item.app_icon" class="item_img">
            <p>{{ item.name }} </p>
        </div>
    </div>
</template>

<script>
    import API from '@/api/API'
    export default {
        data () {
            return {
                menuItems: []
            }
        },
        mounted(){
            this.get_projects_list();
        },
        methods: {
            get_projects_list () {
                API.get_projects_list().then(({data}) => {
                    this.menuItems = data.data
                }).catch(function (err) {
                    console.log(err)
                })
            },
            goToChoose(index){
                let id = this.menuItems[index].id;
                this.$router.push('/siteList/' + id);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less">
    .grid {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 10px solid #eee;
        .menu_item {
            flex: 33.1% 0 0;
            border-right: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            &:nth-child(3n) {
                border-right: none;
            }
            .item_img {
                width: 50%;
                margin-top: 10px;
            }
            p {
                margin: 0 0 10px;
                font-size: 1rem;
            }
        }
    }


</style>
