<template>
	
</template>
<script>
	import axios from 'axios';
	export default {
		data:function(){
			return {
				list:[]
			}
		},
		mounted:function(){
			axios
			.post('http://www.lilunze.me/api/echo/index.php',{url:'http://www.app-echo.com/api/recommend/sound-day?limit=6&page=1'})
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