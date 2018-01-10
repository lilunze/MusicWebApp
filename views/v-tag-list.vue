<template>
	<ul class="tag-list">
		<li v-for="item in list"><span>{{item}}</span></li>
	</ul>
</template>
<script>
	export default {
		data:function(){
			return {
				list:['推荐','热门','原创','MV','名人']
			}
		}
	}
</script>
<style scoped>
	.tag-list
	{
		width: 100%;
		margin: 0;
		padding: 0;
		text-align: center;
		font-size: 1rem;
	}
	.tag-list li
	{
		display: inline-block;
		width: 20%;
	}
</style>