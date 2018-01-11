<template>
	<div>
		<h1>独家推荐</h1>
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
				console.log(_this.list)
			})
			.catch(function(err){
				console.log(err)
			})
			
		}
	}
</script>
<style scoped>
	
</style>