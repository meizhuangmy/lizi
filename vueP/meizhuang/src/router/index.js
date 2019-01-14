import Vue from 'vue'
import VueRouter from 'vue-router'

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

/*import HelloWorld from '@/components/HelloWorld'*/
//详情页
import detailCont from '../components/pages/details/detailCont.vue'
//购物车页面
import buyCar from '../components/pages/details/buyCar.vue'
 
import Baoshi from '../components/pages/list/Baoshi/Baoshi'
import Danpin from '../components/pages/list/Danpin/Danpin' 
import Geli from '../components/pages/list/Geli/Geli'
import Lizi from '../components/pages/list/Lizi/Lizi' 
import Meibai from '../components/pages/list/Meibai/Meibai' 
import Newpin from '../components/pages/list/Newpin/Newpin'
import Login from '../components/pages/login/Login'
import Details from '../components/commons/Details'
import Reg from '../components/pages/reg/Reg'
import Search from '@search/search'
import itemSearch from '@search/itemSearch/itemSearch'
    /*import Sales from "@search/itemSearch/Dynamic/Sales"
    import Popularity from "@search/itemSearch/Dynamic/Popularity"

import SalesChildren from "@search/itemSearch/Dynamic/SalesChildren"
*/


export default  new VueRouter({
  routes: [
   
    {path: '/',redirect: '/Lizi'},
    {path:'/Lizi',component: Lizi,name:'Lizi'},
    {path:'/Baoshi',component: Baoshi,name:'Baoshi'},
    {path:'/Danpin',component: Danpin,name:'Danpin'},
    {path:'/Geli',component: Geli,name:'Geli'},
    {path:'/Meibai',component: Meibai,name:'Meibai'},
    {path:'/Newpin',component: Newpin,name:'Newpin'},
    {path:'/Login',component: Login,name:'Login'},
    {path:'/Reg',component: Reg,name:'Reg'},
     {path:'/details/:id/:name/:picSmall',component:Details,name:'details'},
     {path:'/detailCont',component:detailCont,name:'detailCont'},
     {path:'/buyCar',component:buyCar,name:'buyCar'},
     { name:'Search' , path:'/search' , component: Search },

        {
            // name: "itemSearch",
            path:'/itemSearch',
            component: itemSearch
            /*children:[
                {
                  path:'',//默认子路由
                  redirect:{name:'Sales'}
                },
                { path: "sales" , name: "Sales" , component: Sales },
                { path: "popularity" , name: "Popularity" , component: Popularity },
            ]*/
        }

       /* { name: "SalesChildren" , path:"/SalesChildren/:id" , component: SalesChildren }*/
  ]
})
/*
**************************************************/
/*第二种方法*/
/*const router = new VueRouter({
  routes: [
    { path: '/',redirect: '/Lizi'},
    {path:'/Lizi',component: Lizi,name:'Lizi'},
    {path:'/Baoshi',component: Baoshi,name:'Baoshi'},
    {path:'/Danpin',component: Danpin,name:'Danpin'},
    {path:'/Geli',component: Geli,name:'Geli'},
    {path:'/Meibai',component: Meibai,name:'Meibai'},
    {path:'/Newpin',component: Newpin,name:'Newpin'}

      
  ]
})

export default router;*/

