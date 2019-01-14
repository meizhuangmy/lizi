<template>
    <div id="app">
    
         <router-view/>
      <!-- <Header></Header> -->
      <Footer></Footer>
    </div>
</template>

<script>
import Footer from './components/commons/Footer.vue'
/*import Header from './components/commons/Header.vue'*/

export default {
  name: 'App',
  components:{
    Footer
  }

}
</script>


