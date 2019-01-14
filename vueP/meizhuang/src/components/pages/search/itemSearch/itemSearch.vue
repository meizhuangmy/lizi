<template>
	<div>
		<itemSearchHeader :SearchKeywords="keyWord"></itemSearchHeader> :SearchKeywords="keyWord"
		<itemNavs></itemNavs>		
	</div>
</template>

<script>

	// 引入组件
	import itemSearchHeader from "./itemSearchHeader";
	import itemNavs from "./itemNavs";
	// import Qs from "qs";

	export default {
		name:"itemSearch",		
		data(){
			return {
				keyWord:this.$route.query.keyWord,
				result:null,
				a:100,
			}
		},
		created(){
			// this.$axios({
			// 	headers:{
			// 		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			// 	},
			// 	transformRequest: [function(data) {
			// 	      data = Qs.stringify(data)
			// 	      return data
			// 	}],
			// 	url:"/api/itemSearch/search",
			// 	method:"post",
			// 	data:{
			// 		page: 1,
			// 		key: this.keyWord,
			// 		cateId: null,
			// 		priceType: 0,
			// 		sort: "salesCount",
			// 		order: null,
			// 		brandId: null
			// 	},
			// })
			// .then((res)=>{
			// 	this.result = res;
			// 	// console.log(this.result);
			// })
		},
		components:{
			itemSearchHeader,
			itemNavs,
		}
	}	
</script>