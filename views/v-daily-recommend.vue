<template>
	<div class="list">
		<h1><i></i>独家推荐<i></i></h1>
		<ul>
			<li v-for="item in list">
				<a :href="'/sound/:'+item.obj_id">
					<p><img :src="item.sound.pic_200"></p>
					<p class="name">{{item.sound.name}}</p>
					<p class="channel"><i class="cd"></i>{{item.sound.channel.name}}</p>
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
		mounted:function(){
			var _this=this;
			axios
			.post('http://www.lilunze.me/api/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/recommend/sound-day?limit=6&page=1"}))
			.then(function(res){
				_this.list=res.data.list;
				console.log(res);
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
		background: #fff;
		margin-top: 1rem;
		padding-bottom: 0.6rem;
	}
	.list h1
	{
		font-size: 1.2rem;
		color: #313131;
		margin: 0;
		padding: 2rem 0 1rem;
		font-weight: normal;
	}
	.list h1 i
	{
		display: inline-block;
		vertical-align: top;
		width: 2rem;
		height: 2rem;
		background: url('/src/images/icon/icon-title.png');
		background-size: 100% 100%;
		margin: 0 1rem;
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
		margin: 0rem 0.4rem 1rem;
		width: 6.6rem;
	}
	.list li img
	{
		width: 100%;
	}
	.list li a
	{
		font-size: 0.8rem;
		text-align: left;
		text-decoration: none;
		color: #4f4f4f;
	}
	.name,.channel
	{
		height: 1.2rem;
		line-height: 1.2rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.channel
	{
		color: #aaa;
	}
	.cd
	{
		display: inline-block;
		width: 0.6rem;
		height: 0.6rem;
		background: url(/src/images/icon/icon-cd.png);
		background-size: 100% 100%;
		margin-right: 0.1rem;
	}
</style>