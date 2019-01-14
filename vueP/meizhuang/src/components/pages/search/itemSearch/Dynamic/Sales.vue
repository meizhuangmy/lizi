<!-- <template>
	
	<div class="partbd">
		<ul class="product_list" id="search_list">
			<li v-for="(item,idx) in result" :key="idx" @click="goto(item)">
				<a href="javascript:;">
					<div class="pic">
						<img :src="'https://images.weserv.nl/?url='+item.pic">
						<div class="sellout" v-show="Show">售完</div>
					</div>
					<div class="info">
						<p class="name">
							{{item.title}}
						</p>
						<p class="price">
							<span class="now">￥{{item.price}}</span><del class="old">￥{{item.marketPrice}}</del>
						</p>
						<p class="sale">
							{{item.salesCount}}已经购买
							<i class="iconfont"></i>
						</p>
					</div>
				</a>
			</li>
		</ul>
	</div>

</template>

<script>
	
	import Qs from "qs";
	
	export default {    
		data(){
			return {
				result:null,
				keyWord:this.$route.query.keyWord,
				SalesChildren:null,
				Show:false
			}
		},
		created(){
			this.$axios({
				headers:{
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				},
				transformRequest: [function(data) {
				      data = Qs.stringify(data)
				      return data
				}],
				url:"/api/itemSearch/search",
				method:"post",
				data:{
					page: 1,
					key: this.keyWord,
					cateId: null,
					priceType: 0,
					sort: "salesCount",
					order: null,
					brandId: null
				},
			})
			.then((res)=>{
				this.result = res.data.data;

				// this.result.forEach(item=>{
				// 	if(item.status===2){
				// 		this.Show = true;						
				// 	}
				// })				
			})
		},
		methods:{
			goto(item){
				this.$router.push({path:"/SalesChildren/"+this.id,query:item})
			}
		}
	}

</script>


<style lang="less" scoped>	
	@import url('../../../../../styls/main.less');

	.partbd{
		.mt(84);
		.pg(12);
		overflow: hidden;

		ul {
		    list-style: none;
		    overflow: hidden;

		    li {
			 	overflow: hidden;
			    .mt(10);
			    position: relative;
			    background-color: #fff;
			    .pg(10);

			    a {
				    display: -webkit-box;
				    width: 100%;

				    .pic {
					    .w(80);
					    .h(80);					    
					    .pr(10);
					    position: relative;
					    img {
					    	display: inline-block;
						    .w(80);
						    .h(80);						    
						}
						.sellout{
							.w(50);						    
						    .h(50);
						    .border-radius(40);
							position: absolute;
							top: 0;
							right: 0;
							bottom: 0;
							left: 0;
							margin:auto;							
						    background: rgba(0,0,0,0.5);
						    z-index: 5;
						    color: #fff;
						    text-align: center;
						    .lh(50);
						    .fs(14);

						}
					}

					.info {
					    -webkit-box-flex: 1;

					    .name {
						    .fs(15);
						    .lh(18);
						    .mb(15);
						    .h(35);
						    overflow: hidden;
						}

						.sale {
						    position: relative;
						    border-top: 1px solid #333;						    
						    .mt(5);						    
						    .pt(5);						    
						    .mr(20);


						    i {
							    display: block;							    
							    .w(35);							    
							    .h(35);							    
							    .fs(20);
							    color: #fff;
							    text-align: center;							    
							    .lh(34);
							    overflow: hidden;
							    position: absolute;							    
							    .top(-17);							    
							    .right(-20);
							    z-index: 2;
							    background: #333;							    
							    .border-radius(20);
							}

							.iconfont {
							    font-family: lizi;
							    font-size: 100%;
							    font-weight: 400;
							    -webkit-font-smoothing: antialiased;
							    -moz-osx-font-smoothing: grayscale;
							    font-style: normal;
							    .fs(20);
							}
						}
					}
				}
			}
		}
	}

</style> -->