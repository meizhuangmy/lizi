<template>
	<mt-header title="注册">
  	  <mt-button icon="back" slot="left" @click="goto"></mt-button>
	  <mt-button  slot="right">首页</mt-button>
	</mt-header>
</template>

<script>

	export default {
		data(){
			return{

			}
		},
		methods:{
			goto(){
				history.go(-1);
			}
		}
	}
</script>

<style lang="less" scoped>
	.mint-header{
		height: 44px;
		background-color: #ff666b;
		.mint-header-title{
			font-size: 16px;
		}

		.mintui{
			font-size: 18px;
		}
	}	
</style>