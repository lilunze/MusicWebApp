<template>
	<div class="daily-rank">
		<ul>
			<li v-for="item in list">
				<a :href="'/sound/'+item.id" class="cover"><img :src="item.pic_200"></a>
				<span class="info">
					<p class="sound-name">{{item.name}}</p>
					<p class="user"><img :src="item.user.avatar"><span>{{item.user.name}}</span></p>
					<p class="hot-info"><i class="icon-like"></i><span class="text-like">{{item.like_count}}</span><i class="icon-download"></i><span class="text-download">{{item.download_count}}</span><i class="icon-comment"></i><span class="text-comment">{{item.comment_count}}</span></p>
				</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios';
	import qs from 'qs';
	export default {
		components:
		{
			
		},
		data:function(){
			return {
				list:[]
			}
		},
		mounted:function(){
			var _this=this;
			axios
			.post('http://lilunze.me/api/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/rank/sound-hot?periods=daily&limit=12"}))
			.then(function(res){
				_this.list=res.data.lists.daily;
				console.log(_this.list);
			})
			.catch(function(err){
				console.log(err)
			})
			
		}
	}
</script>
<style scoped>
	.daily-rank
	{
		background: #fff;
		padding: 0.4rem 1rem;
	}
	h1
	{
		font-size: 1rem;
		color: #4f4f4f; 
	}
	ul
	{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li
	{
		margin: 1rem 0;
	}
	.cover
	{
		display: inline-block;
		vertical-align: top;
		width: 6rem;
		height: 6rem;
	}
	.cover img
	{
		width: 100%;
		height: 100%;
		border-radius: 0.4rem;
	}
	.info
	{
		display: inline-block;
		vertical-align: top;
		width: 14rem;
		margin-left: 0.5rem;
	}
	.sound-name
	{
		font-size: 1rem;
		color: #333;
		height: 1.2rem;
		line-height: 1.2rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.user
	{
		margin-top: 0.6rem;
		line-height: 1.8rem;
	}
	.user img
	{
		width: 1.8rem;
		height: 1.8rem;
		border-radius: 50%;
	}
	.user span
	{
		font-size: 0.9rem;
		color: #666;
		vertical-align: top;
		margin-left: 0.4rem;
	}
	.hot-info
	{
		line-height: 1.6rem;
	}
	.hot-info span
	{
		display: inline-block;
		color: #666;
		font-size: 0.8rem;
		vertical-align: top;
		width: 2.8rem;
	}
	.hot-info i
	{
		display: inline-block;
		width: 1rem;
		height: 1rem;
		margin: 0.2rem 0.2rem 0 0;
	}
	.icon-like
	{	
		background: url(/src/images/icon/icon-like.png);
		background-size: 100% 100%;
	}
	.icon-download
	{
		background: url(/src/images/icon/icon-download.png);
		background-size: 100% 100%;
	}
	.icon-comment
	{
		background: url(/src/images/icon/icon-comment.png);
		background-size: 100% 100%;
	}
</style>