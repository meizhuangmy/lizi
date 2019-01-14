<template>
    <div class="searchHeader">
        <div class="left">            
            <i class="fa fa-reply-all" aria-hidden="true" @click="golizi"></i>
        </div>

        <div class="center">
           搜索
        </div>

        <div class="right" @click="goto">
            <i class="fa fa-search" aria-hidden="true"></i>
            首页
        </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        name: 'searchHeader',
        methods:{
            goto(){
                
            },
            golizi(){
                this.$router.push({path:'/Lizi'})
            }
        }

    }
</script>


<style lang="less" scoped>
    @import url("../../../styls/mixin");
    .searchHeader{
        position:fixed;
        top:0px;
        right:0px;
        left:0px;
        z-index:99;
        background: #FF666B;
        justify-content:space-between;  
        .lh(10);
        .h(44);
        .center{
            .fs(18);
            .w(287);
            .h(44);
            color:#FFECED;
            font-weight: bolder;
            display: inline-block;
            .lh(44);
            text-align:center;
        }
        .left{ 
            float:left;
            .w(44);
            .h(44);
            display: inline-block;
            .fs(18);
            color:#FFECED;
            .lh(44);
            text-align:center;
        }
        .right{
            float:right;
            .w(44);
            .h(44);
            display: inline-block;
            .fs(18);
            color:#FFECED;
            .lh(44);
            text-align:center;
        }
    }
</style>