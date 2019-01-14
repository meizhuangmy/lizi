<template>
	<header id="header">
		<div class="bd flex">
			<a href="javascript:history.go(-1);" class="back" id="back_prev">
				<i class="fa fa-reply-all" aria-hidden="true"></i></a>
			<div class="bd_search">
				<form>
					<input type="text" name="content" :value="ipt">
					<i class="iconfont err"  @click="hide" >x</i>
				</form>
			</div>
			<a href="javascript:;" class="right" id="back_index"><i class="iconfont"></i></a>
		</div>
	</header>
</template>

<script>
	export default {
		props:["SearchKeywords"],
		data(){
			return{
				ipt:this.SearchKeywords
			}
		},
		methods:{
			hide(){
				this.ipt="";
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../../styls/main.less");	
	#header{
    	overflow: hidden;
    	position: fixed;
    	top: 0;
    	right: 0;
    	left: 0;
    	z-index: 99;

    	.bd{    		
    		text-align: center;
    		.w(375);
	    	.h(44);
	    	.lh(44);
			background: #ff666b;
	    	color: #fff;
	    	display: -webkit-flex;
	    	display: -moz-flex;
	    	display: -ms-flex;
	    	display: -o-flex;
	    	display: flex;
	    	justify-content: space-between;

			@font-face {
				font-family:lizi;src:url(//at.alicdn.com/t/font_1457769543_059663.eot);src:url(//at.alicdn.com/t/font_1457769543_059663.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_1457769543_059663.woff) format('woff'),url(//at.alicdn.com/t/font_1457769543_059663.ttf) format('truetype'),url(//at.alicdn.com/t/font_1457769543_059663.svg#iconfont) format('svg')
			}
		
	    	.right,.back{
	    		.w(44);
	    		.h(44);
				color: #fff;				
				.fs(18);

				.iconfont {
					font-family: lizi;
					font-size: 100%;
					font-weight: 400;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
					font-style: normal;
					
				}
	    	}

	    	.bd_search {
	    		.w(287);
			    .h(32);
			    background: #fff;
			    .border-radius(10);
			    .mt(6);


			    input, form {
				    width: 100%;
				    border: none;
				    height: 100%;
				    .border-radius(10);
				    display: block;

				    display: -webkit-flex;
				    display: -moz-flex;
				    display: -ms-flex;
				    display: -o-flex;
				    display: flex;
				    justify-content: space-between;

				    input{
				    	text-indent: 1em;
				    }

				    .err[data-v-2e97af60]{
				    	display: inline-block;
				    	background: #9e9e9e;
				    	font-family: "微软雅黑";
				    	font-style: normal;
				    	.w(22);
				    	.h(20);
				    	.lh(16);
				    	.fs(18);
				    	.border-radius(20);
						.mt(6);
						.mr(6);
				    }
				}
			}
    	}
	}

</style>