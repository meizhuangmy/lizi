<!-- <template>
	<div>
		<ReuseHeader title="商品详情"></ReuseHeader>

		<div class="Carousel">
			<mt-swipe v-model="autoimg" :auto="autoimg" :showIndicators="false" :speed="500">
			  <mt-swipe-item v-for="(imgs,idx) in imgs" :key="idx"><img :src="'https://images.weserv.nl/?url='+imgs"></mt-swipe-item>
			</mt-swipe>

			<div class="product_name">
				<span>{{result.title}} </span>
				<a href="javascript:;" class="fav_btn" id="fav_btn"><i class="iconfont"></i><em>收藏</em></a>
			</div>
		</div>

		<div class="item_info">
			<div class="line">
				<div class="left">
					<span class="now">￥<b>{{result.price}}</b></span>
				</div>
				<div class="right">
					<p class="sale">
						<span class="red">{{result.salesCount}}</span>人已购买
					</p>
				</div>
			</div>
		</div>

		底部
		<div class="buy_warp">
			<div class="bd">
				<span class="price">￥<b id="s_nowprice">{{result.price}}</b></span>
				<a href="javascript:;" class="kefu">
					<i class="iconfont"></i>
				客服</a>
				<a href="javascript:;" :class="addCart.btn" id="buy_btn" @click="isShow">{{addCart.text}}</a>
			</div>
		</div>

		加入购物车信息
		<transition
			enter-active-class="animated"
			leave-active-class="animated"

			enter-class="fadeOutDown"
			enter-to-class="slideInUp"

			leave-class="slideInUp"
			leave-to-class="fadeOutDown"
		>
		<div class="cart_page pageshow" id="cart_page" v-show="Show">
			<div class="bg" >
				<a href="#" class="iconfont close" @click="hide"></a>
				<ul class="sku_box">
					<li>
					<p class="lbl">
						规格
					</p>
					<div id="spec_list" class="sku_list cle">
						<div>
							<a data-code="s1" href="#" 
								class="havestorage"
								v-for="(List,idx) in List" :key="idx"
								:class="{nostorage:List.storage==0}"
								ref="hsa"
								@click="sfn($event,List)"
							>
								{{List.specification}}
								<i></i>
							</a>
							
						</div>
					</div>
					</li>
				</ul>
				<ul class="sku_num">
					<li>
					<p class="lbl">
						 数量  
						<cite class="storage">（库存<em id="s_storage">{{storage}} </em>件）</cite>
					</p>
					<div class="skunum cle">
						<div id="s_num">
							<span class="num_op minus">
							<i class="iconfont">㑧</i>
							</span><input type="number" min="1" value="1">
							<span class="num_op add"><i class="iconfont">㑦</i></span>
						</div>
					</div>
					</li>
				</ul>
			</div>
		</div>
		</transition>

	</div>
</template>

<script>
	import Vue from "vue"
	import ReuseHeader from "@/components/commons/ReuseHeader"
	import Qs from "qs"
	
	// 引入animate.css
	import 'animate.css';

	import { Swipe, SwipeItem } from 'mint-ui';

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	export default {
		name:"SalesChildren",
		data(){
			return {				
				addCart:{btn:"btn",text:"加入购物车"},
				result:null,
				id:"",
				autoimg:3500,
				imgs:[],
				Show:false,
				skuList:null,
				List:[],
				storage:0,

			}
		},
		components:{
			ReuseHeader
		},
		created(){
			this.result = this.$route.query;
			this.id = this.$route.query.id;
			this.imgs = [this.result.pic,this.result.pic];

			this.$axios({
				headers:{
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				},
				transformRequest: [function(data) {
				      data = Qs.stringify(data)
				      return data
				}],
				url:"/api/itemDetail/itemDetailAjax",
				method:"post",
				data:{
					itemNum:this.id
				},
			})
			.then((res)=>{
				this.skuList = res.data.skuList;
				this.skuList.forEach(item=>{
					
					// 计算商品库存
					this.storage += item.storage;

					// 商品规格
					if(!this.List.includes(item.specification)){
						this.List.push({specification:item.specification,storage:item.storage})
					}	

					// 判断商品是否有货
					if(this.storage<=0){
						this.addCart.btn = "stockout";
						this.addCart.text = "商品已缺货";
					}else{
						this.addCart.btn = "btn";
						this.addCart.text = "加入购物车";
					}					
				})
			});
		},
		methods:{
			isShow(){
				if(this.storage>0){					
					this.Show = true;
				}else{					
					this.Show = false;
				}

			},
			hide(){
				this.Show = false;
			},
			sfn(event,List){
				let e = event.currentTarget;
				if(List.storage>0){
					// this.$refs.hsaclassList.remove("current");
					for(let i=0;i<this.$refs.hsa.length;i++){
						this.$refs.hsa[i].classList.remove("current");
					}
					e.classList.add("current");
				}
			}
		}
	}

</script>

