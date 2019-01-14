<template>
  <div class="Lizi">
       <Header></Header>
       <Nav></Nav>
       <Banner></Banner>
       <Homelist></Homelist>
       <PopularActivity></PopularActivity>
       <Renqipin></Renqipin>
  </div>
</template>

<script type="text/javascript">
    import Header from '../../../commons/Header.vue';
    import Nav from '../../../commons/Nav.vue';
    import Banner from './Banner.vue';
    import Homelist from './Homelist.vue';
    import PopularActivity from './PopularActivity.vue';
    import Renqipin from './Renqipin.vue';
    export default{
        name:'Lizi',
        components: {
           Header,Nav,Banner,Homelist,Renqipin,PopularActivity
        },
        data(){
            return{
              data:[]
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
  @import url("../../../../styls/main.less");
  .lizi{
    .mt(84);
  }
</style>