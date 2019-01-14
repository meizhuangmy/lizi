<template>
	
	<div class="buyCar">
		<buycarHeader></buycarHeader>
		<div class="buyCar_contain">
			<div class="shop">
				<div class="shop_l">
					<input type="checkbox" name="" id="shop_inp" @click="checkAll" :checked="aa">
				</div>
				<p>丽子自营</p>
				<div class="shop_r">
					<i class="fa fa-commenting" aria-hidden="true"></i>
				</div>
			</div>
			<div class="shop_list" v-for="(item,index) in list" :key="index">
				<div class="list_Cont">
					<div class="list_l">
						<input type="checkbox" name="" id="list_inp" v-model="item.isShow">
						<img :src="'https://images.weserv.nl/?url='+list[index].imgpath">
					</div>
					<div class="list_c">
						<p class="title">{{list[index].title}}</p>
						<p class="size">规格：<span>{{list[index].size}}</span></p>
						<p class="price">￥{{(list[index].price*list[index].buynum).toFixed(2)}}</p>
					</div>
					<div class="list_r">
						<div>
							<i class="fa fa-trash-o" aria-hidden="true" @click="del(index)"></i>
						</div>
						<div class="numbox">
							<span class="sub" @click="sub(index)">-</span>
							<span class="num">{{list[index].buynum}}</span>
							<span class="add" @click="add(index)">+</span>
						</div>
					</div>		
				</div>
			</div>
			<div class="total">
				<div class="total_l">
					<input type="checkbox" name="" id="total_inp" @click="checkAll" :checked="aa">
				</div>
				<div class="total_c">
					<p>共有<span>{{totalNum}}</span>件商品</p>
					<h5>总计：<span>￥{{allPrice.toFixed(2)}}</span></h5>
				</div>
				<div class="total_r">
					去结算
				</div>
			</div>			
		</div>
	</div>
</template>

<script type="text/javascript">
	//引入头部
	import buycarHeader from './buycarHeader.vue';
	//引入jquery插件
	import $ from "jquery";
	export default{
		name:'buyCar',
		components:{buycarHeader},

		data(){
			return {
				list:[]
			}
		},
		computed: {
			aa: function() {
			  return this.list.every(function(item) {
			    return item.isShow;
			  });
			},
		    allPrice() {
		      //总价
		      var price = 0;
		      this.list.forEach(item => {
		        if (item.isShow) {
		          price += item.price * item.buynum;
		        }
		      });
		      return price;
		    },
			
			totalNum(){
				//总数量
				let totalNum = 0;
				this.list.forEach(item =>{
					if(item.isShow){
						totalNum += item.buynum;
					}
				});
				return totalNum;
			}
		},
		methods:{
			//获取购物车数据
			getbuyCarData(){
				this.$axios({
					method :'post',
					url:'/api/buyCar/findCar',
					data:{}
				}).then((res)=>{
					// console.log(res);
					this.list = res.data.data;
				})
			},
			//点击增加数量
			add(index){
				//console.log(this.list[index].buynum)
				let addnum = this.$qs.stringify({					
					buynum : this.list[index].buynum+1,
					id : this.list[index].id
				})
				//let num = this.list[index].buynum+1;
				//console.log(num)
				this.$axios({
					method :'post',
					url:'/api/buyCar/addNum',
					data:addnum
				}).then((res)=>{
					this.getbuyCarData();
				})
				
			},
			//点击减少数量
			sub(index){

				let addnum = this.$qs.stringify({					
					buynum : this.list[index].buynum-1,
					id : this.list[index].id
				})
				//let num = this.list[index].buynum+1;
				//console.log(num)
				this.$axios({
					method :'post',
					url:'/api/buyCar/addNum',
					data:addnum
				}).then((res)=>{
					this.getbuyCarData();
				})				
			},
			//勾选
			checkAll(){
				var self = this.aa;
				this.list.forEach(function(item) {
				item.isShow = !self;
				});
			},
			// 删除
			del(index){
				//通过id删除商品
				if(confirm('你确定要删除该商品吗？') == true){
					let buycarId = this.$qs.stringify({
					     id:this.list[index].id
					    
					});
					this.$axios({
					    method: 'post',
					    url:'/api/buyCar/delCar',
					    data:buycarId
					}).then((res)=>{
						console.log(res)
						if(res.data.err === 0){
							location.reload(true)
						}
					    
					  				
					});					
				};

			}

				
		},

		created(){
			this.getbuyCarData();
		}
			
			
				
			

		

	}

</script>

<style lang="less" scoped>
 @import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
 @import url('../../../styls/main.less');

 	.buyCar{
 		margin-top: 44px;
 		.padding(10,10,20,10);
 		background:#fff;
 		.buyCar_contain{
	 		background: #fff;
	 		border:1px solid #ddd;
	 		.shop{
	 			display: flex;
	 			justify-content: space-between;
	 			.padding(8,10,8,10);
	 			.shop_l{
	 				color:#ddd;
	 				.fs(18);
	 				.lh(30);
	 			}
	 			p{
	 				.w(280);
	 				.lh(30);
	 				.h(30);
	 				.fs(14);
	 			}
	 			.shop_r{
	 				color:#ff666b;
	 				.fs(18);
	 				.lh(30);
	 			}
	 		}
	 		.shop_list{
	 			.list_Cont{
		 			.padding(8,10,8,10);
		 			display: flex;
		 			justify-content:space-between;
		 			.list_l{
		 				display: flex;
		 				justify-content: flex-start;
		 				input[type="checkbox"]{
			 				.fs(18);
			 				color:#ddd;
			 				.padding(0,5,0,0);
			 				.lh(74);
			 							
		 				}
		 				.isActive{
		 					color:red;
		 				}
		 				img{
		 					.w(74);
		 					.h(74);
		 					margin-right:5px;
		 					border:none;
		 				}
		 			}	
		 			.list_c{
		 				.w(200);
		 				.title{
		 					.fs(14);
		 					color:#222;
		 					.lh(18);
		 				}
		 				.size{
		 					.fs(12);
		 					color:#999;
		 					.lh(18);
		 				}
		 				.price{
		 					.fs(10);
		 					color:#ff666b;
		 					.lh(18);
		 				}
		 			} 	
		 			.list_r{
	 					.h(20);
	 					.w(20);	
	 					position:relative;
		 				i{
		 					.fs(16);
		 					.lh(20);
		 					
		 				}
		 				.numbox{
		 					position:absolute;
		 					z-index: 99;
		 					.w(70);
		 					top:40px;
		 					right:-10px;
		 					span{
		 						border:1px solid #dcdcdc;
		 						display: inline-block;
		 						.w(20);
		 						.h(20);
		 						.fs(12);
		 						text-align: center;
		 						background: #F5F5F5;
		 					}
		 					.num{
		 						background:#fff;
		 					}
		 				}
		 			}			
	 			}
	 		}
	 		.total{
	 			display: flex;
	 			justify-content: space-between;
	 			position:fixed;
	 			right:0;
	 			left:0;
	 			bottom:0;
	 			.h(45)
	 		}
	 		.total_l{
	 			.h(45);
	 			.w(45);
	 			text-align: center;
	 			.lh(45);
	 			.fs(18);
	 			color:#ddd;
	 		}
	 		.total_c{
	 			.lh(22);
	 			.fs(14);
	 			.w(220);
	 			text-align: left;
	 		}
	 		.total_r{
	 			.w(100);
	 			.lh(45);
	 			.fs(18);
	 			text-align: center;
	 			color:#fff;
	 			background:#ff666b;
	 		}
	 	} 			
	}



</style>