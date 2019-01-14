<template>
	<div>
		<nav>
			<ul class="flex" data-index="a">
				<li v-for="(item,idx) in navs" :key="item.name" :class="{active:item.name==active}" @click="goto(item.name)"><a href="javascript:;">{{item.title}}</a></li>
				<li>
					<a href="javascript:" v-model="price" class="price_btn" @click="isShow" :class="{active:jg==true}">{{price}}<i class="fa fa-chevron-down" aria-hidden="true"></i></a>
					<ul class="hidden" v-show="Show">
						<li v-for="(item,idx) in hidden" :key="item" @click="Price(item)"><a href="javascript:;">{{item}}</a></li>
					</ul>
				</li>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
</template>


<script>


	export default {
		// props:["Keys"],
		data(){
			return {
				navs:[
					{
						title: "销量",
						name:"sales",
					},
					{
						title: "人气",
						name:"popularity",
					}
				],

				hidden:["99元以内","100-199元","200-299元","300元以上"],
				active: "sales",
				Show:false,
				jg:false,
				keyWord:this.$route.query.keyWord,
				price:"价格",
			}
		},
		methods:{
			goto(name){
				this.active = name;				
				this.jg = false;
				this.$router.push({path:"/itemSearch/"+name,query:{keyWord:this.keyWord}})
			},
			isShow(){
				this.Show = !this.Show;
				this.jg = false;
			},
			Price(item){
				this.price=item;
				this.jg = true;
				this.Show = !this.Show;
				this.active = "";

			}
		},
		watch:{
			$route(newValue,oldValue){
			// console.log(newValue,oldValue)
			}
		 },

	}

</script>

<style lang="less" scoped>
	@import url("../../../../styls/main.less");	

	.active{				
		border-bottom: 2px #ff666b solid;
	}
	nav{
		position: fixed;
		.fs(14);
		.w(375);
		.h(40);
		.top(44);
		.left(0);
		.right(0);
		background:#fff;
		z-index: 99;
		
		.flex{
			.w(375);
			.h(40);
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			justify-content: space-between;

			li{
				width: 100%;
				text-align: center;
				.lh(40);
				a{
					text-decoration: none;
					display: inline-block;
					width: 100%;
					.h(40);
				}

				ul{
					width: 100%;
					background: #f5f5f5;
					overflow: hidden;

					li{
						width: 100%;
						.h(40);
					}
				}
			}			
		}
	}

</style>