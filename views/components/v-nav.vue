<template>
	<div class="nav">
		<i class="search" @click="handleSearch"></i>
		<img src="/src/images/logo/logo-b.png" class="logo">
		<a class="play" href="/sound/:538498"></a>
	</div>
</template>
<script>
	export default {
		methods:{
			handleSearch:function(){
				
			}
		}
	}
</script>
<style scoped>
	.nav
	{
		background: #fff;
		width: 100%;
		box-sizing: border-box;
		padding: 0.5rem 0.5rem;
		text-align: center;
	}
	.search
	{
		display: inline-block;
		width: 1.8rem;
		height: 1.8rem;
		background: url(/src/images/icon/icon-search.png);
		background-size: 100% 100%;
		float: left;
	}
	.play
	{
		display: inline-block;
		width: 1.8rem;
		height: 1.8rem;
		background: url(/src/images/icon/icon-play.png);
		background-size: 100% 100%;
		float: right;
	}
	.logo
	{
		width: 4rem;
	}
</style>