<style lang="less" scoped>
	@import url('../../../../../styls/main.less');
	a{text-decoration: none;}
	div{
		.Carousel{
			position: relative;
			.w(375);
			.h(200);
			.top(44);
			overflow: hidden;
			
			.mint-swipe{
				width: 100%;
				height: 100%;

				.mint-swipe-item{
					width: 100%;
					height: 100%;
					text-align: center;
					.lh(200);

					img{
						width: 100%;
						height: 100%;
					}
				}			
			}

			.product_name{
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 5;
				.padding(5,0,5,0);
				overflow: hidden;
				background: rgba(0,0,0,.3);
	    		color: #fff;
				
				a.fav_btn_on {
				    color: #ff666b;
				}

				span {
				    display: block;			    
				    .mr(70);			    
				    .ml(10);			    
				    .h(38);
				    overflow: hidden;
				}

				a.fav_btn {
				    display: block;
				    position: absolute;			    
				    .right(10);			    
				    .top(4);
				    text-align: center;			    
				    .fs(20);
				    color: #fff;			    
				    .w(40);			    
				    .h(34);			    
				    .lh(20);
				    text-decoration: none;

				    .iconfont {
					    font-family: lizi;
					    font-size: 100%;
					    font-weight: 400;
					    -webkit-font-smoothing: antialiased;
					    -moz-osx-font-smoothing: grayscale;
					    font-style: normal;
					}
					em {
					    display: block;				    
					    .fs(12);
					    font-style: normal;
					    text-decoration: none;
					}
				}
			}
		}

		.item_info {
			.mt(48);
		    background-color: #fff;		    
		    .padding(8,10,8,10);
		    border-bottom: 1px solid #ddd;
		    overflow: hidden;

		    .line {
			    display: -webkit-box;
			    overflow: hidden;

			    .left {
				    -webkit-box-flex: 1;

				    .now{
					    color: #ff666b;

					    b {		
					    	.fs(20);
						}
					}
				}

				.right {				    
				    .w(130);
				    text-align: right;
				    color: #999;

				    .sale {					    
					    .fs(12);					    
					    .lh(30);

					    .red {
						    color: #ff666b;
						}
					}
				}
			}
		}

		.buy_warp {
			position: fixed;
		    bottom: 0;
		    left: 0;
		    right: 0;
		    z-index: 99;
		    width: 100%;

		    .bd {
			    display: -webkit-box;
			    background: #fff;			    
			    .h(45);
			    overflow: hidden;
			    box-shadow: 1px 0 3px rgba(0,0,0,.3);

			    .price {
				    display: block;
				    -webkit-box-flex: 1;
				    color: #ff666b;				    
				    .fs(14);				    
				    .pl(15);				    
				    .lh(45);

				    b {					    
					    .fs(20);
					}
				}
			}

			.kefu {
				display: inline-block;
				overflow: hidden;			    
			    text-align: center;			    
			    .margin(6,15,6,15);
			    .fs(15);					

			    i {
				    
				    display: block;
				    color: #ff666b;
				}

				.iconfont {
				    font-family: lizi;
				    font-size: 100%;
				    font-weight: 400;
				    font-style: normal;
				}
			}

			.btn {
			    display: block;
			    width: 30%;			    			    			    
			    .fs(16);
			    .lh(20);
			    background-color: #ff666b;			    
			    .padding(12,12,13,12);
			    text-align: center;
			    .fs(16);
			    color: #fff;
			}
			.stockout{
				display: block;
			    width: 30%;			    			    			    
			    .fs(16);
			    .lh(20);			    
			    .padding(12,12,13,12);
			    text-align: center;
			    .fs(16);
				background:#000;
				color: #fff;
			}
		}

		/*购物车信息*/
		#cart_page{
			position: fixed;
			left: 0;
			top: 0;
			right: 0;
			.bottom(46);
			z-index: 9999;
	     	background: rgba(0,0,0,.5);
	     	.fs(14);
			color: #444;


			.bg{
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				background:#fff;
				overflow: hidden;
				

				.close {
				    position: absolute;
				    right: 0;
				    top: 0;
				    display: block;				    
				    .w(30);				    
				    .h(30);
				    text-align: center;				    
				    .fs(14);
				    color: #666;				    
				    .lh(30);
				}
				.iconfont {
				    font-family: lizi;
				    font-size: 100%;
				    font-weight: 400;
				    -webkit-font-smoothing: antialiased;
				    -moz-osx-font-smoothing: grayscale;
				    font-style: normal;
				}

				.sku_box {				    
				    border-bottom: 1px solid #eee;
				    .pg(10);
					overflow: hidden;
				    
				    li{	
						overflow: hidden;
						p {						    
						    .mb(10);
						}

						.sku_list {
						    font-size: 0;
						    overflow: hidden;

						    .havestorage {
							    display: inline-block;							    
							    .min-w(40);
							    
							    .padding(5,6,5,6);
							    border: 1px solid #ccc;							    
							    .mr(10);							    
							    .mb(8);
							    color: #666;
							    background-color: #fff;							    
							    .fs(14);
							}

							a.nostorage {
							    background-color: #eee;
							    border-color: #eee;
							    color: #b3b4b7;
							}
							a.current {
							    border-color: #ff666b;
							    background-color: #ff666b;
							    color: #fff;
							}
						}
				    }
				}

				.sku_num{					
					.pg(10);
    				border-bottom: 1px solid #eee;

    				li{
    					overflow: hidden;

    					p {						    
						    .mb(10);
						    .fs(14);

						    .storage{
						    	color: #999;
						    	font-style:normal;
						    }
						}
						.skunum{
							overflow: hidden;

							#s_num {
							    float: right;							    
							    font-size: 0;
							    overflow: hidden;

							    span {
							    	display: inline-block;								    
								    .w(36);
								    border: 1px solid #ccc;
								    background-color: #eee;								    
								    .fs(24);
								    overflow: hidden;								    
								    .lh(28);
								    color: #666;
								    float: left;
								}
								input {
									float: left;
									display: inline-block;									
									.h(30);
									text-align: center;									
									.lh(30);								    
								    .w(34);
								    border: none;
								    border-top: 1px solid #ccc;
								    border-bottom: 1px solid #ccc;								    
								    .fs(14);
								    background-color: #fff;
								}
							}
						}
    				}
				}
			}
		}

	}

</style> -->