<template>
	<p class="sublist">
		<span>
			<i class="icon-album"></i>
			<p>专辑</p>
		</span>
		<span>
			<i class="icon-list"></i>
			<p>歌单</p>
		</span>
		<span>
			<i class="icon-fm"></i>
			<p>频道</p>
		</span>
		<span>
			<i class="icon-channel"></i>
			<p>电台</p>
		</span>
	</p>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	.sublist
	{
		text-align: center;
		font-size: 0;
		background: #fff;
		padding: 1rem 0;
	}
	.sublist span
	{
		display: inline-block;
		width: 2.6rem;
		height: 2.6rem;
		margin: 0 1.4rem;
		font-size: 0;
	}
	.sublist span p
	{
		font-size: 0.8rem;
		line-height: 1.4rem;
	}
	.sublist i
	{
		display: inline-block;
		width: 2.2rem;
		height: 2.2rem;
	}
	.icon-album
	{
		background: url(/src/images/icon/icon-album.png);
		background-size: 100% 100%;
	}
	.icon-fm
	{
		background: url(/src/images/icon/icon-fm.png);
		background-size: 100% 100%;
	}
	.icon-list
	{
		background: url(/src/images/icon/icon-list.png);
		background-size: 100% 100%;
	}
	.icon-channel
	{
		background: url(/src/images/icon/icon-channel.png);
		background-size: 100% 100%;
	}
</style>