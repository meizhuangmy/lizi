<template>
    <div>
        <regHeader></regHeader>
        <regContent></regContent>
    </div>
</template>

<script>

    // 引入组件
    import regHeader from "./regHeader.vue"
    import regContent from "./regContent.vue"

    export default {
        name:"Reg",
        data(){
            return{
                data:[]
            }
        },
        components:{
            regHeader,
            regContent
        }
        
    }
</script>


<style lang="less" scoped>

</style>