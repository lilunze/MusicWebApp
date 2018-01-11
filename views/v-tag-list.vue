<template>
	<ul class="tag-list">
		<li v-for="(item,index) in list"><span :class="{'active':activeIndex==index}" @click="handleClick(index)">{{item.title}}</span></li>
	</ul>
</template>
<script>
	export default {
		data:function(){
			return {
				activeIndex:0,
				list:
				[
					{
						title:'推荐',
						src:''
					},
					{
						title:'热门',
						src:''
					},
					{
						title:'原创',
						src:''
					},
					{
						title:'MV',
						src:''
					},
					{
						title:'名人',
						src:''
					}
				]
			}
		},
		methods:{
			handleClick:function(index){
				console.log(index)
				this.activeIndex=index;
			}
		}
	}
</script>
<style scoped>
	.tag-list
	{
		width: 100%;
		margin: 0;
		box-sizing: border-box;
		padding: 0.5rem;
		text-align: center;
		font-size: 0;
	}
	.tag-list li
	{
		display: inline-block;
		width: 20%;
		color: #4f4f4f;
	}
	.tag-list li span
	{
		display: inline-block;
		padding: 0.2rem 0.4rem;
		font-size: 1rem;
		border-radius: 4px;
	}
	.tag-list li span.active
	{
		background: #dc5050;
		color: #fff;
	}
</style>