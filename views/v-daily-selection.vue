<template>
	<div class="list">
		<h1><i></i>每日精选<i></i></h1>
		<ul>
			<li v-for="item in list">
				<a :href="item.id">
					<p><img :src="item.pic_200"></p>
					<p>{{item.name}}</p>
					<p>{{item.channel.name}}</p>
					<p><span>{{item.like_count}}</span><span>{{item.share_count}}</span><span>{{item.comment_count}}</span></p>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios';
	import qs from 'qs';
	export default {
		data:function(){
			return {
				list:[]
			}
		},
		mounted:function()
		{
			var _this=this;
			axios
			.post('http://www.lilunze.me/api/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/other/index"}))
			.then(function(res){
				console.log(res)
				_this.list=res.data.hot_recommend;
				console.log(_this.list)
			})
			.catch(function(err){
				console.log(err)
			})
		}
	}
</script>
<style scoped>
	.list
	{
		text-align: center;
	}
	.list h1
	{
		font-size: 1.4rem;
		color: #313131;
	}
	.list h1 i
	{
		display: inline-block;
		vertical-align: top;
		width: 4rem;
		height: 4rem;
		background: url('/src/images/icon/icon-title.png');
		background-size: 100% 100%;
	}
	.list ul
	{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.list li
	{
		display: inline-block;
		vertical-align: top;
		margin: 1rem 0.4rem;
		width: 7rem;
	}
	.list li img
	{
		width: 100%;
	}
</style>