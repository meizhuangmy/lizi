<template>
    <div class="nav">
       <!--  第一种方法 -->
       <ul>
           <router-link v-for="(item,index) of navlist"
           :key="index" 
           active-class='red'
           @click="goPage(item.path)"
           tag="li"
           :to='item.path'
           >
               {{item.name}}
           </router-link>
       </ul>

       <!-- 第二种方法 -->
       <!--  <ul>
           <li v-for="(item,index) of navlist"
           :key="index"
        
           @click="goPage(item.path)"
           >{{item.name}}</li>
           
       </ul> -->
    </div>  
</template>

<script type="text/javascript">
    export default{
        name: 'Nav',
        data(){
            return{
                navlist:[
                    {name:'丽子',path:'/Lizi'},
                    {name:'TOP单品',path:'/danpin'},
                    {name:'潮流新品',path:'/newpin'},
                    {name:'洗发护发',path:'/meibai'},
                    {name:'补水保湿',path:'/baoshi'},
                    {name:'底妆隔离',path:'/geli'}
                    ]
                }
            },
         methods:{
                goPage(path){
                    this.$router.push(path)
                }
            }
        }
       

    
</script>


<style type="text/css" lang="less" scoped>
    @import url("../../styls/main.less");
    .nav{
        position:fixed;
        top:39px;
        right:0px;
        left:0px;
        background:#FFFFFF;
        justify-content:space-between; 
        box-shadow:0px 0px  2px 0px #CECDCA;
        z-index:9999;
        ul{
            .first{
            .w(40);
            }
            li:nth-child(1){
                .w(40);
            }
            li{
                text-align:center;
                float:left;
                .fs(14);
                .w(67);
                .h(45);
                .lh(44);
                font-weight: bolder;
                list-style:none;
            }
            .red{
                color: #FF666B;
                border-bottom: 3px solid #FF666B;
            }
        }
    }

</style>