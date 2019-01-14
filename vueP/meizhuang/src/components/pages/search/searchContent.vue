<template>
<div>
	<section id="page">
		<div class="search_form">
			<form action="/itemSearch/searchPage" method="get" class="flex" id="search_form">
				<div class="l">
					<div class="flex">
						<i class="fa fa-search" aria-hidden="true"></i>
						<span><input class="key" type="text" v-model="keyword" value="keyword"  placeholder="搜索商品或品牌" name="content"></span>
					</div>
				</div>
				<div class="r">
					<input class="submit" type="button" value="搜索" @click="goto(keyword)" />
				</div>
			</form>
		</div>
		<div class="search_hot">
			<div class="hd">热门搜索</div>
			<div class="bd">
				<a href="javascript:;" v-for="(item,idx) in hot" :key="idx" @click="goto2(item)">{{item}}</a>
			</div>
		</div>
	</section>
	</div>
</template>

<script>

	import { Toast } from 'mint-ui';

	export default {
		data(){
			return {
				hot:["悦诗风吟","面霜","兰芝","面膜","化妆水","唇膏/口红","BB霜","精华","促销"],
				keyword:"",
			}
		},
		methods:{
			goto(){
				if(!this.keyword){
					Toast({
					  message: '请输入搜索关键字',
					  position: 'middle',
					  duration: 2000,
					  className:'Toasts'
					});
					return;
				}
				this.$router.push({path:"/itemSearch",query:{keyWord:this.keyword}})
			},
			goto2(item){				
				this.keyword = item;
				let Key = this.keyword;
				let ts = this.$router;

				setTimeout(function(){
					ts.push({path:"/itemSearch",query:{keyWord:Key}});
				},1000);
				
			}
		},
		created(){
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../styls/main.less");
	#page{
		.fs(14);
		.mt(44);
		overflow: hidden;
		.search_form{
			.pg(10);
			overflow: hidden;
		
			.flex{
				overflow: hidden;
				display: flex;
				justify-content: space-between;

				.l {
					.w(305);
				    .h(40);
				    .lh(40);
				    .border-radius(20);
				    color: #999;
				    background: #f5f5f5;

				    i{
				    	.lh(40);
				    	.margin(0,4,0,15);
				    	.fs(18);
				    }

				    span{
				    	display: inline-block;
				    	.w(265);
				    	.h(40);
				    	.border-radius(20);

				    	.key{
				    		.w(265);
					    	.h(40);
					    	.border-radius(20);
					    	background: #f5f5f5;
					    	border:0 none;
					    	.fs(14);

				    	}
				    }
				}

				.r{
					.w(50);
					.h(40);
					.lh(40);
					text-align: center;

					.submit{
						background: none;
						border: 0 none;
						.fs(14);
						color: #999;
					}
				}
			}
		}

		/*热门搜索 标题*/
		.search_hot{
			overflow: hidden;
			.margin(10,20,20,20);

			.hd {
			    .fs(16);
			    .mb(15);
			    color: #333;
			}
		}
		

		/*热门搜索 内容*/
		.bd{
			overflow: hidden;

			a {
			    display: inline-block;
			    border: 1px solid #ddd;
			    .h(30);
			    .lh(30);
			    .padding(0,5,0,5);
			    color: #999;
			    .mr(15);
			    .mb(15);
			}
		}

	}


	.toasts {
	  background: red !important;
	}
</style>