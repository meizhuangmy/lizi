<template>
	<div>
		<searchHeader></searchHeader>
		<searchContent></searchContent>
	</div>
</template>

<script>
	
	// 引入组件
	import searchHeader from "./searchHeader.vue";
	import searchContent from "./searchContent.vue";

	export default {
		name:"Search",
		components:{
			searchHeader,
			searchContent
		}
	}

</script>