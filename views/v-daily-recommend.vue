<template>
	
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
			axios
			.post('http://www.lilunze.me/api/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/recommend/sound-day?limit=6&page=1"}))
			.then(function(res){
				console.log(res);
			})
			.catch(function(err){
				console.log(err)
			})
			
		}
	}
</script>
<style scoped>
	
</style>