<template>
	<div class="list">
		<div class="classify">
			<p>推荐</p>
			<p>群星</p>
			<p>新入驻</p>
			<p>分类</p>
		</div>
		<ul>
			<li v-for="item in list">
				<a :href="item.id">
					<p><img :src="item.avatar_150"></p>
					<p class="name">{{item.name}}</p>
					<p class="channel">{{item.followed_count}} 人关注</p>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import tpl from './tpl.vue';
	import axios from 'axios';
	import qs from 'qs';
	export default {
		components:
		{
			tpl
		},
		data:function(){
			return {
				list:[]
			}
		},
		mounted:function(){
			var _this=this;
			axios
			.post('http://lilunze.me/api/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/famous/famous-user?limit=9"}))
			.then(function(res){
				_this.list=res.data.lists;
				console.log(_this.list);
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
		padding-bottom: 0.6rem;
	}
	.classify
	{
		text-align: center;
		font-size: 0;
		margin-bottom: 1rem;
	}
	.classify p
	{
		display: inline-block;
		width: 10rem;
		height: 4rem;
		color: #fff;
		line-height: 4rem;
		font-size: 1rem;
		border-radius: 0.2rem;
		margin: 0.4rem 0.4rem;
	}
	.classify p:nth-child(1)
	{
		background: -webkit-linear-gradient(left, #ffc9e4, #ff8095);
		background: -o-linear-gradient(left, #ffc9e4, #ff8095);
		background: linear-gradient(to right, #ffc9e4, #ff8095);
	}
	.classify p:nth-child(2)
	{
		background: -webkit-linear-gradient(left, #ffde97, #ffb301);
		background: -o-linear-gradient(left, #ffde97, #ffb301);
		background: linear-gradient(to right, #ffde97, #ffb301);
	}
	.classify p:nth-child(3)
	{
		background: -webkit-linear-gradient(left, #7ff2ff, #34bcff);
		background: -o-linear-gradient(left, #7ff2ff, #34bcff);
		background: linear-gradient(to right, #7ff2ff, #34bcff);
	}
	.classify p:nth-child(4)
	{
		background: -webkit-linear-gradient(left, #e7b7ff, #bd80ff);
		background: -o-linear-gradient(left, #e7b7ff, #bd80ff);
		background: linear-gradient(to right, #e7b7ff, #bd80ff);
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
		height: 6.6rem;
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