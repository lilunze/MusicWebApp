<template>
	<div class="list">
		<h1><i></i>独家推荐<i></i></h1>
		<ul>
			<li v-for="item in list">
				<a :href="item.obj_id">
					<p><img :src="item.sound.pic_200"></p>
					<p>{{item.sound.name}}</p>
					<p>{{item.sound.channel.name}}</p>
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