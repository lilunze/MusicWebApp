<template>
	<div>
		<vNav></vNav>
		<tag-list></tag-list>
		<router-view />	
	</div>
	
</template>
<script>
	import vNav from './views/v-nav.vue';
	import tagList from './views/v-tag-list.vue';
	export default {
		components:{
			vNav,
			tagList
		}
	}
</script>