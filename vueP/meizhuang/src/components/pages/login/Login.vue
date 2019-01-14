<template>
    <div class="login">
       <loginHeader></loginHeader>
        <loginContent></loginContent>
    </div>
</template>

<script type="text/javascript">
import loginHeader from "./loginHeader.vue";
import loginContent from "./loginContent.vue"
    export default{
        name: 'Login',
        data(){
            return {
                data:[]
            }
           
        },
         components:{
            loginHeader,
            loginContent

        }


    }
</script>


<style type="text/css" lang="less" scoped>
   
   
</style>