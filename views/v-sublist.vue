<template>
	<p class="sublist">
		<span class="icon-album"></span>
		<span class="icon-list"></span>
		<span class="icon-fm"></span>
		<span class="icon-channel"></span>
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
		margin: 0 1rem;
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