<template>
    <div class="danpin">
        <Header></Header>
        <Nav></Nav>
        <ul class="items_list"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="100">
            <li v-for="(item,index) in DanpinList" :key='index' @click="goDetails(item.id,item.pic,item.price,item.salesCount,item.title)">
                <img :src="item.pic">
                <div class="content">
                    <h2>{{item.title}}</h2>
                    <span class="sale-count gray">已售出：{{item.salesCount}}件</span>
                    <span class="old gray">市场价:￥{{item.marketPrice}}</span>
                    
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import { Loadmore } from 'mint-ui'
    import { InfiniteScroll } from 'mint-ui';
    import Header from '../../../commons/Header.vue';
    import Nav from '../../../commons/Nav.vue';
    import Axios from 'axios';
    export default{
        name:'Danpin',
        components: {
            Header,Nav
        },
        data(){
            return{
                DanpinList:[]
            }
        },
        methods:{
            loadMore(){
                this.getDanpin();
            },
            getDanpin(){
                let toast=Toast({
                    message: '数据加载中!',
                    iconClass: 'fa fa-spinner fa-spin',
                    duration: -1           //-1代表数据加载完毕后会自动关闭加载图标
                });
                Axios.get('/app/newIndex/getItemDetailList?max=10&url=%2FnewIndex%2FgetItemDetailList&id=5767c678e4b0edc8bf0af2c1&type=ITEM&offset=0')
                .then((res)=>{
                    this.DanpinList=this.DanpinList.concat(res.data.model.data);
                    toast.close()
                })
                .catch((err)=>{
                    console.log(err)
                    toast.close()
                })
            },
            goDetails(id,imgUrl,price,salesCount,title){
                this.$router.push({name:'detailCont',params:{
                    img:`${imgUrl}`,
                    title:`${title}`,
                    id:`${id}`,
                    price:`${price}`,
                    renshu:`${salesCount}`,
                    title:`${title}`,
                }})
            }
        },
        created(){
            this.getDanpin()
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    @import url("../../../../styls/main.less");
    .danpin{
        .mt(94);
        ul{
            margin-top: 85px;
            list-style: none;
            background: #F5F5F5;
            li{
                .margin(8,8,0,8);
                .w(359);
                .h(100);
                background:#FFFFFF;
                border:1px solid #EDEDED;
                img{
                    .w(100);
                    .h(98);
                    float:left;
                }
                h2{
                    margin-bottom: 20px;
                    .w(250);
                    .h(30);
                    .fs(12);
                    .padding(5,5,0,0);
                    float:right;
                    text-align:left;
                }
                .sale-count{
                    .fs(12);
                    .h(15);
                    color:#999999;
                    padding-left: 8px;
                }
                .old{
                    .fs(12);
                    .h(15);
                    color:#999999;
                    .padding(0,75,0,0);
                }
                .now{
                    .fs(16);
                    display:block;
                    .padding(0,210,0,0);
                    color:#FD767B;
                    padding-left: 106px;
                }
            }   
        }
    }
</style>